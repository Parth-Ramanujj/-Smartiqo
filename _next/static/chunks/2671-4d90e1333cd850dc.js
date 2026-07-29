"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2671],
  {
    2671: (e, t, n) => {
      let r;
      function o(e) {
        return new Promise((t, n) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => n(e.error));
        });
      }
      function u() {
        return (
          r ||
            (r = (function (e, t) {
              let n,
                r = () => {
                  if (n) return n;
                  let r = indexedDB.open(e);
                  return (
                    (r.onupgradeneeded = () => r.result.createObjectStore(t)),
                    (n = o(r)).then(
                      (e) => {
                        e.onclose = () => (n = void 0);
                      },
                      () => {},
                    ),
                    n
                  );
                };
              return (e, n) =>
                r().then((r) => n(r.transaction(t, e).objectStore(t)));
            })("keyval-store", "keyval")),
          r
        );
      }
      function c(e, t = u()) {
        return t("readonly", (t) => o(t.get(e)));
      }
      function a(e, t, n = u()) {
        return n("readwrite", (n) => (n.put(t, e), o(n.transaction)));
      }
      function i(e, t = u()) {
        return t("readwrite", (t) => (t.delete(e), o(t.transaction)));
      }
      n.d(t, { Jt: () => c, del: () => i, hZ: () => a });
    },
  },
]);
