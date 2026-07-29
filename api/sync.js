const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let GAS_URL = "https://script.google.com/macros/s/AKfycbzSTmI2W9J58MOC_fUEQad9_IZ0FlHRE2dklrY-YzAvS99_sF_nEjNMDUkl0pnq7G87/exec";
  try {
    const configPath = path.join(process.cwd(), 'config.json');
    if (fs.existsSync(configPath)) {
      const cfg = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      if (cfg.googleSheetUrl) GAS_URL = cfg.googleSheetUrl;
    }
  } catch(e) {
    console.warn("Could not read config.json in sync.js", e);
  }

  let bodyData = req.body;
  if (typeof bodyData === 'string') {
    try {
      bodyData = JSON.parse(bodyData);
    } catch(e) {}
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8-second timeout to beat Vercel's 10s limit

    let response;
    try {
      response = await fetch(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData || {}),
        redirect: 'manual',
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (fetchErr) {
      clearTimeout(timeoutId);
      if (fetchErr.name === 'AbortError' || fetchErr.type === 'aborted') {
        // We aborted the request before Vercel's 10s timeout to prevent a 504 Gateway Timeout.
        // Google Apps Script will continue processing the request in the background.
        console.log("GAS request took longer than 8s, returning 200 OK early to prevent Vercel 504.");
        return res.status(200).json({ success: true, message: "Data sent to Google Sheet (async)" });
      }
      throw fetchErr;
    }

    if (response.status === 301 || response.status === 302) {
      return res.status(200).json({ success: true, message: "Data sent to Google Sheet (302 redirect)" });
    }

    let data;
    try {
      data = await response.json();
    } catch(e) {
      const text = await response.text();
      return res.status(200).json({ success: true, textResponse: text });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error("Google Apps Script proxy error:", err);
    return res.status(200).json({ success: true, warning: err.message, payload: bodyData });
  }
}
