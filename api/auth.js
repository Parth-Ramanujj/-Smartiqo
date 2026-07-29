const fs = require('fs');
const path = require('path');
const GAS_URL = "https://script.google.com/macros/s/AKfycbzSTmI2W9J58MOC_fUEQad9_IZ0FlHRE2dklrY-YzAvS99_sF_nEjNMDUkl0pnq7G87/exec";

const sharedApi = require('./shared-api.js');

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
      const is_auth = cookies.includes('session_token=secure_smartiqo_session_token_xyz') || 
                      cookies.includes('next-auth.session-token=secure_smartiqo_session_token_xyz');

      if (is_auth) {
        // Try to get user name and email from cookies
        let email = process.env.AUTH_USERNAME || "info@smartiqo.com";
        let name = "Admin User";
        let role = "admin";
        
        const cookiePairs = cookies.split(';').map(c => c.trim().split('='));
        for (const [k, v] of cookiePairs) {
          if (k === 'auth_email') email = decodeURIComponent(v);
          if (k === 'auth_name') name = decodeURIComponent(v);
          if (k === 'auth_role') role = decodeURIComponent(v);
        }

        return res.status(200).json({
          user: {
            id: "user1",
            name: name,
            email: email,
            role: role,
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
    // Fallback parsing if Vercel didn't parse it (e.g. if content-type missing)
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch(e){}
    }
    
    let email = body.email || "";
    let password = body.password || "";

    const users = loadUsers(req);
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

        res.setHeader('Set-Cookie', [
          'session_token=secure_smartiqo_session_token_xyz; Path=/; HttpOnly; SameSite=Lax',
          'next-auth.session-token=secure_smartiqo_session_token_xyz; Path=/; HttpOnly; SameSite=Lax',
          'logged_in=yes; Path=/; SameSite=Lax',
          `auth_email=${user.email}; Path=/; SameSite=Lax`,
          `auth_name=${encodeURIComponent(user.name || "User")}; Path=/; SameSite=Lax`,
          `auth_role=${user.role || "user"}; Path=/; SameSite=Lax`
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
