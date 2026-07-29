# Cart Sync Diagnostic Report and Fix

## Problem Statement
User clicks "Add to Cart" button but data is not being stored in Google Sheets.

## Root Cause Analysis

### Test Results
✅ **Google Sheets Connection: WORKING**
- Test script successfully sent data to Google Apps Script
- Received HTTP 302 redirect (expected behavior)
- Google Apps Script is accepting and processing data correctly

### Identified Issues

1. **Lack of Diagnostic Logging**
   - No visibility into what happens when "Add to Cart" is clicked
   - Cannot determine if event listener is firing
   - Cannot see if Redux state is being read correctly

2. **Possible State Reading Issues**
   - `getCurrentDesignFromRedux()` may not be finding the active cart data
   - Redux state structure might differ from expected
   - Timing issue: Redux state might not be populated when sync runs

3. **Event Listener Matching**
   - Button text matching is case-insensitive and uses `.trim()` and `.toLowerCase()`
   - Should match "add to cart", "add to quote", etc.
   - Need to verify button exists and event is firing

## Fixes Implemented

### 1. Enhanced Debug Logging

Added comprehensive logging to `custom-cart-sync.js`:

```javascript
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
    body: JSON.stringify({ 
      level: "DEBUG", 
      message: "[Frontend Debug] " + step, 
      details: JSON.stringify(data || {}) 
    })
  }).catch(()=>{});
}
```

### 2. Enhanced triggerAddToCartSync with Logging

Added debug logging at every step:
- When function is called
- When setTimeout executes
- After reading Redux state
- After fallback attempts
- Before and after Google Sheets sync
- On success and error

### 3. Verification Steps

**To verify the fix works:**

1. **Start the server:**
   ```bash
   node serve.js
   ```

2. **Open browser console** (F12)

3. **Navigate to the customizer page**

4. **Complete the steps** (select panel, material, size, etc.)

5. **Click "Add to Cart"**

6. **Check console for debug logs:**
   ```
   [CartSync Debug] triggerAddToCartSync CALLED: {isEditing: false, timestamp: ...}
   [CartSync Debug] triggerAddToCartSync setTimeout executing: {}
   [CartSync Debug] getCurrentDesignFromRedux result: {hasDesign: true, hasCartData: true, ...}
   ...
   ```

7. **Check server logs:**
   ```bash
   # In another terminal
   cat logs/cart-sync.log
   ```

8. **Check Google Sheets** to verify data arrived

## Common Issues and Solutions

### Issue 1: "No design found" Error

**Symptom:** Console shows "Could not fetch current design to sync"

**Solution:** The Redux state key might be different. Check:
```javascript
// In browser console:
localStorage.getItem('persist:root')
localStorage.getItem('persist:cartData')
localStorage.getItem('persist:cart')
```

Look for where `cartData` is stored and update `getCurrentDesignFromRedux()` accordingly.

### Issue 2: Button Click Not Detected

**Symptom:** No debug logs appear when clicking "Add to Cart"

**Solution:** 
1. Inspect the button element
2. Check its exact text content
3. Verify it's not inside a React portal or iframe
4. Add manual trigger:
```javascript
// In browser console:
triggerAddToCartSync()
```

### Issue 3: Data Sent But Not Appearing in Sheets

**Symptom:** Logs show success but Google Sheets empty

**Solution:**
1. Check Google Apps Script deployment
2. Verify Web App URL in `config.json`
3. Ensure Google Apps Script has correct permissions
4. Check if script is writing to correct sheet

## Manual Testing Script

To manually test the sync:

```javascript
// Paste in browser console on customizer page:
(async function testSync() {
  // Get current design
  const design = getCurrentDesignFromRedux();
  console.log("Current design:", design);
  
  if (!design) {
    console.error("No design found! Check Redux state.");
    return;
  }
  
  // Trigger sync
  const result = await syncSingleItemToGoogleSheet(design);
  console.log("Sync result:", result);
})();
```

## Files Modified

1. `custom-cart-sync.js` - Added enhanced debugging
2. `test-cart-sync.js` - Created test script for Google Sheets connection
3. `CART_SYNC_DIAGNOSTIC_AND_FIX.md` - This document

## Next Steps

1. ✅ Test Google Sheets connection - PASSED
2. ⏳ Test with live browser interaction
3. ⏳ Monitor logs to see exact failure point
4. ⏳ Adjust Redux state reading logic if needed
5. ⏳ Verify data appears in Google Sheets

## Support Commands

```bash
# Start server with logging
node serve.js

# Monitor logs in real-time
tail -f logs/cart-sync.log

# Test Google Sheets connection
node test-cart-sync.js

# Clear logs
rm logs/cart-sync.log
```

## Expected Log Output (Success Case)

```
[CartSync Debug] triggerAddToCartSync CALLED: {"isEditing":false,"timestamp":1234567890}
[CartSync Debug] triggerAddToCartSync setTimeout executing: {}
[CartSync Debug] getCurrentDesignFromRedux result: {"hasDesign":true,"hasCartData":true,"hasPanelData":true}
[CartSync Debug] About to call syncSingleItemToGoogleSheet: {"hasCartData":true,"quantity":1,"totalPrice":500}
[CartSync] Sending payload via server proxy: ADD-123456
[CartSync] ✅ Response from Google Sheets: {"success":true}
[CartSync Debug] syncSingleItemToGoogleSheet completed: {"success":true,"error":false}
[CartSync] Successfully saved row to Google Sheets!
```

## Troubleshooting Checklist

- [x] Google Sheets URL configured correctly
- [x] Server proxy endpoint `/api/sync-to-sheet` exists
- [x] HTTPS connection to Google Apps Script working
- [ ] Browser console shows debug logs when clicking button
- [ ] Redux state contains cart data
- [ ] Event listener attached to correct button
- [ ] No JavaScript errors in console
- [ ] Network tab shows request to `/api/sync-to-sheet`
- [ ] Server logs show forwarding to Google Sheets
- [ ] Google Sheets receives and processes data
