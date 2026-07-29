const express = require("express")
const path = require("path")
const fs = require("fs")
const crypto = require("crypto")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const sharedApi = require("./api/shared-api")

const envPaths = [path.join(__dirname, "..", ".env"), path.join(__dirname, ".env")]
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
      const t = line.trim()
      if (t && !t.startsWith("#") && t.includes("=")) {
        const idx = t.indexOf("=")
        process.env[t.slice(0, idx).trim()] = t.slice(idx + 1).trim().replace(/^['"]|['"]$/g, "")
      }
    }
    break
  }
}

const DIR = __dirname
const USERS_FILE = path.join(DIR, "users.json")
const CONFIG_FILE = path.join(DIR, "config.json")

function loadConfig() {
  let cfg = {};
  if (fs.existsSync(CONFIG_FILE)) {
    cfg = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
  }
  return {
    googleSheetUrl: process.env.GOOGLE_SHEET_URL || cfg.googleSheetUrl,
    defaultPort: process.env.PORT || cfg.defaultPort || 8080,
    defaultHost: process.env.HOST || cfg.defaultHost || "0.0.0.0",
    sessionTokenName: cfg.sessionTokenName || "session_token",
    authCookieNames: cfg.authCookieNames || ["session_token", "next-auth.session-token", "logged_in", "auth_email", "auth_role"],
    corsOrigins: cfg.corsOrigins || ["*"]
  };
}
function saveConfig(cfg) { fs.writeFileSync(CONFIG_FILE, JSON.stringify(cfg, null, 2)) }

const appConfig = loadConfig();
if (!appConfig.googleSheetUrl) console.warn("[WARN] Configuration missing: googleSheetUrl");
if (!process.env.AUTH_USERNAME) console.warn("[WARN] Configuration missing: AUTH_USERNAME environment variable. Default will be used.");

const PORT = parseInt(process.argv[2], 10) || parseInt(appConfig.defaultPort, 10);
const HOST = appConfig.defaultHost;
const AUTH_USERNAME = process.env.AUTH_USERNAME || "info@smartiqo.com"
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || "Smartiqo@7772"
const SESSION_TOKEN = "secure_smartiqo_session_token_xyz"

const app = express()

function loadUsers() {
  if (fs.existsSync(USERS_FILE)) {
    const data = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
    return Array.isArray(data) ? data : (data.users || []);
  }
  const defaultUsers = [{name: "Admin User", email: "admin@smartiqo.com", password: "Admin@7772", role: "admin"}]
  fs.writeFileSync(USERS_FILE, JSON.stringify({users: defaultUsers}, null, 2))
  return defaultUsers
}
function saveUsers(users) { fs.writeFileSync(USERS_FILE, JSON.stringify({users: users}, null, 2)) }


app.disable("x-powered-by")

// ── MIDDLEWARE MUST come BEFORE routes so req.body & req.cookies are available ──
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(cookieParser())

app.use((req, res, next) => {
  const start = Date.now()
  res.on("finish", () => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`)
  })
  next()
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
  if (req.method === "OPTIONS") return res.sendStatus(200)
  next()
})

const ORDERS_FILE = path.join(DIR, "orders.json")

function loadOrders() {
  if (fs.existsSync(ORDERS_FILE)) return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf-8"))
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2))
  return []
}
function saveOrders(orders) { fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2)) }

app.post("/api/admin/orders", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  const email = req.cookies.auth_email || req.body.email || "guest@smartiqo.com";
  sharedApi.handleOrdersPost(req, res, { loadOrders, saveOrders, body: req.body, email });
});

app.get("/api/admin/orders", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  sharedApi.handleOrdersGet(req, res, { loadOrders });
});

app.post("/api/admin/users", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  sharedApi.handleUsersPost(req, res, { loadUsers, saveUsers, body: req.body });
})

app.get("/api/admin/users", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  sharedApi.handleUsersGet(req, res, { loadUsers });
})

app.delete("/api/admin/users", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  sharedApi.handleUsersDelete(req, res, { loadUsers, saveUsers, email: req.query.email });
})

app.get("/api/config/google-sheet-url", (req, res) => {
  res.json({url: loadConfig().googleSheetUrl})
})

app.post("/api/config/google-sheet-url", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  const cfg = loadConfig()
  cfg.googleSheetUrl = req.body.url
  saveConfig(cfg)
  res.json({success: true})
})

// ── Logging endpoints ──────────────────────────────────────────────────────
const LOG_DIR = path.join(DIR, "logs")
const SYNC_LOG_FILE = path.join(LOG_DIR, "cart-sync.log")

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, {recursive: true})

app.post("/api/logs/write", (req, res) => {
  sharedApi.handleLogsWrite(req, res, { logFilePath: SYNC_LOG_FILE, body: req.body, userAgent: req.headers["user-agent"] });
})

app.get("/api/logs/read", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  sharedApi.handleLogsRead(req, res, { logFilePath: SYNC_LOG_FILE });
})

app.delete("/api/logs/clear", (req, res) => {
  if (req.cookies.auth_role !== "admin") return res.status(403).json({error: "Admin only"});
  sharedApi.handleLogsClear(req, res, { logFilePath: SYNC_LOG_FILE });
})

// ── Server-side proxy to Google Apps Script (bypasses CORS) ────────────────
const https = require("https")

app.post("/api/sync-to-sheet", (req, res) => {
  const cfg = loadConfig()
  const sheetUrl = cfg.googleSheetUrl
  if (!sheetUrl) {
    return res.status(400).json({error: "Google Sheet URL not configured"})
  }

  const payloadStr = JSON.stringify(req.body)
  const logEntry = {
    timestamp: new Date().toISOString(),
    level: "INFO",
    message: "Proxy forwarding to Google Sheet",
    payload: {orderId: req.body.orderId, panel: req.body.panel, size: req.body.size, qty: req.body.qty},
    details: "URL: " + sheetUrl.substring(0, 60) + "..."
  }
  fs.appendFileSync(SYNC_LOG_FILE, JSON.stringify(logEntry) + "\n", "utf-8")

  // Follow redirects manually (GAS does 302)
  function doPost(url, data, redirectCount) {
    if (redirectCount > 5) {
      return res.status(502).json({error: "Too many redirects"})
    }
    const parsed = new URL(url)
    const options = {
      hostname: parsed.hostname,
      port: 443,
      path: parsed.pathname + parsed.search,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data)
      }
    }

    const proxyReq = https.request(options, (proxyRes) => {
      // GAS processes data on initial POST, then 302-redirects for response
      // The data IS saved when we receive the 302, so treat it as success
      if ((proxyRes.statusCode === 301 || proxyRes.statusCode === 302) && proxyRes.headers.location) {
        const logRedirect = {timestamp: new Date().toISOString(), level: "SUCCESS", message: "Google Sheet processed data (302 redirect received)", payload: {orderId: req.body.orderId}, details: "Redirect to: " + proxyRes.headers.location.substring(0, 80)}
        fs.appendFileSync(SYNC_LOG_FILE, JSON.stringify(logRedirect) + "\n", "utf-8")
        console.log("[SYNC] ✅ Google Sheet processed data (302 received)")
        return res.json({success: true, message: "Data sent to Google Sheet"})
      }

      let body = ""
      proxyRes.on("data", (chunk) => { body += chunk })
      proxyRes.on("end", () => {
        const logSuccess = {timestamp: new Date().toISOString(), level: "SUCCESS", message: "Google Sheet responded: " + proxyRes.statusCode, payload: {orderId: req.body.orderId}, details: body.substring(0, 500)}
        fs.appendFileSync(SYNC_LOG_FILE, JSON.stringify(logSuccess) + "\n", "utf-8")
        console.log(`[SYNC] Google Sheet responded ${proxyRes.statusCode}: ${body.substring(0, 200)}`)

        try {
          const jsonBody = JSON.parse(body)
          res.json(jsonBody)
        } catch(e) {
          res.json({success: true, raw: body.substring(0, 200)})
        }
      })
    })

    proxyReq.on("error", (err) => {
      const logError = {timestamp: new Date().toISOString(), level: "ERROR", message: "Proxy request failed: " + err.message, payload: {orderId: req.body.orderId}, details: err.stack}
      fs.appendFileSync(SYNC_LOG_FILE, JSON.stringify(logError) + "\n", "utf-8")
      console.error("[SYNC] Proxy error:", err.message)
      res.status(502).json({error: err.message})
    })

    proxyReq.write(data)
    proxyReq.end()
  }

  doPost(sheetUrl, payloadStr, 0)
})

const ASSET_PREFIXES = ["/_next/", "/assets/", "/icon/", "/Image/", "/image/", "/favicon.png", "/india.png"]
app.use((req, res, next) => {
  for (const prefix of ASSET_PREFIXES) {
    if (req.path.includes(prefix) && !req.path.startsWith(prefix)) {
      req.url = prefix + req.path.split(prefix)[1]
      break
    }
  }
  next()
})

const ASSET_EXTS = [".js", ".css", ".png", ".jpg", ".jpeg", ".svg", ".ico", ".woff", ".woff2", ".ttf"]

function isAuthenticated(req) {
  return req.cookies?.session_token === SESSION_TOKEN
}

function isAssetPath(p) {
  if (["/_next/", "/assets/", "/icon/", "/Image/", "/image/"].some(pre => p.startsWith(pre))) return true
  if (p === "/favicon.png" || p === "/india.png") return true
  if (p.toLowerCase().includes("custom-cart-sync.js")) return true
  return ASSET_EXTS.some(e => p.toLowerCase().endsWith(e))
}

app.use((req, res, next) => {
  if (req.method !== "GET") return next()
  const p = req.path
  if (isAssetPath(p) || p.startsWith("/api/")) return next()
  if (p.toLowerCase().startsWith("/login")) {
    if (isAuthenticated(req)) {
      res.setHeader("Set-Cookie", [
        `session_token=${SESSION_TOKEN}; Path=/; HttpOnly; SameSite=Lax`,
        "logged_in=yes; Path=/; SameSite=Lax"
      ])
      return res.redirect("/")
    }
    return next()
  }
  if (p.toLowerCase().startsWith("/admin")) return next()
  if (!isAuthenticated(req)) return res.redirect("/Login")
  next()
})

function sendJson(res, status, data) {
  res.status(status).json(data)
}

function serveHtml(res, filePath) {
  let html = fs.readFileSync(filePath, "utf-8")
  if (!html.includes("<base ")) {
    html = html.replace("<head>", '<head><base href="/">')
  }
  res.type("html").send(html)
}

const mimeMap = {
  ".js": "application/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff",
  ".ttf": "font/ttf", ".otf": "font/otf", ".eot": "application/vnd.ms-fontobject",
  ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg",
  ".mp4": "video/mp4", ".webm": "video/webm", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif",
  ".webp": "image/webp", ".ico": "image/x-icon", ".pdf": "application/pdf"
}

const ICON_DIR = path.join(DIR, "icon", "dynamic", "My_Icons")
const META_FILE = path.join(ICON_DIR, "metadata.json")

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => { fs.mkdirSync(ICON_DIR, { recursive: true }); cb(null, ICON_DIR) },
    filename: (req, file, cb) => {
      const ext = [".svg", ".png", ".jpg", ".jpeg"].includes(path.extname(file.originalname).toLowerCase())
        ? path.extname(file.originalname).toLowerCase() : ".svg"
      cb(null, `custom_${crypto.randomUUID().slice(0, 8)}${ext}`)
    }
  })
}).single("icon")

app.post("/api/icons/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err || !req.file) return sendJson(res, 400, { error: err ? err.message : "No file uploaded" })
    const category = req.body.category || "Decorative lights"
    const cleanName = path.basename(req.file.originalname, path.extname(req.file.originalname))
      .replace(/[_-]/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    const newId = crypto.randomUUID()
    const fileName = req.file.filename
    let metadata = {}
    if (fs.existsSync(META_FILE)) {
      try { metadata = JSON.parse(fs.readFileSync(META_FILE, "utf-8")) } catch (e) { /* skip */ }
    }
    metadata[fileName] = { id: newId, name: cleanName, category }
    fs.mkdirSync(path.dirname(META_FILE), { recursive: true })
    fs.writeFileSync(META_FILE, JSON.stringify(metadata, null, 2))
    const iconUrl = `/icon/dynamic/My_Icons/${fileName}`
    sendJson(res, 200, { id: newId, category, url: iconUrl, name: cleanName, imageUrl: iconUrl })
  })
})

app.delete("/api/icons/upload", (req, res) => {
  const iconId = req.query.id
  if (iconId && fs.existsSync(META_FILE)) {
    try {
      const metadata = JSON.parse(fs.readFileSync(META_FILE, "utf-8"))
      let foundFile = null
      for (const [fn, info] of Object.entries(metadata)) {
        if (info.id === iconId) { foundFile = fn; break }
      }
      if (foundFile) {
        delete metadata[foundFile]
        fs.writeFileSync(META_FILE, JSON.stringify(metadata, null, 2))
        const fp = path.join(ICON_DIR, foundFile)
        if (fs.existsSync(fp)) fs.unlinkSync(fp)
      }
    } catch (e) { /* skip */ }
  }
  sendJson(res, 200, { success: true })
})

function resolveApiJson(apiPath) {
  const nested = path.join(DIR, "api-static", apiPath + ".json")
  if (fs.existsSync(nested)) return nested
  const flatName = `vdplshop.in_api_${apiPath.replace(/\//g, "_")}.json`
  for (const dir of [path.join(DIR, "api-static"), path.join(DIR, "pages")]) {
    const fp = path.join(dir, flatName)
    if (fs.existsSync(fp)) return fp
  }
  const last = apiPath.split("/").pop()
  const direct = path.join(DIR, "api-static", last + ".json")
  if (fs.existsSync(direct)) return direct
  if (apiPath.toLowerCase().includes("usersettings")) {
    for (const dir of [path.join(DIR, "api-static"), path.join(DIR, "pages")]) {
      if (fs.existsSync(dir)) {
        const match = fs.readdirSync(dir).find(f => f.includes("vdplshop.in_api_userSettings_") && f.endsWith(".json"))
        if (match) return path.join(dir, match)
      }
    }
  }
  return null
}

function findUser(email, password) {
  // Check users.json first
  const users = loadUsers()
  const found = users.find(u => u.email === email && u.password === password)
  if (found) return found
  // Fallback to hardcoded env credentials
  if (email === AUTH_USERNAME && password === AUTH_PASSWORD) {
    return { name: "Admin", email: AUTH_USERNAME, role: "admin" }
  }
  return null
}

function handleAuthPost(req, res, body) {
  const p = req.originalUrl.toLowerCase()
  if (p.includes("/api/auth/precheck")) {
    const email = body.email
    const password = body.password
    const user = findUser(email, password)
    return sendJson(res, 200, { code: user ? "OK" : "INVALID" })
  }
  if (p.includes("/api/auth/signin") || p.includes("/api/auth/callback")) {
    let email = body.email, password = body.password
    const user = findUser(email, password)
    if (user) {
      const host = req.get("Host") || `localhost:${PORT}`
      const proto = req.get("X-Forwarded-Proto") === "https" ? "https" : "http"
      // Determine redirect URL: use callbackUrl from body, default to userDashboard
      let callbackUrl = body.callbackUrl || `${proto}://${host}/`
      // Make sure callbackUrl is absolute
      if (callbackUrl && !callbackUrl.startsWith("http")) {
        callbackUrl = `${proto}://${host}${callbackUrl.startsWith('/') ? '' : '/'}${callbackUrl}`
      }
      res.setHeader("Set-Cookie", [
        `session_token=${SESSION_TOKEN}; Path=/; HttpOnly; SameSite=Lax`,
        `next-auth.session-token=${SESSION_TOKEN}; Path=/; HttpOnly; SameSite=Lax`,
        `logged_in=yes; Path=/; SameSite=Lax`,
        `auth_email=${user.email}; Path=/; SameSite=Lax`,
        `auth_role=${user.role || "user"}; Path=/; SameSite=Lax`
      ])
      // next-auth client checks d.ok === true to trigger redirect
      return sendJson(res, 200, { ok: true, url: callbackUrl, error: null })
    }
    // Return 200 with ok:false so next-auth client shows error (not a network error)
    return sendJson(res, 200, { ok: false, error: "CredentialsSignin", url: null })
  }
  if (p.includes("/api/auth/signout") || p.includes("/api/auth/logout")) {
    const clear = "; Path=/; Max-Age=0; HttpOnly; SameSite=Lax"
    res.setHeader("Set-Cookie", [
      `session_token=${clear}`, `next-auth.session-token=${clear}`,
      "logged_in=; Path=/; Max-Age=0; SameSite=Lax"
    ])
    return sendJson(res, 200, { url: "/Login" })
  }
  return false
}

function handleApiBody(req, res, body) {
  const p = req.originalUrl.toLowerCase()
  const method = req.method
  if (p.includes("coupons/validate")) return sendJson(res, 200, { valid: true, discount: 10, message: "Coupon applied" })
  if ((method === "PUT" || method === "PATCH") && p.includes("prices/")) return sendJson(res, 200, { success: true, ...body })
  if ((method === "PUT" || method === "PATCH") && p.includes("admin/orders/")) return sendJson(res, 200, { success: true, status: "updated" })
  if ((method === "PUT" || method === "PATCH") && p.includes("usersettings/")) return sendJson(res, 200, { success: true, ...body })
  if (p.includes("sendpanelemail") || p.includes("sendpanel")) return sendJson(res, 200, { success: true, message: "Email sent" })
  if (p.includes("orders") && method === "POST") {
    const orderId = "ORD-" + crypto.createHash("md5").update(JSON.stringify(body)).digest("hex").slice(0, 8)
    return sendJson(res, 200, { success: true, orderId, message: "Order created" })
  }
  if (p.includes("notifications") && p.includes("/status")) return sendJson(res, 200, { success: true })
  if (p.includes("offers") && (p.includes("/impression") || p.includes("/action"))) return sendJson(res, 200, { success: true })
  if (p.includes("update-company-name")) return sendJson(res, 200, { success: true, companyName: body.companyName || "" })
  if (p.includes("activity/update") || p.includes("/logs")) return sendJson(res, 200, { success: true })
  return sendJson(res, 200, { success: true })
}

function handleAuthGet(req, res) {
  const p = req.originalUrl.toLowerCase()
  if (p.includes("/api/auth/providers")) {
    return sendJson(res, 200, {
      credentials: {
        id: "credentials", name: "Credentials", type: "credentials",
        signinUrl: "/api/auth/signin/credentials",
        callbackUrl: "/api/auth/callback/credentials"
      }
    })
  }
  if (p.includes("/api/auth/csrf")) return sendJson(res, 200, { csrfToken: "smartiqo_secure_csrf_token" })
  if (p.includes("/api/auth/session")) {
    if (isAuthenticated(req)) {
      const authRole = req.cookies.auth_role || "user"
      const authEmail = req.cookies.auth_email || AUTH_USERNAME
      return sendJson(res, 200, {
        user: {
          id: "user1", name: "User", email: authEmail,
          role: authRole, isPremium: true, parentUserId: null
        },
        expires: "2026-12-31T23:59:59.999Z"
      })
    }
    return sendJson(res, 200, {})
  }
  return false
}

app.all(/^\/api\//, (req, res) => {
  const body = req.body || {}
  const method = req.method

  if (method === "POST") {
    const result = handleAuthPost(req, res, body)
    if (result !== false) return
  }

  if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    handleApiBody(req, res, body)
    return
  }

  if (method === "GET") {
    const result = handleAuthGet(req, res)
    if (result !== false) return
    if (req.path === "/api/icons") {
      const staticPath = path.join(DIR, "api-static", "icons.json");
      return sharedApi.handleIconsGet(req, res, { 
        iconsJsonPath: staticPath, 
        metaFilePath: META_FILE, 
        iconDirPath: ICON_DIR 
      });
    }
    const jsonFile = resolveApiJson(req.path.replace(/^\/api\//, ""))
    if (jsonFile) {
      const ext = path.extname(jsonFile).toLowerCase()
      if (mimeMap[ext]) res.type(mimeMap[ext])
      return res.sendFile(jsonFile)
    }
    const p = req.originalUrl.toLowerCase()
    if (p.includes("/api/orders")) return sendJson(res, 200, { orders: [], total: 0, page: 1, limit: 10 })
    if (p.includes("/api/logs")) return sendJson(res, 200, { logs: [], total: 0 })
    if (p.includes("/api/auth/precheck")) return sendJson(res, 200, { exists: false })
    if (p.includes("/api/register")) return sendJson(res, 200, { success: true, message: "Registration mock" })
    if (p.includes("/api/sendpanelemail") || p.includes("/api/sendpanel")) return sendJson(res, 200, { success: true, message: "Email sent (mock)" })
    if (p.includes("/api/user/update-company-name")) return sendJson(res, 200, { success: true })
    return sendJson(res, 200, {})
  }
  sendJson(res, 405, { error: "Method not allowed" })
})

app.get("/_next/image", (req, res) => {
  const targetUrl = req.query.url
  if (!targetUrl) return sendJson(res, 400, { error: "Missing url parameter" })
  const clean = path.join(DIR, decodeURIComponent(targetUrl).replace(/^\//, ""))
  if (fs.existsSync(clean)) {
    const ext = path.extname(clean).toLowerCase()
    if (mimeMap[ext]) res.type(mimeMap[ext])
    return res.sendFile(clean)
  }
  res.status(404).send("Image not found")
})


app.get("/admin", (req, res) => {
  const adminPath = path.join(DIR, "admin.html")
  if (fs.existsSync(adminPath)) return res.sendFile(adminPath)
  res.status(404).send("Admin dashboard not found")
})

app.use((req, res, next) => {
  if (req.method !== "GET") return next()
  const filePath = path.join(DIR, req.path)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) return next()
  if (req.path.split("/").pop().includes(".")) return next()
  const routeKey = req.path.replace(/^\//, "").replace(/\//g, "_")
  for (const candidate of [
    path.join(DIR, "pages", `vdplshop.in_${routeKey}.html`),
    path.join(DIR, "pages", `vdplshop.in_${routeKey.toLowerCase()}.html`)
  ]) {
    if (fs.existsSync(candidate)) return serveHtml(res, candidate)
  }
  const indexPath = path.join(DIR, "index.html")
  if (fs.existsSync(indexPath)) return serveHtml(res, indexPath)
  next()
})

app.use(express.static(DIR, {
  setHeaders: (res, filePath) => {
    const ext = path.extname(filePath).toLowerCase()
    if (mimeMap[ext]) res.setHeader("Content-Type", mimeMap[ext])
  }
}))

app.use((req, res) => { res.status(404).type("text").send("Not found") })

app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] [ERROR]`, err.stack || err.message)
  res.status(500).json({ error: true, message: err.message || "Internal Server Error", details: err.stack || {} })
})

const server = app.listen(PORT, HOST, () => {
  console.log(`[${new Date().toISOString()}] [INFO] Serving at http://${HOST}:${PORT}`)
  console.log(`[${new Date().toISOString()}] [INFO] Open http://localhost:${PORT}`)
  console.log("[INFO] Press Ctrl+C to stop")
})

const shutdown = () => {
  console.log(`\n[${new Date().toISOString()}] [INFO] Shutting down...`)
  server.close(() => process.exit(0))
}
process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)

