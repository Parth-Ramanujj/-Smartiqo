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
function handleUsersGet(req, res, { loadUsers }) {
  try {
    const users = loadUsers().map(u => ({ name: u.name, email: u.email, role: u.role }));
    return sendJson(res, 200, { users });
  } catch (err) {
    return handleError(res, err);
  }
}

function handleUsersPost(req, res, { loadUsers, saveUsers, body }) {
  try {
    const users = loadUsers();
    if (users.find(u => u.email === body.email)) {
      return sendJson(res, 400, { error: "User exists" });
    }
    users.push({
      name: body.name,
      email: body.email,
      password: body.password,
      role: body.role || "user"
    });
    saveUsers(users);
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
}

function handleUsersDelete(req, res, { loadUsers, saveUsers, email }) {
  try {
    let users = loadUsers();
    users = users.filter(u => u.email !== email);
    saveUsers(users);
    return sendJson(res, 200, { success: true });
  } catch (err) {
    return handleError(res, err);
  }
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
  handleLogsClear
};
