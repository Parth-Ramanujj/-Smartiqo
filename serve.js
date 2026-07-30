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
  return !!req.cookies?.session_token
}

function isAssetPath(p) {
  if (["/_next/", "/assets/", "/icon/", "/Image/", "/image/", "/uploads/"].some(pre => p.startsWith(pre))) return true
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

app.all(/^\/api\//, async (req, res) => {
  try {
    const fallbackHandler = require('./api/fallback.js');
    await fallbackHandler(req, res);
  } catch (err) {
    console.error("Local API Error:", err);
    res.status(500).json({ error: true, message: err.message, stack: err.stack });
  }
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

