"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1870],
  {
    39489: (t, e, r) => {
      r.d(e, { A: () => I });
      var s = r(12115),
        a = r(52596),
        l = r(17472),
        n = r(75955),
        o = r(40680),
        i = r(77856),
        m = r(72562),
        f = r(99801),
        u = r(95155);
      let c = (t) => {
          let { alignItems: e, classes: r } = t;
          return (0, l.A)(
            { root: ["root", "flex-start" === e && "alignItemsFlexStart"] },
            m.f,
            r,
          );
        },
        p = (0, n.Ay)("div", {
          name: "MuiListItemIcon",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: r } = t;
            return [
              e.root,
              "flex-start" === r.alignItems && e.alignItemsFlexStart,
            ];
          },
        })(
          (0, o.A)((t) => {
            let { theme: e } = t;
            return {
              minWidth: 56,
              color: (e.vars || e).palette.action.active,
              flexShrink: 0,
              display: "inline-flex",
              variants: [
                {
                  props: { alignItems: "flex-start" },
                  style: { marginTop: 8 },
                },
              ],
            };
          }),
        ),
        I = s.forwardRef(function (t, e) {
          let r = (0, i.b)({ props: t, name: "MuiListItemIcon" }),
            { className: l, ...n } = r,
            o = s.useContext(f.A),
            m = { ...r, alignItems: o.alignItems },
            I = c(m);
          return (0, u.jsx)(p, {
            className: (0, a.A)(I.root, l),
            ownerState: m,
            ref: e,
            ...n,
          });
        });
    },
  },
]);
