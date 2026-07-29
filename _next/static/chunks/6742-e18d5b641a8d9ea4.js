"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6742],
  {
    16742: (e, t, o) => {
      o.d(t, { A: () => k });
      var r = o(12115),
        n = o(17472),
        a = o(13209),
        l = o(36437),
        i = o(75955),
        s = o(49800),
        d = o(27011),
        c = o(25466),
        u = o(55170),
        p = o(90870);
      function h(e) {
        return (0, p.Ay)("PrivateSwitchBase", e);
      }
      (0, u.A)("PrivateSwitchBase", [
        "root",
        "checked",
        "disabled",
        "input",
        "edgeStart",
        "edgeEnd",
      ]);
      var g = o(47798),
        m = o(95155);
      let v = (e) => {
          let { classes: t, checked: o, disabled: r, edge: l } = e,
            i = {
              root: [
                "root",
                o && "checked",
                r && "disabled",
                l && "edge".concat((0, a.A)(l)),
              ],
              input: ["input"],
            };
          return (0, n.A)(i, h, t);
        },
        f = (0, i.Ay)(c.A, { name: "MuiSwitchBase" })({
          padding: 9,
          borderRadius: "50%",
          variants: [
            {
              props: { edge: "start", size: "small" },
              style: { marginLeft: -3 },
            },
            {
              props: (e) => {
                let { edge: t, ownerState: o } = e;
                return "start" === t && "small" !== o.size;
              },
              style: { marginLeft: -12 },
            },
            {
              props: { edge: "end", size: "small" },
              style: { marginRight: -3 },
            },
            {
              props: (e) => {
                let { edge: t, ownerState: o } = e;
                return "end" === t && "small" !== o.size;
              },
              style: { marginRight: -12 },
            },
          ],
        }),
        A = (0, i.Ay)("input", {
          name: "MuiSwitchBase",
          shouldForwardProp: l.A,
        })({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        k = r.forwardRef(function (e, t) {
          let {
              autoFocus: o,
              checked: r,
              checkedIcon: n,
              defaultChecked: a,
              disabled: l,
              disableFocusRipple: i = !1,
              edge: c = !1,
              icon: u,
              id: p,
              inputProps: h,
              inputRef: k,
              name: w,
              onBlur: b,
              onChange: P,
              onFocus: y,
              readOnly: B,
              required: S = !1,
              tabIndex: x,
              type: F,
              value: R,
              slots: z = {},
              slotProps: C = {},
              ...E
            } = e,
            [N, _] = (0, s.A)({
              controlled: r,
              default: !!a,
              name: "SwitchBase",
              state: "checked",
            }),
            j = (0, d.A)(),
            I = (e) => {
              y && y(e), j && j.onFocus && j.onFocus(e);
            },
            L = (e) => {
              b && b(e), j && j.onBlur && j.onBlur(e);
            },
            M = (e) => {
              if (e.nativeEvent.defaultPrevented) return;
              let t = e.target.checked;
              _(t), P && P(e, t);
            },
            T = l;
          j && void 0 === T && (T = j.disabled);
          let q = "checkbox" === F || "radio" === F,
            D = {
              ...e,
              checked: N,
              disabled: T,
              disableFocusRipple: i,
              edge: c,
            },
            G = v(D),
            H = { slots: z, slotProps: { input: h, ...C } },
            [J, K] = (0, g.A)("root", {
              ref: t,
              elementType: f,
              className: G.root,
              shouldForwardComponentProp: !0,
              externalForwardedProps: { ...H, component: "span", ...E },
              getSlotProps: (e) => ({
                ...e,
                onFocus: (t) => {
                  var o;
                  null == (o = e.onFocus) || o.call(e, t), I(t);
                },
                onBlur: (t) => {
                  var o;
                  null == (o = e.onBlur) || o.call(e, t), L(t);
                },
              }),
              ownerState: D,
              additionalProps: {
                centerRipple: !0,
                focusRipple: !i,
                disabled: T,
                role: void 0,
                tabIndex: null,
              },
            }),
            [O, Q] = (0, g.A)("input", {
              ref: k,
              elementType: A,
              className: G.input,
              externalForwardedProps: H,
              getSlotProps: (e) => ({
                ...e,
                onChange: (t) => {
                  var o;
                  null == (o = e.onChange) || o.call(e, t), M(t);
                },
              }),
              ownerState: D,
              additionalProps: {
                autoFocus: o,
                checked: r,
                defaultChecked: a,
                disabled: T,
                id: q ? p : void 0,
                name: w,
                readOnly: B,
                required: S,
                tabIndex: x,
                type: F,
                ...("checkbox" === F && void 0 === R ? {} : { value: R }),
              },
            });
          return (0, m.jsxs)(J, {
            ...K,
            children: [(0, m.jsx)(O, { ...Q }), N ? n : u],
          });
        });
    },
  },
]);
