"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2060],
  {
    9794: (e, t, n) => {
      n.d(t, { P: () => c });
      var o = n(26597);
      let r = (e) =>
          "string" == typeof e && e.trim().length > 0 ? e.trim() : null,
        l = (e) => ("string" == typeof e ? e.trim().toUpperCase() : ""),
        a = (e) => {
          if (!e || "string" != typeof e) return null;
          let t = e.trim().replace("#", "");
          if (!/^[0-9a-fA-F]{3,6}$/.test(t)) return null;
          let n = Number.parseInt(
            3 === t.length
              ? t
                  .split("")
                  .map((e) => e + e)
                  .join("")
              : t,
            16,
          );
          return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: 255 & n };
        },
        i = (e) => {
          var t, n, o, r, l, a, i;
          let s = new Map();
          for (let c of [
            ...(null != (t = e.accessories) ? t : []),
            ...(null != (n = e.accessories1) ? n : []),
            ...(null != (o = e.accessories2) ? o : []),
            ...(null != (r = e.accessories3) ? r : []),
          ]) {
            let e =
              null != (l = s.get(c.optionType))
                ? l
                : { label: c.optionType, values: [], seen: new Set() };
            for (let t of null != (a = c.options) ? a : []) {
              let n = null != (i = t.id) ? i : t.item;
              if (!n || e.seen.has(n)) continue;
              e.seen.add(n);
              let o = "string" == typeof t.item ? t.item.trim() : "";
              o && e.values.push(o);
            }
            s.set(c.optionType, e);
          }
          return Array.from(s.values()).map((e) => {
            let { label: t, values: n } = e;
            return { label: t, values: n };
          });
        },
        s = function (e, t) {
          var n, o, r;
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "NOT SELECTED",
            s = (null != (o = e.color) ? o : []).find(
              (e) => e.optionType === t,
            ),
            c = null == s || null == (n = s.options) ? void 0 : n[0];
          return {
            label: l(null == c ? void 0 : c.item) || i,
            swatch: a(null != (r = null == c ? void 0 : c.color) ? r : null),
          };
        };
      async function c(e) {
        var t, n, a, c, d, u, h;
        let {
            logoUrl: x,
            pdfLogoUrl: m,
            cartData: p,
            screenshotDataUrl: g,
            download: f = !1,
            title: b,
            premiumQuoteMode: v = !1,
            panelNameOverrides: y = null,
          } = e,
          w = new o.uE("p", "mm", "a4"),
          j = w.internal.pageSize.getWidth(),
          A = w.internal.pageSize.getHeight();
        async function C() {
          try {
            let e = await fetch("/fonts/Roboto-Regular.ttf"),
              t = await e.arrayBuffer(),
              n = new Uint8Array(t),
              o = "";
            n.forEach((e) => (o += String.fromCharCode(e))),
              w.addFileToVFS("Roboto-Regular.ttf", btoa(o)),
              w.addFont("Roboto-Regular.ttf", "Roboto", "normal"),
              w.setFont("Roboto", "normal");
          } catch (e) {}
        }
        let R = r(m),
          L = Array.from(new Set([R, r(x)].filter((e) => !!e))),
          S = (e) =>
            new Promise((t, n) => {
              let o = new FileReader();
              (o.onload = () => t(o.result)),
                (o.onerror = n),
                o.readAsDataURL(e);
            }),
          F = (e) =>
            new Promise((t, n) => {
              try {
                let o = new Image();
                o.crossOrigin = "anonymous";
                let r = URL.createObjectURL(e);
                (o.onload = () => {
                  try {
                    let e = document.createElement("canvas");
                    (e.width = o.naturalWidth || o.width || 1),
                      (e.height = o.naturalHeight || o.height || 1);
                    let n = e.getContext("2d");
                    if (!n) throw Error("No 2D context");
                    n.drawImage(o, 0, 0, e.width, e.height);
                    let l = e.toDataURL("image/png");
                    URL.revokeObjectURL(r), t(l);
                  } catch (e) {
                    URL.revokeObjectURL(r),
                      n(e instanceof Error ? e : Error(String(e)));
                  }
                }),
                  (o.onerror = () => {
                    URL.revokeObjectURL(r),
                      n(Error("Failed to load image for conversion"));
                  }),
                  (o.src = r);
              } catch (e) {
                n(e instanceof Error ? e : Error(String(e)));
              }
            }),
          k = async (e) => {
            if (e.startsWith("data:")) return e;
            let t = await fetch(e, {
              cache: "no-store",
              credentials: "include",
            });
            if (!t.ok) throw Error("logo fetch failed");
            let n = await t.blob(),
              o = (n.type || "").toLowerCase();
            return o.includes("png") || o.includes("jpeg") || o.includes("jpg")
              ? S(n)
              : await F(n);
          },
          D = null;
        for (let e of L)
          try {
            D = await k(e);
            break;
          } catch (e) {}
        if (D || v)
          !D &&
            v &&
            console.warn(
              "Premium quote mode: No custom logo available for legacy PDF, skipping logo entirely",
            );
        else if (!R)
          try {
            D = await k("/Image/logoVerni.png");
          } catch (e) {}
        await C(), w.setFont("Roboto", "normal");
        let E = j - 40,
          P = E - 20,
          T = P - 36 - 8,
          z = (null == (t = p.panel) ? void 0 : t.item) || "",
          U = y && z && y[z] ? y[z] : z,
          I = (null == (n = p.material) ? void 0 : n.item) || "",
          M = (null == (a = p.size) ? void 0 : a.item) || "",
          O = b || [U, I, M].filter(Boolean).join(" | ");
        w.setFontSize(16);
        let W = O ? w.splitTextToSize(O, E) : [],
          N = 7 * W.length,
          H = i(p),
          V = l(null == (c = p.technology) ? void 0 : c.item) || "NOT SELECTED",
          _ = (null == (d = p.panel) ? void 0 : d.noFrame)
            ? { label: "NOT REQUIRED (TOUCH PANEL)", swatch: null }
            : s(p, "Frame Color"),
          B = s(p, "Material Color"),
          G = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return w.setFontSize(11), w.splitTextToSize(e, T - 14 * !!t);
          },
          Z = H.length
            ? H.flatMap((e) =>
                G("".concat(e.label, ": ").concat(e.values.join(", ")), !1).map(
                  (e) => "- ".concat(e),
                ),
              )
            : ["No accessories added"];
        let cachedIconsData = null;
        try {
          let res = await fetch("/api-static/icons.json");
          if (res.ok) cachedIconsData = await res.json();
        } catch (e) {}
        let iconNames = [];
        if (p.icons && p.icons.length) {
          p.icons.forEach((cat) => {
            if (cat.options && cat.options.length) {
              cat.options.forEach((opt) => {
                let name = "";
                if (cachedIconsData) {
                  for (let c of cachedIconsData) {
                    let found = c.icons.find((ico) => ico.id === opt.id);
                    if (found) {
                      name = found.name;
                      break;
                    }
                  }
                }
                if (
                  !name &&
                  opt.item &&
                  typeof opt.item === "string" &&
                  !opt.item.startsWith("data:")
                ) {
                  let parts = opt.item.split("/");
                  name = parts[parts.length - 1]
                    .replace(".svg", "")
                    .replace(".png", "");
                }
                if (name && isNaN(Number(name)) && !iconNames.includes(name))
                  iconNames.push(name);
              });
            }
          });
        }
        let iconValue = iconNames.length
          ? iconNames.join(", ")
          : "None selected";
        let X = [
            {
              label: "Technology",
              valueLines: G(V || "NOT SELECTED", !1),
              swatch: null,
            },
            { label: "Accessories", valueLines: Z, swatch: null },
            { label: "Icons", valueLines: G(iconValue, !1), swatch: null },
            {
              label: "Panel Color",
              valueLines: G(B.label, !0),
              swatch: B.swatch,
            },
            {
              label: "Frame Color",
              valueLines: G(_.label, !0),
              swatch: _.swatch,
            },
          ],
          q = (e, t) => Math.max(5.2 * Math.max(1, e.length) + 4, 15 * !!t),
          J = 30 + X.reduce((e, t) => e + q(t.valueLines, !!t.swatch) + 2, 0),
          Q = null == (u = p.note) ? void 0 : u.trim(),
          Y = !!Q,
          $ = [],
          K = 0;
        Y &&
          (w.setFontSize(13),
          (K = 13 + 6 * ($ = w.splitTextToSize(Q, E)).length));
        let ee = 18;
        if (D)
          try {
            let e = w.getImageProperties(D),
              t = 55,
              n = (e.height / e.width) * t;
            n > 22 && ((n = 22), (t = (e.width / e.height) * n)),
              w.addImage(
                D,
                D.startsWith("data:image/jpeg") ? "JPEG" : "PNG",
                (j - t) / 2,
                ee,
                t,
                n,
              ),
              (ee += n + 8);
          } catch (e) {
            ee += 10;
          }
        let et = Math.max(0, A - ee - (16 + N + 8 + J + 8 + K + 16)),
          en = Math.min(135, Math.max(95, et));
        en > et && (en = et);
        let eo = ee;
        w.setDrawColor(204, 36, 27),
          w.setLineWidth(1.2),
          w.roundedRect(20, eo, E, en, 6, 6, "S");
        let er = Math.max(0, E - 16),
          el = Math.max(0, en - 16);
        if (g && er > 0 && el > 0 && en > 0)
          try {
            let e = w.getImageProperties(g),
              t = e.width / e.height,
              n = er / el,
              o = er,
              r = el;
            t > n ? (r = o / t) : (o = r * t);
            let l = 20 + (E - o) / 2,
              a = eo + (en - r) / 2;
            w.addImage(
              g,
              g.startsWith("data:image/jpeg") ? "JPEG" : "PNG",
              l,
              a,
              o,
              r,
              void 0,
              "FAST",
            );
          } catch (e) {}
        let ea = eo + en + 16;
        O &&
          W.length &&
          (w.setFont("Roboto", "normal"),
          w.setFontSize(16),
          w.setTextColor(0, 122, 82),
          W.forEach((e) => {
            w.text(e, j / 2, ea, { align: "center" }), (ea += 7);
          }));
        let ei = ea + 8;
        w.setFillColor(247, 249, 252),
          w.setDrawColor(217, 227, 239),
          w.roundedRect(20, ei, E, J, 6, 6, "FD"),
          w.setFillColor(0, 122, 82),
          w.roundedRect(23, ei + 3, 4, J - 6, 2, 2, "F");
        let es = ei + 10;
        w.setTextColor(24, 64, 55),
          w.setFontSize(13),
          w.text("Configuration Snapshot", 30, es + 4),
          (es += 10);
        for (let e = 0; e < X.length; e++) {
          let t = X[e],
            n = q(t.valueLines, !!t.swatch),
            o = es,
            r = o + 6,
            l = 74;
          w.setFontSize(9.5),
            w.setTextColor(76, 86, 106),
            w.text(t.label.toUpperCase(), 30, r),
            w.setFontSize(11),
            w.setTextColor(17, 94, 89);
          let a = o + 6;
          if (t.swatch) {
            let e = null != (h = t.swatch) ? h : { r: 241, g: 245, b: 249 };
            w.setDrawColor(214, 219, 226),
              w.setFillColor(e.r, e.g, e.b),
              w.roundedRect(l, a - 5, 9, 9, 2, 2, "FD");
            let n = l + 9 + 4;
            t.valueLines.forEach((e) => {
              w.text(e, n, a), (a += 5.2);
            });
          } else
            t.valueLines.forEach((e) => {
              w.text(e, l, a), (a += 5.2);
            });
          e < X.length - 1 &&
            (w.setDrawColor(230, 234, 242),
            w.setLineWidth(0.3),
            w.line(30, o + n, 30 + P, o + n)),
            (es += n + 2);
        }
        (ea = ei + J + 8),
          Y &&
            $.length &&
            (w.setFont("Roboto", "normal"),
            w.setFontSize(14),
            w.setTextColor(0, 0, 0),
            w.text("Note:", 20, ea),
            (ea += 8),
            w.setFontSize(13),
            w.setTextColor(40, 40, 40),
            $.forEach((e) => {
              w.text(e, 20, ea), (ea += 6);
            })),
          w.setFont("Roboto", "normal"),
          w.setFontSize(8),
          w.setTextColor(100, 100, 100),
          w.text("Page 1 of 1", j / 2, A - 8, { align: "center" });
        let ec = w.output("arraybuffer");
        if (f) {
          let e = w.output("bloburl"),
            t = document.createElement("a");
          (t.href = e), (t.download = "Quote.pdf"), t.click();
        }
        return ec;
      }
    },
    76391: (e, t, n) => {
      n.d(t, { A: () => k });
      var o = n(15933),
        r = n(95155),
        l = n(12115),
        a = n(16324),
        i = n(36114),
        s = n(54492),
        c = n(54581),
        d = n(700),
        u = n(86220),
        h = n(99927),
        x = n(71977),
        m = n(68534),
        p = n(14426),
        g = n(27943),
        f = n(13380),
        b = n(40510),
        v = n(69242),
        y = n(28794),
        w = n(31418);
      let j = (0, w.A)(
          (0, r.jsx)("path", {
            d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z",
          }),
          "Print",
        ),
        ShareIcon = (0, w.A)(
          (0, r.jsx)("path", {
            d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
          }),
          "Share",
        ),
        A = (0, w.A)(
          [
            (0, r.jsx)(
              "path",
              {
                d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
              },
              "0",
            ),
            (0, r.jsx)("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2z" }, "1"),
          ],
          "ZoomIn",
        ),
        C = (0, w.A)(
          (0, r.jsx)("path", {
            d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14M7 9h5v1H7z",
          }),
          "ZoomOut",
        ),
        R = (0, w.A)(
          (0, r.jsx)("path", {
            d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91",
          }),
          "RestartAlt",
        );
      var L = n(59712);
      function S() {
        let e = (0, o._)([
          "\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      let F = (0, f.i7)(S()),
        k = (e) => {
          let {
              open: t,
              onClose: n,
              blob: o,
              fileName: f,
              title: w = "PDF Preview",
              subtitle: S,
              showLegacyButton: k = !1,
              legacyButtonLabel: D,
              onViewLegacy: E,
              isPremium: P = !1,
              showOrderActions: T = !1,
              showPrintButton: z,
              onEditOrder: U,
              onConfirmOrder: I,
            } = e,
            [M, O] = (0, l.useState)(null),
            [W, N] = (0, l.useState)(!1),
            [H, V] = (0, l.useState)(100),
            [_, B] = (0, l.useState)(!1),
            G = (0, l.useRef)(null),
            Z = (0, a.A)(),
            X = (0, g.A)(Z.breakpoints.down("md"));
          (0, l.useEffect)(() => {
            if (!t || !o) return;
            let e = URL.createObjectURL(o);
            return (
              O(e),
              () => {
                URL.revokeObjectURL(e), O(null);
              }
            );
          }, [t, o]),
            (0, l.useEffect)(
              () => () => {
                M && URL.revokeObjectURL(M),
                  G.current &&
                    (window.clearTimeout(G.current), (G.current = null));
              },
              [M],
            );
          let q = (0, l.useMemo)(
            () => (null != f ? f : "Switchcraft.pdf"),
            [f],
          );
          return (0, r.jsxs)(i.A, {
            open: t,
            onClose: n,
            maxWidth: "md",
            fullScreen: X,
            PaperProps: {
              sx: {
                borderRadius: 4 * !X,
                overflow: "hidden",
                boxShadow: Z.shadows[12],
                height: X ? "100%" : "90vh",
                maxHeight: X ? "100%" : "90vh",
                width: X ? "100%" : "700px",
                maxWidth: X ? "100%" : "700px",
                display: "flex",
                flexDirection: "column",
              },
            },
            children: [
              (0, r.jsxs)(s.A, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pr: 1,
                  gap: 2,
                },
                children: [
                  (0, r.jsxs)(c.A, {
                    children: [
                      (0, r.jsxs)(d.A, {
                        variant: "h6",
                        component: "div",
                        sx: { display: "flex", alignItems: "center", gap: 1 },
                        children: [(0, r.jsx)(y.A, { color: "error" }), w],
                      }),
                      S &&
                        (0, r.jsx)(d.A, {
                          variant: "body2",
                          color: "text.secondary",
                          children: S,
                        }),
                    ],
                  }),
                  (0, r.jsxs)(c.A, {
                    sx: { display: "flex", alignItems: "center", gap: 1 },
                    children: [
                      (0, r.jsxs)(c.A, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          bgcolor:
                            "light" === Z.palette.mode
                              ? "grey.100"
                              : "grey.800",
                          borderRadius: 2,
                          px: 1,
                          py: 0.5,
                        },
                        children: [
                          (0, r.jsx)(u.A, {
                            size: "small",
                            onClick: () => {
                              V((e) => Math.max(e - 25, 50));
                            },
                            disabled: H <= 50,
                            "aria-label": "Zoom out",
                            sx: { color: "text.secondary" },
                            children: (0, r.jsx)(C, { fontSize: "small" }),
                          }),
                          (0, r.jsxs)(d.A, {
                            variant: "body2",
                            sx: {
                              minWidth: "50px",
                              textAlign: "center",
                              fontWeight: 500,
                            },
                            children: [H, "%"],
                          }),
                          (0, r.jsx)(u.A, {
                            size: "small",
                            onClick: () => {
                              V((e) => Math.min(e + 25, 200));
                            },
                            disabled: H >= 200,
                            "aria-label": "Zoom in",
                            sx: { color: "text.secondary" },
                            children: (0, r.jsx)(A, { fontSize: "small" }),
                          }),
                          (0, r.jsx)(u.A, {
                            size: "small",
                            onClick: () => {
                              V(100);
                            },
                            "aria-label": "Reset zoom",
                            sx: { color: "text.secondary", ml: 0.5 },
                            children: (0, r.jsx)(R, { fontSize: "small" }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(u.A, {
                        onClick: n,
                        "aria-label": "Close preview",
                        sx: { color: "text.secondary" },
                        children: (0, r.jsx)(v.A, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(h.A, {
                sx: {
                  p: { xs: 1, md: 2 },
                  backgroundColor:
                    "light" === Z.palette.mode
                      ? "#f3f4f6"
                      : Z.palette.background.default,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  overflow: "hidden",
                  flex: 1,
                  minHeight: 0,
                },
                children: M
                  ? (0, r.jsx)(c.A, {
                      sx: {
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        overflow: "auto",
                        position: "relative",
                      },
                      children: (0, r.jsx)(c.A, {
                        component: "iframe",
                        src: "".concat(
                          M,
                          "#toolbar=0&navpanes=0&scrollbar=1&view=FitH",
                        ),
                        sx: {
                          width: "".concat(H, "%"),
                          height: "".concat(H, "%"),
                          minHeight: "".concat(H, "%"),
                          border: "none",
                          borderRadius: { xs: 1, md: 2 },
                          boxShadow: Z.shadows[8],
                          backgroundColor:
                            "light" === Z.palette.mode
                              ? Z.palette.common.white
                              : Z.palette.background.paper,
                        },
                        title: "PDF preview",
                      }),
                    })
                  : (0, r.jsx)(c.A, {
                      sx: {
                        py: 10,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                      },
                      children: (0, r.jsx)(d.A, {
                        variant: "body1",
                        color: "text.secondary",
                        children: "Preparing preview...",
                      }),
                    }),
              }),
              (0, r.jsxs)(x.A, {
                sx: {
                  px: { xs: 2, md: 3 },
                  py: { xs: 1.5, md: 2 },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1.5, sm: 0 },
                  justifyContent: "space-between",
                  alignItems: { xs: "stretch", sm: "center" },
                  bgcolor: "background.paper",
                },
                children: [
                  (0, r.jsx)(d.A, {
                    variant: "body2",
                    color: "text.secondary",
                    sx: { textAlign: { xs: "center", sm: "left" } },
                    children: q,
                  }),
                  (0, r.jsxs)(c.A, {
                    sx: {
                      display: "flex",
                      gap: 1.5,
                      justifyContent: "flex-end",
                      flexWrap: "wrap",
                    },
                    children: [
                      k &&
                        (0, r.jsx)(m.A, {
                          variant: "contained",
                          color: "secondary",
                          onClick: () => {
                            P && E ? E() : B(!0);
                          },
                          sx: { borderRadius: 999, px: 3, py: 1 },
                          children: null != D ? D : "View Legacy Format",
                        }),
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(m.A, {
                            variant: "outlined",
                            color: "primary",
                            startIcon: (0, r.jsx)(j, {}),
                            onClick: () => {
                              if (!o) return;
                              let e = null != M ? M : URL.createObjectURL(o),
                                t = () => {
                                  M || URL.revokeObjectURL(e);
                                },
                                n = window.open(
                                  e,
                                  "_blank",
                                  "noopener,noreferrer",
                                );
                              if (n) {
                                let e = () => {
                                    n.focus(), n.print();
                                  },
                                  o = () => {
                                    t(), n.removeEventListener("load", e);
                                  };
                                "complete" === n.document.readyState
                                  ? e()
                                  : n.addEventListener("load", e, { once: !0 }),
                                  n.addEventListener(
                                    "afterprint",
                                    () => {
                                      n.close(), o();
                                    },
                                    { once: !0 },
                                  ),
                                  n.addEventListener("beforeunload", o, {
                                    once: !0,
                                  });
                                return;
                              }
                              let r = document.createElement("iframe");
                              (r.style.position = "fixed"),
                                (r.style.right = "0"),
                                (r.style.bottom = "0"),
                                (r.style.width = "0"),
                                (r.style.height = "0"),
                                (r.style.border = "0"),
                                (r.src = e);
                              let l = () => {
                                r.remove(), t();
                              };
                              (r.onload = () => {
                                var e, t;
                                null == (e = r.contentWindow) || e.focus(),
                                  null == (t = r.contentWindow) || t.print(),
                                  window.setTimeout(l, 1e3);
                              }),
                                (r.onerror = l),
                                document.body.appendChild(r);
                            },
                            disabled: !o,
                            sx: { borderRadius: 999, px: 3, py: 1 },
                            children: "Print",
                          }),
                          (0, r.jsx)(m.A, {
                            variant: "outlined",
                            color: "primary",
                            startIcon: (0, r.jsx)(ShareIcon, {}),
                            onClick: async () => {
                              if (!o) return;
                              if (navigator.share) {
                                try {
                                  let file = new File([o], q, {
                                    type: "application/pdf",
                                  });
                                  await navigator.share({
                                    files: [file],
                                    title: "Switchcraft Design Report",
                                    text: "Check out my Switchcraft panel configuration!",
                                  });
                                } catch (e) {
                                  console.error("Share failed", e);
                                }
                              } else {
                                try {
                                  await navigator.clipboard.writeText(
                                    window.location.href,
                                  );
                                  alert("Link copied to clipboard!");
                                } catch (e) {
                                  console.error("Failed to copy", e);
                                }
                              }
                            },
                            disabled: !o,
                            sx: { borderRadius: 999, px: 3, py: 1 },
                            children: "Share",
                          }),
                          (0, r.jsx)(m.A, {
                            variant: "contained",
                            color: "primary",
                            startIcon: W
                              ? (0, r.jsx)(p.A, {
                                  size: 18,
                                  color: "inherit",
                                  thickness: 5,
                                })
                              : (0, r.jsx)(b.A, {}),
                            onClick: () => {
                              if (
                                (G.current &&
                                  (window.clearTimeout(G.current),
                                  (G.current = null)),
                                !o || W)
                              )
                                return;
                              N(!0);
                              let e = null != M ? M : URL.createObjectURL(o),
                                t = document.createElement("a");
                              (t.href = e),
                                (t.download = q),
                                document.body.appendChild(t),
                                t.click(),
                                document.body.removeChild(t),
                                M || URL.revokeObjectURL(e),
                                (G.current = window.setTimeout(() => {
                                  N(!1), (G.current = null);
                                }, 1400));
                            },
                            disabled: !o || W,
                            sx: {
                              borderRadius: 999,
                              px: 3.5,
                              py: 1,
                              position: "relative",
                              overflow: "hidden",
                              transition:
                                "transform 200ms ease, box-shadow 200ms ease",
                              boxShadow: Z.shadows[W ? 12 : 4],
                              "&:hover": {
                                transform: "translateY(-1px)",
                                boxShadow: Z.shadows[8],
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                                transform: "translateX(-100%)",
                                opacity: +!!W,
                                display: "block",
                                animation: W
                                  ? "".concat(F, " 1.2s ease-in-out infinite")
                                  : "none",
                                pointerEvents: "none",
                              },
                            },
                            children: W ? "Preparing..." : "Download PDF",
                          }),
                          T &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                U &&
                                  (0, r.jsx)(m.A, {
                                    variant: "outlined",
                                    color: "primary",
                                    onClick: U,
                                    sx: { borderRadius: 999, px: 3, py: 1 },
                                    children: "Edit Order",
                                  }),
                                I &&
                                  (0, r.jsx)(m.A, {
                                    variant: "contained",
                                    color: "success",
                                    onClick: I,
                                    sx: { borderRadius: 999, px: 3, py: 1 },
                                    children: "Confirm Order",
                                  }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(i.A, {
                open: _,
                onClose: () => B(!1),
                maxWidth: "sm",
                fullWidth: !0,
                PaperProps: { sx: { borderRadius: 3, overflow: "hidden" } },
                children: [
                  (0, r.jsx)(s.A, {
                    sx: {
                      textAlign: "center",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      py: 3,
                    },
                    children: (0, r.jsxs)(c.A, {
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      },
                      children: [
                        (0, r.jsx)(L.A, {
                          sx: { fontSize: 48, color: "#FFD700" },
                        }),
                        (0, r.jsx)(d.A, {
                          variant: "h5",
                          component: "div",
                          sx: { fontWeight: 600 },
                          children: "Premium Feature",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(h.A, {
                    sx: { py: 3, px: 3 },
                    children: [
                      (0, r.jsxs)(c.A, {
                        sx: { textAlign: "center", mb: 3 },
                        children: [
                          (0, r.jsx)(d.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            sx: { color: "text.primary", fontWeight: 500 },
                            children: "Legacy Preview is a Premium Feature",
                          }),
                          (0, r.jsx)(d.A, {
                            variant: "body1",
                            color: "text.secondary",
                            sx: { mb: 3 },
                            children:
                              "Unlock this feature and many more with our Premium subscription!",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(c.A, {
                        sx: { mb: 3 },
                        children: [
                          (0, r.jsx)(d.A, {
                            variant: "subtitle1",
                            gutterBottom: !0,
                            sx: { fontWeight: 600, color: "primary.main" },
                            children: "Premium Features Include:",
                          }),
                          (0, r.jsxs)(c.A, {
                            component: "ul",
                            sx: { pl: 2, m: 0 },
                            children: [
                              (0, r.jsx)(d.A, {
                                component: "li",
                                variant: "body2",
                                sx: { mb: 1 },
                                children:
                                  "\uD83C\uDFA8 Custom branding and logos on quotes",
                              }),
                              (0, r.jsx)(d.A, {
                                component: "li",
                                variant: "body2",
                                sx: { mb: 1 },
                                children:
                                  "\uD83D\uDCC4 Legacy PDF format options",
                              }),
                              (0, r.jsx)(d.A, {
                                component: "li",
                                variant: "body2",
                                sx: { mb: 1 },
                                children:
                                  "\uD83D\uDCB0 Advanced pricing and margin controls",
                              }),
                              (0, r.jsx)(d.A, {
                                component: "li",
                                variant: "body2",
                                sx: { mb: 1 },
                                children:
                                  "\uD83D\uDCCA Detailed analytics and reporting",
                              }),
                              (0, r.jsx)(d.A, {
                                component: "li",
                                variant: "body2",
                                sx: { mb: 1 },
                                children:
                                  "\uD83D\uDD27 Priority support and advanced features",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)(x.A, {
                    sx: { p: 3, pt: 0, justifyContent: "center", gap: 2 },
                    children: [
                      (0, r.jsx)(m.A, {
                        onClick: () => B(!1),
                        variant: "outlined",
                        sx: { borderRadius: 999, px: 3 },
                        children: "Maybe Later",
                      }),
                      (0, r.jsx)(m.A, {
                        onClick: () => {
                          window.open("/premium/payment", "_blank"), B(!1);
                        },
                        variant: "contained",
                        sx: {
                          borderRadius: 999,
                          px: 4,
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                          },
                        },
                        children: "Subscribe Now",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
