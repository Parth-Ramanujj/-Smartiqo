"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5756],
  {
    55756: (e, o, r) => {
      r.d(o, { A: () => d });
      var t = r(95155),
        n = r(12115),
        s = r(26909),
        i = r(54581),
        a = r(68534);
      let l = (0, r(31418).A)(
          (0, t.jsx)("path", {
            d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z",
          }),
          "DeleteOutlineOutlined",
        ),
        d = (e) => {
          let {
              onClick: o,
              label: r = "Clear Selection",
              size: d = 20,
              msg: c,
            } = e,
            [x, m] = (0, n.useState)(!1),
            h = () => m(!1);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("button", {
                onClick: () => m(!0),
                className:
                  "group relative flex items-center rounded-xl border border-red-200 bg-white px-4 py-2 text-red-600 font-medium text-sm transition-all duration-300 hover:border-red-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:ring-offset-1 sm:px-3 sm:py-1.5 overflow-hidden",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-transparent via-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative z-10 flex items-center",
                    children: [
                      (0, t.jsx)(l, {
                        fontSize: "small",
                        className: r ? "mr-2" : "",
                      }),
                      r,
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(s.A, {
                open: x,
                onClose: h,
                "aria-labelledby": "confirmation-modal",
                "aria-describedby": "confirmation-to-clear-selection",
                children: (0, t.jsxs)(i.A, {
                  className:
                    "flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md",
                  sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 500,
                    outline: "none",
                    padding: 10,
                  },
                  children: [
                    (0, t.jsx)("h2", {
                      id: "confirmation-modal",
                      className: "mb-4 text-xl font-semibold text-gray-700",
                      children: "Are you sure?",
                    }),
                    (0, t.jsx)("p", {
                      id: "confirmation-to-clear-selection",
                      className: "mb-5 text-gray-500",
                      children: c,
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex gap-3",
                      children: [
                        (0, t.jsx)(a.A, {
                          variant: "contained",
                          color: "error",
                          onClick: () => {
                            null == o || o(), h();
                          },
                          sx: {
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "0.875rem",
                            px: 3,
                            py: 1,
                            boxShadow: "none",
                            "&:hover": { boxShadow: "none" },
                          },
                          children: "Yes",
                        }),
                        (0, t.jsx)(a.A, {
                          variant: "outlined",
                          onClick: h,
                          sx: {
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "0.875rem",
                            px: 3,
                            py: 1,
                            borderColor: "grey.300",
                            color: "text.secondary",
                            "&:hover": {
                              borderColor: "grey.400",
                              bgcolor: "grey.50",
                            },
                          },
                          children: "No",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
]);
