"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4492],
  {
    54492: (e, t, o) => {
      o.d(t, { A: () => A });
      var a = o(12115),
        n = o(52596),
        r = o(17472),
        l = o(700),
        i = o(75955),
        u = o(77856),
        s = o(53580),
        p = o(39101),
        f = o(95155);
      let c = (e) => {
          let { classes: t } = e;
          return (0, r.A)({ root: ["root"] }, s.t, t);
        },
        d = (0, i.Ay)(l.A, { name: "MuiDialogTitle", slot: "Root" })({
          padding: "16px 24px",
          flex: "0 0 auto",
        }),
        A = a.forwardRef(function (e, t) {
          let o = (0, u.b)({ props: e, name: "MuiDialogTitle" }),
            { className: r, id: l, ...i } = o,
            s = c(o),
            { titleId: A = l } = a.useContext(p.A);
          return (0, f.jsx)(d, {
            component: "h2",
            className: (0, n.A)(s.root, r),
            ownerState: o,
            ref: t,
            variant: "h6",
            id: null != l ? l : A,
            ...i,
          });
        });
    },
  },
]);
