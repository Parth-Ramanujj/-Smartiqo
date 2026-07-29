(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2804],
  {
    52804: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 76260));
    },
    76260: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => C });
      var t = s(95155),
        n = s(12115),
        r = s(65413),
        l = s(91482),
        i = s(12108),
        o = s(35695),
        d = s(39365),
        c = s.n(d);
      s(30133);
      var u = s(19946);
      let m = (0, u.A)("eye-off", [
          [
            "path",
            {
              d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
              key: "ct8e1f",
            },
          ],
          [
            "path",
            { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" },
          ],
          [
            "path",
            {
              d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
              key: "13bj9a",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        p = (0, u.A)("eye", [
          [
            "path",
            {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
              key: "1nclc0",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]),
        g = (0, u.A)("shield-alert", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M12 8v4", key: "1got3b" }],
          ["path", { d: "M12 16h.01", key: "1drbdi" }],
        ]);
      var h = s(40646),
        x = s(38274);
      let y = (0, t.jsx)("span", { className: "text-red-500", children: "*" }),
        v = "max-w-5xl",
        f = (e) => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][A-Z0-9]Z[A-Z0-9]$/.test(e),
        b = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        j = (e) => /^\d{6}$/.test(e);
      function w() {
        let e = (0, o.useRouter)(),
          a = (0, o.useSearchParams)(),
          s = (0, n.useRef)(null),
          [d, u] = (0, n.useState)("login"),
          [w, C] = (0, n.useState)("Customer"),
          [N, A] = (0, n.useState)({ email: "", password: "", rememberMe: !1 }),
          [S, k] = (0, n.useState)(!1),
          [P, L] = (0, n.useState)(""),
          [E, I] = (0, n.useState)(""),
          [R, F] = (0, n.useState)(!1),
          [O, _] = (0, n.useState)(!1),
          [D, M] = (0, n.useState)(!1),
          [T, U] = (0, n.useState)({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            alternatePhone: "",
            companyName: "",
            gstin: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pinCode: "",
            country: "",
            sameAddress: !1,
            shippingAddressLine1: "",
            shippingAddressLine2: "",
            shippingCity: "",
            shippingState: "",
            shippingPinCode: "",
            shippingCountry: "",
            technology: { zigbee: !1, tuya: !1, remote: !1 },
          }),
          [z, q] = (0, n.useState)(!1),
          [V, G] = (0, n.useState)(""),
          [Y, Z] = (0, n.useState)("request"),
          [B, H] = (0, n.useState)(""),
          [J, $] = (0, n.useState)(""),
          [X, K] = (0, n.useState)(""),
          [Q, W] = (0, n.useState)(""),
          [ee, ea] = (0, n.useState)(null),
          [es, et] = (0, n.useState)(!1),
          [en, er] = (0, n.useState)(!1),
          el = () => {
            var e;
            null == (e = s.current) ||
              e.scrollIntoView({ behavior: "smooth", block: "center" });
          },
          ei = () => {
            Z("request"), $(""), K(""), W(""), ea(null), et(!1), er(!1);
          };
        async function eo(s) {
          s &&
            "object" == typeof s &&
            "preventDefault" in s &&
            "function" == typeof s.preventDefault &&
            s.preventDefault();
          let t = "boolean" == typeof s ? s : R;
          if (O) return;
          _(!0), L(""), I(""), M(!1);
          let n = a.get("callbackUrl") || "/Dashboards/userDashboard";
          try {
            var r, l;
            let a = N.email.trim(),
              s = a.toLowerCase(),
              o = (a || N.email).replace(/(^.).*(@.*$)/, (e, a, s) =>
                "".concat(a, "***").concat(s),
              );
            console.debug("[login] handleLogin(): start", {
              email: o,
              rememberMe: N.rememberMe,
              callbackUrl: n,
            });
            try {
              let n = await fetch("/api/auth/precheck", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: s || N.email,
                    password: N.password,
                    force: !!t,
                  }),
                }),
                r = await n.json().catch(() => ({}));
              if ((null == r ? void 0 : r.code) === "PENDING_APPROVAL") {
                let t = s || a,
                  n = t
                    ? "/pending-approval?email=".concat(encodeURIComponent(t))
                    : "/pending-approval";
                e.push(n);
                return;
              }
              if ((null == r ? void 0 : r.code) === "INVALID")
                return void L("Invalid email or password.");
              if ((null == r ? void 0 : r.code) === "SUBUSER_EXPIRED")
                return void L(
                  "Your subuser access has expired. Please ask your master to renew.",
                );
              if ((null == r ? void 0 : r.code) === "HAS_ACTIVE" && !t)
                return void M(!0);
              (null == r ? void 0 : r.code) !== "OK" &&
                console.debug("[login] precheck unexpected", r);
            } catch (e) {}
            let d = await (0, i.signIn)("credentials", {
              redirect: !1,
              email: s || N.email,
              password: N.password,
              rememberMe: String(N.rememberMe),
              force: String(t),
              callbackUrl: n,
            });
            if (
              (F(!1),
              console.debug("[login] signIn() result", d),
              (null == d ? void 0 : d.error) === "PENDING_APPROVAL")
            ) {
              console.debug("[login] pending approval -> /pending-approval");
              let t = s || a,
                n = t
                  ? "/pending-approval?email=".concat(encodeURIComponent(t))
                  : "/pending-approval";
              e.push(n);
              return;
            }
            if (null == d ? void 0 : d.ok) {
              console.debug(
                "[login] success -> window.location.assign(callbackUrl)",
              ),
                window.location.assign(n);
              return;
            }
            if (
              (null == d ? void 0 : d.error) &&
              d.error.includes("CONCURRENT_SESSION")
            )
              return void M(!0);
            if ((null == d ? void 0 : d.error) === "SUBUSER_EXPIRED")
              return void L(
                "Your subuser access has expired. Please ask your master to renew.",
              );
            if ((null == d ? void 0 : d.error) === "CredentialsSignin")
              return void L("Invalid email or password.");
            if ((null == d ? void 0 : d.error) && "string" == typeof d.error)
              return void L(d.error);
            console.debug(
              "[login] error",
              null != (r = null == d ? void 0 : d.error)
                ? r
                : "Invalid email or password.",
            ),
              L(
                null != (l = null == d ? void 0 : d.error)
                  ? l
                  : "Invalid email or password.",
              );
          } catch (e) {
            console.error("[login] exception during signIn", e),
              L("Unexpected error during sign in");
          } finally {
            _(!1);
          }
        }
        async function ed() {
          ea(null), L(""), I("");
          let e = B.trim().toLowerCase();
          if (!e || !b(e))
            return void ea({
              type: "error",
              message: "Enter a valid email address.",
            });
          et(!0);
          try {
            let a = await fetch("/api/auth/password/forgot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e }),
              }),
              s = await a.json().catch(() => ({}));
            if (!a.ok) {
              let e = null == s ? void 0 : s.error;
              if ("forbidden_role" === e)
                return void ea({
                  type: "error",
                  message:
                    "Admin and SuperAdmin accounts require an administrator to reset the password.",
                });
              if ("inactive_user" === e)
                return void ea({
                  type: "error",
                  message:
                    "Your account is not active yet. Please wait for approval.",
                });
              if ("email_not_configured" === e)
                return void ea({
                  type: "error",
                  message:
                    "Email is not configured on the server. Please contact support.",
                });
              ea({
                type: "error",
                message: "Could not send the code. Please try again.",
              });
              return;
            }
            ea({
              type: "success",
              message: (null == s ? void 0 : s.masked)
                ? "If that account exists, we sent a 6-digit code to ".concat(
                    s.masked,
                    ".",
                  )
                : "If that account exists, we sent a 6-digit code.",
            }),
              Z("verify"),
              H(e),
              A((a) => ({ ...a, email: e }));
          } catch (e) {
            ea({
              type: "error",
              message: "Could not send the code. Please try again in a moment.",
            });
          } finally {
            et(!1);
          }
        }
        async function ec() {
          ea(null), L(""), I("");
          let e = B.trim().toLowerCase(),
            a = J.trim();
          if (!e || !b(e))
            return void ea({
              type: "error",
              message: "Enter a valid email address.",
            });
          if (!j(a))
            return void ea({
              type: "error",
              message: "Enter the 6-digit code we emailed you.",
            });
          if (X.length < 8)
            return void ea({
              type: "error",
              message: "New password must be at least 8 characters long.",
            });
          if (X !== Q)
            return void ea({
              type: "error",
              message: "New password and confirmation must match.",
            });
          er(!0);
          try {
            let s = await fetch("/api/auth/password/reset", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e, otp: a, newPassword: X }),
              }),
              t = await s.json().catch(() => ({}));
            if (!s.ok) {
              let e = null == t ? void 0 : t.error;
              if ("expired_or_missing" === e) {
                ea({
                  type: "error",
                  message: "The code expired. Please request a new one.",
                }),
                  Z("request");
                return;
              }
              if ("invalid_otp" === e) {
                let e =
                  "number" == typeof (null == t ? void 0 : t.remainingAttempts)
                    ? " (".concat(t.remainingAttempts, " tries left)")
                    : "";
                ea({
                  type: "error",
                  message: "The code you entered is incorrect".concat(e, "."),
                });
                return;
              }
              if ("weak_password" === e)
                return void ea({
                  type: "error",
                  message: "New password must be at least 8 characters long.",
                });
              if ("same_password" === e)
                return void ea({
                  type: "error",
                  message:
                    "Choose a password that is different from your current one.",
                });
              if ("forbidden_role" === e)
                return void ea({
                  type: "error",
                  message:
                    "Admin and SuperAdmin accounts require an administrator to reset the password.",
                });
              if ("inactive_user" === e)
                return void ea({
                  type: "error",
                  message:
                    "Your account is not active yet. Please wait for approval.",
                });
              ea({
                type: "error",
                message: "Could not reset the password. Please try again.",
              });
              return;
            }
            ei(),
              A((a) => ({ ...a, email: e, password: "" })),
              I(
                "Password reset successful. Please sign in with your new password.",
              ),
              u("login");
          } catch (e) {
            ea({
              type: "error",
              message: "Could not reset the password. Please try again.",
            });
          } finally {
            er(!1);
          }
        }
        async function eu() {
          L(""), G(""), q(!0);
          let a = [
            "firstName",
            "lastName",
            "email",
            "password",
            "phone",
            "companyName",
            "addressLine1",
            "city",
            "state",
            "pinCode",
            "country",
          ];
          if (("OEM" === w && a.push("gstin"), a.find((e) => !T[e]))) {
            L("Please fill all required fields."), el(), q(!1);
            return;
          }
          let s = {
              addressLine1: T.addressLine1,
              addressLine2: T.addressLine2 || null,
              city: T.city,
              state: T.state,
              pinCode: T.pinCode,
              country: T.country,
            },
            t = T.sameAddress
              ? s
              : {
                  addressLine1: T.shippingAddressLine1,
                  addressLine2: T.shippingAddressLine2 || null,
                  city: T.shippingCity,
                  state: T.shippingState,
                  pinCode: T.shippingPinCode,
                  country: T.shippingCountry,
                },
            n = {
              role: w,
              firstName: T.firstName,
              lastName: T.lastName,
              email: T.email,
              password: T.password,
              phone: T.phone,
              alternatePhone: T.alternatePhone || null,
              companyName: T.companyName || null,
              gstin: T.gstin || null,
              addressLine1: s.addressLine1,
              addressLine2: s.addressLine2,
              city: s.city,
              state: s.state,
              pinCode: s.pinCode,
              country: s.country,
              sameAddress: T.sameAddress,
              shippingAddressLine1: t.addressLine1,
              shippingAddressLine2: t.addressLine2,
              shippingCity: t.city,
              shippingState: t.state,
              shippingPinCode: t.pinCode,
              shippingCountry: t.country,
            };
          "OEM" === w && (n.technology = T.technology);
          try {
            let a = await fetch("/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n),
            });
            if (a.ok)
              G(
                "Registration successful! You can use your account after admin approval.",
              ),
                u("login"),
                e.replace("/Login"),
                e.refresh();
            else {
              let { message: e } = await a.json();
              L(e || "Registration failed");
            }
          } catch (e) {
            L("Network error");
          } finally {
            q(!1);
          }
        }
        return (
          (0, n.useEffect)(() => {
            if ("forgot" !== d) return void ei();
            N.email && !B && H(N.email), ea(null);
          }, [d, N.email, B]),
          (0, n.useEffect)(() => {
            if ("PENDING_APPROVAL" === a.get("error")) {
              let s = a.get("email"),
                t = s
                  ? "/pending-approval?email=".concat(encodeURIComponent(s))
                  : "/pending-approval";
              e.replace(t);
            }
            let s = a.get("error");
            if (
              s &&
              (s.includes("CONCURRENT_SESSION") ||
                s.includes("CallbackRouteError") ||
                s.includes("CredentialsSignin"))
            ) {
              let e = (N.email || "").trim().toLowerCase();
              e &&
                (async () => {
                  try {
                    let a = await fetch(
                      "/api/auth/has-active-sessions?email=".concat(
                        encodeURIComponent(e),
                      ),
                      { cache: "no-store" },
                    );
                    if (a.ok) {
                      let e = await a.json();
                      (null == e ? void 0 : e.ok) &&
                        (null == e ? void 0 : e.hasActive) &&
                        M(!0);
                    }
                  } catch (e) {}
                })();
            }
          }, [a, e]),
          (0, t.jsxs)("div", {
            className:
              "relative flex min-h-screen items-center justify-center bg-white p-8",
            children: [
              (0, t.jsxs)("div", {
                className: "z-10",
                children: [
                  "login" === d &&
                    (0, t.jsxs)("div", {
                      className: "w-full ".concat(
                        v,
                        " rounded-2xl bg-white p-8 shadow-lg",
                      ),
                      children: [
                        (0, t.jsx)("div", {
                          className: "mb-6 flex justify-center",
                          children: (0, t.jsx)("div", {
                            className: "avatar-ring h-24 w-24",
                            children: (0, t.jsx)("img", {
                              src: "/Image/logoVerni.png",
                              alt: "Logo",
                              className:
                                "h-full w-full rounded-full object-contain p-2 bg-white",
                            }),
                          }),
                        }),
                        (0, t.jsx)("h1", {
                          className: "mb-6 text-center text-2xl font-bold",
                          children: "Login",
                        }),
                        (0, t.jsxs)("form", {
                          ref: s,
                          onSubmit: (e) => {
                            e.preventDefault(), eo();
                          },
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            (P || E) &&
                              (0, t.jsx)("p", {
                                className:
                                  "col-span-2 mb-2 text-center ".concat(
                                    P ? "text-red-600" : "text-green-600",
                                  ),
                                children: P || E,
                              }),
                            (0, t.jsx)(r.A, {
                              label: "Email",
                              type: "email",
                              name: "email",
                              autoComplete: "email",
                              value: N.email,
                              onChange: (e) =>
                                A((a) => ({ ...a, email: e.target.value })),
                              className: "col-span-2",
                            }),
                            (0, t.jsxs)("div", {
                              className: "relative col-span-2",
                              children: [
                                (0, t.jsx)("label", {
                                  className:
                                    "mb-1 block text-sm font-semibold text-gray-500",
                                  children: "Password",
                                }),
                                (0, t.jsx)("input", {
                                  name: "password",
                                  autoComplete: "current-password",
                                  type: S ? "text" : "password",
                                  value: N.password,
                                  onChange: (e) =>
                                    A((a) => ({
                                      ...a,
                                      password: e.target.value,
                                    })),
                                  className:
                                    "block w-full rounded-md border-2 px-4 py-2 pr-10 shadow-md hover:border-gray-500 focus:border-blue-500",
                                }),
                                (0, t.jsx)("button", {
                                  type: "button",
                                  onClick: () => k((e) => !e),
                                  className:
                                    "absolute right-3 top-9 text-gray-600",
                                  children: S
                                    ? (0, t.jsx)(m, { size: 20 })
                                    : (0, t.jsx)(p, { size: 20 }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "col-span-2 flex items-center justify-between",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, t.jsx)("input", {
                                      type: "checkbox",
                                      checked: N.rememberMe,
                                      onChange: (e) =>
                                        A((a) => ({
                                          ...a,
                                          rememberMe: e.target.checked,
                                        })),
                                      className: "mr-2 accent-blue-500",
                                    }),
                                    (0, t.jsx)("label", {
                                      className: "text-sm",
                                      children: "Remember Me",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("button", {
                                  type: "button",
                                  onClick: () => {
                                    H((N.email || "").trim()),
                                      L(""),
                                      I(""),
                                      ea(null),
                                      Z("request"),
                                      u("forgot");
                                  },
                                  className:
                                    "hidden text-sm font-semibold text-blue-600 hover:underline",
                                  children: "Forgot password?",
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "col-span-2 flex justify-center",
                              children: (0, t.jsx)(l.A, {
                                label: "Login",
                                onClick: eo,
                                type: "submit",
                                variant: "primary",
                                rounded: "xl",
                                disabled: !N.email || !N.password || O,
                              }),
                            }),
                            (0, t.jsxs)("p", {
                              className: "hidden col-span-2 text-center text-sm",
                              children: [
                                "Don’t have an account?",
                                " ",
                                (0, t.jsx)("button", {
                                  onClick: () => u("register"),
                                  className: "text-blue-500 hover:underline",
                                  children: "Register here",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  "register" === d &&
                    (0, t.jsxs)("div", {
                      className:
                        "w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg",
                      children: [
                        (0, t.jsx)("div", {
                          className: "mb-6 flex justify-center",
                          children: (0, t.jsx)("div", {
                            className: "avatar-ring h-24 w-24",
                            children: (0, t.jsx)("img", {
                              src: "/Image/logoVerni.png",
                              alt: "Logo",
                              className:
                                "h-full w-full rounded-full object-contain p-2 bg-white",
                            }),
                          }),
                        }),
                        (0, t.jsx)("h2", {
                          className: "mb-6 text-center text-2xl font-bold",
                          children: "Register to SwitchCraft",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "mb-8 flex justify-center gap-8 text-lg font-semibold",
                          children: ["OEM", "Customer"].map((e) =>
                            (0, t.jsx)(
                              "button",
                              {
                                onClick: () => C(e),
                                className: "border-b-2 pb-2 ".concat(
                                  w === e
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-blue-400",
                                ),
                                children: e,
                              },
                              e,
                            ),
                          ),
                        }),
                        (0, t.jsxs)("form", {
                          ref: s,
                          onSubmit: (e) => e.preventDefault(),
                          className: "grid grid-cols-2 gap-6",
                          children: [
                            (P || V) &&
                              (0, t.jsx)("p", {
                                className:
                                  "col-span-2 mb-2 text-center ".concat(
                                    P ? "text-red-600" : "text-green-600",
                                  ),
                                children: P || V,
                              }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["First Name ", y],
                              }),
                              type: "text",
                              value: T.firstName,
                              onChange: (e) =>
                                U((a) => ({ ...a, firstName: e.target.value })),
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["Last Name ", y],
                              }),
                              type: "text",
                              value: T.lastName,
                              onChange: (e) =>
                                U((a) => ({ ...a, lastName: e.target.value })),
                            }),
                            "OEM" === w &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["Company Name ", y],
                                    }),
                                    type: "text",
                                    value: T.companyName,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        companyName: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, t.jsx)(r.A, {
                                        label: (0, t.jsxs)(t.Fragment, {
                                          children: ["GSTIN ", y],
                                        }),
                                        type: "text",
                                        value: T.gstin,
                                        onChange: (e) =>
                                          U((a) => ({
                                            ...a,
                                            gstin: e.target.value.toUpperCase(),
                                          })),
                                      }),
                                      f(T.gstin) &&
                                        (0, t.jsx)(h.A, {
                                          className:
                                            "absolute right-3 top-1/2 text-green-600",
                                          size: 20,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            "Customer" === w &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["Company Name ", y],
                                    }),
                                    type: "text",
                                    value: T.companyName,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        companyName: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: "GSTIN (optional)",
                                    type: "text",
                                    value: T.gstin,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        gstin: e.target.value.toUpperCase(),
                                      })),
                                  }),
                                ],
                              }),
                            (0, t.jsxs)("div", {
                              className: "relative col-span-2",
                              children: [
                                (0, t.jsx)(r.A, {
                                  label: (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      "OEM" === w
                                        ? "Official Email Id"
                                        : "Email",
                                      " ",
                                      y,
                                    ],
                                  }),
                                  type: "email",
                                  value: T.email,
                                  onChange: (e) =>
                                    U((a) => ({ ...a, email: e.target.value })),
                                }),
                                b(T.email) &&
                                  (0, t.jsx)(h.A, {
                                    className:
                                      "absolute right-3 top-1/2 text-green-600",
                                    size: 20,
                                  }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "col-span-1",
                              children: [
                                (0, t.jsxs)("label", {
                                  className: "mb-1 block text-sm font-medium",
                                  children: ["Phone Number ", y],
                                }),
                                (0, t.jsx)(c(), {
                                  country: "in",
                                  enableSearch: !0,
                                  value: T.phone,
                                  onChange: (e) =>
                                    U((a) => ({ ...a, phone: e })),
                                  containerClass: "w-full",
                                  inputClass:
                                    "h-12 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  buttonClass:
                                    "border border-gray-300 rounded-l-lg",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "col-span-1",
                              children: [
                                (0, t.jsxs)("label", {
                                  className: "mb-1 block text-sm font-medium",
                                  children: [
                                    "Alternate Phone ",
                                    (0, t.jsx)("span", {
                                      className: "text-gray-500",
                                      children: "(optional)",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(c(), {
                                  country: "in",
                                  enableSearch: !0,
                                  value: T.alternatePhone,
                                  onChange: (e) =>
                                    U((a) => ({ ...a, alternatePhone: e })),
                                  containerClass: "w-full",
                                  inputClass:
                                    "h-12 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  buttonClass:
                                    "border border-gray-300 rounded-l-lg",
                                }),
                              ],
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["Password ", y],
                              }),
                              type: "password",
                              value: T.password,
                              onChange: (e) =>
                                U((a) => ({ ...a, password: e.target.value })),
                              className: "col-span-2",
                            }),
                            (0, t.jsx)("div", {
                              className: "col-span-2 font-semibold",
                              children: "Billing Address",
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["Address Line 1 ", y],
                              }),
                              type: "text",
                              value: T.addressLine1,
                              onChange: (e) =>
                                U((a) => ({
                                  ...a,
                                  addressLine1: e.target.value,
                                })),
                            }),
                            (0, t.jsx)(r.A, {
                              label: "Address Line 2",
                              type: "text",
                              value: T.addressLine2,
                              onChange: (e) =>
                                U((a) => ({
                                  ...a,
                                  addressLine2: e.target.value,
                                })),
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["City ", y],
                              }),
                              type: "text",
                              value: T.city,
                              onChange: (e) =>
                                U((a) => ({ ...a, city: e.target.value })),
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["State ", y],
                              }),
                              type: "text",
                              value: T.state,
                              onChange: (e) =>
                                U((a) => ({ ...a, state: e.target.value })),
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["Pin Code ", y],
                              }),
                              type: "text",
                              value: T.pinCode,
                              onChange: (e) =>
                                U((a) => ({ ...a, pinCode: e.target.value })),
                            }),
                            (0, t.jsx)(r.A, {
                              label: (0, t.jsxs)(t.Fragment, {
                                children: ["Country ", y],
                              }),
                              type: "text",
                              value: T.country,
                              onChange: (e) =>
                                U((a) => ({ ...a, country: e.target.value })),
                            }),
                            (0, t.jsxs)("div", {
                              className: "col-span-2 flex items-center",
                              children: [
                                (0, t.jsx)("input", {
                                  type: "checkbox",
                                  checked: T.sameAddress,
                                  onChange: (e) =>
                                    U((a) => ({
                                      ...a,
                                      sameAddress: e.target.checked,
                                    })),
                                  className: "mr-2 accent-blue-500",
                                }),
                                (0, t.jsx)("label", {
                                  className: "text-sm",
                                  children: "Shipping same as billing",
                                }),
                              ],
                            }),
                            !T.sameAddress &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "col-span-2 font-semibold",
                                    children: "Shipping Address",
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["Address Line 1 ", y],
                                    }),
                                    type: "text",
                                    value: T.shippingAddressLine1,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        shippingAddressLine1: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: "Address Line 2",
                                    type: "text",
                                    value: T.shippingAddressLine2,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        shippingAddressLine2: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["City ", y],
                                    }),
                                    type: "text",
                                    value: T.shippingCity,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        shippingCity: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["State ", y],
                                    }),
                                    type: "text",
                                    value: T.shippingState,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        shippingState: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["Pin Code ", y],
                                    }),
                                    type: "text",
                                    value: T.shippingPinCode,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        shippingPinCode: e.target.value,
                                      })),
                                  }),
                                  (0, t.jsx)(r.A, {
                                    label: (0, t.jsxs)(t.Fragment, {
                                      children: ["Country ", y],
                                    }),
                                    type: "text",
                                    value: T.shippingCountry,
                                    onChange: (e) =>
                                      U((a) => ({
                                        ...a,
                                        shippingCountry: e.target.value,
                                      })),
                                  }),
                                ],
                              }),
                            "OEM" === w &&
                              (0, t.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "mb-1 font-semibold",
                                    children: "Technology",
                                  }),
                                  ["zigbee", "tuya", "remote"].map((e) =>
                                    (0, t.jsxs)(
                                      "label",
                                      {
                                        className:
                                          "mr-4 inline-flex items-center",
                                        children: [
                                          (0, t.jsx)("input", {
                                            type: "checkbox",
                                            checked: T.technology[e],
                                            onChange: (a) =>
                                              U((s) => ({
                                                ...s,
                                                technology: {
                                                  ...s.technology,
                                                  [e]: a.target.checked,
                                                },
                                              })),
                                            className: "mr-1 accent-blue-500",
                                          }),
                                          e.charAt(0).toUpperCase() +
                                            e.slice(1),
                                        ],
                                      },
                                      e,
                                    ),
                                  ),
                                ],
                              }),
                            (0, t.jsx)("div", {
                              className: "col-span-2 mt-4 flex justify-center",
                              children: (0, t.jsx)(l.A, {
                                label: z ? "Registering…" : "Register",
                                onClick: eu,
                                variant: "primary",
                                rounded: "xl",
                                disabled: z,
                              }),
                            }),
                            (0, t.jsxs)("p", {
                              className: "hidden col-span-2 mt-4 text-center text-sm",
                              children: [
                                "Already have an account?",
                                " ",
                                (0, t.jsx)("button", {
                                  onClick: () => u("login"),
                                  className: "text-blue-500 hover:underline",
                                  children: "Login here",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  "forgot" === d &&
                    (function () {
                      let e = ee
                        ? "error" === ee.type
                          ? "text-red-600"
                          : "success" === ee.type
                            ? "text-green-600"
                            : "text-slate-700"
                        : "";
                      return (0, t.jsxs)("div", {
                        className: "w-full ".concat(
                          v,
                          " rounded-2xl bg-white p-8 shadow-lg",
                        ),
                        children: [
                          (0, t.jsxs)("div", {
                            className: "mb-6 text-center",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600",
                                children: (0, t.jsx)(g, { size: 28 }),
                              }),
                              (0, t.jsx)("h2", {
                                className: "text-2xl font-bold",
                                children: "Forgot your password?",
                              }),
                              (0, t.jsx)("p", {
                                className: "mt-2 text-sm text-gray-600",
                                children:
                                  "Send a one-time code to your email and reset it.",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("form", {
                            ref: s,
                            onSubmit: (e) => e.preventDefault(),
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              ee &&
                                (0, t.jsx)("p", {
                                  className:
                                    "col-span-2 mb-2 text-center ".concat(e),
                                  children: ee.message,
                                }),
                              (0, t.jsx)(r.A, {
                                label: "Account Email",
                                type: "email",
                                name: "reset-email",
                                autoComplete: "email",
                                value: B,
                                onChange: (e) => {
                                  H(e.target.value), ea(null), Z("request");
                                },
                                className: "col-span-2",
                              }),
                              "verify" === Y &&
                                (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(r.A, {
                                      label: "6-digit Code",
                                      type: "text",
                                      name: "reset-otp",
                                      autoComplete: "one-time-code",
                                      value: J,
                                      onChange: (e) => $(e.target.value),
                                      className: "col-span-2",
                                    }),
                                    (0, t.jsx)(r.A, {
                                      label: "New Password",
                                      type: "password",
                                      name: "new-password",
                                      autoComplete: "new-password",
                                      value: X,
                                      onChange: (e) => K(e.target.value),
                                      className: "col-span-1",
                                    }),
                                    (0, t.jsx)(r.A, {
                                      label: "Confirm New Password",
                                      type: "password",
                                      name: "confirm-password",
                                      autoComplete: "new-password",
                                      value: Q,
                                      onChange: (e) => W(e.target.value),
                                      className: "col-span-1",
                                    }),
                                  ],
                                }),
                              (0, t.jsxs)("div", {
                                className:
                                  "col-span-2 mt-2 flex flex-wrap gap-3",
                                children: [
                                  (0, t.jsx)(l.A, {
                                    label: es ? "Sending code..." : "Send code",
                                    onClick: ed,
                                    variant: "primary",
                                    rounded: "xl",
                                    disabled: es || !B,
                                  }),
                                  "verify" === Y &&
                                    (0, t.jsx)(l.A, {
                                      label: en
                                        ? "Resetting..."
                                        : "Reset password",
                                      onClick: ec,
                                      variant: "outlined",
                                      rounded: "xl",
                                      disabled: en || !J || !X || X !== Q,
                                    }),
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                      u("login"), ea(null), L(""), I("");
                                    },
                                    className:
                                      "text-sm font-semibold text-blue-600 hover:underline",
                                    children: "Back to login",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      });
                    })(),
                ],
              }),
              D &&
                (0, t.jsx)("div", {
                  className:
                    "fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm",
                  children: (0, t.jsx)(x.P.div, {
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                    whileHover: { scale: 1.02 },
                    transition: { duration: 0.2, ease: "easeOut" },
                    className:
                      "relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-slate-100 via-white to-blue-50 p-[1px] shadow-2xl",
                    children: (0, t.jsxs)("div", {
                      className:
                        "relative overflow-hidden rounded-3xl bg-white px-8 py-10 text-center",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/10",
                        }),
                        (0, t.jsx)(x.P.div, {
                          className:
                            "relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-inner",
                          initial: { scale: 0.9, opacity: 0 },
                          animate: { scale: 1, opacity: 1 },
                          transition: {
                            delay: 0.1,
                            type: "spring",
                            stiffness: 220,
                            damping: 15,
                          },
                          children: (0, t.jsx)(g, { size: 28 }),
                        }),
                        (0, t.jsx)("h2", {
                          className:
                            "relative mb-3 text-xl font-semibold text-slate-800",
                          children: "Another active session detected",
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "relative mx-auto max-w-md text-sm text-slate-600",
                          children:
                            "Choose where you'd like to stay signed in. Continuing here will immediately revoke access on the other device.",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "relative mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
                          children: [
                            (0, t.jsx)(x.P.div, {
                              whileHover: { y: -4 },
                              whileTap: { scale: 0.96 },
                              className: "sm:w-auto",
                              children: (0, t.jsx)(l.A, {
                                label: "Continue here",
                                onClick: () => {
                                  M(!1), F(!1), eo(!0);
                                },
                                variant: "primary",
                                rounded: "xl",
                                size: "large",
                              }),
                            }),
                            (0, t.jsx)(x.P.div, {
                              whileHover: { y: -4 },
                              whileTap: { scale: 0.96 },
                              className: "sm:w-auto",
                              children: (0, t.jsx)(l.A, {
                                label: "Stay on existing session",
                                onClick: () => {
                                  M(!1), F(!1);
                                },
                                variant: "outlined",
                                rounded: "xl",
                                size: "large",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          })
        );
      }
      function C() {
        return (0, t.jsx)(n.Suspense, {
          fallback: null,
          children: (0, t.jsx)(w, {}),
        });
      }
    },
  },
]);
