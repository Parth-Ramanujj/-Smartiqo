(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1744],
  {
    4032: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => o });
      var l = a(95155),
        r = a(6874),
        n = a.n(r);
      a(12115);
      var d = a(12108),
        t = a(60444);
      let i = [
        { name: "Orders", href: "/AdminPages/Orders" },
        { name: "Manage Users", href: "/AdminPages/UserCreation" },
        { name: "Follow Ups", href: "/AdminPages/FollowUps" },
        { name: "Add Follow Up", href: "/AdminPages/AddFollowUp" },
        { name: "Today's Follow Ups", href: "/AdminPages/TodaysFollowUps" },
        { name: "Future Follow Ups", href: "/AdminPages/FutureFollowUps" },
        { name: "Leads", href: "/AdminPages/Leads" },
        { name: "Total Sales", href: "/AdminPages/TotalSales" },
      ];
      function o() {
        var e, s, a, r, o;
        let { data: m } = (0, d.useSession)(),
          h =
            null !=
            (o =
              null !=
              (r = null == m || null == (e = m.user) ? void 0 : e.firstName)
                ? r
                : null == m || null == (a = m.user) || null == (s = a.name)
                  ? void 0
                  : s.split(" ")[0])
              ? o
              : "",
          c = (0, l.jsxs)("div", {
            className:
              "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",
            children: [
              (0, l.jsx)("header", {
                className:
                  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 shadow-md",
                children: (0, l.jsx)("h1", {
                  className: "text-4xl font-bold text-center",
                  children: h
                    ? "".concat(h, "'s Admin Dashboard")
                    : "Admin Dashboard",
                }),
              }),
              (0, l.jsx)("main", {
                className: "max-w-6xl mx-auto px-4 py-10",
                children: (0, l.jsx)("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: i.map((e) => {
                    let { name: s, href: a } = e;
                    return (0, l.jsx)(
                      n(),
                      {
                        href: a,
                        className:
                          "block transform hover:-translate-y-1 transition",
                        children: (0, l.jsxs)("div", {
                          className:
                            "bg-white/80 backdrop-blur rounded-xl shadow p-6 flex items-center justify-between hover:shadow-xl transition",
                          children: [
                            (0, l.jsx)("span", {
                              className: "text-lg font-medium text-gray-800",
                              children: s,
                            }),
                            (0, l.jsx)("span", {
                              className: "text-indigo-500 text-2xl",
                              children: "→",
                            }),
                          ],
                        }),
                      },
                      a,
                    );
                  }),
                }),
              }),
            ],
          });
        return (0, l.jsx)(t.default, { children: c });
      }
    },
    41744: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 4032));
    },
  },
]);
