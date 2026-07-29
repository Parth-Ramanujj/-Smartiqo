const GAS_URL = "https://script.google.com/macros/s/AKfycbzSTmI2W9J58MOC_fUEQad9_IZ0FlHRE2dklrY-YzAvS99_sF_nEjNMDUkl0pnq7G87/exec";

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path_lower = req.url.toLowerCase();

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
        return res.status(200).json({
          user: {
            id: "user1",
            name: "Admin User",
            email: process.env.AUTH_USERNAME || "info@smartiqo.com",
            role: "admin",
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
        'logged_in=; Path=/; Max-Age=0; SameSite=Lax'
      ]);
      return res.status(200).json({ url: "/Login" });
    }

    let body = req.body || {};
    let email = body.email || "";
    let password = body.password || "";

    const auth_username = process.env.AUTH_USERNAME || "info@smartiqo.com";
    const auth_password = process.env.AUTH_PASSWORD || "Smartiqo@7772";

    let is_valid = false;
    if (email === auth_username && password === auth_password) {
      is_valid = true;
    } else if (email && password) {
      try {
        const resp = await fetch(GAS_URL + "?action=getUsers");
        const data = await resp.json();
        if (data && data.users) {
          const user = data.users.find(u => String(u.email) === String(email) && String(u.password) === String(password));
          if (user) is_valid = true;
        }
      } catch (e) {
        console.error("Failed to check auth with GAS", e);
      }
    }

    if (path_lower.includes("precheck")) {
      return res.status(200).json({ code: is_valid ? "OK" : "INVALID" });
    }

    if (path_lower.includes("signin") || path_lower.includes("callback")) {
      if (is_valid) {
        const host = req.headers.host || "localhost:8080";
        const proto = req.headers['x-forwarded-proto'] || "http";
        const absolute_url = `${proto}://${host}/`;

        res.setHeader('Set-Cookie', [
          'session_token=secure_smartiqo_session_token_xyz; Path=/; HttpOnly; SameSite=Lax',
          'next-auth.session-token=secure_smartiqo_session_token_xyz; Path=/; HttpOnly; SameSite=Lax',
          'logged_in=yes; Path=/; SameSite=Lax'
        ]);
        return res.status(200).json({ url: absolute_url });
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    }

    return res.status(404).json({ error: "Not Found" });
  }
}
