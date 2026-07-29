(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4998],
  {
    554: (e, t, l) => {
      "use strict";
      (l.r(t), l.d(t, { default: () => tQ }));
      var r,
        a = l(95155),
        o = l(12115),
        n = l(35695),
        i = l(66766),
        s = l(52699),
        d = l.n(s),
        c = l(12108),
        u = l(34540),
        p = l(78650);
      function m(e) {
        let { onUpload: t } = e,
          l = (0, u.wA)(),
          r = (0, o.useRef)(null),
          [n, i] = (0, o.useState)(!1),
          s = async (e) => {
            var a;
            let o = null == (a = e.target.files) ? void 0 : a[0];
            if (!o) return;
            let n = new FormData();
            (n.append("icon", o),
              n.append("category", "Decorative lights"),
              i(!0));
            try {
              let e = await fetch("/api/icons/upload", {
                method: "POST",
                body: n,
              });
              if ((i(!1), !e.ok)) throw Error("Upload failed");
              let r = await e.json(),
                a = {
                  id: r.id,
                  category: r.category,
                  src: r.url,
                  name: r.name,
                };
              (l((0, p.A0)(a)), t(a));
            } catch (e) {
              (console.error(e), i(!1));
            } finally {
              r.current && (r.current.value = "");
            }
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("input", {
              ref: r,
              type: "file",
              accept: ".png,.svg",
              onChange: s,
              style: { display: "none" },
            }),
            (0, a.jsx)("button", {
              onClick: () => {
                var e;
                return null == (e = r.current) ? void 0 : e.click();
              },
              disabled: n,
              className: "px-4 py-2 bg-blue-600 text-white rounded",
              children: n ? "Uploading…" : "Upload Icon",
            }),
          ],
        });
      }
      var x = l(99511),
        h = l(97781);
      let g = (e, t) => {
        let l = Object.entries(e);
        if (!l.length) throw Error("No entries found in the data object.");
        let r = l.find((e) => {
          let [t] = e;
          return "id" !== t && "price" !== t && "color" !== t;
        });
        if (!r) throw Error("No item entry found in the data object.");
        let [a, o] = r;
        if (!e.id) throw Error("ID is required and not found.");
        if (null == o) throw Error("Item value is required and not found.");
        if (void 0 === e.price) throw Error("Price is required and not found.");
        return {
          id: null != t ? t : e.id,
          item: o,
          price: e.price,
          color: e.color,
        };
      };
      var f = l(1743),
        b = l(27363),
        y = l(46607);
      let v = (e) => {
        var t, l, r, n, i, s;
        let {
            data: d,
            small: c = !1,
            currentOptionType: p = "",
            tourId: m,
          } = e,
          v = (0, u.wA)(),
          j = (0, u.d4)((e) => e.selectionData.currentStep),
          w = (0, u.d4)((e) => e.selectionData.autoNext),
          S = (0, u.d4)((e) => e.cartData.cartData),
          [N, A] = (0, o.useState)(!1),
          k = (0, u.d4)((e) => e.extraSlice.accessoryOccupancy),
          C = null != (t = k.totalSize) ? t : 0,
          M = null != (l = k.totalOccupiedSize) ? l : 0,
          T = null != (r = k.totalOccupiedSize1) ? r : 0,
          P = null != (n = k.totalOccupiedSize2) ? n : 0,
          { accessoryCurrentId: z } = (0, u.d4)((e) => e.extraSlice),
          I = Object.entries(d).find((e) => {
            let [t] = e;
            return "id" !== t && "price" !== t && "color" !== t;
          });
        if (!I) return null;
        let [O, L] = I,
          E =
            "Panel" === j.step &&
            "string" == typeof (null == d ? void 0 : d.displayValue)
              ? d.displayValue
              : L,
          D = null != (i = d.color) ? i : "#fff",
          R = (0, y.c)(D) ? "text-white" : "text-black",
          U = (e) => {
            var t, l;
            let r = null != (l = (0, b.jh)(O)) ? l : 0,
              a = M + r,
              o = null == (t = S.size) ? void 0 : t.item;
            if (12 === C) {
              let t = 6,
                l = 6;
              if (
                ("12 Module 2 Socket V" === o
                  ? ((t = 4), (l = 4))
                  : "12 Module 2 Socket H" === o && ((t = 6), (l = 2)),
                r > Math.max(t, l))
              )
                return void v(
                  (0, f.S7)({
                    message: "Accessory too big for row",
                    duration: 3e3,
                  }),
                );
              T + r <= t
                ? (v((0, h.addAccessory1)({ optionType: p, option: e })),
                  v((0, h.addAccessory)({ optionType: p, option: e })),
                  v((0, f.Bh)(r)),
                  v((0, f.sw)(r)))
                : P + r <= l
                  ? (v((0, h.addAccessory2)({ optionType: p, option: e })),
                    v((0, h.addAccessory)({ optionType: p, option: e })),
                    v((0, f.Bh)(r)),
                    v((0, f.Zx)(r)))
                  : v(
                      (0, f.S7)({
                        message: "No room for more accessories.",
                        duration: 3e3,
                      }),
                    );
            } else
              16 === C
                ? T + r <= 8
                  ? (v((0, h.addAccessory1)({ optionType: p, option: e })),
                    v((0, h.addAccessory)({ optionType: p, option: e })),
                    v((0, f.Bh)(r)),
                    v((0, f.sw)(r)))
                  : P + r <= 8
                    ? (v((0, h.addAccessory2)({ optionType: p, option: e })),
                      v((0, h.addAccessory)({ optionType: p, option: e })),
                      v((0, f.Bh)(r)),
                      v((0, f.Zx)(r)))
                    : v(
                        (0, f.S7)({
                          message: "No room for more accessories.",
                          duration: 3e3,
                        }),
                      )
                : a <= C
                  ? (v((0, h.addAccessory)({ optionType: p, option: e })),
                    v((0, f.Bh)(r)))
                  : v(
                      (0, f.S7)({
                        message: "Cannot add more accessories.",
                        duration: 3e3,
                      }),
                    );
            v((0, x.iY)(!1));
          },
          F = "lg:text-lg sm:text-sm",
          W = "lg:text-3xl",
          B =
            "Accessories" === j.step
              ? N
              : (() => {
                  let { accessories: e, accessories1: t, accessories2: l } = S;
                  return [e, t, l].some((e) =>
                    e.some(
                      (e) =>
                        e.optionType === p &&
                        e.options.some((e) => e.id === d.id),
                    ),
                  );
                })();
        return (0, a.jsxs)("div", {
          id: m,
          onClick: () => {
            var e, t;
            let l;
            (A(!0), setTimeout(() => A(!1), 300));
            try {
              "Accessories" !== j.step
                ? (l = g(d))
                : ((l = g(d, z.toString())), v((0, f.Hp)()));
            } catch (e) {
              console.error("Transform error", e);
              return;
            }
            switch (j.step) {
              case "Panel":
                (v(
                  (0, h.addOrUpdatePanel)({
                    ...l,
                    noFrame: null != (e = d.noFrame) && e,
                  }),
                ),
                  v((0, x.iY)(!1)),
                  v(
                    (0, f.S7)({
                      message: "Panel selected: ".concat(String(E)),
                      severity: "success",
                      duration: 1600,
                    }),
                  ));
                break;
              case "Material":
                (v((0, h.addOrUpdateMaterial)(l)),
                  v((0, x.iY)(!1)),
                  v(
                    (0, f.S7)({
                      message: "Material selected: ".concat(String(E)),
                      severity: "success",
                      duration: 1600,
                    }),
                  ));
                break;
              case "Size":
                (v((0, h.addOrUpdateSize)(l)),
                  v((0, x.iY)(!1)),
                  v((0, f.AQ)((0, b.wq)(l.item))),
                  v((0, f.nI)()));
                break;
              case "Accessories":
                U(l);
                break;
              case "Color":
                v((0, h.addOrUpdateColor)({ optionType: p, option: l }));
                {
                  let e = ["Edge", "Color", "Royal Edge"].includes(
                    null == (t = S.panel) ? void 0 : t.item,
                  );
                  "Material Color" === p && e
                    ? v((0, x.iY)(!0))
                    : v((0, x.iY)(!1));
                }
                "Material Color" === p
                  ? v(
                      (0, f.S7)({
                        message: "Material color set to ".concat(String(E)),
                        severity: "success",
                        duration: 1400,
                      }),
                    )
                  : /Frame/i.test(p) &&
                    v(
                      (0, f.S7)({
                        message: "Frame color set to ".concat(String(E)),
                        severity: "success",
                        duration: 1400,
                      }),
                    );
            }
            w &&
              ["Panel", "Material", "Size"].includes(j.step) &&
              v((0, x.sk)(S));
          },
          className:
            "relative flex cursor-pointer flex-col rounded-lg border p-3 shadow-md hover:border-blue-600 active:border-blue-600 sm:min-w-[120px] "
              .concat(
                c ? "sm:min-w-[200px] lg:min-w-[230px]" : "lg:min-w-[240px]",
                " transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 ",
              )
              .concat(B ? "ring-2 ring-blue-600 ring-offset-1" : "", " "),
          style: { backgroundColor: D },
          children: [
            "Panel" !== j.step
              ? (0, a.jsx)("p", {
                  className:
                    "font-semibold text-gray-500 sm:text-xs lg:text-sm",
                  children: O,
                })
              : (0, a.jsx)("p", {
                  className:
                    "invisible font-semibold text-gray-500 sm:text-xs lg:text-sm",
                  "aria-hidden": "true",
                  children: O,
                }),
            "Panel" === j.step &&
              (0, a.jsx)("h2", {
                className: "invisible font-bold leading-8 ".concat(c ? F : W),
                "aria-hidden": "true",
                children: L,
              }),
            (0, a.jsx)("h2", {
              className: "font-bold leading-8 "
                .concat(c ? F : W, " ")
                .concat(R, " ")
                .concat(
                  null !=
                    (s = {
                      Panel:
                        "absolute inset-0 flex w-full items-center justify-center text-center",
                    }[j.step])
                    ? s
                    : "",
                ),
              children: E,
            }),
          ],
        });
      };
      var j = l(88507),
        w = l(54581),
        S = l(52596),
        N = l(17472),
        A = l(75955),
        k = l(77856),
        C = l(55170),
        M = l(90870);
      function T(e) {
        return (0, M.Ay)("MuiStepper", e);
      }
      (0, C.A)("MuiStepper", [
        "root",
        "horizontal",
        "vertical",
        "nonLinear",
        "alternativeLabel",
      ]);
      var P = l(13209),
        z = l(40680);
      let I = o.createContext({}),
        O = o.createContext({});
      function L(e) {
        return (0, M.Ay)("MuiStepConnector", e);
      }
      (0, C.A)("MuiStepConnector", [
        "root",
        "horizontal",
        "vertical",
        "alternativeLabel",
        "active",
        "completed",
        "disabled",
        "line",
        "lineHorizontal",
        "lineVertical",
      ]);
      let E = (e) => {
          let {
              classes: t,
              orientation: l,
              alternativeLabel: r,
              active: a,
              completed: o,
              disabled: n,
            } = e,
            i = {
              root: [
                "root",
                l,
                r && "alternativeLabel",
                a && "active",
                o && "completed",
                n && "disabled",
              ],
              line: ["line", "line".concat((0, P.A)(l))],
            };
          return (0, N.A)(i, L, t);
        },
        D = (0, A.Ay)("div", {
          name: "MuiStepConnector",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: l } = e;
            return [
              t.root,
              t[l.orientation],
              l.alternativeLabel && t.alternativeLabel,
              l.completed && t.completed,
            ];
          },
        })({
          flex: "1 1 auto",
          variants: [
            { props: { orientation: "vertical" }, style: { marginLeft: 12 } },
            {
              props: { alternativeLabel: !0 },
              style: {
                position: "absolute",
                top: 12,
                left: "calc(-50% + 20px)",
                right: "calc(50% + 20px)",
              },
            },
          ],
        }),
        R = (0, A.Ay)("span", {
          name: "MuiStepConnector",
          slot: "Line",
          overridesResolver: (e, t) => {
            let { ownerState: l } = e;
            return [t.line, t["line".concat((0, P.A)(l.orientation))]];
          },
        })(
          (0, z.A)((e) => {
            let { theme: t } = e,
              l =
                "light" === t.palette.mode
                  ? t.palette.grey[400]
                  : t.palette.grey[600];
            return {
              display: "block",
              borderColor: t.vars ? t.vars.palette.StepConnector.border : l,
              variants: [
                {
                  props: { orientation: "horizontal" },
                  style: { borderTopStyle: "solid", borderTopWidth: 1 },
                },
                {
                  props: { orientation: "vertical" },
                  style: {
                    borderLeftStyle: "solid",
                    borderLeftWidth: 1,
                    minHeight: 24,
                  },
                },
              ],
            };
          }),
        ),
        U = o.forwardRef(function (e, t) {
          let l = (0, k.b)({ props: e, name: "MuiStepConnector" }),
            { className: r, ...n } = l,
            { alternativeLabel: i, orientation: s = "horizontal" } =
              o.useContext(I),
            { active: d, disabled: c, completed: u } = o.useContext(O),
            p = {
              ...l,
              alternativeLabel: i,
              orientation: s,
              active: d,
              completed: u,
              disabled: c,
            },
            m = E(p);
          return (0, a.jsx)(D, {
            className: (0, S.A)(m.root, r),
            ref: t,
            ownerState: p,
            ...n,
            children: (0, a.jsx)(R, { className: m.line, ownerState: p }),
          });
        }),
        F = (e) => {
          let {
            orientation: t,
            nonLinear: l,
            alternativeLabel: r,
            classes: a,
          } = e;
          return (0, N.A)(
            { root: ["root", t, l && "nonLinear", r && "alternativeLabel"] },
            T,
            a,
          );
        },
        W = (0, A.Ay)("div", {
          name: "MuiStepper",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: l } = e;
            return [
              t.root,
              t[l.orientation],
              l.alternativeLabel && t.alternativeLabel,
              l.nonLinear && t.nonLinear,
            ];
          },
        })({
          display: "flex",
          variants: [
            {
              props: { orientation: "horizontal" },
              style: { flexDirection: "row", alignItems: "center" },
            },
            {
              props: { orientation: "vertical" },
              style: { flexDirection: "column" },
            },
            {
              props: { alternativeLabel: !0 },
              style: { alignItems: "flex-start" },
            },
          ],
        }),
        B = (0, a.jsx)(U, {}),
        _ = o.forwardRef(function (e, t) {
          let l = (0, k.b)({ props: e, name: "MuiStepper" }),
            {
              activeStep: r = 0,
              alternativeLabel: n = !1,
              children: i,
              className: s,
              component: d = "div",
              connector: c = B,
              nonLinear: u = !1,
              orientation: p = "horizontal",
              ...m
            } = l,
            x = {
              ...l,
              nonLinear: u,
              alternativeLabel: n,
              orientation: p,
              component: d,
            },
            h = F(x),
            g = o.Children.toArray(i).filter(Boolean),
            f = g.map((e, t) =>
              o.cloneElement(e, {
                index: t,
                last: t + 1 === g.length,
                ...e.props,
              }),
            ),
            b = o.useMemo(
              () => ({
                activeStep: r,
                alternativeLabel: n,
                connector: c,
                nonLinear: u,
                orientation: p,
              }),
              [r, n, c, u, p],
            );
          return (0, a.jsx)(I.Provider, {
            value: b,
            children: (0, a.jsx)(W, {
              as: d,
              ownerState: x,
              className: (0, S.A)(h.root, s),
              ref: t,
              ...m,
              children: f,
            }),
          });
        });
      function H(e) {
        return (0, M.Ay)("MuiStep", e);
      }
      (0, C.A)("MuiStep", [
        "root",
        "horizontal",
        "vertical",
        "alternativeLabel",
        "completed",
      ]);
      let G = (e) => {
          let {
            classes: t,
            orientation: l,
            alternativeLabel: r,
            completed: a,
          } = e;
          return (0, N.A)(
            { root: ["root", l, r && "alternativeLabel", a && "completed"] },
            H,
            t,
          );
        },
        Y = (0, A.Ay)("div", {
          name: "MuiStep",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: l } = e;
            return [
              t.root,
              t[l.orientation],
              l.alternativeLabel && t.alternativeLabel,
              l.completed && t.completed,
            ];
          },
        })({
          variants: [
            {
              props: { orientation: "horizontal" },
              style: { paddingLeft: 8, paddingRight: 8 },
            },
            {
              props: { alternativeLabel: !0 },
              style: { flex: 1, position: "relative" },
            },
          ],
        }),
        X = o.forwardRef(function (e, t) {
          let l = (0, k.b)({ props: e, name: "MuiStep" }),
            {
              active: r,
              children: n,
              className: i,
              component: s = "div",
              completed: d,
              disabled: c,
              expanded: u = !1,
              index: p,
              last: m,
              ...x
            } = l,
            {
              activeStep: h,
              connector: g,
              alternativeLabel: f,
              orientation: b,
              nonLinear: y,
            } = o.useContext(I),
            [v = !1, j = !1, w = !1] = [r, d, c];
          h === p
            ? (v = void 0 === r || r)
            : !y && h > p
              ? (j = void 0 === d || d)
              : !y && h < p && (w = void 0 === c || c);
          let N = o.useMemo(
              () => ({
                index: p,
                last: m,
                expanded: u,
                icon: p + 1,
                active: v,
                completed: j,
                disabled: w,
              }),
              [p, m, u, v, j, w],
            ),
            A = {
              ...l,
              active: v,
              orientation: b,
              alternativeLabel: f,
              completed: j,
              disabled: w,
              expanded: u,
              component: s,
            },
            C = G(A),
            M = (0, a.jsxs)(Y, {
              as: s,
              className: (0, S.A)(C.root, i),
              ref: t,
              ownerState: A,
              ...x,
              children: [g && f && 0 !== p ? g : null, n],
            });
          return (0, a.jsx)(O.Provider, {
            value: N,
            children:
              g && !f && 0 !== p
                ? (0, a.jsxs)(o.Fragment, { children: [g, M] })
                : M,
          });
        });
      function q(e) {
        return (0, M.Ay)("MuiStepLabel", e);
      }
      let V = (0, C.A)("MuiStepLabel", [
        "root",
        "horizontal",
        "vertical",
        "label",
        "active",
        "completed",
        "error",
        "disabled",
        "iconContainer",
        "alternativeLabel",
        "labelContainer",
      ]);
      var Q = l(31418);
      let J = (0, Q.A)(
          (0, a.jsx)("path", {
            d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z",
          }),
          "CheckCircle",
        ),
        Z = (0, Q.A)(
          (0, a.jsx)("path", {
            d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
          }),
          "Warning",
        );
      var K = l(78921);
      function $(e) {
        return (0, M.Ay)("MuiStepIcon", e);
      }
      let ee = (0, C.A)("MuiStepIcon", [
          "root",
          "active",
          "completed",
          "error",
          "text",
        ]),
        et = (e) => {
          let { classes: t, active: l, completed: r, error: a } = e;
          return (0, N.A)(
            {
              root: ["root", l && "active", r && "completed", a && "error"],
              text: ["text"],
            },
            $,
            t,
          );
        },
        el = (0, A.Ay)(K.A, { name: "MuiStepIcon", slot: "Root" })(
          (0, z.A)((e) => {
            let { theme: t } = e;
            return {
              display: "block",
              transition: t.transitions.create("color", {
                duration: t.transitions.duration.shortest,
              }),
              color: (t.vars || t).palette.text.disabled,
              ["&.".concat(ee.completed)]: {
                color: (t.vars || t).palette.primary.main,
              },
              ["&.".concat(ee.active)]: {
                color: (t.vars || t).palette.primary.main,
              },
              ["&.".concat(ee.error)]: {
                color: (t.vars || t).palette.error.main,
              },
            };
          }),
        ),
        er = (0, A.Ay)("text", { name: "MuiStepIcon", slot: "Text" })(
          (0, z.A)((e) => {
            let { theme: t } = e;
            return {
              fill: (t.vars || t).palette.primary.contrastText,
              fontSize: t.typography.caption.fontSize,
              fontFamily: t.typography.fontFamily,
            };
          }),
        ),
        ea = o.forwardRef(function (e, t) {
          let l = (0, k.b)({ props: e, name: "MuiStepIcon" }),
            {
              active: o = !1,
              className: n,
              completed: i = !1,
              error: s = !1,
              icon: d,
              ...c
            } = l,
            u = { ...l, active: o, completed: i, error: s },
            p = et(u);
          if ("number" == typeof d || "string" == typeof d) {
            let e = (0, S.A)(n, p.root);
            return s
              ? (0, a.jsx)(el, {
                  as: Z,
                  className: e,
                  ref: t,
                  ownerState: u,
                  ...c,
                })
              : i
                ? (0, a.jsx)(el, {
                    as: J,
                    className: e,
                    ref: t,
                    ownerState: u,
                    ...c,
                  })
                : (0, a.jsxs)(el, {
                    className: e,
                    ref: t,
                    ownerState: u,
                    ...c,
                    children: [
                      r ||
                        (r = (0, a.jsx)("circle", {
                          cx: "12",
                          cy: "12",
                          r: "12",
                        })),
                      (0, a.jsx)(er, {
                        className: p.text,
                        x: "12",
                        y: "12",
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        ownerState: u,
                        children: d,
                      }),
                    ],
                  });
          }
          return d;
        });
      var eo = l(47798);
      let en = (e) => {
          let {
            classes: t,
            orientation: l,
            active: r,
            completed: a,
            error: o,
            disabled: n,
            alternativeLabel: i,
          } = e;
          return (0, N.A)(
            {
              root: [
                "root",
                l,
                o && "error",
                n && "disabled",
                i && "alternativeLabel",
              ],
              label: [
                "label",
                r && "active",
                a && "completed",
                o && "error",
                n && "disabled",
                i && "alternativeLabel",
              ],
              iconContainer: [
                "iconContainer",
                r && "active",
                a && "completed",
                o && "error",
                n && "disabled",
                i && "alternativeLabel",
              ],
              labelContainer: ["labelContainer", i && "alternativeLabel"],
            },
            q,
            t,
          );
        },
        ei = (0, A.Ay)("span", {
          name: "MuiStepLabel",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: l } = e;
            return [t.root, t[l.orientation]];
          },
        })({
          display: "flex",
          alignItems: "center",
          ["&.".concat(V.alternativeLabel)]: { flexDirection: "column" },
          ["&.".concat(V.disabled)]: { cursor: "default" },
          variants: [
            {
              props: { orientation: "vertical" },
              style: { textAlign: "left", padding: "8px 0" },
            },
          ],
        }),
        es = (0, A.Ay)("span", { name: "MuiStepLabel", slot: "Label" })(
          (0, z.A)((e) => {
            let { theme: t } = e;
            return {
              ...t.typography.body2,
              display: "block",
              transition: t.transitions.create("color", {
                duration: t.transitions.duration.shortest,
              }),
              ["&.".concat(V.active)]: {
                color: (t.vars || t).palette.text.primary,
                fontWeight: 500,
              },
              ["&.".concat(V.completed)]: {
                color: (t.vars || t).palette.text.primary,
                fontWeight: 500,
              },
              ["&.".concat(V.alternativeLabel)]: { marginTop: 16 },
              ["&.".concat(V.error)]: {
                color: (t.vars || t).palette.error.main,
              },
            };
          }),
        ),
        ed = (0, A.Ay)("span", { name: "MuiStepLabel", slot: "IconContainer" })(
          {
            flexShrink: 0,
            display: "flex",
            paddingRight: 8,
            ["&.".concat(V.alternativeLabel)]: { paddingRight: 0 },
          },
        ),
        ec = (0, A.Ay)("span", {
          name: "MuiStepLabel",
          slot: "LabelContainer",
        })(
          (0, z.A)((e) => {
            let { theme: t } = e;
            return {
              width: "100%",
              color: (t.vars || t).palette.text.secondary,
              ["&.".concat(V.alternativeLabel)]: { textAlign: "center" },
            };
          }),
        ),
        eu = o.forwardRef(function (e, t) {
          let l = (0, k.b)({ props: e, name: "MuiStepLabel" }),
            {
              children: r,
              className: n,
              componentsProps: i = {},
              error: s = !1,
              icon: d,
              optional: c,
              slots: u = {},
              slotProps: p = {},
              StepIconComponent: m,
              StepIconProps: x,
              ...h
            } = l,
            { alternativeLabel: g, orientation: f } = o.useContext(I),
            { active: b, disabled: y, completed: v, icon: j } = o.useContext(O),
            w = d || j,
            N = m;
          w && !N && (N = ea);
          let A = {
              ...l,
              active: b,
              alternativeLabel: g,
              completed: v,
              disabled: y,
              error: s,
              orientation: f,
            },
            C = en(A),
            M = { slots: u, slotProps: { stepIcon: x, ...i, ...p } },
            [T, P] = (0, eo.A)("root", {
              elementType: ei,
              externalForwardedProps: { ...M, ...h },
              ownerState: A,
              ref: t,
              className: (0, S.A)(C.root, n),
            }),
            [z, L] = (0, eo.A)("label", {
              elementType: es,
              externalForwardedProps: M,
              ownerState: A,
            }),
            [E, D] = (0, eo.A)("stepIcon", {
              elementType: N,
              externalForwardedProps: M,
              ownerState: A,
            });
          return (0, a.jsxs)(T, {
            ...P,
            children: [
              w || E
                ? (0, a.jsx)(ed, {
                    className: C.iconContainer,
                    ownerState: A,
                    children: (0, a.jsx)(E, {
                      completed: v,
                      active: b,
                      error: s,
                      icon: w,
                      ...D,
                    }),
                  })
                : null,
              (0, a.jsxs)(ec, {
                className: C.labelContainer,
                ownerState: A,
                children: [
                  r
                    ? (0, a.jsx)(z, {
                        ...L,
                        className: (0, S.A)(
                          C.label,
                          null == L ? void 0 : L.className,
                        ),
                        children: r,
                      })
                    : null,
                  c,
                ],
              }),
            ],
          });
        });
      eu.muiName = "StepLabel";
      var ep = l(700),
        em = l(30809);
      let ex = [
        "#4285F4",
        "#DB4437",
        "#F4B400",
        "#0F9D58",
        "#AB47BC",
        "#00ACC1",
      ];
      function eh() {
        var e, t, l, r, n, i, s, d, c, p;
        let m = (0, u.wA)(),
          g = (0, u.d4)((e) => e.selectionData.currentStep),
          b = (0, u.d4)((e) => e.selectionData.selectionData),
          y = (0, u.d4)((e) => e.cartData.cartData),
          [v, j] = (0, o.useState)({});
        ((0, o.useEffect)(() => {
          try {
            let e = (0, em.b)();
            e && "object" == typeof e && j(e);
          } catch (e) {}
        }, []),
          (0, o.useEffect)(() => {
            let e = !1;
            return (
              fetch("/api/premium/panel-names", { cache: "no-store" })
                .then((e) =>
                  e.ok ? e.json() : Promise.reject(Error(e.statusText)),
                )
                .then((t) => {
                  if (!e) {
                    let e = (null == t ? void 0 : t.overrides) || {};
                    j(e);
                    try {
                      (0, em.EO)(e);
                    } catch (e) {}
                  }
                })
                .catch(() => void 0),
              () => {
                e = !0;
              }
            );
          }, []));
        let S = {
            1: (() => {
              var e, t, l;
              let r =
                null !=
                (t = null == y || null == (e = y.panel) ? void 0 : e.item)
                  ? t
                  : "";
              return null != (l = v[r]) ? l : r;
            })(),
            2:
              null !=
              (s = null == y || null == (e = y.material) ? void 0 : e.item)
                ? s
                : "",
            3:
              null != (d = null == y || null == (t = y.size) ? void 0 : t.item)
                ? d
                : "",
            6:
              null !=
              (c =
                null == y ||
                null == (n = y.color) ||
                null ==
                  (r = n.find((e) => "Material Color" === e.optionType)) ||
                null == (l = r.options[0])
                  ? void 0
                  : l.item)
                ? c
                : "",
            7:
              null !=
              (p = null == y || null == (i = y.technology) ? void 0 : i.item)
                ? p
                : "",
          },
          [N, A] = (0, o.useState)("linear-gradient(90deg, #4285F4, #DB4437)");
        (0, o.useEffect)(() => {
          (null == g ? void 0 : g.stepNo) &&
            A(
              (function () {
                let [e, t] = ex.sort(() => 0.5 - Math.random()).slice(0, 2);
                return "linear-gradient(90deg, ".concat(e, ", ").concat(t, ")");
              })(),
            );
        }, [null == g ? void 0 : g.stepNo]);
        let k = (e) => {
            try {
              (m((0, x._0)({ stepData: e, cartData: y, currentStep: g })),
                e.stepNo >= 5 && m((0, h.hideCanvasBorder)()));
            } catch (e) {
              m((0, f.S7)({ message: e.message || "Error", duration: 3e3 }));
            }
          },
          C = (0, o.useMemo)(() => {
            var e;
            return (null != (e = null == g ? void 0 : g.stepNo) ? e : 1) - 1;
          }, [g]),
          M = b.length,
          T = M > 0 ? (C / M) * 100 : 0;
        return (0, a.jsxs)(w.A, {
          sx: { width: "100%", maxWidth: 600, position: "relative", py: 3 },
          children: [
            (0, a.jsx)(w.A, {
              sx: {
                position: "absolute",
                top: 35,
                left: 31,
                right: 31,
                height: 4,
                bgcolor: "#e0e0e0",
                borderRadius: 2,
                zIndex: 0,
              },
            }),
            (0, a.jsx)(w.A, {
              sx: {
                position: "absolute",
                top: 35,
                left: 31,
                width: "".concat(T, "%"),
                height: 4,
                backgroundImage: N,
                borderRadius: 2,
                transition: "width 400ms ease",
                zIndex: 1,
              },
            }),
            (0, a.jsx)(_, {
              activeStep: C,
              alternativeLabel: !0,
              connector: null,
              sx: {
                ["& .".concat(V.root)]: { zIndex: 2 },
                "& .MuiStepIcon-root": { backgroundColor: "#fff", zIndex: 3 },
              },
              children: b.map((e) => {
                var t;
                let l = null != (t = S[e.stepNo]) ? t : "",
                  r = !1,
                  o = [];
                if (3 === e.stepNo && "string" == typeof l) {
                  let e = l.trim().split(/\s+/);
                  e.length > 2 &&
                    ((r = !0),
                    (o = [e.slice(0, 2).join(" "), e.slice(2).join(" ")]));
                }
                return (0, a.jsx)(
                  X,
                  {
                    children: (0, a.jsxs)(eu, {
                      onClick: () => k(e),
                      sx: {
                        position: "relative",
                        cursor: "pointer",
                        mb: 4,
                        pt: 0,
                        zIndex: 2,
                      },
                      children: [
                        l &&
                          (0, a.jsx)(ep.A, {
                            variant: "caption",
                            component: "div",
                            sx: {
                              position: "absolute",
                              bottom: "100%",
                              mb: 1,
                              left: "50%",
                              transform: "translateX(-50%)",
                              whiteSpace: r ? "normal" : "nowrap",
                              maxWidth: 80,
                              textAlign: "center",
                              zIndex: 3,
                              lineHeight: 1.1,
                            },
                            children: r
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [o[0], (0, a.jsx)("br", {}), o[1]],
                                })
                              : l,
                          }),
                        e.step,
                      ],
                    }),
                  },
                  e.stepNo,
                );
              }),
            }),
          ],
        });
      }
      function eg() {
        let e = (0, u.d4)((e) => e.selectionData.currentStep);
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col md:flex-row justify-between items-center p-4",
          children: [
            (0, a.jsx)(j.A, { title: null == e ? void 0 : e.description }),
            (0, a.jsx)(eh, {}),
          ],
        });
      }
      var ef = l(91482);
      function eb(e) {
        let { optionTypes: t, value: l, onOptionTypeChange: r } = e,
          o = (e) =>
            "2 Modular" === e
              ? "tour-2mod-section-title"
              : "4 Modular" === e
                ? "tour-4mod-section-title"
                : "Frame Color" === e
                  ? "tour-frame-color-title"
                  : void 0;
        return (0, a.jsx)("div", {
          className: "flex overflow-x-auto border-b mb-4",
          children: t.map((e) => {
            let t = e.id === l;
            return (0, a.jsx)(
              "button",
              {
                id: o(e.label),
                onClick: () => r(e.id),
                className: "px-4 py-2 whitespace-nowrap ".concat(
                  t
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-gray-900",
                  " focus:outline-none",
                ),
                children: e.label,
              },
              e.id,
            );
          }),
        });
      }
      var ey = l(22627),
        ev = l(55756);
      let ej = (e) => {
          let { label: t = "Qty" } = e,
            l = (0, u.wA)(),
            r = (0, u.d4)((e) => e.cartData.quantity),
            [n, i] = (0, o.useState)(r.toString()),
            [s, d] = (0, o.useState)(null),
            c = () => {
              let e = r + 1;
              (l((0, h.increaseQuantity)({ qty: e })), i(e.toString()));
            },
            p = () => {
              let e = r - 1;
              e > 0 &&
                (l((0, h.increaseQuantity)({ qty: e })), i(e.toString()));
            };
          (0, o.useEffect)(
            () => (
              s && clearTimeout(s),
              d(
                setTimeout(() => {
                  let e = n.trim();
                  "" === e && (i("1"), (e = "1"));
                  let t = parseInt(e, 10);
                  !isNaN(t) && t >= 0 && l((0, h.increaseQuantity)({ qty: t }));
                }, 1e3),
              ),
              () => {
                s && clearTimeout(s);
              }
            ),
            [n, r, l],
          );
          let m = Math.max(3, r.toString().length) + 1;
          return (0, a.jsxs)("div", {
            className:
              "group relative inline-flex items-center border border-gray-300 text-gray-700 font-medium rounded-xl px-2 py-1.5 gap-2 focus:outline-none bg-white hover:border-gray-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 overflow-hidden",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              }),
              (0, a.jsxs)("div", {
                className: "relative z-10 flex items-center gap-2",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-xs font-semibold uppercase tracking-wide text-gray-600 group-hover:text-gray-700 transition-colors",
                    children: t,
                  }),
                  (0, a.jsx)("button", {
                    onClick: (e) => {
                      (e.stopPropagation(), p());
                    },
                    className:
                      "w-5 h-5 rounded-md bg-gray-100 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white text-gray-600 flex items-center justify-center cursor-pointer select-none transition-all duration-200 text-base font-bold hover:shadow-sm",
                    children: "-",
                  }),
                  (0, a.jsx)("input", {
                    type: "text",
                    value: n,
                    onChange: (e) => {
                      let t = e.target.value.trim();
                      "" === t ? i("") : i(t);
                    },
                    className:
                      "text-center bg-transparent border-none focus:outline-none text-sm font-bold text-gray-700 w-6",
                    min: "0",
                    style: {
                      width: "".concat(0.5 * m, "ch"),
                      minWidth: "1.5rem",
                    },
                  }),
                  (0, a.jsx)("button", {
                    onClick: (e) => {
                      (e.stopPropagation(), c());
                    },
                    className:
                      "w-5 h-5 rounded-md bg-gray-100 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white text-gray-600 flex items-center justify-center cursor-pointer select-none transition-all duration-200 text-base font-bold hover:shadow-sm",
                    children: "+",
                  }),
                ],
              }),
            ],
          });
        },
        ew = (0, Q.A)(
          (0, a.jsx)("path", {
            d: "M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81z",
          }),
          "ScreenRotationOutlined",
        ),
        eS = () =>
          (0, a.jsxs)("h1", {
            className: "flex items-center justify-center",
            children: [
              (0, a.jsx)("span", {
                className: "font-bold mr-2",
                children: "Please Rotate Your Device",
              }),
              (0, a.jsx)(ew, { fontSize: "small" }),
            ],
          });
      var eN = l(70015),
        eA = l(4722),
        ek = l(9665);
      let eC = () => {
        let e = (0, u.wA)(),
          {
            message: t,
            severity: l,
            duration: r,
          } = (0, u.d4)((e) => e.extraSlice.alert),
          [n, i] = (0, o.useState)(!1),
          [s, d] = (0, o.useState)(!1);
        return ((0, o.useEffect)(() => {
          d(!0);
        }, []),
        (0, o.useEffect)(() => {
          if (s)
            if (r > 0 && t) {
              i(!0);
              let t = setTimeout(() => {
                (i(!1), e((0, f.aV)()));
              }, r);
              return () => clearTimeout(t);
            } else i(!1);
        }, [r, t, e, s]),
        s)
          ? (0, a.jsx)(eA.A, {
              children: (0, a.jsx)(w.A, {
                sx: {
                  position: "fixed",
                  top: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1300,
                  width: "auto",
                  maxWidth: "90%",
                },
                children:
                  n &&
                  (0, a.jsx)(ek.A, {
                    variant: "filled",
                    severity: l,
                    children: t,
                  }),
              }),
            })
          : null;
      };
      var eM = l(76928),
        eT = l(23596),
        eP = l(95132);
      function ez(e) {
        let t,
          l,
          {
            totalPrice: r,
            ownerId: n,
            onCouponApplied: i,
            disabled: s = !1,
          } = e,
          [d, c] = (0, o.useState)(""),
          [u, p] = (0, o.useState)(!1),
          [m, x] = (0, o.useState)(null),
          [h, g] = (0, o.useState)(null),
          f = (0, o.useRef)(null);
        ((0, o.useEffect)(() => {
          if (m) {
            let e = setTimeout(() => x(null), 5e3);
            return () => clearTimeout(e);
          }
        }, [m]),
          (0, o.useEffect)(() => {
            if (h && r > 0) {
              let e = b(h.discountType, h.discountValue, r);
              if (e !== h.calculatedDiscount) {
                let t = { ...h, calculatedDiscount: e };
                (g(t), i(t));
              }
            }
          }, [r, h, i]));
        let b = (e, t, l) =>
            l <= 0 ? 0 : Math.min("percentage" === e ? (l * t) / 100 : t, l),
          y = (0, o.useCallback)(
            async (e) => {
              if (e.trim() && !(r <= 0)) {
                (p(!0), x(null));
                try {
                  let t = await fetch("/api/coupons/validate", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        code: e.trim(),
                        totalPrice: r,
                        ownerId: n,
                      }),
                    }),
                    l = await t.json();
                  if (!l.valid) {
                    (x(l.error || "Invalid coupon code"), g(null), i(null));
                    return;
                  }
                  let a = {
                    couponId: l.coupon.id,
                    code: l.coupon.code,
                    discountType: l.coupon.discountType,
                    discountValue: l.coupon.discountValue,
                    calculatedDiscount: l.discountAmount,
                  };
                  (g(a), i(a));
                } catch (e) {
                  (x("Failed to validate coupon"), g(null), i(null));
                } finally {
                  p(!1);
                }
              }
            },
            [r, n, i],
          );
        return (0, a.jsxs)("div", {
          className: "mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200",
          children: [
            (0, a.jsx)("div", {
              className: "text-sm font-medium text-gray-700 mb-2",
              children: "Have a coupon?",
            }),
            h
              ? (0, a.jsxs)("div", {
                  className:
                    "flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex-1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-mono font-bold text-green-700",
                              children: h.code,
                            }),
                            (0, a.jsxs)("span", {
                              className:
                                "text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full",
                              children: [
                                ((t = h.discountType),
                                (l = h.discountValue),
                                "percentage" === t
                                  ? "".concat(l, "%")
                                  : "₹".concat(l.toLocaleString())),
                                " OFF",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-sm text-green-600 mt-1",
                          children: [
                            "You save ",
                            "₹",
                            h.calculatedDiscount.toLocaleString(void 0, {
                              maximumFractionDigits: 2,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        (c(""), g(null), i(null), x(null));
                      },
                      className:
                        "text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 rounded hover:bg-red-50 transition-colors",
                      disabled: s,
                      children: "Remove",
                    }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, a.jsx)("input", {
                      type: "text",
                      value: d,
                      onChange: (e) => {
                        let t = e.target.value.toUpperCase();
                        if (
                          (c(t),
                          x(null),
                          f.current && clearTimeout(f.current),
                          !t.trim())
                        ) {
                          (g(null), i(null));
                          return;
                        }
                        f.current = setTimeout(() => {
                          y(t);
                        }, 500);
                      },
                      placeholder: "Enter coupon code",
                      className:
                        "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase",
                      disabled: s || u,
                      style: { textTransform: "uppercase" },
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        d.trim() && y(d);
                      },
                      disabled: s || u || !d.trim(),
                      className:
                        "px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                      children: u
                        ? (0, a.jsx)("span", {
                            className: "flex items-center gap-1",
                            children: (0, a.jsxs)("svg", {
                              className: "animate-spin h-4 w-4",
                              viewBox: "0 0 24 24",
                              children: [
                                (0, a.jsx)("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                  fill: "none",
                                }),
                                (0, a.jsx)("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                          })
                        : "Apply",
                    }),
                  ],
                }),
            m &&
              (0, a.jsx)("div", {
                className:
                  "mt-2 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg",
                children: m,
              }),
          ],
        });
      }
      let eI = [
          "panel",
          "material",
          "size",
          "technology",
          "accessories",
          "color",
        ],
        eO = (e) => {
          var t, r, n, i, s, d, p, m, x, h;
          let {
              marginBySeries: g,
              marginFallback: f,
              applyMargin: b,
              onCouponChange: y,
            } = e,
            v = (0, u.d4)((e) => e.cartData.cartData),
            j = (0, u.d4)((e) => e.cartData.totalPrice),
            w = (0, u.d4)((e) => e.cartData.quantity),
            { data: S } = (0, c.useSession)(),
            N = !!(null == S || null == (t = S.user) ? void 0 : t.parentUserId),
            { hasPremium: A } = (0, eM.Z)(),
            [k, C] = (0, o.useState)(0),
            [M, T] = (0, o.useState)(!1),
            [P, z] = (0, o.useState)(N),
            [I, O] = (0, o.useState)(N),
            [L, E] = (0, o.useState)(N),
            [D, R] = (0, o.useState)({}),
            [U, F] = (0, o.useState)(!1),
            [W, B] = (0, o.useState)(null),
            _ = !!(null == v || null == (r = v.panel) ? void 0 : r.noFrame),
            H = (0, o.useCallback)(
              (e) => {
                (B(e), y && y(e));
              },
              [y],
            );
          if (
            ((0, o.useEffect)(() => {
              var e;
              (null == S || null == (e = S.user) ? void 0 : e.id) &&
                fetch("/api/userSettings/".concat(S.user.id))
                  .then((e) =>
                    e.ok ? e.json() : Promise.reject(Error(e.statusText)),
                  )
                  .then((e) => {
                    var t, r, a, o, n, i, s;
                    C(null != (a = e.discountPct) ? a : 0);
                    let d =
                      (null == S || null == (t = S.user) ? void 0 : t.role) ===
                      "SuperAdmin";
                    T(!d && !!(null != (o = e.hidePrices) && o));
                    let c = !!N || !!(null != (n = e.hideBasePrice) && n),
                      u = !!N || !!(null != (i = e.hideLandingPrice) && i),
                      p = !!N || !!(null != (s = e.hidePurchaseCost) && s);
                    (z(!d && c),
                      O(!d && u),
                      E(!d && p),
                      e.marginFormulas &&
                        "object" == typeof e.marginFormulas &&
                        R(e.marginFormulas));
                    let m = !!(null == S || null == (r = S.user)
                        ? void 0
                        : r.isPremium),
                      x = e.freeIcons;
                    (Promise.resolve()
                      .then(l.bind(l, 97781))
                      .then((e) => {
                        let {
                          setPremiumStatus: t,
                          setFreeIcons: r,
                          recalculateTotalPrice: a,
                        } = e;
                        Promise.resolve()
                          .then(l.bind(l, 92927))
                          .then((e) => {
                            var l, o;
                            let { store: n } = e;
                            (n.dispatch(t(m)),
                              m
                                ? (n.dispatch(r(!0)),
                                  console.log(
                                    "\uD83D\uDEA8 EMERGENCY FIX: Premium user - forcing free icons in order summary",
                                  ))
                                : n.dispatch(r(x)),
                              n.dispatch(a()),
                              console.log(
                                "\uD83D\uDEA8 ORDER SUMMARY ICON FIX:",
                                {
                                  isPremium: m,
                                  appliedSetting: !!m || x,
                                  originalDbSetting: x,
                                  sessionUserEmail:
                                    null == S || null == (l = S.user)
                                      ? void 0
                                      : l.email,
                                  sessionIsPremium:
                                    null == S || null == (o = S.user)
                                      ? void 0
                                      : o.isPremium,
                                },
                              ));
                          });
                      }),
                      F(!0));
                  })
                  .catch((e) => {
                    F(!0);
                  });
            }, [null == S || null == (n = S.user) ? void 0 : n.id, N]),
            (0, o.useEffect)(() => {
              let e = (e) => {
                let t = e.detail;
                t &&
                  ("boolean" == typeof t.hidePrices && T(t.hidePrices),
                  "boolean" == typeof t.hideBasePrice && z(t.hideBasePrice),
                  "boolean" == typeof t.hideLandingPrice &&
                    O(t.hideLandingPrice),
                  "boolean" == typeof t.hidePurchaseCost &&
                    E(t.hidePurchaseCost));
              };
              return (
                window.addEventListener(eP.y, e),
                () => window.removeEventListener(eP.y, e)
              );
            }, []),
            !v)
          )
            return (0, a.jsx)("div", {
              className: "p-4 bg-white rounded-xl shadow-lg text-gray-800",
              children: (0, a.jsx)("p", { children: "Your cart is empty." }),
            });
          if (!U && (null == S || null == (i = S.user) ? void 0 : i.id))
            return (0, a.jsxs)("div", {
              className: "p-4 bg-white rounded-xl shadow-lg text-gray-800",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "inline-flex justify-between items-center text-gray-600 mb-4",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-xl font-bold",
                      children: "Order Summary",
                    }),
                    (0, a.jsxs)("span", {
                      className: "text-sm",
                      children: ["Qty: ", null != w ? w : 0],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "animate-pulse",
                  children: [
                    (0, a.jsx)("div", {
                      className: "h-4 bg-gray-200 rounded mb-2",
                    }),
                    (0, a.jsx)("div", {
                      className: "h-4 bg-gray-200 rounded mb-2",
                    }),
                    (0, a.jsx)("div", { className: "h-4 bg-gray-200 rounded" }),
                  ],
                }),
              ],
            });
          let G = {},
            Y = {};
          for (let e of [
            ...v.accessories,
            ...v.accessories1,
            ...v.accessories2,
          ]) {
            let t = G[(m = e.optionType)] || (G[m] = []),
              l = Y[(x = e.optionType)] || (Y[x] = new Set());
            for (let r of e.options) l.has(r.id) || (l.add(r.id), t.push(r));
          }
          let X = !!b,
            q =
              "string" ==
              typeof (null == v || null == (s = v.panel) ? void 0 : s.item)
                ? v.panel.item
                : null,
            V = X ? (0, eT.iZ)(q, g, f) : 0,
            Q = String.fromCharCode(8377),
            J = Number.isFinite(j) ? Number(j) : Number(null != j ? j : 0) || 0,
            Z = Number.isFinite(k) ? k : Number.parseFloat(String(k)) || 0,
            K = Number.isFinite(w) ? Number(w) : Number(null != w ? w : 0) || 0,
            $ = K > 0 ? K : 1,
            ee = () => (q && D[q] ? D[q] : D.default || void 0),
            et = (0, eT.UM)({
              listUnit: $ > 0 ? J / $ : 0,
              quantity: $,
              discountPct: Z,
              marginPct: V,
              marginEnabled: X && 0 !== V,
              formula: ee(),
            }),
            el = et.listTotal,
            er = et.landingTotal,
            ea = X && V > 0 ? (0, eT.XF)(er, V, ee()) : er,
            eo = ea - er,
            en =
              null != (h = null == W ? void 0 : W.calculatedDiscount) ? h : 0,
            ei = Math.max(0, ea - en),
            es = 0.18 * er,
            ed = er + es,
            ec = (e) =>
              "".concat(Q, " ").concat(
                Math.max(0, e).toLocaleString(void 0, {
                  maximumFractionDigits: 2,
                }),
              ),
            eu = !!A,
            ep = eu || N,
            em = N || !eu || M || P,
            ex = N || !eu || M || I,
            eh = M && !N,
            eg = N || L || P;
          return (0, a.jsxs)("div", {
            id: "order-summary-area",
            className:
              "flex flex-col gap-2 p-5 bg-white rounded-xl shadow-lg w-full max-w-md mx-auto xl:mx-0 mb-4 orderSummary-shadow",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "inline-flex justify-between items-center text-gray-600",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-xl font-bold",
                    children: "Order Summary",
                  }),
                  (0, a.jsxs)("span", {
                    className: "text-sm",
                    children: ["Qty: ", null != w ? w : 0],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex-grow",
                children: eI.map((e) => {
                  if ("accessories" === e) {
                    let e = Object.keys(G);
                    return 0 === e.length
                      ? null
                      : (0, a.jsxs)(
                          "div",
                          {
                            className: "mb-3",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs text-gray-500",
                                children: "Accessories",
                              }),
                              e.map((e) => {
                                let t = (G[e] || [])
                                  .map((e) => e.item)
                                  .join(" | ");
                                return (0, a.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex justify-between items-center text-sm mt-1",
                                    children: (0, a.jsxs)("span", {
                                      children: [
                                        (0, a.jsxs)("strong", {
                                          children: [e, ":"],
                                        }),
                                        " ",
                                        t,
                                      ],
                                    }),
                                  },
                                  e,
                                );
                              }),
                            ],
                          },
                          "accessories",
                        );
                  }
                  let t = v[e];
                  if (
                    void 0 === t ||
                    (Array.isArray(t) && 0 === t.length) ||
                    ("object" == typeof t &&
                      !Array.isArray(t) &&
                      0 === Object.keys(t).length)
                  )
                    return null;
                  let l = e.charAt(0).toUpperCase() + e.slice(1);
                  if (!Array.isArray(t))
                    return (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "flex justify-between items-center gap-2 text-sm mb-3",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-xs text-gray-500",
                            children: l,
                          }),
                          (0, a.jsx)("span", {
                            className: "font-medium",
                            children: t.item,
                          }),
                        ],
                      },
                      e,
                    );
                  let r =
                    "color" === e
                      ? t.filter((e) => !(_ && "Frame Color" === e.optionType))
                      : t;
                  return 0 === r.length
                    ? null
                    : (0, a.jsxs)(
                        "div",
                        {
                          className: "mb-3",
                          children: [
                            (0, a.jsx)("span", {
                              className: "text-xs text-gray-500",
                              children: l,
                            }),
                            r.map((t, l) => {
                              let r = t.options.map((e) => e.item).join(" | "),
                                o = t.options.length;
                              return (0, a.jsx)(
                                "div",
                                {
                                  className:
                                    "flex justify-between items-center text-sm mt-1",
                                  children: (0, a.jsxs)("span", {
                                    children: [
                                      (0, a.jsxs)("strong", {
                                        children: [t.optionType, ":"],
                                      }),
                                      "icons" === e
                                        ? " "
                                            .concat(o, " icon")
                                            .concat(o > 1 ? "s" : "")
                                        : " ".concat(r),
                                    ],
                                  }),
                                },
                                l,
                              );
                            }),
                          ],
                        },
                        e,
                      );
                }),
              }),
              (0, a.jsx)("div", { className: "border-t border-gray-300 my-3" }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  !em &&
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-sm text-gray-600",
                          children: "Unit Price",
                        }),
                        (0, a.jsx)("span", {
                          className: "font-medium text-gray-800",
                          children: ec(el),
                        }),
                      ],
                    }),
                  !ex &&
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)("span", {
                              className: "text-sm text-gray-600",
                              children: "B2B Price (excl. GST)",
                            }),
                            Z > 0 &&
                              (0, a.jsxs)("span", {
                                className:
                                  "text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full",
                                children: [Z, "% OFF"],
                              }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className: "font-medium text-gray-800",
                          children: ec(er),
                        }),
                      ],
                    }),
                  !ex &&
                    !eh &&
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-xs text-gray-500 pl-4",
                          children: "+ GST (18%)",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-sm text-gray-600",
                          children: ec(es),
                        }),
                      ],
                    }),
                  !ex &&
                    !eh &&
                    !L &&
                    ep &&
                    (0, a.jsxs)("div", {
                      className:
                        "flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "text-sm font-semibold text-blue-700 dark:text-blue-300",
                          children: "Purchase Cost",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "font-bold text-blue-700 dark:text-blue-300",
                          children: ec(ed),
                        }),
                      ],
                    }),
                ],
              }),
              ep &&
                X &&
                V > 0 &&
                !eh &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: "border-t border-gray-200 my-2",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-xs text-gray-500 font-medium mb-1",
                          children: "Price Calculation:",
                        }),
                        !eg &&
                          (0, a.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                              (0, a.jsxs)("span", {
                                className: "text-xs text-gray-500",
                                children: ["+ Your Margin (", V, "%)"],
                              }),
                              (0, a.jsx)("span", {
                                className: "text-sm text-gray-600",
                                children: ec(eo),
                              }),
                            ],
                          }),
                        W &&
                          en > 0 &&
                          (0, a.jsxs)("div", {
                            className:
                              "flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-xs text-purple-600 dark:text-purple-300",
                                    children: "- Coupon Discount",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono",
                                    children: W.code,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "text-sm font-semibold text-purple-600 dark:text-purple-300",
                                children: ["-", ec(en)],
                              }),
                            ],
                          }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex justify-between items-center bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "text-sm font-semibold text-green-700 dark:text-green-300",
                              children: "Total Price (excl. GST)",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "font-bold text-green-700 dark:text-green-300",
                              children: ec(ei),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex justify-between items-center bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-lg",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "text-sm font-medium text-orange-700 dark:text-orange-300",
                              children: "GST (18%)",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "font-semibold text-orange-700 dark:text-orange-300",
                              children: ec(0.18 * ei),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex justify-between items-center pt-3 mt-2 border-t-2 border-green-200 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 px-4 py-3 rounded-xl shadow-sm",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-col",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "text-lg font-bold text-gray-800 dark:text-gray-200",
                                  children: "Grand Total",
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "(incl. GST)",
                                }),
                              ],
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "font-bold text-2xl text-green-700 dark:text-green-300",
                              children: ec(1.18 * ei),
                            }),
                          ],
                        }),
                        !eg &&
                          (0, a.jsxs)("div", {
                            className:
                              "flex justify-between items-center bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded mt-2",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "text-sm font-semibold text-amber-700 dark:text-amber-300",
                                children: "Net Margin After GST",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "font-bold text-amber-700 dark:text-amber-300",
                                children: ec(1.18 * ei - ed),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              (!ep || !X || 0 === V) && !eh &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: "border-t border-gray-300 my-2",
                    }),
                    (0, a.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "text-sm font-semibold text-gray-700 mb-1",
                              children: "Price Breakdown:",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex justify-between items-center bg-gray-50 dark:bg-gray-800/20 px-3 py-2 rounded-lg",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "text-sm font-medium text-gray-700 dark:text-gray-300",
                                  children: "Base Price",
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "font-semibold text-gray-800 dark:text-gray-200",
                                  children: ec(er),
                                }),
                              ],
                            }),
                            W &&
                              en > 0 &&
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between items-center bg-purple-50 dark:bg-purple-900/20 px-3 py-2 rounded-lg",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-sm font-medium text-purple-700 dark:text-purple-300",
                                        children: "Coupon Discount",
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono",
                                        children: W.code,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("span", {
                                    className:
                                      "font-semibold text-purple-700 dark:text-purple-300",
                                    children: ["-", ec(en)],
                                  }),
                                ],
                              }),
                            W &&
                              en > 0 &&
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between items-center bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-sm font-medium text-green-700 dark:text-green-300",
                                    children: "Price After Discount",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "font-semibold text-green-700 dark:text-green-300",
                                    children: ec(ei),
                                  }),
                                ],
                              }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex justify-between items-center bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-lg",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "text-sm font-medium text-orange-700 dark:text-orange-300",
                                  children: "GST (18%)",
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "font-semibold text-orange-700 dark:text-orange-300",
                                  children: ec(0.18 * ei),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex justify-between items-center pt-3 mt-2 border-t-2 border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 px-4 py-3 rounded-xl shadow-sm",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "text-lg font-bold text-gray-800 dark:text-gray-200",
                                      children: "Grand Total",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "text-xs text-gray-500 dark:text-gray-400",
                                      children: "(incl. GST)",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("span", {
                                  className:
                                    "font-bold text-2xl text-blue-700 dark:text-blue-300",
                                  children: ec(1.18 * ei),
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              ep &&
                !eh &&
                (0, a.jsx)(ez, {
                  totalPrice: ea,
                  ownerId:
                    (null == S || null == (d = S.user)
                      ? void 0
                      : d.parentUserId) ||
                    (null == S || null == (p = S.user) ? void 0 : p.id),
                  onCouponApplied: H,
                  disabled: !U,
                }),
            ],
          });
        };
      var eL = l(18627),
        eE = l(68534),
        eD = l(36114),
        eR = l(18560),
        eU = l(54492),
        eF = l(86220),
        eW = l(99927),
        eB = l(78449),
        e_ = l(71977);
      let eH = (0, l(19946).A)("feather", [
          [
            "path",
            {
              d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",
              key: "18jl4k",
            },
          ],
          ["path", { d: "M16 8 2 22", key: "vp34q" }],
          ["path", { d: "M17.5 15H9", key: "1oz8nu" }],
        ]),
        eG = (0, Q.A)(
          (0, a.jsx)("path", {
            d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
          }),
          "Check",
        );
      var eY = l(69242);
      let eX = () => {
        let e = (0, u.wA)(),
          t = (0, u.d4)((e) => e.cartData.cartData.note || ""),
          [l, r] = (0, o.useState)(!1),
          [n, i] = (0, o.useState)(t),
          s = () => {
            (i(t), r(!1));
          };
        return (0, a.jsxs)(w.A, {
          sx: { display: "inline-block", mx: 1 },
          children: [
            (0, a.jsx)(eE.A, {
              id: "tour-add-note",
              startIcon: (0, a.jsx)(eH, { size: 16 }),
              variant: "outlined",
              size: "medium",
              onClick: () => r(!0),
              sx: {
                textTransform: "none",
                position: "relative",
                borderColor: "grey.300",
                color: "text.primary",
                px: 3,
                py: 1,
                fontWeight: 500,
                boxShadow: "none",
                borderRadius: "12px",
                fontSize: "0.875rem",
                overflow: "hidden",
                background: "#fff",
                transition: "all 0.3s",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  zIndex: 0,
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: "1px",
                  background: "#fff",
                  borderRadius: "11px",
                  zIndex: 1,
                },
                "& .MuiButton-startIcon": { position: "relative", zIndex: 2 },
                "& .MuiButton-endIcon": { position: "relative", zIndex: 2 },
                "&:hover": {
                  borderColor: "transparent",
                  "&::before": { opacity: 1 },
                },
              },
              children: (0, a.jsx)("span", {
                style: { position: "relative", zIndex: 2 },
                children: t ? "Edit Order Note" : "Add Order Note",
              }),
            }),
            (0, a.jsxs)(eD.A, {
              open: l,
              onClose: s,
              TransitionComponent: eR.A,
              TransitionProps: { timeout: 400 },
              fullWidth: !0,
              maxWidth: "xs",
              PaperProps: {
                sx: {
                  bgcolor: "#121212",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.8)",
                  overflow: "hidden",
                },
              },
              children: [
                (0, a.jsxs)(eU.A, {
                  sx: {
                    bgcolor: "#000",
                    color: "#fff",
                    px: 2,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "4px solid transparent",
                    borderImageSlice: 1,
                    animation: "rainbowBorder 5s linear infinite",
                    "@keyframes rainbowBorder": {
                      "0%": {
                        borderImageSource:
                          "linear-gradient(90deg, red,orange,yellow,green,blue,indigo,violet)",
                      },
                      "50%": {
                        borderImageSource:
                          "linear-gradient(90deg, violet,blue,green,yellow,orange,red)",
                      },
                      "100%": {
                        borderImageSource:
                          "linear-gradient(90deg, red,orange,yellow,green,blue,indigo,violet)",
                      },
                    },
                  },
                  children: [
                    (0, a.jsxs)(w.A, {
                      sx: { display: "flex", alignItems: "center" },
                      children: [
                        (0, a.jsx)(eH, { size: 16, style: { marginRight: 8 } }),
                        (0, a.jsx)(ep.A, {
                          variant: "subtitle1",
                          children: t
                            ? "Edit Your Order Note"
                            : "Add an Order Note",
                        }),
                      ],
                    }),
                    (0, a.jsx)(eF.A, {
                      onClick: s,
                      sx: { color: "#fff", p: 0.5 },
                      children: (0, a.jsx)(eY.A, { fontSize: "small" }),
                    }),
                  ],
                }),
                (0, a.jsx)(eW.A, {
                  sx: { pt: 6, px: 3, pb: 2, bgcolor: "#1e1e1e" },
                  children: (0, a.jsx)(eB.A, {
                    autoFocus: !0,
                    fullWidth: !0,
                    multiline: !0,
                    rows: 4,
                    variant: "outlined",
                    placeholder: "Type your note…",
                    value: n,
                    onChange: (e) => i(e.target.value),
                    size: "small",
                    sx: {
                      mt: 2,
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#2c2c2c",
                        "& fieldset": { borderColor: "#444" },
                        "&:hover fieldset": { borderColor: "#666" },
                        "&.Mui-focused fieldset": { borderColor: "#888" },
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "#fff",
                        p: 2,
                        lineHeight: 1.5,
                        "&::placeholder": { color: "#888" },
                      },
                    },
                  }),
                }),
                (0, a.jsxs)(e_.A, {
                  sx: { px: 3, pb: 2, pt: 1, bgcolor: "#121212" },
                  children: [
                    (0, a.jsx)(eE.A, {
                      onClick: s,
                      size: "small",
                      sx: {
                        textTransform: "none",
                        color: "#bbb",
                        fontWeight: 500,
                        "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
                      },
                      children: "Cancel",
                    }),
                    (0, a.jsx)(eE.A, {
                      onClick: () => {
                        (e((0, h.setNote)(n)), r(!1));
                      },
                      startIcon: (0, a.jsx)(eG, {}),
                      variant: "contained",
                      size: "small",
                      sx: {
                        textTransform: "none",
                        bgcolor: "#2563eb",
                        fontWeight: 500,
                        boxShadow: "none",
                        px: 2.5,
                        transition: "background-color 0.2s",
                        "&:hover": { bgcolor: "#1d4ed8", boxShadow: "none" },
                      },
                      children: "Save",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var eq = l(76391),
        eV = l(9794),
        eQ = l(579);
      function eJ(e) {
        return (0, M.Ay)("MuiRadioGroup", e);
      }
      (0, C.A)("MuiRadioGroup", ["root", "row", "error"]);
      var eZ = l(36863),
        eK = l(49800);
      let e$ = o.createContext(void 0);
      var e0 = l(74739);
      let e1 = (e) => {
          let { classes: t, row: l, error: r } = e;
          return (0, N.A)({ root: ["root", l && "row", r && "error"] }, eJ, t);
        },
        e2 = o.forwardRef(function (e, t) {
          let {
              actions: l,
              children: r,
              className: n,
              defaultValue: i,
              name: s,
              onChange: d,
              value: c,
              ...u
            } = e,
            p = o.useRef(null),
            m = e1(e),
            [x, h] = (0, eK.A)({
              controlled: c,
              default: i,
              name: "RadioGroup",
            });
          o.useImperativeHandle(
            l,
            () => ({
              focus: () => {
                let e = p.current.querySelector("input:not(:disabled):checked");
                (e || (e = p.current.querySelector("input:not(:disabled)")),
                  e && e.focus());
              },
            }),
            [],
          );
          let g = (0, eZ.A)(t, p),
            f = (0, e0.A)(s),
            b = o.useMemo(
              () => ({
                name: f,
                onChange(e) {
                  (h(e.target.value), d && d(e, e.target.value));
                },
                value: x,
              }),
              [f, d, h, x],
            );
          return (0, a.jsx)(e$.Provider, {
            value: b,
            children: (0, a.jsx)(eQ.A, {
              role: "radiogroup",
              ref: g,
              className: (0, S.A)(m.root, n),
              ...u,
              children: r,
            }),
          });
        });
      var e5 = l(47516),
        e4 = l(16742);
      let e3 = (0, Q.A)(
          (0, a.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
          }),
          "RadioButtonUnchecked",
        ),
        e6 = (0, Q.A)(
          (0, a.jsx)("path", {
            d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",
          }),
          "RadioButtonChecked",
        );
      var e8 = l(36437);
      let e7 = (0, A.Ay)("span", {
          name: "MuiRadioButtonIcon",
          shouldForwardProp: e8.A,
        })({ position: "relative", display: "flex" }),
        e9 = (0, A.Ay)(e3, { name: "MuiRadioButtonIcon" })({
          transform: "scale(1)",
        }),
        te = (0, A.Ay)(e6, { name: "MuiRadioButtonIcon" })(
          (0, z.A)((e) => {
            let { theme: t } = e;
            return {
              left: 0,
              position: "absolute",
              transform: "scale(0)",
              transition: t.transitions.create("transform", {
                easing: t.transitions.easing.easeIn,
                duration: t.transitions.duration.shortest,
              }),
              variants: [
                {
                  props: { checked: !0 },
                  style: {
                    transform: "scale(1)",
                    transition: t.transitions.create("transform", {
                      easing: t.transitions.easing.easeOut,
                      duration: t.transitions.duration.shortest,
                    }),
                  },
                },
              ],
            };
          }),
        ),
        tt = function (e) {
          let { checked: t = !1, classes: l = {}, fontSize: r } = e,
            o = { ...e, checked: t };
          return (0, a.jsxs)(e7, {
            className: l.root,
            ownerState: o,
            children: [
              (0, a.jsx)(e9, {
                fontSize: r,
                className: l.background,
                ownerState: o,
              }),
              (0, a.jsx)(te, { fontSize: r, className: l.dot, ownerState: o }),
            ],
          });
        },
        tl = l(7830).A;
      var tr = l(27011);
      function ta(e) {
        return (0, M.Ay)("MuiRadio", e);
      }
      let to = (0, C.A)("MuiRadio", [
        "root",
        "checked",
        "disabled",
        "colorPrimary",
        "colorSecondary",
        "sizeSmall",
      ]);
      var tn = l(98963);
      let ti = (e) => {
          let { classes: t, color: l, size: r } = e,
            a = {
              root: [
                "root",
                "color".concat((0, P.A)(l)),
                "medium" !== r && "size".concat((0, P.A)(r)),
              ],
            };
          return { ...t, ...(0, N.A)(a, ta, t) };
        },
        ts = (0, A.Ay)(e4.A, {
          shouldForwardProp: (e) => (0, e8.A)(e) || "classes" === e,
          name: "MuiRadio",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: l } = e;
            return [
              t.root,
              "medium" !== l.size && t["size".concat((0, P.A)(l.size))],
              t["color".concat((0, P.A)(l.color))],
            ];
          },
        })(
          (0, z.A)((e) => {
            let { theme: t } = e;
            return {
              color: (t.vars || t).palette.text.secondary,
              ["&.".concat(to.disabled)]: {
                color: (t.vars || t).palette.action.disabled,
              },
              variants: [
                {
                  props: { color: "default", disabled: !1, disableRipple: !1 },
                  style: {
                    "&:hover": {
                      backgroundColor: t.alpha(
                        (t.vars || t).palette.action.active,
                        (t.vars || t).palette.action.hoverOpacity,
                      ),
                    },
                  },
                },
                ...Object.entries(t.palette)
                  .filter((0, tn.A)())
                  .map((e) => {
                    let [l] = e;
                    return {
                      props: { color: l, disabled: !1, disableRipple: !1 },
                      style: {
                        "&:hover": {
                          backgroundColor: t.alpha(
                            (t.vars || t).palette[l].main,
                            (t.vars || t).palette.action.hoverOpacity,
                          ),
                        },
                      },
                    };
                  }),
                ...Object.entries(t.palette)
                  .filter((0, tn.A)())
                  .map((e) => {
                    let [l] = e;
                    return {
                      props: { color: l, disabled: !1 },
                      style: {
                        ["&.".concat(to.checked)]: {
                          color: (t.vars || t).palette[l].main,
                        },
                      },
                    };
                  }),
                {
                  props: { disableRipple: !1 },
                  style: {
                    "&:hover": {
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  },
                },
              ],
            };
          }),
        ),
        td = (0, a.jsx)(tt, { checked: !0 }),
        tc = (0, a.jsx)(tt, {}),
        tu = o.forwardRef(function (e, t) {
          var l, r, n, i, s;
          let d = (0, k.b)({ props: e, name: "MuiRadio" }),
            {
              checked: c,
              checkedIcon: u = td,
              color: p = "primary",
              icon: m = tc,
              name: x,
              onChange: h,
              size: g = "medium",
              className: f,
              disabled: b,
              disableRipple: y = !1,
              slots: v = {},
              slotProps: j = {},
              inputProps: w,
              ...N
            } = d,
            A = (0, tr.A)(),
            C = b;
          (A && void 0 === C && (C = A.disabled), null != C || (C = !1));
          let M = { ...d, disabled: C, disableRipple: y, color: p, size: g },
            T = ti(M),
            P = o.useContext(e$),
            z = c,
            I = tl(h, P && P.onChange),
            O = x;
          P &&
            (void 0 === z &&
              ((i = P.value),
              (z =
                "object" == typeof (s = d.value) && null !== s
                  ? i === s
                  : String(i) === String(s))),
            void 0 === O && (O = P.name));
          let L = null != (l = j.input) ? l : w,
            [E, D] = (0, eo.A)("root", {
              ref: t,
              elementType: ts,
              className: (0, S.A)(T.root, f),
              shouldForwardComponentProp: !0,
              externalForwardedProps: { slots: v, slotProps: j, ...N },
              getSlotProps: (e) => ({
                ...e,
                onChange: function (t) {
                  for (
                    var l,
                      r = arguments.length,
                      a = Array(r > 1 ? r - 1 : 0),
                      o = 1;
                    o < r;
                    o++
                  )
                    a[o - 1] = arguments[o];
                  (null == (l = e.onChange) || l.call(e, t, ...a), I(t, ...a));
                },
              }),
              ownerState: M,
              additionalProps: {
                type: "radio",
                icon: o.cloneElement(m, {
                  fontSize: null != (r = m.props.fontSize) ? r : g,
                }),
                checkedIcon: o.cloneElement(u, {
                  fontSize: null != (n = u.props.fontSize) ? n : g,
                }),
                disabled: C,
                name: O,
                checked: z,
                slots: v,
                slotProps: { input: "function" == typeof L ? L(M) : L },
              },
            });
          return (0, a.jsx)(E, { ...D, classes: T });
        });
      function tp(e) {
        let { open: t, onClose: l, onConfirm: r } = e,
          [n, i] = (0, o.useState)([]),
          [s, d] = (0, o.useState)(""),
          [c, u] = (0, o.useState)(!1),
          [p, m] = (0, o.useState)(""),
          [x, h] = (0, o.useState)({
            id: "",
            name: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            pin: "",
            country: "",
          }),
          g = async (e) => {
            try {
              await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  shipping_address_line1: e.line1,
                  shipping_address_line2: e.line2,
                  shipping_city: e.city,
                  shipping_state: e.state,
                  shipping_pin_code: e.pin,
                  shipping_country: e.country,
                }),
              });
            } catch (e) {}
          };
        return (
          (0, o.useEffect)(() => {
            t && (e(), m(""));
            async function e() {
              let e = localStorage.getItem("shippingAddresses"),
                t = [];
              e && (t = JSON.parse(e));
              try {
                let e = await fetch("/api/profile");
                if (e.ok) {
                  let l = await e.json();
                  if (l.shipping_address_line1) {
                    let e = {
                      id: "profile",
                      name: "Default",
                      line1: l.shipping_address_line1 || "",
                      line2: l.shipping_address_line2 || "",
                      city: l.shipping_city || "",
                      state: l.shipping_state || "",
                      pin: l.shipping_pin_code || "",
                      country: l.shipping_country || "",
                    };
                    t.find((e) => "profile" === e.id) || t.unshift(e);
                  }
                }
              } catch (e) {}
              (i(t), t[0] && d(t[0].id));
            }
          }, [t]),
          (0, a.jsx)(eD.A, {
            open: t,
            onClose: l,
            children: (0, a.jsx)(eW.A, {
              children: (0, a.jsxs)(w.A, {
                display: "flex",
                flexDirection: "column",
                gap: 2,
                children: [
                  (0, a.jsx)(eB.A, {
                    label: "Order Name",
                    value: p,
                    onChange: (e) => m(e.target.value),
                    fullWidth: !0,
                    size: "small",
                  }),
                  (0, a.jsx)(e2, {
                    value: s,
                    onChange: (e) => d(e.target.value),
                    children: n.map((e) =>
                      (0, a.jsx)(
                        e5.A,
                        {
                          value: e.id,
                          control: (0, a.jsx)(tu, {}),
                          sx: { alignItems: "flex-start", m: 0 },
                          label: (0, a.jsxs)(w.A, {
                            border: 1,
                            borderColor: "grey.300",
                            borderRadius: 2,
                            p: 1.5,
                            width: "100%",
                            children: [
                              (0, a.jsx)(ep.A, {
                                fontWeight: "bold",
                                children: e.name,
                              }),
                              (0, a.jsx)(ep.A, {
                                variant: "body2",
                                children: e.line1,
                              }),
                              e.line2 &&
                                (0, a.jsx)(ep.A, {
                                  variant: "body2",
                                  children: e.line2,
                                }),
                              (0, a.jsxs)(ep.A, {
                                variant: "body2",
                                children: [e.city, ", ", e.state, " ", e.pin],
                              }),
                              (0, a.jsx)(ep.A, {
                                variant: "body2",
                                children: e.country,
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                  c &&
                    (0, a.jsxs)(w.A, {
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      children: [
                        (0, a.jsx)(eB.A, {
                          label: "Name",
                          size: "small",
                          value: x.name,
                          onChange: (e) => h({ ...x, name: e.target.value }),
                        }),
                        (0, a.jsx)(eB.A, {
                          label: "Line 1",
                          size: "small",
                          value: x.line1,
                          onChange: (e) => h({ ...x, line1: e.target.value }),
                        }),
                        (0, a.jsx)(eB.A, {
                          label: "Line 2",
                          size: "small",
                          value: x.line2,
                          onChange: (e) => h({ ...x, line2: e.target.value }),
                        }),
                        (0, a.jsx)(eB.A, {
                          label: "City",
                          size: "small",
                          value: x.city,
                          onChange: (e) => h({ ...x, city: e.target.value }),
                        }),
                        (0, a.jsx)(eB.A, {
                          label: "State",
                          size: "small",
                          value: x.state,
                          onChange: (e) => h({ ...x, state: e.target.value }),
                        }),
                        (0, a.jsx)(eB.A, {
                          label: "PIN",
                          size: "small",
                          value: x.pin,
                          onChange: (e) => h({ ...x, pin: e.target.value }),
                        }),
                        (0, a.jsx)(eB.A, {
                          label: "Country",
                          size: "small",
                          value: x.country,
                          onChange: (e) => h({ ...x, country: e.target.value }),
                        }),
                        (0, a.jsxs)(w.A, {
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 1,
                          children: [
                            (0, a.jsx)(eE.A, {
                              variant: "contained",
                              onClick: () => {
                                let e = [...n, x];
                                (i(e),
                                  localStorage.setItem(
                                    "shippingAddresses",
                                    JSON.stringify(e),
                                  ),
                                  g(x),
                                  d(x.id),
                                  u(!1));
                              },
                              children: "Save",
                            }),
                            (0, a.jsx)(eE.A, {
                              onClick: () => u(!1),
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  !c &&
                    (0, a.jsx)(eE.A, {
                      variant: "outlined",
                      onClick: () => {
                        (h({
                          id: Date.now().toString(),
                          name: "",
                          line1: "",
                          line2: "",
                          city: "",
                          state: "",
                          pin: "",
                          country: "",
                        }),
                          u(!0));
                      },
                      children: "Add New Address",
                    }),
                  (0, a.jsxs)(w.A, {
                    mt: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2,
                    children: [
                      (0, a.jsx)(eE.A, {
                        variant: "contained",
                        onClick: () => {
                          let e = n.find((e) => e.id === s);
                          e && (g(e), r(e, p), m(""));
                        },
                        disabled: !s,
                        children: "Confirm",
                      }),
                      (0, a.jsx)(eE.A, {
                        variant: "outlined",
                        onClick: l,
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      var tm = l(14962),
        tx = l(18407),
        th = l(71803),
        tg = l(41101),
        tf = l(18558),
        tb = l(21136),
        ty = l(335),
        tv = l(16324),
        tj = l(4420),
        tw = l(53554),
        tS = l(95576);
      let tN = (e) => {
          if (!e) return null;
          let t = new Date(e);
          return Number.isNaN(t.getTime()) ? null : t.toLocaleString();
        },
        tA = function () {
          var e, t;
          let l = (0, tv.A)(),
            {
              notifications: r,
              acknowledge: n,
              hideBannerTemporarily: i,
              isBannerHidden: s,
            } = (0, tw.E)(),
            { data: d } = (0, c.useSession)(),
            u =
              (null == d || null == (e = d.user) ? void 0 : e.role) ===
              "SuperAdmin",
            [p, m] = (0, o.useState)(!1),
            [x, h] = (0, o.useState)(null),
            g = (0, o.useMemo)(() => {
              var e;
              return null !=
                (e = r
                  .filter((e) => e.shouldDisplayBanner && !s(e.id))
                  .sort((e, t) => {
                    var l, r, a, o;
                    let n = new Date(
                      null != (r = null != (l = e.startAt) ? l : e.createdAt)
                        ? r
                        : 0,
                    ).getTime();
                    return (
                      new Date(
                        null != (o = null != (a = t.startAt) ? a : t.createdAt)
                          ? o
                          : 0,
                      ).getTime() - n
                    );
                  })[0])
                ? e
                : null;
            }, [r, s]),
            f = (0, o.useMemo)(() => {
              var e;
              return null != (e = r.find((e) => e.id === x)) ? e : null;
            }, [r, x]),
            b = (0, o.useMemo)(() => {
              if (!g) return null;
              let e = tN(g.startAt),
                t = tN(g.endAt);
              return e && t
                ? "".concat(e, " — ").concat(t)
                : e
                  ? "Starts ".concat(e)
                  : t
                    ? "Until ".concat(t)
                    : null;
            }, [g]),
            y = (0, o.useMemo)(() => {
              if (!g) return null;
              if ("all" === g.audienceMode) return "All users";
              if ("roles" === g.audienceMode)
                return g.roles.length
                  ? "Roles: ".concat(g.roles.join(", "))
                  : "Role-specific";
              if ("users" === g.audienceMode)
                return ""
                  .concat(g.userIds.length, " direct recipient")
                  .concat(1 === g.userIds.length ? "" : "s");
              let e = [];
              return (
                g.roles.length && e.push("Roles: ".concat(g.roles.join(", "))),
                g.userIds.length &&
                  e.push(
                    ""
                      .concat(g.userIds.length, " recipient")
                      .concat(1 === g.userIds.length ? "" : "s"),
                  ),
                e.length ? e.join(" • ") : "Targeted audience"
              );
            }, [g]);
          return g
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(tm.A, {
                    in: !0,
                    children: (0, a.jsxs)(tx.A, {
                      elevation: 0,
                      className: "mx-4 mt-4",
                      sx: {
                        borderRadius: 4,
                        position: "relative",
                        overflow: "hidden",
                        px: { xs: 2.5, sm: 4 },
                        py: { xs: 2.5, sm: 3 },
                        background: "linear-gradient(135deg, "
                          .concat(
                            (0, tj.X4)(
                              l.palette.primary.main,
                              "dark" === l.palette.mode ? 0.35 : 0.25,
                            ),
                            ", ",
                          )
                          .concat(
                            (0, tj.X4)(l.palette.background.paper, 0.9),
                            ")",
                          ),
                        border: "1px solid ".concat(
                          (0, tj.X4)(l.palette.primary.main, 0.2),
                        ),
                        boxShadow: "0 20px 45px ".concat(
                          (0, tj.X4)(l.palette.primary.main, 0.18),
                        ),
                        backdropFilter: "blur(16px)",
                      },
                      children: [
                        (0, a.jsx)(w.A, {
                          sx: {
                            position: "absolute",
                            inset: 0,
                            opacity: 0.22,
                            background:
                              "radial-gradient(circle at top left, ".concat(
                                (0, tj.X4)(l.palette.primary.light, 0.5),
                                ", transparent 55%)",
                              ),
                          },
                        }),
                        (0, a.jsx)(th.A, {
                          spacing: 2.5,
                          sx: { position: "relative" },
                          children: (0, a.jsxs)(th.A, {
                            direction: { xs: "column", md: "row" },
                            spacing: 3,
                            alignItems: { xs: "flex-start", md: "center" },
                            children: [
                              (0, a.jsxs)(th.A, {
                                direction: "row",
                                spacing: 2.5,
                                sx: { flexGrow: 1 },
                                children: [
                                  (0, a.jsx)(w.A, {
                                    sx: {
                                      flexShrink: 0,
                                      width: 54,
                                      height: 54,
                                      borderRadius: "50%",
                                      background: "linear-gradient(135deg, "
                                        .concat(
                                          (0, tj.X4)(
                                            l.palette.primary.main,
                                            0.28,
                                          ),
                                          ", ",
                                        )
                                        .concat(
                                          (0, tj.X4)(
                                            l.palette.secondary.main,
                                            0.24,
                                          ),
                                          ")",
                                        ),
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      boxShadow: "0 14px 30px ".concat(
                                        (0, tj.X4)(
                                          l.palette.primary.main,
                                          0.28,
                                        ),
                                      ),
                                      color: l.palette.primary.contrastText,
                                    },
                                    children: (0, a.jsx)(tb.A, {}),
                                  }),
                                  (0, a.jsxs)(th.A, {
                                    spacing: 1,
                                    sx: { flexGrow: 1 },
                                    children: [
                                      (0, a.jsxs)(th.A, {
                                        direction: "row",
                                        spacing: 1.5,
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        rowGap: 1,
                                        children: [
                                          (0, a.jsx)(ep.A, {
                                            variant: "overline",
                                            sx: {
                                              letterSpacing: 2,
                                              textTransform: "uppercase",
                                              fontWeight: 700,
                                              color: (0, tj.X4)(
                                                l.palette.text.primary,
                                                0.72,
                                              ),
                                            },
                                            children: "Latest update",
                                          }),
                                          u &&
                                            (0, a.jsx)(tg.A, {
                                              label: g.displayMode.replaceAll(
                                                "_",
                                                " ",
                                              ),
                                              size: "small",
                                              sx: {
                                                backgroundColor: (0, tj.X4)(
                                                  l.palette.background.paper,
                                                  0.85,
                                                ),
                                                fontWeight: 600,
                                                textTransform: "capitalize",
                                              },
                                            }),
                                          u &&
                                            b &&
                                            (0, a.jsx)(tg.A, {
                                              label: b,
                                              size: "small",
                                              icon: (0, a.jsx)(ty.A, {
                                                sx: { fontSize: 18 },
                                              }),
                                              sx: {
                                                backgroundColor: (0, tj.X4)(
                                                  l.palette.background.paper,
                                                  0.8,
                                                ),
                                                maxWidth: {
                                                  xs: "100%",
                                                  md: 280,
                                                },
                                                "& .MuiChip-label": {
                                                  whiteSpace: "nowrap",
                                                  overflow: "hidden",
                                                  textOverflow: "ellipsis",
                                                },
                                              },
                                            }),
                                          u &&
                                            y &&
                                            (0, a.jsx)(tg.A, {
                                              label: y,
                                              size: "small",
                                              icon: (0, a.jsx)(tf.A, {
                                                sx: { fontSize: 18 },
                                              }),
                                              sx: {
                                                backgroundColor: (0, tj.X4)(
                                                  l.palette.background.paper,
                                                  0.8,
                                                ),
                                                maxWidth: {
                                                  xs: "100%",
                                                  md: 280,
                                                },
                                                "& .MuiChip-label": {
                                                  whiteSpace: "nowrap",
                                                  overflow: "hidden",
                                                  textOverflow: "ellipsis",
                                                },
                                              },
                                            }),
                                        ],
                                      }),
                                      (0, a.jsx)(ep.A, {
                                        variant: "h6",
                                        sx: { fontWeight: 700 },
                                        children: g.title || "Announcement",
                                      }),
                                      (0, a.jsx)(ep.A, {
                                        variant: "body1",
                                        sx: {
                                          color: (0, tj.X4)(
                                            l.palette.text.primary,
                                            0.85,
                                          ),
                                          whiteSpace: "pre-line",
                                        },
                                        children:
                                          g.message.length > 280
                                            ? "".concat(
                                                g.message.slice(0, 280),
                                                "…",
                                              )
                                            : g.message,
                                      }),
                                      g.imageUrl &&
                                        (0, a.jsx)(w.A, {
                                          sx: {
                                            mt: 1,
                                            borderRadius: 3,
                                            overflow: "hidden",
                                            border: "1px solid ".concat(
                                              (0, tj.X4)(
                                                l.palette.primary.main,
                                                0.15,
                                              ),
                                            ),
                                            maxWidth: { xs: "100%", sm: 260 },
                                            boxShadow: "0 12px 28px ".concat(
                                              (0, tj.X4)(
                                                l.palette.primary.main,
                                                0.18,
                                              ),
                                            ),
                                          },
                                          children: (0, a.jsx)("img", {
                                            src: g.imageUrl,
                                            alt:
                                              null != (t = g.title)
                                                ? t
                                                : "Notification visual",
                                            style: {
                                              display: "block",
                                              width: "100%",
                                            },
                                            onError: (e) => {
                                              e.currentTarget.style.display =
                                                "none";
                                            },
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(th.A, {
                                direction: { xs: "row", md: "column" },
                                spacing: 1.5,
                                alignItems: { xs: "center", md: "flex-end" },
                                justifyContent: "flex-end",
                                sx: { width: { xs: "100%", md: "auto" } },
                                children: [
                                  (0, a.jsx)(eE.A, {
                                    variant: "contained",
                                    color: "primary",
                                    onClick: () => {
                                      g && (h(g.id), m(!0), n(g.id, "view"));
                                    },
                                    sx: {
                                      px: 3,
                                      borderRadius: 9999,
                                      boxShadow: "0 16px 32px ".concat(
                                        (0, tj.X4)(
                                          l.palette.primary.main,
                                          0.35,
                                        ),
                                      ),
                                    },
                                    children: "View details",
                                  }),
                                  (0, a.jsx)(eF.A, {
                                    "aria-label": "Dismiss notification",
                                    onClick: () => {
                                      g &&
                                        (i(g),
                                        h((e) => (e === g.id ? null : e)),
                                        n(g.id, "dismiss"));
                                    },
                                    sx: {
                                      backgroundColor: (0, tj.X4)(
                                        l.palette.background.paper,
                                        0.75,
                                      ),
                                      "&:hover": {
                                        backgroundColor: (0, tj.X4)(
                                          l.palette.background.paper,
                                          0.95,
                                        ),
                                      },
                                    },
                                    children: (0, a.jsx)(eY.A, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(tS.w, {
                    open: p,
                    notification: f,
                    onClose: () => m(!1),
                  }),
                ],
              })
            : null;
        },
        tk = /[-\w]{15,}/;
      function tC(e) {
        let {
            className: t,
            url: l,
            scale: r = 100,
            offsetX: n = 0,
            offsetY: i = 0,
            objectFit: s = "contain",
            onEnded: d,
          } = e,
          c = (0, o.useMemo)(
            () =>
              (function (e) {
                if (!e) return !1;
                let t = String(e).trim();
                return !!t && /\.gif($|\?)/i.test(t);
              })(l),
            [l],
          ),
          [u, p] = (0, o.useState)(c);
        (0, o.useEffect)(() => {
          p(c);
        }, [l, c]);
        let m = Math.max(0.1, r / 100),
          x = (0, o.useMemo)(() => {
            let e = "calc(-50% + ".concat(n, "px)"),
              t = "calc(-50% + ".concat(i, "px)");
            return "translate("
              .concat(e, ", ")
              .concat(t, ") scale(")
              .concat(m, ")");
          }, [n, i, m]);
        return (0, a.jsx)("div", {
          className: t,
          style: {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: 8,
          },
          children: u
            ? (0, a.jsx)("div", {
                style: {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "100%",
                  height: "100%",
                  transform: x,
                },
                children: (0, a.jsx)("img", {
                  src: l,
                  alt: "Offer media",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: s,
                    objectPosition: "center",
                    display: "block",
                  },
                  onError: () => {
                    p(!1);
                  },
                }),
              })
            : (0, a.jsx)("div", {
                style: {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "100%",
                  height: "100%",
                  transform: x,
                },
                children: (0, a.jsx)("video", {
                  src: l,
                  autoPlay: !0,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  onEnded: () => (null == d ? void 0 : d()),
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: s,
                    objectPosition: "center",
                    display: "block",
                  },
                }),
              }),
        });
      }
      var tM = l(49880),
        tT = l(27088),
        tP = l(16675),
        tz = l(76380);
      let tI = (0, l(55028).default)(() => l.e(7528).then(l.bind(l, 7528)), {
          loadableGenerated: { webpack: () => [7528] },
          ssr: !1,
        }),
        tO = {
          switch: "#6366f1",
          twoway: "#8b5cf6",
          socket: "#22c55e",
          fan: "#0ea5e9",
          other: "#a855f7",
        },
        tL = [
          { cap: 2, label: "2 Module", id: "7" },
          { cap: 3, label: "3 Module", id: "30" },
          { cap: 4, label: "4 Module", id: "8" },
          { cap: 6, label: "6 Module", id: "9" },
          { cap: 8, label: "8 Module", id: "10" },
          { cap: 12, label: "12 Module", id: "11" },
          { cap: 16, label: "16 Module", id: "12" },
          { cap: 18, label: "18 Module", id: "18" },
        ],
        tE = (e) =>
          "Touch Panel" === e ? tL : tL.filter((e) => "18" !== e.id);
      function tD(e, t) {
        let l = tE(t);
        for (let t of l)
          if (e <= t.cap) return { sizeLabel: t.label, sizeId: t.id };
        let r = l[l.length - 1];
        return { sizeLabel: r.label, sizeId: r.id };
      }
      function tR() {
        let e = (0, u.wA)();
        (0, u.d4)((e) => e.selectionData.selectionData);
        let [t, l] = (0, o.useState)("auto"),
          [r, n] = (0, o.useState)("Edge"),
          [i, s] = (0, o.useState)("Glass"),
          [d, c] = (0, o.useState)("Remote Based"),
          [p, m] = (0, o.useState)(4),
          [g, y] = (0, o.useState)(0),
          [v, j] = (0, o.useState)(0),
          [S, N] = (0, o.useState)(0),
          A = (0, o.useMemo)(
            () =>
              (function (e, t, l, r) {
                let a = [],
                  o = (e) => {
                    let t = (function (e) {
                      let t = tM.sR.find((e) => 4 === e.stepNo);
                      if (!t || !Array.isArray(t.optionsData)) return null;
                      for (let l of t.optionsData) {
                        let t = l.optionType;
                        for (let r of l.options) {
                          let l = r[t];
                          if (l && l.trim() === e)
                            return {
                              optionType: t,
                              id: String(r.id),
                              label: l,
                              price: Number(r.price || 0),
                            };
                        }
                      }
                      return null;
                    })(e);
                    t &&
                      a.push({
                        optionType: t.optionType,
                        itemLabel: t.label,
                        id: t.id,
                        price: t.price,
                      });
                  };
                for (; r >= 2;) (o("4 Switch + 2 Fan"), (r -= 2));
                for (; r >= 1;) (o("4 Switch + 1 Fan"), (r -= 1));
                for (; t >= 8;) (o("8 TW"), (t -= 8));
                for (; t >= 6;) (o("6 TW"), (t -= 6));
                for (; t >= 4;) (o("4 TW"), (t -= 4));
                for (; t >= 2;) (o("2 TW"), (t -= 2));
                for (; e >= 8;) (o("8 Switch"), (e -= 8));
                for (; e >= 6;) (o("6 Switch"), (e -= 6));
                for (; e >= 4;) (o("4 Switch (4-Module)"), (e -= 4));
                for (; e >= 2;) (o("2 Switch"), (e -= 2));
                1 === e && (o("2 Switch"), (e = 0));
                for (let e = 0; e < l; e++) o("3 Pin Socket");
                return a;
              })(p, g, v, S),
            [p, g, v, S],
          ),
          k = (0, o.useMemo)(
            () =>
              A.reduce(
                (e, t) =>
                  e + ((0, b.jh)(t.itemLabel) || (0, b.jh)(t.optionType) || 0),
                0,
              ),
            [A],
          ),
          C = (0, o.useMemo)(() => tD(k, r), [k, r]),
          M = (0, o.useMemo)(() => tE(r), [r]),
          [T, P] = (0, o.useState)(null),
          [z, I] = (0, o.useState)({ label: C.sizeLabel, id: C.sizeId }),
          O = (0, o.useMemo)(() => {
            var e, l, r;
            let a = "auto" === t ? M : M.filter((e) => e.id === t);
            if ("auto" !== t) {
              let e = a.length ? a : [],
                t = e.find((e) => e.label === z.label);
              return [null != t ? t : e[0]].filter(Boolean);
            }
            let o = a.filter((e) => k <= e.cap),
              n = null != (e = o[0]) ? e : M[M.length - 1],
              i = null != (l = o[1]) ? l : n,
              s = null != (r = o[2]) ? r : i;
            return [a.find((e) => e.label === z.label), n, i, s].filter(
              (e, t, l) => e && l.findIndex((t) => t.label === e.label) === t,
            );
          }, [M, t, k, z.label]);
        ((0, o.useEffect)(() => {
          let e = O[0];
          e && e.label !== z.label && I({ label: e.label, id: e.id });
        }, [O, z.label]),
          (0, o.useEffect)(() => {
            if (!M.some((e) => e.label === z.label)) {
              let e = M[0];
              I({ label: e.label, id: e.id });
            }
          }, [r, z.label, M]),
          (0, o.useEffect)(() => {
            if ("auto" !== t && !M.some((e) => e.id === t)) {
              l("auto");
              let e = tD(k, r);
              I({ label: e.sizeLabel, id: e.sizeId });
            }
          }, [t, M, k, r]),
          (0, o.useEffect)(() => {
            let e = "auto" === t ? O[0] : M.find((e) => e.id === t);
            e && k > e.cap
              ? P(
                  "Requested items need "
                    .concat(k, " modules, but ")
                    .concat(e.label, " supports up to ")
                    .concat(e.cap, ". Adjust counts or pick a larger size."),
                )
              : P(null);
          }, [t, O, M, k]));
        let L = (t) => {
            e((0, h.resetAccessory)());
            let l = {
              "Touch Panel": { id: "0", noFrame: !0 },
              Edge: { id: "1" },
              Color: { id: "2" },
              "Royal Edge": { id: "3" },
            }[r];
            (e(
              (0, h.addOrUpdatePanel)({
                id: l.id,
                item: r,
                price: 0,
                noFrame: l.noFrame,
              }),
            ),
              e(
                (0, h.addOrUpdateMaterial)({
                  id: { Glass: "5", Acrylic: "6" }[i],
                  item: i,
                  price: 0,
                }),
              ));
            let a = null != t ? t : z,
              o = { sizeId: a.id, sizeLabel: a.label };
            (e(
              (0, h.addOrUpdateSize)({
                id: o.sizeId,
                item: o.sizeLabel,
                price: 0,
              }),
            ),
              e((0, f.AQ)((0, b.wq)(o.sizeLabel))));
            let n = 0,
              s = {
                "12 Module": { r1: 6, r2: 6 },
                "16 Module": { r1: 8, r2: 8 },
              }[o.sizeLabel];
            for (let t of A)
              if (
                (e(
                  (0, h.addAccessory)({
                    optionType: t.optionType,
                    option: { id: t.id, item: t.itemLabel, price: t.price },
                  }),
                ),
                s)
              ) {
                let l = (0, b.jh)(t.itemLabel) || (0, b.jh)(t.optionType) || 0;
                n + l <= s.r1
                  ? (e(
                      (0, h.addAccessory1)({
                        optionType: t.optionType,
                        option: { id: t.id, item: t.itemLabel, price: t.price },
                      }),
                    ),
                    (n += l))
                  : e(
                      (0, h.addAccessory2)({
                        optionType: t.optionType,
                        option: { id: t.id, item: t.itemLabel, price: t.price },
                      }),
                    );
              }
            e(
              (0, h.addOrUpdateTechnology)({
                id: { "Remote Based": "tech1", Tuya: "tech2", Zigbee: "tech3" }[
                  d
                ],
                item: d,
                price: 0,
              }),
            );
            let c = (0, tM.KZ)(i, o.sizeLabel);
            e((0, x.n)(c));
            let u = c.find((e) => 5 === e.stepNo) || c[0];
            (e((0, x.EY)(u)), e((0, x.iY)(!1)));
          },
          E = (e) => {
            if ("auto" === e) {
              l("auto");
              let e = tD(k, r);
              (I({ label: e.sizeLabel, id: e.sizeId }),
                L({ label: e.sizeLabel, id: e.sizeId }));
              return;
            }
            let t = M.find((t) => t.id === e);
            t &&
              (l(e),
              I({ label: t.label, id: t.id }),
              L({ label: t.label, id: t.id }));
          };
        return (0, a.jsxs)(w.A, {
          sx: {
            p: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "rgba(59,130,246,0.2)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)",
            boxShadow:
              "0 4px 20px rgba(59, 130, 246, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)",
            },
          },
          children: [
            (0, a.jsxs)(w.A, {
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
              children: [
                (0, a.jsx)(w.A, {
                  sx: {
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                  },
                  children: (0, a.jsx)(ep.A, {
                    variant: "h6",
                    sx: { color: "white", fontWeight: 700 },
                    children: "⚡",
                  }),
                }),
                (0, a.jsxs)(w.A, {
                  children: [
                    (0, a.jsx)(ep.A, {
                      variant: "h6",
                      fontWeight: 700,
                      sx: { color: "#1e293b", lineHeight: 1.2 },
                      children: "Auto Mode",
                    }),
                    (0, a.jsx)(ep.A, {
                      variant: "caption",
                      sx: { color: "#64748b" },
                      children: "Fast, AI-assisted board design",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(w.A, {
              sx: {
                p: 2.5,
                borderRadius: 1.5,
                bgcolor: "rgba(248, 250, 252, 0.8)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                mb: 3,
              },
              children: [
                (0, a.jsx)(ep.A, {
                  variant: "subtitle2",
                  fontWeight: 600,
                  sx: { mb: 2, color: "#475569" },
                  children: "Configuration",
                }),
                (0, a.jsxs)(w.A, {
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: 2,
                  children: [
                    (0, a.jsxs)(tT.A, {
                      size: "small",
                      fullWidth: !0,
                      children: [
                        (0, a.jsx)(ep.A, {
                          variant: "caption",
                          sx: { mb: 0.5, fontWeight: 500, color: "#64748b" },
                          children: "Panel Type",
                        }),
                        (0, a.jsxs)(tP.A, {
                          value: r,
                          onChange: (e) => n(e.target.value),
                          sx: { bgcolor: "white" },
                          children: [
                            (0, a.jsx)(tz.A, {
                              value: "Edge",
                              children: "Edge",
                            }),
                            (0, a.jsx)(tz.A, {
                              value: "Touch Panel",
                              children: "Touch Panel",
                            }),
                            (0, a.jsx)(tz.A, {
                              value: "Color",
                              children: "Color",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(tT.A, {
                      size: "small",
                      fullWidth: !0,
                      children: [
                        (0, a.jsx)(ep.A, {
                          variant: "caption",
                          sx: { mb: 0.5, fontWeight: 500, color: "#64748b" },
                          children: "Material",
                        }),
                        (0, a.jsxs)(tP.A, {
                          value: i,
                          onChange: (e) => s(e.target.value),
                          sx: { bgcolor: "white" },
                          children: [
                            (0, a.jsx)(tz.A, {
                              value: "Glass",
                              children: "Glass",
                            }),
                            (0, a.jsx)(tz.A, {
                              value: "Acrylic",
                              children: "Acrylic",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(tT.A, {
                      size: "small",
                      fullWidth: !0,
                      children: [
                        (0, a.jsx)(ep.A, {
                          variant: "caption",
                          sx: { mb: 0.5, fontWeight: 500, color: "#64748b" },
                          children: "Technology",
                        }),
                        (0, a.jsxs)(tP.A, {
                          value: d,
                          onChange: (e) => c(e.target.value),
                          sx: { bgcolor: "white" },
                          children: [
                            (0, a.jsx)(tz.A, {
                              value: "Remote Based",
                              children: "Remote Based",
                            }),
                            (0, a.jsx)(tz.A, {
                              value: "Wi-Fi",
                              children: "Wi-Fi",
                            }),
                            (0, a.jsx)(tz.A, {
                              value: "Zigbee",
                              children: "Zigbee",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(eB.A, {
                      size: "small",
                      type: "number",
                      inputProps: { min: 0 },
                      label: "Normal Switches",
                      value: p,
                      onChange: (e) =>
                        m(Math.max(0, Number(e.target.value) || 0)),
                      sx: { bgcolor: "white" },
                    }),
                    (0, a.jsx)(eB.A, {
                      size: "small",
                      type: "number",
                      inputProps: { min: 0 },
                      label: "Two-way Switches",
                      value: g,
                      onChange: (e) =>
                        y(Math.max(0, Number(e.target.value) || 0)),
                      sx: { bgcolor: "white" },
                    }),
                    (0, a.jsx)(eB.A, {
                      size: "small",
                      type: "number",
                      inputProps: { min: 0 },
                      label: "Sockets",
                      value: v,
                      onChange: (e) =>
                        j(Math.max(0, Number(e.target.value) || 0)),
                      sx: { bgcolor: "white" },
                    }),
                    (0, a.jsx)(eB.A, {
                      size: "small",
                      type: "number",
                      inputProps: { min: 0 },
                      label: "Fans",
                      value: S,
                      onChange: (e) =>
                        N(Math.max(0, Number(e.target.value) || 0)),
                      sx: { bgcolor: "white" },
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(w.A, {
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,
              alignItems: "center",
              justifyContent: "space-between",
              sx: {
                background: "#f8fafc",
                borderRadius: 1.5,
                p: 2,
                border: "1px solid #e2e8f0",
              },
              children: [
                (0, a.jsxs)(w.A, {
                  children: [
                    (0, a.jsx)(ep.A, {
                      variant: "subtitle2",
                      sx: { fontWeight: 700, color: "#0f172a", mb: 0.5 },
                      children: "Preferred Modular Size",
                    }),
                    (0, a.jsx)(ep.A, {
                      variant: "body2",
                      sx: { color: "#475569" },
                      children:
                        "Narrow recommendations by picking an exact size.",
                    }),
                  ],
                }),
                (0, a.jsx)(tT.A, {
                  size: "small",
                  sx: { minWidth: 200 },
                  children: (0, a.jsxs)(tP.A, {
                    value: "auto" === t ? "auto" : z.id,
                    onChange: (e) => E(String(e.target.value)),
                    displayEmpty: !0,
                    sx: { bgcolor: "white" },
                    children: [
                      (0, a.jsx)(tz.A, {
                        value: "auto",
                        children: "Auto (Recommended)",
                      }),
                      M.map((e) =>
                        (0, a.jsx)(
                          tz.A,
                          { value: e.id, children: e.label },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                }),
              ],
            }),
            T &&
              (0, a.jsx)(w.A, {
                mb: 2,
                px: 2.5,
                py: 1.5,
                sx: {
                  borderRadius: 1.5,
                  border: "1px solid rgba(248, 180, 0, 0.4)",
                  background: "rgba(253, 230, 138, 0.2)",
                  color: "#92400e",
                  fontWeight: 600,
                },
                children: T,
              }),
            (0, a.jsx)(ep.A, {
              variant: "subtitle2",
              fontWeight: 600,
              sx: { mb: 2, color: "#475569" },
              children: "Recommended Board Variants",
            }),
            (0, a.jsx)(w.A, {
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: 2.5,
              children: O.map((e) => {
                let t = z.label === e.label,
                  l = Math.max(0, e.cap - k),
                  o = Math.min(100, Math.round((k / e.cap) * 100)),
                  n = A.map((e) => {
                    var t;
                    let l = (function (e) {
                      let t = e.toLowerCase();
                      return t.includes("2 tw") || t.includes("tw")
                        ? "twoway"
                        : t.includes("socket")
                          ? "socket"
                          : t.includes("fan")
                            ? "fan"
                            : t.includes("switch")
                              ? "switch"
                              : "other";
                    })(e.itemLabel);
                    return {
                      type: l,
                      color: null != (t = tO[l]) ? t : tO.other,
                    };
                  });
                return (
                  Array.from({ length: e.cap }).map((e, t) =>
                    t < n.length ? n[t] : null,
                  ),
                  (0, a.jsxs)(
                    w.A,
                    {
                      onClick: () => I({ label: e.label, id: e.id }),
                      sx: {
                        cursor: "pointer",
                        borderRadius: 1.5,
                        border: "2px solid ".concat(
                          t ? "#3b82f6" : "rgba(226, 232, 240, 0.8)",
                        ),
                        p: 2.5,
                        bgcolor: "white",
                        boxShadow: t
                          ? "0 8px 24px rgba(59,130,246,0.15), 0 2px 8px rgba(59,130,246,0.1)"
                          : "0 2px 8px rgba(15,23,42,0.06)",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow:
                            "0 12px 32px rgba(59,130,246,0.18), 0 4px 12px rgba(15,23,42,0.08)",
                          borderColor: t ? "#3b82f6" : "rgba(59,130,246,0.3)",
                        },
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        position: "relative",
                        overflow: "hidden",
                        ...(t && {
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background:
                              "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                          },
                        }),
                      },
                      children: [
                        (0, a.jsxs)(w.A, {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          children: [
                            (0, a.jsx)(ep.A, {
                              variant: "h6",
                              fontWeight: 700,
                              sx: { color: "#1e293b" },
                              children: e.label,
                            }),
                            t &&
                              (0, a.jsx)(tg.A, {
                                label: "Selected",
                                size: "small",
                                sx: {
                                  bgcolor: "#3b82f6",
                                  color: "white",
                                  fontWeight: 600,
                                  fontSize: "0.7rem",
                                },
                              }),
                          ],
                        }),
                        (0, a.jsxs)(w.A, {
                          display: "flex",
                          gap: 0.75,
                          flexWrap: "wrap",
                          children: [
                            (0, a.jsx)(tg.A, {
                              size: "small",
                              label: "".concat(e.cap, " Modules"),
                              sx: {
                                bgcolor: "rgba(59,130,246,0.08)",
                                color: "#3b82f6",
                                fontWeight: 500,
                                border: "none",
                              },
                            }),
                            (0, a.jsx)(tg.A, {
                              size: "small",
                              label: "".concat(k, " Used"),
                              sx: {
                                bgcolor: "rgba(139,92,246,0.08)",
                                color: "#8b5cf6",
                                fontWeight: 500,
                                border: "none",
                              },
                            }),
                            (0, a.jsx)(tg.A, {
                              size: "small",
                              label: "".concat(l, " Free"),
                              sx: {
                                bgcolor:
                                  l > 0
                                    ? "rgba(16,185,129,0.08)"
                                    : "rgba(245,158,11,0.08)",
                                color: l > 0 ? "#10b981" : "#f59e0b",
                                fontWeight: 500,
                                border: "none",
                              },
                            }),
                          ],
                        }),
                        (0, a.jsxs)(w.A, {
                          children: [
                            (0, a.jsxs)(w.A, {
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: 0.5,
                              children: [
                                (0, a.jsx)(ep.A, {
                                  variant: "caption",
                                  fontWeight: 500,
                                  sx: { color: "#64748b" },
                                  children: "Capacity Usage",
                                }),
                                (0, a.jsxs)(ep.A, {
                                  variant: "caption",
                                  fontWeight: 600,
                                  sx: { color: "#3b82f6" },
                                  children: [o, "%"],
                                }),
                              ],
                            }),
                            (0, a.jsx)(w.A, {
                              sx: {
                                height: 6,
                                borderRadius: 3,
                                background: "rgba(226,232,240,0.5)",
                                overflow: "hidden",
                              },
                              children: (0, a.jsx)(w.A, {
                                sx: {
                                  width: "".concat(o, "%"),
                                  height: "100%",
                                  background:
                                    "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                                  transition: "width 0.3s ease",
                                },
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)(w.A, {
                          children: [
                            (0, a.jsx)(ep.A, {
                              variant: "caption",
                              fontWeight: 500,
                              sx: { color: "#64748b", mb: 1, display: "block" },
                              children: "Design Preview",
                            }),
                            (0, a.jsx)(w.A, {
                              sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "12px",
                                borderRadius: 1.5,
                                background: "#000",
                                border: "1px solid rgba(226,232,240,0.3)",
                                minHeight: "140px",
                                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)",
                              },
                              children: (0, a.jsx)(tI, {
                                panelType: r,
                                sizeLabel: e.label,
                                composition: A,
                                material: i,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(eE.A, {
                          variant: t ? "contained" : "outlined",
                          fullWidth: !0,
                          sx: {
                            mt: "auto",
                            textTransform: "none",
                            borderRadius: 1.5,
                            py: 1.25,
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            ...(t
                              ? {
                                  background:
                                    "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                  boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                                  "&:hover": {
                                    background:
                                      "linear-gradient(135deg, #2563eb, #7c3aed)",
                                    boxShadow:
                                      "0 6px 16px rgba(59,130,246,0.4)",
                                  },
                                }
                              : {
                                  borderColor: "#e2e8f0",
                                  color: "#475569",
                                  "&:hover": {
                                    borderColor: "#3b82f6",
                                    bgcolor: "rgba(59,130,246,0.04)",
                                    color: "#3b82f6",
                                  },
                                }),
                          },
                          onClick: (t) => {
                            (t.stopPropagation(),
                              I({ label: e.label, id: e.id }),
                              L({ label: e.label, id: e.id }));
                          },
                          children: t ? "✓ Use This Design" : "Select & Edit",
                        }),
                      ],
                    },
                    e.label,
                  )
                );
              }),
            }),
            (0, a.jsx)(w.A, {
              mt: 3,
              p: 2.5,
              sx: {
                borderRadius: 1.5,
                bgcolor: "rgba(248, 250, 252, 0.6)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
              },
              children: (0, a.jsxs)(w.A, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
                children: [
                  (0, a.jsxs)(w.A, {
                    children: [
                      (0, a.jsx)(ep.A, {
                        variant: "caption",
                        sx: { color: "#64748b", display: "block", mb: 0.5 },
                        children: "Summary",
                      }),
                      (0, a.jsxs)(ep.A, {
                        variant: "body2",
                        sx: { color: "#475569", fontWeight: 500 },
                        children: [
                          (0, a.jsx)(w.A, {
                            component: "span",
                            sx: { color: "#3b82f6", fontWeight: 600 },
                            children: C.sizeLabel,
                          }),
                          " recommended •",
                          (0, a.jsx)(w.A, {
                            component: "span",
                            sx: { color: "#8b5cf6", fontWeight: 600, ml: 0.5 },
                            children: z.label,
                          }),
                          " selected •",
                          (0, a.jsxs)(w.A, {
                            component: "span",
                            sx: { color: "#10b981", fontWeight: 600, ml: 0.5 },
                            children: [k, " modules"],
                          }),
                          " total",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(eE.A, {
                    variant: "contained",
                    size: "large",
                    onClick: () => L(),
                    sx: {
                      textTransform: "none",
                      borderRadius: 1.5,
                      px: 3,
                      py: 1.25,
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                        boxShadow: "0 6px 16px rgba(59,130,246,0.4)",
                      },
                    },
                    children: "Generate & Continue →",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var tU = l(90835),
        tF = l(75824),
        tW = l(46108),
        tB = l(50620),
        t_ = l(96898);
      let tH = () => {
          let [e, t] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                t(window.innerWidth < window.innerHeight);
              };
              return (
                window.addEventListener("resize", e),
                e(),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            e
          );
        },
        tG = (e) =>
          "/cardborders/" + e.toLowerCase().replace(/[^a-z0-9]/g, "") + ".svg",
        tY = (e) => {
          if ("string" != typeof e) return null;
          let t = e.trim();
          return t.length > 0 ? t : null;
        },
        tX = function () {
          for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
            t[l] = arguments[l];
          for (let e of t) {
            let t = tY(e);
            if (t) return t;
          }
          return null;
        },
        tq = (0, A.Ay)(tU.A)((e) => {
          let { theme: t } = e;
          return {
            width: 52,
            height: 32,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 3,
              "&.Mui-checked": {
                transform: "translateX(20px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#4ade80",
                  opacity: 1,
                },
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 26,
              height: 26,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
            },
            "& .MuiSwitch-track": {
              borderRadius: 16,
              backgroundColor: "#e5e7eb",
              opacity: 1,
            },
          };
        });
      function tV() {
        var e,
          t,
          r,
          s,
          g,
          y,
          j,
          S,
          N,
          A,
          k,
          C,
          M,
          T,
          P,
          z,
          I,
          O,
          L,
          E,
          D,
          R,
          U,
          F,
          W,
          B,
          _,
          H,
          G,
          Y,
          X;
        let q = (0, u.wA)(),
          { data: V, status: Q } = (0, c.useSession)(),
          J = (0, n.useRouter)(),
          Z = (0, n.useRouter)(),
          K = (0, n.useSearchParams)(),
          $ = !!(null == V || null == (e = V.user) ? void 0 : e.parentUserId),
          ee =
            (null == V || null == (t = V.user) ? void 0 : t.role) ===
            "SuperAdmin",
          et = K.get("edit") || void 0,
          el = K.get("cart") || void 0,
          er = "/Image/logoVerni.png",
          {
            loading: ea,
            brandLogoUrl: eo,
            pdfLogoUrl: en,
            inheritBranding: ei,
            hasPremium: es,
            settings: ed,
            globalSettings: ec,
          } = (0, eM.Z)(),
          eu = (0, o.useMemo)(
            () =>
              tX(
                eo,
                null == ed ? void 0 : ed.logoUrl,
                null == ec ? void 0 : ec.logoUrl,
              ),
            [
              eo,
              null == ed ? void 0 : ed.logoUrl,
              null == ec ? void 0 : ec.logoUrl,
            ],
          ),
          ex = (0, o.useMemo)(
            () =>
              tX(
                en,
                null == ed ? void 0 : ed.pdfLogoUrl,
                null == ed ? void 0 : ed.logoUrl,
                null == ec ? void 0 : ec.pdfLogoUrl,
                null == ec ? void 0 : ec.logoUrl,
              ),
            [
              en,
              null == ed ? void 0 : ed.pdfLogoUrl,
              null == ed ? void 0 : ed.logoUrl,
              null == ec ? void 0 : ec.pdfLogoUrl,
              null == ec ? void 0 : ec.logoUrl,
            ],
          ),
          eh = (0, o.useMemo)(() => !!(es || ei), [es, ei]),
          [ew, eA] = (0, o.useState)(() => (0, em.b)());
        ((0, o.useEffect)(() => {
          var e;
          if (!(null == V || null == (e = V.user) ? void 0 : e.id)) return;
          let t = !1;
          return (
            fetch("/api/premium/panel-names", { cache: "no-store" })
              .then((e) =>
                e.ok ? e.json() : Promise.reject(Error(e.statusText)),
              )
              .then((e) => {
                if (!t) {
                  let t = (null == e ? void 0 : e.overrides) || {};
                  eA(t);
                  try {
                    (0, em.EO)(t);
                  } catch (e) {}
                }
              })
              .catch(() => void 0),
            () => {
              t = !0;
            }
          );
        }, [null == V || null == (r = V.user) ? void 0 : r.id]),
          (0, o.useEffect)(() => {}, [Q, null == V ? void 0 : V.user]),
          (0, o.useEffect)(() => {
            "unauthenticated" === Q && J.replace("/Login");
          }, [Q, J]),
          (0, o.useEffect)(() => {
            if (ea) return;
            let e = null != ex ? ex : eu;
            (eu ? q((0, f.bX)({ url: eu })) : eh || q((0, f.bX)({ url: er })),
              e ? q((0, f.fl)({ url: e })) : eh || q((0, f.fl)({ url: er })));
          }, [ea, eu, ex, eh, q, er]));
        let eP = (0, u.d4)((e) => e.selectionData.selectionData),
          ez = (0, u.d4)((e) => e.selectionData.currentStep),
          eI = (0, u.d4)((e) => e.selectionData.isNextDisabled),
          eR = (0, u.d4)((e) => e.selectionData.isPrevDisabled),
          eU = (0, u.d4)((e) => e.cartData.cartData),
          eF = (0, u.d4)((e) => e.cartData.droppedItems),
          e_ = (0, u.d4)((e) => e.cartData.totalPrice),
          eH = (0, u.d4)((e) => e.cartData.quantity),
          [eG, eY] = (0, o.useState)(0),
          [eQ, eJ] = (0, o.useState)(!1),
          [eZ, eK] = (0, o.useState)("classic"),
          [e$, e0] = (0, o.useState)(!1),
          [e1, e2] = (0, o.useState)(0),
          [e5, e4] = (0, o.useState)(!1),
          [e3, e6] = (0, o.useState)(!1),
          [e8, e7] = (0, o.useState)(18),
          [e9, te] = (0, o.useState)(""),
          [tt, tl] = (0, o.useState)({}),
          [tr, ta] = (0, o.useState)(!1),
          [to, tn] = (0, o.useState)(null),
          [ti, ts] = (0, o.useState)(!1),
          [td, tc] = (0, o.useState)(null),
          [tu, tm] = (0, o.useState)(void 0),
          [tx, th] = (0, o.useState)("PDF Preview"),
          [tf, tb] = (0, o.useState)(void 0),
          [ty, tv] = (0, o.useState)(!1),
          [tj, tw] = (0, o.useState)(!1),
          [tS, tN] = (0, o.useState)(!1),
          [tk, tT] = (0, o.useState)(!1),
          [tP, tz] = (0, o.useState)(!0);
        (0, o.useEffect)(() => {
          var e;
          let t = null == V || null == (e = V.user) ? void 0 : e.id;
          t &&
            fetch("/api/userSettings/".concat(t))
              .then((e) =>
                e.ok ? e.json() : Promise.reject(Error(e.statusText)),
              )
              .then((e) => {
                var r, a, o, n, i, s, d, c;
                (eY(null != (a = e.discountPct) ? a : 0),
                  eJ(!!ee || !!e.allowScreenshots),
                  e4(!ee && !!(null != (o = e.hidePrices) && o)),
                  e0(!!e.enableMargin));
                try {
                  let l = "marginPct_".concat(t),
                    r = localStorage.getItem(l);
                  null !== r
                    ? e2(Math.max(0, Number(r)) || 0)
                    : e2(null != (n = e.marginPct) ? n : 0);
                } catch (t) {
                  e2(null != (i = e.marginPct) ? i : 0);
                }
                (eK(eh && null != (s = e.theme) ? s : "classic"),
                  e6(!!(null != (d = e.enableGst) && d)));
                let u = Number.parseFloat(
                  String(null != (c = e.gstPercentage) ? c : 18),
                );
                (e7(Number.isFinite(u) ? u : 18),
                  te("string" == typeof e.quoteTerms ? e.quoteTerms : ""),
                  tl({
                    accountName:
                      "string" == typeof e.bankAccountName
                        ? e.bankAccountName
                        : "",
                    accountNumber:
                      "string" == typeof e.bankAccountNumber
                        ? e.bankAccountNumber
                        : "",
                    bankName: "string" == typeof e.bankName ? e.bankName : "",
                    ifsc: "string" == typeof e.bankIfsc ? e.bankIfsc : "",
                  }),
                  ta(!!e.showBankDetails));
                let p = !!(null == V || null == (r = V.user)
                    ? void 0
                    : r.isPremium),
                  m = e.freeIcons;
                Promise.resolve()
                  .then(l.bind(l, 97781))
                  .then((e) => {
                    let {
                      setPremiumStatus: t,
                      setFreeIcons: r,
                      recalculateTotalPrice: a,
                    } = e;
                    Promise.resolve()
                      .then(l.bind(l, 92927))
                      .then((e) => {
                        let { store: l } = e;
                        (l.dispatch(t(p)),
                          p
                            ? (l.dispatch(r(!0)),
                              console.log(
                                "\uD83D\uDEA8 EMERGENCY FIX: Premium user - forcing free icons in user dashboard",
                              ))
                            : l.dispatch(r(m)),
                          l.dispatch(a()),
                          console.log(
                            "\uD83C\uDFAF Emergency Icon Fix Applied in User Dashboard:",
                            {
                              isPremium: p,
                              freeIconsSetting: m,
                              expectedBehavior: p
                                ? !1 === m
                                  ? "PAID (SuperAdmin Override)"
                                  : "FREE (Premium Default)"
                                : !0 === m
                                  ? "FREE (SuperAdmin Override)"
                                  : "PAID (Non-Premium Default)",
                            },
                          ));
                      });
                  });
                try {
                  let e =
                      "true" ===
                      localStorage.getItem("showMarginEditorOnMain_".concat(t)),
                    l =
                      "true" ===
                      localStorage.getItem(
                        "marginEditorEnabledOnDashboard_".concat(t),
                      );
                  (tN(e), tT(l && e));
                } catch (e) {}
                try {
                  let e =
                    "true" === localStorage.getItem("autoModeNoticeHidden");
                  tz(!e);
                } catch (e) {}
              })
              .catch((e) => {
                console.error(e);
              });
        }, [null == V || null == (s = V.user) ? void 0 : s.id, eh]);
        let tI = (0, u.d4)((e) => e.extraSlice.logoUrl),
          tO = (0, u.d4)((e) => e.extraSlice.pdfLogoUrl),
          tL = (0, u.d4)((e) => e.selectionData.autoNext),
          tE = (0, u.d4)((e) => e.selectionData.autoMode),
          tD = (0, u.d4)((e) => e.userIcons.icons),
          [tU, tV] = (0, o.useState)(null),
          tQ = (0, u.d4)((e) => e.defaultIcons.icons),
          tJ = (0, u.d4)((e) => e.defaultIcons.categories),
          [tZ, tK] = (0, o.useState)(""),
          t$ = (0, o.useMemo)(
            () => new Map(tJ.map((e) => [e.id, e.label])),
            [tJ],
          ),
          t0 = (0, u.d4)(t_.Gg),
          [t1, t2] = (0, o.useState)(null),
          [t5, t4] = (0, o.useState)(!1),
          t3 = (0, o.useRef)(null),
          t6 = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          try {
            let e = "true" === localStorage.getItem("autoModeNoticeHidden");
            tz(!e);
          } catch (e) {}
        }, []);
        let t8 = (0, o.useCallback)(() => {
            tz(!0);
            try {
              localStorage.setItem("autoModeNoticeHidden", "false");
            } catch (e) {}
          }, []),
          t7 = (0, o.useCallback)(() => {
            tz(!1);
            try {
              localStorage.setItem("autoModeNoticeHidden", "true");
            } catch (e) {}
          }, []),
          t9 = (0, o.useCallback)(
            async (e) => {
              if (e) {
                tV(e);
                try {
                  let t = await fetch(
                    "/api/icons/upload?id=".concat(encodeURIComponent(e)),
                    { method: "DELETE" },
                  );
                  if (t.ok || 404 === t.status) q((0, p.NL)(e));
                  else {
                    let e = await t.json().catch(() => ({}));
                    console.error("Failed to delete icon", e);
                  }
                } catch (e) {
                  console.error("Failed to delete icon", e);
                } finally {
                  tV((t) => (t === e ? null : t));
                }
              }
            },
            [q],
          ),
          le = (0, o.useMemo)(() => {
            var e, t, l;
            if (!tQ || 0 === tQ.length)
              return (Array.isArray(ez.optionsData) ? ez.optionsData : []).map(
                (e) => {
                  var t;
                  return {
                    optionType: e.optionType,
                    label:
                      null != (t = t$.get(e.optionType)) ? t : e.optionType,
                    options: e.options.map((e) => {
                      var t, l;
                      return {
                        id: e.id,
                        src:
                          null != (l = null != (t = e.src) ? t : e.url)
                            ? l
                            : "",
                        name: e.name,
                      };
                    }),
                  };
                },
              );
            let r = new Map();
            for (let l of tQ) {
              let a = l.categoryId || "uncategorized",
                o = { id: l.id, src: l.src, name: l.name },
                n = r.get(a);
              n
                ? n.options.push(o)
                : r.set(a, {
                    optionType: a,
                    label:
                      null != (t = null != (e = t$.get(a)) ? e : l.optionType)
                        ? t
                        : a,
                    options: [o],
                  });
            }
            let a = (null != (l = ez.optionTypes) ? l : []).filter(
                (e) => "string" == typeof e && e.length > 0,
              ),
              o = tJ.map((e) => e.id),
              n = new Set(),
              i = [],
              s = (e) => {
                var t;
                if (n.has(e)) return;
                n.add(e);
                let l = r.get(e);
                if (l)
                  return void i.push({
                    optionType: l.optionType,
                    label: l.label,
                    options: l.options.slice(),
                  });
                i.push({
                  optionType: e,
                  label: null != (t = t$.get(e)) ? t : e,
                  options: [],
                });
              };
            for (let e of a) s(e);
            for (let e of o) s(e);
            for (let e of r.keys()) s(e);
            return i;
          }, [tQ, ez.optionsData, ez.optionTypes, t$, tJ]),
          lt = (e) =>
            "string" == typeof e
              ? e.trim().toLowerCase()
              : "number" == typeof e || "bigint" == typeof e
                ? String(e).trim().toLowerCase()
                : "",
          ll = (0, o.useMemo)(() => {
            let e = tZ.trim().toLowerCase();
            if (!e) return le;
            let t = [];
            for (let l of le) {
              let r = l.options.filter((t) => {
                let l = lt(null == t ? void 0 : t.name),
                  r = lt(null == t ? void 0 : t.id);
                return l.includes(e) || r.includes(e);
              });
              r.length &&
                t.push({
                  optionType: l.optionType,
                  label: l.label,
                  options: r,
                });
            }
            return t;
          }, [le, tZ]),
          lr = (0, o.useMemo)(() => {
            let e = tZ.trim().toLowerCase();
            return e
              ? tD.filter((t) => {
                  let l = lt(null == t ? void 0 : t.name),
                    r = lt(null == t ? void 0 : t.id);
                  return l.includes(e) || r.includes(e);
                })
              : tD;
          }, [tD, tZ]),
          la = tZ.trim(),
          lo = la.length > 0,
          ln = (0, o.useMemo)(() => {
            var e;
            return 5 === ez.stepNo ? ll : null != (e = ez.optionsData) ? e : [];
          }, [ez.stepNo, ez.optionsData, ll]),
          li = (0, u.d4)(t_.I0),
          ls = (0, o.useMemo)(
            () => Object.fromEntries(li.map((e) => [e.id, e.base_price])),
            [li],
          ),
          ld = o.useMemo(
            () => !!eh && ($ ? !!e$ : !!(e$ || (tS && tk))),
            [eh, tS, tk, e$],
          ),
          {
            footerPriceExclGst: lc,
            footerGrandTotal: lu,
            footerGstPct: lp,
          } = (0, o.useMemo)(() => {
            let e = Number.isFinite(e_)
                ? Number(e_)
                : Number(null != e_ ? e_ : 0) || 0,
              t = Number.isFinite(eH)
                ? Number(eH)
                : Number(null != eH ? eH : 0) || 0,
              l = t > 0 ? t : 1,
              r = Number.isFinite(eG)
                ? Number(eG)
                : Number.parseFloat(String(eG)) || 0,
              a = ld
                ? Number.isFinite(e1)
                  ? Number(e1)
                  : Number.parseFloat(String(e1)) || 0
                : 0,
              o = ld && a > 0,
              n = (0, eT.UM)({
                listUnit: l > 0 ? e / l : 0,
                quantity: l,
                discountPct: r,
                marginPct: a,
                marginEnabled: o,
              }).landingTotal,
              i = Number.isFinite(e8) ? e8 : 18,
              s = n + (i / 100) * n,
              d = o ? (0, eT.XF)(s, a) : s,
              c = Number.isFinite(d) ? d : 0;
            return {
              footerPriceExclGst: c,
              footerGrandTotal: c + (i / 100) * c,
              footerGstPct: i,
            };
          }, [e_, eH, eG, ld, e1, e8]),
          lm = (0, o.useCallback)(
            (e) =>
              "".concat("₹", " ").concat(
                Math.max(0, e).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                }),
              ),
            ["₹"],
          ),
          lx = async () => {
            var e;
            if ($) return;
            let t = !e$;
            (e0(t),
              (null == V || null == (e = V.user) ? void 0 : e.id) &&
                (await fetch("/api/userSettings/".concat(V.user.id), {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ enableMargin: t }),
                })));
          },
          lh = async () => {
            if ($) return;
            let e = !tk;
            tT(e);
            try {
              var t;
              (null == V || null == (t = V.user) ? void 0 : t.id) &&
                (localStorage.setItem(
                  "marginEditorEnabledOnDashboard_".concat(V.user.id),
                  String(e),
                ),
                e &&
                  (e0(!1),
                  localStorage.setItem(
                    "enableMargin_".concat(V.user.id),
                    "false",
                  ),
                  await fetch("/api/userSettings/".concat(V.user.id), {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ enableMargin: !1 }),
                  })));
            } catch (e) {}
          };
        (0, o.useEffect)(() => {
          if (eh && ("brand" === eZ || "mybrand" === eZ) && tI) {
            let e = new window.Image();
            ((e.crossOrigin = "anonymous"),
              (e.src = tI),
              (e.onload = () => {
                let t = document.createElement("canvas");
                ((t.width = e.width), (t.height = e.height));
                let l = t.getContext("2d");
                if (!l) return;
                l.drawImage(e, 0, 0);
                let r = l.getImageData(0, 0, t.width, t.height).data,
                  a = 0,
                  o = 0,
                  n = 0,
                  i = 0;
                for (let e = 0; e < r.length; e += 4)
                  ((a += r[e]), (o += r[e + 1]), (n += r[e + 2]), i++);
                ((a = Math.round(a / i)),
                  (o = Math.round(o / i)),
                  (n = Math.round(n / i)));
                let s = "rgb(".concat(a, ",").concat(o, ",").concat(n, ")");
                document.documentElement.style.setProperty(
                  "--brand-primary",
                  s,
                );
              }));
          } else
            document.documentElement.style.removeProperty("--brand-primary");
        }, [eZ, tI, eh]);
        let lg = eU.panel,
          lf = !!(null == lg ? void 0 : lg.noFrame),
          lb = null == (g = eU.material) ? void 0 : g.id,
          ly = (0, u.d4)((e) => {
            var t, l;
            return null !=
              (l = null == (t = e.cartData.cartData.material) ? void 0 : t.item)
              ? l
              : "";
          }),
          lv = (0, u.d4)((e) => {
            var t, l;
            return null !=
              (l = null == (t = e.cartData.cartData.size) ? void 0 : t.item)
              ? l
              : "";
          }),
          lj = [
            {
              "Size 1": "2 Module",
              id: "7",
              price: null != (k = ls["7"]) ? k : 100,
              extraOptions: [],
            },
            {
              "Size 2": "4 Module",
              id: "8",
              price: null != (C = ls["8"]) ? C : 200,
              extraOptions: [
                {
                  "Size 2": "4 Module 1 Socket",
                  id: "30",
                  price: null != (M = ls["30"]) ? M : 250,
                },
              ],
            },
            {
              "Size 3": "6 Module",
              id: "9",
              price: null != (T = ls["9"]) ? T : 300,
              extraOptions: [
                {
                  "Size 3": "6 Module 1 Socket",
                  id: "31",
                  price: null != (P = ls["31"]) ? P : 350,
                },
                {
                  "Size 3": "6 Module 2 Socket",
                  id: "32",
                  price: null != (z = ls["32"]) ? z : 400,
                },
              ],
            },
            {
              "Size 4": "8 Module",
              id: "10",
              price: null != (I = ls["10"]) ? I : 400,
              extraOptions: [
                {
                  "Size 4": "8 Module 1 Socket",
                  id: "33",
                  price: null != (O = ls["33"]) ? O : 450,
                },
                {
                  "Size 4": "8 Module 2 Socket",
                  id: "34",
                  price: null != (L = ls["34"]) ? L : 500,
                },
              ],
            },
            {
              "Size 5": "12 Module",
              id: "11",
              price: null != (E = ls["11"]) ? E : 600,
              extraOptions: [
                {
                  "Size 5": "12 Module 2 Socket H",
                  id: "35",
                  price: null != (D = ls["35"]) ? D : 650,
                },
                {
                  "Size 5": "12 Module 2 Socket V",
                  id: "36",
                  price: null != (R = ls["36"]) ? R : 700,
                },
              ],
            },
          ],
          lw = [
            {
              "Size 1": "2 Module",
              id: "7",
              price: null != (U = ls["7"]) ? U : 100,
            },
            {
              "Size 2": "3 Module",
              id: "30",
              price: null != (F = ls["30"]) ? F : 150,
            },
            {
              "Size 3": "4 Module",
              id: "8",
              price: null != (W = ls["8"]) ? W : 100,
            },
            {
              "Size 4": "6 Module",
              id: "9",
              price: null != (B = ls["9"]) ? B : 100,
            },
            {
              "Size 5": "8 Module",
              id: "31",
              price: null != (_ = ls["31"]) ? _ : 400,
            },
            {
              "Size 6": "8 Module S",
              id: "32",
              price: null != (H = ls["32"]) ? H : 400,
            },
            {
              "Size 7": "12 Module",
              id: "11",
              price: null != (G = ls["11"]) ? G : 100,
            },
            {
              "Size 8": "16 Module",
              id: "33",
              price: null != (Y = ls["33"]) ? Y : 800,
            },
            {
              "Size 9": "18 Module",
              id: "34",
              price: null != (X = ls["34"]) ? X : 900,
            },
          ],
          lS = (0, o.useMemo)(() => {
            var e, t, l, r;
            let a = [
              ...(null != (e = eU.accessories) ? e : []),
              ...(null != (t = eU.accessories1) ? t : []),
              ...(null != (l = eU.accessories2) ? l : []),
              ...(null != (r = eU.accessories3) ? r : []),
            ].flatMap((e) =>
              e.options.map((t) => ({ item: t.item, type: e.optionType })),
            );
            if (0 === a.length) return !1;
            let o = new Set([
              "3 Pin Socket",
              "Universal Socket",
              "16A Socket",
              "Bell",
              "USB-Type C",
            ]);
            return a.every((e) => "1 Modular" === e.type || o.has(e.item));
          }, [
            eU.accessories,
            eU.accessories1,
            eU.accessories2,
            eU.accessories3,
          ]),
          [lN, lA] = (0, o.useState)({}),
          lk = (e, t) => {
            (lA((l) => ({ ...l, [e]: t })),
              q((0, x.iY)(!1)),
              tL && q((0, x.sk)(eU)));
          },
          lC = {
            "2 Module": ["1 Modular", "2 Modular"],
            "3 Module": ["1 Modular", "2 Modular"],
            "4 Module": ["1 Modular", "2 Modular", "4 Modular"],
            "4 Module 1 Socket": ["1 Modular", "2 Modular"],
            "6 Module": ["1 Modular", "2 Modular", "4 Modular", "6 Modular"],
            "6 Module 1 Socket": ["1 Modular", "2 Modular", "4 Modular"],
            "6 Module 2 Socket": ["1 Modular", "2 Modular"],
            "8 Module": [
              "1 Modular",
              "2 Modular",
              "4 Modular",
              "6 Modular",
              "8 Modular",
            ],
            "8 Module 1 Socket": [
              "1 Modular",
              "2 Modular",
              "4 Modular",
              "6 Modular",
            ],
            "8 Module 2 Socket": ["1 Modular", "2 Modular", "4 Modular"],
            "8 Module S": ["1 Modular", "2 Modular", "4 Modular"],
            "12 Module": ["1 Modular", "2 Modular", "4 Modular", "6 Modular"],
            "12 Module 2 Socket H": [
              "1 Modular",
              "2 Modular",
              "4 Modular",
              "6 Modular",
            ],
            "12 Module 2 Socket V": ["1 Modular", "2 Modular", "4 Modular"],
            "16 Module": [
              "1 Modular",
              "2 Modular",
              "4 Modular",
              "6 Modular",
              "8 Modular",
            ],
            "18 Module": ["1 Modular", "2 Modular", "4 Modular", "6 Modular"],
          },
          lM = (0, o.useMemo)(() => {
            var e, t;
            if (4 === ez.stepNo) {
              let t = null != (e = lC[lv]) ? e : [];
              return (
                ("Glass" === ly ||
                  (null == lg ? void 0 : lg.item) === "Royal Edge") &&
                  (t = t.filter((e) => "1 Modular" !== e)),
                t
              );
            }
            return 5 === ez.stepNo
              ? ll.map((e) => e.optionType)
              : null != (t = ez.optionTypes)
                ? t
                : [];
          }, [ez.stepNo, ez.optionTypes, lv, ly, lg, le]),
          lT = (0, o.useMemo)(
            () => ("Color" === ez.step && lf ? ["Material Color"] : lM),
            [ez.step, lM, lf],
          ),
          lP = "__my_icons__",
          lz = (0, o.useMemo)(
            () =>
              5 === ez.stepNo
                ? [
                    ...lT.map((e) => {
                      var t, l;
                      let r = ll.find((t) => t.optionType === e);
                      return {
                        id: e,
                        label:
                          null !=
                          (l =
                            null != (t = null == r ? void 0 : r.label)
                              ? t
                              : t$.get(e))
                            ? l
                            : e,
                      };
                    }),
                    { id: lP, label: "My Icons" },
                  ]
                : lT.map((e) => ({ id: e, label: e })),
            [ez.stepNo, lT, ll, t$],
          ),
          [lI, lO] = (0, o.useState)(""),
          lL = (0, o.useRef)({});
        ((0, o.useEffect)(() => {
          lz.length && lO((e) => (lz.some((t) => t.id === e) ? e : lz[0].id));
        }, [lz, ez.step]),
          (0, o.useEffect)(() => {
            var e;
            if (5 !== ez.stepNo || !lo) return;
            let t = ll.map((e) => e.optionType),
              l = t.length > 0,
              r = lr.length > 0;
            if ((l && t.includes(lI)) || (r && lI === lP)) return;
            let a = l ? t[0] : r ? lP : null == (e = lz[0]) ? void 0 : e.id;
            a && a !== lI && lO(a);
          }, [ll, lr, lo, ez.stepNo, lI, lz, lP]),
          (0, o.useEffect)(() => {
            5 !== ez.stepNo && tZ && tK("");
          }, [ez.stepNo, tZ]));
        let lE = tH(),
          lD = (0, o.useMemo)(() => (0, tM.KZ)(ly, lv), [ly, lv]);
        ((0, o.useEffect)(() => {
          q((0, x.n)(lD));
        }, [q, lD]),
          (0, o.useEffect)(() => {
            !eU.panel && eP.length && q((0, x.EY)(eP[0]));
          }, [q, eP, eU.panel]),
          (0, o.useEffect)(() => {
            q((0, tB.fg)());
          }, [q]),
          (0, o.useEffect)(() => {
            "idle" === t0 && q((0, t_.$B)());
          }, [q, t0]),
          (0, o.useEffect)(() => {
            if ("authenticated" !== Q || t6.current || t1) return;
            let e = !1;
            return (
              (async () => {
                try {
                  let n = await fetch("/api/offers", {
                    credentials: "include",
                  });
                  if (!n.ok) return;
                  let i = await n.json(),
                    s = null == i ? void 0 : i.offer;
                  if (
                    !e &&
                    s &&
                    "string" == typeof s.mediaUrl &&
                    s.mediaUrl.trim().length
                  ) {
                    var t, l, r, a, o;
                    (t2({
                      id: null != (t = s.id) ? t : null,
                      mediaUrl: s.mediaUrl,
                      mediaScale: Number(null != (l = s.mediaScale) ? l : 100),
                      mediaOffsetX: Number(
                        null != (r = s.mediaOffsetX) ? r : 0,
                      ),
                      mediaOffsetY: Number(
                        null != (a = s.mediaOffsetY) ? a : 0,
                      ),
                      mediaObjectFit:
                        null != (o = s.mediaObjectFit) ? o : "contain",
                    }),
                      (t3.current = new Date().toISOString()),
                      fetch(
                        "/api/offers/".concat(
                          encodeURIComponent(String(s.id)),
                          "/impression",
                        ),
                        { method: "POST", credentials: "include" },
                      ),
                      /\.gif($|\?)/i.test(String(s.mediaUrl)) &&
                        window.setTimeout(() => t4(!0), 8e3));
                  }
                } catch (e) {}
              })(),
              () => {
                e = !0;
              }
            );
          }, [Q, t1]),
          (0, o.useEffect)(() => {
            var e, t;
            let l =
                (null == (e = eU.color.find((e) => e.optionType === lI))
                  ? void 0
                  : e.options.length) || 0,
              r = null != (t = lL.current[lI]) ? t : 0;
            (tL &&
              "Color" === ez.step &&
              l > r &&
              ("Material Color" === lI
                ? lf
                  ? (q((0, x.iY)(!1)), q((0, x.sk)(eU)))
                  : q((0, x.iY)(!0))
                : ("Frame Color" === lI && q((0, x.iY)(!1)), q((0, x.sk)(eU)))),
              (lL.current[lI] = l));
          }, [tL, ez, lI, eU, q, lf]),
          (0, o.useEffect)(() => {
            if (6 === ez.stepNo) {
              let e = eU.color.find((e) => "Material Color" === e.optionType),
                t = eU.color.find((e) => "Frame Color" === e.optionType),
                l = !!(null == e ? void 0 : e.options.length),
                r = !!lf || !!(null == t ? void 0 : t.options.length);
              q((0, x.iY)(!(l && r)));
            }
          }, [ez.stepNo, eU.color, q, lf]),
          (0, o.useEffect)(() => {
            "Color" === ez.step && lf && q((0, h.hideCanvasBorder)());
          }, [ez.step, lf, q]),
          (0, o.useEffect)(() => {
            ez.stepNo >= 5 && q((0, h.hideCanvasBorder)());
          }, [ez.stepNo, q]),
          (0, o.useEffect)(() => {
            7 !== ez.stepNo ||
              eU.technology ||
              (q(
                (0, h.addOrUpdateTechnology)({
                  id: "tech1",
                  item: "Remote Based",
                  price: 0,
                }),
              ),
              q((0, x.iY)(!1)));
          }, [ez.stepNo, eU.technology, q]));
        let [lR, lU] = (0, o.useState)(!1),
          [lF, lW] = (0, o.useState)(!1),
          [lB, l_] = (0, o.useState)(!1),
          [lH, lG] = (0, o.useState)(""),
          [lY, lX] = (0, o.useState)([]),
          [lq, lV] = (0, o.useState)(null),
          lQ = (0, o.useRef)(null),
          [lJ, lZ] = (0, o.useState)(!1),
          [lK, l$] = (0, o.useState)("input"),
          [l0, l1] = (0, o.useState)("");
        (0, o.useEffect)(() => {
          !eh && lJ && lZ(!1);
        }, [eh]);
        let [l2, l5] = (0, o.useState)(!1),
          [l4, l3] = (0, o.useState)(!1),
          [l6, l8] = (0, o.useState)(!1),
          l7 = (0, u.d4)((e) => {
            var t, l;
            return null != (l = null == (t = e.cartData) ? void 0 : t.cartItems)
              ? l
              : [];
          });
        ((0, o.useEffect)(() => {
          try {
            let e = localStorage.getItem("lastOrderName");
            e && e.trim() && lV(e.trim());
          } catch (e) {}
        }, []),
          (0, o.useEffect)(() => {
            let e = !0;
            return (
              (async () => {
                try {
                  let t = await fetch("/api/order-names", {
                      cache: "no-store",
                    }),
                    l = t.ok ? await t.json() : { names: [] },
                    r = Array.isArray(null == l ? void 0 : l.names)
                      ? l.names
                      : [],
                    a = (null != l7 ? l7 : [])
                      .map((e) =>
                        "string" == typeof e.orderName
                          ? e.orderName.trim()
                          : "",
                      )
                      .filter((e) => e.length > 0),
                    o = Array.from(new Set([...r, ...a]));
                  e && lX(o);
                } catch (l) {
                  let t = Array.from(
                    new Set(
                      (null != l7 ? l7 : [])
                        .map((e) =>
                          "string" == typeof e.orderName
                            ? e.orderName.trim()
                            : "",
                        )
                        .filter((e) => e.length > 0),
                    ),
                  );
                  e && lX(t);
                }
              })(),
              () => {
                e = !1;
              }
            );
          }, [l7]),
          (0, o.useEffect)(() => {
            var e, t;
            if (
              eQ ||
              eh ||
              (null == V || null == (e = V.user) ? void 0 : e.role) ===
                "Admin" ||
              (null == V || null == (t = V.user) ? void 0 : t.role) ===
                "SuperAdmin"
            )
              return;
            let l = (e) => {
              ("PrintScreen" === e.key ||
                "F6" === e.key ||
                ((e.ctrlKey || e.metaKey) &&
                  e.shiftKey &&
                  "s" === e.key.toLowerCase())) &&
                (e.preventDefault(),
                l3(!0),
                navigator.clipboard.writeText("").catch(() => {}),
                fetch("/api/logs", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ action: "screenshot_attempt" }),
                }));
            };
            return (
              window.addEventListener("keydown", l),
              window.addEventListener("keyup", l),
              () => {
                (window.removeEventListener("keydown", l),
                  window.removeEventListener("keyup", l));
              }
            );
          }, [null == V || null == (y = V.user) ? void 0 : y.role, eQ, eh]),
          (0, o.useEffect)(() => {
            var e, t;
            if (
              eQ ||
              eh ||
              (null == V || null == (e = V.user) ? void 0 : e.role) ===
                "Admin" ||
              (null == V || null == (t = V.user) ? void 0 : t.role) ===
                "SuperAdmin"
            )
              return;
            let l = window.setInterval(() => {
              l8(
                window.outerWidth - window.innerWidth > 160 ||
                  window.outerHeight - window.innerHeight > 160,
              );
            }, 500);
            return () => {
              window.clearInterval(l);
            };
          }, [null == V || null == (j = V.user) ? void 0 : j.role, eQ, eh]),
          (0, o.useEffect)(() => {
            var e;
            (null == V || null == (e = V.user) ? void 0 : e.id) &&
              fetch("/api/activity/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ page: "userDashboard", step: ez.step }),
              });
          }, [null == V || null == (S = V.user) ? void 0 : S.id, ez.step]),
          (0, o.useEffect)(() => {
            let e = K.get("autoScreenshot"),
              t = K.get("cart");
            "true" === e &&
              t &&
              (console.log(
                "⚠️ [Auto-Screenshot] Screenshot generation disabled for cart item ".concat(
                  t,
                  " - use manual method",
                ),
              ),
              window.opener &&
                window.opener.postMessage(
                  {
                    type: "SCREENSHOT_ERROR",
                    cartId: t,
                    error: "Screenshot generation disabled - use manual method",
                  },
                  window.location.origin,
                ));
          }, [K, el]));
        let l9 = async () => {
            let e,
              t = document.getElementById("drag-drop-area");
            (t instanceof HTMLElement &&
              (e = (
                await d()(t, {
                  scale: 1,
                  useCORS: !0,
                  backgroundColor: "#ffffff",
                })
              ).toDataURL("image/jpeg", 0.6)),
              el
                ? q((0, h.updateCartItem)({ id: el, screenshotDataUrl: e }))
                : q((0, h.addToCart)({ screenshotDataUrl: e })),
              l5(!0));
          },
          re = async () => {
            if (el) return void (await l9());
            if (eh && lJ && "string" == typeof lq && lq.trim().length > 0) {
              (await rt(lq), l1(lq), l$("success"), l_(!0));
              return;
            }
            (lG(""), l$("input"), l_(!0));
          },
          rt = async (e) => {
            let t,
              l = document.getElementById("drag-drop-area");
            (l instanceof HTMLElement &&
              (t = (
                await d()(l, {
                  scale: 1,
                  useCORS: !0,
                  backgroundColor: "#ffffff",
                })
              ).toDataURL("image/jpeg", 0.6)),
              q((0, h.addToCart)({ screenshotDataUrl: t, orderName: e })),
              l5(!0));
          },
          rl = async (e) => {
            var t, l, r, a, o;
            let n;
            if (!(null == V || null == (t = V.user) ? void 0 : t.email)) return;
            let s = document.getElementById("drag-drop-area");
            if (s instanceof HTMLElement) {
              n = (
                await d()(s, {
                  scale: 1,
                  useCORS: !0,
                  backgroundColor: "#ffffff",
                })
              ).toDataURL("image/jpeg", 0.6);
              try {
                let e = (e) =>
                    new Promise((t, l) => {
                      let r = new i.default();
                      ((r.crossOrigin = "anonymous"),
                        (r.onload = () => t(r)),
                        (r.onerror = l),
                        (r.src = e));
                    }),
                  t = await e(n),
                  a = tY(tI),
                  o = tY(tO),
                  s = null != (l = null != a ? a : eu) ? l : er,
                  d = null != (r = tX(o, ex, a, eu)) ? r : s,
                  c = eh && d ? d : s,
                  u = await e(c),
                  p = document.createElement("canvas");
                ((p.width = t.naturalWidth || t.width),
                  (p.height = t.naturalHeight || t.height));
                let m = p.getContext("2d");
                if (m) {
                  let e = Math.floor(0.45 * p.width),
                    l = Math.floor((u.naturalHeight / u.naturalWidth) * e),
                    r = Math.floor((p.width - e) / 2),
                    a = Math.floor((p.height - l) / 2);
                  (m.save(),
                    (m.globalAlpha = 0.1),
                    m.drawImage(u, r, a, e, l),
                    m.restore(),
                    m.drawImage(t, 0, 0, p.width, p.height),
                    (n = p.toDataURL("image/jpeg", 0.6)));
                }
              } catch (e) {}
            }
            let c = await fetch(
              et ? "/api/orders/".concat(et) : "/api/orders",
              {
                method: et ? "PUT" : "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  cartData: eU,
                  droppedItems: eF,
                  totalQty: eH,
                  screenshotDataUrl: n,
                  orderName: e,
                }),
              },
            );
            if (!c.ok) return;
            let u = await c.json();
            u.id;
            let p = u.displayId,
              m = eG,
              x = e1;
            try {
              let e = await fetch("/api/userSettings/".concat(V.user.id)).then(
                (e) => e.json(),
              );
              ((m = null != (a = e.discountPct) ? a : eG),
                (x = null != (o = e.marginPct) ? o : e1),
                eY(m),
                e2(x));
            } catch (e) {}
            let h = "SuperAdmin" === V.user.role;
            (await (0, eL._)({
              logoUrl: er,
              pdfLogoUrl: void 0,
              email: V.user.email,
              userName: V.user.name || "",
              totalQty: eH,
              cartData: eU,
              note: eU.note || "",
              totalPrice: e_,
              discountPct: m,
              marginPct: 0,
              screenshotDataUrl: n,
              orderName: e,
              orderId: p,
              hidePrices: !h && !!e5,
              priceMode: "landing",
              forceDefaultWatermark: !0,
              watermarkBehind: !0,
              disableWatermarkLogo: !1,
              panelNameOverrides: ew,
            }),
              lU(!0),
              et && Z.push("/orders"));
          },
          rr = async (e) => {
            var t, l, r, a, o, n, i, s;
            let c;
            if (!(null == V || null == (t = V.user) ? void 0 : t.email)) return;
            let u = document.getElementById("drag-drop-area");
            u instanceof HTMLElement &&
              (c = (
                await d()(u, {
                  scale: 1,
                  useCORS: !0,
                  backgroundColor: "#ffffff",
                })
              ).toDataURL("image/png"));
            let p = tY(tI),
              m = tY(tO),
              x = null != (l = null != p ? p : eu) ? l : er,
              h = null != (r = tX(m, ex, p, eu)) ? r : x,
              g = null;
            if (
              (console.log("\uD83D\uDD0D PDF Generation Debug:", {
                isForOrder: !!(null == e ? void 0 : e.forOrder),
                premiumActive: eh,
                contextPdfLogo: ex,
                contextNavLogo: eu,
                brandLogo: h,
                defaultLogo: er,
                storeLogo: p,
                storePdfLogo: m,
                logoUrl: tI,
                pdfLogoUrl: tO,
                hasPremiumBrandAccess: eh,
                hydratedBrandLogo: eo,
                hydratedPdfLogo: en,
                "brandingSettings?.logoUrl": null == ed ? void 0 : ed.logoUrl,
                "brandingSettings?.pdfLogoUrl":
                  null == ed ? void 0 : ed.pdfLogoUrl,
              }),
              null == e ? void 0 : e.forOrder)
            )
              ((g = null),
                console.log("\uD83D\uDCCB Using default logo for ORDER"));
            else if (
              (console.log(
                "\uD83D\uDCB0 Generating QUOTE - checking for premium logo",
              ),
              eh)
            ) {
              console.log("✅ User is premium active");
              let e = [
                en,
                eo,
                null == ed ? void 0 : ed.pdfLogoUrl,
                null == ed ? void 0 : ed.logoUrl,
                ex,
                eu,
                m,
                p,
                h,
              ];
              for (let t of (console.log(
                "\uD83D\uDD0D Checking logo sources with details:",
              ),
              e.forEach((e, t) => {
                console.log(
                  "  "
                    .concat(
                      [
                        "hydratedPdfLogo",
                        "hydratedBrandLogo",
                        "brandingSettings?.pdfLogoUrl",
                        "brandingSettings?.logoUrl",
                        "contextPdfLogo",
                        "contextNavLogo",
                        "storePdfLogo",
                        "storeLogo",
                        "brandLogo",
                      ][t],
                      ': "',
                    )
                    .concat(e, '" (')
                    .concat(e === er ? "DEFAULT" : e ? "CUSTOM" : "NULL", ")"),
                );
              }),
              e))
                if (t && t !== er) {
                  ((g = t),
                    console.log("✅ Using premium logo from source:", t));
                  break;
                }
              if (!g) {
                console.log(
                  "❌ No custom logo found despite being premium, using default",
                );
                let t = e.find((e) => e && "" !== e.trim() && e !== er);
                if (t)
                  ((g = t),
                    console.log(
                      "\uD83E\uDDEA TEST: Forcing use of logo for debugging:",
                      t,
                    ));
                else if (
                  (console.log(
                    "\uD83D\uDD0D Checking localStorage for logo...",
                  ),
                  null == V || null == (a = V.user) ? void 0 : a.id)
                ) {
                  try {
                    let e = "siteLogo_".concat(V.user.id),
                      t = localStorage.getItem(e);
                    if (
                      (console.log(
                        "\uD83D\uDCF1 localStorage["
                          .concat(e, ']: "')
                          .concat(t, '"'),
                      ),
                      t && t !== er)
                    )
                      ((g = t),
                        console.log(
                          "\uD83E\uDDEA USING LOGO FROM LOCALSTORAGE:",
                          t,
                        ));
                    else {
                      console.log(
                        "\uD83D\uDD0D Final check - Redux logoUrl and pdfLogoUrl:",
                        { logoUrl: tI, pdfLogoUrl: tO },
                      );
                      let e = tO || tI;
                      e &&
                        e !== er &&
                        ((g = e),
                        console.log("\uD83E\uDDEA USING LOGO FROM REDUX:", e));
                    }
                  } catch (e) {
                    console.log("❌ Failed to check localStorage:", e);
                  }
                  fetch("/api/userSettings/".concat(V.user.id))
                    .then((e) => e.json())
                    .then((e) => {
                      console.log("\uD83D\uDCCB User settings from API:", {
                        logoUrl: e.logoUrl,
                        pdfLogoUrl: e.pdfLogoUrl,
                        isPremium: e.isPremium,
                        allowPremium: e.allowPremium,
                      });
                    })
                    .catch((e) =>
                      console.log("❌ Failed to fetch user settings:", e),
                    );
                }
              }
            } else console.log("❌ User is not premium active");
            let f = eh && !(null == e ? void 0 : e.forOrder) && !!g,
              b = (f && g) || null != g ? g : x,
              y = null != g ? g : void 0,
              v = await (0, eL._)({
                logoUrl: b,
                pdfLogoUrl: y,
                email: V.user.email,
                userName: V.user.name || "",
                totalQty: eH,
                cartData: eU,
                note: eU.note || "",
                totalPrice: e_,
                discountPct: eG,
                marginPct: ld ? e1 : 0,
                screenshotDataUrl: c,
                orderName: eU.orderName || "",
                download: !1,
                watermarkText: eh ? void 0 : "order preview",
                disableWatermarkLogo: eh,
                disclaimerOverride: eh
                  ? "Note: Prices are tentative as this system is under experimental stage. Final product prices must be\nconfirmed with us before placing the order."
                  : void 0,
                hidePrices: !ee && !!e5,
                priceMode: (null == e ? void 0 : e.forOrder)
                  ? "landing"
                  : "total",
                panelNameOverrides: ew,
                premiumQuoteMode: f,
                quoteTerms: (null == e ? void 0 : e.forOrder) ? null : e9,
                bankDetails: (null == e ? void 0 : e.forOrder) ? {} : tt,
                showBankDetails: (null == e || !e.forOrder) && tr,
                forceDefaultWatermark: !!(null == e ? void 0 : e.forOrder),
                watermarkBehind: !!(null == e ? void 0 : e.forOrder),
                couponCode: null == to ? void 0 : to.code,
                couponDiscountAmount:
                  null != (o = null == to ? void 0 : to.calculatedDiscount)
                    ? o
                    : 0,
                couponDiscountType: null == to ? void 0 : to.discountType,
                couponDiscountValue: null == to ? void 0 : to.discountValue,
              });
            try {
              let t = new Blob([v], { type: "application/pdf" }),
                l =
                  eU.orderName && eU.orderName.trim().length > 0
                    ? "".concat(eU.orderName.trim(), ".pdf")
                    : eh
                      ? (null == e ? void 0 : e.forOrder)
                        ? "Order Preview.pdf"
                        : "Quote.pdf"
                      : (null == e ? void 0 : e.forOrder)
                        ? "Order Preview.pdf"
                        : "Preview.pdf",
                r = [
                  (null == (n = eU.panel) ? void 0 : n.item) || "",
                  (null == (i = eU.material) ? void 0 : i.item) || "",
                  (null == (s = eU.size) ? void 0 : s.item) || "",
                ].filter(Boolean);
              (tc(t),
                tm(l),
                th(
                  (null == e ? void 0 : e.forOrder)
                    ? "Order Preview"
                    : eh
                      ? "Quote Preview"
                      : "PDF Preview",
                ),
                tb(r.join(" | ") || void 0),
                ts(!0),
                tv(!1),
                tw(!!(null == e ? void 0 : e.forOrder)));
            } catch (e) {}
          },
          ra = async () => {
            var e, t, l, r, a, o, n, i;
            let s;
            if (!(null == V || null == (e = V.user) ? void 0 : e.email)) return;
            let c = document.getElementById("drag-drop-area");
            c instanceof HTMLElement &&
              (s = (
                await d()(c, {
                  scale: 1,
                  useCORS: !0,
                  backgroundColor: "#ffffff",
                })
              ).toDataURL("image/png"));
            let u = tY(tI),
              p = tY(tO),
              m = null != (o = null != u ? u : eu) ? o : er,
              x = null != (n = tX(p, ex, u, eu)) ? n : m,
              h = null;
            if (
              (console.log(
                "\uD83D\uDD0D Legacy PDF Generation - checking for premium logo",
              ),
              eh)
            ) {
              for (let e of (console.log(
                "✅ User is premium active for legacy PDF",
              ),
              [
                en,
                eo,
                null == ed ? void 0 : ed.pdfLogoUrl,
                null == ed ? void 0 : ed.logoUrl,
                ex,
                eu,
                p,
                u,
                x,
              ]))
                if (e && e !== er) {
                  ((h = e),
                    console.log("✅ Using premium logo for legacy PDF:", e));
                  break;
                }
              if (
                !h &&
                (console.log(
                  "❌ No custom logo found for legacy PDF, checking localStorage...",
                ),
                null == V || null == (i = V.user) ? void 0 : i.id)
              )
                try {
                  let e = "siteLogo_".concat(V.user.id),
                    t = localStorage.getItem(e);
                  t &&
                    t !== er &&
                    ((h = t),
                    console.log(
                      "\uD83E\uDDEA Using logo from localStorage for legacy PDF:",
                      t,
                    ));
                } catch (e) {
                  console.log(
                    "❌ Failed to check localStorage for legacy PDF:",
                    e,
                  );
                }
            } else console.log("❌ User is not premium active for legacy PDF");
            let g = eh && !!h,
              f = (g && h) || null != h ? h : m,
              b = null != h ? h : void 0,
              y =
                "string" == typeof (null == (t = eU.panel) ? void 0 : t.item) &&
                "string" == typeof ew[eU.panel.item] &&
                ew[eU.panel.item].trim()
                  ? ew[eU.panel.item].trim()
                  : (null == (l = eU.panel) ? void 0 : l.item) || "",
              v = await (0, eV.P)({
                logoUrl: f,
                pdfLogoUrl: b,
                cartData: eU,
                screenshotDataUrl: s,
                download: !1,
                title: [
                  y,
                  (null == (r = eU.material) ? void 0 : r.item) || "",
                  (null == (a = eU.size) ? void 0 : a.item) || "",
                ]
                  .filter(Boolean)
                  .join(" | "),
                premiumQuoteMode: g,
                panelNameOverrides: ew,
              });
            try {
              let e = new Blob([v], { type: "application/pdf" });
              (tc(e), tv(!0));
            } catch (e) {}
          },
          ro = () => {
            (lU(!1), q((0, x.EY)(eP[0])), q((0, h.clearCartItem)(ez.step)));
          };
        function rn(e, t) {
          let l = [],
            r = Math.ceil(e.length / t);
          for (let a = 0; a < t; a++) l.push(e.slice(a * r, (a + 1) * r));
          return l;
        }
        let ri = ["1", "2", "3"];
        return (0, a.jsxs)(a.Fragment, {
          children: [
            lE
              ? (0, a.jsx)(eS, {})
              : (0, a.jsxs)("div", {
                  className: "flex min-h-[500px] flex-col",
                  children: [
                    (0, a.jsx)(tA, {}),
                    (0, a.jsxs)("div", {
                      className: "mb-4 flex flex-wrap items-center gap-4 px-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(tq, {
                              checked: tL,
                              onChange: () => q((0, x.Dg)()),
                            }),
                            (0, a.jsx)("span", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "Auto-select Next",
                            }),
                          ],
                        }),

                        eh &&
                          !$ &&
                          tS &&
                          8 === ez.stepNo &&
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(tq, { checked: e$, onChange: lx }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-xl font-semibold text-gray-800",
                                children: "Enable Margin",
                              }),
                            ],
                          }),
                        eh &&
                          !$ &&
                          tS &&
                          7 === ez.stepNo &&
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(tq, { checked: tk, onChange: lh }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-xl font-semibold text-gray-800",
                                children: "Margin Editor",
                              }),
                              tk &&
                                (0, a.jsx)("input", {
                                  type: "number",
                                  min: 0,
                                  step: 0.5,
                                  value: e1,
                                  onChange: (e) => {
                                    let t = Math.max(
                                      0,
                                      Number(e.target.value) || 0,
                                    );
                                    e2(t);
                                    try {
                                      var l;
                                      (null == V || null == (l = V.user)
                                        ? void 0
                                        : l.id) &&
                                        (localStorage.setItem(
                                          "marginPct_".concat(V.user.id),
                                          String(t),
                                        ),
                                        fetch(
                                          "/api/userSettings/".concat(
                                            V.user.id,
                                          ),
                                          {
                                            method: "PATCH",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              marginPct: t,
                                            }),
                                          },
                                        ));
                                    } catch (e) {}
                                  },
                                  className:
                                    "border rounded p-1 w-20 text-right",
                                }),
                            ],
                          }),
                      ],
                    }),
                    ee &&
                      tE &&
                      (0, a.jsx)("div", {
                        className: "px-4",
                        children: (0, a.jsx)(tR, {}),
                      }),
                    !ee &&
                      tP &&
                      (0, a.jsx)("div", {
                        className: "px-4",
                        children: (0, a.jsxs)("div", {
                          className:
                            "relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-700 p-[1px] shadow-2xl",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute -right-16 -top-20 h-44 w-44 rounded-full bg-white/15 blur-3xl",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute -left-20 bottom-[-56px] h-44 w-44 rounded-full bg-blue-400/25 blur-3xl",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative flex flex-col gap-4 rounded-2xl bg-white/95 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex items-start gap-3",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-700 text-white shadow-lg ring-2 ring-indigo-100",
                                      children: (0, a.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.6",
                                        children: [
                                          (0, a.jsx)("rect", {
                                            x: "5",
                                            y: "5",
                                            width: "14",
                                            height: "14",
                                            rx: "3",
                                          }),
                                          (0, a.jsx)("path", {
                                            d: "M9 9h6v6H9z",
                                          }),
                                          (0, a.jsx)("path", {
                                            d: "M12 3v2M12 19v2M3 12h2M19 12h2M7 3v2M17 3v2M7 19v2M17 19v2M3 7h2M3 17h2M19 7h2M19 17h2",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "space-y-1",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600",
                                          children: "Auto (AI) Mode",
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-lg font-semibold text-slate-900",
                                          children: "Coming soon",
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "text-sm text-slate-600",
                                          children:
                                            "We're polishing AI-assisted layouts. For now, keep building with the manual designer - your current flow stays exactly the same.",
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-sm font-semibold text-slate-800",
                                          children:
                                            "Beta access will open to Premium users first.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start gap-2 sm:items-end",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm",
                                      children: "Coming soon",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm",
                                      children: "Premium beta first",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg",
                                      children: "Manual builder is live",
                                    }),
                                    (0, a.jsx)("button", {
                                      type: "button",
                                      onClick: t7,
                                      className:
                                        "mt-2 rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50",
                                      children: "Hide this",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    (0, a.jsx)(eg, {}),
                    (0, a.jsxs)("div", {
                      className: "flex-1",
                      children: [
                        5 === ez.stepNo &&
                          (0, a.jsxs)("div", {
                            className:
                              "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "relative w-full sm:max-w-xl",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400",
                                    children: (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "h-4 w-4",
                                      viewBox: "0 0 24 24",
                                      fill: "currentColor",
                                      children: (0, a.jsx)("path", {
                                        d: "M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.71.71l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 15a5 5 0 110-10 5 5 0 010 10z",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("input", {
                                    type: "text",
                                    value: tZ,
                                    onChange: (e) => tK(e.target.value),
                                    placeholder:
                                      "Search icons by name or number",
                                    className:
                                      "w-full rounded-full border border-gray-300 bg-white py-2 pl-11 pr-12 text-sm text-gray-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  }),
                                  lo &&
                                    (0, a.jsx)("button", {
                                      type: "button",
                                      onClick: () => tK(""),
                                      className:
                                        "absolute inset-y-0 right-3 flex items-center text-gray-400 transition hover:text-gray-600 focus:outline-none",
                                      "aria-label": "Clear icon search",
                                      children: (0, a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: (0, a.jsx)("path", {
                                          d: "M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.41L10.59 12l-4.9 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.9a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("a", {
                                href: "https://drive.google.com/file/d/1KEEj-v3Kad7Cqd7h3HxJ3tuS8mfInEEO/view?usp=sharing",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                children: [
                                  (0, a.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, a.jsx)("path", {
                                      d: "M12 16l4-5h-3V4h-2v7H8l4 5zm6 2v2H6v-2H4v4h16v-4h-2z",
                                    }),
                                  }),
                                  "Download Icons List",
                                ],
                              }),
                            ],
                          }),
                        lz.length > 0 &&
                          (0, a.jsx)("div", {
                            className: "mb-5",
                            children: (0, a.jsx)(eb, {
                              optionTypes: lz,
                              value: lI,
                              onOptionTypeChange: lO,
                            }),
                          }),
                        ez.stepNo <= 3 &&
                          (0, a.jsx)("div", {
                            className:
                              "app-grey inline-flex flex-wrap justify-center rounded-xl p-1 ".concat(
                                3 === ez.stepNo &&
                                  ((lf && ("5" === lb || "6" === lb)) ||
                                    ri.includes(null == lg ? void 0 : lg.id))
                                  ? "gap-6 pr-5"
                                  : "gap-3",
                              ),
                            children:
                              lf && 3 === ez.stepNo
                                ? "5" === lb
                                  ? rn(lj, 2).map((e, t) =>
                                      (0, a.jsx)(
                                        "div",
                                        {
                                          className:
                                            "mb-3 flex w-full flex-wrap justify-center gap-6",
                                          children: e.map((e) => {
                                            let t = e.extraOptions || [],
                                              l = Object.keys(e).find((e) =>
                                                e.startsWith("Size"),
                                              ),
                                              r = lN[e.id] || e.id,
                                              o = [
                                                {
                                                  label: e[l],
                                                  id: e.id,
                                                  price: e.price,
                                                },
                                                ...t.map((e) => ({
                                                  label: e[l],
                                                  id: e.id,
                                                  price: e.price,
                                                })),
                                              ],
                                              n = o.find((e) => e.id === r),
                                              s = tG(n.label);
                                            return (0, a.jsxs)(
                                              "div",
                                              {
                                                style: {
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  alignItems: "center",
                                                },
                                                children: [
                                                  (0, a.jsxs)("div", {
                                                    onClick: () => {
                                                      (q(
                                                        (0, h.addOrUpdateSize)({
                                                          id: n.id,
                                                          item: n.label,
                                                          price: n.price,
                                                        }),
                                                      ),
                                                        q(
                                                          (0, f.AQ)(
                                                            (0, b.wq)(n.label),
                                                          ),
                                                        ),
                                                        q((0, f.nI)()),
                                                        q(
                                                          (0,
                                                          h.resetAccessory)(),
                                                        ),
                                                        q((0, x.iY)(!1)),
                                                        tL && q((0, x.sk)(eU)));
                                                    },
                                                    style: {
                                                      minWidth: "200px",
                                                      width: "auto",
                                                      maxWidth: "100%",
                                                      padding: "1.25rem 2rem",
                                                      background: "#fff",
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      alignItems: "flex-start",
                                                    },
                                                    className:
                                                      "rounded-lg border shadow-md transition-transform duration-150 ease-in-out hover:scale-105 hover:border-blue-600 active:scale-95 active:border-blue-600",
                                                    id:
                                                      "6 Module" === n.label
                                                        ? "tour-size-6-module"
                                                        : void 0,
                                                    children: [
                                                      (0, a.jsx)("p", {
                                                        className:
                                                          "font-semibold text-gray-500 sm:text-xs lg:text-sm",
                                                        children: l,
                                                      }),
                                                      (0, a.jsxs)("h2", {
                                                        className:
                                                          "flex items-center whitespace-nowrap font-bold leading-8 sm:text-lg lg:text-3xl",
                                                        style: {
                                                          color: "#111",
                                                        },
                                                        children: [
                                                          n.label,
                                                          (0, a.jsx)("span", {
                                                            className:
                                                              "ml-2 flex-shrink-0",
                                                            style: {
                                                              lineHeight: 0,
                                                              display:
                                                                "inline-block",
                                                            },
                                                            children: (0,
                                                            a.jsx)(i.default, {
                                                              src: s,
                                                              alt: "",
                                                              width: 24,
                                                              height: 24,
                                                              style: {
                                                                maxHeight:
                                                                  "1.2em",
                                                                width: "auto",
                                                                height: "auto",
                                                              },
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  t.length > 0 &&
                                                    (0, a.jsxs)("select", {
                                                      className:
                                                        "mt-2 w-full rounded border border-gray-300 bg-white px-3 py-1 shadow-sm focus:ring-2 focus:ring-indigo-500",
                                                      value: r,
                                                      onChange: (t) => {
                                                        lk(
                                                          e.id,
                                                          t.target.value,
                                                        );
                                                        let l = o.find(
                                                          (e) =>
                                                            e.id ===
                                                            t.target.value,
                                                        );
                                                        (q(
                                                          (0,
                                                          h.addOrUpdateSize)({
                                                            id: l.id,
                                                            item: l.label,
                                                            price: l.price,
                                                          }),
                                                        ),
                                                          q(
                                                            (0, f.AQ)(
                                                              (0, b.wq)(
                                                                l.label,
                                                              ),
                                                            ),
                                                          ),
                                                          q((0, f.nI)()),
                                                          q(
                                                            (0,
                                                            h.resetAccessory)(),
                                                          ),
                                                          q((0, x.iY)(!1)));
                                                      },
                                                      style: {
                                                        minWidth: "180px",
                                                        maxWidth: "250px",
                                                      },
                                                      children: [
                                                        (0, a.jsx)("option", {
                                                          value: e.id,
                                                          children: e[l],
                                                        }),
                                                        t.map((e) =>
                                                          (0, a.jsx)(
                                                            "option",
                                                            {
                                                              value: e.id,
                                                              children: e[l],
                                                            },
                                                            e.id,
                                                          ),
                                                        ),
                                                      ],
                                                    }),
                                                ],
                                              },
                                              e.id,
                                            );
                                          }),
                                        },
                                        t,
                                      ),
                                    )
                                  : lw.map((e) => {
                                      let t = Object.keys(e).find((e) =>
                                          e.startsWith("Size"),
                                        ),
                                        l = tG(e[t]);
                                      return (0, a.jsxs)(
                                        "div",
                                        {
                                          onClick: () => {
                                            (q(
                                              (0, h.addOrUpdateSize)({
                                                id: e.id,
                                                item: e[t],
                                                price: e.price,
                                              }),
                                            ),
                                              q((0, f.AQ)((0, b.wq)(e[t]))),
                                              q((0, f.nI)()),
                                              q((0, h.resetAccessory)()),
                                              q((0, x.iY)(!1)),
                                              tL && q((0, x.sk)(eU)));
                                          },
                                          style: {
                                            minWidth: "200px",
                                            width: "auto",
                                            maxWidth: "100%",
                                            padding: "1.25rem 2rem",
                                            background: "#fff",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            margin: "0 12px 16px 0",
                                          },
                                          className:
                                            "rounded-lg border shadow-md transition-transform duration-150 ease-in-out hover:scale-105 hover:border-blue-600 active:scale-95 active:border-blue-600",
                                          id:
                                            "6 Module" === e[t]
                                              ? "tour-size-6-module"
                                              : void 0,
                                          children: [
                                            (0, a.jsx)("p", {
                                              className:
                                                "font-semibold text-gray-500 sm:text-xs lg:text-sm",
                                              children: t,
                                            }),
                                            (0, a.jsxs)("h2", {
                                              className:
                                                "flex items-center whitespace-nowrap font-bold leading-8 sm:text-lg lg:text-3xl",
                                              style: { color: "#111" },
                                              children: [
                                                e[t],
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "ml-2 flex-shrink-0",
                                                  style: {
                                                    lineHeight: 0,
                                                    display: "inline-block",
                                                  },
                                                  children: (0, a.jsx)(
                                                    i.default,
                                                    {
                                                      src: l,
                                                      alt: "",
                                                      width: 24,
                                                      height: 24,
                                                      style: {
                                                        maxHeight: "1.2em",
                                                        width: "auto",
                                                        height: "auto",
                                                      },
                                                    },
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id,
                                      );
                                    })
                                : ri.includes(null == lg ? void 0 : lg.id) &&
                                    3 === ez.stepNo
                                  ? "6" === lb
                                    ? lw
                                        .filter((e) =>
                                          ["7", "8", "9", "31", "11"].includes(
                                            e.id,
                                          ),
                                        )
                                        .map((e) => {
                                          let t = Object.keys(e).find((e) =>
                                              e.startsWith("Size"),
                                            ),
                                            l = tG(e[t]);
                                          return (0, a.jsxs)(
                                            "div",
                                            {
                                              onClick: () => {
                                                (q(
                                                  (0, h.addOrUpdateSize)({
                                                    id: e.id,
                                                    item: e[t],
                                                    price: e.price,
                                                  }),
                                                ),
                                                  q((0, f.AQ)((0, b.wq)(e[t]))),
                                                  q((0, f.nI)()),
                                                  q((0, h.resetAccessory)()),
                                                  q((0, x.iY)(!1)),
                                                  tL && q((0, x.sk)(eU)));
                                              },
                                              style: {
                                                minWidth: "200px",
                                                width: "auto",
                                                maxWidth: "100%",
                                                padding: "1.25rem 2rem",
                                                background: "#fff",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                margin: "0 12px 16px 0",
                                              },
                                              className:
                                                "rounded-lg border shadow-md transition-transform duration-150 ease-in-out hover:scale-105 hover:border-blue-600 active:scale-95 active:border-blue-600",
                                              id:
                                                "6 Module" === e[t]
                                                  ? "tour-size-6-module"
                                                  : void 0,
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className:
                                                    "font-semibold text-gray-500 sm:text-xs lg:text-sm",
                                                  children: t,
                                                }),
                                                (0, a.jsxs)("h2", {
                                                  className:
                                                    "flex items-center whitespace-nowrap font-bold leading-8 sm:text-lg lg:text-3xl",
                                                  style: { color: "#111" },
                                                  children: [
                                                    e[t],
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "ml-2 flex-shrink-0",
                                                      style: {
                                                        lineHeight: 0,
                                                        display: "inline-block",
                                                      },
                                                      children: (0, a.jsx)(
                                                        i.default,
                                                        {
                                                          src: l,
                                                          alt: "",
                                                          width: 24,
                                                          height: 24,
                                                          style: {
                                                            maxHeight: "1.2em",
                                                            width: "auto",
                                                            height: "auto",
                                                          },
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            e.id,
                                          );
                                        })
                                    : rn(lj, 2).map((e, t) =>
                                        (0, a.jsx)(
                                          "div",
                                          {
                                            className:
                                              "mb-3 flex w-full flex-wrap justify-center gap-6",
                                            children: e.map((e) => {
                                              let t = e.extraOptions || [],
                                                l = Object.keys(e).find((e) =>
                                                  e.startsWith("Size"),
                                                ),
                                                r = lN[e.id] || e.id,
                                                o = [
                                                  {
                                                    label: e[l],
                                                    id: e.id,
                                                    price: e.price,
                                                  },
                                                  ...t.map((e) => ({
                                                    label: e[l],
                                                    id: e.id,
                                                    price: e.price,
                                                  })),
                                                ],
                                                n = o.find((e) => e.id === r),
                                                s = tG(n.label);
                                              return (0, a.jsxs)(
                                                "div",
                                                {
                                                  style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                  },
                                                  children: [
                                                    (0, a.jsxs)("div", {
                                                      onClick: () => {
                                                        (q(
                                                          (0,
                                                          h.addOrUpdateSize)({
                                                            id: n.id,
                                                            item: n.label,
                                                            price: n.price,
                                                          }),
                                                        ),
                                                          q(
                                                            (0, f.AQ)(
                                                              (0, b.wq)(
                                                                n.label,
                                                              ),
                                                            ),
                                                          ),
                                                          q((0, f.nI)()),
                                                          q(
                                                            (0,
                                                            h.resetAccessory)(),
                                                          ),
                                                          q((0, x.iY)(!1)),
                                                          tL &&
                                                            q((0, x.sk)(eU)));
                                                      },
                                                      style: {
                                                        minWidth: "200px",
                                                        width: "auto",
                                                        maxWidth: "100%",
                                                        padding: "1.25rem 2rem",
                                                        background: "#fff",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems:
                                                          "flex-start",
                                                      },
                                                      className:
                                                        "rounded-lg border shadow-md transition-transform duration-150 ease-in-out hover:scale-105 hover:border-blue-600 active:scale-95 active:border-blue-600",
                                                      id:
                                                        "6 Module" === n.label
                                                          ? "tour-size-6-module"
                                                          : void 0,
                                                      children: [
                                                        (0, a.jsx)("p", {
                                                          className:
                                                            "font-semibold text-gray-500 sm:text-xs lg:text-sm",
                                                          children: l,
                                                        }),
                                                        (0, a.jsxs)("h2", {
                                                          className:
                                                            "flex items-center whitespace-nowrap font-bold leading-8 sm:text-lg lg:text-3xl",
                                                          style: {
                                                            color: "#111",
                                                          },
                                                          children: [
                                                            n.label,
                                                            (0, a.jsx)("span", {
                                                              className:
                                                                "ml-2 flex-shrink-0",
                                                              style: {
                                                                lineHeight: 0,
                                                                display:
                                                                  "inline-block",
                                                              },
                                                              children: (0,
                                                              a.jsx)(
                                                                i.default,
                                                                {
                                                                  src: s,
                                                                  alt: "",
                                                                  width: 24,
                                                                  height: 24,
                                                                  style: {
                                                                    maxHeight:
                                                                      "1.2em",
                                                                    width:
                                                                      "auto",
                                                                    height:
                                                                      "auto",
                                                                  },
                                                                },
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    t.length > 0 &&
                                                      (0, a.jsxs)("select", {
                                                        className:
                                                          "mt-2 w-full rounded border border-gray-300 bg-white px-3 py-1 shadow-sm focus:ring-2 focus:ring-indigo-500",
                                                        value: r,
                                                        onChange: (t) => {
                                                          lk(
                                                            e.id,
                                                            t.target.value,
                                                          );
                                                          let l = o.find(
                                                            (e) =>
                                                              e.id ===
                                                              t.target.value,
                                                          );
                                                          (q(
                                                            (0,
                                                            h.addOrUpdateSize)({
                                                              id: l.id,
                                                              item: l.label,
                                                              price: l.price,
                                                            }),
                                                          ),
                                                            q(
                                                              (0, f.AQ)(
                                                                (0, b.wq)(
                                                                  l.label,
                                                                ),
                                                              ),
                                                            ),
                                                            q((0, f.nI)()),
                                                            q(
                                                              (0,
                                                              h.resetAccessory)(),
                                                            ),
                                                            q((0, x.iY)(!1)));
                                                        },
                                                        style: {
                                                          minWidth: "180px",
                                                          maxWidth: "250px",
                                                        },
                                                        children: [
                                                          (0, a.jsx)("option", {
                                                            value: e.id,
                                                            children: e[l],
                                                          }),
                                                          t.map((e) =>
                                                            (0, a.jsx)(
                                                              "option",
                                                              {
                                                                value: e.id,
                                                                children: e[l],
                                                              },
                                                              e.id,
                                                            ),
                                                          ),
                                                        ],
                                                      }),
                                                  ],
                                                },
                                                e.id,
                                              );
                                            }),
                                          },
                                          t,
                                        ),
                                      )
                                  : ez.options.map((e) => {
                                      var t, l;
                                      let r, o;
                                      if (
                                        ("Panel" === ez.step &&
                                        Object.values(e).includes("Royal Edge")
                                          ? (r = "tour-panel-royal-edge")
                                          : "Material" === ez.step &&
                                              Object.values(e).includes(
                                                "Acrylic",
                                              )
                                            ? (r = "tour-material-acrylic")
                                            : "Size" === ez.step &&
                                              Object.values(e).includes(
                                                "6 Module",
                                              ) &&
                                              (r = "tour-size-6-module"),
                                        "Panel" === ez.step)
                                      ) {
                                        let l = Object.entries(e).find((e) => {
                                            let [t] = e;
                                            return (
                                              "id" !== t &&
                                              "price" !== t &&
                                              "color" !== t
                                            );
                                          }),
                                          r =
                                            l &&
                                            ("string" == typeof l[1] ||
                                              "number" == typeof l[1] ||
                                              "boolean" == typeof l[1])
                                              ? String(l[1])
                                              : "";
                                        o = null != (t = ew[r]) ? t : r;
                                      }
                                      return (0, a.jsx)(
                                        v,
                                        {
                                          data: {
                                            ...e,
                                            ...(o ? { displayValue: o } : {}),
                                            price:
                                              null != (l = ls[e.id])
                                                ? l
                                                : e.price,
                                          },
                                          currentOptionType: lI,
                                          tourId: r,
                                        },
                                        e.id,
                                      );
                                    }),
                          }),
                        ez.stepNo > 3 &&
                          (0, a.jsx)("div", {
                            className:
                              "flex items-start sm:flex-col sm:gap-5 xl:flex-row xl:gap-10",
                            children:
                              7 === ez.stepNo
                                ? (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-1 flex-col items-center",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "inline-block rounded-xl canvas-shadow",
                                        children: (0, a.jsx)(eN.Ay, {}),
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "app-grey mt-6 inline-flex flex-wrap justify-center gap-3 rounded-xl p-1",
                                        children: [
                                          {
                                            label: "Remote Based",
                                            id: "tech1",
                                            price: 0,
                                          },
                                          {
                                            label: "Wi-Fi",
                                            id: "tech2",
                                            price: 1700,
                                          },
                                          {
                                            label: "Zigbee",
                                            id: "tech3",
                                            price: 3e3,
                                          },
                                        ].map((e, t) => {
                                          var l;
                                          return (0, a.jsxs)(
                                            "div",
                                            {
                                              id:
                                                "Zigbee" === e.label
                                                  ? "tour-technology-zigbee"
                                                  : void 0,
                                              onClick: () => {
                                                lS ||
                                                  (q(
                                                    (0,
                                                    h.addOrUpdateTechnology)({
                                                      id: e.id,
                                                      item: e.label,
                                                      price: e.price,
                                                    }),
                                                  ),
                                                  q((0, x.iY)(!1)));
                                              },
                                              className:
                                                "cursor-pointer rounded-lg border p-4 shadow-md "
                                                  .concat(
                                                    (null == (l = eU.technology)
                                                      ? void 0
                                                      : l.id) === e.id
                                                      ? "scale-105 border-blue-600"
                                                      : "hover:border-blue-600",
                                                    " ",
                                                  )
                                                  .concat(
                                                    lS
                                                      ? "pointer-events-none opacity-50"
                                                      : "",
                                                  ),
                                              style: { minWidth: "160px" },
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className:
                                                    "font-semibold text-gray-500",
                                                  children: "Technology",
                                                }),
                                                (0, a.jsx)("h2", {
                                                  className:
                                                    "whitespace-nowrap font-bold",
                                                  children: e.label,
                                                }),
                                              ],
                                            },
                                            e.id,
                                          );
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      7 !== ez.stepNo &&
                                        8 !== ez.stepNo &&
                                        (0, a.jsxs)("div", {
                                          className: "flex-none xl:w-1/3",
                                          children: [
                                            5 === ez.stepNo &&
                                              lI === lP &&
                                              (0, a.jsx)("div", {
                                                className:
                                                  "mb-4 flex justify-center",
                                                children: (0, a.jsx)(m, {
                                                  onUpload: (e) =>
                                                    q((0, p.A0)(e)),
                                                }),
                                              }),
                                            5 !== ez.stepNo
                                              ? (0, a.jsx)("div", {
                                                  className:
                                                    "app-grey inline-flex flex-wrap justify-center gap-2 rounded-xl p-1",
                                                  children: (() => {
                                                    let e = ln.find(
                                                      (e) =>
                                                        e.optionType === lI,
                                                    );
                                                    if (!e) return null;
                                                    let t =
                                                        4 === ez.stepNo &&
                                                        "2 Modular" === lI,
                                                      l = e.options;
                                                    return (
                                                      t &&
                                                        ("Acrylic" !== ly &&
                                                          "4 Module 1 Socket" !==
                                                            lv &&
                                                          "6 Module 1 Socket" !==
                                                            lv &&
                                                          "6 Module 2 Socket" !==
                                                            lv &&
                                                          (l = l.filter(
                                                            (e) =>
                                                              "3 Pin Socket" !==
                                                                e[lI] &&
                                                              "Universal Socket" !==
                                                                e[lI] &&
                                                              "USB-Type C" !==
                                                                e[lI] &&
                                                              "16A Socket" !==
                                                                e[lI],
                                                          )),
                                                        (null == lg
                                                          ? void 0
                                                          : lg.item) ===
                                                          "Royal Edge" &&
                                                          (l = l.filter(
                                                            (e) =>
                                                              "USB-Type C" !==
                                                              e[lI],
                                                          ))),
                                                      l.map((e) => {
                                                        var t;
                                                        let l;
                                                        return (
                                                          "Accessories" ===
                                                          ez.step
                                                            ? Object.values(
                                                                e,
                                                              ).includes(
                                                                "Curtain",
                                                              )
                                                              ? (l =
                                                                  "tour-accessory-curtain")
                                                              : Object.values(
                                                                  e,
                                                                ).includes(
                                                                  "4 Switch + 1 Fan",
                                                                ) &&
                                                                (l =
                                                                  "tour-accessory-4switch1fan")
                                                            : "Color" ===
                                                                ez.step &&
                                                              ("Material Color" ===
                                                                lI &&
                                                              Object.values(
                                                                e,
                                                              ).includes(
                                                                "Black",
                                                              )
                                                                ? (l =
                                                                    "tour-color-material-black")
                                                                : "Frame Color" ===
                                                                    lI &&
                                                                  Object.values(
                                                                    e,
                                                                  ).includes(
                                                                    "Gold",
                                                                  ) &&
                                                                  (l =
                                                                    "tour-color-frame-gold")),
                                                          (0, a.jsx)(
                                                            v,
                                                            {
                                                              data: {
                                                                ...e,
                                                                price:
                                                                  null !=
                                                                  (t = ls[e.id])
                                                                    ? t
                                                                    : e.price,
                                                              },
                                                              currentOptionType:
                                                                lI,
                                                              tourId: l,
                                                              small: !0,
                                                            },
                                                            e.id,
                                                          )
                                                        );
                                                      })
                                                    );
                                                  })(),
                                                })
                                              : (0, a.jsx)("div", {
                                                  id: "icons-layer",
                                                  className:
                                                    "app-grey mt-3 inline-flex flex-wrap justify-center gap-3 rounded-xl p-1",
                                                  children:
                                                    lI === lP
                                                      ? lr.length > 0
                                                        ? lr.map((e) => {
                                                            let t = tU === e.id,
                                                              l =
                                                                "string" ==
                                                                  typeof (null ==
                                                                  e
                                                                    ? void 0
                                                                    : e.name) &&
                                                                e.name.trim()
                                                                  .length > 0
                                                                  ? e.name
                                                                  : "icon";
                                                            return (0, a.jsxs)(
                                                              "div",
                                                              {
                                                                className:
                                                                  "relative inline-block",
                                                                style: {
                                                                  margin: 4,
                                                                },
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    ey.A,
                                                                    {
                                                                      data: e,
                                                                      currentOptionType:
                                                                        "My Icons",
                                                                      disableMargin:
                                                                        !0,
                                                                    },
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    "button",
                                                                    {
                                                                      type: "button",
                                                                      className:
                                                                        "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-red-600 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 ".concat(
                                                                          t
                                                                            ? "cursor-wait opacity-60"
                                                                            : "hover:bg-red-600 hover:text-white",
                                                                        ),
                                                                      "aria-label":
                                                                        "Delete ".concat(
                                                                          l,
                                                                        ),
                                                                      title:
                                                                        "Delete ".concat(
                                                                          l,
                                                                        ),
                                                                      disabled:
                                                                        t,
                                                                      onClick: (
                                                                        t,
                                                                      ) => {
                                                                        (t.preventDefault(),
                                                                          t.stopPropagation(),
                                                                          t9(
                                                                            e.id,
                                                                          ));
                                                                      },
                                                                      onMouseDown:
                                                                        (e) => {
                                                                          (e.preventDefault(),
                                                                            e.stopPropagation());
                                                                        },
                                                                      onTouchStart:
                                                                        (e) => {
                                                                          e.stopPropagation();
                                                                        },
                                                                      children:
                                                                        t
                                                                          ? "..."
                                                                          : "X",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                              e.id,
                                                            );
                                                          })
                                                        : lo
                                                          ? (0, a.jsx)("span", {
                                                              className:
                                                                "px-3 py-2 text-sm text-gray-500",
                                                              children:
                                                                'No icons found for "'.concat(
                                                                  la,
                                                                  '".',
                                                                ),
                                                            })
                                                          : (0, a.jsx)("span", {
                                                              className:
                                                                "px-3 py-2 text-sm text-gray-500",
                                                              children:
                                                                "No custom icons yet.",
                                                            })
                                                      : (() => {
                                                          var e;
                                                          let t = ln.find(
                                                              (e) =>
                                                                e.optionType ===
                                                                lI,
                                                            ),
                                                            l =
                                                              null !=
                                                              (e =
                                                                null == t
                                                                  ? void 0
                                                                  : t.options)
                                                                ? e
                                                                : [];
                                                          return 0 === l.length
                                                            ? lo
                                                              ? (0, a.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "px-3 py-2 text-sm text-gray-500",
                                                                    children:
                                                                      'No icons found for "'.concat(
                                                                        la,
                                                                        '".',
                                                                      ),
                                                                  },
                                                                )
                                                              : null
                                                            : l.map((e, t) =>
                                                                (0, a.jsx)(
                                                                  ey.A,
                                                                  {
                                                                    data: e,
                                                                    currentOptionType:
                                                                      lI,
                                                                    tourId:
                                                                      0 === t
                                                                        ? "tour-icon-drag"
                                                                        : void 0,
                                                                  },
                                                                  e.id,
                                                                ),
                                                              );
                                                        })(),
                                                }),
                                          ],
                                        }),
                                      8 === ez.stepNo
                                        ? (0, a.jsxs)("div", {
                                            className:
                                              "flex w-full flex-col items-start xl:flex-row",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "flex grow justify-center",
                                                children: (0, a.jsx)("div", {
                                                  className:
                                                    "inline-block rounded-xl",
                                                  children: (0, a.jsx)(
                                                    eN.Ay,
                                                    {},
                                                  ),
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "mt-4 w-full max-w-md xl:mt-0 xl:ml-4",
                                                children: [
                                                  eh &&
                                                    !$ &&
                                                    tS &&
                                                    e$ &&
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "mb-2 rounded-xl bg-white shadow p-3",
                                                      children: (0, a.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-center justify-between",
                                                          children: [
                                                            (0, a.jsx)("span", {
                                                              className:
                                                                "text-sm font-medium text-gray-700",
                                                              children:
                                                                "Margin %",
                                                            }),
                                                            (0, a.jsx)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                min: 0,
                                                                step: 0.5,
                                                                value: e1,
                                                                onChange: (
                                                                  e,
                                                                ) => {
                                                                  let t =
                                                                    Math.max(
                                                                      0,
                                                                      Number(
                                                                        e.target
                                                                          .value,
                                                                      ) || 0,
                                                                    );
                                                                  e2(t);
                                                                  try {
                                                                    var l;
                                                                    (null ==
                                                                      V ||
                                                                    null ==
                                                                      (l =
                                                                        V.user)
                                                                      ? void 0
                                                                      : l.id) &&
                                                                      (localStorage.setItem(
                                                                        "marginPct_".concat(
                                                                          V.user
                                                                            .id,
                                                                        ),
                                                                        String(
                                                                          t,
                                                                        ),
                                                                      ),
                                                                      fetch(
                                                                        "/api/userSettings/".concat(
                                                                          V.user
                                                                            .id,
                                                                        ),
                                                                        {
                                                                          method:
                                                                            "PATCH",
                                                                          headers:
                                                                            {
                                                                              "Content-Type":
                                                                                "application/json",
                                                                            },
                                                                          body: JSON.stringify(
                                                                            {
                                                                              marginPct:
                                                                                t,
                                                                            },
                                                                          ),
                                                                        },
                                                                      ));
                                                                  } catch (e) {}
                                                                },
                                                                className:
                                                                  "border rounded p-1 w-24 text-right",
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    }),
                                                  (0, a.jsx)(eO, {
                                                    marginBySeries: null,
                                                    marginFallback: ld ? e1 : 0,
                                                    applyMargin: ld,
                                                    onCouponChange: tn,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : (0, a.jsx)("div", {
                                            className:
                                              "inline-block rounded-xl canvas-shadow",
                                            children: (0, a.jsx)(eN.Ay, {}),
                                          }),
                                    ],
                                  }),
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-row items-center justify-between p-4",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-green-700",
                          children:
                            ez.stepNo >= 7 &&
                            (e5
                              ? (0, a.jsx)("span", {
                                  className: "text-2xl font-bold",
                                  children: "-",
                                })
                              : (0, a.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "text-2xl font-bold",
                                      children: lm(lc),
                                    }),
                                    e3 &&
                                      (0, a.jsxs)("span", {
                                        className:
                                          "text-xs font-semibold text-green-600",
                                        children: [
                                          "Incl. GST (",
                                          lp,
                                          "%): ",
                                          lm(lu),
                                        ],
                                      }),
                                  ],
                                })),
                        }),
                        ez.stepNo > 7 && (0, a.jsx)(ej, {}),
                        (0, a.jsx)(ev.A, {
                          onClick: () => {
                            (q((0, h.clearCartItem)(ez.step)),
                              ez.stepNo <= 4 && q((0, x.iY)(!0)),
                              4 === ez.stepNo && q((0, f.nI)()),
                              8 === ez.stepNo &&
                                (q((0, x.EY)(eP[0])), q((0, x.iY)(!0))));
                          },
                          msg:
                            8 === ez.stepNo
                              ? "Do you want to clear all selections?"
                              : "Do you want to clear the selection?",
                        }),
                        8 === ez.stepNo && (0, a.jsx)(eX, {}),
                        (0, a.jsxs)("div", {
                          className: "flex justify-end space-x-4",
                          children: [
                            (0, a.jsx)(ef.A, {
                              label: "Back",
                              onClick: () => q((0, x.sQ)()),
                              disabled: eR,
                              variant: "secondary",
                              size: "medium",
                            }),
                            8 === ez.stepNo &&
                              (0, a.jsx)(ef.A, {
                                label: eh
                                  ? "Generate Quote"
                                  : "Download Preview",
                                onClick: () => void rr(),
                                variant: "quote",
                                size: "medium",
                              }),
                            8 === ez.stepNo &&
                              (0, a.jsx)(ef.A, {
                                id: "tour-add-to-cart",
                                label: !(function (e) {
                                  let t = e.get("cart"),
                                    l = e.get("edit");
                                  return (
                                    (null !== t && "" !== t) ||
                                    (null !== l && "" !== l)
                                  );
                                })(K)
                                  ? "Add to Cart"
                                  : "Update Item",
                                onClick: re,
                                variant: "outlined",
                                size: "medium",
                              }),
                            8 === ez.stepNo &&
                              eh &&
                              lq &&
                              (0, a.jsx)(ef.A, {
                                label: 'Add to "'.concat(lq, '"'),
                                onClick: () => {
                                  lq && rt(lq);
                                },
                                variant: "outlined",
                                size: "medium",
                              }),
                            (0, a.jsx)(ef.A, {
                              id:
                                ez.stepNo > 7
                                  ? "tour-place-order"
                                  : "tour-next",
                              label: ez.stepNo > 7 ? "Place Order" : "Next",
                              onClick: () => {
                                ez.stepNo > 7
                                  ? rr({ forOrder: !0 })
                                  : (q((0, x.sk)(eU)),
                                    "Color" === ez.step &&
                                      lf &&
                                      q((0, h.hideCanvasBorder)()));
                              },
                              disabled: !(ez.stepNo > 7) && eI,
                              variant: "primary",
                              size: "medium",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(tF.A, {
                      open: l2,
                      autoHideDuration: 3e3,
                      onClose: () => l5(!1),
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center",
                      },
                      children: (0, a.jsx)(ek.A, {
                        severity: "success",
                        onClose: () => l5(!1),
                        sx: { width: "100%" },
                        children: "Item added successfully",
                      }),
                    }),
                    (0, a.jsx)(tF.A, {
                      open: l4,
                      autoHideDuration: 3e3,
                      onClose: (e, t) => {
                        "escapeKeyDown" !== t && "clickaway" !== t && l3(!1);
                      },
                      message: "Screenshots are disabled",
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center",
                      },
                    }),
                    (null == V || null == (N = V.user) ? void 0 : N.role) !==
                      "Admin" &&
                      (null == V || null == (A = V.user) ? void 0 : A.role) !==
                        "SuperAdmin" &&
                      !eQ &&
                      (l4 || l6) &&
                      (0, a.jsx)("div", {
                        className:
                          "fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md",
                        children: (0, a.jsx)("div", {
                          className:
                            "rounded-lg bg-white/80 p-6 text-center shadow-lg",
                          children: (0, a.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: "Screenshots are blocked on this site",
                          }),
                        }),
                      }),
                    (0, a.jsx)(eC, {}),
                    (0, a.jsx)(tp, {
                      open: lF,
                      onClose: () => lW(!1),
                      onConfirm: (e, t) => {
                        (lW(!1), (lQ.current = (t || "").trim() || null));
                        let l = lQ.current;
                        if (l) {
                          try {
                            localStorage.setItem("lastOrderName", l);
                          } catch (e) {}
                          lV(l);
                        }
                        rl(t);
                      },
                    }),
                    (0, a.jsx)(eD.A, {
                      open: lB,
                      onClose: () => l_(!1),
                      children: (0, a.jsx)(eW.A, {
                        children:
                          "input" !== lK && eh
                            ? (0, a.jsxs)(w.A, {
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                alignItems: "center",
                                children: [
                                  (0, a.jsx)(tW.A, {
                                    color: "success",
                                    sx: { fontSize: 48 },
                                  }),
                                  (0, a.jsx)(ep.A, {
                                    variant: "h6",
                                    children: "Item added to order",
                                  }),
                                  l0 &&
                                    (0, a.jsx)(ep.A, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      children: "Order: ".concat(l0),
                                    }),
                                  (0, a.jsxs)(w.A, {
                                    display: "flex",
                                    gap: 1,
                                    mt: 1,
                                    children: [
                                      (0, a.jsx)(eE.A, {
                                        variant: "contained",
                                        color: "success",
                                        onClick: () => {
                                          let e = l0 || lq || "";
                                          if (e.trim()) {
                                            lZ(!0);
                                            try {
                                              localStorage.setItem(
                                                "lastOrderName",
                                                e.trim(),
                                              );
                                            } catch (e) {}
                                            lV(e.trim());
                                          }
                                          (l_(!1),
                                            l$("input"),
                                            q((0, x.EY)(eP[0])),
                                            q((0, h.clearCartItem)("Cart")));
                                        },
                                        children: "Add product in this order",
                                      }),
                                      (0, a.jsx)(eE.A, {
                                        variant: "outlined",
                                        onClick: () => {
                                          (l_(!1),
                                            l$("input"),
                                            J.push("/orders?tab=cart"));
                                        },
                                        children: "View cart",
                                      }),
                                      (0, a.jsx)(eE.A, {
                                        variant: "outlined",
                                        onClick: () => {
                                          (lZ(!1),
                                            l_(!1),
                                            l$("input"),
                                            q((0, x.EY)(eP[0])),
                                            q((0, h.clearCartItem)("Cart")));
                                        },
                                        children: "Design new panel",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, a.jsxs)(w.A, {
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                children: [
                                  (0, a.jsx)(ep.A, {
                                    variant: "h6",
                                    children: "Order Name",
                                  }),
                                  (0, a.jsx)(eB.A, {
                                    size: "small",
                                    label: "Order Name",
                                    value: lH,
                                    onChange: (e) => lG(e.target.value),
                                    autoFocus: !0,
                                  }),
                                  lY.length > 0 &&
                                    (0, a.jsx)(w.A, {
                                      mt: 0.5,
                                      display: "flex",
                                      gap: 0.5,
                                      flexWrap: "wrap",
                                      children: lY.slice(0, 8).map((e) =>
                                        (0, a.jsx)(
                                          tg.A,
                                          {
                                            size: "small",
                                            label: e,
                                            onClick: () => lG(e),
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                  (0, a.jsxs)(w.A, {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    gap: 1,
                                    children: [
                                      (0, a.jsx)(eE.A, {
                                        onClick: () => l_(!1),
                                        children: "Cancel",
                                      }),
                                      (0, a.jsx)(eE.A, {
                                        variant: "contained",
                                        disabled: !lH.trim(),
                                        onClick: async () => {
                                          let e = lH.trim();
                                          await rt(e);
                                          try {
                                            localStorage.setItem(
                                              "lastOrderName",
                                              e,
                                            );
                                          } catch (e) {}
                                          (lV(e),
                                            l1(e),
                                            lG(""),
                                            eh
                                              ? l$("success")
                                              : (l_(!1), l$("input")));
                                        },
                                        children: "Add to Cart",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                      }),
                    }),
                    t1 &&
                      (0, a.jsxs)("div", {
                        className: "fixed inset-0 z-50 backdrop-blur-md",
                        style: { background: "rgba(0,0,0,0.12)" },
                        children: [
                          !t5 &&
                            (0, a.jsx)("div", {
                              className: "absolute inset-0",
                              children: (0, a.jsx)(tC, {
                                className: "offer-media",
                                url: t1.mediaUrl,
                                scale: t1.mediaScale,
                                offsetX: t1.mediaOffsetX,
                                offsetY: t1.mediaOffsetY,
                                objectFit: t1.mediaObjectFit,
                                onEnded: () => t4(!0),
                              }),
                            }),
                          t5 &&
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center",
                              children: (0, a.jsx)("div", {
                                className: "rounded-2xl p-4 md:p-6",
                                style: {
                                  background: "rgba(255,255,255,0.9)",
                                  border: "1px solid rgba(0,0,0,0.08)",
                                  boxShadow: "0 20px 45px rgba(2,6,23,0.35)",
                                },
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center",
                                  children: [
                                    (0, a.jsx)("button", {
                                      onClick: () => {
                                        let e = t3.current
                                          ? Date.now() -
                                            new Date(t3.current).getTime()
                                          : 0;
                                        ((null == t1 ? void 0 : t1.id) &&
                                          fetch(
                                            "/api/offers/".concat(
                                              encodeURIComponent(String(t1.id)),
                                              "/action",
                                            ),
                                            {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                action: "upgrade",
                                                latencyMs: e,
                                                displayedAt: t3.current,
                                              }),
                                            },
                                          ),
                                          J.push("/premium/payment"));
                                      },
                                      className:
                                        "px-4 py-2 rounded-full text-white font-extrabold",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(120deg,#38bdf8,#a855f7,#f97316)",
                                        boxShadow:
                                          "0 18px 40px rgba(168,85,247,0.35)",
                                      },
                                      children: "Upgrade to SwitchCraft+",
                                    }),
                                    (0, a.jsx)("button", {
                                      onClick: () => {
                                        let e = t3.current
                                          ? Date.now() -
                                            new Date(t3.current).getTime()
                                          : 0;
                                        ((null == t1 ? void 0 : t1.id) &&
                                          fetch(
                                            "/api/offers/".concat(
                                              encodeURIComponent(String(t1.id)),
                                              "/action",
                                            ),
                                            {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                action: "know_more",
                                                latencyMs: e,
                                                displayedAt: t3.current,
                                              }),
                                            },
                                          ),
                                          window.location.assign(
                                            "https://calendly.com/nishitishere/hands-on-switchraft",
                                          ));
                                      },
                                      className:
                                        "px-4 py-2 rounded-full font-semibold text-white",
                                      style: { background: "#111827" },
                                      children: "Know more",
                                    }),
                                    (0, a.jsx)("button", {
                                      onClick: () => {
                                        let e = t3.current
                                          ? Date.now() -
                                            new Date(t3.current).getTime()
                                          : 0;
                                        ((null == t1 ? void 0 : t1.id) &&
                                          fetch(
                                            "/api/offers/".concat(
                                              encodeURIComponent(String(t1.id)),
                                              "/action",
                                            ),
                                            {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                action: "remind_later",
                                                latencyMs: e,
                                                displayedAt: t3.current,
                                              }),
                                            },
                                          ),
                                          (t6.current = !0),
                                          t2(null),
                                          t4(!1));
                                      },
                                      className:
                                        "px-4 py-2 rounded-full border font-semibold",
                                      style: {
                                        borderColor: "rgba(2,6,23,0.2)",
                                      },
                                      children: "Remind later",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                    (0, a.jsx)(eD.A, {
                      open: lR,
                      onClose: ro,
                      PaperProps: { className: "p-6 rounded-lg" },
                      children: (0, a.jsxs)(eW.A, {
                        className: "flex flex-col items-center",
                        children: [
                          (0, a.jsx)(tW.A, {
                            className: "animate-pulse text-green-500",
                            sx: { fontSize: 60 },
                          }),
                          (0, a.jsx)(ep.A, {
                            variant: "h6",
                            mt: 2,
                            children: "Order placed successfully!",
                          }),
                          (0, a.jsxs)(w.A, {
                            mt: 3,
                            className: "flex gap-2",
                            children: [
                              (0, a.jsx)(eE.A, {
                                variant: "contained",
                                onClick: () => {
                                  (ro(), J.push("/orders"));
                                },
                                children: "View My Orders",
                              }),
                              eh &&
                                (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(eE.A, {
                                      variant: "contained",
                                      color: "success",
                                      onClick: () => {
                                        let e =
                                          lQ.current ||
                                          lq ||
                                          eU.orderName ||
                                          "";
                                        if (e && e.trim()) {
                                          try {
                                            localStorage.setItem(
                                              "lastOrderName",
                                              e.trim(),
                                            );
                                          } catch (e) {}
                                          lV(e.trim());
                                        }
                                        (lZ(!0), ro());
                                      },
                                      children: "Add Another Product",
                                    }),
                                    (0, a.jsx)(eE.A, {
                                      variant: "outlined",
                                      onClick: () => {
                                        (lZ(!1), ro());
                                      },
                                      children: "New Order",
                                    }),
                                  ],
                                }),
                              (0, a.jsx)(eE.A, {
                                variant: "outlined",
                                onClick: ro,
                                children: "OK",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            (0, a.jsx)(eq.A, {
              open: ti,
              onClose: () => {
                (ts(!1), tc(null));
              },
              blob: td || void 0,
              fileName: tu,
              title: tx,
              subtitle: tf,
              showLegacyButton: !0,
              legacyButtonLabel: ty ? "Modern Format" : "Legacy Format",
              isPremium: eh,
              onViewLegacy: () => {
                ty ? rr({ forOrder: tj }) : ra();
              },
              showOrderActions: tj,
              onEditOrder: () => {
                ts(!1);
              },
              onConfirmOrder: () => {
                (ts(!1), lW(!0));
              },
            }),
          ],
        });
      }
      function tQ() {
        return (0, a.jsx)(o.Suspense, {
          fallback: null,
          children: (0, a.jsx)(tV, {}),
        });
      }
    },
    10255: (e, t, l) => {
      "use strict";
      function r(e) {
        let { moduleIds: t } = e;
        return null;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        l(95155),
        l(47650),
        l(85744),
        l(20589));
    },
    17828: (e, t, l) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = (0, l(64054).createAsyncLocalStorage)();
    },
    34998: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 554));
    },
    36645: (e, t, l) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let r = l(88229)._(l(67357));
      function a(e, t) {
        var l;
        let a = {};
        "function" == typeof e && (a.loader = e);
        let o = { ...a, ...t };
        return (0, r.default)({
          ...o,
          modules: null == (l = o.loadableGenerated) ? void 0 : l.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    55028: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => a.a });
      var r = l(36645),
        a = l.n(r);
    },
    62146: (e, t, l) => {
      "use strict";
      function r(e) {
        let { reason: t, children: l } = e;
        return l;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        l(45262));
    },
    64054: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var l in t)
            Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
        })(t, {
          bindSnapshot: function () {
            return n;
          },
          createAsyncLocalStorage: function () {
            return o;
          },
          createSnapshot: function () {
            return i;
          },
        }));
      let l = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available",
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 },
      );
      class r {
        disable() {
          throw l;
        }
        getStore() {}
        run() {
          throw l;
        }
        exit() {
          throw l;
        }
        enterWith() {
          throw l;
        }
        static bind(e) {
          return e;
        }
      }
      let a = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function o() {
        return a ? new a() : new r();
      }
      function n(e) {
        return a ? a.bind(e) : r.bind(e);
      }
      function i() {
        return a
          ? a.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    67357: (e, t, l) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let r = l(95155),
        a = l(12115),
        o = l(62146);
      function n(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      l(10255);
      let i = {
          loader: () => Promise.resolve(n(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (e) {
          let t = { ...i, ...e },
            l = (0, a.lazy)(() => t.loader().then(n)),
            s = t.loading;
          function d(e) {
            let n = s
                ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              i = !t.ssr || !!t.loading,
              d = i ? a.Suspense : a.Fragment,
              c = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [null, (0, r.jsx)(l, { ...e })],
                  })
                : (0, r.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(l, { ...e }),
                  });
            return (0, r.jsx)(d, {
              ...(i ? { fallback: n } : {}),
              children: c,
            });
          }
          return ((d.displayName = "LoadableComponent"), d);
        };
    },
    85744: (e, t, l) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r.workAsyncStorageInstance;
          },
        }));
      let r = l(17828);
    },
  },
]);
