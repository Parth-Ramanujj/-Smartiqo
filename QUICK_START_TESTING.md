# Quick Start: Testing Cart Sync Fix

## 🚀 Fast Track (2 minutes)

### Option 1: Test Page (Recommended)

```bash
# 1. Start server
node serve.js

# 2. Open in browser:
http://localhost:8080/test-cart-sync.html

# 3. Click "Send Test Data to Google Sheets" button
# ✅ You should see success message and data in Google Sheets
```

### Option 2: Command Line Test

```bash
# Run test script
node test-cart-sync.js

# Expected output:
# ✅ SUCCESS: Google Apps Script accepted data (302 redirect)
```

### Option 3: Real App Test

```bash
# 1. Start server
node serve.js

# 2. Open in browser:
http://localhost:8080

# 3. Open Console (F12)

# 4. Navigate to customizer and click "Add to Cart"

# 5. Look for debug logs:
[CartSync Debug] triggerAddToCartSync CALLED: {...}
[CartSync Debug] getCurrentDesignFromRedux result: {...}
```

## 📊 What Should Happen

### ✅ Working:
- Console shows debug logs
- Toast notification: "✅ Item added to cart & saved to Google Sheet!"
- Data appears in Google Sheets
- `logs/cart-sync.log` has success entries

### ❌ Not Working:
- No console logs → Event listener issue
- "No design found" → Redux state issue
- Network error → Server/Google Sheets issue
- Success but no data → Google Apps Script issue

## 🔍 Debug Commands

```bash
# Check if server is running
curl http://localhost:8080

# View logs
cat logs/cart-sync.log

# Clear logs
rm logs/cart-sync.log

# Test Google Sheets directly
node test-cart-sync.js
```

## 📝 Check Results

1. **Browser Console** - Should show debug logs
2. **Toast Notification** - Should show success message
3. **Server Logs** - `logs/cart-sync.log` should have entries
4. **Google Sheets** - Should have new row with cart data

## 🆘 Still Not Working?

Run diagnostic:
```bash
# Open test page
http://localhost:8080/test-cart-sync.html

# Click all 4 test buttons:
1. "Send Test Data to Google Sheets" ← Should succeed
2. "Check localStorage" ← Shows what's stored
3. "Setup Mock Cart Data" → "Trigger Sync" ← Should succeed
4. "Fetch Server Logs" ← Shows server-side logs
```

Share results from all 4 tests for further help.

## 📄 More Details

- **FIX_SUMMARY.md** - Complete fix explanation
- **CART_SYNC_DIAGNOSTIC_AND_FIX.md** - Detailed diagnostic guide
- **test-cart-sync.html** - Interactive test page
- **test-cart-sync.js** - CLI test script
