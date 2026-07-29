"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6928],
  {
    76928: (l, n, r) => {
      r.d(n, { Z: () => m, c: () => t, default: () => c });
      var e = r(95155),
        i = r(12115),
        o = r(12108),
        u = r(14426);
      let t = "/Image/logoVerni.png",
        a = (0, i.createContext)(void 0),
        s = (l) => {
          if ("string" != typeof l) return null;
          let n = l.trim();
          return n.length > 0 ? n : null;
        },
        d = function () {
          for (var l = arguments.length, n = Array(l), r = 0; r < l; r++)
            n[r] = arguments[r];
          for (let l of n) {
            let n = s(l);
            if (n && n !== t) return n;
          }
          return null;
        },
        g = {
          loading: !1,
          settings: null,
          globalSettings: null,
          hasPremium: !1,
          inheritBranding: !1,
          brandLogoUrl: null,
          pdfLogoUrl: null,
        };
      async function v(l) {
        try {
          let n = await fetch(l, { cache: "no-store" });
          if (!n.ok) return null;
          return await n.json();
        } catch (l) {
          return null;
        }
      }
      function m() {
        let l = (0, i.useContext)(a);
        if (!l)
          throw Error("useBranding must be used within a BrandingHydrator");
        return l;
      }
      function c(l) {
        var n, r, t;
        let { children: s } = l,
          { data: m, status: c } = (0, o.useSession)(),
          [f, p] = (0, i.useState)(g);
        (0, i.useEffect)(() => {
          var l, n;
          if ("loading" === c) return;
          let r = null == m || null == (l = m.user) ? void 0 : l.id,
            e = null == m || null == (n = m.user) ? void 0 : n.parentUserId;
          if (!r || "authenticated" !== c) return void p(g);
          let i = !1;
          return (
            p((l) => ({ ...l, loading: !0 })),
            (async () => {
              var l, n, o, u, t, a, s, g;
              let [c, f, h] = await Promise.all([
                v("/api/userSettings/".concat(r)),
                e ? v("/api/userSettings/".concat(e)) : Promise.resolve(null),
                v("/api/userSettings/__global__"),
              ]);
              if (i) return;
              let y = d(
                  null == f ? void 0 : f.logoUrl,
                  null == f ? void 0 : f.pdfLogoUrl,
                ),
                U = d(
                  null == c ? void 0 : c.logoUrl,
                  null == c ? void 0 : c.pdfLogoUrl,
                ),
                b = d(
                  null == h ? void 0 : h.logoUrl,
                  null == h ? void 0 : h.pdfLogoUrl,
                ),
                w =
                  null != (o = null != (n = null != y ? y : U) ? n : b)
                    ? o
                    : null,
                P = d(
                  null == f ? void 0 : f.pdfLogoUrl,
                  null == f ? void 0 : f.logoUrl,
                ),
                L = d(
                  null == c ? void 0 : c.pdfLogoUrl,
                  null == c ? void 0 : c.logoUrl,
                ),
                _ = d(
                  null == h ? void 0 : h.pdfLogoUrl,
                  null == h ? void 0 : h.logoUrl,
                ),
                x =
                  null !=
                  (g =
                    null !=
                    (s =
                      null !=
                      (a =
                        null != (t = null != (u = null != y ? y : P) ? u : L)
                          ? t
                          : _)
                        ? a
                        : U)
                      ? s
                      : b)
                    ? g
                    : null,
                E = !!e && !!(y || P || w),
                S =
                  "boolean" == typeof (null == c ? void 0 : c.allowPremium)
                    ? c.allowPremium
                    : "boolean" == typeof (null == h ? void 0 : h.allowPremium)
                      ? h.allowPremium
                      : null,
                k =
                  "string" == typeof (null == c ? void 0 : c.premiumExpiresAt)
                    ? c.premiumExpiresAt
                    : "string" ==
                        typeof (null == h ? void 0 : h.premiumExpiresAt)
                      ? h.premiumExpiresAt
                      : null,
                j = null;
              if (k) {
                let l = new Date(String(k).replace(" ", "T")).getTime();
                j = Number.isFinite(l) ? l : null;
              }
              p({
                loading: !1,
                settings: c,
                globalSettings: h,
                hasPremium:
                  (!!(null == m || null == (l = m.user)
                    ? void 0
                    : l.isPremium) &&
                    (null === j || j > Date.now())) ||
                  !!(S && (null === j || j > Date.now())),
                inheritBranding: E,
                brandLogoUrl: w,
                pdfLogoUrl: x,
              });
            })().catch(() => {
              var l;
              i ||
                p({
                  loading: !1,
                  settings: null,
                  globalSettings: null,
                  hasPremium: !!(null == m || null == (l = m.user)
                    ? void 0
                    : l.isPremium),
                  inheritBranding: !1,
                  brandLogoUrl: null,
                  pdfLogoUrl: null,
                });
            }),
            () => {
              i = !0;
            }
          );
        }, [
          c,
          null == m || null == (n = m.user) ? void 0 : n.id,
          null == m || null == (r = m.user) ? void 0 : r.isPremium,
          null == m || null == (t = m.user) ? void 0 : t.parentUserId,
        ]);
        let h = (0, i.useMemo)(() => f, [f]),
          y = h.loading;
        return (0, e.jsxs)(a.Provider, {
          value: h,
          children: [
            (0, e.jsx)("div", {
              className: "branding-hydrator-overlay".concat(
                y ? " branding-hydrator-overlay--visible" : "",
              ),
              "aria-hidden": !y,
              "aria-live": "polite",
              children: (0, e.jsxs)("div", {
                className: "branding-hydrator-overlay__content",
                role: "status",
                "aria-busy": y,
                children: [
                  (0, e.jsx)(u.A, { size: 36, thickness: 4 }),
                  (0, e.jsx)("span", {
                    className: "branding-hydrator-overlay__label",
                    children: "Personalising your workspace…",
                  }),
                ],
              }),
            }),
            s,
          ],
        });
      }
    },
  },
]);
