"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1977],
  {
    71977: (e, t, n) => {
      n.d(t, { A: () => d });
      var o = n(12115),
        i = n(52596),
        r = n(17472),
        s = n(75955),
        a = n(77856),
        l = n(55170),
        u = n(90870);
      function c(e) {
        return (0, u.Ay)("MuiDialogActions", e);
      }
      (0, l.A)("MuiDialogActions", ["root", "spacing"]);
      var p = n(95155);
      let f = (e) => {
          let { classes: t, disableSpacing: n } = e;
          return (0, r.A)({ root: ["root", !n && "spacing"] }, c, t);
        },
        g = (0, s.Ay)("div", {
          name: "MuiDialogActions",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: n } = e;
            return [t.root, !n.disableSpacing && t.spacing];
          },
        })({
          display: "flex",
          alignItems: "center",
          padding: 8,
          justifyContent: "flex-end",
          flex: "0 0 auto",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableSpacing;
              },
              style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } },
            },
          ],
        }),
        d = o.forwardRef(function (e, t) {
          let n = (0, a.b)({ props: e, name: "MuiDialogActions" }),
            { className: o, disableSpacing: r = !1, ...s } = n,
            l = { ...n, disableSpacing: r },
            u = f(l);
          return (0, p.jsx)(g, {
            className: (0, i.A)(u.root, o),
            ownerState: l,
            ref: t,
            ...s,
          });
        });
    },
  },
]);
