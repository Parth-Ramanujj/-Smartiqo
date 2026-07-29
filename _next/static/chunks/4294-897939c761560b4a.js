(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4294],
  {
    4294: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 28395));
    },
    28395: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => e0 });
      var a = r(95155),
        o = r(12115),
        l = r(66766),
        n = r(16324),
        i = r(54581),
        s = r(700),
        c = r(67217),
        d = r(68534),
        u = r(49994),
        m = r(18096),
        g = r(78449),
        h = r(94862),
        p = r(27088),
        f = r(17348),
        x = r(16675),
        y = r(63457),
        b = r(41101),
        v = r(76380),
        w = r(44296),
        A = r(18407),
        j = r(17976),
        P = r(56033),
        S = r(4420),
        D = r(90404),
        C = r(64263),
        F = r(64572),
        N = r(99776),
        L = r(86220),
        U = r(83729),
        k = r(36114),
        I = r(99927),
        E = r(54492),
        R = r(71977),
        q = r(43430);
      let z = function (e) {
        let { children: t, defer: r = !1, fallback: a = null } = e,
          [l, n] = o.useState(!1);
        return (
          (0, q.A)(() => {
            r || n(!0);
          }, [r]),
          o.useEffect(() => {
            r && n(!0);
          }, [r]),
          l ? t : a
        );
      };
      var M = r(40510),
        T = r(31418);
      let O = (0, T.A)(
        (0, a.jsx)("path", {
          d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5z",
        }),
        "FileDownloadOutlined",
      );
      var B = r(69242),
        W = r(41573),
        Q = r(74637);
      let _ = (0, T.A)(
        (0, a.jsx)("path", {
          d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
        }),
        "RemoveCircleOutline",
      );
      var G = r(11005),
        V = r(28890),
        H = r(52596),
        X = r(31448),
        Z = r(48908),
        K = r(17472),
        J = r(75955),
        Y = r(40680),
        $ = r(77856),
        ee = r(84540),
        et = r(93789),
        er = r(36863),
        ea = r(47798),
        eo = r(55170),
        el = r(90870);
      function en(e) {
        return (0, el.Ay)("MuiCollapse", e);
      }
      (0, eo.A)("MuiCollapse", [
        "root",
        "horizontal",
        "vertical",
        "entered",
        "hidden",
        "wrapper",
        "wrapperInner",
      ]);
      let ei = (e) => {
          let { orientation: t, classes: r } = e;
          return (0, K.A)(
            {
              root: ["root", "".concat(t)],
              entered: ["entered"],
              hidden: ["hidden"],
              wrapper: ["wrapper", "".concat(t)],
              wrapperInner: ["wrapperInner", "".concat(t)],
            },
            en,
            r,
          );
        },
        es = (0, J.Ay)("div", {
          name: "MuiCollapse",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              t[r.orientation],
              "entered" === r.state && t.entered,
              "exited" === r.state &&
                !r.in &&
                "0px" === r.collapsedSize &&
                t.hidden,
            ];
          },
        })(
          (0, Y.A)((e) => {
            let { theme: t } = e;
            return {
              height: 0,
              overflow: "hidden",
              transition: t.transitions.create("height"),
              variants: [
                {
                  props: { orientation: "horizontal" },
                  style: {
                    height: "auto",
                    width: 0,
                    transition: t.transitions.create("width"),
                  },
                },
                {
                  props: { state: "entered" },
                  style: { height: "auto", overflow: "visible" },
                },
                {
                  props: { state: "entered", orientation: "horizontal" },
                  style: { width: "auto" },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return (
                      "exited" === t.state && !t.in && "0px" === t.collapsedSize
                    );
                  },
                  style: { visibility: "hidden" },
                },
              ],
            };
          }),
        ),
        ec = (0, J.Ay)("div", { name: "MuiCollapse", slot: "Wrapper" })({
          display: "flex",
          width: "100%",
          variants: [
            {
              props: { orientation: "horizontal" },
              style: { width: "auto", height: "100%" },
            },
          ],
        }),
        ed = (0, J.Ay)("div", { name: "MuiCollapse", slot: "WrapperInner" })({
          width: "100%",
          variants: [
            {
              props: { orientation: "horizontal" },
              style: { width: "auto", height: "100%" },
            },
          ],
        }),
        eu = o.forwardRef(function (e, t) {
          let r = (0, $.b)({ props: e, name: "MuiCollapse" }),
            {
              addEndListener: l,
              children: i,
              className: s,
              collapsedSize: c = "0px",
              component: d,
              easing: u,
              in: m,
              onEnter: g,
              onEntered: h,
              onEntering: p,
              onExit: f,
              onExited: x,
              onExiting: y,
              orientation: b = "vertical",
              slots: v = {},
              slotProps: w = {},
              style: A,
              timeout: j = ee.p0.standard,
              TransitionComponent: P = X.Ay,
              ...S
            } = r,
            D = { ...r, orientation: b, collapsedSize: c },
            C = ei(D),
            F = (0, n.A)(),
            N = (0, Z.A)(),
            L = o.useRef(null),
            U = o.useRef(),
            k = "number" == typeof c ? "".concat(c, "px") : c,
            I = "horizontal" === b,
            E = I ? "width" : "height",
            R = o.useRef(null),
            q = (0, er.A)(t, R),
            z = (e) => (t) => {
              if (e) {
                let r = R.current;
                void 0 === t ? e(r) : e(r, t);
              }
            },
            M = () =>
              L.current ? L.current[I ? "clientWidth" : "clientHeight"] : 0,
            T = z((e, t) => {
              L.current && I && (L.current.style.position = "absolute"),
                (e.style[E] = k),
                g && g(e, t);
            }),
            O = z((e, t) => {
              let r = M();
              L.current && I && (L.current.style.position = "");
              let { duration: a, easing: o } = (0, et.c)(
                { style: A, timeout: j, easing: u },
                { mode: "enter" },
              );
              if ("auto" === j) {
                let t = F.transitions.getAutoHeightDuration(r);
                (e.style.transitionDuration = "".concat(t, "ms")),
                  (U.current = t);
              } else
                e.style.transitionDuration =
                  "string" == typeof a ? a : "".concat(a, "ms");
              (e.style[E] = "".concat(r, "px")),
                (e.style.transitionTimingFunction = o),
                p && p(e, t);
            }),
            B = z((e, t) => {
              (e.style[E] = "auto"), h && h(e, t);
            }),
            W = z((e) => {
              (e.style[E] = "".concat(M(), "px")), f && f(e);
            }),
            Q = z(x),
            _ = z((e) => {
              let t = M(),
                { duration: r, easing: a } = (0, et.c)(
                  { style: A, timeout: j, easing: u },
                  { mode: "exit" },
                );
              if ("auto" === j) {
                let r = F.transitions.getAutoHeightDuration(t);
                (e.style.transitionDuration = "".concat(r, "ms")),
                  (U.current = r);
              } else
                e.style.transitionDuration =
                  "string" == typeof r ? r : "".concat(r, "ms");
              (e.style[E] = k),
                (e.style.transitionTimingFunction = a),
                y && y(e);
            }),
            G = { slots: v, slotProps: w, component: d },
            [V, K] = (0, ea.A)("root", {
              ref: q,
              className: (0, H.A)(C.root, s),
              elementType: es,
              externalForwardedProps: G,
              ownerState: D,
              additionalProps: {
                style: { [I ? "minWidth" : "minHeight"]: k, ...A },
              },
            }),
            [J, Y] = (0, ea.A)("wrapper", {
              ref: L,
              className: C.wrapper,
              elementType: ec,
              externalForwardedProps: G,
              ownerState: D,
            }),
            [eo, el] = (0, ea.A)("wrapperInner", {
              className: C.wrapperInner,
              elementType: ed,
              externalForwardedProps: G,
              ownerState: D,
            });
          return (0, a.jsx)(P, {
            in: m,
            onEnter: T,
            onEntered: B,
            onEntering: O,
            onExit: W,
            onExited: Q,
            onExiting: _,
            addEndListener: (e) => {
              "auto" === j && N.start(U.current || 0, e), l && l(R.current, e);
            },
            nodeRef: R,
            timeout: "auto" === j ? null : j,
            ...S,
            children: (e, t) => {
              let { ownerState: r, ...o } = t,
                l = { ...D, state: e };
              return (0, a.jsx)(V, {
                ...K,
                className: (0, H.A)(
                  K.className,
                  { entered: C.entered, exited: !m && "0px" === k && C.hidden }[
                    e
                  ],
                ),
                ownerState: l,
                ...o,
                children: (0, a.jsx)(J, {
                  ...Y,
                  ownerState: l,
                  children: (0, a.jsx)(eo, {
                    ...el,
                    ownerState: l,
                    children: i,
                  }),
                }),
              });
            },
          });
        });
      eu && (eu.muiSupportAuto = !0);
      var em = r(9665),
        eg = r(63148),
        eh = r(99204),
        ep = r(39489),
        ef = r(85222),
        ex = r(58674);
      let ey = (0, T.A)(
          (0, a.jsx)("path", {
            d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
          }),
          "ExpandLess",
        ),
        eb = (0, T.A)(
          (0, a.jsx)("path", {
            d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
          }),
          "ExpandMore",
        );
      var ev = r(12522),
        ew = r(74802),
        eA = r(98028);
      function ej(e) {
        let { className: t } = e,
          [r, l] = (0, o.useState)(!1);
        return (0, a.jsxs)(i.A, {
          className: t,
          children: [
            (0, a.jsx)(d.A, {
              onClick: () => {
                l(!r);
              },
              variant: "outlined",
              size: "small",
              color: "info",
              startIcon: (0, a.jsx)(ex.A, {}),
              endIcon: r ? (0, a.jsx)(ey, {}) : (0, a.jsx)(eb, {}),
              sx: {
                textTransform: "none",
                borderRadius: 2,
                fontSize: "0.875rem",
              },
              children: "Preview not visible?",
            }),
            (0, a.jsx)(eu, {
              in: r,
              timeout: "auto",
              unmountOnExit: !0,
              children: (0, a.jsxs)(em.A, {
                severity: "info",
                sx: {
                  mt: 2,
                  borderRadius: 2,
                  "& .MuiAlert-message": { width: "100%" },
                },
                children: [
                  (0, a.jsx)(s.A, {
                    variant: "subtitle2",
                    gutterBottom: !0,
                    children: "Make preview images visible instantly:",
                  }),
                  (0, a.jsxs)(eg.A, {
                    dense: !0,
                    sx: { mt: 1 },
                    children: [
                      (0, a.jsxs)(eh.Ay, {
                        disablePadding: !0,
                        children: [
                          (0, a.jsx)(ep.A, {
                            sx: { minWidth: 32 },
                            children: (0, a.jsx)(V.A, {
                              fontSize: "small",
                              color: "primary",
                            }),
                          }),
                          (0, a.jsx)(ef.A, {
                            primary: "Click 'Edit Item' on your cart item",
                            primaryTypographyProps: { fontSize: "0.875rem" },
                          }),
                        ],
                      }),
                      (0, a.jsxs)(eh.Ay, {
                        disablePadding: !0,
                        children: [
                          (0, a.jsx)(ep.A, {
                            sx: { minWidth: 32 },
                            children: (0, a.jsx)(ev.A, {
                              fontSize: "small",
                              color: "primary",
                            }),
                          }),
                          (0, a.jsx)(ef.A, {
                            primary: "Go to the dashboard page",
                            primaryTypographyProps: { fontSize: "0.875rem" },
                          }),
                        ],
                      }),
                      (0, a.jsxs)(eh.Ay, {
                        disablePadding: !0,
                        children: [
                          (0, a.jsx)(ep.A, {
                            sx: { minWidth: 32 },
                            children: (0, a.jsx)(ew.A, {
                              fontSize: "small",
                              color: "primary",
                            }),
                          }),
                          (0, a.jsx)(ef.A, {
                            primary: "Click 'Update Item'",
                            primaryTypographyProps: { fontSize: "0.875rem" },
                          }),
                        ],
                      }),
                      (0, a.jsxs)(eh.Ay, {
                        disablePadding: !0,
                        children: [
                          (0, a.jsx)(ep.A, {
                            sx: { minWidth: 32 },
                            children: (0, a.jsx)(eA.A, {
                              fontSize: "small",
                              color: "success",
                            }),
                          }),
                          (0, a.jsx)(ef.A, {
                            primary:
                              "Return to cart - preview will be visible!",
                            primaryTypographyProps: {
                              fontSize: "0.875rem",
                              fontWeight: 600,
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let eP = (0, T.A)(
        (0, a.jsx)("path", {
          d: "M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83M6.21 18H5v-1.21l8.66-8.66 1.21 1.21zM11 20l4-4h6v4z",
        }),
        "DriveFileRenameOutline",
      );
      var eS = r(76928),
        eD = r(76391),
        eC = r(59712);
      let eF = (e) => {
        let {
          open: t,
          onClose: r,
          featureName: o,
          featureDescription: l,
          customFeatures: n,
        } = e;
        return (0, a.jsxs)(k.A, {
          open: t,
          onClose: r,
          maxWidth: "sm",
          fullWidth: !0,
          PaperProps: { sx: { borderRadius: 3, overflow: "hidden" } },
          children: [
            (0, a.jsx)(E.A, {
              sx: {
                textAlign: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                py: 3,
              },
              children: (0, a.jsxs)(i.A, {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                },
                children: [
                  (0, a.jsx)(eC.A, { sx: { fontSize: 48, color: "#FFD700" } }),
                  (0, a.jsx)(s.A, {
                    variant: "h5",
                    component: "div",
                    sx: { fontWeight: 600 },
                    children: "Premium Feature",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(I.A, {
              sx: { py: 3, px: 3 },
              children: [
                (0, a.jsxs)(i.A, {
                  sx: { textAlign: "center", mb: 3 },
                  children: [
                    (0, a.jsxs)(s.A, {
                      variant: "h6",
                      gutterBottom: !0,
                      sx: { color: "text.primary", fontWeight: 500 },
                      children: [o, " is a Premium Feature"],
                    }),
                    (0, a.jsx)(s.A, {
                      variant: "body1",
                      color: "text.secondary",
                      sx: { mb: 3 },
                      children:
                        l ||
                        "Unlock this feature and many more with our Premium subscription!",
                    }),
                  ],
                }),
                (0, a.jsxs)(i.A, {
                  sx: { mb: 3 },
                  children: [
                    (0, a.jsx)(s.A, {
                      variant: "subtitle1",
                      gutterBottom: !0,
                      sx: { fontWeight: 600, color: "primary.main" },
                      children: "Premium Features Include:",
                    }),
                    (0, a.jsx)(i.A, {
                      component: "ul",
                      sx: { pl: 2, m: 0 },
                      children: (
                        n || [
                          "\uD83C\uDFA8 Custom branding and logos on quotes",
                          "\uD83D\uDCC4 Legacy PDF format options",
                          "\uD83D\uDCCA Excel export functionality",
                          "\uD83D\uDCB0 Advanced pricing and margin controls",
                          "\uD83D\uDCC8 Detailed analytics and reporting",
                          "\uD83D\uDD27 Priority support and advanced features",
                        ]
                      ).map((e, t) =>
                        (0, a.jsx)(
                          s.A,
                          {
                            component: "li",
                            variant: "body2",
                            sx: { mb: 1 },
                            children: e,
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(R.A, {
              sx: { p: 3, pt: 0, justifyContent: "center", gap: 2 },
              children: [
                (0, a.jsx)(d.A, {
                  onClick: r,
                  variant: "outlined",
                  sx: { borderRadius: 999, px: 3 },
                  children: "Maybe Later",
                }),
                (0, a.jsx)(d.A, {
                  onClick: () => {
                    window.open("/premium/payment", "_blank"), r();
                  },
                  variant: "contained",
                  sx: {
                    borderRadius: 999,
                    px: 4,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                    },
                  },
                  children: "Subscribe Now",
                }),
              ],
            }),
          ],
        });
      };
      var eN = r(26597),
        eL = r(23596),
        eU = r(50134);
      let ek = async (e) => {
        let t,
          {
            logoUrl: r,
            pdfLogoUrl: a,
            items: o,
            discountPct: l = 0,
            marginPct: n = 0,
            marginBySeries: i = null,
            hidePrices: s = !1,
            quoteTerms: c = null,
            bankDetails: d = null,
            showBankDetails: u = !1,
            panelNameOverrides: m,
            disableWatermarkLogo: g = !1,
            premiumQuoteMode: h = !1,
            logoResolverConfig: p,
            enableGst: f = !1,
            gstPercentage: x = 18,
          } = e,
          y = new eN.uE("p", "mm", "a4"),
          b = async () => {
            let e = await fetch("/fonts/Roboto-Regular.ttf"),
              t = new Uint8Array(await e.arrayBuffer()),
              r = "";
            t.forEach((e) => (r += String.fromCharCode(e)));
            let a = btoa(r);
            y.addFileToVFS("Roboto-Regular.ttf", a),
              y.addFont("Roboto-Regular.ttf", "Roboto", "normal"),
              y.setFont("Roboto", "normal");
          };
        try {
          await b();
        } catch (e) {}
        if (p)
          console.log(
            "✅ Using LogoResolver for batch PDF generation:",
            (t = eU.a.resolve(p)),
          );
        else {
          let e = (e) => {
              if ("string" != typeof e) return null;
              let t = e.trim();
              return t.length > 0 ? t : null;
            },
            o = e(a),
            l = e(r),
            n = o || l;
          console.log(
            "⚠️ Using legacy logo resolution for batch PDF generation:",
            (t = {
              headerLogo: n,
              pdfLogo: n,
              isPremiumMode: h,
              fallbackUsed: !1,
            }),
          );
        }
        let v = (e) =>
            new Promise((t, r) => {
              let a = new FileReader();
              (a.onload = () => t(a.result)),
                (a.onerror = r),
                a.readAsDataURL(e);
            }),
          w = async (e) => {
            let t = await fetch(e);
            if (!t.ok) throw Error("Failed to fetch image from ".concat(e));
            return v(await t.blob());
          },
          A = "/Image/logoVerni.png",
          j = null,
          P = null,
          S = t.pdfLogo || t.headerLogo;
        if (S)
          try {
            (j = await w(S)),
              console.log("✅ Successfully loaded batch PDF logo:", S);
          } catch (e) {
            console.error("❌ Failed to load batch PDF logo:", S, e);
            try {
              (j = await w(A)),
                console.log(
                  "\uD83D\uDCDD Using Verni logo fallback for batch PDF after custom logo failed",
                );
            } catch (e) {
              console.warn("Could not fetch Verni logo fallback for batch PDF");
            }
          }
        else
          console.warn(
            "No logo resolved for batch PDF, this should not happen with Verni fallback",
          );
        if (!g && j) P = j;
        else if (!g)
          try {
            P = await w(A);
          } catch (e) {
            console.warn(
              "Could not load Verni logo for watermark in batch PDF",
            );
          }
        console.log("\uD83D\uDD0D Final Batch PDF Logo State:", {
          resolvedLogos: t,
          logoDataUrl: j ? "loaded" : "none",
          watermarkDataUrl: P ? "loaded" : "none",
          isPremiumMode: t.isPremiumMode,
        });
        let D = (e) => {
          y.setLineWidth(0.5).setDrawColor(0).rect(5, 5, 200, 287);
          let t = y.getCurrentPageInfo().pageNumber;
          y.setFontSize(10).text(null != e ? e : "Page ".concat(t), 105, 289, {
            align: "center",
          });
        };
        D();
        let C = 10;
        if (j) {
          let e = y.getImageProperties(j),
            t = 80,
            r = (e.height / e.width) * t;
          r > 40 && ((r = 40), (t = (e.width / e.height) * r));
          let a = j.startsWith("data:image/jpeg") ? "JPEG" : "PNG";
          y.addImage(j, a, (210 - t) / 2, C, t, r), (C += r + 6);
        }
        y.setFont("Roboto", "bold").setFontSize(18),
          y.text("Batch Order Summary", 105, C + 6, { align: "center" }),
          (C += 14),
          y.setFont("Roboto", "normal").setFontSize(11);
        let F = new Date();
        y.text(
          F.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          105,
          C,
          { align: "center" },
        ),
          (C += 10);
        let N = 95,
          L = 19,
          U = 38,
          k = 38,
          I = (e, t, r, a, o) => {
            o && (y.setFillColor(o), y.rect(e, t, r, a, "F")),
              y.rect(e, t, r, a);
          },
          E = (e) => {
            C + e > 272 && (y.addPage(), D(), (C = 20));
          };
        E(8),
          I(10, C, N, 8, "#EEEEEE"),
          I(10 + N, C, L, 8, "#EEEEEE"),
          I(10 + N + L, C, U, 8, "#EEEEEE"),
          I(10 + N + L + U, C, k, 8, "#EEEEEE"),
          y.setFont("Roboto", "bold"),
          y.text("Item", 10 + N / 2, C + 5, { align: "center" }),
          y.text("Qty", 10 + N + L / 2, C + 5, { align: "center" }),
          y.text("Unit Price", 10 + N + L + U / 2, C + 5, { align: "center" }),
          y.text("Subtotal", 10 + N + L + U + k / 2, C + 5, {
            align: "center",
          }),
          (C += 8),
          y.setFont("Roboto", "normal");
        let R = (e) =>
            ""
              .concat(String.fromCharCode(8377), " ")
              .concat(
                e.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              ),
          q = (e) => (s ? "***" : e),
          z = (e) => {
            var t, r, a, o, l, n, i, s;
            let c = (null == (t = e.panel) ? void 0 : t.item) || "",
              d = m && c in m ? m[c] : c,
              u = [
                d,
                (null == (r = e.material) ? void 0 : r.item) || "",
                (null == (a = e.size) ? void 0 : a.item) || "",
              ].filter(Boolean);
            for (let t of [
              ...(null != (o = e.accessories) ? o : []),
              ...(null != (l = e.accessories1) ? l : []),
              ...(null != (n = e.accessories2) ? n : []),
              ...(null != (i = e.accessories3) ? i : []),
            ])
              for (let e of t.options) u.push(e.item);
            for (let t of null != (s = e.color) ? s : [])
              for (let e of t.options) u.push(e.item);
            return u.join(",");
          },
          M = 0,
          T = 0;
        for (let e of o) {
          var O, B;
          let t = e.quantity > 0 ? e.quantity : 1,
            r = t > 0 ? e.totalPrice / t : 0,
            a =
              "string" ==
              typeof (null == (B = e.cartData) || null == (O = B.panel)
                ? void 0
                : O.item)
                ? e.cartData.panel.item
                : null,
            o = (0, eL.iZ)(a, i, n),
            s = (0, eL.UM)({
              listUnit: r,
              quantity: t,
              discountPct: l,
              marginPct: o,
              marginEnabled: 0 !== o,
            }).totalUnit,
            c = s * t + 150 * t;
          E(8);
          let d = [];
          e.customProductName &&
            e.customProductName.trim().length > 0 &&
            d.push(e.customProductName.trim()),
            e.productSequence &&
              e.productSequence.trim().length > 0 &&
              d.push(e.productSequence.trim());
          let u = z(e.cartData);
          u && d.push(u);
          let m =
              d.length > 0
                ? d.join(": ")
                : e.orderName && e.orderName.trim().length > 0
                  ? e.orderName.trim()
                  : "Product",
            g = y.splitTextToSize(m, N - 4),
            h = Math.max(8, 5 * g.length + 4);
          E(h),
            I(10, C, N, h),
            I(10 + N, C, L, h),
            I(10 + N + L, C, U, h),
            I(10 + N + L + U, C, k, h);
          let p = C + (h - 5 * g.length) / 2 + 4;
          g.forEach((e, t) => {
            y.text(e, 12, p + 5 * t);
          }),
            y.text(String(e.quantity), 10 + N + L / 2, C + 5, {
              align: "center",
            }),
            y.text(q(R(s)), 10 + N + L + U / 2, C + 5, { align: "center" }),
            y.text(q(R(c)), 10 + N + L + U + k / 2, C + 5, { align: "center" }),
            (C += h),
            (M += c),
            (T += e.quantity);
        }
        let W = Number.isFinite(x) ? x : 18,
          Q = f ? (W / 100) * M : 0,
          _ = M + Q,
          G = N + L + U,
          V = [{ label: "Total Quantity", value: String(T) }];
        for (let e of (f
          ? (V.push({ label: "Subtotal", value: s ? "***" : R(M) }),
            V.push({ label: "GST (".concat(W, "%)"), value: s ? "***" : R(Q) }),
            V.push({ label: "Grand Total", value: s ? "***" : R(_), bold: !0 }))
          : V.push({ label: "Grand Total", value: s ? "***" : R(M), bold: !0 }),
        V))
          E(8),
            I(10, C, G, 8),
            I(10 + G, C, k, 8),
            y.setFont("Roboto", e.bold ? "bold" : "normal"),
            y.text(e.label, 10 + G - 2, C + 5, { align: "right" }),
            y.setFont("Roboto", e.bold ? "bold" : "normal"),
            y.text(String(e.value), 10 + G + k / 2, C + 5, { align: "center" }),
            (C += 8);
        let H = (e) => ("string" == typeof e ? e.trim() : ""),
          X = (null != c ? c : "").trim(),
          Z = {
            accountName: H(null == d ? void 0 : d.accountName),
            accountNumber: H(null == d ? void 0 : d.accountNumber),
            bankName: H(null == d ? void 0 : d.bankName),
            ifsc: H(null == d ? void 0 : d.ifsc),
          },
          K = u && Object.values(Z).some((e) => e && e.length > 0);
        if (X || K) {
          if (((C += 6), X)) {
            let e = y.splitTextToSize(X, 182),
              t = 5 * e.length + 10;
            E(t + 6),
              I(10, C, 190, t, "#F8FAFC"),
              y.setFont("Roboto", "bold").setFontSize(12),
              y.text("Terms & Conditions", 13, C + 6),
              y.setFont("Roboto", "normal").setFontSize(10);
            let r = C + 12;
            e.forEach((e, t) => {
              y.text("- ".concat(e), 14, r + 5 * t);
            }),
              (C += t + 6);
          }
          if (K) {
            let e = [
              { label: "Account Name", value: Z.accountName },
              { label: "Account Number", value: Z.accountNumber },
              { label: "Bank", value: Z.bankName },
              { label: "IFSC Code", value: Z.ifsc },
            ].filter((e) => e.value && e.value.length > 0);
            if (e.length) {
              let t = 66.5,
                r = 123.5;
              E(8 + 8 * e.length + 6),
                I(10, C, 190, 8, "#E8F1FF"),
                y.setFont("Roboto", "bold").setFontSize(11),
                y.text("Bank Details", 105, C + 5, { align: "center" }),
                y.setFont("Roboto", "normal").setFontSize(10),
                (C += 8),
                e.forEach((e) => {
                  I(10, C, t, 8, "#F5F7FA"),
                    I(10 + t, C, r, 8),
                    y.text(e.label, 12, C + 5),
                    y.text(e.value, 10 + t + 2, C + 5),
                    (C += 8);
                }),
                (C += 6);
            }
          }
        }
        let J = y.splitTextToSize(
            "Note: Prices are tentative as this system is under experimental stage. Final product prices must be confirmed with us before placing the order.",
            190,
          ),
          Y = 5 * J.length;
        if (
          (C + 10 + Y > 277 && (y.addPage(), D(), (C = 20)),
          (C += 10),
          y.setFont("Roboto", "normal").setFontSize(10),
          J.forEach((e, t) => y.text(e, 10, C + 5 * t)),
          P)
        )
          try {
            let e = new Image();
            (e.src = P), await new Promise((t) => (e.onload = () => t()));
            let t = document.createElement("canvas");
            (t.width = e.naturalWidth), (t.height = e.naturalHeight);
            let r = t.getContext("2d");
            if (r) {
              (r.globalAlpha = 0.1), r.drawImage(e, 0, 0);
              let a = t.toDataURL("image/png"),
                o = (e.naturalHeight / e.naturalWidth) * 80,
                l = y.getNumberOfPages();
              for (let e = 1; e <= l; e++) {
                y.setPage(e);
                let t = y.internal.pageSize.getWidth(),
                  r = y.internal.pageSize.getHeight();
                y.addImage(a, "PNG", (t - 80) / 2, (r - o) / 2, 80, o);
              }
            }
          } catch (e) {}
        return y.output("arraybuffer");
      };
      var eI = r(18627),
        eE = r(9794);
      let eR = (e) => (null != e ? e : "").toString().trim(),
        eq = (e, t) => {
          var r, a, o, l;
          let n = (null != (o = e.color) ? o : []).find(
              (e) => e.optionType === t,
            ),
            i =
              null !=
              (l =
                null == n || null == (a = n.options) || null == (r = a[0])
                  ? void 0
                  : r.item)
                ? l
                : null;
          return i ? String(i) : null;
        },
        ez = (e) => {
          let t = eR(e);
          return t
            ? /tuya/i.test(t)
              ? "TuyaT1"
              : /remote/i.test(t)
                ? "Remote"
                : t
            : "";
        },
        eM = (e) => {
          let t = e.replace(/\s*\([^)]*\)/g, "").trim();
          return t.replace(/\s*\+\s*/g, " ");
        },
        eT = (e) => {
          let t = /(\d+)\s*Module/i.exec(e);
          return t ? "".concat(t[1], "Module") : null;
        };
      function eO(e) {
        var t, r, a, o;
        let l = eR(null == (t = e.panel) ? void 0 : t.item).replace(/\s+/g, ""),
          n = eR(null == (r = e.material) ? void 0 : r.item).replace(
            /\s+/g,
            "",
          ),
          i = eR(null == (a = e.size) ? void 0 : a.item),
          s = i ? eT(i) : null,
          c = (function (e) {
            var t, r, a, o;
            let l = [
              ...(null != (t = e.accessories) ? t : []),
              ...(null != (r = e.accessories1) ? r : []),
              ...(null != (a = e.accessories2) ? a : []),
              ...(null != (o = e.accessories3) ? o : []),
            ]
              .flatMap((e) => {
                var t;
                return (
                  null != (t = null == e ? void 0 : e.options) ? t : []
                ).map((e) => e.item);
              })
              .filter((e) => !!e);
            if (!l.length) return [];
            let n = new Set(),
              i = (e, t) => {
                let r = e ? "".concat(e).concat(t) : t;
                n.add(r.replace(/\s+/g, ""));
              };
            for (let e of l) {
              let t = e
                  .replace(/\s*\([^)]*\)/g, "")
                  .replace(/\s*\+\s*/g, " ")
                  .trim(),
                r =
                  /(\d+)?\s*(Switch|Fan|HV|TW|Dimmer|Curtain|Scene Controller|Door Bell|Bell)\b/gi,
                a = !1;
              for (let e; (e = r.exec(t)); )
                (a = !0),
                  i(
                    (e[1] || "").trim() || null,
                    (e[2] || "").trim().replace(/\s+/g, ""),
                  );
              if (!a) {
                let e = t.replace(/\s+/g, "");
                e && n.add(e);
              }
            }
            return Array.from(n);
          })(e),
          d = eq(e, "Material Color"),
          u = eq(e, "Frame Color"),
          m = ez(null == (o = e.technology) ? void 0 : o.item),
          g = [];
        if (
          (l && g.push(l),
          n && g.push(n),
          s && g.push(s),
          c.length && g.push(c.join(",")),
          d || u)
        ) {
          let e = [];
          d && e.push("m".concat(d.replace(/\s+/g, ""))),
            u && e.push("f".concat(u.replace(/\s+/g, ""))),
            g.push(e.join(","));
        }
        return m && g.push(m), g.join("_");
      }
      var eB = r(14123),
        eW = r(12108),
        eQ = r(35695),
        e_ = r(34540),
        eG = r(97781),
        eV = r(99511),
        eH = r(1743),
        eX = r(49880);
      let eZ = ["Order Placed", "Order Accepted", "In Process", "Dispatched"],
        eK = {
          Pending: 0,
          Production: 2,
          Dispatched: 3,
          Completed: 3,
          Cancelled: 0,
        },
        eJ = (e) =>
          ""
            .concat(String.fromCharCode(8377), " ")
            .concat(
              e.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }),
            ),
        eY = (e) =>
          new Date(e).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      function e$() {
        var e, t, q, T;
        let H = (0, n.A)(),
          X = (0, eQ.useRouter)(),
          Z = (0, eQ.useSearchParams)(),
          K = (0, e_.wA)(),
          { data: J, status: Y } = (0, eW.useSession)(),
          $ = !!(null == J || null == (e = J.user) ? void 0 : e.isPremium),
          [ee, et] = (0, o.useState)([]),
          [er, ea] = (0, o.useState)(!0),
          [eo, el] = (0, o.useState)("newest"),
          [en, ei] = (0, o.useState)(1),
          [es, ec] = (0, o.useState)([]),
          [ed, eu] = (0, o.useState)(null),
          [em, eg] = (0, o.useState)(!1),
          [eh, ep] = (0, o.useState)(null),
          [ef, ey] = (0, o.useState)("batch-quote.pdf"),
          [eb, ev] = (0, o.useState)(!1),
          [ew, eA] = (0, o.useState)([]),
          [eC, eN] = (0, o.useState)([]),
          [eR, eq] = (0, o.useState)(""),
          [ez, eM] = (0, o.useState)("all"),
          [eT, e$] = (0, o.useState)(""),
          [e0, e1] = (0, o.useState)(""),
          [e2, e8] = (0, o.useState)([]),
          [e5, e4] = (0, o.useState)(""),
          [e6, e7] = (0, o.useState)([]),
          [e3, e9] = (0, o.useState)(!0),
          [te, tt] = (0, o.useState)("board"),
          [tr, ta] = (0, o.useState)(null),
          [to, tl] = (0, o.useState)(""),
          [tn, ti] = (0, o.useState)(null),
          [ts, tc] = (0, o.useState)(""),
          [td, tu] = (0, o.useState)(!1),
          [tm, tg] = (0, o.useState)(18),
          [th, tp] = (0, o.useState)(""),
          [tf, tx] = (0, o.useState)({}),
          [ty, tb] = (0, o.useState)(!1),
          [tv, tw] = (0, o.useState)(0),
          [tA, tj] = (0, o.useState)(0),
          [tP, tS] = (0, o.useState)(null),
          [tD, tC] = (0, o.useState)(!1),
          [tF, tN] = (0, o.useState)(!1),
          [tL, tU] = (0, o.useState)(null),
          [tk, tI] = (0, o.useState)(null),
          [tE, tR] = (0, o.useState)(!1),
          [tq, tz] = (0, o.useState)(""),
          tM = (0, e_.d4)((e) => e.cartData.cartItems);
        (0, o.useEffect)(() => {
          let e = async () => {
              if (0 === tM.length) return;
              let e = tM.filter((e) => !e.screenshotDataUrl);
              if (0 !== e.length) {
                console.log(
                  "⚠️ [Auto-Generate] Screenshot generation disabled for ".concat(
                    e.length,
                    " items - use manual method",
                  ),
                );
                try {
                  let { ensureCartScreenshots: e } = await Promise.all([
                      r.e(2069),
                      r.e(2671),
                      r.e(586),
                    ]).then(r.bind(r, 30586)),
                    t = await e(tM);
                  K((0, eG.setCartItems)({ items: t })),
                    console.log(
                      "✅ [Recovery] Recovered screenshots from storage",
                    );
                } catch (e) {
                  console.error(
                    "Failed to recover screenshots from storage:",
                    e,
                  );
                }
              }
            },
            t = setTimeout(() => {
              e();
            }, 1e3);
          return () => clearTimeout(t);
        }, [tM.length, K]);
        let {
            hasPremium: tT,
            brandLogoUrl: tO,
            pdfLogoUrl: tB,
            loading: tW,
          } = (0, eS.Z)(),
          tQ = (0, e_.d4)((e) => e.extraSlice.logoUrl),
          t_ = (0, e_.d4)((e) => e.extraSlice.pdfLogoUrl),
          tG = o.useMemo(() => {
            try {
              return localStorage.getItem("brand_logo_url");
            } catch (e) {
              return null;
            }
          }, []),
          tV = o.useMemo(() => {
            try {
              return localStorage.getItem("brand_pdf_logo_url");
            } catch (e) {
              return null;
            }
          }, []),
          tH = tO || tG || tQ,
          tX = tB || tV || t_ || tH,
          tZ =
            [tX, tH, t_, tQ].find(
              (e) =>
                "string" == typeof e &&
                e.trim().length > 0 &&
                "/Image/logoVerni.png" !== e.trim(),
            ) || null,
          tK = $ || tT,
          [tJ, tY] = (0, o.useState)({});
        (0, o.useEffect)(() => {
          var e;
          if (!(null == J || null == (e = J.user) ? void 0 : e.id)) return;
          let t = !1;
          return (
            fetch("/api/premium/panel-names", { cache: "no-store" })
              .then((e) =>
                e.ok ? e.json() : Promise.reject(Error(e.statusText)),
              )
              .then((e) => {
                t || tY((null == e ? void 0 : e.overrides) || {});
              })
              .catch(() => void 0),
            () => {
              t = !0;
            }
          );
        }, [null == J || null == (t = J.user) ? void 0 : t.id]);
        let t$ = "/Image/logoVerni.png";
        o.useEffect(() => {
          if (tW) return;
          let e = tB || tO;
          tO ? K((0, eH.bX)({ url: tO })) : tK || K((0, eH.bX)({ url: t$ })),
            e ? K((0, eH.fl)({ url: e })) : tK || K((0, eH.fl)({ url: t$ })),
            console.log("\uD83D\uDD04 Orders Page: Updated Redux with logos:", {
              resolvedNavLogo: tO,
              resolvedPdfLogo: e,
              premiumActive: tK,
              brandingLoading: tW,
            });
        }, [tW, tO, tB, tK, K]),
          o.useEffect(() => {
            var e;
            (null == J || null == (e = J.user) ? void 0 : e.id) &&
              "authenticated" === Y &&
              (async () => {
                try {
                  let l = await fetch("/api/userSettings/".concat(J.user.id), {
                    cache: "no-store",
                  });
                  if (l.ok) {
                    var e, t, r, a, o;
                    let n = await l.json(),
                      i = (e) =>
                        "string" == typeof e && e.trim().length > 0
                          ? e.trim()
                          : null,
                      s = i(n.logoUrl),
                      c = i(n.pdfLogoUrl) || s;
                    s && K((0, eH.bX)({ url: s })),
                      c && K((0, eH.fl)({ url: c }));
                    try {
                      s && localStorage.setItem("brand_logo_url", s),
                        c && localStorage.setItem("brand_pdf_logo_url", c);
                    } catch (e) {}
                    let d = Number.parseFloat(
                        String(null != (e = n.discountPct) ? e : 0),
                      ),
                      u = Number.isFinite(d) ? d : 0,
                      m = !!n.enableMargin,
                      g = Number.parseFloat(
                        String(null != (t = n.marginPct) ? t : 0),
                      ),
                      h = m && Number.isFinite(g) ? g : 0;
                    tw(u),
                      tC(m),
                      tj(h),
                      tS(m && null != (r = n.marginBySeries) ? r : null),
                      tu(!!(null != (a = n.enableGst) && a));
                    let p = Number.parseFloat(
                      String(null != (o = n.gstPercentage) ? o : 18),
                    );
                    tg(Number.isFinite(p) ? p : 18),
                      console.log("\uD83D\uDD0D Direct API User Settings:", {
                        userId: J.user.id,
                        logoUrl: n.logoUrl,
                        pdfLogoUrl: n.pdfLogoUrl,
                        isPremium: n.isPremium,
                        allowPremium: n.allowPremium,
                        hasCustomLogo: !!(
                          n.logoUrl && "/Image/logoVerni.png" !== n.logoUrl
                        ),
                        hasCustomPdfLogo: !!(
                          n.pdfLogoUrl &&
                          "/Image/logoVerni.png" !== n.pdfLogoUrl
                        ),
                        enableGst: n.enableGst,
                        gstPercentage: n.gstPercentage,
                      }),
                      (n.isPremium || n.allowPremium) &&
                        (!n.logoUrl || "/Image/logoVerni.png" === n.logoUrl) &&
                        (!n.pdfLogoUrl ||
                          "/Image/logoVerni.png" === n.pdfLogoUrl) &&
                        console.log(
                          "\uD83D\uDCA1 PREMIUM USER TIP: Upload your brand logo in Premium Dashboard to customize quotes",
                        );
                  }
                } catch (e) {
                  console.error("❌ Failed to fetch user settings:", e);
                }
              })();
          }, [null == J || null == (q = J.user) ? void 0 : q.id, Y]),
          o.useEffect(() => {
            console.log("\uD83D\uDD0D Orders Page Logo Sources:", {
              isPremium: $,
              brandingHasPremium: tT,
              premiumActive: tK,
              contextBrandLogoUrl: tO,
              contextPdfLogoUrl: tB,
              reduxLogoUrl: tQ,
              reduxPdfLogoUrl: t_,
              finalBrandLogoUrl: tH,
              finalPdfLogoUrl: tX,
              sessionUser: null == J ? void 0 : J.user,
            });
          }, [$, tT, tK, tO, tB, tQ, t_, tH, tX, null == J ? void 0 : J.user]),
          (0, o.useEffect)(() => {
            let e = Z.get("tab");
            "cart" === e ? ei(0) : "orders" === e && ei(1);
          }, [Z]);
        let t0 = (0, o.useCallback)(
            (e) => {
              var t, r, a;
              let o =
                  Number.isFinite(e.quantity) && e.quantity > 0
                    ? e.quantity
                    : 1,
                l = Number.isFinite(e.totalPrice) ? Number(e.totalPrice) : 0,
                n =
                  tK && tD
                    ? (0, eL.iZ)(
                        null !=
                          (a =
                            null == (r = e.cartData) || null == (t = r.panel)
                              ? void 0
                              : t.item)
                          ? a
                          : null,
                        tP,
                        tA,
                      )
                    : 0,
                i = tK && tD && n > 0,
                s = (0, eL.UM)({
                  listUnit: o > 0 ? l / o : 0,
                  quantity: o,
                  discountPct: tv,
                  marginPct: n,
                  marginEnabled: i,
                }),
                c = Number.isFinite(tm) ? Number(tm) : 18,
                d = s.landingTotal,
                u = d + (c / 100) * d;
              if (i) {
                let e = (0, eL.XF)(u, n),
                  t = td ? (c / 100) * e : 0;
                return e + t;
              }
              return u;
            },
            [tK, tD, tP, tA, tv, tm, td],
          ),
          t1 = (0, o.useCallback)(
            (e) => {
              if (tK) return 0;
              let { calculateIconSavings: t } = r(97781);
              return t(e.cartData, e.dropped || []) * e.quantity;
            },
            [tK],
          );
        (0, o.useEffect)(() => {
          e9((e) => e || tK);
        }, [tK]);
        let [t2, t8] = (0, o.useState)(1),
          [t5, t4] = (0, o.useState)(!1),
          t6 = (0, o.useCallback)(async function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              t && ea(!0);
              let r = await fetch(
                "/api/my-orders?page=".concat(e, "&limit=50"),
              );
              if (!r.ok) throw Error(r.statusText);
              let a = await r.json();
              et((e) => (t ? a.data : [...e, ...a.data])),
                t4(a.page < a.totalPages),
                t8(e);
            } catch (e) {
              console.error("Error fetching my-orders", e);
            } finally {
              t && ea(!1);
            }
          }, []);
        (0, o.useEffect)(() => {
          "authenticated" === Y && t6(1, !0);
        }, [Y, t6]);
        let t7 = (0, o.useMemo)(
            () =>
              [...ee].sort((e, t) => {
                var r, a;
                let o = (
                    (null != (r = e.orderName) ? r : "").trim() || "Untitled"
                  ).toLowerCase(),
                  l = (
                    (null != (a = t.orderName) ? a : "").trim() || "Untitled"
                  ).toLowerCase(),
                  n = new Date(e.createdAt).getTime(),
                  i = new Date(t.createdAt).getTime(),
                  s = (e) => {
                    var t;
                    return null !=
                      (t = {
                        Pending: 1,
                        Production: 2,
                        Dispatched: 3,
                        Completed: 4,
                        Cancelled: 0,
                      }[e])
                      ? t
                      : 0;
                  };
                switch (eo) {
                  case "name_asc":
                    return o.localeCompare(l) || i - n;
                  case "name_desc":
                    return l.localeCompare(o) || i - n;
                  case "status":
                    return s(e.status) - s(t.status) || i - n;
                  case "oldest":
                    return n - i;
                  default:
                    return i - n;
                }
              }),
            [ee, eo],
          ),
          t3 = (0, o.useMemo)(
            () =>
              t7.filter((e) => {
                var t, r;
                if ("all" !== ez && e.status !== ez) return !1;
                if (
                  eT &&
                  new Date(e.createdAt).getTime() <
                    new Date(eT + "T00:00:00").getTime()
                )
                  return !1;
                if (
                  e0 &&
                  new Date(e.createdAt).getTime() >
                    new Date(e0 + "T23:59:59").getTime()
                )
                  return !1;
                if (e2.length) {
                  let r =
                    (null != (t = e.orderName) ? t : "").trim() || "Untitled";
                  if (!e2.includes(r)) return !1;
                }
                if (eR) {
                  let t = eR.toLowerCase(),
                    a = (e.displayId || e.id).toLowerCase().includes(t),
                    o = (null != (r = e.orderName) ? r : "")
                      .toLowerCase()
                      .includes(t);
                  if (!a && !o) return !1;
                }
                return !0;
              }),
            [t7, ez, eT, e0, e2, eR],
          ),
          t9 = (0, o.useCallback)(
            (e, t) => (0, eG.calculateTotalPrice)(e, t, []),
            [],
          ),
          re = (0, o.useCallback)(async () => {
            let e = 0,
              t = 0,
              r = null,
              a = !1,
              o = 18,
              l = th,
              n = tf,
              i = ty;
            try {
              var s, c, d, u, m, g;
              if (null == J || null == (s = J.user) ? void 0 : s.id) {
                let s = await fetch("/api/userSettings/".concat(J.user.id), {
                  cache: "no-store",
                });
                if (s.ok) {
                  let h = await s.json();
                  (e = Number(
                    null != (c = null == h ? void 0 : h.discountPct) ? c : 0,
                  )),
                    (t = (null == h ? void 0 : h.enableMargin)
                      ? Number(
                          null != (d = null == h ? void 0 : h.marginPct)
                            ? d
                            : 0,
                        )
                      : 0),
                    (r =
                      (null == h ? void 0 : h.enableMargin) &&
                      null != (u = null == h ? void 0 : h.marginBySeries)
                        ? u
                        : null),
                    (a = !!(
                      null != (m = null == h ? void 0 : h.enableGst) && m
                    )),
                    (o = Number(
                      null != (g = null == h ? void 0 : h.gstPercentage)
                        ? g
                        : 18,
                    )),
                    (l =
                      "string" == typeof (null == h ? void 0 : h.quoteTerms)
                        ? h.quoteTerms
                        : ""),
                    (n = {
                      accountName:
                        "string" ==
                        typeof (null == h ? void 0 : h.bankAccountName)
                          ? h.bankAccountName
                          : "",
                      accountNumber:
                        "string" ==
                        typeof (null == h ? void 0 : h.bankAccountNumber)
                          ? h.bankAccountNumber
                          : "",
                      bankName:
                        "string" == typeof (null == h ? void 0 : h.bankName)
                          ? h.bankName
                          : "",
                      ifsc:
                        "string" == typeof (null == h ? void 0 : h.bankIfsc)
                          ? h.bankIfsc
                          : "",
                    }),
                    (i = !!(null == h ? void 0 : h.showBankDetails)),
                    tp(l),
                    tx(n),
                    tb(i);
                }
              }
            } catch (e) {}
            return {
              discountPct: e,
              marginPct: t,
              marginBySeries: r,
              enableGst: a,
              gstPercentage: o,
              quoteTerms: l,
              bankDetails: n,
              showBankDetails: i,
            };
          }, [null == J || null == (T = J.user) ? void 0 : T.id, th, tf, ty]),
          rt = async () => {
            try {
              var e, t, r, a, o, l, n;
              if (tW)
                return void console.log(
                  "branding still loading, please wait...",
                );
              let i = es
                .map((e) => tM.find((t) => t.id === e))
                .filter((e) => !!e);
              if (!i.length) return;
              let s = {
                  userId: null == J || null == (e = J.user) ? void 0 : e.id,
                  isPremium: tK,
                  contextLogos: { brandLogoUrl: tO, pdfLogoUrl: tB },
                  reduxLogos: { logoUrl: tQ, pdfLogoUrl: t_ },
                },
                c = eU.a.resolve(s),
                {
                  discountPct: d,
                  marginPct: u,
                  marginBySeries: m,
                  enableGst: g,
                  gstPercentage: h,
                  quoteTerms: p,
                  bankDetails: f,
                  showBankDetails: x,
                } = await re();
              if ((eA(i), 1 === i.length)) {
                let [e] = i;
                if (!e) return;
                let o = await (0, eI._)({
                    logoUrl: c.headerLogo || "",
                    pdfLogoUrl: c.pdfLogo || void 0,
                    email:
                      (null == J || null == (t = J.user) ? void 0 : t.email) ||
                      "",
                    userName:
                      null !=
                      (a = null == J || null == (r = J.user) ? void 0 : r.name)
                        ? a
                        : "",
                    totalQty: e.quantity,
                    cartData: e.cartData,
                    totalPrice: e.totalPrice,
                    customProductName: e.customProductName,
                    productSequence: e.productSequence,
                    screenshotDataUrl: e.screenshotDataUrl,
                    download: !1,
                    orderName: e.orderName,
                    orderId: void 0,
                    disableWatermarkLogo: !1,
                    hidePrices: !1,
                    premiumQuoteMode: c.isPremiumMode,
                    discountPct: d,
                    marginPct: u,
                    marginBySeries: m,
                    quoteTerms: p,
                    bankDetails: f,
                    showBankDetails: x,
                    logoResolverConfig: s,
                    enableGst: g,
                    gstPercentage: h,
                    panelNameOverrides: tJ,
                  }),
                  l = new Blob([o], { type: "application/pdf" });
                ep(l),
                  ey(
                    "quote-".concat(
                      new Date().toISOString().slice(0, 10),
                      ".pdf",
                    ),
                  ),
                  ev(!1),
                  eg(!0);
              } else {
                let e = i.map((e) => ({
                    cartData: e.cartData,
                    quantity: e.quantity,
                    totalPrice: e.totalPrice,
                    orderName: e.orderName,
                    customProductName: e.customProductName,
                    productSequence: e.productSequence,
                  })),
                  t = await ek({
                    logoUrl: c.headerLogo || "",
                    pdfLogoUrl: c.pdfLogo || void 0,
                    items: e,
                    discountPct: d,
                    marginPct: u,
                    marginBySeries: m,
                    quoteTerms: p,
                    bankDetails: f,
                    showBankDetails: x,
                    disableWatermarkLogo: !1,
                    premiumQuoteMode: c.isPremiumMode,
                    logoResolverConfig: s,
                    enableGst: g,
                    gstPercentage: h,
                    panelNameOverrides: tJ,
                  }),
                  r = await eB.PDFDocument.create(),
                  a = await eB.PDFDocument.load(t),
                  [y] = await r.copyPages(a, [0]);
                for (let e of (r.addPage(y), i)) {
                  let t = await (0, eI._)({
                      logoUrl: c.headerLogo || "",
                      pdfLogoUrl: c.pdfLogo || void 0,
                      email:
                        (null == J || null == (o = J.user)
                          ? void 0
                          : o.email) || "",
                      userName:
                        null !=
                        (n =
                          null == J || null == (l = J.user) ? void 0 : l.name)
                          ? n
                          : "",
                      totalQty: e.quantity,
                      cartData: e.cartData,
                      totalPrice: e.totalPrice,
                      customProductName: e.customProductName,
                      productSequence: e.productSequence,
                      screenshotDataUrl: e.screenshotDataUrl,
                      download: !1,
                      orderName: e.orderName,
                      orderId: void 0,
                      disableWatermarkLogo: !1,
                      hidePrices: !1,
                      premiumQuoteMode: c.isPremiumMode,
                      discountPct: d,
                      marginPct: u,
                      marginBySeries: m,
                      quoteTerms: p,
                      bankDetails: f,
                      showBankDetails: x,
                      logoResolverConfig: s,
                      enableGst: g,
                      gstPercentage: h,
                      panelNameOverrides: tJ,
                    }),
                    a = await eB.PDFDocument.load(t);
                  (await r.copyPages(a, a.getPageIndices())).forEach((e) =>
                    r.addPage(e),
                  );
                }
                let b = await r.save(),
                  v = new Blob([b], { type: "application/pdf" });
                ep(v),
                  ey(
                    "batch-quote-".concat(
                      new Date().toISOString().slice(0, 10),
                      ".pdf",
                    ),
                  ),
                  ev(!1),
                  eg(!0);
              }
            } catch (e) {
              console.error("Error generating quote from cart", e);
            }
          },
          rr = async () => {
            try {
              var e, t, r, a, o, l, n;
              let i = ew.length > 0 ? ew : eC;
              if (!i.length) return;
              let s = {
                  userId: null == J || null == (e = J.user) ? void 0 : e.id,
                  isPremium: tK,
                  contextLogos: { brandLogoUrl: tO, pdfLogoUrl: tB },
                  reduxLogos: { logoUrl: tQ, pdfLogoUrl: t_ },
                },
                c = eU.a.resolve(s),
                d = (e) => {
                  if (!e) return "";
                  let t = tJ[e];
                  return "string" == typeof t && t.trim() ? t.trim() : e;
                };
              if (1 === i.length) {
                let [e] = i;
                if (!e) return;
                let o = [
                    e.customProductName || "",
                    e.orderName || "",
                    d(null == (t = e.cartData.panel) ? void 0 : t.item),
                    (null == (r = e.cartData.material) ? void 0 : r.item) || "",
                    (null == (a = e.cartData.size) ? void 0 : a.item) || "",
                  ]
                    .filter(Boolean)
                    .join(" | "),
                  l = await (0, eE.P)({
                    logoUrl: c.headerLogo || "",
                    pdfLogoUrl: c.pdfLogo || void 0,
                    cartData: e.cartData,
                    screenshotDataUrl: e.screenshotDataUrl,
                    download: !1,
                    title: o,
                    premiumQuoteMode: c.isPremiumMode,
                    panelNameOverrides: tJ,
                  }),
                  n = new Blob([l], { type: "application/pdf" });
                ep(n),
                  ey(
                    "legacy-quote-".concat(
                      new Date().toISOString().slice(0, 10),
                      ".pdf",
                    ),
                  ),
                  ev(!0);
              } else {
                let e = await eB.PDFDocument.create();
                for (let t of i) {
                  let r = [
                      t.customProductName || "",
                      t.orderName || "",
                      d(null == (o = t.cartData.panel) ? void 0 : o.item),
                      (null == (l = t.cartData.material) ? void 0 : l.item) ||
                        "",
                      (null == (n = t.cartData.size) ? void 0 : n.item) || "",
                    ]
                      .filter(Boolean)
                      .join(" | "),
                    a = await (0, eE.P)({
                      logoUrl: c.headerLogo || "",
                      pdfLogoUrl: c.pdfLogo || void 0,
                      cartData: t.cartData,
                      screenshotDataUrl: t.screenshotDataUrl,
                      download: !1,
                      title: r,
                      premiumQuoteMode: c.isPremiumMode,
                      panelNameOverrides: tJ,
                    }),
                    i = await eB.PDFDocument.load(a);
                  (await e.copyPages(i, i.getPageIndices())).forEach((t) =>
                    e.addPage(t),
                  );
                }
                let t = await e.save(),
                  r = new Blob([t], { type: "application/pdf" });
                ep(r),
                  ey(
                    "legacy-batch-quote-".concat(
                      new Date().toISOString().slice(0, 10),
                      ".pdf",
                    ),
                  ),
                  ev(!0);
              }
            } catch (e) {
              console.error("Error generating legacy quote", e);
            }
          },
          ra = async () => {
            try {
              if (ew.length > 0) await rt();
              else if (eC.length > 0) {
                var e;
                let t = {
                    userId: null == J || null == (e = J.user) ? void 0 : e.id,
                    isPremium: tK,
                    contextLogos: { brandLogoUrl: tO, pdfLogoUrl: tB },
                    reduxLogos: { logoUrl: tQ, pdfLogoUrl: t_ },
                  },
                  r = eU.a.resolve(t),
                  a = await ek({
                    logoUrl: r.headerLogo || "",
                    pdfLogoUrl: r.pdfLogo || void 0,
                    items: eC,
                    quoteTerms: th,
                    bankDetails: tf,
                    showBankDetails: ty,
                    disableWatermarkLogo: !1,
                    premiumQuoteMode: r.isPremiumMode,
                    logoResolverConfig: t,
                    panelNameOverrides: tJ,
                  }),
                  o = new Blob([a], { type: "application/pdf" });
                ep(o),
                  ey(
                    "group-quote-".concat(
                      new Date().toISOString().slice(0, 10),
                      ".pdf",
                    ),
                  ),
                  ev(!1);
              }
            } catch (e) {
              console.error("Error generating modern quote", e);
            }
          },
          ro = (e, t, r) => {
            let a = new Blob(
                [
                  [
                    t.join(","),
                    ...r.map((e) =>
                      e
                        .map((e) =>
                          '"'.concat(
                            (null != e ? e : "").replace(/"/g, '""'),
                            '"',
                          ),
                        )
                        .join(","),
                    ),
                  ].join("\n"),
                ],
                { type: "text/csv;charset=utf-8;" },
              ),
              o = URL.createObjectURL(a),
              l = document.createElement("a");
            (l.href = o),
              (l.download = e),
              document.body.appendChild(l),
              l.click(),
              document.body.removeChild(l),
              URL.revokeObjectURL(o);
          },
          rl = async () => {
            if (!tK) {
              tz("Excel Export"), tR(!0);
              return;
            }
            let e = es.length ? tM.filter((e) => es.includes(e.id)) : rn,
              t = e.length > 0,
              a = (() => {
                var e;
                let t =
                  null == J || null == (e = J.user) ? void 0 : e.companyName;
                return "string" == typeof t && t.trim().length
                  ? t.trim()
                  : null;
              })();
            try {
              var o, n, i, s, c;
              let d = new (
                await r.e(343).then(r.t.bind(r, 26575, 23))
              ).Workbook();
              (d.creator = a || "SwitchCraft"), (d.created = new Date());
              let u = d.addWorksheet("Cart", {
                  properties: { tabColor: { argb: "FF0F172A" } },
                  views: [{ state: "frozen", ySplit: 5 }],
                }),
                m = async (e) => {
                  if (!e) return null;
                  try {
                    let t = await fetch(e, {
                      cache: "no-store",
                      credentials: "include",
                    });
                    if (!t.ok) return null;
                    let r = await t.blob(),
                      a = await new Promise((e, t) => {
                        let a = new FileReader();
                        (a.onload = () => e(a.result)),
                          (a.onerror = () => t(Error("Failed to read logo"))),
                          a.readAsDataURL(r);
                      });
                    if (!a.startsWith("data:image/png")) {
                      let e = new l.default();
                      (e.crossOrigin = "anonymous"),
                        (e.src = a),
                        await new Promise((t, r) => {
                          (e.onload = () => t()),
                            (e.onerror = () =>
                              r(Error("Logo failed to load for conversion")));
                        });
                      let t = document.createElement("canvas");
                      (t.width = e.naturalWidth || e.width || 1),
                        (t.height = e.naturalHeight || e.height || 1);
                      let r = t.getContext("2d");
                      if (r)
                        return (
                          r.drawImage(e, 0, 0, t.width, t.height),
                          t.toDataURL("image/png").split(",")[1] || null
                        );
                    }
                    return a.split(",")[1] || null;
                  } catch (e) {
                    return null;
                  }
                },
                g = "FFE5E7EB",
                h = { name: "Poppins", size: 11, color: { argb: "FF111827" } };
              (u.properties.defaultRowHeight = 22),
                (u.columns = [
                  { header: "Sr. No.", width: 7 },
                  { header: "Product ID", width: 16 },
                  { header: "Order Name", width: 22 },
                  { header: "Custom Name", width: 22 },
                  { header: "Quantity", width: 12 },
                  {
                    header: "Total (₹)",
                    width: 16,
                    style: { numFmt: "₹ #,##0.00" },
                  },
                  { header: "Panel", width: 22 },
                  { header: "Material", width: 22 },
                  { header: "Size", width: 18 },
                ]);
              let p = await m(tX || tH);
              if (p) {
                let e = d.addImage({ base64: p, extension: "png" });
                u.addImage(e, "A1:B3");
              }
              u.mergeCells("A2", "I2");
              let f = u.getRow(2);
              (f.values = [a || "Cart Export"]),
                (f.font = { ...h, size: 18, bold: !0 }),
                (f.alignment = { vertical: "middle", horizontal: "center" }),
                (f.height = 28),
                (f.fill = {
                  type: "pattern",
                  pattern: "solid",
                  fgColor: { argb: "FFF8FAFC" },
                }),
                u.mergeCells("A3", "I3");
              let x = u.getRow(3);
              (x.values = [
                "Generated on ".concat(
                  new Date().toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  }),
                ),
              ]),
                (x.font = { ...h, color: { argb: "FF4B5563" } }),
                (x.alignment = { vertical: "middle", horizontal: "center" }),
                (x.height = 20),
                (x.border = { bottom: { style: "thin", color: { argb: g } } });
              let y = e.reduce((e, t) => {
                  let r =
                    Number.isFinite(t.quantity) && t.quantity > 0
                      ? t.quantity
                      : 1;
                  return e + r;
                }, 0),
                b = e.reduce((e, t) => {
                  let r = t0(t);
                  return e + (Number.isFinite(r) ? r : 0);
                }, 0);
              u.mergeCells("A4", "C4"),
                u.mergeCells("D4", "F4"),
                u.mergeCells("G4", "I4");
              let v = u.getRow(4);
              (v.getCell(1).value = "Items: ".concat(t ? e.length : 0)),
                (v.getCell(4).value = "Total Qty: ".concat(t ? y : 0)),
                (v.getCell(7).value = "Total Amount: ₹ ".concat(
                  (t ? b : 0).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  }),
                )),
                v.eachCell((e) => {
                  (e.font = { ...h, bold: !0 }),
                    (e.alignment = {
                      vertical: "middle",
                      horizontal: "center",
                    }),
                    (e.fill = {
                      type: "pattern",
                      pattern: "solid",
                      fgColor: { argb: "FFF8FAFC" },
                    }),
                    (e.border = {
                      top: { style: "thin", color: { argb: g } },
                      bottom: { style: "thin", color: { argb: g } },
                      left: { style: "thin", color: { argb: g } },
                      right: { style: "thin", color: { argb: g } },
                    });
                }),
                (v.height = 24);
              let w = t
                  ? e.map((e, t) => {
                      var r, a, o, l, n, i, s, c, d, u, m;
                      let g = t0(e),
                        h = Number.isFinite(g) ? g : 0,
                        p =
                          Number.isFinite(e.quantity) && e.quantity > 0
                            ? e.quantity
                            : 1;
                      return [
                        t + 1,
                        e.productSequence || e.id,
                        null != (s = e.orderName) ? s : "",
                        null != (c = e.customProductName) ? c : "",
                        p,
                        Number(h.toFixed(2)),
                        null !=
                        (d =
                          null == (a = e.cartData) || null == (r = a.panel)
                            ? void 0
                            : r.item)
                          ? d
                          : "",
                        null !=
                        (u =
                          null == (l = e.cartData) || null == (o = l.material)
                            ? void 0
                            : o.item)
                          ? u
                          : "",
                        null !=
                        (m =
                          null == (i = e.cartData) || null == (n = i.size)
                            ? void 0
                            : n.item)
                          ? m
                          : "",
                      ];
                    })
                  : [[1, "-", "No cart items selected", "", 0, 0, "", "", ""]],
                A = t && w.length > 1;
              u.addTable({
                name: "CartItems_".concat(Date.now()),
                ref: "A".concat(5),
                headerRow: !0,
                totalsRow: A,
                style: { theme: "TableStyleMedium9", showRowStripes: !0 },
                columns: [
                  { name: "Sr. No.", totalsRowLabel: A ? "Total" : void 0 },
                  { name: "Product ID" },
                  { name: "Order Name" },
                  { name: "Custom Name" },
                  { name: "Quantity", totalsRowFunction: A ? "sum" : void 0 },
                  { name: "Total (₹)", totalsRowFunction: A ? "sum" : void 0 },
                  { name: "Panel" },
                  { name: "Material" },
                  { name: "Size" },
                ],
                rows: w,
              }),
                u.getRow(5).eachCell((e) => {
                  (e.fill = {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: { argb: "FF0F172A" },
                  }),
                    (e.font = {
                      name: h.name,
                      size: h.size,
                      bold: !0,
                      color: { argb: "FFFFFFFF" },
                    }),
                    (e.alignment = {
                      vertical: "middle",
                      horizontal: "center",
                    }),
                    (e.border = {
                      top: { style: "thin", color: { argb: g } },
                      bottom: { style: "thin", color: { argb: g } },
                      left: { style: "thin", color: { argb: g } },
                      right: { style: "thin", color: { argb: g } },
                    });
                });
              let j = 6 + (w.length ? w.length - 1 : 0);
              for (let e = 6; e <= j; e++) {
                let t = u.getRow(e),
                  r = (e - 6) % 2 == 0;
                t.eachCell((e, t) => {
                  (e.font = { ...h }),
                    r &&
                      (e.fill = {
                        type: "pattern",
                        pattern: "solid",
                        fgColor: { argb: "FFF8FAFC" },
                      }),
                    (1 === t || 5 === t) &&
                      (e.alignment = {
                        horizontal: "center",
                        vertical: "middle",
                      }),
                    6 === t && (e.numFmt = "₹ #,##0.00"),
                    (e.border = {
                      bottom: { style: "dotted", color: { argb: g } },
                    });
                });
              }
              A &&
                u.getRow(j + 1).eachCell((e) => {
                  (e.font = { ...h, bold: !0 }),
                    (e.fill = {
                      type: "pattern",
                      pattern: "solid",
                      fgColor: { argb: "FFF8FAFC" },
                    }),
                    (e.border = {
                      top: { style: "thin", color: { argb: g } },
                      bottom: { style: "thin", color: { argb: g } },
                    });
                });
              let P = 5 + (w.length ? w.length - 1 : 0) + +!!A,
                S =
                  null != (s = null == (o = u.columns) ? void 0 : o.length)
                    ? s
                    : 9;
              for (let e = 5; e <= P; e++) {
                let t = u.getRow(e);
                for (let e = 1; e <= S; e++)
                  t.getCell(e).border = {
                    top: { style: "thin", color: { argb: g } },
                    bottom: { style: "thin", color: { argb: g } },
                    left: { style: "thin", color: { argb: g } },
                    right: { style: "thin", color: { argb: g } },
                  };
              }
              let D = Array(
                  null != (c = null == (n = u.columns) ? void 0 : n.length)
                    ? c
                    : 0,
                ).fill(0),
                C = (e, t) => {
                  let r = (() => {
                    if ("number" == typeof e) return e.toLocaleString("en-IN");
                    if ("string" == typeof e) return e;
                    if (e instanceof Date) return e.toISOString();
                    if (null == e) return "";
                    if ("boolean" == typeof e) return e ? "true" : "false";
                    if ("bigint" == typeof e) return e.toString();
                    if ("symbol" == typeof e)
                      return e.description
                        ? "Symbol(".concat(e.description, ")")
                        : "Symbol";
                    if ("function" == typeof e) return "[function]";
                    if ("object" == typeof e)
                      try {
                        var t;
                        return null != (t = JSON.stringify(e)) ? t : "";
                      } catch (e) {
                        return "[object]";
                      }
                    return "";
                  })();
                  D[t] = Math.max(D[t], r.length);
                };
              for (let e of u.getSheetValues().slice(1))
                Array.isArray(e) && e.slice(1).forEach((e, t) => C(e, t));
              null == (i = u.columns) ||
                i.forEach((e, t) => {
                  let r = "string" == typeof e.header ? e.header.length : 10;
                  e.width = Math.min(45, Math.max(12, (D[t] || r) + 4));
                });
              let F = await d.xlsx.writeBuffer(),
                N = new Blob([F], {
                  type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                }),
                L = URL.createObjectURL(N),
                U = document.createElement("a");
              (U.href = L),
                (U.download = "cart-".concat(
                  new Date().toISOString().slice(0, 10),
                  ".xlsx",
                )),
                document.body.appendChild(U),
                U.click(),
                document.body.removeChild(U),
                URL.revokeObjectURL(L);
            } catch (e) {
              console.error("Failed to export Excel", e);
            }
          },
          rn = (0, o.useMemo)(
            () =>
              tM.filter((e) => {
                var t, r;
                if (e6.length) {
                  let r =
                    (null != (t = e.orderName) ? t : "").trim() || "Untitled";
                  if (!e6.includes(r)) return !1;
                }
                if (e5) {
                  let t = e5.toLowerCase(),
                    a = (null != (r = e.orderName) ? r : "").toLowerCase(),
                    o = (e.productSequence || e.id).toLowerCase(),
                    l = eO(e.cartData).toLowerCase();
                  if (!o.includes(t) && !a.includes(t) && !l.includes(t))
                    return !1;
                }
                return !0;
              }),
            [tM, e5, e6],
          ),
          ri = (0, o.useMemo)(() => {
            let e = new Set();
            for (let r of tM) {
              var t;
              let a = (null != (t = r.orderName) ? t : "").trim();
              a && e.add(a);
            }
            return Array.from(e).sort((e, t) => e.localeCompare(t));
          }, [tM]);
        (0, o.useMemo)(() => {
          let e = new Set();
          for (let r of ee) {
            var t;
            let a = (null != (t = r.orderName) ? t : "").trim() || "Untitled";
            e.add(a);
          }
          return Array.from(e).sort((e, t) => e.localeCompare(t));
        }, [ee]);
        let rs = (0, o.useCallback)(
            function (e) {
              var t, r, a, o;
              let l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              if (!e) return;
              K((0, eG.setCartFromOrder)({ cart: e, dropped: l }));
              let n =
                  null != (a = null == (t = e.material) ? void 0 : t.item)
                    ? a
                    : "",
                i =
                  null != (o = null == (r = e.size) ? void 0 : r.item) ? o : "",
                s = (0, eX.KZ)(n, i);
              K((0, eV.n)(s)), K((0, eV.EY)(s[s.length - 1]));
            },
            [K],
          ),
          rc = async () => {
            try {
              var e, t, r, a, o;
              let l = tM.filter((e) => es.includes(e.id));
              if (!l.length) return;
              let n = {
                  userId: null == J || null == (e = J.user) ? void 0 : e.id,
                  isPremium: tK,
                  contextLogos: { brandLogoUrl: tO, pdfLogoUrl: tB },
                  reduxLogos: { logoUrl: tQ, pdfLogoUrl: t_ },
                },
                i = eU.a.resolve(n);
              if (1 === l.length) {
                let [e] = l;
                if (!e) return;
                let a = {
                    cartData: e.cartData,
                    totalQty: e.quantity,
                    screenshotDataUrl: e.screenshotDataUrl,
                    droppedItems: e.dropped,
                    orderName: e.orderName,
                    customProductName: e.customProductName,
                    productSequence: e.productSequence,
                  },
                  o = await (0, eI._)({
                    logoUrl: i.headerLogo || "",
                    pdfLogoUrl: i.pdfLogo || void 0,
                    email:
                      (null == J || null == (t = J.user) ? void 0 : t.email) ||
                      "",
                    userName:
                      (null == J || null == (r = J.user) ? void 0 : r.name) ||
                      "",
                    totalQty: e.quantity,
                    cartData: e.cartData,
                    totalPrice: e.totalPrice,
                    customProductName: e.customProductName,
                    productSequence: e.productSequence,
                    screenshotDataUrl: e.screenshotDataUrl,
                    download: !1,
                    orderName: e.orderName,
                    orderId: void 0,
                    disableWatermarkLogo: !1,
                    hidePrices: !1,
                    priceMode: "landing",
                    premiumQuoteMode: i.isPremiumMode,
                    logoResolverConfig: n,
                    panelNameOverrides: tJ,
                  }),
                  s = new Blob([o], { type: "application/pdf" });
                tU(s), tI({ type: "single", payload: a }), tN(!0);
              } else {
                let e = {
                    orderName: "Batch Order ".concat(
                      new Date().toLocaleDateString(),
                    ),
                    orders: l.map((e) => ({
                      cartData: e.cartData,
                      dropped: e.dropped,
                      quantity: e.quantity,
                      totalPrice: e.totalPrice,
                      screenshotDataUrl: e.screenshotDataUrl,
                      customProductName: e.customProductName,
                      productSequence: e.productSequence,
                    })),
                  },
                  t = l.map((e) => ({
                    cartData: e.cartData,
                    quantity: e.quantity,
                    totalPrice: e.totalPrice,
                    orderName: e.orderName,
                    customProductName: e.customProductName,
                    productSequence: e.productSequence,
                  })),
                  r = await ek({
                    logoUrl: i.headerLogo || "",
                    pdfLogoUrl: i.pdfLogo || void 0,
                    items: t,
                    disableWatermarkLogo: !1,
                    premiumQuoteMode: i.isPremiumMode,
                    logoResolverConfig: n,
                    panelNameOverrides: tJ,
                  }),
                  s = await eB.PDFDocument.create(),
                  c = await eB.PDFDocument.load(r),
                  [d] = await s.copyPages(c, [0]);
                for (let e of (s.addPage(d), l)) {
                  let t = await (0, eI._)({
                      logoUrl: i.headerLogo || "",
                      pdfLogoUrl: i.pdfLogo || void 0,
                      email:
                        (null == J || null == (a = J.user)
                          ? void 0
                          : a.email) || "",
                      userName:
                        (null == J || null == (o = J.user) ? void 0 : o.name) ||
                        "",
                      totalQty: e.quantity,
                      cartData: e.cartData,
                      totalPrice: e.totalPrice,
                      customProductName: e.customProductName,
                      productSequence: e.productSequence,
                      screenshotDataUrl: e.screenshotDataUrl,
                      download: !1,
                      orderName: e.orderName,
                      orderId: void 0,
                      disableWatermarkLogo: !1,
                      hidePrices: !1,
                      priceMode: "landing",
                      premiumQuoteMode: i.isPremiumMode,
                      logoResolverConfig: n,
                      panelNameOverrides: tJ,
                    }),
                    r = await eB.PDFDocument.load(t);
                  (await s.copyPages(r, r.getPageIndices())).forEach((e) =>
                    s.addPage(e),
                  );
                }
                let u = await s.save(),
                  m = new Blob([u], { type: "application/pdf" });
                tU(m), tI({ type: "batch", payload: e }), tN(!0);
              }
            } catch (e) {
              console.error("Error generating order preview:", e),
                alert("Failed to generate order preview. Please try again.");
            }
          },
          rd = async () => {
            try {
              if (!tk) return;
              if ("single" === tk.type) {
                let e = await fetch("/api/orders", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(tk.payload),
                });
                if (!e.ok) throw Error("Failed to place order");
                let t = await e.json(),
                  r = await fetch("/api/orders/".concat(t.id, "/pdf"));
                if (!r.ok) throw Error("Failed to download receipt");
                let a = await r.blob(),
                  o = window.URL.createObjectURL(a),
                  l = document.createElement("a");
                (l.href = o),
                  (l.download = "order-".concat(t.displayId || t.id, ".pdf")),
                  document.body.appendChild(l),
                  l.click(),
                  document.body.removeChild(l),
                  window.URL.revokeObjectURL(o);
              } else {
                let e = await fetch("/api/orders/bulk", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(tk.payload),
                });
                if (!e.ok) throw Error("Failed to place order");
                let t = await e.blob(),
                  r = window.URL.createObjectURL(t),
                  a = document.createElement("a");
                (a.href = r),
                  (a.download = "batch-order-".concat(Date.now(), ".pdf")),
                  document.body.appendChild(a),
                  a.click(),
                  document.body.removeChild(a),
                  window.URL.revokeObjectURL(r);
              }
              es.forEach((e) => K((0, eG.removeCartItemById)({ id: e }))),
                ec([]),
                tN(!1),
                tU(null),
                tI(null),
                t6(1, !0),
                alert("Order placed successfully!");
            } catch (e) {
              console.error("Error placing order:", e),
                alert("Failed to place order. Please try again.");
            }
          };
        if (
          ((0, o.useEffect)(() => {
            "unauthenticated" === Y && X.replace("/Login");
          }, [Y, X]),
          "unauthenticated" === Y)
        )
          return null;
        let ru = (e, t, r, o) =>
          (null == e ? void 0 : e.length)
            ? (0, a.jsx)(i.A, {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
                children: e.map((e, t) =>
                  (0, a.jsx)(
                    l.default,
                    {
                      src: e,
                      alt: "preview ".concat(t + 1),
                      width: 80,
                      height: 80,
                      style: {
                        padding: "4px",
                        cursor: "pointer",
                        objectFit: "contain",
                      },
                      onClick: () => eu(e),
                      onError: (t) => {
                        console.error(
                          "Failed to load preview image: ".concat(e),
                        ),
                          (t.target.style.opacity = "0.3"),
                          (t.target.style.border = "2px dashed #ccc");
                      },
                    },
                    t,
                  ),
                ),
              })
            : (0, a.jsxs)(i.A, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                sx: { minHeight: 80, minWidth: 120 },
                children: [
                  (0, a.jsx)(s.A, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: { textAlign: "center", mb: 1 },
                    children: "No Preview",
                  }),
                  (0, a.jsx)(ej, {}),
                ],
              });
        return (0, a.jsx)(z, {
          children: (0, a.jsxs)(c.A, {
            maxWidth: "xl",
            sx: { py: 4 },
            children: [
              (0, a.jsxs)(i.A, {
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mb: 2,
                children: [
                  tK &&
                    !tW &&
                    (0, a.jsx)(d.A, {
                      variant: "outlined",
                      color: tZ ? "success" : "warning",
                      onClick: () => {
                        alert(
                          tZ
                            ? "✅ Custom logo detected: ".concat(tZ)
                            : "⚠️ No custom logo found. Please upload your brand logo in Premium Dashboard.",
                        ),
                          console.log("\uD83D\uDD0D Logo Status Check:", {
                            effectivePdfLogo: tZ,
                            brandLogoUrl: tH,
                            pdfLogoUrl: tX,
                            contextBrandLogoUrl: tO,
                            contextPdfLogoUrl: tB,
                            reduxLogoUrl: tQ,
                            reduxPdfLogoUrl: t_,
                          });
                      },
                      children: tZ ? "✅ Logo Ready" : "⚠️ No Logo",
                    }),
                  (0, a.jsx)(d.A, {
                    variant: "contained",
                    onClick: () => {
                      K((0, eG.setCartFromOrder)({ cart: {}, dropped: [] })),
                        X.push("/Dashboards/userDashboard");
                    },
                    children: "Design New Panel",
                  }),
                ],
              }),
              (0, a.jsxs)(u.A, {
                value: en,
                onChange: (e, t) => ei(t),
                textColor: "primary",
                indicatorColor: "primary",
                sx: { mb: 3 },
                children: [
                  (0, a.jsx)(m.A, { label: "Cart" }),
                  (0, a.jsx)(m.A, { label: "My Orders" }),
                ],
              }),
              0 === en &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(s.A, {
                      variant: "h5",
                      gutterBottom: !0,
                      children: "My Cart",
                    }),
                    (0, a.jsxs)(i.A, {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                      children: [
                        (0, a.jsx)(g.A, {
                          value: e5,
                          onChange: (e) => e4(e.target.value),
                          placeholder: "Search by Cart ID",
                          size: "small",
                          InputProps: {
                            startAdornment: (0, a.jsx)(h.A, {
                              position: "start",
                              children: (0, a.jsx)(W.A, { fontSize: "small" }),
                            }),
                          },
                        }),
                        ri.length > 0 &&
                          (0, a.jsxs)(p.A, {
                            size: "small",
                            sx: { minWidth: 260 },
                            children: [
                              (0, a.jsx)(f.A, {
                                id: "cart-names-label",
                                children: "Filter by Names",
                              }),
                              (0, a.jsx)(x.A, {
                                labelId: "cart-names-label",
                                multiple: !0,
                                value: e6,
                                label: "Filter by Names",
                                onChange: (e) =>
                                  e7(
                                    "string" == typeof e.target.value
                                      ? e.target.value.split(",")
                                      : e.target.value,
                                  ),
                                input: (0, a.jsx)(y.A, {
                                  label: "Filter by Names",
                                }),
                                renderValue: (e) =>
                                  (0, a.jsx)(i.A, {
                                    sx: {
                                      display: "flex",
                                      flexWrap: "wrap",
                                      gap: 0.5,
                                    },
                                    children: e.map((e) =>
                                      (0, a.jsx)(
                                        b.A,
                                        { label: e, size: "small" },
                                        e,
                                      ),
                                    ),
                                  }),
                                children: ri.map((e) =>
                                  (0, a.jsx)(v.A, { value: e, children: e }, e),
                                ),
                              }),
                            ],
                          }),
                        (!!e5 || e6.length > 0) &&
                          (0, a.jsx)(d.A, {
                            size: "small",
                            onClick: () => {
                              e4(""), e7([]);
                            },
                            children: "Clear Filters",
                          }),
                      ],
                    }),
                    0 === tM.length
                      ? (0, a.jsx)(s.A, { children: "No items in cart." })
                      : (0, a.jsx)(a.Fragment, {}),
                    tM.length > 0 &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(w.A, {
                            component: A.A,
                            sx: { mb: 3 },
                            children: (0, a.jsxs)(j.A, {
                              children: [
                                (0, a.jsx)(P.A, {
                                  sx: {
                                    backgroundColor: (0, S.X4)(
                                      H.palette.primary.main,
                                      0.08,
                                    ),
                                  },
                                  children: (0, a.jsxs)(D.A, {
                                    children: [
                                      (0, a.jsx)(C.A, {
                                        padding: "checkbox",
                                        children: (0, a.jsx)(F.A, {
                                          checked:
                                            tM.length > 0 &&
                                            es.length === tM.length,
                                          onChange: () =>
                                            ec(
                                              es.length === tM.length
                                                ? []
                                                : tM.map((e) => e.id),
                                            ),
                                        }),
                                      }),
                                      (0, a.jsx)(C.A, {
                                        children: "Product ID",
                                      }),
                                      (0, a.jsx)(C.A, {
                                        children: "Custom Name",
                                      }),
                                      (0, a.jsx)(C.A, { children: "Preview" }),
                                      (0, a.jsx)(C.A, { children: "Qty" }),
                                      (0, a.jsx)(C.A, {
                                        align: "right",
                                        children: "Price",
                                      }),
                                      !tK &&
                                        (0, a.jsx)(C.A, {
                                          align: "right",
                                          children: "Savings",
                                        }),
                                      (0, a.jsx)(C.A, {
                                        align: "right",
                                        children: "Actions",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)(N.A, {
                                  children: (() => {
                                    let e = new Map();
                                    for (let r of rn) {
                                      var t;
                                      let a =
                                        (null != (t = r.orderName)
                                          ? t
                                          : ""
                                        ).trim() || "Untitled";
                                      e.has(a) || e.set(a, []),
                                        e.get(a).push(r);
                                    }
                                    return Array.from(e.entries()).flatMap(
                                      (e, t) => {
                                        let [r, o] = e;
                                        return [
                                          (0, a.jsx)(
                                            D.A,
                                            {
                                              children: (0, a.jsx)(C.A, {
                                                colSpan: tK ? 7 : 8,
                                                sx: {
                                                  backgroundColor: (0, S.X4)(
                                                    H.palette.primary.light,
                                                    0.12,
                                                  ),
                                                  color: H.palette.primary.main,
                                                  fontWeight: 600,
                                                },
                                                children: r,
                                              }),
                                            },
                                            "cart-group-".concat(t),
                                          ),
                                          ...o.map((e) =>
                                            (0, a.jsxs)(
                                              D.A,
                                              {
                                                hover: !0,
                                                children: [
                                                  (0, a.jsx)(C.A, {
                                                    padding: "checkbox",
                                                    children: (0, a.jsx)(F.A, {
                                                      checked: es.includes(
                                                        e.id,
                                                      ),
                                                      onChange: () =>
                                                        ec((t) =>
                                                          t.includes(e.id)
                                                            ? t.filter(
                                                                (t) =>
                                                                  t !== e.id,
                                                              )
                                                            : [...t, e.id],
                                                        ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)(C.A, {
                                                    sx: {
                                                      fontFamily: "monospace",
                                                      fontSize: 14,
                                                    },
                                                    children: (0, a.jsxs)(i.A, {
                                                      children: [
                                                        (0, a.jsx)(s.A, {
                                                          variant: "body2",
                                                          sx: {
                                                            fontFamily:
                                                              "monospace",
                                                            fontWeight: 600,
                                                          },
                                                          children:
                                                            e.productSequence ||
                                                            e.id.substring(
                                                              0,
                                                              8,
                                                            ),
                                                        }),
                                                        (0, a.jsx)(s.A, {
                                                          variant: "caption",
                                                          color:
                                                            "text.secondary",
                                                          sx: {
                                                            fontFamily:
                                                              "monospace",
                                                            fontSize: 10,
                                                          },
                                                          children: eO(
                                                            e.cartData,
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  (0, a.jsx)(C.A, {
                                                    children:
                                                      tn === e.id
                                                        ? (0, a.jsxs)(i.A, {
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            gap: 1,
                                                            children: [
                                                              (0, a.jsx)(g.A, {
                                                                size: "small",
                                                                value: ts,
                                                                onChange: (e) =>
                                                                  tc(
                                                                    e.target
                                                                      .value,
                                                                  ),
                                                                placeholder:
                                                                  "e.g., Hall, Bedroom",
                                                                onKeyPress: (
                                                                  t,
                                                                ) => {
                                                                  "Enter" ===
                                                                    t.key &&
                                                                    (K(
                                                                      (0,
                                                                      eG.setCartItemCustomName)(
                                                                        {
                                                                          id: e.id,
                                                                          customName:
                                                                            ts,
                                                                        },
                                                                      ),
                                                                    ),
                                                                    ti(null),
                                                                    tc(""));
                                                                },
                                                                sx: {
                                                                  minWidth: 150,
                                                                },
                                                              }),
                                                              (0, a.jsx)(L.A, {
                                                                size: "small",
                                                                onClick: () => {
                                                                  K(
                                                                    (0,
                                                                    eG.setCartItemCustomName)(
                                                                      {
                                                                        id: e.id,
                                                                        customName:
                                                                          ts,
                                                                      },
                                                                    ),
                                                                  ),
                                                                    ti(null),
                                                                    tc("");
                                                                },
                                                                children: (0,
                                                                a.jsx)(V.A, {
                                                                  fontSize:
                                                                    "small",
                                                                }),
                                                              }),
                                                            ],
                                                          })
                                                        : (0, a.jsxs)(i.A, {
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                            gap: 1,
                                                            children: [
                                                              (0, a.jsx)(s.A, {
                                                                variant:
                                                                  "body2",
                                                                children:
                                                                  e.customProductName ||
                                                                  "-",
                                                              }),
                                                              (0, a.jsx)(L.A, {
                                                                size: "small",
                                                                onClick: () => {
                                                                  ti(e.id),
                                                                    tc(
                                                                      e.customProductName ||
                                                                        "",
                                                                    );
                                                                },
                                                                children: (0,
                                                                a.jsx)(V.A, {
                                                                  fontSize:
                                                                    "small",
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                  }),
                                                  (0, a.jsx)(C.A, {
                                                    children: ru(
                                                      e.screenshotDataUrl
                                                        ? [e.screenshotDataUrl]
                                                        : void 0,
                                                      void 0,
                                                      void 0,
                                                      e.id,
                                                    ),
                                                  }),
                                                  (0, a.jsx)(C.A, {
                                                    children: (0, a.jsxs)(i.A, {
                                                      display: "flex",
                                                      alignItems: "center",
                                                      gap: 1,
                                                      children: [
                                                        (0, a.jsx)(L.A, {
                                                          size: "small",
                                                          onClick: () =>
                                                            K(
                                                              (0,
                                                              eG.updateCartItemQuantity)(
                                                                {
                                                                  id: e.id,
                                                                  qty:
                                                                    e.quantity -
                                                                    1,
                                                                },
                                                              ),
                                                            ),
                                                          children: (0, a.jsx)(
                                                            _,
                                                            {},
                                                          ),
                                                        }),
                                                        (0, a.jsx)(s.A, {
                                                          variant: "body1",
                                                          sx: {
                                                            minWidth: 24,
                                                            textAlign: "center",
                                                          },
                                                          children: e.quantity,
                                                        }),
                                                        (0, a.jsx)(L.A, {
                                                          size: "small",
                                                          onClick: () =>
                                                            K(
                                                              (0,
                                                              eG.updateCartItemQuantity)(
                                                                {
                                                                  id: e.id,
                                                                  qty:
                                                                    e.quantity +
                                                                    1,
                                                                },
                                                              ),
                                                            ),
                                                          children: (0, a.jsx)(
                                                            Q.A,
                                                            {},
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  (0, a.jsx)(C.A, {
                                                    align: "right",
                                                    children: eJ(t0(e)),
                                                  }),
                                                  !tK &&
                                                    (0, a.jsx)(C.A, {
                                                      align: "right",
                                                      children: (() => {
                                                        let t = t1(e);
                                                        return t > 0
                                                          ? (0, a.jsxs)(i.A, {
                                                              display: "flex",
                                                              flexDirection:
                                                                "column",
                                                              alignItems:
                                                                "flex-end",
                                                              children: [
                                                                (0, a.jsx)(
                                                                  s.A,
                                                                  {
                                                                    variant:
                                                                      "body2",
                                                                    color:
                                                                      "success.main",
                                                                    fontWeight:
                                                                      "600",
                                                                    children:
                                                                      eJ(t),
                                                                  },
                                                                ),
                                                                (0, a.jsx)(
                                                                  s.A,
                                                                  {
                                                                    variant:
                                                                      "caption",
                                                                    color:
                                                                      "text.secondary",
                                                                    children:
                                                                      "with Premium",
                                                                  },
                                                                ),
                                                              ],
                                                            })
                                                          : (0, a.jsx)(s.A, {
                                                              variant:
                                                                "caption",
                                                              color:
                                                                "text.secondary",
                                                              children: "-",
                                                            });
                                                      })(),
                                                    }),
                                                  (0, a.jsx)(C.A, {
                                                    align: "right",
                                                    children: (0, a.jsxs)(i.A, {
                                                      display: "flex",
                                                      justifyContent:
                                                        "flex-end",
                                                      gap: 1,
                                                      children: [
                                                        (0, a.jsx)(U.A, {
                                                          title: "Edit Item",
                                                          children: (0, a.jsx)(
                                                            L.A,
                                                            {
                                                              onClick: () => {
                                                                var t;
                                                                rs(
                                                                  e.cartData,
                                                                  null !=
                                                                    (t =
                                                                      e.dropped)
                                                                    ? t
                                                                    : [],
                                                                ),
                                                                  X.push(
                                                                    "/Dashboards/userDashboard?cart=".concat(
                                                                      e.id,
                                                                    ),
                                                                  );
                                                              },
                                                              children: (0,
                                                              a.jsx)(V.A, {}),
                                                            },
                                                          ),
                                                        }),
                                                        (0, a.jsx)(U.A, {
                                                          title: "Edit as New",
                                                          children: (0, a.jsx)(
                                                            L.A,
                                                            {
                                                              onClick: () => {
                                                                var t;
                                                                rs(
                                                                  e.cartData,
                                                                  null !=
                                                                    (t =
                                                                      e.dropped)
                                                                    ? t
                                                                    : [],
                                                                ),
                                                                  X.push(
                                                                    "/Dashboards/userDashboard",
                                                                  );
                                                              },
                                                              children: (0,
                                                              a.jsx)(eP, {}),
                                                            },
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              },
                                              e.id,
                                            ),
                                          ),
                                        ];
                                      },
                                    );
                                  })(),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)(i.A, {
                            textAlign: "right",
                            mb: 5,
                            display: "flex",
                            gap: 2,
                            justifyContent: "flex-end",
                            children: [
                              (0, a.jsx)(d.A, {
                                variant: "contained",
                                color: "error",
                                startIcon: (0, a.jsx)(G.A, {}),
                                disabled: !es.length,
                                onClick: () => {
                                  es.forEach((e) =>
                                    K((0, eG.removeCartItemById)({ id: e })),
                                  ),
                                    ec([]);
                                },
                                children: "Delete Selected",
                              }),
                              tK &&
                                (0, a.jsx)(d.A, {
                                  variant: "contained",
                                  startIcon: (0, a.jsx)(M.A, {}),
                                  disabled: !es.length || tW,
                                  onClick: rt,
                                  children: tW
                                    ? "Loading..."
                                    : "Generate Quote",
                                }),
                              (0, a.jsx)(d.A, {
                                variant: "outlined",
                                startIcon: (0, a.jsx)(O, {}),
                                onClick: rl,
                                children: "Export Excel",
                              }),
                              (0, a.jsx)(d.A, {
                                variant: "contained",
                                disabled: !es.length,
                                onClick: rc,
                                children: "Preview & Place Order",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              1 === en &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(s.A, {
                      variant: "h5",
                      gutterBottom: !0,
                      children: "My Orders",
                    }),
                    (0, a.jsxs)(i.A, {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                      children: [
                        (0, a.jsx)(g.A, {
                          value: eR,
                          onChange: (e) => eq(e.target.value),
                          placeholder: "Search by Order ID or Name",
                          size: "small",
                          InputProps: {
                            startAdornment: (0, a.jsx)(h.A, {
                              position: "start",
                              children: (0, a.jsx)(W.A, { fontSize: "small" }),
                            }),
                          },
                        }),
                        (0, a.jsxs)(p.A, {
                          size: "small",
                          sx: { minWidth: 160 },
                          children: [
                            (0, a.jsx)(f.A, {
                              id: "orders-status-label",
                              children: "Status",
                            }),
                            (0, a.jsxs)(x.A, {
                              labelId: "orders-status-label",
                              value: ez,
                              label: "Status",
                              onChange: (e) => eM(e.target.value),
                              children: [
                                (0, a.jsx)(v.A, {
                                  value: "all",
                                  children: "All",
                                }),
                                (0, a.jsx)(v.A, {
                                  value: "Pending",
                                  children: "Pending",
                                }),
                                (0, a.jsx)(v.A, {
                                  value: "Production",
                                  children: "Production",
                                }),
                                (0, a.jsx)(v.A, {
                                  value: "Dispatched",
                                  children: "Dispatched",
                                }),
                                (0, a.jsx)(v.A, {
                                  value: "Completed",
                                  children: "Completed",
                                }),
                                (0, a.jsx)(v.A, {
                                  value: "Cancelled",
                                  children: "Cancelled",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(i.A, { sx: { flex: 1 } }),
                        (0, a.jsx)(s.A, {
                          variant: "body2",
                          color: "text.secondary",
                          children: "Sort",
                        }),
                        (0, a.jsxs)("select", {
                          value: eo,
                          onChange: (e) => {
                            el(e.target.value);
                          },
                          style: {
                            padding: "6px 10px",
                            borderRadius: 6,
                            border: "1px solid ".concat(
                              (0, S.X4)(H.palette.text.primary, 0.2),
                            ),
                          },
                          children: [
                            (0, a.jsx)("option", {
                              value: "newest",
                              children: "Newest first",
                            }),
                            (0, a.jsx)("option", {
                              value: "oldest",
                              children: "Oldest first",
                            }),
                          ],
                        }),
                        (0, a.jsx)(d.A, {
                          variant: "outlined",
                          startIcon: (0, a.jsx)(O, {}),
                          onClick: () => {
                            if (!tK) {
                              tz("Excel Export"), tR(!0);
                              return;
                            }
                            let e = t3.map((e) => {
                              var t, r, a;
                              return [
                                e.displayId || e.id,
                                null != (r = e.orderName) ? r : "",
                                e.status,
                                eY(e.createdAt),
                                String(
                                  null !=
                                    (a =
                                      null == (t = e.cartItems)
                                        ? void 0
                                        : t.length)
                                    ? a
                                    : +!!e.screenshotDataUrl,
                                ),
                              ];
                            });
                            ro(
                              "orders-".concat(
                                new Date().toISOString().slice(0, 10),
                                ".csv",
                              ),
                              [
                                "Order ID",
                                "Order Name",
                                "Status",
                                "Created At",
                                "Items",
                              ],
                              e,
                            );
                          },
                          children: "Export Excel",
                        }),
                      ],
                    }),
                    (0, a.jsx)(w.A, {
                      component: A.A,
                      children: (0, a.jsxs)(j.A, {
                        children: [
                          (0, a.jsx)(P.A, {
                            sx: { backgroundColor: "#f5f5f5" },
                            children: (0, a.jsxs)(D.A, {
                              children: [
                                (0, a.jsx)(C.A, { children: "Order ID" }),
                                (0, a.jsx)(C.A, { children: "Preview" }),
                                (0, a.jsx)(C.A, { children: "Date & Time" }),
                                (0, a.jsx)(C.A, { children: "Status" }),
                                (0, a.jsx)(C.A, {
                                  align: "right",
                                  children: "Actions",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(N.A, {
                            children: t3.map((e, t) => {
                              var r, l, n;
                              let s =
                                  (null != (l = e.orderName) ? l : "").trim() ||
                                  "Untitled",
                                c =
                                  t > 0
                                    ? (null !=
                                      (n =
                                        null == (r = t3[t - 1])
                                          ? void 0
                                          : r.orderName)
                                        ? n
                                        : ""
                                      ).trim() || "Untitled"
                                    : null,
                                u = $ && (0 === t || c !== s),
                                m = eY(e.createdAt),
                                g = eK[e.status];
                              return (0, a.jsxs)(
                                o.Fragment,
                                {
                                  children: [
                                    u &&
                                      (0, a.jsx)(
                                        D.A,
                                        {
                                          children: (0, a.jsx)(C.A, {
                                            colSpan: 5,
                                            sx: {
                                              backgroundColor: "#f5f5f5",
                                              fontWeight: 600,
                                            },
                                            children: (0, a.jsxs)(i.A, {
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "space-between",
                                              children: [
                                                (0, a.jsx)(i.A, {
                                                  children: s,
                                                }),
                                                ($ || tT) &&
                                                  (0, a.jsxs)(i.A, {
                                                    display: "flex",
                                                    gap: 1,
                                                    children: [
                                                      (0, a.jsx)(d.A, {
                                                        size: "small",
                                                        variant: "outlined",
                                                        onClick: async () => {
                                                          try {
                                                            var e, t;
                                                            let r =
                                                                "Untitled" === s
                                                                  ? ""
                                                                  : s,
                                                              a = t3.filter(
                                                                (e) => {
                                                                  var t;
                                                                  return (
                                                                    ((null !=
                                                                    (t =
                                                                      e.orderName)
                                                                      ? t
                                                                      : ""
                                                                    ).trim() ||
                                                                      "Untitled") ===
                                                                    s
                                                                  );
                                                                },
                                                              ),
                                                              o = [];
                                                            for (let e of a) {
                                                              let a =
                                                                await fetch(
                                                                  "/api/orders/".concat(
                                                                    e.id,
                                                                  ),
                                                                  {
                                                                    credentials:
                                                                      "include",
                                                                  },
                                                                );
                                                              if (!a.ok)
                                                                continue;
                                                              let l =
                                                                await a.json();
                                                              if (
                                                                Array.isArray(
                                                                  l.cartItems,
                                                                ) &&
                                                                l.cartItems
                                                                  .length > 0
                                                              )
                                                                for (let e of l.cartItems) {
                                                                  if (
                                                                    !e.cartData
                                                                  )
                                                                    continue;
                                                                  let a =
                                                                      "number" ==
                                                                      typeof e.quantity
                                                                        ? e.quantity
                                                                        : Number(
                                                                            null !=
                                                                              (t =
                                                                                e.quantity)
                                                                              ? t
                                                                              : 1,
                                                                          ),
                                                                    l =
                                                                      "number" ==
                                                                      typeof e.totalPrice
                                                                        ? e.totalPrice
                                                                        : t9(
                                                                            e.cartData,
                                                                            a,
                                                                          );
                                                                  o.push({
                                                                    cartData:
                                                                      e.cartData,
                                                                    quantity: a,
                                                                    totalPrice:
                                                                      l,
                                                                    orderName:
                                                                      r,
                                                                    customProductName:
                                                                      e.customProductName,
                                                                    productSequence:
                                                                      e.productSequence,
                                                                    screenshotDataUrl:
                                                                      e.screenshotDataUrl,
                                                                  });
                                                                }
                                                              else if (
                                                                l.cartData
                                                              ) {
                                                                let t =
                                                                    e.totalQty,
                                                                  a =
                                                                    "number" ==
                                                                    typeof t
                                                                      ? t
                                                                      : Number(
                                                                          null !=
                                                                            t
                                                                            ? t
                                                                            : 1,
                                                                        ),
                                                                  n = t9(
                                                                    l.cartData,
                                                                    a,
                                                                  );
                                                                o.push({
                                                                  cartData:
                                                                    l.cartData,
                                                                  quantity: a,
                                                                  totalPrice: n,
                                                                  orderName: r,
                                                                  customProductName:
                                                                    null == l
                                                                      ? void 0
                                                                      : l.customProductName,
                                                                  productSequence:
                                                                    void 0,
                                                                  screenshotDataUrl:
                                                                    l.screenshotDataUrl,
                                                                });
                                                              }
                                                            }
                                                            if (!o.length)
                                                              return;
                                                            eN(o);
                                                            let l = await re(),
                                                              n = {
                                                                userId:
                                                                  null == J ||
                                                                  null ==
                                                                    (e = J.user)
                                                                    ? void 0
                                                                    : e.id,
                                                                isPremium: tK,
                                                                contextLogos: {
                                                                  brandLogoUrl:
                                                                    tO,
                                                                  pdfLogoUrl:
                                                                    tB,
                                                                },
                                                                reduxLogos: {
                                                                  logoUrl: tQ,
                                                                  pdfLogoUrl:
                                                                    t_,
                                                                },
                                                              },
                                                              i =
                                                                eU.a.resolve(n),
                                                              c = await ek({
                                                                logoUrl:
                                                                  i.headerLogo ||
                                                                  "",
                                                                pdfLogoUrl:
                                                                  i.pdfLogo ||
                                                                  void 0,
                                                                items: o,
                                                                quoteTerms:
                                                                  l.quoteTerms,
                                                                bankDetails:
                                                                  l.bankDetails,
                                                                showBankDetails:
                                                                  l.showBankDetails,
                                                                disableWatermarkLogo:
                                                                  !1,
                                                                premiumQuoteMode:
                                                                  i.isPremiumMode,
                                                                logoResolverConfig:
                                                                  n,
                                                                panelNameOverrides:
                                                                  tJ,
                                                              }),
                                                              d = new Blob(
                                                                [c],
                                                                {
                                                                  type: "application/pdf",
                                                                },
                                                              );
                                                            ep(d),
                                                              ey(
                                                                "group-quote-"
                                                                  .concat(
                                                                    r ||
                                                                      "untitled",
                                                                    "-",
                                                                  )
                                                                  .concat(
                                                                    new Date()
                                                                      .toISOString()
                                                                      .slice(
                                                                        0,
                                                                        10,
                                                                      ),
                                                                    ".pdf",
                                                                  ),
                                                              ),
                                                              ev(!1),
                                                              eg(!0);
                                                          } catch (e) {
                                                            console.error(
                                                              "Error generating group quote",
                                                              e,
                                                            );
                                                          }
                                                        },
                                                        children: "Group Quote",
                                                      }),
                                                      (0, a.jsx)(d.A, {
                                                        size: "small",
                                                        variant: "contained",
                                                        onClick: async () => {
                                                          try {
                                                            let e = t3.filter(
                                                                (e) => {
                                                                  var t;
                                                                  return (
                                                                    ((null !=
                                                                    (t =
                                                                      e.orderName)
                                                                      ? t
                                                                      : ""
                                                                    ).trim() ||
                                                                      "Untitled") ===
                                                                    s
                                                                  );
                                                                },
                                                              ),
                                                              t = [];
                                                            for (let r of e) {
                                                              let e =
                                                                await fetch(
                                                                  "/api/orders/".concat(
                                                                    r.id,
                                                                    "/pdf",
                                                                  ),
                                                                );
                                                              e.ok &&
                                                                t.push(
                                                                  await e.arrayBuffer(),
                                                                );
                                                            }
                                                            if (!t.length)
                                                              return;
                                                            let r =
                                                              await eB.PDFDocument.create();
                                                            for (let e of t) {
                                                              let t =
                                                                await eB.PDFDocument.load(
                                                                  e,
                                                                );
                                                              (
                                                                await r.copyPages(
                                                                  t,
                                                                  t.getPageIndices(),
                                                                )
                                                              ).forEach((e) =>
                                                                r.addPage(e),
                                                              );
                                                            }
                                                            let a =
                                                                await r.save(),
                                                              o = new Blob(
                                                                [a],
                                                                {
                                                                  type: "application/pdf",
                                                                },
                                                              ),
                                                              l =
                                                                window.URL.createObjectURL(
                                                                  o,
                                                                ),
                                                              n =
                                                                document.createElement(
                                                                  "a",
                                                                );
                                                            (n.href = l),
                                                              (n.download =
                                                                "batch-order-"
                                                                  .concat(
                                                                    s ||
                                                                      "untitled",
                                                                    "-",
                                                                  )
                                                                  .concat(
                                                                    Date.now(),
                                                                    ".pdf",
                                                                  )),
                                                              document.body.appendChild(
                                                                n,
                                                              ),
                                                              n.click(),
                                                              document.body.removeChild(
                                                                n,
                                                              ),
                                                              window.URL.revokeObjectURL(
                                                                l,
                                                              );
                                                          } catch (e) {
                                                            console.error(
                                                              "Error downloading group receipts",
                                                              e,
                                                            );
                                                          }
                                                        },
                                                        children:
                                                          "Group Receipts",
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          }),
                                        },
                                        "group-".concat(s, "-").concat(t),
                                      ),
                                    (0, a.jsxs)(
                                      D.A,
                                      {
                                        hover: !0,
                                        children: [
                                          (0, a.jsxs)(C.A, {
                                            sx: {
                                              fontFamily: "monospace",
                                              fontSize: 14,
                                            },
                                            children: [
                                              e.displayId || e.id,
                                              e.orderName &&
                                                (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                    (0, a.jsx)("br", {}),
                                                    e.orderName,
                                                  ],
                                                }),
                                              e.cartItems
                                                ? " (".concat(
                                                    e.cartItems.length,
                                                    " items)",
                                                  )
                                                : "",
                                            ],
                                          }),
                                          (0, a.jsx)(C.A, {
                                            children: ru(
                                              e.cartItems
                                                ? e.cartItems
                                                    .map(
                                                      (e) =>
                                                        e.screenshotDataUrl,
                                                    )
                                                    .filter(Boolean)
                                                : e.screenshotDataUrl
                                                  ? [e.screenshotDataUrl]
                                                  : void 0,
                                            ),
                                          }),
                                          (0, a.jsx)(C.A, { children: m }),
                                          (0, a.jsx)(C.A, {
                                            children: (0, a.jsx)(i.A, {
                                              display: "flex",
                                              gap: 1,
                                              children: eZ.map((t, r) => {
                                                let o =
                                                    "Cancelled" === e.status,
                                                  l = r === g,
                                                  n = o && l ? "Cancelled" : t;
                                                return (0, a.jsx)(
                                                  i.A,
                                                  {
                                                    flex: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                    p: 1,
                                                    sx: {
                                                      backgroundColor:
                                                        r <= g
                                                          ? o
                                                            ? H.palette.error
                                                                .main
                                                            : H.palette.success
                                                                .main
                                                          : "#e0e0e0",
                                                      color: "#fff",
                                                      borderRadius: 1,
                                                      fontSize: 12,
                                                      whiteSpace: "nowrap",
                                                      boxShadow: l
                                                        ? "0 0 12px 2px ".concat(
                                                            o
                                                              ? (0, S.X4)(
                                                                  H.palette
                                                                    .error.main,
                                                                  0.7,
                                                                )
                                                              : (0, S.X4)(
                                                                  H.palette
                                                                    .success
                                                                    .main,
                                                                  0.7,
                                                                ),
                                                          )
                                                        : "none",
                                                    },
                                                    children: n,
                                                  },
                                                  t,
                                                );
                                              }),
                                            }),
                                          }),
                                          (0, a.jsx)(C.A, {
                                            align: "right",
                                            children: (0, a.jsxs)(i.A, {
                                              display: "flex",
                                              justifyContent: "flex-end",
                                              gap: 1,
                                              children: [
                                                (0, a.jsx)(U.A, {
                                                  title: "Final Preview",
                                                  children: (0, a.jsx)(L.A, {
                                                    onClick: () => {
                                                      let t = e.cartItems
                                                        ? e.cartItems
                                                            .map(
                                                              (e) =>
                                                                e.screenshotDataUrl,
                                                            )
                                                            .filter(Boolean)
                                                        : e.screenshotDataUrl
                                                          ? [
                                                              e.screenshotDataUrl,
                                                            ]
                                                          : [];
                                                      t.length > 0 && eu(t[0]);
                                                    },
                                                    children: (0, a.jsx)(
                                                      ex.A,
                                                      {},
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(U.A, {
                                                  title:
                                                    "Download Order receipt",
                                                  children: (0, a.jsx)(L.A, {
                                                    onClick: async () => {
                                                      try {
                                                        let t = await fetch(
                                                          "/api/orders/".concat(
                                                            e.id,
                                                            "/pdf",
                                                          ),
                                                        );
                                                        if (t.ok) {
                                                          let r =
                                                              await t.blob(),
                                                            a =
                                                              window.URL.createObjectURL(
                                                                r,
                                                              ),
                                                            o =
                                                              document.createElement(
                                                                "a",
                                                              );
                                                          (o.href = a),
                                                            (o.download =
                                                              "order-".concat(
                                                                e.displayId ||
                                                                  e.id,
                                                                ".pdf",
                                                              )),
                                                            document.body.appendChild(
                                                              o,
                                                            ),
                                                            o.click(),
                                                            document.body.removeChild(
                                                              o,
                                                            ),
                                                            window.URL.revokeObjectURL(
                                                              a,
                                                            );
                                                        } else
                                                          console.error(
                                                            "Failed to download receipt",
                                                          );
                                                      } catch (e) {
                                                        console.error(
                                                          "Error downloading receipt:",
                                                          e,
                                                        );
                                                      }
                                                    },
                                                    children: (0, a.jsx)(
                                                      M.A,
                                                      {},
                                                    ),
                                                  }),
                                                }),
                                                (0, a.jsx)(U.A, {
                                                  title: "Edit as New",
                                                  children: (0, a.jsx)(L.A, {
                                                    onClick: async () => {
                                                      try {
                                                        var t, r, a, o, l;
                                                        let n = await fetch(
                                                          "/api/orders/".concat(
                                                            e.id,
                                                          ),
                                                          {
                                                            credentials:
                                                              "include",
                                                          },
                                                        );
                                                        if (!n.ok) return;
                                                        let i = await n.json(),
                                                          s =
                                                            null ==
                                                            (t = i.cartItems)
                                                              ? void 0
                                                              : t[0],
                                                          c =
                                                            null !=
                                                            (r = i.cartData)
                                                              ? r
                                                              : null == s
                                                                ? void 0
                                                                : s.cartData,
                                                          d =
                                                            null !=
                                                            (l =
                                                              null !=
                                                              (o =
                                                                null !=
                                                                (a =
                                                                  i.droppedItems)
                                                                  ? a
                                                                  : null == s
                                                                    ? void 0
                                                                    : s.droppedItems)
                                                                ? o
                                                                : null == s
                                                                  ? void 0
                                                                  : s.dropped)
                                                              ? l
                                                              : [];
                                                        if (!c) return;
                                                        rs(c, d),
                                                          X.push(
                                                            "/Dashboards/userDashboard",
                                                          );
                                                      } catch (e) {
                                                        console.error(
                                                          "Error loading order:",
                                                          e,
                                                        );
                                                      }
                                                    },
                                                    children: (0, a.jsx)(
                                                      V.A,
                                                      {},
                                                    ),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      },
                                      "row-".concat(e.id),
                                    ),
                                  ],
                                },
                                "frag-".concat(e.id),
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                    t5 &&
                      (0, a.jsx)(i.A, {
                        mt: 3,
                        display: "flex",
                        justifyContent: "center",
                        children: (0, a.jsx)(d.A, {
                          variant: "outlined",
                          onClick: () => t6(t2 + 1),
                          children: "Load More",
                        }),
                      }),
                  ],
                }),
              (0, a.jsxs)(k.A, {
                open: !!ed,
                onClose: () => eu(null),
                maxWidth: "lg",
                fullWidth: !0,
                children: [
                  (0, a.jsx)(L.A, {
                    onClick: () => eu(null),
                    sx: { position: "absolute", right: 8, top: 8, zIndex: 1 },
                    "aria-label": "Close",
                    children: (0, a.jsx)(B.A, {}),
                  }),
                  (0, a.jsx)(I.A, {
                    sx: {
                      p: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    children:
                      ed &&
                      (0, a.jsx)(l.default, {
                        src: ed,
                        alt: "preview",
                        width: 800,
                        height: 800,
                        style: {
                          maxWidth: "100%",
                          maxHeight: "80vh",
                          objectFit: "contain",
                        },
                      }),
                  }),
                ],
              }),
              (0, a.jsx)(eD.A, {
                open: em,
                onClose: () => {
                  eg(!1), ep(null), ev(!1), eA([]), eN([]);
                },
                blob: null != eh ? eh : void 0,
                fileName: ef,
                title: "Quote Preview",
                subtitle: eb
                  ? "Legacy format"
                  : "Modern format with visual preview",
                showLegacyButton: !0,
                legacyButtonLabel: eb ? "Modern Format" : "Legacy Format",
                isPremium: tK,
                onViewLegacy: () => {
                  eb ? ra() : rr();
                },
                showPrintButton: !0,
              }),
              (0, a.jsxs)(k.A, {
                open: tF,
                onClose: () => {
                  tN(!1), tU(null), tI(null);
                },
                maxWidth: "lg",
                fullWidth: !0,
                children: [
                  (0, a.jsxs)(E.A, {
                    children: [
                      "Order Preview",
                      (0, a.jsx)(L.A, {
                        onClick: () => {
                          tN(!1), tU(null), tI(null);
                        },
                        sx: { position: "absolute", right: 8, top: 8 },
                        "aria-label": "Close",
                        children: (0, a.jsx)(B.A, {}),
                      }),
                    ],
                  }),
                  (0, a.jsx)(I.A, {
                    sx: { p: 0, height: "70vh" },
                    children:
                      tL &&
                      (0, a.jsx)("iframe", {
                        src: URL.createObjectURL(tL),
                        style: {
                          width: "100%",
                          height: "100%",
                          border: "none",
                        },
                        title: "Order Preview",
                      }),
                  }),
                  (0, a.jsxs)(R.A, {
                    sx: { p: 2, gap: 1 },
                    children: [
                      (0, a.jsx)(d.A, {
                        onClick: () => {
                          tN(!1), tU(null), tI(null);
                        },
                        variant: "outlined",
                        children: "Cancel",
                      }),
                      (0, a.jsx)(d.A, {
                        onClick: rd,
                        variant: "contained",
                        color: "primary",
                        children: "Confirm & Place Order",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(eF, {
                open: tE,
                onClose: () => tR(!1),
                featureName: tq,
                featureDescription:
                  "Export your data to Excel format with professional formatting and branding.",
              }),
            ],
          }),
        });
      }
      function e0() {
        return (0, a.jsx)(o.Suspense, {
          fallback: null,
          children: (0, a.jsx)(e$, {}),
        });
      }
    },
  },
]);
