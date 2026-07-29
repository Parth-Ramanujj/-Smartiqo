"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1803],
  {
    71803: (e, t, o) => {
      o.d(t, { A: () => S });
      var n = o(12115),
        r = o(52596),
        i = o(72890),
        l = o(90870),
        a = o(17472),
        c = o(57316),
        s = o(25560),
        u = o(5300),
        p = o(85799),
        f = o(648),
        k = o(83130),
        d = o(95155);
      let m = (0, p.A)(),
        y = (0, c.A)("div", { name: "MuiStack", slot: "Root" });
      function v(e) {
        return (0, s.A)({ props: e, name: "MuiStack", defaultTheme: m });
      }
      let b = (e) =>
          ({
            row: "Left",
            "row-reverse": "Right",
            column: "Top",
            "column-reverse": "Bottom",
          })[e],
        h = (e) => {
          let { ownerState: t, theme: o } = e,
            n = {
              display: "flex",
              flexDirection: "column",
              ...(0, f.NI)(
                { theme: o },
                (0, f.kW)({
                  values: t.direction,
                  breakpoints: o.breakpoints.values,
                }),
                (e) => ({ flexDirection: e }),
              ),
            };
          if (t.spacing) {
            let e = (0, k.LX)(o),
              r = Object.keys(o.breakpoints.values).reduce(
                (e, o) => (
                  (("object" == typeof t.spacing && null != t.spacing[o]) ||
                    ("object" == typeof t.direction &&
                      null != t.direction[o])) &&
                    (e[o] = !0),
                  e
                ),
                {},
              ),
              l = (0, f.kW)({ values: t.direction, base: r }),
              a = (0, f.kW)({ values: t.spacing, base: r });
            "object" == typeof l &&
              Object.keys(l).forEach((e, t, o) => {
                if (!l[e]) {
                  let n = t > 0 ? l[o[t - 1]] : "column";
                  l[e] = n;
                }
              }),
              (n = (0, i.A)(
                n,
                (0, f.NI)({ theme: o }, a, (o, n) =>
                  t.useFlexGap
                    ? { gap: (0, k._W)(e, o) }
                    : {
                        "& > :not(style):not(style)": { margin: 0 },
                        "& > :not(style) ~ :not(style)": {
                          ["margin".concat(b(n ? l[n] : t.direction))]: (0,
                          k._W)(e, o),
                        },
                      },
                ),
              ));
          }
          return (0, f.iZ)(o.breakpoints, n);
        };
      var A = o(75955),
        g = o(77856);
      let S = (function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            createStyledComponent: t = y,
            useThemeProps: o = v,
            componentName: i = "MuiStack",
          } = e,
          c = () => (0, a.A)({ root: ["root"] }, (e) => (0, l.Ay)(i, e), {}),
          s = t(h);
        return n.forwardRef(function (e, t) {
          let i = o(e),
            {
              component: l = "div",
              direction: a = "column",
              spacing: p = 0,
              divider: f,
              children: k,
              className: m,
              useFlexGap: y = !1,
              ...v
            } = (0, u.A)(i),
            b = c();
          return (0, d.jsx)(s, {
            as: l,
            ownerState: { direction: a, spacing: p, useFlexGap: y },
            ref: t,
            className: (0, r.A)(b.root, m),
            ...v,
            children: f
              ? (function (e, t) {
                  let o = n.Children.toArray(e).filter(Boolean);
                  return o.reduce(
                    (e, r, i) => (
                      e.push(r),
                      i < o.length - 1 &&
                        e.push(
                          n.cloneElement(t, { key: "separator-".concat(i) }),
                        ),
                      e
                    ),
                    [],
                  );
                })(k, f)
              : k,
          });
        });
      })({
        createStyledComponent: (0, A.Ay)("div", {
          name: "MuiStack",
          slot: "Root",
        }),
        useThemeProps: (e) => (0, g.b)({ props: e, name: "MuiStack" }),
      });
    },
  },
]);
