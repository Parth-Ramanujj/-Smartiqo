/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║          SmartiQo – Google Apps Script for Panel Order Tracking             ║
 * ║  Paste this entire file into: Google Sheet → Extensions → Apps Script       ║
 * ║  Then click: Deploy → New deployment → Web app → Execute as Me →           ║
 * ║  Anyone can access → Deploy → Copy the web app URL                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * SHEET STRUCTURE (auto-created on first request):
 *  Sheet 1: "Orders"                  — Full cart items (Cart ID, Product ID, Custom Name, Preview Image, PDF, Qty, Price, Savings, Steps 1-8)
 *  Sheet 2: "Step Configurator Logs"  — Live user journey through Steps 1 to 8 per user
 *  Sheet 3: "User Activity"           — Step-by-step action log
 *  Sheet 4: "Users"                   — Login/logout activity per user
 */

// ─── Sheet Names ───────────────────────────────────────────────────────────────
var SHEET_NAME_ORDERS      = "Orders";
var SHEET_NAME_STEPS       = "Step Configurator Logs";
var SHEET_NAME_ACTIVITY    = "User Activity";
var SHEET_NAME_USERS       = "Users";
var SHEET_NAME_USER_ACCOUNTS = "User Accounts";

// ─── ORDERS sheet columns (My Cart View & Steps 1 to 8 in separate columns) ────
var ORDER_HEADERS = [
  "Date",                       // A (Col 1)
  "Time",                       // B (Col 2)
  "User Email",                 // C (Col 3)
  "User Name",                  // D (Col 4)
  "Cart / Order ID",            // E (Col 5)
  "Product ID",                 // F (Col 6)
  "Custom Product Name",        // G (Col 7)
  "Preview Image",              // H (Col 8)  — Visual panel image / formula
  "PDF Specification",          // I (Col 9)  — Spec PDF link
  "Qty",                        // J (Col 10)
  "Unit Price (₹)",             // K (Col 11)
  "Total Price (₹)",            // L (Col 12)
  "Savings (₹)",                // M (Col 13)
  "Step 1: Panel",              // N (Col 14)
  "Step 2: Material",           // O (Col 15)
  "Step 3: Size",               // P (Col 16)
  "Step 4: Accessories",        // Q (Col 17)
  "Step 5: Icons Count",        // R (Col 18)
  "Step 5: Icon Names",         // S (Col 19)
  "Step 6: Glass Color",        // T (Col 20)
  "Step 6: Border Color",       // U (Col 21)
  "Step 6: Button Color",       // V (Col 22)
  "Step 7: Technology",         // W (Col 23)
  "Step 8: Cart Status",        // X (Col 24)
  "Raw JSON Data"               // Y (Col 25)
];

// ─── STEP CONFIGURATOR LOGS (Steps 1 to 8 Live User Progress) ─────────────────
var STEP_LOG_HEADERS = [
  "Date", "Time", "User Email", "User Name", "Session ID",
  "Step 1: Panel", "Step 2: Material", "Step 3: Size", "Step 4: Accessories",
  "Step 5: Icons", "Step 6: Color", "Step 7: Technology", "Step 8: Cart Status", "Estimated Price (₹)"
];

// ─── USER ACTIVITY sheet columns ───────────────────────────────────────────────
var ACTIVITY_HEADERS = [
  "Date", "Time", "Session ID", "User Email", "Step Name", "Selection", "Details", "Action"
];

// ─── USERS sheet columns ────────────────────────────────────────────────────────
var USER_HEADERS = [
  "Date", "Time", "User Email", "User Name", "Action", "Session ID"
];

// ─── USER ACCOUNTS sheet columns ────────────────────────────────────────────────
var USER_ACCOUNTS_HEADERS = [
  "ID", "Name", "Email", "Role", "Password"
];

// ══════════════════════════════════════════════════════════════════════════════════
// MAIN ENTRY POINTS
// ══════════════════════════════════════════════════════════════════════════════════

function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || "getOrders";
  var userEmail = e && e.parameter && e.parameter.email;

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "getUsers") {
      var sheet = getOrCreateSheet(ss, SHEET_NAME_USER_ACCOUNTS, USER_ACCOUNTS_HEADERS);
      var data = sheet.getDataRange().getValues();
      if (data.length <= 1) return jsonResponse({ users: [] });

      var headers = data[0];
      var users = [];
      for (var i = 1; i < data.length; i++) {
        var user = {};
        for (var j = 0; j < headers.length; j++) {
          user[headers[j].toLowerCase()] = String(data[i][j]);
        }
        users.push(user);
      }
      return jsonResponse({ users: users });
    }

    if (action === "getOrders") {
      var sheet = getOrCreateSheet(ss, SHEET_NAME_ORDERS, ORDER_HEADERS);
      var data = sheet.getDataRange().getValues();
      if (data.length <= 1) return jsonResponse([]);

      var headers = data[0];
      var rows = [];
      for (var i = 1; i < data.length; i++) {
        var row = {};
        for (var j = 0; j < headers.length; j++) {
          row[headers[j]] = data[i][j];
        }
        if (!userEmail || row["User Email"] === userEmail) {
          rows.push(row);
        }
      }
      return jsonResponse(rows);
    }

    if (action === "getStepLogs") {
      var sheet = getOrCreateSheet(ss, SHEET_NAME_STEPS, STEP_LOG_HEADERS);
      var data = sheet.getDataRange().getValues();
      if (data.length <= 1) return jsonResponse([]);
      var headers = data[0];
      var rows = [];
      for (var i = 1; i < data.length; i++) {
        var row = {};
        for (var j = 0; j < headers.length; j++) row[headers[j]] = data[i][j];
        if (!userEmail || row["User Email"] === userEmail) rows.push(row);
      }
      return jsonResponse(rows);
    }

    return jsonResponse({ error: "Unknown action: " + action });
  } catch(err) {
    return jsonResponse({ error: err.message });
  }
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var type = body.type || "order";

    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // DELETE ITEM FROM CART (deletes row from Google Sheet)
    if (type === "delete_item" || type === "remove_from_cart" || type === "delete_order") {
      return handleDeleteItem(ss, body);
    }

    // CLEAR ENTIRE CART
    if (type === "clear_cart" || type === "clear_all_cart") {
      return handleClearCart(ss, body);
    }

    if (type === "order" || type === "cart") {
      return handleOrderData(ss, body);
    }

    if (type === "step_config" || type === "config_change") {
      return handleStepConfigLog(ss, body);
    }

    if (type === "activity" || type === "step") {
      handleStepConfigLog(ss, body);
      return handleActivityData(ss, body);
    }

    if (type === "user_login" || type === "user_logout") {
      return handleUserActivity(ss, body);
    }

    if (type === "manage_users") {
      return handleManageUsers(ss, body);
    }

    // Fallback detection
    if (body.orderId || body.panelType || body.cartData || body.panel) {
      return handleOrderData(ss, body);
    }

    if (body.step || body.stepName) {
      return handleActivityData(ss, body);
    }

    return jsonResponse({ success: true, message: "Received type: " + type });
  } catch(err) {
    Logger.log("doPost error: " + err.message);
    return jsonResponse({ success: false, error: err.message });
  }
}

// ══════════════════════════════════════════════════════════════════════════════════
// DELETE ITEM / CLEAR CART HANDLERS
// ══════════════════════════════════════════════════════════════════════════════════

function handleDeleteItem(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_ORDERS, ORDER_HEADERS);

  var orderId     = body.orderId     || body.order_id     || body.id || "";
  var userEmail   = body.userEmail   || body.user_email   || body.email || "";
  var productName = body.customName  || body.productName  || body.orderName || body.itemName || "";

  var data = sheet.getDataRange().getValues();
  var deletedCount = 0;

  for (var i = data.length - 1; i >= 1; i--) {
    var rowOrderId   = String(data[i][4] || ""); // Col E: Cart / Order ID
    var rowUserEmail = String(data[i][2] || ""); // Col C: User Email
    var rowProdName  = String(data[i][6] || ""); // Col G: Custom Product Name

    var isMatch = false;
    if (orderId && rowOrderId === String(orderId)) {
      isMatch = true;
    } else if (userEmail && productName && rowUserEmail === String(userEmail) && rowProdName === String(productName)) {
      isMatch = true;
    }

    if (isMatch) {
      sheet.deleteRow(i + 1);
      deletedCount++;
      Logger.log("Deleted row " + (i + 1) + " for orderId: " + orderId + " (" + productName + ")");
    }
  }

  return jsonResponse({ success: true, deletedCount: deletedCount, orderId: orderId });
}

function handleClearCart(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_ORDERS, ORDER_HEADERS);
  var userEmail = body.userEmail || body.user_email || body.email || "";

  var data = sheet.getDataRange().getValues();
  var deletedCount = 0;

  for (var i = data.length - 1; i >= 1; i--) {
    var rowUserEmail = String(data[i][2] || ""); // Col C: User Email
    var rowStatus    = String(data[i][23] || ""); // Col X: Step 8 / Cart Status

    if (!userEmail || rowUserEmail === String(userEmail)) {
      if (rowStatus.indexOf("Cart") !== -1 || rowStatus.indexOf("Configuring") !== -1) {
        sheet.deleteRow(i + 1);
        deletedCount++;
      }
    }
  }

  return jsonResponse({ success: true, deletedCount: deletedCount, userEmail: userEmail });
}

// ══════════════════════════════════════════════════════════════════════════════════
// ORDER HANDLER (My Cart & Steps 1-8 in Separate Columns with Image/PDF Formulas)
// ══════════════════════════════════════════════════════════════════════════════════

function handleOrderData(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_ORDERS, ORDER_HEADERS);

  var nowObj  = new Date();
  var dateStr = nowObj.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  var timeStr = nowObj.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

  var userEmail   = body.userEmail   || body.user_email   || body.email   || "";
  var userName    = body.userName    || body.user_name    || body.name    || "";
  var cartOrderId = body.orderId     || body.order_id     || ("ORD-" + Date.now());
  var productId   = body.productId   || body.productSequence || body.id || "";
  var productName = body.customName  || body.orderName    || body.itemName || "Custom Switch Panel";

  // Step 1 to 8 Individual Values
  var step1Panel  = body.panel       || body.panelType    || getProp(body, "cartData.panel.item")    || "";
  var step2Mat    = body.material    || body.materialType || getProp(body, "cartData.material.item") || "";
  var step3Size   = body.size        || body.sizeModule   || getProp(body, "cartData.size.item")     || "";
  var step4Acc    = body.accessories || extractAccessories(body) || "";
  var step5Count  = body.iconsCount  || extractIconsCount(body)  || "0";
  var step5Names  = body.iconNames   || extractIconNames(body)   || "";
  var step6Glass  = body.glassColor  || body.panelColor   || extractColorByType(body, ["glass", "panel", "face"])  || "";
  var step6Border = body.frameColor  || body.borderColor  || extractColorByType(body, ["border", "frame", "edge"]) || "";
  var step6Button = body.buttonColor || body.iconColor   || extractColorByType(body, ["button", "icon", "touch"]) || "";
  var step7Tech   = body.technology  || body.techType     || getProp(body, "cartData.technology.item") || "";
  var step8Status = body.status      || (body.isOrderConfirmation ? "Confirmed" : "In Cart");

  var quantity    = body.quantity    || body.qty          || 1;
  var unitPrice   = body.unitPrice   || body.unit_price   || "";
  var totalPrice  = body.totalPrice  || body.priceFormatted || body.price || "";
  var savings     = body.savings     || "₹ 0.00";

  var rawImageUrl = body.imagePreview|| body.preview      || "";
  var rawPdfUrl   = body.flowPdf     || body.pdf          || body.pdfUrl || "";

  var rawJson = "";
  try {
    var lightBody = {};
    for (var k in body) {
      if (k !== "imagePreview" && k !== "preview" && k !== "flowPdf" && k !== "pdf" && k !== "pdfUrl") {
        lightBody[k] = body[k];
      }
    }
    rawJson = JSON.stringify(lightBody);
  } catch(e) { rawJson = ""; }

  if (Array.isArray(step4Acc))   step4Acc   = step4Acc.join(", ");
  if (Array.isArray(step5Names)) step5Names = step5Names.join(", ");

  // Formats for Preview Image and PDF
  var imageCellVal = rawImageUrl;
  if (rawImageUrl.startsWith("http")) {
    imageCellVal = '=IMAGE("' + rawImageUrl + '")';
  } else if (rawImageUrl.startsWith("data:image")) {
    imageCellVal = "Preview Generated (Base64)";
  }

  var pdfCellVal = rawPdfUrl;
  if (rawPdfUrl.startsWith("http")) {
    pdfCellVal = '=HYPERLINK("' + rawPdfUrl + '", "📄 Download Spec PDF")';
  } else if (rawPdfUrl.startsWith("data:application/pdf")) {
    pdfCellVal = "PDF Spec Generated (Data URL)";
  }

  var rowData = [
    dateStr, timeStr, userEmail, userName, cartOrderId, productId, productName,
    imageCellVal, pdfCellVal, quantity, unitPrice, totalPrice, savings,
    step1Panel, step2Mat, step3Size, step4Acc, step5Count, step5Names,
    step6Glass, step6Border, step6Button, step7Tech, step8Status, rawJson
  ];

  var existingRow = findExistingRow(sheet, cartOrderId, productName);
  var targetRowIndex = existingRow > 0 ? existingRow : (sheet.getLastRow() + 1);

  if (existingRow > 0) {
    sheet.getRange(existingRow, 1, 1, rowData.length).setValues([rowData]);
    Logger.log("Updated row " + existingRow + " for order " + cartOrderId);
  } else {
    sheet.appendRow(rowData);
    Logger.log("Appended new row for order " + cartOrderId);
  }

  // Set row height for preview image readability
  try {
    sheet.setRowHeight(targetRowIndex, 50);
  } catch(e) {}

  autoFormatSheet(sheet);
  return jsonResponse({ success: true, orderId: cartOrderId, action: existingRow > 0 ? "updated" : "created" });
}

function handleStepConfigLog(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_STEPS, STEP_LOG_HEADERS);

  var nowObj    = new Date();
  var dateStr   = nowObj.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  var timeStr   = nowObj.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
  var userEmail = body.userEmail   || body.user_email  || body.email || "";
  var userName  = body.userName    || body.user_name   || body.name  || "";
  var sessionId = body.sessionId   || body.session_id  || "";

  var cartData  = body.cartData    || body.details     || {};
  var step1     = body.step1Panel  || getProp(cartData, "panel.item")      || "";
  var step2     = body.step2Mat    || getProp(cartData, "material.item")   || "";
  var step3     = body.step3Size   || getProp(cartData, "size.item")       || "";
  var step4     = body.step4Acc    || extractAccessories({ cartData: cartData }) || "";
  var step5     = body.step5Icons  || extractIconNames({ cartData: cartData })   || "";
  var step6     = body.step6Color  || extractColorByType({ cartData: cartData }, ["glass", "panel", "border"]) || "";
  var step7     = body.step7Tech   || getProp(cartData, "technology.item") || "";
  var step8     = body.step8Status || body.status || "Configuring";
  var price     = body.totalPrice  || body.priceFormatted || "";

  sheet.appendRow([
    dateStr, timeStr, userEmail, userName, sessionId,
    step1, step2, step3, step4, step5, step6, step7, step8, price
  ]);

  autoFormatSheet(sheet);
  return jsonResponse({ success: true });
}

function handleActivityData(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_ACTIVITY, ACTIVITY_HEADERS);

  var nowObj    = new Date();
  var dateStr   = nowObj.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  var timeStr   = nowObj.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
  var sessionId = body.sessionId   || body.session_id  || "";
  var userEmail = body.userEmail   || body.user_email  || body.email || "";
  var stepName  = body.stepName    || body.step        || "";
  var selection = body.selection   || body.value       || "";
  var details   = body.details     || "";
  var action    = body.action      || "selected";

  if (typeof details === "object") {
    try { details = JSON.stringify(details); } catch(e) { details = ""; }
  }

  sheet.appendRow([dateStr, timeStr, sessionId, userEmail, stepName, selection, details, action]);
  return jsonResponse({ success: true });
}

function handleUserActivity(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_USERS, USER_HEADERS);

  var nowObj    = new Date();
  var dateStr   = nowObj.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  var timeStr   = nowObj.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
  var userEmail = body.userEmail   || body.user_email  || body.email || "";
  var userName  = body.userName    || body.user_name   || body.name  || "";
  var action    = body.type        || "login";
  var session   = body.sessionId   || body.session     || "";

  sheet.appendRow([dateStr, timeStr, userEmail, userName, action, session]);
  return jsonResponse({ success: true });
}

// ══════════════════════════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════════════════════════

function extractColorByType(body, keywords) {
  try {
    var colors = body.colorsList || getProp(body, "cartData.color") || [];
    if (typeof body.colors === "string" && body.colors) return body.colors;

    if (Array.isArray(colors)) {
      var matched = [];
      for (var i = 0; i < colors.length; i++) {
        var optType = (colors[i].optionType || "").toLowerCase();
        for (var k = 0; k < keywords.length; k++) {
          if (optType.indexOf(keywords[k]) !== -1) {
            var opts = colors[i].options || [];
            matched.push(opts.map(function(o) { return o.item; }).join(", "));
          }
        }
      }
      return matched.join(" | ");
    }
  } catch(e) {}
  return "";
}

function extractAccessories(body) {
  try {
    var cartData = body.cartData || {};
    var list = [...(cartData.accessories || []), ...(cartData.accessories1 || []), ...(cartData.accessories2 || []), ...(cartData.accessories3 || [])];
    return list.flatMap(function(a) { return (a.options || []).map(function(o) { return o.item; }); }).filter(Boolean).join(", ");
  } catch(e) { return ""; }
}

function extractIconsCount(body) {
  try {
    var dropped = body.dropped || getProp(body, "cartData.dropped") || [];
    return Array.isArray(dropped) ? String(dropped.length) : "0";
  } catch(e) { return "0"; }
}

function extractIconNames(body) {
  try {
    var dropped = body.dropped || getProp(body, "cartData.dropped") || [];
    if (Array.isArray(dropped)) {
      return dropped.map(function(ic) { return ic.title || ic.name || ic.id || "Icon"; }).join(", ");
    }
  } catch(e) { return ""; }
}

function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1976d2");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    for (var i = 1; i <= headers.length; i++) {
      sheet.setColumnWidth(i, 160);
    }
    Logger.log("Created sheet: " + name);
  } else {
    var currentHeader = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    if (currentHeader[0] !== headers[0] || currentHeader.length < headers.length) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#1976d2").setFontColor("#ffffff");
    }
  }
  return sheet;
}

function findExistingRow(sheet, cartOrderId, productName) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][4]) === String(cartOrderId) && String(data[i][6]) === String(productName)) {
      return i + 1;
    }
  }
  return -1;
}

function autoFormatSheet(sheet) {
  try {
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      for (var i = 2; i <= lastRow; i++) {
        var range = sheet.getRange(i, 1, 1, sheet.getLastColumn());
        range.setBackground(i % 2 === 0 ? "#f8f9ff" : "#ffffff");
      }
    }
  } catch(e) {}
}

function getProp(obj, path) {
  try {
    return path.split(".").reduce(function(o, k) { return o && o[k]; }, obj) || "";
  } catch(e) { return ""; }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ══════════════════════════════════════════════════════════════════════════════════
// USER MANAGEMENT HANDLER
// ══════════════════════════════════════════════════════════════════════════════════

function handleManageUsers(ss, body) {
  var sheet = getOrCreateSheet(ss, SHEET_NAME_USER_ACCOUNTS, USER_ACCOUNTS_HEADERS);
  var action = body.action;

  if (action === "create") {
    var id = body.id || ("user_" + Math.floor(Math.random() * 100000));
    var name = body.name || "";
    var email = body.email || "";
    var role = body.role || "user";
    var password = body.password || "";
    
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][2] === email) { // Email is column 3
        return jsonResponse({ success: false, error: "User with this email already exists" });
      }
    }
    
    sheet.appendRow([id, name, email, role, password]);
    return jsonResponse({ success: true, message: "User created" });
  }

  if (action === "delete") {
    var email = body.email;
    var data = sheet.getDataRange().getValues();
    var deleted = false;
    for (var i = data.length - 1; i >= 1; i--) {
      if (data[i][2] === email) {
        sheet.deleteRow(i + 1);
        deleted = true;
      }
    }
    return jsonResponse({ success: deleted, message: deleted ? "User deleted" : "User not found" });
  }

  return jsonResponse({ success: false, error: "Invalid action" });
}
