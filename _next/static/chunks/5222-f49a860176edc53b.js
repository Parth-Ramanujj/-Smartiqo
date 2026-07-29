"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5222],
  {
    85222: (e, r, o) => {
      o.d(r, { A: () => v });
      var t = o(12115),
        n = o(52596),
        a = o(17472),
        s = o(31628),
        i = o(700),
        l = o(99801),
        c = o(75955),
        y = o(77856),
        d = o(9546),
        p = o(47798),
        m = o(95155);
      let u = (e) => {
          let { classes: r, inset: o, primary: t, secondary: n, dense: s } = e;
          return (0, a.A)(
            {
              root: ["root", o && "inset", s && "dense", t && n && "multiline"],
              primary: ["primary"],
              secondary: ["secondary"],
            },
            d.b,
            r,
          );
        },
        A = (0, c.Ay)("div", {
          name: "MuiListItemText",
          slot: "Root",
          overridesResolver: (e, r) => {
            let { ownerState: o } = e;
            return [
              { ["& .".concat(d.A.primary)]: r.primary },
              { ["& .".concat(d.A.secondary)]: r.secondary },
              r.root,
              o.inset && r.inset,
              o.primary && o.secondary && r.multiline,
              o.dense && r.dense,
            ];
          },
        })({
          flex: "1 1 auto",
          minWidth: 0,
          marginTop: 4,
          marginBottom: 4,
          [".".concat(s.A.root, ":where(& .").concat(d.A.primary, ")")]: {
            display: "block",
          },
          [".".concat(s.A.root, ":where(& .").concat(d.A.secondary, ")")]: {
            display: "block",
          },
          variants: [
            {
              props: (e) => {
                let { ownerState: r } = e;
                return r.primary && r.secondary;
              },
              style: { marginTop: 6, marginBottom: 6 },
            },
            {
              props: (e) => {
                let { ownerState: r } = e;
                return r.inset;
              },
              style: { paddingLeft: 56 },
            },
          ],
        }),
        v = t.forwardRef(function (e, r) {
          let o = (0, y.b)({ props: e, name: "MuiListItemText" }),
            {
              children: a,
              className: s,
              disableTypography: c = !1,
              inset: d = !1,
              primary: v,
              primaryTypographyProps: b,
              secondary: h,
              secondaryTypographyProps: x,
              slots: f = {},
              slotProps: T = {},
              ...k
            } = o,
            { dense: w } = t.useContext(l.A),
            g = null != v ? v : a,
            N = h,
            _ = {
              ...o,
              disableTypography: c,
              inset: d,
              primary: !!g,
              secondary: !!N,
              dense: w,
            },
            j = u(_),
            C = { slots: f, slotProps: { primary: b, secondary: x, ...T } },
            [L, R] = (0, p.A)("root", {
              className: (0, n.A)(j.root, s),
              elementType: A,
              externalForwardedProps: { ...C, ...k },
              ownerState: _,
              ref: r,
            }),
            [B, E] = (0, p.A)("primary", {
              className: j.primary,
              elementType: i.A,
              externalForwardedProps: C,
              ownerState: _,
            }),
            [I, M] = (0, p.A)("secondary", {
              className: j.secondary,
              elementType: i.A,
              externalForwardedProps: C,
              ownerState: _,
            });
          return (
            null == g ||
              g.type === i.A ||
              c ||
              (g = (0, m.jsx)(B, {
                variant: w ? "body2" : "body1",
                component: (null == E ? void 0 : E.variant) ? void 0 : "span",
                ...E,
                children: g,
              })),
            null == N ||
              N.type === i.A ||
              c ||
              (N = (0, m.jsx)(I, {
                variant: "body2",
                color: "textSecondary",
                ...M,
                children: N,
              })),
            (0, m.jsxs)(L, { ...R, children: [g, N] })
          );
        });
    },
  },
]);
