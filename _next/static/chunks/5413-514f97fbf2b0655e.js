"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5413],
  {
    65413: (e, l, o) => {
      o.d(l, { A: () => d });
      var r = o(95155);
      o(12115);
      let d = (e) => {
        let {
          label: l,
          value: o,
          onChange: d,
          variant: a = "primary",
          size: t = "medium",
          disabled: s = !1,
          type: n = "text",
          placeholder: c = "",
          className: u = "",
          widthPercentage: m = 100,
          rounded: b = "md",
          name: x,
          autoComplete: p,
        } = e;
        return (0, r.jsxs)("div", {
          className: "".concat(u),
          children: [
            (0, r.jsx)("label", {
              className:
                "block whitespace-nowrap text-sm font-semibold text-gray-500 mb-1",
              children: l,
            }),
            (0, r.jsx)("input", {
              type: n,
              value: o,
              onChange: d,
              disabled: s,
              placeholder: c,
              name: x,
              autoComplete: p,
              className:
                "block w-full rounded-md shadow-md hover:border-gray-500 focus:outline-none\n                     focus:border-blue-500 "
                  .concat(
                    s
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : {
                          primary: "focus:border-blue-500",
                          secondary: "focus:border-blue-500",
                        }[a],
                    "\n                      ",
                  )
                  .concat(
                    {
                      small: "py-1 px-2 text-sm",
                      medium: "py-2 px-4 text-base",
                      large: "py-3 px-6 text-lg",
                    }[t],
                    "  ",
                  )
                  .concat(
                    {
                      sm: "rounded-sm",
                      md: "rounded-md",
                      lg: "rounded-lg",
                      xl: "rounded-xl",
                      xxl: "rounded-2xl",
                    }[b],
                    " border-2\n                      ",
                  ),
              style: { width: "".concat(m, "%") },
            }),
          ],
        });
      };
    },
  },
]);
