// Test script to debug cart sync issue
const https = require("https");
const fs = require("fs");
const path = require("path");

// Load config
const CONFIG_FILE = path.join(__dirname, "config.json");
const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
const GOOGLE_SHEET_URL = config.googleSheetUrl;

console.log("Testing cart sync to Google Sheets...");
console.log("Google Sheet URL:", GOOGLE_SHEET_URL);

// Test payload - simulating what custom-cart-sync.js sends
const testPayload = {
  orderId: "TEST-" + Date.now(),
  date: new Date().toISOString(),
  productId: "PROD-TEST-123",
  orderName: "Test Order",
  customName: "Test Custom Panel",
  panelName: "Test Panel (Panel: Glass | Material: Premium)",
  panel: "Glass Panel",
  material: "Premium Material",
  size: "4 Module",
  technology: "Touch",
  colors: "White, Black",
  accessories: "Modular Box, Screws",
  qty: "1",
  quantity: "1",
  unitPrice: "₹ 500.00",
  price: 500,
  priceFormatted: "₹ 500.00",
  savings: "₹ 0.00",
  imagePreview: "Preview Generated (Base64 stripped)",
  preview: "Test Panel Preview",
  flowPdf: "PDF Generated (Base64 stripped)",
  pdf: "PDF Generated (Base64 stripped)",
  status: "Add to Cart"
};

console.log("\nTest Payload:");
console.log(JSON.stringify(testPayload, null, 2));

// Send via HTTPS
const payloadStr = JSON.stringify(testPayload);
const parsed = new URL(GOOGLE_SHEET_URL);

const options = {
  hostname: parsed.hostname,
  port: 443,
  path: parsed.pathname + parsed.search,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payloadStr)
  }
};

console.log("\nSending request to Google Apps Script...");

const req = https.request(options, (res) => {
  console.log(`\nResponse Status: ${res.statusCode}`);
  console.log("Response Headers:", res.headers);

  if (res.statusCode === 302 || res.statusCode === 301) {
    console.log("\n✅ SUCCESS: Google Apps Script accepted data (302 redirect)");
    console.log("Redirect Location:", res.headers.location);
  }

  let body = "";
  res.on("data", (chunk) => { body += chunk; });
  res.on("end", () => {
    console.log("\nResponse Body:");
    console.log(body);
    
    try {
      const jsonBody = JSON.parse(body);
      console.log("\nParsed Response:");
      console.log(JSON.stringify(jsonBody, null, 2));
    } catch (e) {
      console.log("(Response is not JSON)");
    }
  });
});

req.on("error", (err) => {
  console.error("\n❌ ERROR:", err.message);
  console.error(err.stack);
});

req.write(payloadStr);
req.end();
