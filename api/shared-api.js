const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Utility for standard error handling (Requirement 14)
function handleError(res, err) {
  console.error("API Error:", err);
  return res.status(500).json({
    error: true,
    message: err.message,
    details: err.stack || {}
  });
}

function sendJson(res, status, data) {
  return res.status(status).json(data);
}

// User Management
let globalUsersCache = null;

function getCachedUsers(loadUsers) {
  if (!globalUsersCache) {
    globalUsersCache = loadUsers();
  }
  return globalUsersCache;
}

async function syncUsersToGithub(users) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return; // Skip if no token is set
  try {
    const repo = process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
      ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
      : "Parth-Ramanujj/-Smartiqo";
      
    const apiUrl = `https://api.github.com/repos/${repo}/contents/users.json`;
    
    // 1. Get current SHA
    const getRes = await fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "User-Agent": "Smartiqo-Vercel-App"
      }
    });
    
    if (!getRes.ok) {
      console.warn("GitHub API Fetch failed:", getRes.statusText);
      return;
    }
    
    const getData = await getRes.json();
    
    // 2. Put new content
    const content = Buffer.from(JSON.stringify({ users }, null, 2)).toString("base64");
    
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "User-Agent": "Smartiqo-Vercel-App",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "chore(users): persist users.json via Vercel Admin API",
        content: content,
        sha: getData.sha || undefined
      })
    });
    
    if (putRes.ok) {
      console.log("Successfully persisted users.json to GitHub!");
    } else {
      console.warn("Failed to PUT users.json to GitHub:", putRes.statusText);
    }
  } catch (err) {
    console.error("Failed to sync users to GitHub:", err);
  }
}

function getCookieUsers(req) {
  let cookieUsers = [];
  const cookies = (req && req.headers && req.headers.cookie) || '';
  const match = cookies.match(/mock_users=([^;]+)/);
  if (match) {
    try { cookieUsers = JSON.parse(decodeURIComponent(match[1])); } catch(e){}
  }
  return cookieUsers;
}

function handleUsersGet(req, res, { loadUsers }) {
  try {
    const diskUsers = getCachedUsers(loadUsers);
    const cookieUsers = getCookieUsers(req);
    
    // Merge, ensuring no duplicates by email
    const allUsers = [...diskUsers];
    for (const cu of cookieUsers) {
      if (!allUsers.find(u => u.email === cu.email)) allUsers.push(cu);
    }
    
    const users = allUsers.map(u => ({ name: u.name, email: u.email, role: u.role }));
    return sendJson(res, 200, { users });
  } catch (err) {
    return handleError(res, err);
  }
}

async function handleUsersPost(req, res, { loadUsers, saveUsers, body }) {
  try {
    const diskUsers = getCachedUsers(loadUsers);
    let cookieUsers = getCookieUsers(req);
    
    const allUsers = [...diskUsers, ...cookieUsers];
    if (allUsers.find(u => u.email === body.email)) {
      return sendJson(res, 400, { error: "User exists" });
    }
    
    const newUser = {
      name: body.name,
      email: body.email,
      password: body.password,
      role: body.role || "user",
      id: "user_" + Date.now()
    };
    cookieUsers.push(newUser);
    
    globalUsersCache = [...diskUsers, ...cookieUsers]; // Update cache for current container
    saveUsers(globalUsersCache); // Try disk (fails on Vercel)
    await syncUsersToGithub(globalUsersCache); // Push to GitHub for persistence
    
    const cookieValue = encodeURIComponent(JSON.stringify(cookieUsers));
    res.setHeader('Set-Cookie', `mock_users=${cookieValue}; Path=/; Max-Age=31536000; SameSite=Lax`);
    
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
}

async function handleUsersDelete(req, res, { loadUsers, saveUsers, email }) {
  try {
    let diskUsers = getCachedUsers(loadUsers);
    let cookieUsers = getCookieUsers(req);
    
    // Delete from both
    diskUsers = diskUsers.filter(u => u.email !== email);
    cookieUsers = cookieUsers.filter(u => u.email !== email);
    
    globalUsersCache = [...diskUsers, ...cookieUsers];
    saveUsers(globalUsersCache);
    await syncUsersToGithub(globalUsersCache); // Push to GitHub for persistence
    
    const cookieValue = encodeURIComponent(JSON.stringify(cookieUsers));
    res.setHeader('Set-Cookie', `mock_users=${cookieValue}; Path=/; Max-Age=31536000; SameSite=Lax`);
    
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
}

function getGlobalUsersCache() {
  return globalUsersCache;
}
function setGlobalUsersCache(users) {
  globalUsersCache = users;
}

// Order Management
function handleOrdersGet(req, res, { loadOrders }) {
  try {
    return sendJson(res, 200, { orders: loadOrders() });
  } catch (err) {
    return handleError(res, err);
  }
}

function handleOrdersPost(req, res, { loadOrders, saveOrders, body, email }) {
  try {
    const orders = loadOrders();
    const payload = body.payload || body;
    
    const orderEntry = {
      id: payload.orderId || "ORD-" + Date.now(),
      userEmail: email,
      timestamp: new Date().toISOString(),
      details: payload
    };
    
    if (payload.status === "Updated" && payload.productId) {
      const idx = orders.findIndex(o => o.details.productId === payload.productId && o.userEmail === email);
      if (idx !== -1) {
        orders[idx] = orderEntry;
      } else {
        orders.push(orderEntry);
      }
    } else {
      orders.push(orderEntry);
    }
    
    saveOrders(orders);
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
}

// Icons Management
function handleIconsGet(req, res, { iconsJsonPath, metaFilePath, iconDirPath }) {
  try {
    let iconsData = [];
    if (fs.existsSync(iconsJsonPath)) {
      try { iconsData = JSON.parse(fs.readFileSync(iconsJsonPath, "utf-8")); } catch (e) { /* skip */ }
    }
    const custom = [];
    if (fs.existsSync(metaFilePath)) {
      try {
        const meta = JSON.parse(fs.readFileSync(metaFilePath, "utf-8"));
        for (const [fn, info] of Object.entries(meta)) {
          if (fs.existsSync(path.join(iconDirPath, fn))) {
            custom.push({
              id: info.id, categoryId: "custom-icons-category",
              categoryLabel: info.category || "Decorative lights",
              name: info.name || "Custom Icon",
              imageUrl: `/icon/dynamic/My_Icons/${fn}`
            });
          }
        }
      } catch (e) { /* skip */ }
    }
    if (custom.length) {
      const byCat = {};
      for (const ic of custom) { (byCat[ic.categoryLabel] = byCat[ic.categoryLabel] || []).push(ic); }
      for (const [label, icons] of Object.entries(byCat)) {
        const existing = iconsData.find(c => c.categoryLabel === label);
        if (existing) {
          const ids = new Set((existing.icons || []).map(i => i.id));
          for (const ic of icons) { if (!ids.has(ic.id)) existing.icons.push(ic); }
        } else {
          iconsData.push({
            categoryId: crypto.createHash("md5").update(label).digest("hex"),
            categoryLabel: label, sortOrder: 99, icons
          });
        }
      }
    }
    return sendJson(res, 200, iconsData);
  } catch (err) {
    return handleError(res, err);
  }
}

// Logging Management
function handleLogsWrite(req, res, { logFilePath, body, userAgent }) {
  try {
    const entry = {
      timestamp: new Date().toISOString(),
      level: body.level || "ERROR",
      message: body.message || "",
      payload: body.payload || null,
      details: body.details || "",
      userAgent: userAgent || ""
    };
    const line = JSON.stringify(entry) + "\n";
    try { fs.appendFileSync(logFilePath, line, "utf-8"); } catch(e) { /* ignore on Vercel */ }
    console.log(`[LOG] ${entry.level}: ${entry.message}`);
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
}

function handleLogsRead(req, res, { logFilePath }) {
  try {
    if (!fs.existsSync(logFilePath)) return sendJson(res, 200, { logs: [] });
    const raw = fs.readFileSync(logFilePath, "utf-8").trim();
    if (!raw) return sendJson(res, 200, { logs: [] });
    const logs = raw.split("\n").map(line => {
      try { return JSON.parse(line); } catch (e) { return { raw: line }; }
    });
    return sendJson(res, 200, { logs: logs.reverse().slice(0, 100) });
  } catch (err) {
    return handleError(res, err);
  }
}

function handleLogsClear(req, res, { logFilePath }) {
  try {
    try { fs.writeFileSync(logFilePath, "", "utf-8"); } catch(e) { /* ignore on Vercel */ }
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
}

module.exports = {
  handleError,
  sendJson,
  handleUsersGet,
  handleUsersPost,
  handleUsersDelete,
  handleOrdersGet,
  handleOrdersPost,
  handleIconsGet,
  handleLogsWrite,
  handleLogsRead,
  handleLogsClear,
  getGlobalUsersCache,
  setGlobalUsersCache
};
