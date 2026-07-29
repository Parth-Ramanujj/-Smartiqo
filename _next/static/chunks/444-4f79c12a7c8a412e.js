"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [444],
  {
    60444: (e, t, n) => {
      n.d(t, { default: () => l });
      var o = n(95155),
        i = n(12115),
        a = n(12108),
        s = n(26909),
        r = n(54581);
      function l(e) {
        var t;
        let { children: n } = e,
          { data: l, status: u } = (0, a.useSession)(),
          [d, c] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)(""),
          [f, m] = (0, i.useState)(""),
          [v, g] = (0, i.useState)(""),
          w = (0, i.useMemo)(() => {
            var e;
            return (null == l || null == (e = l.user) ? void 0 : e.id)
              ? "adminGateUnlocked_".concat(l.user.id)
              : void 0;
          }, [null == l || null == (t = l.user) ? void 0 : t.id]),
          [y, A] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          if (w)
            try {
              let e = sessionStorage.getItem(w);
              "true" === e && A(!0);
            } catch (e) {}
        }, [w]),
          (0, i.useEffect)(() => {
            let e =
              (null == l ? void 0 : l.user.role) === "Admin" ||
              (null == l ? void 0 : l.user.role) === "SuperAdmin";
            if ("authenticated" === u && e) {
              c(!1);
              try {
                w && sessionStorage.setItem(w, "true");
              } catch (e) {}
              A(!0);
            } else
              "unauthenticated" === u
                ? c(!0)
                : "authenticated" !== u || e || c(!0);
          }, [u, l, w]);
        let b = async (e) => {
          var t, n;
          e.preventDefault(), g("");
          try {
            let e = await fetch("/api/auth/precheck", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: h.trim().toLowerCase(),
                  password: f,
                  force: !1,
                }),
              }),
              t = e.ok ? await e.json() : null;
            if ((null == t ? void 0 : t.code) === "PENDING_APPROVAL")
              return void g("Account pending approval.");
            if ((null == t ? void 0 : t.code) === "INVALID")
              return void g("Invalid credentials");
            if ((null == t ? void 0 : t.code) === "HAS_ACTIVE") {
              if (
                !window.confirm(
                  "Another session is active for this account. Continue here and revoke the other session?",
                )
              )
                return;
              await fetch("/api/auth/precheck", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: h.trim().toLowerCase(),
                  password: f,
                  force: !0,
                }),
              });
            }
          } catch (e) {}
          let o = await (0, a.signIn)("credentials", {
            redirect: !1,
            email: h,
            password: f,
          });
          if ((null == o ? void 0 : o.error) === "PENDING_APPROVAL")
            return void g("Account pending approval.");
          if (null == o ? void 0 : o.error)
            try {
              let e = await fetch(
                  "/api/auth/has-active-sessions?email=".concat(
                    encodeURIComponent(h),
                  ),
                  { cache: "no-store" },
                ),
                n = e.ok ? await e.json() : null;
              if (
                (null == n ? void 0 : n.ok) &&
                (null == n ? void 0 : n.hasActive) &&
                window.confirm(
                  "Another session is active for this account. Continue here and revoke the other session?",
                )
              ) {
                let e = await (0, a.signIn)("credentials", {
                  redirect: !1,
                  email: h,
                  password: f,
                  force: "true",
                });
                if (null == e ? void 0 : e.ok) {
                  let e = await fetch("/api/auth/session"),
                    n = await e.json(),
                    o = null == n || null == (t = n.user) ? void 0 : t.role;
                  if ("Admin" === o || "SuperAdmin" === o) {
                    c(!1);
                    try {
                      w && sessionStorage.setItem(w, "true");
                    } catch (e) {}
                    A(!0);
                    return;
                  }
                }
              }
            } catch (e) {}
          if (null == o ? void 0 : o.ok) {
            let e = await fetch("/api/auth/session"),
              t = await e.json(),
              o = null == t || null == (n = t.user) ? void 0 : n.role;
            if ("Admin" === o || "SuperAdmin" === o) {
              c(!1);
              try {
                w && sessionStorage.setItem(w, "true");
              } catch (e) {}
              A(!0);
            } else g("Unauthorized");
          } else g("Invalid credentials");
        };
        return "loading" === u && y
          ? (0, o.jsx)(o.Fragment, { children: n })
          : "loading" === u || d
            ? (0, o.jsx)(s.A, {
                open: !0,
                children: (0, o.jsx)(r.A, {
                  sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    minWidth: 320,
                  },
                  children: (0, o.jsxs)("div", {
                    className: "bg-white rounded-xl p-6 space-y-4 shadow-lg",
                    children: [
                      (0, o.jsx)("h3", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "Admin Login",
                      }),
                      (0, o.jsxs)("form", {
                        onSubmit: b,
                        className: "space-y-4",
                        children: [
                          (0, o.jsx)("input", {
                            value: h,
                            onChange: (e) => p(e.target.value),
                            placeholder: "User ID",
                            autoComplete: "username",
                            className:
                              "w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
                          }),
                          (0, o.jsx)("input", {
                            value: f,
                            onChange: (e) => m(e.target.value),
                            type: "password",
                            placeholder: "Password",
                            autoComplete: "current-password",
                            className:
                              "w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
                          }),
                          v &&
                            (0, o.jsx)("p", {
                              className: "text-red-500 text-sm",
                              children: v,
                            }),
                          (0, o.jsx)("button", {
                            type: "submit",
                            className:
                              "w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition",
                            children: "Login",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            : (0, o.jsx)(o.Fragment, { children: n });
      }
    },
  },
]);
