/**
 * EARLY HYDRATION SCRIPT
 * This script MUST be loaded in the <head> before Next.js / React boots up.
 * It ensures that when a user clicks "Edit" from the dashboard (?cart=ID), 
 * the cart data is forcefully injected into Redux Persist BEFORE the UI renders.
 */
(function forceRestoreCartItemToPersist() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const cartParamId = urlParams.get('cart');
    let editId = localStorage.getItem("sc_editing_item_id") || cartParamId;
    if (!editId) return;

    let item = null;
    // Check if we already have the raw data
    let rawItemData = localStorage.getItem("sc_editing_item_data");
    if (rawItemData) {
      try { item = JSON.parse(rawItemData); } catch (e) {}
    }

    // If not, we have to search the local storage persist state for it
    if (!item && cartParamId) {
      const possibleKeys = ["persist:root", "persist:cartData", "persist:cart"];
      let allItems = [];
      for (const k of possibleKeys) {
        const raw = localStorage.getItem(k);
        if (!raw) continue;
        try {
            const parsed = JSON.parse(raw);
            if (parsed.cartData) {
              const cd = typeof parsed.cartData === "string" ? JSON.parse(parsed.cartData) : parsed.cartData;
              if (cd.cartItems && cd.cartItems.length > 0) { allItems = cd.cartItems; break; }
            }
            if (parsed.cartItems && parsed.cartItems.length > 0) { allItems = parsed.cartItems; break; }
        } catch (e) {}
      }
      
      item = allItems.find(i => i.id === cartParamId || i.productSequence === cartParamId);
      if (item) {
        localStorage.setItem("sc_editing_item_id", editId);
        localStorage.setItem("sc_editing_item_data", JSON.stringify(item));
      }
    }

    if (!item || !item.cartData) return;

    // Inject into local storage persist directly so Redux reads it on boot
    const keys = ["persist:root", "persist:cartData", "persist:cart"];
    let injected = false;
    
    for (const k of keys) {
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      try {
          const parsed = JSON.parse(raw);
          if (parsed.cartData) {
            let cd = typeof parsed.cartData === "string" ? JSON.parse(parsed.cartData) : parsed.cartData;
            
            // Only inject if it's different to prevent unnecessary overrides
            const currentItemStr = JSON.stringify(cd.cartData);
            const newItemStr = JSON.stringify(item.cartData);
            
            if (currentItemStr !== newItemStr) {
                cd.cartData = item.rawCartData || item.cartData;
                cd.droppedItems = item.dropped || [];
                cd.quantity = item.quantity || 1;
                cd.totalPrice = item.totalPrice || 0;
                parsed.cartData = typeof parsed.cartData === "string" ? JSON.stringify(cd) : cd;
                localStorage.setItem(k, JSON.stringify(parsed));
                console.log("[EarlyHydrate] Force-injected item into " + k);
                injected = true;
            }
            break;
          }
      } catch (e) {}
    }
    
    if (injected) {
        console.log("[EarlyHydrate] Successfully prepared Redux state for item:", editId);
    }
    
  } catch (e) {
    console.error("[EarlyHydrate] Force restore failed:", e);
  }
})();
