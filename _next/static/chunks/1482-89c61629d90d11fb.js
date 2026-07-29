"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1482],
  {
    91482: (e, r, o) => {
      o.d(r, { A: () => n });
      var t = o(95155);
      o(12115);
      let n = (e) => {
        let {
          label: r,
          onClick: o,
          type: n = "button",
          variant: a = "primary",
          size: d = "medium",
          disabled: i = !1,
          rounded: s = "md",
          icon: l,
          id: g,
        } = e;
        return (0, t.jsxs)("button", {
          id: g,
          onClick: i ? void 0 : o,
          disabled: i,
          type: n,
          className:
            "group relative font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1 transition-all duration-300 overflow-hidden\n                "
              .concat(
                {
                  sm: "rounded-sm",
                  md: "rounded-md",
                  lg: "rounded-lg",
                  xl: "rounded-xl",
                  xxl: "rounded-2xl",
                }[s],
                "\n                ",
              )
              .concat(
                i
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                  : "".concat(
                      {
                        primary: "bg-blue-600 hover:bg-blue-700 text-white",
                        secondary:
                          "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200",
                        outlined:
                          "border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50",
                        danger: "bg-red-600 hover:bg-red-700 text-white",
                        quote:
                          "bg-white text-gray-700 border border-gray-200 hover:border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-emerald-50 transition-colors duration-200",
                      }[a],
                    ),
                "\n                ",
              )
              .concat(
                {
                  small: "py-1.5 px-3 text-sm",
                  medium: "py-2 px-4 text-sm",
                  large: "py-2.5 px-5 text-base",
                }[d],
              ),
          children: [
            !i &&
              (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)("span", {
                  className:
                    "absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none",
                }),
              }),
            (0, t.jsxs)("span", {
              className: "relative z-10 flex items-center justify-center",
              children: [
                l && (0, t.jsx)("span", { className: "mr-2", children: l }),
                " ",
                r,
              ],
            }),
          ],
        });
      };
    },
  },
]);
