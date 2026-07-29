"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2817],
  {
    19114: (e, t, n) => {
      n.d(t, { N: () => j });
      var r = n(95155),
        i = n(12115),
        s = n(90869),
        o = n(82885),
        a = n(97494),
        l = n(80845),
        c = n(27351),
        d = n(51508);
      function x(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      class p extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              n = ((0, c.s)(e) && e.offsetWidth) || 0,
              r = this.props.sizeRef.current;
            (r.height = t.offsetHeight || 0),
              (r.width = t.offsetWidth || 0),
              (r.top = t.offsetTop),
              (r.left = t.offsetLeft),
              (r.right = n - r.width - r.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h(e) {
        let { children: t, isPresent: n, anchorX: s, root: o } = e,
          a = (0, i.useId)(),
          l = (0, i.useRef)(null),
          c = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: h } = (0, i.useContext)(d.Q),
          f = (function (...e) {
            return i.useCallback(
              (function (...e) {
                return (t) => {
                  let n = !1,
                    r = e.map((e) => {
                      let r = x(e, t);
                      return n || "function" != typeof r || (n = !0), r;
                    });
                  if (n)
                    return () => {
                      for (let t = 0; t < r.length; t++) {
                        let n = r[t];
                        "function" == typeof n ? n() : x(e[t], null);
                      }
                    };
                };
              })(...e),
              e,
            );
          })(l, null == t ? void 0 : t.ref);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: i, right: d } = c.current;
            if (n || !l.current || !e || !t) return;
            l.current.dataset.motionPopId = a;
            let x = document.createElement("style");
            h && (x.nonce = h);
            let p = null != o ? o : document.head;
            return (
              p.appendChild(x),
              x.sheet &&
                x.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      a,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === s ? "left: ".concat(i) : "right: ".concat(d),
                      "px !important;\n            top: ",
                    )
                    .concat(r, "px !important;\n          }\n        "),
                ),
              () => {
                p.contains(x) && p.removeChild(x);
              }
            );
          }, [n]),
          (0, r.jsx)(p, {
            isPresent: n,
            childRef: l,
            sizeRef: c,
            children: i.cloneElement(t, { ref: f }),
          })
        );
      }
      let f = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: s,
            onExitComplete: a,
            custom: c,
            presenceAffectsLayout: d,
            mode: x,
            anchorX: p,
            root: f,
          } = e,
          g = (0, o.M)(u),
          b = (0, i.useId)(),
          m = !0,
          j = (0, i.useMemo)(
            () => (
              (m = !1),
              {
                id: b,
                initial: n,
                isPresent: s,
                custom: c,
                onExitComplete: (e) => {
                  for (let t of (g.set(e, !0), g.values())) if (!t) return;
                  a && a();
                },
                register: (e) => (g.set(e, !1), () => g.delete(e)),
              }
            ),
            [s, g, a],
          );
        return (
          d && m && (j = { ...j }),
          (0, i.useMemo)(() => {
            g.forEach((e, t) => g.set(t, !1));
          }, [s]),
          i.useEffect(() => {
            s || g.size || !a || a();
          }, [s]),
          "popLayout" === x &&
            (t = (0, r.jsx)(h, {
              isPresent: s,
              anchorX: p,
              root: f,
              children: t,
            })),
          (0, r.jsx)(l.t.Provider, { value: j, children: t })
        );
      };
      function u() {
        return new Map();
      }
      var g = n(32082);
      let b = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let j = (e) => {
        let {
            children: t,
            custom: n,
            initial: l = !0,
            onExitComplete: c,
            presenceAffectsLayout: d = !0,
            mode: x = "sync",
            propagate: p = !1,
            anchorX: h = "left",
            root: u,
          } = e,
          [j, A] = (0, g.xQ)(p),
          v = (0, i.useMemo)(() => m(t), [t]),
          w = p && !j ? [] : v.map(b),
          S = (0, i.useRef)(!0),
          C = (0, i.useRef)(v),
          k = (0, o.M)(() => new Map()),
          [y, R] = (0, i.useState)(v),
          [E, I] = (0, i.useState)(v);
        (0, a.E)(() => {
          (S.current = !1), (C.current = v);
          for (let e = 0; e < E.length; e++) {
            let t = b(E[e]);
            w.includes(t) ? k.delete(t) : !0 !== k.get(t) && k.set(t, !1);
          }
        }, [E, w.length, w.join("-")]);
        let z = [];
        if (v !== y) {
          let e = [...v];
          for (let t = 0; t < E.length; t++) {
            let n = E[t],
              r = b(n);
            w.includes(r) || (e.splice(t, 0, n), z.push(n));
          }
          return "wait" === x && z.length && (e = z), I(m(e)), R(v), null;
        }
        let { forceRender: L } = (0, i.useContext)(s.L);
        return (0, r.jsx)(r.Fragment, {
          children: E.map((e) => {
            let t = b(e),
              i = (!p || !!j) && (v === E || w.includes(t));
            return (0, r.jsx)(
              f,
              {
                isPresent: i,
                initial: (!S.current || !!l) && void 0,
                custom: n,
                presenceAffectsLayout: d,
                mode: x,
                root: u,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!k.has(t)) return;
                      k.set(t, !0);
                      let e = !0;
                      k.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == L || L(),
                          I(C.current),
                          p && (null == A || A()),
                          c && c());
                    },
                anchorX: h,
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    32817: (e, t, n) => {
      n.d(t, { v: () => k });
      var r = n(95155),
        i = n(12115),
        s = n(19114),
        o = n(38274),
        a = n(36114),
        l = n(54581),
        c = n(71803),
        d = n(700),
        x = n(86220),
        p = n(99927),
        h = n(68534),
        f = n(16324),
        u = n(4420),
        g = n(69242),
        b = n(31418);
      let m = (0, b.A)(
          (0, r.jsx)("path", {
            d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
          }),
          "ChevronLeft",
        ),
        j = (0, b.A)(
          (0, r.jsx)("path", {
            d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
          }),
          "ChevronRight",
        );
      var A = n(20904);
      let v = (0, b.A)(
          (0, r.jsx)("path", {
            d: "m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99z",
          }),
          "StackedLineChart",
        ),
        w = (0, b.A)(
          (0, r.jsx)("path", {
            d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5",
          }),
          "Palette",
        );
      var S = n(59712),
        C = n(51044);
      function k(e) {
        var t;
        let { open: n, onClose: b, onSubscribe: k } = e,
          y = (0, f.A)(),
          R = C.f.length,
          [E, I] = (0, i.useState)(0),
          [z, L] = (0, i.useState)(0);
        if (
          ((0, i.useEffect)(() => {
            n || (I(0), L(0));
          }, [n]),
          !R)
        )
          return null;
        let W = C.f[Math.min(E, R - 1)],
          M =
            null !=
            (t = {
              automation: (0, r.jsx)(A.A, {
                sx: { fontSize: 32, color: "#fff" },
              }),
              insights: (0, r.jsx)(v, { sx: { fontSize: 32, color: "#fff" } }),
              experience: (0, r.jsx)(w, {
                sx: { fontSize: 32, color: "#fff" },
              }),
              assurance: (0, r.jsx)(S.A, {
                sx: { fontSize: 32, color: "#fff" },
              }),
            }[W.id])
              ? t
              : (0, r.jsx)(A.A, { sx: { fontSize: 32, color: "#fff" } });
        return (0, r.jsxs)(a.A, {
          open: n,
          onClose: b,
          maxWidth: "md",
          fullWidth: !0,
          PaperProps: {
            sx: {
              borderRadius: 5,
              overflow: "hidden",
              color: "#fff",
              position: "relative",
              background:
                "linear-gradient(145deg, #0f172a 0%, #1d1b52 45%, #3b0764 100%)",
              boxShadow: "0 40px 80px rgba(15,23,42,0.55)",
              display: "flex",
              flexDirection: "column",
              maxHeight: "90vh",
            },
          },
          children: [
            (0, r.jsx)(l.A, {
              sx: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at 12% 15%, rgba(59,130,246,0.25), transparent 50%), radial-gradient(circle at 88% 20%, rgba(236,72,153,0.25), transparent 52%)",
              },
            }),
            (0, r.jsxs)(l.A, {
              sx: { position: "relative", zIndex: 1 },
              children: [
                (0, r.jsxs)(l.A, {
                  sx: {
                    px: { xs: 3, md: 4 },
                    pt: { xs: 3, md: 4 },
                    pb: { xs: 2, md: 3 },
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 2,
                  },
                  children: [
                    (0, r.jsxs)(c.A, {
                      spacing: 0.75,
                      children: [
                        (0, r.jsx)(d.A, {
                          variant: "overline",
                          sx: {
                            letterSpacing: 4,
                            color: "rgba(255,255,255,0.6)",
                          },
                          children: "THE SWITCHCRAFT+ COLLECTION",
                        }),
                        (0, r.jsx)(d.A, {
                          variant: "h4",
                          sx: { fontWeight: 800, letterSpacing: -0.5 },
                          children:
                            "Curated to make every interaction unforgettable",
                        }),
                        (0, r.jsx)(d.A, {
                          sx: {
                            color: "rgba(255,255,255,0.78)",
                            maxWidth: 520,
                          },
                          children:
                            "Upgrade to the all-access experience designed for teams who demand velocity, vision, and white-glove support.",
                        }),
                      ],
                    }),
                    (0, r.jsx)(x.A, {
                      onClick: b,
                      sx: {
                        color: "rgba(255,255,255,0.65)",
                        "&:hover": { color: "rgba(255,255,255,0.9)" },
                      },
                      children: (0, r.jsx)(g.A, {}),
                    }),
                  ],
                }),
                (0, r.jsx)(p.A, {
                  sx: { pt: 0, px: 0, flexGrow: 1 },
                  children: (0, r.jsxs)(l.A, {
                    sx: { px: { xs: 3, md: 4 }, pb: { xs: 4, md: 5 } },
                    children: [
                      (0, r.jsx)(s.N, {
                        mode: "wait",
                        initial: !1,
                        children: (0, r.jsx)(
                          o.P.div,
                          {
                            initial: { opacity: 0, x: z >= 0 ? 40 : -40 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: z >= 0 ? -40 : 40 },
                            transition: { duration: 0.35, ease: "easeOut" },
                            children: (0, r.jsxs)(l.A, {
                              sx: {
                                position: "relative",
                                borderRadius: 4,
                                p: { xs: 3, md: 4 },
                                backgroundImage: W.gradient,
                                boxShadow: "0 30px 60px rgba(15,23,42,0.5)",
                                overflow: "hidden",
                              },
                              children: [
                                (0, r.jsx)(l.A, {
                                  sx: {
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 55%), radial-gradient(circle at 80% 85%, rgba(14,165,233,0.2), transparent 60%)",
                                    opacity: 0.6,
                                  },
                                }),
                                (0, r.jsxs)(c.A, {
                                  sx: { position: "relative", zIndex: 1 },
                                  spacing: 2.5,
                                  children: [
                                    (0, r.jsxs)(l.A, {
                                      sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                      },
                                      children: [
                                        (0, r.jsx)(l.A, {
                                          sx: {
                                            width: 54,
                                            height: 54,
                                            borderRadius: "22px",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "rgba(15,23,42,0.25)",
                                            boxShadow:
                                              "0 10px 24px rgba(15,23,42,0.35)",
                                            backdropFilter: "blur(8px)",
                                          },
                                          children: M,
                                        }),
                                        (0, r.jsxs)(l.A, {
                                          children: [
                                            (0, r.jsx)(d.A, {
                                              variant: "h5",
                                              sx: {
                                                fontWeight: 800,
                                                letterSpacing: -0.3,
                                              },
                                              children: W.title,
                                            }),
                                            (0, r.jsx)(d.A, {
                                              sx: {
                                                color: "rgba(255,255,255,0.86)",
                                                maxWidth: 520,
                                              },
                                              children: W.description,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)(c.A, {
                                      spacing: 1.5,
                                      component: "ul",
                                      sx: { listStyle: "none", pl: 0, m: 0 },
                                      children: W.highlights.map((e) =>
                                        (0, r.jsxs)(
                                          l.A,
                                          {
                                            component: "li",
                                            sx: {
                                              display: "flex",
                                              alignItems: "center",
                                              gap: 1.5,
                                              background: "rgba(15,23,42,0.25)",
                                              borderRadius: 2.5,
                                              px: 2.25,
                                              py: 1.35,
                                              boxShadow:
                                                "0 18px 38px rgba(15,23,42,0.25)",
                                              backdropFilter: "blur(6px)",
                                            },
                                            children: [
                                              (0, r.jsx)(l.A, {
                                                sx: {
                                                  width: 10,
                                                  height: 10,
                                                  borderRadius: "50%",
                                                  background:
                                                    "rgba(255,255,255,0.9)",
                                                  boxShadow:
                                                    "0 0 10px rgba(255,255,255,0.8)",
                                                },
                                              }),
                                              (0, r.jsx)(d.A, {
                                                sx: { fontWeight: 600 },
                                                children: e,
                                              }),
                                            ],
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          W.id,
                        ),
                      }),
                      (0, r.jsx)(c.A, {
                        direction: "row",
                        spacing: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        sx: { mt: 3 },
                        children: C.f.map((e, t) =>
                          (0, r.jsx)(
                            l.A,
                            {
                              sx: {
                                width: t === E ? 32 : 12,
                                height: 12,
                                borderRadius: 9999,
                                transition: "all 0.3s ease",
                                backgroundColor:
                                  t === E
                                    ? "rgba(255,255,255,0.95)"
                                    : "rgba(148,163,184,0.45)",
                                boxShadow:
                                  t === E
                                    ? "0 0 18px rgba(255,255,255,0.65)"
                                    : "none",
                              },
                            },
                            e.id,
                          ),
                        ),
                      }),
                      (0, r.jsxs)(l.A, {
                        sx: {
                          mt: 1.6,
                          display: "flex",
                          alignItems: { xs: "stretch", sm: "center" },
                          justifyContent: "space-between",
                          gap: { xs: 2, sm: 3 },
                          flexWrap: { xs: "wrap", sm: "nowrap" },
                        },
                        children: [
                          (0, r.jsxs)(c.A, {
                            direction: "row",
                            spacing: 1.5,
                            alignItems: "center",
                            sx: { flexShrink: 0 },
                            children: [
                              (0, r.jsx)(x.A, {
                                onClick: () => {
                                  R <= 1 || (L(-1), I((e) => (e - 1 + R) % R));
                                },
                                disabled: R <= 1,
                                sx: {
                                  color: "rgba(255,255,255,0.85)",
                                  border: "1px solid rgba(255,255,255,0.25)",
                                  "&:hover": {
                                    backgroundColor: (0, u.X4)(
                                      y.palette.common.white,
                                      0.08,
                                    ),
                                  },
                                },
                                children: (0, r.jsx)(m, {}),
                              }),
                              (0, r.jsx)(x.A, {
                                onClick: () => {
                                  R <= 1 || (L(1), I((e) => (e + 1) % R));
                                },
                                disabled: R <= 1,
                                sx: {
                                  color: "rgba(255,255,255,0.85)",
                                  border: "1px solid rgba(255,255,255,0.25)",
                                  "&:hover": {
                                    backgroundColor: (0, u.X4)(
                                      y.palette.common.white,
                                      0.08,
                                    ),
                                  },
                                },
                                children: (0, r.jsx)(j, {}),
                              }),
                              (0, r.jsxs)(d.A, {
                                sx: {
                                  color: "rgba(255,255,255,0.75)",
                                  fontWeight: 500,
                                },
                                children: [
                                  String(E + 1).padStart(2, "0"),
                                  " / ",
                                  String(R).padStart(2, "0"),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(h.A, {
                            onClick: k,
                            sx: {
                              position: "relative",
                              overflow: "hidden",
                              textTransform: "none",
                              fontWeight: 800,
                              fontSize: 16,
                              px: 3.5,
                              py: 1.4,
                              borderRadius: 9999,
                              backgroundImage:
                                "linear-gradient(120deg, #f97316, #a855f7, #38bdf8)",
                              color: "#fff",
                              boxShadow: "0 24px 45px rgba(249,115,22,0.45)",
                              transition:
                                "transform 0.25s ease, box-shadow 0.25s ease",
                              flexShrink: 0,
                              alignSelf: { xs: "stretch", sm: "auto" },
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 32px 60px rgba(249,115,22,0.55)",
                              },
                            },
                            children: "Subscribe now",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
