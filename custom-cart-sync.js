(function () {
  const globalStyle = document.createElement("style");
  globalStyle.id = "sc-global-overlay-fix";
  globalStyle.innerHTML = `
        .branding-hydrator-overlay { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
    `;
  if (document.head) {
    document.head.appendChild(globalStyle);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      if (document.head) document.head.appendChild(globalStyle);
    });
  }
})();


const DEFAULT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycby6OlDr8dlMvKV6po8nt7tSBauvCsGxMtQrZZxtFCsuUiJYnzaCZkRna1M1ODamzl2Y/exec";

function getWebAppUrl() {
  return localStorage.getItem("googleSheetUrl") || DEFAULT_WEB_APP_URL;
}

// ─── Get logged-in user info from auth session ──────────────────────────────
let _cachedUser = null;
async function getLoggedInUser() {
  if (_cachedUser) return _cachedUser;
  try {
    const res = await fetch("/api/auth/session");
    if (res.ok) {
      const data = await res.json();
      if (data && data.user && data.user.email) {
        _cachedUser = { email: data.user.email, name: data.user.name || "" };
        return _cachedUser;
      }
    }
  } catch (e) {
    console.warn("[CartSync] Could not fetch user session:", e);
  }
  // Fallback: try reading from cookies (auth_email / auth_name are non-HttpOnly)
  try {
    const cookies = document.cookie.split(";").reduce((acc, c) => {
      const [k, v] = c.trim().split("=");
      if (k) acc[k] = decodeURIComponent(v || "");
      return acc;
    }, {});
    if (cookies.auth_email) {
      _cachedUser = { email: cookies.auth_email, name: cookies.auth_name || "" };
      return _cachedUser;
    }
  } catch (e) {}
  return { email: "", name: "" };
}

function setWebAppUrl(url) {
  localStorage.setItem("googleSheetUrl", url);}

// ─── User-facing notification (toast) ────────────────────────────────────────
function showNotification(message, type) {
  type = type || "info";
  if (typeof window.__scShowToast === "function") {
    window.__scShowToast(message, type);
    return;
  }
  const colors = {
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
  };
  const toast = document.createElement("div");
  toast.style.cssText = [
    "position:fixed",
    "bottom:24px",
    "right:20px",
    "z-index:99999",
    "background:" + (colors[type] || colors.info),
    "color:#fff",
    "padding:12px 20px",
    "border-radius:10px",
    "font-family:Roboto,Helvetica,Arial,sans-serif",
    "font-size:14px",
    "box-shadow:0 4px 20px rgba(0,0,0,0.25)",
    "max-width:340px",
    "word-break:break-word",
    "line-height:1.4",
    "cursor:pointer",
    "transition:opacity 0.4s ease",
    "opacity:1",
  ].join(";");
  toast.textContent = message;
  toast.onclick = function () {
    toast.style.opacity = "0";
    setTimeout(function () {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 400);
  };
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = "0";
    setTimeout(function () {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 400);
  }, 6000);}

// ─── Read cart items from Redux-persist localStorage ──────────────────────────
function getCartItemsFromRedux() {
  try {
    if (window.__store) {
      const state = window.__store.getState();
      if (
        state &&
        state.cartData &&
        Array.isArray(state.cartData.cartItems) &&
        state.cartData.cartItems.length > 0
      ) {
        return state.cartData.cartItems;
      }
    }

    const possibleKeys = ["persist:root", "persist:cartData", "persist:cart"];
    let cartItems = [];

    for (const key of possibleKeys) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw);

      if (parsed.cartData) {
        const cartData =
          typeof parsed.cartData === "string"
            ? JSON.parse(parsed.cartData)
            : parsed.cartData;
        if (cartData.cartItems && cartData.cartItems.length > 0) {
          cartItems = cartData.cartItems;
          break;
        }
      }

      if (parsed.cartItems && parsed.cartItems.length > 0) {
        cartItems = parsed.cartItems;
        break;
      }
    }

    if (cartItems.length === 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || !k.startsWith("persist:")) continue;
        try {
          const val = JSON.parse(localStorage.getItem(k));
          if (
            val &&
            val.cartItems &&
            Array.isArray(val.cartItems) &&
            val.cartItems.length > 0
          ) {
            cartItems = val.cartItems;
            break;
          }
          for (const subKey of Object.keys(val)) {
            try {
              const sub =
                typeof val[subKey] === "string"
                  ? JSON.parse(val[subKey])
                  : val[subKey];
              if (
                sub &&
                sub.cartItems &&
                Array.isArray(sub.cartItems) &&
                sub.cartItems.length > 0
              ) {
                cartItems = sub.cartItems;
                break;
              }
            } catch (e) {}
          }
          if (cartItems.length > 0) break;
        } catch (e) {}
      }
    }

    return cartItems;
  } catch (e) {
    console.error(
      "[CartSync] Failed to read Redux state from localStorage:",
      e,
    );
    return [];
  }}

// ─── Format price in INR ─────────────────────────────────────────────────────
function formatPrice(num) {
  if (typeof num !== "number" || isNaN(num)) return "₹ 0.00";
  return (
    "₹ " +
    num.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );}

// ─── Extract human-readable details string from cart item / design ───────────
function extractProductDetails(itemData) {
  if (!itemData) return "Custom Switch Panel";
  const detailParts = [];
  if (itemData.panel && itemData.panel.item)
    detailParts.push(`Panel: ${itemData.panel.item}`);
  if (itemData.material && itemData.material.item)
    detailParts.push(`Material: ${itemData.material.item}`);
  if (itemData.size && itemData.size.item)
    detailParts.push(`Size: ${itemData.size.item}`);
  if (itemData.technology && itemData.technology.item)
    detailParts.push(`Tech: ${itemData.technology.item}`);
  if (itemData.color && itemData.color.length > 0) {
    const colors = itemData.color
      .flatMap((c) => (c.options || []).map((o) => o.item))
      .filter(Boolean)
      .join(", ");
    if (colors) detailParts.push(`Colors: ${colors}`);
  }
  const accessories = [
    ...(itemData.accessories || []),
    ...(itemData.accessories1 || []),
    ...(itemData.accessories2 || []),
    ...(itemData.accessories3 || []),
  ]
    .flatMap((a) => (a.options || []).map((o) => o.item))
    .filter(Boolean)
    .join(", ");
  if (accessories) detailParts.push(`Accessories: ${accessories}`);

  return detailParts.join(" | ") || "Custom Panel";}

// ─── Capture Image Preview Data URL from page DOM or item screenshot ────────
async function getImagePreviewDataUrl(itemData) {
  if (
    itemData &&
    itemData.screenshotDataUrl &&
    typeof itemData.screenshotDataUrl === "string" &&
    itemData.screenshotDataUrl.startsWith("data:image")
  ) {
    return itemData.screenshotDataUrl;
  }

  const targetNode = document.querySelector(".panel-preview") || document.querySelector(".panel-container") || document.querySelector(".glass-panel-bg")?.parentElement || document.querySelector("canvas")?.parentElement;
  if (!targetNode) return "";

  return new Promise((resolve) => {
    if (typeof window.html2canvas === "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
      script.onload = () => doCapture(targetNode, resolve);
      script.onerror = () => resolve("");
      document.head.appendChild(script);
    } else {
      doCapture(targetNode, resolve);
    }

    function doCapture(node, res) {
      window.html2canvas(node, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        scale: 2
      }).then((canvas) => {
        res(canvas.toDataURL("image/png"));
      }).catch((e) => {
        console.error("html2canvas failed:", e);
        res("");
      });
    }
  });
}

// ─── Intercept the real Quote PDF from the app's Download PDF button ─────────
// The React app uses jsPDF to generate a professional Quote.pdf. We intercept
// the blob when it's created via URL.createObjectURL, upload it to the server,
// and store the URL so the Google Sheets payload gets a link to the real PDF.
let _lastCapturedPdfUrl = null;
let _lastCapturedPdfBlob = null;

(function interceptPdfDownload() {
  const originalCreateObjectURL = URL.createObjectURL;
  URL.createObjectURL = function(blob) {
    const blobUrl = originalCreateObjectURL.call(URL, blob);
    // Detect PDF blobs (the app creates blob URLs for Quote.pdf download)
    if (blob && blob.type === "application/pdf") {
      console.log("[CartSync] 📄 Intercepted PDF blob:", blob.size, "bytes");
      _lastCapturedPdfBlob = blob;
      // Upload the PDF to the server in background
      uploadPdfBlobToServer(blob).then(url => {
        if (url) {
          _lastCapturedPdfUrl = url;
          console.log("[CartSync] ✅ PDF uploaded to server:", url);
          syncQuoteToGoogleSheet(url); // Trigger Google Sheet sync immediately
        }
      });
    }
    return blobUrl;
  };

  // Also intercept <a>.click() downloads to capture the Quote.pdf by filename
  const origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function() {
    if (this.download && this.download.toLowerCase().includes("quote") && this.download.toLowerCase().endsWith(".pdf")) {
      console.log("[CartSync] 📄 Detected Quote.pdf download click");
      // The blob URL is in this.href — fetch it and upload
      if (this.href && this.href.startsWith("blob:")) {
        fetch(this.href).then(r => r.blob()).then(blob => {
          _lastCapturedPdfBlob = blob;
          uploadPdfBlobToServer(blob).then(url => {
            if (url) {
              _lastCapturedPdfUrl = url;
              console.log("[CartSync] ✅ PDF captured from download:", url);
              syncQuoteToGoogleSheet(url); // Trigger Google Sheet sync immediately
            }
          });
        }).catch(e => console.warn("[CartSync] Could not capture download PDF:", e));
      }
    }
    return origClick.call(this);
  };
})();

// Automatically sync the generated Quote configuration to Google Sheets
async function syncQuoteToGoogleSheet(pdfUrl) {
  try {
    const state = window.__store?.getState();
    if (!state || !state.selectionData || !state.selectionData.selectionData) return;
    
    const selState = state.selectionData;
    const totalPrice = selState.totalPrice || 0;
    
    const cartData = {};
    selState.selectionData.forEach(step => {
      if (!step || !step.title) return;
      const t = step.title.toLowerCase();
      if (t.includes("panel")) cartData.panel = step.options?.[0];
      else if (t.includes("material")) cartData.material = step.options?.[0];
      else if (t.includes("size")) cartData.size = step.options?.[0];
      else if (t.includes("accessor")) cartData.accessories = [step]; 
      else if (t.includes("icon")) cartData.icons = [step];
      else if (t.includes("color")) cartData.color = [step];
      else if (t.includes("technol")) cartData.technology = step.options?.[0];
    });

    const quoteItem = {
      id: "QUOTE-" + Math.floor(Math.random() * 90000 + 10000),
      orderName: "Generated Quote",
      customProductName: "Custom Quote",
      quantity: 1,
      totalPrice: totalPrice,
      cartData: cartData,
      dropped: []
    };

    const payload = await buildFullItemPayload(quoteItem, quoteItem.id, false);
    payload.status = "Quote Downloaded"; 
    if (pdfUrl) {
      payload.flowPdf = pdfUrl;
      payload.pdf = pdfUrl;
    }
    
    console.log("[CartSync] Sending Quote to Google Sheet:", payload);
    await sendSinglePayloadToGAS(payload, quoteItem);
    console.log("[CartSync] ✅ Quote synced successfully!");
  } catch (e) {
    console.warn("[CartSync] Failed to sync Quote:", e);
  }
}

async function uploadPdfBlobToServer(blob) {
  try {
    // Convert blob to base64 data URL
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    const res = await fetch("/api/upload-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataUrl, type: "pdf", orderId: "quote_" + Date.now() }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.url) return window.location.origin + data.url;
    }
  } catch (e) {
    console.warn("[CartSync] Failed to upload PDF blob:", e);
  }
  return null;
}

// ─── Fallback: Generate PDF with jsPDF (if app PDF is not captured) ──────────
async function generateFallbackPdfDataUrl(customName, details, orderId, priceStr, dateStr, screenshotDataUrl, user) {
  // Try loading jsPDF dynamically
  if (typeof window.jspdf === "undefined") {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    }).catch(() => null);
  }

  if (typeof window.jspdf === "undefined") {
    console.warn("[CartSync] jsPDF not available for fallback PDF");
    return "";
  }

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentW = pageW - margin * 2;
    let y = 20;

    // Header bar
    doc.setFillColor(0, 122, 82);
    doc.rect(0, 0, pageW, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("SmartiQo - Panel Specification", pageW / 2, 12, { align: "center" });

    y = 28;

    // Order Info Section
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    doc.text("Order ID: " + orderId, margin, y);
    doc.text("Date: " + (dateStr || new Date().toISOString().split("T")[0]), pageW - margin, y, { align: "right" });
    y += 6;

    if (user && user.email) {
      doc.text("Customer: " + (user.name || "N/A") + " (" + user.email + ")", margin, y);
      y += 6;
    }

    doc.text("Product: " + (customName || "Custom Panel"), margin, y);
    y += 6;
    doc.text("Price: " + priceStr, margin, y);
    y += 10;

    // Separator line
    doc.setDrawColor(0, 122, 82);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageW - margin, y);
    y += 8;

    // Panel Screenshot
    if (screenshotDataUrl && screenshotDataUrl.startsWith("data:image")) {
      try {
        const imgFormat = screenshotDataUrl.includes("jpeg") ? "JPEG" : "PNG";
        const imgW = contentW * 0.7;
        const imgH = imgW * 0.6;
        const imgX = margin + (contentW - imgW) / 2;
        
        // Red border around image
        doc.setDrawColor(204, 36, 27);
        doc.setLineWidth(1);
        doc.roundedRect(imgX - 2, y - 2, imgW + 4, imgH + 4, 3, 3, "S");
        
        doc.addImage(screenshotDataUrl, imgFormat, imgX, y, imgW, imgH);
        y += imgH + 12;
      } catch (e) {
        y += 5;
      }
    }

    // Configuration Snapshot
    doc.setFillColor(247, 249, 252);
    doc.setDrawColor(217, 227, 239);
    const configBoxH = 50;
    doc.roundedRect(margin, y, contentW, configBoxH, 4, 4, "FD");
    
    // Green accent bar
    doc.setFillColor(0, 122, 82);
    doc.roundedRect(margin + 3, y + 3, 3, configBoxH - 6, 1.5, 1.5, "F");

    doc.setTextColor(24, 64, 55);
    doc.setFontSize(12);
    doc.text("Configuration Snapshot", margin + 10, y + 10);

    doc.setFontSize(9);
    doc.setTextColor(76, 86, 106);
    const detailLines = details.split(" | ");
    let configY = y + 18;
    detailLines.forEach(line => {
      if (configY < y + configBoxH - 5) {
        doc.text("• " + line.trim(), margin + 10, configY);
        configY += 6;
      }
    });

    y += configBoxH + 10;

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("Generated by SmartiQo Panel Designer", pageW / 2, 285, { align: "center" });

    return doc.output("datauristring");
  } catch (e) {
    console.warn("[CartSync] Fallback PDF generation failed:", e);
    return "";
  }
}

// ─── Build full item payload with all My Cart details ────────────────────────
async function buildFullItemPayload(item, orderId, isOrderConfirmation) {
  const qty = Math.max(1, Math.floor(item.quantity || 1));
  const totalPrice = Number(item.totalPrice) || 0;
  const priceStr = formatPrice(totalPrice);
  const unitPriceStr = formatPrice(totalPrice / qty);

  const droppedCount = Array.isArray(item.dropped) ? item.dropped.length : 0;
  const savings = droppedCount * 100 * qty;

  const productId =
    String(item.productSequence || "").trim() ||
    item.id ||
    "PROD-" + Math.floor(1000 + Math.random() * 9000);
  const orderName = String(item.orderName || "").trim() || "Untitled Order";
  const customName = String(item.customProductName || "").trim() || orderName;

  const cartData = item.cartData || {};
  const panelType = cartData.panel?.item || "";
  const materialType = cartData.material?.item || "";
  const sizeModule = cartData.size?.item || "";
  const techType = cartData.technology?.item || "";

  const colorParts = [];
  if (Array.isArray(cartData.color)) {
    cartData.color.forEach((c) => {
      if (c.options && c.options.length > 0) {
        colorParts.push(
          `${c.optionType}: ${c.options.map((o) => o.item).join(", ")}`,
        );
      }
    });
  }
  const colorsStr = colorParts.join(" | ");

  const accessoriesList = [
    ...(cartData.accessories || []),
    ...(cartData.accessories1 || []),
    ...(cartData.accessories2 || []),
    ...(cartData.accessories3 || []),
  ]
    .flatMap((a) => (a.options || []).map((o) => o.item))
    .filter(Boolean)
    .join(", ");

  const detailsSummary = extractProductDetails(cartData);
  const panelName = `${customName} (${detailsSummary})`;

  const imgPreview = await getImagePreviewDataUrl(item);
  const dateStr = item.createdAt || new Date().toISOString();

  // Get logged-in user info
  const user = await getLoggedInUser();

  // PDF: Use the real Quote PDF intercepted from the app if available
  let flowPdfData = "";
  if (_lastCapturedPdfUrl) {
    flowPdfData = _lastCapturedPdfUrl;
    console.log("[CartSync] Using intercepted real Quote PDF:", flowPdfData);
  } else {
    // Fallback: Generate a professional PDF with jsPDF
    flowPdfData = await generateFallbackPdfDataUrl(
      customName, detailsSummary, orderId, priceStr, dateStr, imgPreview, user
    );
    console.log("[CartSync] Generated fallback PDF");
  }

  return {
    orderId: orderId,
    date: dateStr,
    userEmail: user.email,
    userName: user.name,
    productId: productId,
    orderName: orderName,
    customName: customName,
    panelName: panelName,
    panel: panelType,
    material: materialType,
    size: sizeModule,
    technology: techType,
    colors: colorsStr,
    accessories: accessoriesList,
    qty: String(qty),
    quantity: String(qty),
    unitPrice: unitPriceStr,
    price: totalPrice,
    priceFormatted: priceStr,
    savings: savings > 0 ? formatPrice(savings) : "₹ 0.00",
    imagePreview: imgPreview,
    preview: imgPreview || detailsSummary,
    flowPdf: flowPdfData,
    pdf: flowPdfData,
    status: isOrderConfirmation ? "Confirmed" : "Cart",
  };}

// ─── Log events to local server ─────────────────────────────────────────────
function logSyncEvent(level, message, payload, error) {
  const logBody = {
    level: level || "INFO",
    message: message,
    payload: payload || null,
    details: error && error.stack ? error.stack : (error ? String(error) : ""),
  };

  fetch("/api/logs/write", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(logBody),
  }).catch(function () {});
}

function logErrorToServer(message, payload, error) {
  logSyncEvent("ERROR", message, payload, error);
}

function debugLog(step, data) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    step: step,
    data: data || {}
  };
  
  console.log(`[CartSync Debug] ${step}:`, data);
  
  fetch("/api/logs/write", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ level: "DEBUG", message: "[Frontend Debug] " + step, details: JSON.stringify(data || {}) })
  }).catch(()=>{});
}

// ─── Upload base64 data to server and get back a public URL ─────────────────
async function uploadBase64ToServer(dataUrl, type, orderId) {
  try {
    const res = await fetch("/api/upload-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataUrl, type, orderId }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.url) {
        // Return full URL so Google Sheets can access it
        return window.location.origin + data.url;
      }
    }
  } catch (e) {
    console.warn("[CartSync] Failed to upload " + type + ":", e);
  }
  return null;
}

// ─── Send a SINGLE object payload to Google Apps Script ───────────────────────
async function sendSinglePayloadToGAS(payloadObj, rawItem) {
  const cleanPayload = Object.assign({}, payloadObj);

  // Upload preview image to server and replace base64 with URL
  if (cleanPayload.imagePreview && cleanPayload.imagePreview.startsWith("data:")) {
    const imgUrl = await uploadBase64ToServer(cleanPayload.imagePreview, "image", cleanPayload.orderId);
    cleanPayload.imagePreview = imgUrl || "Preview upload failed";
  }
  if (cleanPayload.preview && cleanPayload.preview.startsWith("data:")) {
    cleanPayload.preview = cleanPayload.imagePreview; // Use the same uploaded URL
  }

  // Upload PDF to server and replace base64 with URL
  if (cleanPayload.flowPdf && cleanPayload.flowPdf.startsWith("data:")) {
    const pdfUrl = await uploadBase64ToServer(cleanPayload.flowPdf, "pdf", cleanPayload.orderId);
    cleanPayload.flowPdf = pdfUrl || "PDF upload failed";
  }
  if (cleanPayload.pdf && cleanPayload.pdf.startsWith("data:")) {
    cleanPayload.pdf = cleanPayload.flowPdf; // Use the same uploaded URL
  }

  console.log(
    "[CartSync] Sending payload via server proxy:",
    cleanPayload.orderId,
    "User:", cleanPayload.userEmail,
  );

  // Save local backup
  try {
    const localOrders = JSON.parse(
      localStorage.getItem("sc_local_orders") || "[]",
    );
    localOrders.push({
      timestamp: new Date().toISOString(),
      payload: cleanPayload,
      rawCartData: rawItem ? rawItem.cartData : null,
      rawDropped: rawItem ? rawItem.dropped : []
    });
    localStorage.setItem("sc_local_orders", JSON.stringify(localOrders));
  } catch (e) {
    console.warn("[CartSync] Could not save local backup:", e);
  }

  // Send through our server-side proxy (bypasses CORS completely)
  return fetch("/api/sync-to-sheet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cleanPayload),
  })
    .then(function (res) {
      if (!res.ok) {
        return res.json().then(function(errData) {
          throw new Error(errData.error || "HTTP " + res.status);
        });
      }
      return res.json();
    })
    .then(function (data) {
      console.log("[CartSync] ✅ Response from Google Sheets:", data);
      logSyncEvent("SUCCESS", "Data synced to Google Sheet", cleanPayload, null);
      return data;
    })
    .catch(function (err) {
      console.error("[CartSync] ❌ Sync failed:", err);
      logSyncEvent("ERROR", "Google Sheet sync error: " + err.message, cleanPayload, err);
      return { error: true, message: err.message };
    });
}

// ─── Main sync function for entire cart (Submit / Confirm / Place Order) ──────
function syncCartToGoogleSheet(isOrderConfirmation = false) {
  debugLog("syncCartToGoogleSheet STARTED", { isOrderConfirmation });
  const cartItems = getCartItemsFromRedux();

  console.log("[CartSync] Found cart items:", cartItems.length);
  debugLog("getCartItemsFromRedux finished", { length: cartItems.length });

  if (cartItems.length === 0) {
    console.warn("[CartSync] No cart items found in Redux state.");
    debugLog("ABORT: No cart items found");
    return Promise.resolve({ empty: true });
  }

  const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
  debugLog("Generated Order ID", { orderId });

  const promises = cartItems.map(async (item) => {
    debugLog("Processing item", { id: item.id });
    const singlePayload = await buildFullItemPayload(
      item,
      orderId,
      isOrderConfirmation,
    );
    debugLog("Built payload", { productId: singlePayload.productId });
    return sendSinglePayloadToGAS(singlePayload, item);
  });

  return Promise.all(promises).then((results) => {
    debugLog("All promises resolved", { results });
    const hasError = results.some((r) => r && r.error);
    if (hasError) {
      return {
        error: true,
        message: "One or more items failed to sync to Google Sheets.",
      };
    }
    return { success: true, count: results.length };
  });}

// ─── Read current customizer state from Redux-persist localStorage ───────────
function getCurrentDesignFromRedux() {
  try {
    if (window.__store) {
      const state = window.__store.getState();
      if (
        state &&
        state.cartData &&
        state.cartData.cartData &&
        state.cartData.cartData.panel
      ) {
        return {
          cartData: state.cartData.cartData,
          quantity: state.cartData.quantity || 1,
          totalPrice: state.cartData.totalPrice || 0,
          droppedItems: state.cartData.droppedItems || [],
        };
      }
    }

    const possibleKeys = ["persist:root", "persist:cartData", "persist:cart"];
    for (const key of possibleKeys) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw);

      let cartData = null;
      if (parsed.cartData) {
        cartData =
          typeof parsed.cartData === "string"
            ? JSON.parse(parsed.cartData)
            : parsed.cartData;
      } else if (parsed.panel) {
        cartData = parsed;
      }

      if (cartData && cartData.panel) {
        let quantity = parsed.quantity || 1;
        if (typeof quantity === "string") quantity = parseInt(quantity, 10);

        let totalPrice = parsed.totalPrice || 0;
        if (typeof totalPrice === "string") totalPrice = parseFloat(totalPrice);

        let droppedItems = parsed.droppedItems || [];
        if (typeof droppedItems === "string")
          droppedItems = JSON.parse(droppedItems);

        return {
          cartData,
          quantity,
          totalPrice,
          droppedItems,
        };
      }
    }

    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith("persist:")) continue;
      try {
        const val = JSON.parse(localStorage.getItem(k));
        if (val && val.cartData) {
          const cartData =
            typeof val.cartData === "string"
              ? JSON.parse(val.cartData)
              : val.cartData;
          if (cartData && cartData.panel) {
            let quantity = val.quantity || 1;
            let totalPrice = val.totalPrice || 0;
            let droppedItems = val.droppedItems || [];
            if (typeof quantity === "string") quantity = parseInt(quantity, 10);
            if (typeof totalPrice === "string")
              totalPrice = parseFloat(totalPrice);
            if (typeof droppedItems === "string")
              droppedItems = JSON.parse(droppedItems);
            return { cartData, quantity, totalPrice, droppedItems };
          }
        }
      } catch (e) {}
    }
    return null;
  } catch (e) {
    console.error("[CartSync] Failed to read current design from Redux:", e);
    return null;
  }}

// ─── Sync single item or handle Update Item ───────────────────────────────────
async function syncSingleItemToGoogleSheet(design) {
  if (!design || !design.cartData) {
    console.warn("[CartSync] No active design found to sync.");
    return Promise.resolve({ empty: true });
  }

  const editingId = localStorage.getItem("sc_editing_item_id");
  const isEditing = !!editingId;

  // If item is currently being edited, update existing item in Redux!
  if (isEditing && window.__store) {
    try {
      const state = window.__store.getState();
      const cartItems =
        state.cartData && state.cartData.cartItems
          ? state.cartData.cartItems
          : [];
      const idx = cartItems.findIndex(
        (i) => i.id === editingId || i.productSequence === editingId,
      );

      if (idx !== -1) {
        const existingItem = cartItems[idx];
        const newScreenshotUrl = await getImagePreviewDataUrl(design);
        const updatedItems = [...cartItems];
        updatedItems[idx] = {
          ...updatedItems[idx],
          cartData: design.cartData,
          dropped: design.droppedItems || [],
          quantity: design.quantity || 1,
          totalPrice: design.totalPrice || 0,
          screenshotDataUrl: (newScreenshotUrl && newScreenshotUrl !== "") ? newScreenshotUrl : (existingItem.screenshotDataUrl || ""),
          updatedAt: new Date().toISOString(),
        };
        window.__store.dispatch({
          type: "cartData/setCartItems",
          payload: { items: updatedItems },
        });
        console.log(
          "[CartSync] Updated existing cart item in Redux:",
          editingId,
        );
      }
    } catch (e) {
      console.warn("[CartSync] Failed to dispatch Redux update for item:", e);
    }
  }

  const orderId = isEditing
    ? "UPD-" + editingId.substring(0, 8)
    : "ADD-" + Math.floor(100000 + Math.random() * 900000);
  const item = {
    id: editingId || "",
    cartData: design.cartData,
    quantity: design.quantity || 1,
    totalPrice: design.totalPrice || 0,
    dropped: design.droppedItems || [],
    createdAt: new Date().toISOString(),
  };

  const singlePayload = await buildFullItemPayload(item, orderId, false);
  singlePayload.status = isEditing ? "Updated" : "Add to Cart";

  // Clear editing flag after sync
  if (isEditing) {
    localStorage.removeItem("sc_editing_item_id");
  }

  return sendSinglePayloadToGAS(singlePayload, item);}

// ─── Log error to local server ──────────────────────────────────────────────
function logErrorToServer(message, payload, error) {
  const errorBody = {
    message: message,
    payload: payload,
    details: error && error.stack ? error.stack : String(error),
  };

  fetch("/api/logs/write", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(errorBody),
  }).catch(function () {});}

// ─── Trigger sync on Add to Cart / Update Item ───────────────────────────────
function triggerAddToCartSync() {
  const isEditing = !!localStorage.getItem("sc_editing_item_id");
  console.log(
    "[CartSync] Triggering " +
      (isEditing ? "Update Item" : "Add to Cart") +
      " Google Sheets sync...",
  );

  setTimeout(() => {
    let currentDesign = getCurrentDesignFromRedux();
    
    // Fallback: If React cleared the active design, fetch the last added item from cartItems
    if (!currentDesign) {
      const cartItems = getCartItemsFromRedux();
      if (cartItems && cartItems.length > 0) {
        const lastItem = cartItems[cartItems.length - 1];
        if (lastItem && lastItem.cartData) {
          currentDesign = {
            cartData: lastItem.cartData,
            quantity: lastItem.quantity || 1,
            totalPrice: lastItem.totalPrice || 0,
            droppedItems: lastItem.dropped || []
          };
          console.log("[CartSync] Recovered design from the last added cart item!");
        }
      }
    }

    if (!currentDesign) {
      console.warn("[CartSync] Could not fetch current design to sync.");
      showNotification(
        "⚠️ Failed to sync to Google Sheet (No design found)",
        "warning",
      );
      if (isEditing) {
        setTimeout(() => {
          window.location.href = "/orders?tab=cart";
        }, 1000);
      }
      return;
    }

    syncSingleItemToGoogleSheet(currentDesign)
      .then((res) => {
        if (res && res.success) {
          console.log("[CartSync] Successfully saved row to Google Sheets!");
          showNotification(
            isEditing
              ? "✅ Item updated in cart & Google Sheet!"
              : "✅ Item added to cart & saved to Google Sheet!",
            "success",
          );
        } else {
          showNotification(
            isEditing
              ? "⚠️ Item updated in cart (saved locally)."
              : "⚠️ Item added to cart (saved locally).",
            "warning",
          );
        }
      })
      .catch((err) => {
        console.error("[CartSync] Error syncing single item:", err);
        showNotification(
          isEditing ? "✅ Item updated in cart!" : "✅ Item added to cart!",
          "success",
        );
      })
      .finally(() => {
        if (isEditing) {
          localStorage.removeItem("sc_editing_item_id");
          localStorage.removeItem("sc_editing_item_data");
          setTimeout(() => {
            window.location.href = "/orders?tab=cart";
          }, 1200);
        }
      });
  }, 400);}

// ─── Trigger sync on Confirm Order / Place Order / Checkout ───────────────────
function triggerConfirmOrderSync() {
  console.log("[CartSync] Triggering Confirm Order Google Sheets sync...");
  setTimeout(() => {
    syncCartToGoogleSheet(true)
      .then((res) => {
        if (res && res.empty) {
          showNotification("⚠️ No cart items found to sync!", "warning");
        } else if (res && res.error) {
          showNotification("⚠️ Order saved locally.", "warning");
        } else {
          showNotification(
            "✅ All cart items saved to Google Sheet!",
            "success",
          );
        }
      })
      .catch((err) => {
        console.error("[CartSync] Error syncing order:", err);
      });
  }, 400);}

// ─── Dynamic Button Label updater & State Restorer for Edit Mode ──────────────
function restoreEditingItemOnDashboardLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const cartParamId = urlParams.get('cart');

  let editId = localStorage.getItem("sc_editing_item_id") || cartParamId;
  
  if (!editId) return;

  let rawItemData = localStorage.getItem("sc_editing_item_data");
  let item = null;
  try {
      if (rawItemData) item = JSON.parse(rawItemData);
  } catch(e){}

  if (!item && cartParamId) {
      const cartItems = getCartItemsFromRedux();
      item = cartItems.find(i => i.id === cartParamId || i.productSequence === cartParamId);
      if (item) {
          localStorage.setItem("sc_editing_item_id", editId);
          localStorage.setItem("sc_editing_item_data", JSON.stringify(item));
      }
  }

  if (item && item.cartData && window.__store && !window.__sc_item_restored) {
    try {
      window.__store.dispatch({
        type: "cartData/setCartFromOrder",
        payload: {
          cart: item.cartData,
          dropped: item.dropped || [],
        },
      });
      if (item.quantity) {
        window.__store.dispatch({
          type: "cartData/increaseQuantity",
          payload: { qty: item.quantity },
        });
      }
      console.log("[CartSync] Restored editing item into Redux store on load:", item);
      
      // Determine the furthest step to resume from
      const selectionState = window.__store.getState().selectionData;
      if (selectionState && selectionState.selectionData && selectionState.selectionData.length > 0) {
          let targetStepIndex = 0;
          const cd = item.cartData;
          if (cd) {
              if (cd.panel && Object.keys(cd.panel).length > 0) targetStepIndex = 1;
              if (cd.material && Object.keys(cd.material).length > 0) targetStepIndex = 2;
              if (cd.size && Object.keys(cd.size).length > 0) targetStepIndex = 3;
              if (cd.accessories && cd.accessories.length > 0) targetStepIndex = 4;
              if (cd.icons && cd.icons.length > 0) targetStepIndex = 5;
              if (cd.color && cd.color.length > 0) targetStepIndex = 6;
              if (cd.technology && Object.keys(cd.technology).length > 0) targetStepIndex = 7;
          }
          
          targetStepIndex = Math.min(targetStepIndex, selectionState.selectionData.length - 1);
          const targetStep = selectionState.selectionData[targetStepIndex];
          
          if (targetStep) {
              window.__store.dispatch({
                  type: "selection/setCurrentStep",
                  payload: targetStep
              });
              
              // Enable next/prev navigation since the item is partially or fully complete
              window.__store.dispatch({
                  type: "selection/setIsNextStepDisabled",
                  payload: false
              });
              
              console.log("[CartSync] Dispatched setCurrentStep to index:", targetStepIndex);
          }
      }

      window.__sc_item_restored = true; // Prevent infinite dispatch loops!
    } catch (e) {
      console.warn("[CartSync] Error restoring editing item on load:", e);
    }
  }

  const buttons = Array.from(document.querySelectorAll("button"));
  const addToCartBtn = buttons.find((b) => {
    const t = (b.textContent || "").trim().toLowerCase();
    return (
      t === "add to cart" || t === "add to quote" || t.includes("update item")
    );
  });

  if (addToCartBtn && !addToCartBtn.textContent.includes("Update Item")) {
    addToCartBtn.textContent = "🔄 Update Item";
    addToCartBtn.style.background =
      "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)";
    addToCartBtn.style.color = "#ffffff";
  }
}

function updateButtonLabelForEditMode() {
  restoreEditingItemOnDashboardLoad();
}

// ─── Global Event Listener for Cart Actions & Edit Item ───────────────────────
document.addEventListener(
  "click",
  function (e) {
    try {
      const target = e.target;
      if (!target) return;

      const btn = target.closest
        ? target.closest('button, [role="button"], a, input[type="submit"]')
        : null;
      if (!btn) return;

      const rawText = (btn.textContent || btn.value || "");
      const text = rawText.replace(/\s+/g, ' ').trim().toLowerCase();

      // 2. Add to Cart / Update Item
      if (
        text === "add to cart" ||
        text === "add to quote" ||
        text.includes("update item") ||
        text.includes("add to cart") ||
        text.includes("add to basket")
      ) {
        triggerAddToCartSync();
      }
      // 3. Order Placement / Checkout / Confirmation in My Cart
      else if (
        text.includes("confirm order") ||
        text.includes("place order") ||
        text.includes("submit order") ||
        text.includes("checkout") ||
        text.includes("place selected") ||
        text.includes("batch order")
      ) {
        triggerConfirmOrderSync();
      }
    } catch (e) {
      console.warn("[CartSync] Event listener warning:", e);
    }
  },
  false,
);

// ─── Inject Sync Cart button ──────────────────────────────────────────────────
function checkAndInjectSyncButton() {
  const isCartPage =
    window.location.href.toLowerCase().includes("orders") ||
    window.location.href.toLowerCase().includes("cart") ||
    window.location.href.toLowerCase().includes("dashboard");

  if (!isCartPage) return;

  updateButtonLabelForEditMode();

  const buttons = Array.from(document.querySelectorAll("button"));
  const confirmBtn = buttons.find((b) => {
    const t = (b.textContent || "").trim().toLowerCase();
    return (
      t.includes("confirm order") ||
      t.includes("place order") ||
      t.includes("checkout")
    );
  });

  let existingBtn = document.getElementById("custom-sync-btn");
  
  // If we found the target anchor button but the sync button is currently floating, 
  // remove the floating one so we can place it inline
  if (confirmBtn && existingBtn && existingBtn.style.position === "fixed") {
    existingBtn.remove();
    existingBtn = null;
  }

  // If button already exists in the correct spot, do nothing
  if (existingBtn) return;

  const syncBtn = document.createElement("button");
  syncBtn.id = "custom-sync-btn";

  if (confirmBtn) {
    syncBtn.style.cssText = `
        margin-left: 10px;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        color: white; border: none; border-radius: 20px;
        padding: 8px 18px; cursor: pointer; font-weight: bold;
        font-size: 14px; font-family: inherit;
        box-shadow: 0 2px 8px rgba(16,185,129,0.4); transition: opacity 0.2s;
    `;
    confirmBtn.parentNode.insertBefore(syncBtn, confirmBtn.nextSibling);
  } else {
    syncBtn.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; z-index: 2147483647;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        color: white; border: none; border-radius: 50px;
        padding: 12px 24px; cursor: pointer; font-weight: bold;
        font-size: 15px; font-family: inherit;
        box-shadow: 0 4px 20px rgba(16,185,129,0.5); transition: transform 0.2s;
        display: flex; align-items: center; gap: 8px;
    `;
    document.body.appendChild(syncBtn);
    
    syncBtn.addEventListener("mouseenter", () => { syncBtn.style.transform = "scale(1.05)"; });
    syncBtn.addEventListener("mouseleave", () => { syncBtn.style.transform = "scale(1)"; });
  }

  syncBtn.innerHTML = `<span style="font-size:16px">📤</span> Sync to Google Sheet`;

  syncBtn.addEventListener("click", () => {
    const originalHTML = syncBtn.innerHTML;
    syncBtn.innerHTML = `<span style="font-size:16px">⏳</span> Syncing...`;
    syncBtn.disabled = true;

    syncCartToGoogleSheet(false)
      .then((res) => {
        if (res && res.empty) {
          showNotification(
            "⚠️ No cart items found! Please add items to cart before syncing.",
            "warning",
          );
        } else if (res && res.error) {
          showNotification(
            "⚠️ Cart data saved locally. Google Sheets connection failed.",
            "warning",
          );
        } else {
          showNotification("✅ Cart data synced to Google Sheet!", "success");
          const container = document.getElementById("custom-orders-view");
          if (container) {
            container.remove();
          }
        }
      })
      .catch((err) => {
        console.error("[CartSync] Sync failed:", err);
        showNotification(
          "❌ Sync failed: " + err.message + ". Check console for details.",
          "error",
        );
      })
      .finally(() => {
        syncBtn.innerHTML = originalHTML;
        syncBtn.disabled = false;
      });
  });

  console.log("[CartSync] Sync button injected.");
}

// ─── Profile page: Google Sheet URL configurator ─────────────────────────────
function checkAndInjectProfileInput() {
  if (!window.location.href.toLowerCase().includes("profile")) return;
  if (document.getElementById("custom-sheet-url-container")) return;

  const container = document.createElement("div");
  container.id = "custom-sheet-url-container";
  container.style.cssText = `
        padding: 20px; margin: 20px auto; max-width: 800px;
        background: #f5f8fa; border: 1px solid #cce5ff; border-radius: 8px;
    `;
  container.innerHTML = `        <h3 style="margin-top:0;color:#004085;">Google Sheet Database Setup</h3>
        <p style="color:#383d41;">Enter your Google Apps Script Web App URL to sync cart data.</p>
        <input type="text" id="custom-sheet-url-input" value="${getWebAppUrl()}"
            style="width:100%;padding:10px;margin-bottom:10px;box-sizing:border-box;border:1px solid #ced4da;border-radius:4px;">
        <button id="custom-sheet-url-save"
            style="padding:10px 20px;background:#1976d2;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">
            Save URL
        </button>
    `;

  const main = document.querySelector("main") || document.body;
  main.insertBefore(container, main.firstChild);

  document
    .getElementById("custom-sheet-url-save")
    .addEventListener("click", () => {
      const val = document
        .getElementById("custom-sheet-url-input")
        .value.trim();
      if (val) {
        setWebAppUrl(val);
        alert("✅ URL Saved!");
      }    });
}

// ─── Orders/Cart page: Show synced rows from Google Sheet ────────────────────
function checkAndInjectOrdersView() { return; 
  const isTargetPage =
    window.location.href.toLowerCase().includes("orders") ||
    window.location.href.toLowerCase().includes("cart");

  if (!isTargetPage) return;
  if (document.getElementById("custom-orders-view")) return;

  const container = document.createElement("div");
  container.id = "custom-orders-view";
  container.style.cssText = `
        padding: 25px; margin: 30px auto; max-width: 1200px;
        background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-radius: 12px;
    `;
  container.innerHTML = `<p style="color:#888;font-family:sans-serif;">⏳ Loading synced data from Google Sheet...</p>`;

  const main = document.querySelector("main") || document.body;
  main.insertBefore(container, main.firstChild);

  fetch(getWebAppUrl())
    .then((res) => res.json())
    .then((data) => {
      const rows = Array.isArray(data) ? data : [];
      let html = `<h3 style="color:#10B981;margin-top:0;font-family:'Inter',sans-serif;">✅ Synced Google Sheet Orders</h3>`;
      html += `<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:14px;font-family:'Inter',sans-serif;">`;
      html += `<thead><tr>`;
      for (const col of ["Order ID", "Panel Name", "Price", "Date"]) {
        html += `<th style="border-bottom:2px solid #E5E7EB;padding:12px;font-weight:600;color:#374151;text-align:left;">${col}</th>`;
      }
      html += `</tr></thead><tbody>`;

      if (rows.length === 0) {
        html += `<tr><td colspan="4" style="padding:20px;text-align:center;color:#9CA3AF;">No data synced yet.</td></tr>`;
      } else {
        rows.forEach((order) => {
          html += `<tr style="border-bottom:1px solid #F3F4F6;">
                        <td style="padding:12px;font-weight:500;color:#1F2937;">${order.orderId || order.orderid || "—"}</td>
                        <td style="padding:12px;color:#4B5563;">${order.panelName || order.panelname || order.customName || "—"}</td>
                        <td style="padding:12px;font-weight:600;color:#111827;">${formatPrice(Number(order.price) || 0)}</td>
                        <td style="padding:12px;color:#6B7280;font-size:12px;">${order.date ? new Date(order.date).toLocaleString() : "—"}</td>
                    </tr>`;
        });
      }

      html += `</tbody></table></div>`;
      container.innerHTML = html;
    })
    .catch((err) => {
      container.innerHTML = `
                <h3 style="color:#dc3545;">❌ Failed to load from Google Sheet</h3>
                <p style="color:#555;">Make sure your Google Apps Script is deployed as a Web App with <strong>"Anyone"</strong> access.</p>
                <p style="font-size:12px;color:#999;">Error: ${err.message}</p>
            `;
    });
}

// ─── SPA Observer: re-run checks on route/DOM changes ────────────────────────
let _lastHref = "";
const observer = new MutationObserver(() => {
  if (window.location.href !== _lastHref) {
    _lastHref = window.location.href;
    [
      "custom-sync-btn",
      "custom-orders-view",
      "custom-sheet-url-container",
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  }
  checkAndInjectSyncButton();
  checkAndInjectProfileInput();
  // // checkAndInjectOrdersView();
});

if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
} else {
  document.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

window.addEventListener("load", () => {
  _lastHref = window.location.href;
  checkAndInjectSyncButton();
  checkAndInjectProfileInput();
  // checkAndInjectOrdersView();
});

// Expose for manual debugging in browser console
window.__cartSync = {
  syncNow: () => syncCartToGoogleSheet(false),
  getItems: () => getCartItemsFromRedux(),
  getUrl: getWebAppUrl,
  setUrl: setWebAppUrl,
};
console.log(
  "[CartSync] Loaded with Edit Item tracking & Update Item sync. Ready.",
);


// -------------------------------------------------------------------------
// URL-based Cart Item Restoration (Robust fallback)
// -------------------------------------------------------------------------
let _urlCartRestored = false;
let _lastCartId = null;

function restoreCartFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const cartId = params.get("cart");
  
  if (!cartId) {
    _lastCartId = null;
    _urlCartRestored = false;
    return;
  }
  
  if (cartId !== _lastCartId) {
    _lastCartId = cartId;
    _urlCartRestored = false; // Reset if URL changes
  }

  if (_urlCartRestored) return;

  if (window.__store) {
    const state = window.__store.getState();
    if (state && state.cartData && state.cartData.cartItems && state.cartData.cartItems.length > 0) {
      const item = state.cartData.cartItems.find(i => i.id === cartId || i.cartData?.id === cartId || i.productSequence === cartId);
      if (item) {
        window.__store.dispatch({
          type: "cartData/setCartFromOrder",
          payload: { cart: item.cartData || item, dropped: item.dropped || [] }
        });
        _urlCartRestored = true;
        console.log("[CartSync] Restored cart item from URL param:", cartId);
      }
    }
  }
}

// Run it periodically in case Redux state takes time to load from IndexedDB
setInterval(restoreCartFromUrl, 500);



  // Intercept Next.js navigation for Cart Editing to force a hard reload
    // Intercept Next.js navigation for Cart Editing to force a hard reload to ROOT
  document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (link && link.href) {
          const url = new URL(link.href, window.location.origin);
          if (url.searchParams.has('cart')) {
              e.preventDefault();
              e.stopPropagation();
              const cartId = url.searchParams.get('cart');
              localStorage.setItem('sc_editing_item_id', cartId);
              window.location.href = '/?cart=' + cartId;
          }
      }
  }, true);

// Intercept Next.js router.push via history.pushState
const originalPushState = window.history.pushState;
window.history.pushState = function(state, unused, url) {
    if (url && typeof url === 'string') {
        try {
            const parsedUrl = new URL(url, window.location.origin);
            if (parsedUrl.searchParams.has('cart')) {
                const cartId = parsedUrl.searchParams.get('cart');
                localStorage.setItem('sc_editing_item_id', cartId);
                window.location.href = '/?cart=' + cartId;
                return; // abort SPA pushState
            }
        } catch (e) {
            console.error('[CartSync] Error intercepting pushState:', e);
        }
    }
    return originalPushState.apply(this, arguments);
};
