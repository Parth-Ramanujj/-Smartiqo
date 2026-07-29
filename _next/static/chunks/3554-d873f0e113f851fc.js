"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3554],
  {
    53554: (t, e, n) => {
      n.d(e, { E: () => c, _: () => o });
      var a = n(95155),
        i = n(12115),
        r = n(12108);
      let s = "premium-renewal/",
        l = "premiumRenewalSeen:",
        u = (0, i.createContext)(null);
      function o(t) {
        let { children: e } = t,
          { status: n } = (0, r.useSession)(),
          [o, c] = (0, i.useState)([]),
          [d, f] = (0, i.useState)(!1),
          h = (0, i.useRef)({}),
          [w, p] = (0, i.useState)({}),
          y = (0, i.useCallback)(async () => {
            if ("authenticated" !== n) return void c([]);
            f(!0);
            try {
              let t = await fetch("/api/notifications", {
                credentials: "include",
              });
              if (!t.ok) throw Error("Failed with status ".concat(t.status));
              let e = await t.json(),
                n = Array.isArray(e.notifications) ? e.notifications : [],
                a = n.map((t) => {
                  if (t.id.startsWith(s))
                    try {
                      let n = "".concat(l).concat(t.id);
                      if (window.localStorage.getItem(n)) {
                        var e;
                        return {
                          ...t,
                          seenCount: Math.max(
                            1,
                            Number(null != (e = t.seenCount) ? e : 0),
                          ),
                          isNew: !1,
                          shouldDisplayBanner:
                            "once" !== t.displayMode && t.shouldDisplayBanner,
                        };
                      }
                    } catch (t) {}
                  return t;
                });
              c(a),
                p((t) => {
                  let e = { ...t },
                    a = !1;
                  for (let t of Object.keys(e)) {
                    var i, r;
                    let s = n.find((e) => e.id === t);
                    if (!s) {
                      delete e[t], delete h.current[t], (a = !0);
                      continue;
                    }
                    let l =
                        null !=
                        (r = null != (i = s.updatedAt) ? i : s.createdAt)
                          ? r
                          : "",
                      u = h.current[t];
                    u &&
                      l &&
                      u !== l &&
                      (delete e[t], delete h.current[t], (a = !0));
                  }
                  return a ? e : t;
                });
            } catch (t) {
            } finally {
              f(!1);
            }
          }, [n]);
        (0, i.useEffect)(() => {
          "authenticated" === n
            ? y()
            : "unauthenticated" === n && (c([]), p({}), (h.current = {}));
        }, [n, y]);
        let m = (0, i.useCallback)(async function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "view";
            c((n) =>
              n.map((n) => {
                if (n.id !== t) return n;
                let a = new Date().toISOString(),
                  i = {
                    ...n,
                    seenCount: n.seenCount + 1,
                    lastShownAt: a,
                    dismissedAt: "dismiss" === e ? a : n.dismissedAt,
                  };
                return (
                  "once" === n.displayMode && (i.shouldDisplayBanner = !1), i
                );
              }),
            );
            let n = t.startsWith(s);
            if (n)
              try {
                window.localStorage.setItem(
                  "".concat(l).concat(t),
                  new Date().toISOString(),
                );
              } catch (t) {}
            if (!n)
              try {
                await fetch("/api/notifications/".concat(t, "/status"), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ action: e }),
                });
              } catch (t) {}
          }, []),
          C = (0, i.useCallback)((t) => {
            var e, n;
            let a =
              null != (n = null != (e = t.updatedAt) ? e : t.createdAt)
                ? n
                : "";
            (h.current[t.id] = a),
              p((e) => (e[t.id] ? e : { ...e, [t.id]: !0 }));
          }, []),
          S = (0, i.useCallback)((t) => !!w[t], [w]),
          b = (0, i.useCallback)(async () => {
            await y();
          }, [y]),
          k = (0, i.useMemo)(
            () =>
              o.filter((t) => {
                var e;
                return (null != (e = t.seenCount) ? e : 0) === 0;
              }).length,
            [o],
          ),
          v = (0, i.useMemo)(
            () => ({
              notifications: o,
              unreadCount: k,
              loading: d,
              refresh: b,
              acknowledge: m,
              hideBannerTemporarily: C,
              isBannerHidden: S,
            }),
            [o, k, d, b, m, C, S],
          );
        return (0, a.jsx)(u.Provider, { value: v, children: e });
      }
      function c() {
        let t = (0, i.useContext)(u);
        if (!t)
          throw Error(
            "useNotifications must be used within a NotificationsProvider",
          );
        return t;
      }
    },
  },
]);
