/**
 * SmartiQo Custom UI/UX Changes
 * All future custom logic and UI modifications should be written here
 * using the SmartiqoInjector API to ensure they survive React Hydration.
 */

// Fix Login Page Logo
SmartiqoInjector.watch('h2, h1, h3', (heading) => {
    // Check if we are on the login page by looking at the heading text
    if (heading.textContent.trim() === 'Login' || heading.textContent.trim() === 'Log in') {
        const parent = heading.parentElement;
        if (parent) {
            // Find the colorful circle above the heading
            const circle = parent.querySelector('div.rounded-full') || heading.previousElementSibling;
            
            if (circle && circle.tagName !== 'IMG' && circle.tagName === 'DIV') {
                // We found the circle, replace it with the SmartiQo logo
                const logoHtml = '<img src="/Image/logoVerni.png" alt="SmartiQo Logo" style="width: 180px; height: auto; margin: 0 auto 20px auto; display: block;" />';
                
                // Hide the circle
                circle.style.display = 'none';
                
                // Inject the logo right before the heading
                if (!parent.querySelector('img[alt="SmartiQo Logo"]')) {
                    heading.insertAdjacentHTML('beforebegin', logoHtml);
                }
            }
        }
    }
});


// Replace Bell icon with Cart (Trolley) icon in the top navigation
SmartiqoInjector.watch('header button', (button) => {
    // Check if this button contains an SVG and is near the avatar
    // We can identify the bell icon by checking its innerHTML or finding the SVG path
    if (button.innerHTML.includes('M12 22c1.1') || button.innerHTML.includes('notification') || button.innerHTML.includes('bell')) {
        // Change the SVG to a Cart icon
        button.innerHTML = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartIcon" style="width: 24px; height: 24px; fill: currentColor;">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>`;
        
        // Change the click action to go to cart
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            window.location.href = '/orders?tab=cart';
        }, true);
    } else {
        // Alternative approach: if we can't identify by SVG path, find the button right before the Avatar
        const nextEl = button.nextElementSibling;
        if (nextEl && (nextEl.tagName === 'DIV' || nextEl.tagName === 'BUTTON' || nextEl.tagName === 'A') && (nextEl.innerHTML.includes('AU') || nextEl.querySelector('img[alt*="Avatar"]'))) {
            // This is likely the bell button
            button.innerHTML = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartIcon" style="width: 24px; height: 24px; fill: currentColor;">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>`;
            
            button.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/orders?tab=cart';
            };
        }
    }
});


// Global Router Interceptor to fix Edit functionality
(function() {
    const originalPushState = history.pushState;
    history.pushState = function(state, unused, url) {
        if (url && typeof url === 'string' && url.includes('cart=')) {
            // If Next.js is routing to an edit URL, ensure it goes to ROOT customizer
            if (!url.startsWith('/?cart=')) {
                try {
                    const searchPart = url.includes('?') ? url.split('?')[1] : url;
                    const cartId = new URLSearchParams('?' + searchPart).get('cart');
                    if (cartId) {
                        window.location.href = '/?cart=' + cartId;
                        return; // Stop pushState
                    }
                } catch(e) {
                    console.error('Error intercepting edit route', e);
                }
            }
        }
        return originalPushState.apply(this, arguments);
    };
    
    // Fallback: If page loaded on wrong URL, redirect immediately
    if (window.location.pathname.toLowerCase().includes('dashboard') && window.location.search.includes('cart=')) {
        const cartId = new URLSearchParams(window.location.search).get('cart');
        if (cartId) {
            window.location.href = '/?cart=' + cartId;
        }
    }
})();

// Remove "Price" column from any table dynamically
SmartiqoInjector.watch('table, [role="table"], .MuiDataGrid-root, .MuiTable-root', (table) => {
    const hidePriceColumn = () => {
        // Find header with text 'Price'
        let headers = Array.from(table.querySelectorAll('th, [role="columnheader"]'));
        let priceIndex = -1;
        
        headers.forEach((h) => {
            if (h.textContent && h.textContent.trim().toLowerCase() === 'price') {
                priceIndex = Array.from(h.parentElement.children).indexOf(h);
                h.style.display = 'none';
            }
        });
        
        if (priceIndex !== -1) {
            // Find all rows
            let rows = Array.from(table.querySelectorAll('tbody tr, [role="row"]'));
            rows.forEach(row => {
                // Use direct children to avoid nested tables
                let cells = Array.from(row.children); 
                if (cells.length > priceIndex) {
                    // Skip if the cell has a colspan > 1 (group headers usually do)
                    let colspan = cells[0].getAttribute('colspan');
                    if (!colspan || parseInt(colspan) === 1) {
                        if (cells[priceIndex]) {
                            cells[priceIndex].style.display = 'none';
                        }
                    }
                }
            });
        }
    };
    
    // Initial hide
    hidePriceColumn();
    
    // Watch for React rendering new rows
    const observer = new MutationObserver(hidePriceColumn);
    observer.observe(table, { childList: true, subtree: true });
});
