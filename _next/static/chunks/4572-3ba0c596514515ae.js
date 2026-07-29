"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4572],
  {
    64572: (e, t, o) => {
      o.d(t, { A: () => S });
      var r = o(12115),
        a = o(52596),
        n = o(17472),
        c = o(16742),
        l = o(31418),
        i = o(95155);
      let s = (0, l.A)(
          (0, i.jsx)("path", {
            d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
          }),
          "CheckBoxOutlineBlank",
        ),
        p = (0, l.A)(
          (0, i.jsx)("path", {
            d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
          }),
          "CheckBox",
        ),
        d = (0, l.A)(
          (0, i.jsx)("path", {
            d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
          }),
          "IndeterminateCheckBox",
        );
      var u = o(13209),
        h = o(36437),
        m = o(55170),
        v = o(90870);
      function A(e) {
        return (0, v.Ay)("MuiCheckbox", e);
      }
      let b = (0, m.A)("MuiCheckbox", [
        "root",
        "checked",
        "disabled",
        "indeterminate",
        "colorPrimary",
        "colorSecondary",
        "sizeSmall",
        "sizeMedium",
      ]);
      var k = o(75955),
        x = o(40680),
        f = o(98963),
        y = o(77856),
        z = o(59421),
        C = o(47798);
      let j = (e) => {
          let { classes: t, indeterminate: o, color: r, size: a } = e,
            c = {
              root: [
                "root",
                o && "indeterminate",
                "color".concat((0, u.A)(r)),
                "size".concat((0, u.A)(a)),
              ],
            },
            l = (0, n.A)(c, A, t);
          return { ...t, ...l };
        },
        M = (0, k.Ay)(c.A, {
          shouldForwardProp: (e) => (0, h.A)(e) || "classes" === e,
          name: "MuiCheckbox",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.root,
              o.indeterminate && t.indeterminate,
              t["size".concat((0, u.A)(o.size))],
              "default" !== o.color && t["color".concat((0, u.A)(o.color))],
            ];
          },
        })(
          (0, x.A)((e) => {
            let { theme: t } = e;
            return {
              color: (t.vars || t).palette.text.secondary,
              variants: [
                {
                  props: { color: "default", disableRipple: !1 },
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
                  .filter((0, f.A)())
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { color: o, disableRipple: !1 },
                      style: {
                        "&:hover": {
                          backgroundColor: t.alpha(
                            (t.vars || t).palette[o].main,
                            (t.vars || t).palette.action.hoverOpacity,
                          ),
                        },
                      },
                    };
                  }),
                ...Object.entries(t.palette)
                  .filter((0, f.A)())
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { color: o },
                      style: {
                        ["&."
                          .concat(b.checked, ", &.")
                          .concat(b.indeterminate)]: {
                          color: (t.vars || t).palette[o].main,
                        },
                        ["&.".concat(b.disabled)]: {
                          color: (t.vars || t).palette.action.disabled,
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
        w = (0, i.jsx)(p, {}),
        P = (0, i.jsx)(s, {}),
        R = (0, i.jsx)(d, {}),
        S = r.forwardRef(function (e, t) {
          var o, n, c;
          let l = (0, y.b)({ props: e, name: "MuiCheckbox" }),
            {
              checkedIcon: s = w,
              color: p = "primary",
              icon: d = P,
              indeterminate: u = !1,
              indeterminateIcon: h = R,
              inputProps: m,
              size: v = "medium",
              disableRipple: A = !1,
              className: b,
              slots: k = {},
              slotProps: x = {},
              ...f
            } = l,
            S = u ? h : d,
            H = u ? h : s,
            O = { ...l, disableRipple: A, color: p, indeterminate: u, size: v },
            B = j(O),
            E = null != (o = x.input) ? o : m,
            [V, _] = (0, C.A)("root", {
              ref: t,
              elementType: M,
              className: (0, a.A)(B.root, b),
              shouldForwardComponentProp: !0,
              externalForwardedProps: { slots: k, slotProps: x, ...f },
              ownerState: O,
              additionalProps: {
                type: "checkbox",
                icon: r.cloneElement(S, {
                  fontSize: null != (n = S.props.fontSize) ? n : v,
                }),
                checkedIcon: r.cloneElement(H, {
                  fontSize: null != (c = H.props.fontSize) ? c : v,
                }),
                disableRipple: A,
                slots: k,
                slotProps: {
                  input: (0, z.A)("function" == typeof E ? E(O) : E, {
                    "data-indeterminate": u,
                  }),
                },
              },
            });
          return (0, i.jsx)(V, { ..._, classes: B });
        });
    },
  },
]);
