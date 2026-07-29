/**
 * SmartiQo Injector Core Framework
 * A robust bridge to safely inject vanilla JS modifications into the Next.js static clone
 * ensuring changes survive React Hydration and route transitions.
 */

window.SmartiqoInjector = (function() {
    console.log("[SmartiqoInjector] Initializing core engine...");

    // Store all registered watches
    const _watchers = [];

    // The central observer that watches for DOM mutations
    const _observer = new MutationObserver(() => {
        // Debounce or directly run watchers
        _watchers.forEach(watcher => {
            const elements = document.querySelectorAll(watcher.selector);
            elements.forEach(el => {
                // If the element hasn't been processed by this specific watcher yet
                if (!el.hasAttribute(`data-sq-injected-${watcher.id}`)) {
                    el.setAttribute(`data-sq-injected-${watcher.id}`, 'true');
                    try {
                        watcher.callback(el);
                    } catch (e) {
                        console.error(`[SmartiqoInjector] Error in watcher ${watcher.id}:`, e);
                    }
                }
            });
        });
    });

    let _watcherIdCounter = 0;

    return {
        /**
         * Watch the DOM for a specific selector. When it appears (or is re-rendered by React),
         * the callback will be fired once for that specific DOM node.
         */
        watch: function(selector, callback) {
            const id = ++_watcherIdCounter;
            _watchers.push({ id, selector, callback });
            console.log(`[SmartiqoInjector] Registered watcher #${id} for '${selector}'`);
            
            // Trigger immediately in case the element is already on the page
            const existing = document.querySelectorAll(selector);
            existing.forEach(el => {
                if (!el.hasAttribute(`data-sq-injected-${id}`)) {
                    el.setAttribute(`data-sq-injected-${id}`, 'true');
                    try { callback(el); } catch (e) { console.error(e); }
                }
            });
        },

        /**
         * Securely inject CSS that overrides Next.js specific styles.
         */
        injectCSS: function(cssString, styleId = 'sq-custom-injected-styles') {
            let styleTag = document.getElementById(styleId);
            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = styleId;
                document.head.appendChild(styleTag);
            }
            // Append new styles instead of replacing
            styleTag.textContent += '\n' + cssString;
        },

        /**
         * Start the global mutation observer. Should be called after DOM is ready.
         */
        start: function() {
            if (document.body) {
                _observer.observe(document.body, { childList: true, subtree: true });
                console.log("[SmartiqoInjector] Engine started, watching body for React hydration.");
            } else {
                document.addEventListener('DOMContentLoaded', () => {
                    _observer.observe(document.body, { childList: true, subtree: true });
                    console.log("[SmartiqoInjector] Engine started (after DOMContentLoaded).");
                });
            }
        }
    };
})();

// Start the engine automatically
window.SmartiqoInjector.start();
