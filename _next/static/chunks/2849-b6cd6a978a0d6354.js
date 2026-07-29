(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2849],
  {
    44217: () => {},
    52849: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => ep });
      var r = o(95155),
        a = o(12115),
        l = o(59805),
        n = o(34540);
      function i() {
        let [e, t] = (0, a.useState)(!1),
          [o, i] = (0, a.useState)(l.A.state),
          s = (0, n.d4)((e) => e.extraSlice.logoUrl);
        if (
          ((0, a.useEffect)(
            () =>
              l.A.subscribe(() => {
                t(l.A.state.active), i({ ...l.A.state });
              }),
            [],
          ),
          !e)
        )
          return null;
        let c = "Intro" === o.audio.currentKey,
          p = c && o.audio.isPlaying;
        return (0, r.jsxs)("div", {
          className: "tutorial-overlay",
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 12e3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: o.overlay.blur ? "blur(12px)" : void 0,
            background: o.overlay.blur
              ? "rgba(255,255,255,0.5)"
              : "transparent",
            opacity: +!!o.overlay.blur,
            pointerEvents: o.overlay.blur ? "auto" : "none",
            transition: "opacity 0.3s ease",
            flexDirection: "column",
          },
          children: [
            o.overlay.logoVisible &&
              (0, r.jsx)("img", {
                src: null != s ? s : "",
                alt: "logo",
                style: { width: 180 },
              }),
            (0, r.jsx)("div", {
              className: "intro-wavelength "
                .concat(c ? "show" : "", " ")
                .concat(p ? "playing" : "paused"),
              "aria-hidden": !0,
              children: Array.from({ length: 64 }).map((e, t) =>
                (0, r.jsx)("i", { style: { "--i": t } }, t),
              ),
            }),
            9 === o.step &&
              (0, r.jsx)("button", {
                id: "tutorial-start-designing",
                className: "tutorial-start-btn",
                onClick: () => {
                  l.A.stopTutorial({ resetToStep1: !0 }),
                    (window.location.href = "/Dashboards/userDashboard");
                },
                children: "Start Designing",
              }),
          ],
        });
      }
      function s() {
        let [e, t] = (0, a.useState)(l.A.state),
          [o, n] = (0, a.useState)({}),
          i = (0, a.useRef)(null);
        return ((0, a.useEffect)(
          () =>
            l.A.subscribe(() => {
              t({ ...l.A.state });
            }),
          [],
        ),
        (0, a.useEffect)(() => {
          let t = () => {
            if (e.overlay.dotVisible && e.overlay.dotTargetId) {
              let t = document.querySelector(
                e.overlay.dotTargetId.startsWith("#")
                  ? e.overlay.dotTargetId
                  : "#".concat(e.overlay.dotTargetId),
              );
              if (t) {
                let e = t.getBoundingClientRect();
                n({
                  position: "fixed",
                  top: e.top + e.height / 2 - 5,
                  left: e.left + e.width / 2 - 5,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ce3e70",
                  boxShadow: "0 0 8px 4px rgba(206,62,112,0.6)",
                  zIndex: 13e3,
                  animation: "tutorial-pulse 2s infinite",
                  transition: "top 0.6s linear, left 0.6s linear",
                });
              }
            }
            i.current = requestAnimationFrame(t);
          };
          return (
            (i.current = requestAnimationFrame(t)),
            () => cancelAnimationFrame(i.current)
          );
        }, [e.overlay.dotVisible, e.overlay.dotTargetId]),
        e.active && e.overlay.dotVisible)
          ? (0, r.jsx)("div", { style: o })
          : null;
      }
      o(44217);
      var c = o(12108),
        p = o(68534),
        d = o(54581),
        u = o(700),
        g = o(40917),
        h = o(77856);
      let m = "function" == typeof (0, g.Dp)({}),
        x = (e, t) => ({
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          boxSizing: "border-box",
          WebkitTextSizeAdjust: "100%",
          ...(t && !e.vars && { colorScheme: e.palette.mode }),
        }),
        f = (e) => ({
          color: (e.vars || e).palette.text.primary,
          ...e.typography.body1,
          backgroundColor: (e.vars || e).palette.background.default,
          "@media print": {
            backgroundColor: (e.vars || e).palette.common.white,
          },
        }),
        b = function (e) {
          var t, o;
          let r =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = {};
          r &&
            e.colorSchemes &&
            "function" == typeof e.getColorSchemeSelector &&
            Object.entries(e.colorSchemes).forEach((t) => {
              var o, r;
              let [l, n] = t,
                i = e.getColorSchemeSelector(l);
              i.startsWith("@")
                ? (a[i] = {
                    ":root": {
                      colorScheme: null == (o = n.palette) ? void 0 : o.mode,
                    },
                  })
                : (a[i.replace(/\s*&/, "")] = {
                    colorScheme: null == (r = n.palette) ? void 0 : r.mode,
                  });
            });
          let l = {
              html: x(e, r),
              "*, *::before, *::after": { boxSizing: "inherit" },
              "strong, b": { fontWeight: e.typography.fontWeightBold },
              body: {
                margin: 0,
                ...f(e),
                "&::backdrop": {
                  backgroundColor: (e.vars || e).palette.background.default,
                },
              },
              ...a,
            },
            n =
              null == (o = e.components) || null == (t = o.MuiCssBaseline)
                ? void 0
                : t.styleOverrides;
          return n && (l = [l, n]), l;
        },
        v = "mui-ecs",
        y = (e) => {
          let t = b(e, !1),
            o = Array.isArray(t) ? t[0] : t;
          return (
            !e.vars &&
              o &&
              (o.html[":root:has(".concat(v, ")")] = {
                colorScheme: e.palette.mode,
              }),
            e.colorSchemes &&
              Object.entries(e.colorSchemes).forEach((t) => {
                var r, a;
                let [l, n] = t,
                  i = e.getColorSchemeSelector(l);
                i.startsWith("@")
                  ? (o[i] = {
                      [":root:not(:has(.".concat(v, "))")]: {
                        colorScheme: null == (r = n.palette) ? void 0 : r.mode,
                      },
                    })
                  : (o[i.replace(/\s*&/, "")] = {
                      ["&:not(:has(.".concat(v, "))")]: {
                        colorScheme: null == (a = n.palette) ? void 0 : a.mode,
                      },
                    });
              }),
            t
          );
        },
        A = (0, g.Dp)(
          m
            ? (e) => {
                let { theme: t, enableColorScheme: o } = e;
                return b(t, o);
              }
            : (e) => {
                let { theme: t } = e;
                return y(t);
              },
        ),
        S = function (e) {
          let { children: t, enableColorScheme: o = !1 } = (0, h.b)({
            props: e,
            name: "MuiCssBaseline",
          });
          return (0, r.jsxs)(a.Fragment, {
            children: [
              m && (0, r.jsx)(A, { enableColorScheme: o }),
              !m &&
                !o &&
                (0, r.jsx)("span", {
                  className: v,
                  style: { display: "none" },
                }),
              t,
            ],
          });
        };
      var k = o(52596),
        j = o(17472),
        w = o(75955),
        C = o(40680),
        B = o(13209),
        T = o(98963),
        I = o(18407),
        L = o(55170),
        U = o(90870);
      function z(e) {
        return (0, U.Ay)("MuiAppBar", e);
      }
      (0, L.A)("MuiAppBar", [
        "root",
        "positionFixed",
        "positionAbsolute",
        "positionSticky",
        "positionStatic",
        "positionRelative",
        "colorDefault",
        "colorPrimary",
        "colorSecondary",
        "colorInherit",
        "colorTransparent",
        "colorError",
        "colorInfo",
        "colorSuccess",
        "colorWarning",
      ]);
      let E = (e) => {
          let { color: t, position: o, classes: r } = e,
            a = {
              root: [
                "root",
                "color".concat((0, B.A)(t)),
                "position".concat((0, B.A)(o)),
              ],
            };
          return (0, j.A)(a, z, r);
        },
        X = (e, t) =>
          e
            ? ""
                .concat(null == e ? void 0 : e.replace(")", ""), ", ")
                .concat(t, ")")
            : t,
        P = (0, w.Ay)(I.A, {
          name: "MuiAppBar",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.root,
              t["position".concat((0, B.A)(o.position))],
              t["color".concat((0, B.A)(o.color))],
            ];
          },
        })(
          (0, C.A)((e) => {
            let { theme: t } = e;
            return {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              flexShrink: 0,
              variants: [
                {
                  props: { position: "fixed" },
                  style: {
                    position: "fixed",
                    zIndex: (t.vars || t).zIndex.appBar,
                    top: 0,
                    left: "auto",
                    right: 0,
                    "@media print": { position: "absolute" },
                  },
                },
                {
                  props: { position: "absolute" },
                  style: {
                    position: "absolute",
                    zIndex: (t.vars || t).zIndex.appBar,
                    top: 0,
                    left: "auto",
                    right: 0,
                  },
                },
                {
                  props: { position: "sticky" },
                  style: {
                    position: "sticky",
                    zIndex: (t.vars || t).zIndex.appBar,
                    top: 0,
                    left: "auto",
                    right: 0,
                  },
                },
                {
                  props: { position: "static" },
                  style: { position: "static" },
                },
                {
                  props: { position: "relative" },
                  style: { position: "relative" },
                },
                {
                  props: { color: "inherit" },
                  style: { "--AppBar-color": "inherit" },
                },
                {
                  props: { color: "default" },
                  style: {
                    "--AppBar-background": t.vars
                      ? t.vars.palette.AppBar.defaultBg
                      : t.palette.grey[100],
                    "--AppBar-color": t.vars
                      ? t.vars.palette.text.primary
                      : t.palette.getContrastText(t.palette.grey[100]),
                    ...t.applyStyles("dark", {
                      "--AppBar-background": t.vars
                        ? t.vars.palette.AppBar.defaultBg
                        : t.palette.grey[900],
                      "--AppBar-color": t.vars
                        ? t.vars.palette.text.primary
                        : t.palette.getContrastText(t.palette.grey[900]),
                    }),
                  },
                },
                ...Object.entries(t.palette)
                  .filter((0, T.A)(["contrastText"]))
                  .map((e) => {
                    var o, r;
                    let [a] = e;
                    return {
                      props: { color: a },
                      style: {
                        "--AppBar-background": (null != (o = t.vars) ? o : t)
                          .palette[a].main,
                        "--AppBar-color": (null != (r = t.vars) ? r : t)
                          .palette[a].contrastText,
                      },
                    };
                  }),
                {
                  props: (e) =>
                    !0 === e.enableColorOnDark &&
                    !["inherit", "transparent"].includes(e.color),
                  style: {
                    backgroundColor: "var(--AppBar-background)",
                    color: "var(--AppBar-color)",
                  },
                },
                {
                  props: (e) =>
                    !1 === e.enableColorOnDark &&
                    !["inherit", "transparent"].includes(e.color),
                  style: {
                    backgroundColor: "var(--AppBar-background)",
                    color: "var(--AppBar-color)",
                    ...t.applyStyles("dark", {
                      backgroundColor: t.vars
                        ? X(
                            t.vars.palette.AppBar.darkBg,
                            "var(--AppBar-background)",
                          )
                        : null,
                      color: t.vars
                        ? X(
                            t.vars.palette.AppBar.darkColor,
                            "var(--AppBar-color)",
                          )
                        : null,
                    }),
                  },
                },
                {
                  props: { color: "transparent" },
                  style: {
                    "--AppBar-background": "transparent",
                    "--AppBar-color": "inherit",
                    backgroundColor: "var(--AppBar-background)",
                    color: "var(--AppBar-color)",
                    ...t.applyStyles("dark", { backgroundImage: "none" }),
                  },
                },
              ],
            };
          }),
        ),
        D = a.forwardRef(function (e, t) {
          let o = (0, h.b)({ props: e, name: "MuiAppBar" }),
            {
              className: a,
              color: l = "primary",
              enableColorOnDark: n = !1,
              position: i = "fixed",
              ...s
            } = o,
            c = { ...o, color: l, position: i, enableColorOnDark: n },
            p = E(c);
          return (0, r.jsx)(P, {
            square: !0,
            component: "header",
            ownerState: c,
            elevation: 4,
            className: (0, k.A)(p.root, a, "fixed" === i && "mui-fixed"),
            ref: t,
            ...s,
          });
        });
      var M = o(83729),
        N = o(86220),
        O = o(79710),
        W = o(74964),
        R = o(14426),
        F = o(76380),
        _ = o(71803),
        V = o(41101),
        Y = o(42663),
        q = o(16324),
        H = o(4420),
        G = o(98028),
        J = o(19114),
        K = o(38274),
        Z = o(35695),
        Q = o(1743),
        $ = o(17951);
      let ee = (0, o(31418).A)(
        (0, r.jsx)("path", {
          d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z",
        }),
        "NotificationsNone",
      );
      var et = o(21136),
        eo = o(95576),
        er = o(53554),
        ea = o(91950),
        el = o(32817),
        en = o(76928);
      let ei = (e) => {
          if ("string" != typeof e) return null;
          let t = e.trim();
          return t.length > 0 ? t : null;
        },
        es = (e) => {
          if (!e) return null;
          let t = new Date(e);
          return Number.isNaN(t.getTime()) ? null : t.toLocaleString();
        },
        ec = (e, t) => {
          let o = es(e),
            r = es(t);
          return o && r
            ? "".concat(o, " — ").concat(r)
            : o
              ? "From ".concat(o)
              : r
                ? "Until ".concat(r)
                : null;
        };
      function ep() {
        var e, t, o, g, h, m, x;
        let { data: f } = (0, c.useSession)(),
          b =
            (null == f || null == (e = f.user) ? void 0 : e.role) ===
            "SuperAdmin",
          v = (0, Z.useRouter)(),
          y = (0, Z.usePathname)(),
          A = (0, q.A)(),
          k = !!(null !=
          (m = null == f || null == (t = f.user) ? void 0 : t.parentUserId)
            ? m
            : null),
          j = (0, n.wA)(),
          {
            notifications: w,
            unreadCount: C,
            loading: B,
            refresh: T,
            acknowledge: I,
          } = (0, er.E)(),
          [L, U] = (0, a.useState)(null),
          [z, E] = (0, a.useState)(!1),
          [X, P] = (0, a.useState)(null),
          ep = !!L,
          ed = (0, a.useMemo)(
            () =>
              C > 0
                ? ""
                    .concat(C, " unread notification")
                    .concat(1 === C ? "" : "s")
                : "Notifications",
            [C],
          ),
          eu = () => {
            U(null);
          },
          eg = (e) => {
            P(e), E(!0), I(e.id, "view"), eu();
          },
          [eh, em] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          em(!0);
        }, []);
        let ex = (0, n.d4)((e) => e.loginSignUpSlice.userType),
          ef = (0, n.d4)((e) => e.extraSlice.logoUrl);
        (0, n.d4)((e) => e.extraSlice.pdfLogoUrl);
        let eb = (0, n.d4)((e) => e.cartData.cartItems.length),
          {
            loading: ev,
            settings: ey,
            globalSettings: eA,
            hasPremium: eS,
            inheritBranding: ek,
            brandLogoUrl: ej,
            pdfLogoUrl: ew,
          } = (0, en.Z)(),
          [eC, eB] = (0, a.useState)(() =>
            "boolean" == typeof (null == ey ? void 0 : ey.showLiveTutorial)
              ? !!ey.showLiveTutorial
              : "boolean" !=
                  typeof (null == eA ? void 0 : eA.showLiveTutorial) ||
                !!eA.showLiveTutorial,
          ),
          eT = en.c,
          [eI, eL] = (0, a.useState)(eT),
          [eU, ez] = (0, a.useState)(1),
          eE = (0, a.useMemo)(() => {
            let e = ei(null == ey ? void 0 : ey.logoUrl);
            return e || ei(null == eA ? void 0 : eA.logoUrl);
          }, [
            null == ey ? void 0 : ey.logoUrl,
            null == eA ? void 0 : eA.logoUrl,
          ]);
        (0, a.useMemo)(() => {
          let e = ei(null == ey ? void 0 : ey.pdfLogoUrl);
          if (e) return e;
          let t = ei(null == eA ? void 0 : eA.pdfLogoUrl);
          return t || eE;
        }, [
          null == ey ? void 0 : ey.pdfLogoUrl,
          null == eA ? void 0 : eA.pdfLogoUrl,
          eE,
        ]);
        let eX = (0, a.useRef)(!1),
          eP = (0, a.useMemo)(() => ei(ef), [ef]),
          eD = (0, a.useMemo)(() => {
            for (let e of [ej, null == ey ? void 0 : ey.logoUrl]) {
              let t = ei(e);
              if (t && t !== eT) return t;
            }
            return null;
          }, [ej, null == ey ? void 0 : ey.logoUrl, eT]),
          eM = (0, a.useMemo)(() => {
            for (let e of [
              ew,
              null == ey ? void 0 : ey.pdfLogoUrl,
              ej,
              null == ey ? void 0 : ey.logoUrl,
              null == eA ? void 0 : eA.pdfLogoUrl,
              null == eA ? void 0 : eA.logoUrl,
            ]) {
              let t = ei(e);
              if (t) return t;
            }
            return null;
          }, [
            ew,
            null == ey ? void 0 : ey.pdfLogoUrl,
            ej,
            null == ey ? void 0 : ey.logoUrl,
            null == eA ? void 0 : eA.pdfLogoUrl,
            null == eA ? void 0 : eA.logoUrl,
          ]),
          eN = (0, a.useMemo)(() => {
            let e = ei(null == eA ? void 0 : eA.logoUrl);
            return e && e !== eT ? e : null;
          }, [null == eA ? void 0 : eA.logoUrl, eT]),
          [eO, eW] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          var e;
          let t = null == f || null == (e = f.user) ? void 0 : e.id;
          if (t)
            try {
              let e = localStorage.getItem("showLiveTutorial_".concat(t));
              null !== e && eB("true" === e);
            } catch (e) {}
        }, [null == f || null == (o = f.user) ? void 0 : o.id]),
          (0, a.useEffect)(() => {
            ev ||
              ("boolean" == typeof (null == ey ? void 0 : ey.showLiveTutorial)
                ? eB(!!ey.showLiveTutorial)
                : "boolean" ==
                    typeof (null == eA ? void 0 : eA.showLiveTutorial)
                  ? eB(!!eA.showLiveTutorial)
                  : eB(!0));
          }, [
            ev,
            null == ey ? void 0 : ey.showLiveTutorial,
            null == eA ? void 0 : eA.showLiveTutorial,
          ]),
          (0, a.useEffect)(() => {
            !ev &&
              (eD
                ? (ek &&
                    (eL(eD),
                    "undefined" != typeof document &&
                      document.documentElement.style.setProperty(
                        "--nav-logo-scale",
                        "1",
                      )),
                  j((0, Q.bX)({ url: eD })))
                : eS || ek || j((0, Q.bX)({ url: eT })),
              eM
                ? j((0, Q.fl)({ url: eM }))
                : eS || ek || j((0, Q.fl)({ url: eT })));
          }, [ev, eD, eM, ek, eS, j, eT]),
          (0, a.useEffect)(() => {
            let e = (e) => {
              try {
                let t = e.detail;
                eB(!!t);
              } catch (e) {}
            };
            return (
              window.addEventListener("userSettings:showLiveTutorial", e),
              () => {
                window.removeEventListener("userSettings:showLiveTutorial", e);
              }
            );
          }, []),
          (0, a.useEffect)(() => {
            var e;
            let t = null == f || null == (e = f.user) ? void 0 : e.id;
            if (t) {
              if (ek) {
                ez(1),
                  document.documentElement.style.setProperty(
                    "--nav-logo-scale",
                    "1",
                  );
                return;
              }
              if (!eS) {
                eL(eT),
                  ez(1),
                  document.documentElement.style.setProperty(
                    "--nav-logo-scale",
                    "1",
                  );
                try {
                  localStorage.setItem("siteLogoScale_".concat(t), "1");
                } catch (e) {}
                return;
              }
              try {
                let e = localStorage.getItem("siteLogo_".concat(t)) || eT,
                  o = localStorage.getItem("siteLogoScale_".concat(t)),
                  r = o ? Math.max(0.5, Math.min(2, Number(o))) : 1;
                eL(e),
                  ez(r),
                  document.documentElement.style.setProperty(
                    "--nav-logo-scale",
                    String(r),
                  );
              } catch (e) {}
            }
          }, [null == f || null == (g = f.user) ? void 0 : g.id, eS, ek]),
          (0, a.useEffect)(() => {
            if (ev) return;
            let e = ek ? eD : null;
            if (e && eI !== e) return void eL(e);
            let t = eP && eP !== eT ? eP : null,
              o = eD || t || eN || null;
            if (o && eI !== o) return void eL(o);
            o || eS || ek || eI === eT || eL(eT);
          }, [ev, ek, eD, eP, eN, eS, eI, eT]);
        let [eR, eF] = (0, a.useState)([]);
        (0, a.useEffect)(() => {
          1 === ex
            ? eF([
                { label: "Orders", path: "/AdminPages/Orders" },
                { label: "Pricing", path: "/AdminPages/ProductPricing" },
                { label: "Sales", path: "/AdminPages/Salesperson" },
                { label: "Users", path: "/AdminPages/UserCreation" },
                { label: "Accessories", path: "/AdminPages/AddAccessories" },
                { label: "Profile", path: "/AdminPages/Profile" },
              ])
            : eF([]);
        }, [ex]);
        let [e_, eV] = (0, a.useState)(null),
          eY = () => eV(null),
          eq = (0, a.useMemo)(() => {
            var e, t, o, r;
            return null !=
              (r =
                null !=
                (o = null == f || null == (e = f.user) ? void 0 : e.name)
                  ? o
                  : null == f || null == (t = f.user)
                    ? void 0
                    : t.email)
              ? r
              : "";
          }, [f]),
          eH = (0, a.useMemo)(() => {
            let e = eq
              .split(/\s+|@|\./)
              .filter(Boolean)
              .map((e) => e.charAt(0).toUpperCase());
            return e.length >= 2
              ? e[0] + e[1]
              : 1 === e.length
                ? e[0] + e[0]
                : "??";
          }, [eq]),
          eG = (0, a.useMemo)(
            () => eS || ek || (eI && eI !== eT),
            [eS, ek, eI, eT],
          ),
          eJ = (0, a.useMemo)(() => {
            if (!eG) return eT;
            let e = ei(eI);
            return e && e !== eT
              ? e
              : k && eD
                ? eD
                : k && eM
                  ? eM
                  : (ek && eD) || eD
                    ? eD
                    : eP || eN || eT;
          }, [eG, eT, eI, ek, eD, eP, eN, eM, k]);
        (0, a.useEffect)(() => {
          eX.current = !1;
        }, [eJ]);
        let eK = !eS && !k,
          eZ = eK && eO,
          eQ = (e) => {
            let { primary: t, secondary: o, onClick: a, title: l, id: n } = e;
            return (0, r.jsx)(p.A, {
              id: n,
              onClick: a,
              title: l,
              sx: {
                position: "relative",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(120deg, rgba(56,189,248,0.95) 0%, rgba(168,85,247,0.95) 45%, rgba(249,115,22,0.95) 100%)",
                color: "#fff",
                fontWeight: 700,
                px: 2.75,
                py: 0.75,
                borderRadius: 9999,
                textTransform: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                letterSpacing: 0.3,
                boxShadow: "0 18px 40px rgba(168,85,247,0.35)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px) scale(1.01)",
                  boxShadow: "0 26px 60px rgba(168,85,247,0.45)",
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.45), rgba(255,255,255,0) 55%)",
                  opacity: 0.75,
                  mixBlendMode: "screen",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  inset: "-60%",
                  background:
                    "conic-gradient(from 90deg, rgba(56,189,248,0.25), rgba(236,72,153,0.15), rgba(249,115,22,0.2), rgba(56,189,248,0.25))",
                  animation: "rotateAura 6s linear infinite",
                  opacity: 0.55,
                },
                "@keyframes rotateAura": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              },
              children: (0, r.jsxs)(d.A, {
                component: "span",
                sx: {
                  position: "relative",
                  zIndex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                },
                children: [
                  (0, r.jsx)(d.A, {
                    component: "span",
                    sx: {
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.18)",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.25)",
                      backdropFilter: "blur(6px)",
                    },
                    children: (0, r.jsx)($.A, { size: 18, color: "#fde68a" }),
                  }),
                  (0, r.jsxs)(d.A, {
                    component: "span",
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    },
                    children: [
                      (0, r.jsx)(u.A, {
                        component: "span",
                        sx: { fontWeight: 800, fontSize: 15, lineHeight: 1 },
                        children: t,
                      }),
                      (0, r.jsx)(u.A, {
                        component: "span",
                        sx: { fontSize: 11, fontWeight: 500, opacity: 0.85 },
                        children: o,
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          e$ = () => eW(!1);
        return (
          (0, a.useEffect)(() => {
            !eK && eO && eW(!1);
          }, [eK, eO]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              eK &&
                (0, r.jsx)(el.v, {
                  open: eZ,
                  onClose: e$,
                  onSubscribe: () => {
                    e$(), v.push("/premium/payment");
                  },
                }),
              (0, r.jsx)(S, {}),
              (0, r.jsx)(i, {}),
              (0, r.jsx)(s, {}),
              (0, r.jsx)(J.N, {
                mode: "wait",
                children:
                  !ev &&
                  (0, r.jsx)(
                    K.P.div,
                    {
                      initial: { opacity: 0, filter: "blur(12px)" },
                      animate: { opacity: 1, filter: "blur(0px)" },
                      exit: { opacity: 0, filter: "blur(12px)" },
                      transition: { duration: 0.3, ease: "easeOut" },
                      children: (0, r.jsx)(D, {
                        position: "static",
                        sx: { bgcolor: "white", color: "black" },
                        elevation: 0,
                        children: (0, r.jsxs)(d.A, {
                          sx: {
                            display: "flex",
                            alignItems: "center",
                            px: 2.5,
                            py: 1,
                          },
                          children: [
                            (0, r.jsxs)(d.A, {
                              sx: {
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                cursor: "pointer",
                              },
                              onClick: () => {
                                "/Dashboards/userDashboard" !== y &&
                                  v.push("/Dashboards/userDashboard");
                              },
                              children: [
                                (0, r.jsx)("img", {
                                  src: eJ,
                                  alt: "Logo",
                                  onError: (e) => {
                                    !eX.current &&
                                      (e.currentTarget.src.includes(eT) ||
                                        ((eX.current = !0),
                                        (e.currentTarget.onerror = null),
                                        (e.currentTarget.src = eT),
                                        eL(eT),
                                        j((0, Q.bX)({ url: eT }))));
                                  },
                                  style: {
                                    height: 40,
                                    width: "auto",
                                    transform:
                                      "scale(var(--nav-logo-scale, 1))",
                                    transformOrigin: "left center",
                                    display: "block",
                                  },
                                }),
                                (!eS || eC) &&
                                  !k &&
                                  (0, r.jsx)(p.A, {
                                    variant: "outlined",
                                    color: "secondary",
                                    onClick: (e) => {
                                      e.stopPropagation(),
                                        "/Dashboards/userDashboard" !== y &&
                                          v.push("/Dashboards/userDashboard"),
                                        l.A.startTutorial();
                                    },
                                    sx: { ml: 2, textTransform: "none" },
                                    children: "Live Tutorial",
                                  }),
                              ],
                            }),
                            eR.map((e) =>
                              (0, r.jsx)(
                                p.A,
                                {
                                  color: "inherit",
                                  onClick: () => v.push(e.path),
                                  children: e.label,
                                },
                                e.path,
                              ),
                            ),
                            !k &&
                              eK &&
                              eQ({
                                id: "upgrade-switchcraft-button",
                                onClick: () => eW(!0),
                                primary: "Upgrade to SwitchCraft+",
                                secondary: "Unlock the signature experience",
                                title: "Upgrade to SwitchCraft+",
                              }),
                            !k &&
                              eS &&
                              eQ({
                                onClick: () =>
                                  v.push("/Dashboards/premiumdash"),
                                primary: "SwitchCraft+",
                                secondary: "Access your premium hub",
                                title: "SwitchCraft+ Hub",
                              }),
                            (0, r.jsxs)(N.A, {
                              onClick: () => v.push("/orders?tab=cart"),
                              sx: {
                                mx: 1.5,
                                position: "relative",
                                borderRadius: 3,
                                background: "linear-gradient(135deg, ".concat((0, H.X4)(A.palette.primary.main, 0.12), ", ").concat((0, H.X4)(A.palette.secondary.main, 0.18), ")"),
                                color: A.palette.primary.main,
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                boxShadow: "0 12px 28px ".concat((0, H.X4)(A.palette.primary.main, 0.18)),
                                "&:hover": {
                                  transform: "translateY(-1px)",
                                  boxShadow: "0 18px 36px ".concat((0, H.X4)(A.palette.primary.main, 0.26)),
                                  background: "linear-gradient(135deg, ".concat((0, H.X4)(A.palette.primary.main, 0.18), ", ").concat((0, H.X4)(A.palette.secondary.main, 0.24), ")")
                                }
                              },
                              children: [
                                (0, r.jsx)(G.A, { sx: { fontSize: 30 } }),
                                (0, r.jsx)(d.A, {
                                  sx: {
                                    position: "absolute",
                                    top: -4,
                                    right: -4,
                                  },
                                  children: (0, r.jsx)(J.N, {
                                    mode: "wait",
                                    children:
                                      eh &&
                                      (0, r.jsx)(
                                        K.P.span,
                                        {
                                          initial: { y: -8, opacity: 0 },
                                          animate: { y: 0, opacity: 1 },
                                          exit: { y: 8, opacity: 0 },
                                          transition: { duration: 0.2 },
                                          className: "cart-badge",
                                          children: eb,
                                        },
                                        eb,
                                      ),
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(M.A, {
                              title: ed,
                              children: (0, r.jsxs)(N.A, {
                                id: "notification-bell",
                                onClick: (e) => {
                                  U(e.currentTarget), T();
                                },
                                "aria-controls": ep
                                  ? "notifications-menu"
                                  : void 0,
                                "aria-haspopup": "true",
                                "aria-expanded": ep ? "true" : void 0,
                                "aria-label": ed,
                                sx: {
                                  mx: 1.5,
                                  position: "relative",
                                  borderRadius: 3,
                                  background: "linear-gradient(135deg, "
                                    .concat(
                                      (0, H.X4)(A.palette.primary.main, 0.12),
                                      ", ",
                                    )
                                    .concat(
                                      (0, H.X4)(A.palette.secondary.main, 0.18),
                                      ")",
                                    ),
                                  color: A.palette.primary.main,
                                  transition:
                                    "transform 0.2s ease, box-shadow 0.2s ease",
                                  boxShadow: "0 12px 28px ".concat(
                                    (0, H.X4)(A.palette.primary.main, 0.18),
                                  ),
                                  "&:hover .notification-dot": {
                                    transform: "scale(1.1)",
                                  },
                                  "&:hover": {
                                    transform: "translateY(-1px)",
                                    boxShadow: "0 18px 36px ".concat(
                                      (0, H.X4)(A.palette.primary.main, 0.26),
                                    ),
                                    background: "linear-gradient(135deg, "
                                      .concat(
                                        (0, H.X4)(A.palette.primary.main, 0.18),
                                        ", ",
                                      )
                                      .concat(
                                        (0, H.X4)(
                                          A.palette.secondary.main,
                                          0.24,
                                        ),
                                        ")",
                                      ),
                                  },
                                },
                                children: [
                                  C > 0 &&
                                    (0, r.jsx)(d.A, {
                                      component: "span",
                                      className: "notification-dot",
                                      sx: {
                                        position: "absolute",
                                        top: 6,
                                        right: 6,
                                        width: 12,
                                        height: 12,
                                        borderRadius: 9999,
                                        border: "2px solid ".concat(
                                          (0, H.X4)(
                                            A.palette.background.paper,
                                            0.9,
                                          ),
                                        ),
                                        backgroundImage:
                                          "radial-gradient(circle at 30% 30%, "
                                            .concat(
                                              (0, H.X4)(
                                                A.palette.error.light,
                                                0.9,
                                              ),
                                              ", ",
                                            )
                                            .concat(A.palette.error.main, ")"),
                                        boxShadow: "0 0 0 1px "
                                          .concat(
                                            (0, H.X4)(
                                              A.palette.background.paper,
                                              0.6,
                                            ),
                                            ", 0 8px 18px ",
                                          )
                                          .concat(
                                            (0, H.X4)(
                                              A.palette.error.main,
                                              0.45,
                                            ),
                                          ),
                                        transition: "transform 0.2s ease",
                                        display: "inline-block",
                                        transformOrigin: "center",
                                        "&::after": {
                                          content: '""',
                                          position: "absolute",
                                          inset: "-6px",
                                          borderRadius: "inherit",
                                          background:
                                            "radial-gradient(circle, ".concat(
                                              (0, H.X4)(
                                                A.palette.error.main,
                                                0.35,
                                              ),
                                              ", transparent 65%)",
                                            ),
                                          opacity: 0.9,
                                        },
                                      },
                                    }),
                                  C > 0
                                    ? (0, r.jsx)(et.A, { sx: { fontSize: 26 } })
                                    : (0, r.jsx)(ee, { sx: { fontSize: 26 } }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)(O.A, {
                              id: "notifications-menu",
                              anchorEl: L,
                              open: ep,
                              onClose: eu,
                              anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right",
                              },
                              transformOrigin: {
                                vertical: "top",
                                horizontal: "right",
                              },
                              PaperProps: {
                                elevation: 0,
                                sx: {
                                  minWidth: 340,
                                  maxWidth: 420,
                                  p: 0,
                                  mt: 1.5,
                                  overflow: "hidden",
                                  borderRadius: 3,
                                  border: "1px solid ".concat(
                                    (0, H.X4)(A.palette.primary.main, 0.12),
                                  ),
                                  boxShadow: "0 24px 60px ".concat(
                                    (0, H.X4)(A.palette.primary.main, 0.24),
                                  ),
                                  backgroundImage: "linear-gradient(180deg, "
                                    .concat(
                                      (0, H.X4)(
                                        A.palette.background.paper,
                                        0.96,
                                      ),
                                      ", ",
                                    )
                                    .concat(
                                      (0, H.X4)(
                                        A.palette.background.default,
                                        0.92,
                                      ),
                                      ")",
                                    ),
                                  backdropFilter: "blur(18px)",
                                },
                              },
                              children: [
                                (0, r.jsxs)(d.A, {
                                  sx: {
                                    px: 2.5,
                                    py: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 1,
                                    background: "linear-gradient(135deg, "
                                      .concat(
                                        (0, H.X4)(A.palette.primary.main, 0.16),
                                        ", ",
                                      )
                                      .concat(
                                        (0, H.X4)(
                                          A.palette.secondary.main,
                                          0.14,
                                        ),
                                        ")",
                                      ),
                                    color: A.palette.getContrastText(
                                      A.palette.primary.dark,
                                    ),
                                  },
                                  children: [
                                    (0, r.jsx)(u.A, {
                                      variant: "subtitle1",
                                      fontWeight: 600,
                                      children: "Notifications",
                                    }),
                                    (0, r.jsx)(p.A, {
                                      size: "small",
                                      variant: "outlined",
                                      color: "inherit",
                                      onClick: () => {
                                        T();
                                      },
                                      sx: {
                                        borderColor: (0, H.X4)(
                                          A.palette.common.white,
                                          0.4,
                                        ),
                                        color: "inherit",
                                        "&:hover": {
                                          borderColor: (0, H.X4)(
                                            A.palette.common.white,
                                            0.8,
                                          ),
                                          backgroundColor: (0, H.X4)(
                                            A.palette.common.white,
                                            0.12,
                                          ),
                                        },
                                      },
                                      children: "Refresh",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(W.A, { sx: { opacity: 0.6 } }),
                                B
                                  ? (0, r.jsxs)(d.A, {
                                      sx: {
                                        p: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                      },
                                      children: [
                                        (0, r.jsx)(R.A, { size: 20 }),
                                        (0, r.jsx)(u.A, {
                                          variant: "body2",
                                          color: "text.secondary",
                                          children: "Loading updates…",
                                        }),
                                      ],
                                    })
                                  : 0 === w.length
                                    ? (0, r.jsx)(d.A, {
                                        sx: { p: 2 },
                                        children: (0, r.jsx)(u.A, {
                                          variant: "body2",
                                          color: "text.secondary",
                                          children: "You’re all caught up!",
                                        }),
                                      })
                                    : (0, r.jsx)(d.A, {
                                        sx: {
                                          maxHeight: 360,
                                          overflowY: "auto",
                                        },
                                        children: w.map((e) => {
                                          var t, o;
                                          let a =
                                              null !=
                                              (t = ec(e.startAt, e.endAt))
                                                ? t
                                                : es(e.createdAt)
                                                  ? "Created ".concat(
                                                      es(e.createdAt),
                                                    )
                                                  : null,
                                            l =
                                              (null != (o = e.seenCount)
                                                ? o
                                                : 0) === 0;
                                          return (0, r.jsx)(
                                            F.A,
                                            {
                                              onClick: () => eg(e),
                                              sx: {
                                                alignItems: "stretch",
                                                py: 1.75,
                                                px: 2.25,
                                                whiteSpace: "normal",
                                                borderBottom:
                                                  "1px solid ".concat(
                                                    (0, H.X4)(
                                                      A.palette.divider,
                                                      0.4,
                                                    ),
                                                  ),
                                                backgroundColor: l
                                                  ? (0, H.X4)(
                                                      A.palette.primary.main,
                                                      0.08,
                                                    )
                                                  : "transparent",
                                                transition:
                                                  "background-color 0.2s ease, transform 0.2s ease",
                                                "&:hover": {
                                                  backgroundColor: (0, H.X4)(
                                                    A.palette.primary.main,
                                                    0.12,
                                                  ),
                                                  transform: "translateY(-1px)",
                                                },
                                                "&:last-of-type": {
                                                  borderBottom: "none",
                                                },
                                              },
                                              children: (0, r.jsxs)(_.A, {
                                                spacing: 1.1,
                                                sx: { width: "100%" },
                                                children: [
                                                  (0, r.jsxs)(_.A, {
                                                    direction: "row",
                                                    justifyContent:
                                                      "space-between",
                                                    alignItems: "center",
                                                    spacing: 1.25,
                                                    children: [
                                                      (0, r.jsx)(u.A, {
                                                        variant: "subtitle1",
                                                        sx: {
                                                          fontWeight: 600,
                                                          color:
                                                            A.palette.text
                                                              .primary,
                                                        },
                                                        children:
                                                          e.title ||
                                                          "Announcement",
                                                      }),
                                                      (0, r.jsxs)(_.A, {
                                                        direction: "row",
                                                        spacing: 0.75,
                                                        alignItems: "center",
                                                        children: [
                                                          l &&
                                                            (0, r.jsx)(V.A, {
                                                              label: "New",
                                                              color: "primary",
                                                              size: "small",
                                                              sx: {
                                                                fontWeight: 600,
                                                              },
                                                            }),
                                                          e.shouldDisplayBanner &&
                                                            (0, r.jsx)(V.A, {
                                                              label: "Active",
                                                              size: "small",
                                                              color: "success",
                                                              variant:
                                                                "outlined",
                                                              sx: {
                                                                fontWeight: 500,
                                                              },
                                                            }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)(u.A, {
                                                    variant: "body2",
                                                    color: "text.secondary",
                                                    sx: {
                                                      display: "-webkit-box",
                                                      WebkitLineClamp: 3,
                                                      WebkitBoxOrient:
                                                        "vertical",
                                                      overflow: "hidden",
                                                    },
                                                    children: e.message,
                                                  }),
                                                  b &&
                                                    (0, r.jsxs)(_.A, {
                                                      direction: "row",
                                                      spacing: 1,
                                                      alignItems: "center",
                                                      flexWrap: "wrap",
                                                      rowGap: 0.75,
                                                      children: [
                                                        (0, r.jsx)(V.A, {
                                                          label:
                                                            e.displayMode.replaceAll(
                                                              "_",
                                                              " ",
                                                            ),
                                                          size: "small",
                                                          variant: "outlined",
                                                          sx: {
                                                            textTransform:
                                                              "capitalize",
                                                          },
                                                        }),
                                                        a &&
                                                          (0, r.jsx)(u.A, {
                                                            variant: "caption",
                                                            color:
                                                              "text.secondary",
                                                            children: a,
                                                          }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            },
                                            e.id,
                                          );
                                        }),
                                      }),
                              ],
                            }),
                            (0, r.jsx)(N.A, {
                              onClick: (e) => eV(e.currentTarget),
                              sx: { ml: 2, p: 0 },
                              children: (0, r.jsxs)(d.A, {
                                className: "avatar-ring",
                                sx: { position: "relative" },
                                children: [
                                  (0, r.jsx)(Y.A, {
                                    src:
                                      null !=
                                      (x =
                                        null == f || null == (h = f.user)
                                          ? void 0
                                          : h.image)
                                        ? x
                                        : void 0,
                                    alt: eq,
                                    sx: { width: 40, height: 40 },
                                    children: eH,
                                  }),
                                  eS &&
                                    (0, r.jsx)($.A, {
                                      size: 18,
                                      color: "#eab308",
                                      style: {
                                        position: "absolute",
                                        top: -4,
                                        right: -4,
                                      },
                                    }),
                                ],
                              }),
                            }),
                            (0, r.jsx)(O.A, {
                              anchorEl: e_,
                              open: !!e_,
                              onClose: eY,
                              anchorOrigin: {
                                vertical: "top",
                                horizontal: "right",
                              },
                              transformOrigin: {
                                vertical: "top",
                                horizontal: "right",
                              },
                              children: [
                                "View Profile",
                                "View Orders",
                                "Logout",
                              ].map((e) =>
                                (0, r.jsx)(
                                  F.A,
                                  {
                                    onClick: () => {
                                      eY(),
                                        "Logout" === e
                                          ? fetch("/api/logs", {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                action: "logout",
                                              }),
                                            }).finally(() => {
                                              (0, c.signOut)({
                                                callbackUrl: (0, ea.d)(),
                                              });
                                            })
                                          : "View Orders" === e
                                            ? v.push("/orders?tab=orders")
                                            : v.push("/profile");
                                    },
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                            (0, r.jsx)(eo.w, {
                              open: z,
                              notification: X,
                              onClose: () => {
                                E(!1), P(null);
                              },
                            }),
                          ],
                        }),
                      }),
                    },
                    "nav-appbar",
                  ),
              }),
            ],
          })
        );
      }
    },
  },
]);
