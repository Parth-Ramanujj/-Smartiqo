"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7516],
  {
    47516: (e, l, r) => {
      r.d(l, { A: () => g });
      var t = r(12115),
        a = r(52596),
        o = r(17472),
        n = r(27011),
        s = r(75955),
        i = r(40680),
        c = r(77856),
        d = r(700),
        b = r(13209),
        m = r(91820),
        p = r(51549),
        u = r(47798),
        A = r(95155);
      let v = (e) => {
          let {
              classes: l,
              disabled: r,
              labelPlacement: t,
              error: a,
              required: n,
            } = e,
            s = {
              root: [
                "root",
                r && "disabled",
                "labelPlacement".concat((0, b.A)(t)),
                a && "error",
                n && "required",
              ],
              label: ["label", r && "disabled"],
              asterisk: ["asterisk", a && "error"],
            };
          return (0, o.A)(s, m.u, l);
        },
        f = (0, s.Ay)("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (e, l) => {
            let { ownerState: r } = e;
            return [
              { ["& .".concat(m.A.label)]: l.label },
              l.root,
              l["labelPlacement".concat((0, b.A)(r.labelPlacement))],
            ];
          },
        })(
          (0, i.A)((e) => {
            let { theme: l } = e;
            return {
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              verticalAlign: "middle",
              WebkitTapHighlightColor: "transparent",
              marginLeft: -11,
              marginRight: 16,
              ["&.".concat(m.A.disabled)]: { cursor: "default" },
              ["& .".concat(m.A.label)]: {
                ["&.".concat(m.A.disabled)]: {
                  color: (l.vars || l).palette.text.disabled,
                },
              },
              variants: [
                {
                  props: { labelPlacement: "start" },
                  style: { flexDirection: "row-reverse", marginRight: -11 },
                },
                {
                  props: { labelPlacement: "top" },
                  style: { flexDirection: "column-reverse" },
                },
                {
                  props: { labelPlacement: "bottom" },
                  style: { flexDirection: "column" },
                },
                {
                  props: (e) => {
                    let { labelPlacement: l } = e;
                    return "start" === l || "top" === l || "bottom" === l;
                  },
                  style: { marginLeft: 16 },
                },
              ],
            };
          }),
        ),
        h = (0, s.Ay)("span", {
          name: "MuiFormControlLabel",
          slot: "Asterisk",
        })(
          (0, i.A)((e) => {
            let { theme: l } = e;
            return {
              ["&.".concat(m.A.error)]: {
                color: (l.vars || l).palette.error.main,
              },
            };
          }),
        ),
        g = t.forwardRef(function (e, l) {
          var r;
          let o = (0, c.b)({ props: e, name: "MuiFormControlLabel" }),
            {
              checked: s,
              className: i,
              componentsProps: b = {},
              control: m,
              disabled: g,
              disableTypography: y,
              inputRef: k,
              label: P,
              labelPlacement: x = "end",
              name: C,
              onChange: L,
              required: w,
              slots: N = {},
              slotProps: R = {},
              value: F,
              ...M
            } = o,
            j = (0, n.A)(),
            q =
              null != (r = null != g ? g : m.props.disabled)
                ? r
                : null == j
                  ? void 0
                  : j.disabled,
            E = null != w ? w : m.props.required,
            _ = { disabled: q, required: E };
          ["checked", "name", "onChange", "value", "inputRef"].forEach((e) => {
            void 0 === m.props[e] && void 0 !== o[e] && (_[e] = o[e]);
          });
          let D = (0, p.A)({ props: o, muiFormControl: j, states: ["error"] }),
            S = {
              ...o,
              disabled: q,
              labelPlacement: x,
              required: E,
              error: D.error,
            },
            T = v(S),
            B = { slots: N, slotProps: { ...b, ...R } },
            [H, I] = (0, u.A)("typography", {
              elementType: d.A,
              externalForwardedProps: B,
              ownerState: S,
            }),
            W = P;
          return (
            null == W ||
              W.type === d.A ||
              y ||
              (W = (0, A.jsx)(H, {
                component: "span",
                ...I,
                className: (0, a.A)(T.label, null == I ? void 0 : I.className),
                children: W,
              })),
            (0, A.jsxs)(f, {
              className: (0, a.A)(T.root, i),
              ownerState: S,
              ref: l,
              ...M,
              children: [
                t.cloneElement(m, _),
                E
                  ? (0, A.jsxs)("div", {
                      children: [
                        W,
                        (0, A.jsxs)(h, {
                          ownerState: S,
                          "aria-hidden": !0,
                          className: T.asterisk,
                          children: [" ", "*"],
                        }),
                      ],
                    })
                  : W,
              ],
            })
          );
        });
    },
    91820: (e, l, r) => {
      r.d(l, { A: () => n, u: () => o });
      var t = r(55170),
        a = r(90870);
      function o(e) {
        return (0, a.Ay)("MuiFormControlLabel", e);
      }
      let n = (0, t.A)("MuiFormControlLabel", [
        "root",
        "labelPlacementStart",
        "labelPlacementTop",
        "labelPlacementBottom",
        "disabled",
        "label",
        "error",
        "required",
        "asterisk",
      ]);
    },
  },
]);
