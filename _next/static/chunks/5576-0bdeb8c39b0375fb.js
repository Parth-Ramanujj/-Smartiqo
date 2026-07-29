"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5576],
  {
    335: (e, r, t) => {
      t.d(r, { A: () => s });
      var i = t(31418),
        o = t(95155);
      let s = (0, i.A)(
        [
          (0, o.jsx)(
            "path",
            {
              d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
            },
            "0",
          ),
          (0, o.jsx)(
            "path",
            { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
            "1",
          ),
        ],
        "Schedule",
      );
    },
    18558: (e, r, t) => {
      t.d(r, { A: () => s });
      var i = t(31418),
        o = t(95155);
      let s = (0, i.A)(
        (0, o.jsx)("path", {
          d: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3",
        }),
        "Groups",
      );
    },
    86682: (e, r, t) => {
      t.d(r, { A: () => s });
      var i = t(31418),
        o = t(95155);
      let s = (0, i.A)(
        (0, o.jsx)("path", {
          d: "m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
        }),
        "PlayCircleOutline",
      );
    },
    95576: (e, r, t) => {
      t.d(r, { w: () => S });
      var i = t(95155);
      t(12115);
      var o = t(54581),
        s = t(68534),
        n = t(36114),
        l = t(54492),
        a = t(99927),
        c = t(700),
        d = t(71977),
        p = t(71803),
        h = t(41101),
        x = t(86220),
        u = t(74964),
        m = t(69242),
        g = t(18558),
        A = t(52671),
        j = t(86682),
        b = t(335),
        v = t(16324),
        w = t(4420),
        f = t(12108);
      let y = (e) => {
          if (!e) return null;
          let r = new Date(e);
          return Number.isNaN(r.getTime()) ? null : r.toLocaleString();
        },
        C = (e) => {
          if ("all" === e.audienceMode) return "All users";
          if ("roles" === e.audienceMode)
            return e.roles.length
              ? "Roles: ".concat(e.roles.join(", "))
              : "Role-specific";
          if ("users" === e.audienceMode)
            return ""
              .concat(e.userIds.length, " direct recipient")
              .concat(1 === e.userIds.length ? "" : "s");
          let r = [];
          return (
            e.roles.length && r.push("Roles: ".concat(e.roles.join(", "))),
            e.userIds.length &&
              r.push(
                ""
                  .concat(e.userIds.length, " recipient")
                  .concat(1 === e.userIds.length ? "" : "s"),
              ),
            r.join(" • ") || "Targeted audience"
          );
        };
      function S(e) {
        var r;
        let { open: t, notification: S, onClose: k } = e,
          M = (0, v.A)(),
          { data: z } = (0, f.useSession)(),
          I =
            (null == z || null == (r = z.user) ? void 0 : r.role) ===
            "SuperAdmin";
        if (!S)
          return (0, i.jsxs)(n.A, {
            open: t,
            onClose: k,
            maxWidth: "sm",
            fullWidth: !0,
            PaperProps: {
              sx: {
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid ".concat(
                  (0, w.X4)(M.palette.primary.main, 0.12),
                ),
                boxShadow: "0 24px 54px ".concat(
                  (0, w.X4)(M.palette.primary.main, 0.18),
                ),
              },
            },
            children: [
              (0, i.jsx)(l.A, { sx: { pr: 6 }, children: "Notification" }),
              (0, i.jsx)(a.A, {
                dividers: !0,
                children: (0, i.jsx)(c.A, {
                  variant: "body2",
                  color: "text.secondary",
                  children: "This notification is no longer available.",
                }),
              }),
              (0, i.jsx)(d.A, {
                children: (0, i.jsx)(s.A, { onClick: k, children: "Close" }),
              }),
            ],
          });
        let X = y(S.startAt),
          N = y(S.endAt),
          R = C(S);
        return (0, i.jsxs)(n.A, {
          open: t,
          onClose: k,
          maxWidth: "sm",
          fullWidth: !0,
          PaperProps: {
            sx: {
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid ".concat(
                (0, w.X4)(M.palette.primary.main, 0.12),
              ),
              boxShadow: "0 28px 60px ".concat(
                (0, w.X4)(M.palette.primary.main, 0.22),
              ),
              backgroundImage: "linear-gradient(180deg, "
                .concat((0, w.X4)(M.palette.background.paper, 0.96), ", ")
                .concat((0, w.X4)(M.palette.background.default, 0.92), ")"),
              backdropFilter: "blur(16px)",
            },
          },
          children: [
            (0, i.jsxs)(l.A, {
              sx: {
                pr: 7,
                py: 3,
                background: "linear-gradient(135deg, "
                  .concat((0, w.X4)(M.palette.primary.main, 0.24), ", ")
                  .concat((0, w.X4)(M.palette.secondary.main, 0.22), ")"),
                color: M.palette.getContrastText(M.palette.primary.dark),
              },
              children: [
                (0, i.jsxs)(p.A, {
                  spacing: 1,
                  children: [
                    (0, i.jsx)(c.A, {
                      variant: "h5",
                      fontWeight: 700,
                      children: S.title || "Notification",
                    }),
                    (0, i.jsxs)(p.A, {
                      direction: "row",
                      spacing: 1,
                      flexWrap: "wrap",
                      rowGap: 1,
                      children: [
                        I &&
                          (0, i.jsx)(h.A, {
                            icon: (0, i.jsx)(b.A, { sx: { fontSize: 18 } }),
                            label:
                              S.displayMode.replaceAll("_", " ") ||
                              "Display schedule",
                            size: "small",
                            sx: {
                              backgroundColor: (0, w.X4)(
                                M.palette.common.white,
                                0.15,
                              ),
                              color: "inherit",
                              textTransform: "capitalize",
                              "& .MuiChip-icon": { color: "inherit" },
                            },
                          }),
                        I &&
                          (0, i.jsx)(h.A, {
                            icon: (0, i.jsx)(g.A, { sx: { fontSize: 18 } }),
                            label: R,
                            size: "small",
                            sx: {
                              backgroundColor: (0, w.X4)(
                                M.palette.common.white,
                                0.12,
                              ),
                              color: "inherit",
                              "& .MuiChip-icon": { color: "inherit" },
                            },
                          }),
                        S.isNew &&
                          (0, i.jsx)(h.A, {
                            label: "New",
                            size: "small",
                            color: "secondary",
                            sx: { fontWeight: 600 },
                          }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(x.A, {
                  "aria-label": "Close",
                  onClick: k,
                  sx: {
                    position: "absolute",
                    top: 12,
                    right: 12,
                    color: "inherit",
                    bgcolor: (0, w.X4)(M.palette.common.white, 0.1),
                    "&:hover": {
                      bgcolor: (0, w.X4)(M.palette.common.white, 0.25),
                    },
                  },
                  children: (0, i.jsx)(m.A, {}),
                }),
              ],
            }),
            (0, i.jsx)(a.A, {
              sx: { py: 3 },
              children: (0, i.jsxs)(p.A, {
                spacing: 3,
                children: [
                  (0, i.jsxs)(o.A, {
                    children: [
                      (0, i.jsx)(c.A, {
                        variant: "subtitle2",
                        sx: {
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                          color: (0, w.X4)(M.palette.text.secondary, 0.9),
                        },
                        gutterBottom: !0,
                        children: "Message",
                      }),
                      (0, i.jsx)(c.A, {
                        variant: "body1",
                        sx: { whiteSpace: "pre-line" },
                        children: S.message,
                      }),
                    ],
                  }),
                  (S.imageUrl || S.videoUrl) &&
                    (0, i.jsxs)(p.A, {
                      spacing: 3,
                      children: [
                        S.imageUrl &&
                          (0, i.jsxs)(p.A, {
                            spacing: 1.25,
                            children: [
                              (0, i.jsxs)(p.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                  (0, i.jsx)(A.A, {
                                    fontSize: "small",
                                    color: "action",
                                  }),
                                  (0, i.jsx)(c.A, {
                                    variant: "subtitle2",
                                    color: "text.secondary",
                                    children: "Image preview",
                                  }),
                                ],
                              }),
                              (function (e) {
                                if (!e) return null;
                                let r = e.trim();
                                return r
                                  ? (0, i.jsx)(o.A, {
                                      sx: {
                                        position: "relative",
                                        overflow: "hidden",
                                        borderRadius: 3,
                                        boxShadow: (e) => e.shadows[3],
                                      },
                                      children: (0, i.jsx)("img", {
                                        src: r,
                                        alt: "Notification visual",
                                        style: {
                                          width: "100%",
                                          display: "block",
                                        },
                                        onError: (e) => {
                                          e.currentTarget.style.display =
                                            "none";
                                        },
                                      }),
                                    })
                                  : null;
                              })(S.imageUrl),
                            ],
                          }),
                        S.videoUrl &&
                          (0, i.jsxs)(p.A, {
                            spacing: 1.25,
                            children: [
                              (0, i.jsxs)(p.A, {
                                direction: "row",
                                spacing: 1,
                                alignItems: "center",
                                children: [
                                  (0, i.jsx)(j.A, {
                                    fontSize: "small",
                                    color: "action",
                                  }),
                                  (0, i.jsx)(c.A, {
                                    variant: "subtitle2",
                                    color: "text.secondary",
                                    children: "Video",
                                  }),
                                ],
                              }),
                              (function (e) {
                                if (!e) return null;
                                let r = e.trim();
                                if (!r) return null;
                                let t =
                                  /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i.exec(
                                    r,
                                  );
                                if (t) {
                                  let e = t[1];
                                  return (0, i.jsx)(o.A, {
                                    sx: {
                                      position: "relative",
                                      paddingTop: "56.25%",
                                      borderRadius: 3,
                                      overflow: "hidden",
                                      boxShadow: (e) => e.shadows[3],
                                    },
                                    children: (0, i.jsx)("iframe", {
                                      title: "Notification video",
                                      src: "https://www.youtube.com/embed/".concat(
                                        e,
                                      ),
                                      allow:
                                        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                      allowFullScreen: !0,
                                      style: {
                                        border: 0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                      },
                                    }),
                                  });
                                }
                                return /\.(mp4|webm|ogg)$/i.test(r)
                                  ? (0, i.jsx)(o.A, {
                                      sx: {
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow: (e) => e.shadows[2],
                                      },
                                      children: (0, i.jsxs)("video", {
                                        controls: !0,
                                        style: { width: "100%" },
                                        children: [
                                          (0, i.jsx)("source", { src: r }),
                                          "Your browser does not support the video tag.",
                                        ],
                                      }),
                                    })
                                  : (0, i.jsx)(s.A, {
                                      component: "a",
                                      href: r,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      startIcon: (0, i.jsx)(j.A, {}),
                                      variant: "outlined",
                                      color: "primary",
                                      children: "Watch linked video",
                                    });
                              })(S.videoUrl),
                            ],
                          }),
                      ],
                    }),
                  I &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(u.A, {}),
                        (0, i.jsxs)(p.A, {
                          spacing: 1.5,
                          children: [
                            (0, i.jsx)(c.A, {
                              variant: "subtitle2",
                              color: "text.secondary",
                              children: "Delivery window",
                            }),
                            X || N
                              ? (0, i.jsxs)(c.A, {
                                  variant: "body2",
                                  color: "text.secondary",
                                  children: [
                                    X && !N && "Starts ".concat(X),
                                    !X && N && "Available until ".concat(N),
                                    X && N && "".concat(X, " — ").concat(N),
                                  ],
                                })
                              : (0, i.jsx)(c.A, {
                                  variant: "body2",
                                  color: "text.secondary",
                                  children: "No schedule restrictions.",
                                }),
                          ],
                        }),
                        (S.roles.length > 0 || S.userIds.length > 0) &&
                          (0, i.jsxs)(p.A, {
                            spacing: 1.5,
                            children: [
                              (0, i.jsx)(c.A, {
                                variant: "subtitle2",
                                color: "text.secondary",
                                children: "Audience details",
                              }),
                              S.roles.length > 0 &&
                                (0, i.jsx)(p.A, {
                                  direction: "row",
                                  spacing: 1,
                                  flexWrap: "wrap",
                                  rowGap: 1,
                                  children: S.roles.map((e) =>
                                    (0, i.jsx)(
                                      h.A,
                                      {
                                        label: e,
                                        size: "small",
                                        variant: "outlined",
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              S.userIds.length > 0 &&
                                (0, i.jsxs)(c.A, {
                                  variant: "body2",
                                  color: "text.secondary",
                                  children: [
                                    "Direct recipients: ",
                                    S.userIds.length,
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            }),
            (0, i.jsx)(d.A, {
              sx: { px: 3, pb: 3 },
              children: (0, i.jsx)(s.A, {
                onClick: k,
                variant: "contained",
                color: "primary",
                sx: { ml: "auto", borderRadius: 9999 },
                children: "Close",
              }),
            }),
          ],
        });
      }
    },
  },
]);
