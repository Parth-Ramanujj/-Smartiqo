"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7217],
  {
    67217: (t, e, i) => {
      i.d(e, { A: () => k });
      var a = i(12115),
        r = i(52596),
        n = i(90870),
        s = i(17472),
        o = i(65180),
        d = i(25560),
        u = i(57316),
        l = i(85799),
        p = i(95155);
      let c = (0, l.A)(),
        x = (0, u.A)("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: i } = t;
            return [
              e.root,
              e["maxWidth".concat((0, o.A)(String(i.maxWidth)))],
              i.fixed && e.fixed,
              i.disableGutters && e.disableGutters,
            ];
          },
        }),
        m = (t) =>
          (0, d.A)({ props: t, name: "MuiContainer", defaultTheme: c }),
        b = (t, e) => {
          let { classes: i, fixed: a, disableGutters: r, maxWidth: d } = t,
            u = {
              root: [
                "root",
                d && "maxWidth".concat((0, o.A)(String(d))),
                a && "fixed",
                r && "disableGutters",
              ],
            };
          return (0, s.A)(u, (t) => (0, n.Ay)(e, t), i);
        };
      var h = i(13209),
        g = i(75955),
        f = i(77856);
      let k = (function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            createStyledComponent: e = x,
            useThemeProps: i = m,
            componentName: n = "MuiContainer",
          } = t,
          s = e(
            (t) => {
              let { theme: e, ownerState: i } = t;
              return {
                width: "100%",
                marginLeft: "auto",
                boxSizing: "border-box",
                marginRight: "auto",
                ...(!i.disableGutters && {
                  paddingLeft: e.spacing(2),
                  paddingRight: e.spacing(2),
                  [e.breakpoints.up("sm")]: {
                    paddingLeft: e.spacing(3),
                    paddingRight: e.spacing(3),
                  },
                }),
              };
            },
            (t) => {
              let { theme: e, ownerState: i } = t;
              return (
                i.fixed &&
                Object.keys(e.breakpoints.values).reduce((t, i) => {
                  let a = e.breakpoints.values[i];
                  return (
                    0 !== a &&
                      (t[e.breakpoints.up(i)] = {
                        maxWidth: "".concat(a).concat(e.breakpoints.unit),
                      }),
                    t
                  );
                }, {})
              );
            },
            (t) => {
              let { theme: e, ownerState: i } = t;
              return {
                ...("xs" === i.maxWidth && {
                  [e.breakpoints.up("xs")]: {
                    maxWidth: Math.max(e.breakpoints.values.xs, 444),
                  },
                }),
                ...(i.maxWidth &&
                  "xs" !== i.maxWidth && {
                    [e.breakpoints.up(i.maxWidth)]: {
                      maxWidth: ""
                        .concat(e.breakpoints.values[i.maxWidth])
                        .concat(e.breakpoints.unit),
                    },
                  }),
              };
            },
          );
        return a.forwardRef(function (t, e) {
          let a = i(t),
            {
              className: o,
              component: d = "div",
              disableGutters: u = !1,
              fixed: l = !1,
              maxWidth: c = "lg",
              classes: x,
              ...m
            } = a,
            h = {
              ...a,
              component: d,
              disableGutters: u,
              fixed: l,
              maxWidth: c,
            },
            g = b(h, n);
          return (0, p.jsx)(s, {
            as: d,
            ownerState: h,
            className: (0, r.A)(g.root, o),
            ref: e,
            ...m,
          });
        });
      })({
        createStyledComponent: (0, g.Ay)("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: i } = t;
            return [
              e.root,
              e["maxWidth".concat((0, h.A)(String(i.maxWidth)))],
              i.fixed && e.fixed,
              i.disableGutters && e.disableGutters,
            ];
          },
        }),
        useThemeProps: (t) => (0, f.b)({ props: t, name: "MuiContainer" }),
      });
    },
  },
]);
