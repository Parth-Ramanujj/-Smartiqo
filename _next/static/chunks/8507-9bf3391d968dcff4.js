"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8507],
  {
    88507: (e, t, r) => {
      r.d(t, { A: () => d });
      var s = r(95155),
        l = r(12115);
      let n = () => {
          let e = "#";
          for (let t = 0; t < 6; t++)
            e += "0123456789ABCDEF"[Math.floor(16 * Math.random())];
          return e;
        },
        a = () => {
          let [e, t] = (0, l.useState)("");
          return (
            (0, l.useEffect)(() => {
              t(n());
            }, []),
            (0, s.jsx)("div", {
              style: {
                width: "16px",
                height: "30px",
                backgroundColor: e,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
              },
            })
          );
        },
        d = (e) => {
          let { title: t, fallbackTitle: r } = e,
            l =
              t && t.trim().length > 0
                ? t
                : null != r
                  ? r
                  : "Create your own panel";
          return (0, s.jsxs)("div", {
            className: "flex items-center mb-4 md:mb-0",
            "data-offer-stay": !0,
            children: [
              (0, s.jsx)(a, {}),
              (0, s.jsx)("span", {
                className: "ml-2 text-lg font-bold",
                suppressHydrationWarning: !0,
                children: l,
              }),
            ],
          });
        };
    },
  },
]);
