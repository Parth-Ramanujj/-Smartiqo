const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const GAS_URL = "https://script.google.com/macros/s/AKfycbzSTmI2W9J58MOC_fUEQad9_IZ0FlHRE2dklrY-YzAvS99_sF_nEjNMDUkl0pnq7G87/exec";

const sharedApi = require('./shared-api.js');

const SECRET_KEY = process.env.SECRET_KEY || "smartiqo_super_secret_fallback_key_2026";

function signToken(payload) {
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const signature = crypto.createHmac('sha256', SECRET_KEY).update(base64Payload).digest('hex');
  return `${base64Payload}.${signature}`;
}

function verifyToken(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const signature = crypto.createHmac('sha256', SECRET_KEY).update(parts[0]).digest('hex');
  if (signature !== parts[1]) return null;
  try {
    return JSON.parse(Buffer.from(parts[0], 'base64').toString('utf8'));
  } catch (e) {
    return null;
  }
}

function loadUsers(req) {
  const diskLoader = () => {
    const usersFile = path.join(process.cwd(), 'users.json');
    if (fs.existsSync(usersFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
        if (data && Array.isArray(data.users)) return data.users;
      } catch (e) {
        console.warn("Failed to read users.json:", e);
      }
    }
    return [{name: "Admin User", email: "admin@smartiqo.com", password: "Admin@7772", role: "admin"}];
  };

  let diskUsers = [];
  if (sharedApi.getGlobalUsersCache) {
    const cache = sharedApi.getGlobalUsersCache();
    if (cache) diskUsers = cache;
    else {
      diskUsers = diskLoader();
      sharedApi.setGlobalUsersCache(diskUsers);
    }
  } else {
    diskUsers = diskLoader();
  }

  let cookieUsers = [];
  const cookies = (req && req.headers && req.headers.cookie) || '';
  const match = cookies.match(/mock_users=([^;]+)/);
  if (match) {
    try { cookieUsers = JSON.parse(decodeURIComponent(match[1])); } catch(e){}
  }

  const allUsers = [...diskUsers];
  for (const cu of cookieUsers) {
    if (!allUsers.find(u => u.email === cu.email)) allUsers.push(cu);
  }
  return allUsers;
}

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path_lower = (req.url || "").toLowerCase();

  if (req.method === 'GET') {
    if (path_lower.includes("providers")) {
      return res.status(200).json({
        credentials: {
          id: "credentials",
          name: "Credentials",
          type: "credentials",
          signinUrl: "/api/auth/signin/credentials",
          callbackUrl: "/api/auth/callback/credentials",
        }
      });
    }

    if (path_lower.includes("csrf")) {
      return res.status(200).json({ csrfToken: "smartiqo_secure_csrf_token" });
    }

    if (path_lower.includes("session")) {
      const cookies = req.headers.cookie || '';
      
      // Parse all cookies into an object for easier lookup
      const cookieObj = {};
      const cookiePairs = cookies.split(';').map(c => c.trim().split('='));
      for (const [k, v] of cookiePairs) {
        if (k) cookieObj[k] = decodeURIComponent(v || "");
      }

      const tokenStr = cookieObj['session_token'] || cookieObj['next-auth.session-token'] || cookieObj['__Secure-next-auth.session-token'];
      const decodedUser = verifyToken(tokenStr);

      if (decodedUser) {
        // Security Fix: Rely ONLY on the cryptographically signed token for backend identity!
        return res.status(200).json({
          user: {
            id: decodedUser.id || "user1",
            name: decodedUser.name,
            email: decodedUser.email,
            role: decodedUser.role,
            isPremium: true,
            parentUserId: null,
          },
          expires: "2036-07-09T20:20:13.000Z",
        });
      } else {
        return res.status(200).json({});
      }
    }

    return res.status(404).json({ error: "Not Found" });
  }

  if (req.method === 'POST') {
    if (path_lower.includes("signout") || path_lower.includes("logout")) {
      res.setHeader('Set-Cookie', [
        'session_token=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax',
        'next-auth.session-token=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax',
        'logged_in=; Path=/; Max-Age=0; SameSite=Lax',
        'auth_email=; Path=/; Max-Age=0; SameSite=Lax',
        'auth_name=; Path=/; Max-Age=0; SameSite=Lax',
        'auth_role=; Path=/; Max-Age=0; SameSite=Lax'
      ]);
      return res.status(200).json({ url: "/Login" });
    }

    let body = req.body || {};
    // Fallback parsing for various content types
    if (typeof body === 'string') {
      try { 
        body = JSON.parse(body); 
      } catch(e) {
        // Try URL-encoded form data (NextAuth sends application/x-www-form-urlencoded)
        try {
          const parsed = {};
          new URLSearchParams(body).forEach((v, k) => { parsed[k] = v; });
          if (Object.keys(parsed).length > 0) body = parsed;
        } catch(e2) {}
      }
    }
    
    let email = body.email || "";
    let password = body.password || "";

    console.log("[AUTH] Login attempt for:", email);

    // 1. Fetch from JsonBlob permanent storage
    let remoteUsers = [];
    if (sharedApi.fetchRemoteUsers) {
      try {
        const fetched = await sharedApi.fetchRemoteUsers();
        if (fetched) {
          remoteUsers = fetched;
          console.log("[AUTH] Fetched", remoteUsers.length, "users from JsonBlob");
        }
      } catch(e) {
        console.error("[AUTH] JsonBlob fetch error:", e);
      }
    }
    
    // 2. Fallback / Merge with disk/cookie users
    const localUsers = loadUsers(req);
    const users = [...remoteUsers];
    for (const u of localUsers) {
      if (!users.find(ru => ru.email === u.email)) users.push(u);
    }

    console.log("[AUTH] Total users to check:", users.length, "emails:", users.map(u => u.email).join(", "));

    const foundUser = users.find(u => u.email === email && u.password === password);
    let user = foundUser;
    
    // Fallback to hardcoded env credentials
    if (!user && email === (process.env.AUTH_USERNAME || "info@smartiqo.com") && password === (process.env.AUTH_PASSWORD || "Smartiqo@7772")) {
      user = { name: "Admin", email: email, role: "admin" };
    }

    if (path_lower.includes("precheck")) {
      return res.status(200).json({ code: user ? "OK" : "INVALID" });
    }

    if (path_lower.includes("signin") || path_lower.includes("callback")) {
      if (user) {
        const host = req.headers.host || "localhost:8080";
        const proto = req.headers['x-forwarded-proto'] || "http";
        
        let callbackUrl = body.callbackUrl || `${proto}://${host}/`;
        if (callbackUrl && !callbackUrl.startsWith("http")) {
          callbackUrl = `${proto}://${host}${callbackUrl.startsWith('/') ? '' : '/'}${callbackUrl}`;
        }

        // Security Fix: Generate a secure, cryptographically signed token instead of a hardcoded string
        const secureToken = signToken({ 
          email: user.email, 
          name: user.name, 
          role: user.role,
          id: user.id || "user1"
        });

        // We STILL set the plain cookies (logged_in, auth_email, auth_role) because the static React frontend 
        // reads them directly to render the UI. However, the backend /session endpoint will now ignore them.
        res.setHeader('Set-Cookie', [
          `session_token=${secureToken}; Path=/; HttpOnly; SameSite=Lax`,
          `next-auth.session-token=${secureToken}; Path=/; HttpOnly; SameSite=Lax`,
          `__Secure-next-auth.session-token=${secureToken}; Path=/; HttpOnly; SameSite=Lax; Secure`,
          `logged_in=yes; Path=/; SameSite=Lax`,
          `auth_email=${encodeURIComponent(user.email)}; Path=/; SameSite=Lax`,
          `auth_name=${encodeURIComponent(user.name)}; Path=/; SameSite=Lax`,
          `auth_role=${encodeURIComponent(user.role)}; Path=/; SameSite=Lax`
        ]);
        
        // Return `{ ok: true }` so next-auth client triggers redirect
        return res.status(200).json({ ok: true, url: callbackUrl, error: null });
      } else {
        // Return 200 with ok:false instead of 401 so next-auth client shows error instead of network error
        return res.status(200).json({ ok: false, error: "CredentialsSignin", url: null });
      }
    }

    return res.status(404).json({ error: "Not Found" });
  }
}
