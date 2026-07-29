const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharedApi = require('./shared-api.js');

const GAS_URL = "https://script.google.com/macros/s/AKfycbzSTmI2W9J58MOC_fUEQad9_IZ0FlHRE2dklrY-YzAvS99_sF_nEjNMDUkl0pnq7G87/exec";

module.exports = async function handler(req, res) {
  try {
    // CORS Headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Vercel serverless environment paths
    const DIR = path.resolve(process.cwd());
    const API_MOCK_DIR = path.join(DIR, "api-static");
    const PAGES_DIR = path.join(DIR, "pages");

    const USERS_FILE = path.join(DIR, "users.json");
    const loadUsers = () => {
      if (fs.existsSync(USERS_FILE)) {
        const data = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
        return Array.isArray(data) ? data : (data.users || []);
      }
      return [];
    };
    const saveUsers = (users) => {
      try { fs.writeFileSync(USERS_FILE, JSON.stringify({users}, null, 2)); }
      catch(e) { console.warn("Vercel FS Read-only: Could not write users.json"); }
    };

    const ORDERS_FILE = path.join(DIR, "orders.json");
    const loadOrders = () => {
      if (fs.existsSync(ORDERS_FILE)) return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf-8"));
      return [];
    };
    const saveOrders = (orders) => {
      try { fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2)); }
      catch(e) { console.warn("Vercel FS Read-only: Could not write orders.json"); }
    };

    const SYNC_LOG_FILE = path.join(DIR, "logs", "cart-sync.log");
    const META_FILE = path.join(DIR, "icon", "dynamic", "My_Icons", "metadata.json");
    const ICON_DIR = path.join(DIR, "icon", "dynamic", "My_Icons");

    const sendFile = (filePath, contentType = "application/json") => {
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: `File not found: ${path.basename(filePath)}` });
      }
      const data = fs.readFileSync(filePath, 'utf8');
      res.setHeader("Content-Type", contentType);
      return res.status(200).send(data);
    };

    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let api_path = parsedUrl.pathname.replace(/^\/+/, '');
    const path_lower = req.url.toLowerCase();

    if (path_lower.includes("/api/auth")) {
      const authHandler = require('./auth.js');
      return authHandler(req, res);
    }

    if (req.method === 'GET') {
      if (api_path === "api/icons") {
        const staticPath = path.join(API_MOCK_DIR, "icons.json");
        return sharedApi.handleIconsGet(req, res, { iconsJsonPath: staticPath, metaFilePath: META_FILE, iconDirPath: ICON_DIR });
      }

      if (path_lower.includes("pricing-constants")) {
        const candidates = [
          path.join(API_MOCK_DIR, "pricing-constants.json"),
          path.join(API_MOCK_DIR, "vdplshop.in_api_pricing-constants.json")
        ];
        for (const c of candidates) {
          if (fs.existsSync(c)) return sendFile(c);
        }
      }

      if (path_lower.includes("subscription/status")) {
        const candidates = [
          path.join(API_MOCK_DIR, "subscription", "status.json"),
          path.join(API_MOCK_DIR, "subscription_status.json"),
          path.join(API_MOCK_DIR, "vdplshop.in_api_subscription_status.json")
        ];
        for (const c of candidates) {
          if (fs.existsSync(c)) return sendFile(c);
        }
      }

      if (path_lower.includes("api/usersettings")) {
        const settings_dir = path.join(API_MOCK_DIR, "userSettings");
        let wildcard = [];
        if (fs.existsSync(settings_dir)) {
          wildcard = fs.readdirSync(settings_dir).filter(f => f.endsWith('.json')).map(f => path.join(settings_dir, f));
        }
        if (wildcard.length === 0 && fs.existsSync(API_MOCK_DIR)) {
          wildcard = fs.readdirSync(API_MOCK_DIR).filter(f => f.startsWith('vdplshop.in_api_userSettings_') && f.endsWith('.json')).map(f => path.join(API_MOCK_DIR, f));
        }
        if (wildcard.length > 0) return sendFile(wildcard[0]);

        const global_settings = path.join(API_MOCK_DIR, "vdplshop.in_api_userSettings___global__.json");
        if (fs.existsSync(global_settings)) return sendFile(global_settings);
      }

      const sub_path = api_path.replace(/^api\//, '');
      const nested_path = path.join(API_MOCK_DIR, `${sub_path}.json`);
      if (fs.existsSync(nested_path)) return sendFile(nested_path);

      const filename = `vdplshop.in_${api_path.replace(/\//g, '_')}.json`;
      const candidates = [
        path.join(API_MOCK_DIR, filename),
        path.join(PAGES_DIR, filename)
      ];
      for (const c of candidates) {
        if (fs.existsSync(c)) return sendFile(c);
      }

      const last_segment = sub_path.split("/").pop();
      const direct_path = path.join(API_MOCK_DIR, `${last_segment}.json`);
      if (fs.existsSync(direct_path)) return sendFile(direct_path);

      if (path_lower.includes("/api/config/google-sheet-url")) {
        const CONFIG_FILE = path.join(DIR, "config.json");
        let url = "";
        if (fs.existsSync(CONFIG_FILE)) {
          try {
            url = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8")).googleSheetUrl || "";
          } catch(e) {}
        }
        return res.status(200).json({ url });
      }

      if (path_lower.includes("/api/admin/users")) {
        return sharedApi.handleUsersGet(req, res, { loadUsers });
      }
      if (path_lower.includes("/api/admin/orders")) {
        return sharedApi.handleOrdersGet(req, res, { loadOrders });
      }
      if (path_lower.includes("/api/orders")) {
        return res.status(200).json({ orders: [], total: 0, page: 1, limit: 10, totalPages: 0 });
      }
      if (path_lower.includes("/api/logs/read")) {
        return sharedApi.handleLogsRead(req, res, { logFilePath: SYNC_LOG_FILE });
      }
      if (path_lower.includes("/api/logs")) {
        return res.status(200).json({ logs: [], total: 0 });
      }
      if (path_lower.includes("/api/auth/precheck")) {
        return res.status(200).json({ exists: false });
      }

      return res.status(200).json({});
    }

    // Handle POST / PUT / PATCH / DELETE
    let body_data = req.body || {};
    if (typeof body_data === 'string') {
      try { body_data = JSON.parse(body_data); } catch (e) { body_data = {}; }
    }

    if (path_lower.includes("/api/config/google-sheet-url")) {
      const CONFIG_FILE = path.join(DIR, "config.json");
      let cfg = {};
      if (fs.existsSync(CONFIG_FILE)) {
        try { cfg = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8")); } catch(e) {}
      }
      cfg.googleSheetUrl = body_data.url;
      try {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(cfg, null, 2));
      } catch (e) {
        console.warn("Vercel FS Read-only: Could not write config.json");
      }
      return res.status(200).json({ success: true });
    }

    if (path_lower.includes("coupons/validate")) {
      return res.status(200).json({ valid: true, discount: 10, message: "Coupon applied" });
    }
    if (path_lower.includes("logs/write")) {
      return sharedApi.handleLogsWrite(req, res, { logFilePath: SYNC_LOG_FILE, body: body_data, userAgent: req.headers["user-agent"] });
    }
    if (path_lower.includes("logs/clear") && req.method === 'DELETE') {
      return sharedApi.handleLogsClear(req, res, { logFilePath: SYNC_LOG_FILE });
    }
    if (path_lower.includes("prices/")) {
      return res.status(200).json({ success: true, ...body_data });
    }
    if (path_lower.includes("admin/orders/")) {
      return res.status(200).json({ success: true, status: "updated" });
    }
    if (path_lower.includes("admin/orders") && req.method === 'POST') {
      // Missing auth cookie handling in serverless, passing guest for now
      return sharedApi.handleOrdersPost(req, res, { loadOrders, saveOrders, body: body_data, email: "guest@smartiqo.com" });
    }
    if (path_lower.includes("admin/users")) {
      if (req.method === 'DELETE') {
        const parsed = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        return sharedApi.handleUsersDelete(req, res, { loadUsers, saveUsers, email: parsed.searchParams.get('email') });
      } else if (req.method === 'POST') {
        return sharedApi.handleUsersPost(req, res, { loadUsers, saveUsers, body: body_data });
      }
    }
    if (path_lower.includes("usersettings/")) {
      return res.status(200).json({ success: true, ...body_data });
    }
    if (path_lower.includes("sendpanelemail")) {
      return res.status(200).json({ success: true, message: "Email sent" });
    }
    if (path_lower.includes("orders") && req.method === "POST") {
      const hash = crypto.createHash('md5').update(JSON.stringify(body_data)).digest('hex').toUpperCase().substring(0, 8);
      return res.status(200).json({ success: true, orderId: "ORD-" + hash, message: "Order created" });
    }
    if (path_lower.includes("notifications") && path_lower.includes("/status")) {
      return res.status(200).json({ success: true });
    }
    if (path_lower.includes("offers") && (path_lower.includes("/impression") || path_lower.includes("/action"))) {
      return res.status(200).json({ success: true });
    }
    if (path_lower.includes("update-company-name")) {
      return res.status(200).json({ success: true, companyName: body_data.companyName || "SmartIQO Technologies" });
    }
    if (path_lower.includes("activity/update") || path_lower.includes("/logs")) {
      return res.status(200).json({ success: true });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Fallback API Error:", err);
    return res.status(500).json({ error: true, message: err.message, stack: err.stack, url: req.url });
  }
}
