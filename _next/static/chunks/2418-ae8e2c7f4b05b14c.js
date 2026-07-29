"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2418],
  {
    18627: (t, e, r) => {
      r.d(e, { _: () => l });
      var i = r(26597),
        n = r(52699),
        a = r.n(n),
        o = r(23596),
        s = r(50134);
      let l = async (t) => {
        var e, r, n, l, h, f, u, d, c, g, p;
        let m,
          {
            logoUrl: b,
            pdfLogoUrl: y,
            email: w,
            userName: _,
            totalQty: v,
            cartData: E,
            note: U,
            totalPrice: k,
            customProductName: A,
            productSequence: N,
            quoteTerms: L = null,
            bankDetails: O = null,
            showBankDetails: F = !1,
            discountPct: x = 50,
            marginPct: C = 0,
            marginBySeries: S = null,
            screenshotDataUrl: T,
            download: R = !0,
            orderName: P,
            orderId: I,
            watermarkText: M,
            disableWatermarkLogo: D,
            disclaimerOverride: B,
            hidePrices: W = !1,
            priceMode: G = "total",
            panelNameOverrides: z,
            forceDefaultWatermark: $ = !1,
            watermarkBehind: H = !1,
            premiumQuoteMode: K = !1,
            logoResolverConfig: V,
            enableGst: j = !1,
            gstPercentage: q = 18,
            couponCode: Y,
            couponDiscountAmount: X = 0,
            couponDiscountType: J,
            couponDiscountValue: Z,
          } = t;
        async function Q(t) {
          let e = await fetch("/fonts/Roboto-Regular.ttf"),
            r = new Uint8Array(await e.arrayBuffer()),
            i = "";
          r.forEach((t) => (i += String.fromCharCode(t)));
          let n = btoa(i);
          (t.addFileToVFS("Roboto-Regular.ttf", n),
            t.addFont("Roboto-Regular.ttf", "Roboto", "normal"),
            t.setFont("Roboto", "normal"));
        }
        if (V)
          console.log(
            "✅ Using LogoResolver for PDF generation:",
            (m = s.a.resolve(V)),
          );
        else {
          let t = (t) => {
              if ("string" != typeof t) return null;
              let e = t.trim();
              return "PREMIUM_NO_LOGO" === e ? null : e.length > 0 ? e : null;
            },
            e = t(y),
            r = t(b),
            i = e || r;
          console.log(
            "⚠️ Using legacy logo resolution for PDF generation:",
            (m = {
              headerLogo: i,
              pdfLogo: i,
              isPremiumMode: K,
              fallbackUsed: !1,
            }),
          );
        }
        [m.headerLogo, m.pdfLogo].filter(
          (t) => "string" == typeof t && t.length > 0,
        );
        let tt = (t) =>
            new Promise((e, r) => {
              let i = new FileReader();
              ((i.onload = () => e(i.result)),
                (i.onerror = () => r(Error("FileReader error"))),
                i.readAsDataURL(t));
            }),
          te = (t) =>
            new Promise((e, r) => {
              try {
                let i = new Image();
                i.crossOrigin = "anonymous";
                let n = URL.createObjectURL(t);
                ((i.onload = () => {
                  try {
                    let t = document.createElement("canvas");
                    ((t.width = i.naturalWidth || i.width || 1),
                      (t.height = i.naturalHeight || i.height || 1));
                    let r = t.getContext("2d");
                    if (!r) throw Error("No 2D context");
                    r.drawImage(i, 0, 0, t.width, t.height);
                    let a = t.toDataURL("image/png");
                    (URL.revokeObjectURL(n), e(a));
                  } catch (t) {
                    (URL.revokeObjectURL(n),
                      r(t instanceof Error ? t : Error(String(t))));
                  }
                }),
                  (i.onerror = () => {
                    (URL.revokeObjectURL(n),
                      r(Error("Failed to load image for conversion")));
                  }),
                  (i.src = n));
              } catch (t) {
                r(t instanceof Error ? t : Error(String(t)));
              }
            }),
          tr = (t) =>
            new Promise((e, r) => {
              try {
                let i = new Image();
                ((i.crossOrigin = "anonymous"),
                  (i.onload = () => {
                    try {
                      let t = document.createElement("canvas");
                      ((t.width = i.naturalWidth || i.width || 1),
                        (t.height = i.naturalHeight || i.height || 1));
                      let r = t.getContext("2d");
                      if (!r) throw Error("No 2D context");
                      (r.drawImage(i, 0, 0), e(t.toDataURL("image/png")));
                    } catch (t) {
                      r(t instanceof Error ? t : Error(String(t)));
                    }
                  }),
                  (i.onerror = () => r(Error("Failed to load image"))),
                  (i.src = t));
              } catch (t) {
                r(t instanceof Error ? t : Error(String(t)));
              }
            }),
          ti = async (t) => {
            if (t.startsWith("data:")) return t;
            let e = await fetch(t, {
              cache: "no-store",
              credentials: "include",
            });
            if (!e.ok)
              try {
                return await tr(t);
              } catch (e) {
                throw Error("Failed to fetch logo from ".concat(t));
              }
            let r = await e.blob(),
              i = (r.type || "").toLowerCase();
            return i.includes("png") || i.includes("jpeg") || i.includes("jpg")
              ? tt(r)
              : await te(r);
          },
          tn = "/Image/logoVerni.png",
          ta = null,
          to = null,
          ts = m.pdfLogo || m.headerLogo;
        if (ts)
          try {
            ((ta = await ti(ts)),
              (to = ts),
              console.log("✅ Successfully loaded logo:", ts));
          } catch (t) {
            if ((console.error("❌ Failed to load logo:", ts, t), K))
              console.warn(
                "⚠️ Premium quote mode: skipping Verni logo fallback, using premium logo only",
              );
            else
              try {
                ((ta = await ti(tn)),
                  (to = tn),
                  console.log(
                    "\uD83D\uDCDD Using Verni logo fallback after custom logo failed to load",
                  ));
              } catch (t) {
                console.warn(
                  "Could not fetch Verni logo fallback; skipping header logo",
                );
              }
          }
        else
          K
            ? console.log("✅ Premium quote mode: no default logo fallback")
            : console.warn(
                "No logo resolved, this should not happen with Verni fallback",
              );
        console.log("\uD83D\uDD0D Final PDF Logo State:", {
          resolvedLogos: m,
          logoDataUrl: ta ? "loaded" : "none",
          logoSourceUsed: to,
          isPremiumMode: m.isPremiumMode,
        });
        let tl = null;
        if ($)
          try {
            tl = await ti(tn);
          } catch (t) {
            console.warn("Could not load default watermark logo");
          }
        else if (ta && to) tl = ta;
        else if (K)
          console.log("✅ Premium quote mode: no default watermark fallback");
        else
          try {
            tl = await ti(tn);
          } catch (t) {
            console.warn("Could not load Verni logo for watermark");
          }
        console.log("\uD83D\uDD0D Watermark Logo State:", {
          watermarkDataUrl: tl ? "loaded" : "none",
          forceDefaultWatermark: $,
          isPremiumMode: m.isPremiumMode,
        });
        let th = new Date(),
          tf = th.toISOString().split("T")[0],
          tu = th.toTimeString().split(" ")[0].replace(/:/g, "-"),
          td = "Switchcraft_".concat(tf, "-").concat(tu, ".pdf"),
          tc = new i.uE("p", "mm", "a4"),
          tg = 10,
          tp = Number.isFinite(v) && v > 0 ? v : 1,
          tm = Number.isFinite(k) ? k : 0,
          tb =
            "string" ==
            typeof (null == E || null == (e = E.panel) ? void 0 : e.item)
              ? E.panel.item
              : null,
          ty = (0, o.iZ)(tb, S, C),
          tw = (0, o.UM)({
            listUnit: tp > 0 ? tm / tp : 0,
            quantity: tp,
            discountPct: x,
            marginPct: ty,
            marginEnabled: 0 !== ty,
          }),
          t_ = tw.landingUnit,
          tv = tw.totalUnit,
          tE = tw.landingTotal,
          tU = tw.totalTotal,
          tk = 0 !== ty ? tU : tE,
          tA = Number.isFinite(X) ? X : 0,
          tN = Math.max(0, tk - tA),
          tL = Number.isFinite(q) ? q : 18,
          tO = (tL / 100) * tN,
          tF = tN + tO,
          tx = "total" === G ? tk : tE;
        if (
          (await Q(tc),
          tc.setLineWidth(0.5).setDrawColor(0).rect(5, 5, 200, 287),
          tc.setFontSize(10).text("Page 1", 105, 289, { align: "center" }),
          tl && !D && H)
        )
          try {
            let t = new Image();
            ((t.src = tl), await new Promise((e) => (t.onload = () => e())));
            let e = document.createElement("canvas");
            ((e.width = t.naturalWidth || t.width),
              (e.height = t.naturalHeight || t.height));
            let r = e.getContext("2d");
            if (r) {
              ((r.globalAlpha = 0.15), r.drawImage(t, 0, 0));
              let i = e.toDataURL("image/png"),
                n = (e.height / e.width) * 60;
              tc.addImage(i, "PNG", 75, (297 - n) / 2, 60, n);
            }
          } catch (t) {
            console.warn("Failed to draw watermark behind content:", t);
          }
        if (ta) {
          let t = tc.getImageProperties(ta),
            e = 80,
            r = (t.height / t.width) * e;
          r > 40 && ((r = 40), (e = (t.width / t.height) * r));
          let i = ta.startsWith("data:image/jpeg") ? "JPEG" : "PNG";
          (tc.addImage(ta, i, (210 - e) / 2, tg, e, r), (tg += r + 10));
        }
        if (T) {
          let t = tc.getImageProperties(T),
            e = (t.height / t.width) * 190,
            r = T.startsWith("data:image/jpeg") ? "JPEG" : "PNG";
          (tc.addImage(T, r, 10, tg, 190, e), (tg += e + 10));
        } else {
          let t = document.getElementById("drag-drop-area");
          if (t instanceof HTMLElement) {
            let e = (
                await a()(t, {
                  scale: 1,
                  useCORS: !0,
                  backgroundColor: "#ffffff",
                })
              ).toDataURL("image/png"),
              r = tc.getImageProperties(e),
              i = (r.height / r.width) * 190;
            (tc.addImage(e, "PNG", 10, tg, 190, i), (tg += i + 10));
          }
        }
        (tc.addPage(),
          tc.rect(5, 5, 200, 287),
          tc.setFontSize(10).text("Page 2", 105, 289, { align: "center" }));
        let tC = [];
        (P && tC.push({ type: "field", label: "Order Name", value: P }),
          A && tC.push({ type: "field", label: "Custom Name", value: A }),
          N && tC.push({ type: "field", label: "Product ID", value: N }),
          I && tC.push({ type: "field", label: "Order ID", value: I }));
        {
          let t = (null == (f = E.panel) ? void 0 : f.item) || "",
            e = z && t in z ? z[t] : t;
          tC.push({ type: "field", label: "Panel", value: e });
        }
        (tC.push({
          type: "field",
          label: "Material",
          value: (null == (r = E.material) ? void 0 : r.item) || "",
        }),
          tC.push({
            type: "field",
            label: "Size",
            value: (null == (n = E.size) ? void 0 : n.item) || "",
          }),
          tC.push({ type: "header", label: "Accessories" }));
        let tS = [
            ...(null != (u = E.accessories1) ? u : []),
            ...(null != (d = E.accessories2) ? d : []),
            ...(null != (c = E.accessories3) ? c : []),
          ],
          tT = null != (g = E.accessories) ? g : [];
        (tS.length > 0 ? tS : tT).forEach((t) =>
          tC.push({
            type: "field",
            label: t.optionType,
            value: t.options.map((t) => t.item).join(" | "),
          }),
        );
        try {
          if (E.icons && E.icons.length) {
            let hasIcons = false,
              iconsData = null;
            try {
              let res = await fetch("/api-static/icons.json");
              if (res.ok) iconsData = await res.json();
            } catch (e) {}
            for (let cat of E.icons) {
              let validOpts = (cat.options || []).filter((o) => o && o.id);
              if (validOpts.length > 0) {
                if (!hasIcons) {
                  tC.push({ type: "header", label: "Icons" });
                  hasIcons = true;
                }
                let mappedValues = [];
                for (let opt of validOpts) {
                  let name = "";
                  if (iconsData) {
                    for (let c of iconsData) {
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
                  if (name && isNaN(Number(name))) mappedValues.push(name);
                }
                tC.push({
                  type: "field",
                  label: cat.optionType,
                  value: mappedValues.join(" | "),
                });
              }
            }
          }
        } catch (err) {
          console.error("Icons PDF summary failed", err);
        }
        let tR = !!(null == (l = E.panel) ? void 0 : l.noFrame),
          tP = (null != (p = E.color) ? p : []).filter(
            (t) => !(tR && "Frame Color" === t.optionType),
          );
        (tP.length > 0 &&
          (tC.push({ type: "header", label: "Color" }),
          tP.forEach((t) => {
            var e;
            return tC.push({
              type: "field",
              label: t.optionType,
              value: (null == (e = t.options[0]) ? void 0 : e.item) || "",
            });
          })),
          tC.push({ type: "header", label: "Technology" }),
          tC.push({
            type: "field",
            label: "Technology",
            value: (null == (h = E.technology) ? void 0 : h.item) || "",
          }),
          tC.push({ type: "blank" }),
          /* tC.push({ type: "header", label: "Pricing" }),
          tC.push({ type: "pricing" }), */
          U && tC.push({ type: "field", label: "Order Note", value: U }));
        let tI = 20;
        (tc
          .setFont("Roboto", "bold")
          .setFontSize(16)
          .text("Order Summary", 105, tI, { align: "center" }),
          (tI += 12));
        tc.setFontSize(12);
        let tM = (t, e, r, i, n) => {
          (n && (tc.setFillColor(n), tc.rect(t, e, r, i, "F")),
            tc.rect(t, e, r, i));
        };
        for (let t of tC)
          if (
            (tI > 272 &&
              (tc.addPage(),
              tc.rect(5, 5, 200, 287),
              tc
                .setFontSize(10)
                .text(
                  "Page ".concat(tc.getCurrentPageInfo().pageNumber),
                  105,
                  289,
                  { align: "center" },
                ),
              (tI = 20)),
            "header" === t.type)
          )
            (tM(10, tI, 190, 8, "#EEEEEE"),
              tc
                .setFont("Roboto", "bold")
                .text(t.label, 105, tI + 5, { align: "center" }),
              tc.setFont("Roboto", "normal"),
              (tI += 8));
          else if ("blank" === t.type) tI += 8;
          else if ("pricing" === t.type) { } else if (false) {
            let t = 76,
              e = 28.5,
              r = 42.75,
              i = 42.75,
              n = (t) => {
                tI + t > 272 &&
                  (tc.addPage(),
                  tc.rect(5, 5, 200, 287),
                  tc
                    .setFontSize(10)
                    .text(
                      "Page ".concat(tc.getCurrentPageInfo().pageNumber),
                      105,
                      289,
                      { align: "center" },
                    ),
                  (tI = 20));
              };
            (n(8),
              tM(10, tI, t, 8, "#EEEEEE"),
              tM(10 + t, tI, e, 8, "#EEEEEE"),
              tM(10 + t + e, tI, r, 8, "#EEEEEE"),
              tM(10 + t + e + r, tI, i, 8, "#EEEEEE"),
              tc.setFont("Roboto", "bold"),
              tc.text("Item", 10 + t / 2, tI + 5, { align: "center" }),
              tc.text("Qty", 10 + t + e / 2, tI + 5, { align: "center" }),
              tc.text("Price", 10 + t + e + r / 2, tI + 5, { align: "center" }),
              tc.text("Total", 10 + t + e + r + i / 2, tI + 5, {
                align: "center",
              }),
              tc.setFont("Roboto", "normal"),
              (tI += 8),
              n(8));
            let a = (A && A.trim()) || (P && P.trim()) || "Product";
            (tM(10, tI, t, 8),
              tM(10 + t, tI, e, 8),
              tM(10 + t + e, tI, r, 8),
              tM(10 + t + e + r, tI, i, 8),
              tc.text(a, 10 + t / 2, tI + 5, { align: "center" }),
              tc.text("".concat(v), 10 + t + e / 2, tI + 5, {
                align: "center",
              }));
            let o = "total" === G ? tv : t_;
            (tc.text(
              W
                ? "—"
                : "₹".concat(
                    o.toLocaleString("en-IN", { minimumFractionDigits: 2 }),
                  ),
              10 + t + e + r / 2,
              tI + 5,
              { align: "center" },
            ),
              tc.text(
                W
                  ? "—"
                  : "₹".concat(
                      tx.toLocaleString("en-IN", { minimumFractionDigits: 2 }),
                    ),
                10 + t + e + r + i / 2,
                tI + 5,
                { align: "center" },
              ),
              (tI += 8));
            let s = t + e + r,
              l = [];
            if (tA > 0) {
              l.push({ label: "Price (excl. GST)", val: tk });
              let t = "Coupon Discount";
              (Y &&
                (t =
                  "percentage" === J && Z
                    ? "Coupon: ".concat(Y, " (").concat(Z, "% OFF)")
                    : "fixed" === J && Z
                      ? "Coupon: ".concat(Y, " (₹").concat(Z, " OFF)")
                      : "Coupon: ".concat(Y)),
                l.push({ label: t, val: tA, isDiscount: !0 }));
            }
            for (let t of (l.push({ label: "Subtotal", val: tN }),
            l.push({ label: "GST (".concat(tL, "%)"), val: tO }),
            l.push({ label: "Grand Total", val: tF }),
            l)) {
              (n(8),
                tM(10, tI, s, 8),
                tM(10 + s, tI, i, 8),
                tc
                  .setFont("Roboto", "bold")
                  .text(t.label, 10 + s - 2, tI + 5, { align: "right" }),
                tc.setFont("Roboto", "normal"));
              let e = W
                ? "—"
                : t.isDiscount
                  ? "-₹".concat(
                      t.val.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      }),
                    )
                  : "₹".concat(
                      t.val.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      }),
                    );
              (tc.text(e, 10 + s + i / 2, tI + 5, { align: "center" }),
                (tI += 8));
            }
          } else {
            let e = tc.splitTextToSize(t.label || "", 53),
              r = tc.splitTextToSize(t.value || "", 129),
              i = Math.max(e.length, r.length),
              n = 5 * i + 4;
            (tM(10, tI, 57, n), tM(67, tI, 133, n));
            let a = tI + (n - 5 * i) / 2 + 5;
            (tc.setFont("Roboto", "bold"),
              e.forEach((t, e) => {
                tc.text(t, 38.5, a + 5 * e, { align: "center" });
              }),
              tc.setFont("Roboto", "normal"),
              r.forEach((t, e) => {
                tc.text(t, 133.5, a + 5 * e, { align: "center" });
              }),
              (tI += n));
          }
        let tD = function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 25;
            tI + t > 297 - e &&
              (tc.addPage(),
              tc.rect(5, 5, 200, 287),
              tc
                .setFontSize(10)
                .text(
                  "Page ".concat(tc.getCurrentPageInfo().pageNumber),
                  105,
                  289,
                  { align: "center" },
                ),
              (tI = 20));
          },
          tB = (t) => ("string" == typeof t ? t.trim() : ""),
          tW = (null != L ? L : "").trim(),
          tG = {
            accountName: tB(null == O ? void 0 : O.accountName),
            accountNumber: tB(null == O ? void 0 : O.accountNumber),
            bankName: tB(null == O ? void 0 : O.bankName),
            ifsc: tB(null == O ? void 0 : O.ifsc),
          },
          tz = F && Object.values(tG).some((t) => t && t.length > 0);
        if (tW || tz) {
          if (((tI += 6), tW)) {
            let t = tc.splitTextToSize(tW, 182),
              e = 5 * t.length + 10;
            (tD(e + 6),
              tM(10, tI, 190, e, "#F8FAFC"),
              tc.setFont("Roboto", "bold").setFontSize(12),
              tc.text("Terms & Conditions", 13, tI + 6),
              tc.setFont("Roboto", "normal").setFontSize(10));
            let r = tI + 12;
            (t.forEach((t, e) => {
              tc.text("- ".concat(t), 14, r + 5 * e);
            }),
              (tI += e + 6));
          }
          if (tz) {
            let t = [
              { label: "Account Name", value: tG.accountName },
              { label: "Account Number", value: tG.accountNumber },
              { label: "Bank", value: tG.bankName },
              { label: "IFSC Code", value: tG.ifsc },
            ].filter((t) => t.value && t.value.length > 0);
            if (t.length) {
              let e = 66.5,
                r = 123.5;
              (tD(8 + 8 * t.length + 6),
                tM(10, tI, 190, 8, "#E8F1FF"),
                tc.setFont("Roboto", "bold").setFontSize(11),
                tc.text("Bank Details", 105, tI + 5, { align: "center" }),
                tc.setFont("Roboto", "normal").setFontSize(10),
                (tI += 8),
                t.forEach((t) => {
                  (tM(10, tI, e, 8, "#F5F7FA"),
                    tM(10 + e, tI, r, 8),
                    tc.text(t.label, 12, tI + 5),
                    tc.text(t.value, 10 + e + 2, tI + 5),
                    (tI += 8));
                }),
                (tI += 6));
            }
          }
        }
        if (tl && !D && !H) {
          let t = new Image();
          ((t.src = tl), await new Promise((e) => (t.onload = () => e())));
          let e = document.createElement("canvas");
          ((e.width = t.naturalWidth), (e.height = t.naturalHeight));
          let r = e.getContext("2d");
          if (r) {
            ((r.globalAlpha = 0.1), r.drawImage(t, 0, 0));
            let i = e.toDataURL("image/png"),
              n = (t.naturalHeight / t.naturalWidth) * 80,
              a = tc.getNumberOfPages();
            for (let t = 1; t <= a; t++) {
              tc.setPage(t);
              let e = tc.internal.pageSize.getWidth(),
                r = tc.internal.pageSize.getHeight();
              tc.addImage(i, "PNG", (e - 80) / 2, (r - n) / 2, 80, n);
            }
          }
        }
        if (M) {
          let t = tc.getNumberOfPages();
          for (let e = 1; e <= t; e++) {
            tc.setPage(e);
            let t = tc.internal.pageSize.getWidth(),
              r = tc.internal.pageSize.getHeight(),
              i = tc.GState && new tc.GState({ opacity: 0.1 });
            (i && tc.setGState(i),
              tc.setFont("Roboto", "bold"),
              tc.setFontSize(60),
              tc.setTextColor(150),
              tc.text(M, t / 2, r / 2, { align: "center", angle: 45 }),
              i && tc.setGState(new tc.GState({ opacity: 1 })));
          }
        }
        let tK = tc.output("arraybuffer");
        if (R) {
          tc.save(td);
          let t = tc.output("bloburl"),
            e = window.open(t);
          e && (e.onload = () => setTimeout(() => e.print(), 500));
        }
        return tK;
      };
    },
    23596: (t, e, r) => {
      r.d(e, { K1: () => s, UM: () => h, XF: () => l, iZ: () => o });
      let i = ["Touch Panel", "Edge", "Color", "Royal Edge"].reduce(
        (t, e) => ((t[n(e)] = e), t),
        {},
      );
      function n(t) {
        return t.trim().replace(/\s+/g, " ").toLowerCase();
      }
      function a(t) {
        if (null == t) return;
        if ("number" == typeof t) return Number.isFinite(t) ? t : void 0;
        let e = Number.parseFloat(String(t));
        return Number.isFinite(e) ? e : void 0;
      }
      function o(t, e, r) {
        var o;
        let s = "string" == typeof t ? n(t) : "";
        if (s && e) {
          let t = i[s];
          if (t) {
            let r = a(e[t]);
            if (void 0 !== r) return r;
          } else
            for (let [t, r] of Object.entries(e))
              if (n(t) === s) {
                let t = a(r);
                if (void 0 !== t) return t;
                break;
              }
        }
        return null != (o = a(r)) ? o : 0;
      }
      function s(t, e, r) {
        let i = r.match(/(\d+(\.\d+)?)|([a-z]+)|([+\-*/()])|\S/g);
        if (!i) return t;
        let n = 0;
        function a() {
          return i[n++];
        }
        function o() {
          let r = a();
          if (!r) throw Error("Unexpected end of formula");
          if ("(" === r) {
            let t = l();
            if (")" !== a()) throw Error("Expected ')'");
            return t;
          }
          if ("base" === r) return t;
          if ("margin" === r) return e;
          let i = Number(r);
          if (!Number.isNaN(i)) return i;
          throw Error("Unexpected token: ".concat(r));
        }
        function s() {
          let t = o();
          for (; "*" === i[n] || "/" === i[n];) {
            let e = a(),
              r = o();
            if ("*" === e) t *= r;
            else {
              if (0 === r) throw Error("Division by zero");
              t /= r;
            }
          }
          return t;
        }
        function l() {
          let t = s();
          for (; "+" === i[n] || "-" === i[n];) {
            let e = a(),
              r = s();
            "+" === e ? (t += r) : (t -= r);
          }
          return t;
        }
        try {
          let e = l();
          if (n < i.length) throw Error("Unexpected token after expression");
          return Number.isFinite(e) ? e : t;
        } catch (e) {
          return (console.error("Formula evaluation error:", e), t);
        }
      }
      function l(t, e, r) {
        let i = Number.isFinite(t) ? t : 0,
          n = Number.isFinite(e) ? e : 0;
        return r && r.trim()
          ? s(i, n, r)
          : n >= 100
            ? (console.warn(
                "Margin percentage ".concat(n, "% is >= 100%, capping at 99%"),
              ),
              100 * i)
            : (100 * i) / (100 - n);
      }
      function h(t) {
        let {
            listUnit: e,
            quantity: r,
            discountPct: i = 0,
            marginPct: n = 0,
            marginEnabled: a = !1,
            formula: o,
          } = t,
          s = Number.isFinite(e) ? Number(e) : 0,
          h = Number.isFinite(r) ? Number(r) : 0,
          f = h > 0 ? h : 1,
          u =
            1 -
            Math.min(
              Math.max(
                Number.isFinite(i)
                  ? Number(i)
                  : Number.parseFloat(String(i)) || 0,
                -100,
              ),
              100,
            ) /
              100,
          d = a
            ? Number.isFinite(n)
              ? Number(n)
              : Number.parseFloat(String(n)) || 0
            : 0,
          c = s * u,
          g = c * f,
          p = c;
        a && 0 !== d && (p = l(c, d, o));
        let m = p * f;
        return {
          listUnit: s,
          listTotal: s * f,
          landingUnit: c,
          landingTotal: g,
          totalUnit: p,
          totalTotal: m,
        };
      }
    },
    35561: (t, e, r) => {
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
        return i;
      }
      function n(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var i,
                n,
                a,
                o,
                s = [],
                l = !0,
                h = !1;
              try {
                if (((a = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = a.call(r)).done) &&
                    (s.push(i.value), s.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((h = !0), (n = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (h) throw n;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return i(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? i(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      r.d(e, { A: () => n });
    },
    50134: (t, e, r) => {
      r.d(e, { a: () => i });
      class i {
        static sanitizeLogoUrl(t) {
          if ("string" != typeof t) return null;
          let e = t.trim();
          return e === this.PREMIUM_NO_LOGO_MARKER
            ? null
            : e.length > 0
              ? e
              : null;
        }
        static isDefaultLogo(t) {
          return t === this.DEFAULT_LOGO;
        }
        static resolveCustomLogo() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          for (let t of e) {
            let e = this.sanitizeLogoUrl(t);
            if (e && !this.isDefaultLogo(e)) return e;
          }
          return null;
        }
        static resolve(t) {
          let e,
            r,
            {
              isPremium: i,
              contextLogos: { brandLogoUrl: n, pdfLogoUrl: a },
              reduxLogos: { logoUrl: o, pdfLogoUrl: s },
            } = t,
            l = this.resolveCustomLogo(a, n, s, o),
            h = !1;
          ((e = l || this.DEFAULT_LOGO),
            (r = l || this.DEFAULT_LOGO),
            (h = !l),
            i &&
              !l &&
              (console.log(
                "\uD83D\uDCA1 Premium user: No custom logo uploaded, using Verni logo fallback",
              ),
              console.log(
                "\uD83D\uDCA1 To use custom branding: Go to Premium Dashboard → Upload Brand Logo",
              )));
          let f = {
            headerLogo: e,
            pdfLogo: r,
            isPremiumMode: i,
            fallbackUsed: h,
          };
          return (
            console.log("\uD83C\uDFAF LogoResolver Result:", {
              isPremium: i,
              effectiveCustomLogo: l,
              result: f,
              sources: {
                contextBrand: n,
                contextPdf: a,
                reduxLogo: o,
                reduxPdf: s,
              },
            }),
            f
          );
        }
        static hasCustomLogo(t) {
          return !!this.resolveCustomLogo(
            t.contextLogos.pdfLogoUrl,
            t.contextLogos.brandLogoUrl,
            t.reduxLogos.pdfLogoUrl,
            t.reduxLogos.logoUrl,
          );
        }
        static getPremiumNoLogoMarker() {
          return this.PREMIUM_NO_LOGO_MARKER;
        }
      }
      ((i.DEFAULT_LOGO = "/Image/logoVerni.png"),
        (i.PREMIUM_NO_LOGO_MARKER = "PREMIUM_NO_LOGO"));
    },
    61260: (t, e, r) => {
      r.d(e, { $: () => tg });
      var i = {},
        n = function (t, e, r, n, a) {
          var o = new Worker(
            i[e] ||
              (i[e] = URL.createObjectURL(
                new Blob(
                  [
                    t +
                      ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})',
                  ],
                  { type: "text/javascript" },
                ),
              )),
          );
          return (
            (o.onmessage = function (t) {
              var e = t.data,
                r = e.$e$;
              if (r) {
                var i = Error(r[0]);
                ((i.code = r[1]), (i.stack = r[2]), a(i, null));
              } else a(null, e);
            }),
            o.postMessage(r, n),
            o
          );
        },
        a = Uint8Array,
        o = Uint16Array,
        s = Int32Array,
        l = new a([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        h = new a([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        f = new a([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        u = function (t, e) {
          for (var r = new o(31), i = 0; i < 31; ++i) r[i] = e += 1 << t[i - 1];
          for (var n = new s(r[30]), i = 1; i < 30; ++i)
            for (var a = r[i]; a < r[i + 1]; ++a) n[a] = ((a - r[i]) << 5) | i;
          return { b: r, r: n };
        },
        d = u(l, 2),
        c = d.b,
        g = d.r;
      ((c[28] = 258), (g[258] = 28));
      for (
        var p = u(h, 0), m = p.b, b = p.r, y = new o(32768), w = 0;
        w < 32768;
        ++w
      ) {
        var _ = ((43690 & w) >> 1) | ((21845 & w) << 1);
        ((_ =
          ((61680 & (_ = ((52428 & _) >> 2) | ((13107 & _) << 2))) >> 4) |
          ((3855 & _) << 4)),
          (y[w] = (((65280 & _) >> 8) | ((255 & _) << 8)) >> 1));
      }
      for (
        var v = function (t, e, r) {
            for (var i, n = t.length, a = 0, s = new o(e); a < n; ++a)
              t[a] && ++s[t[a] - 1];
            var l = new o(e);
            for (a = 1; a < e; ++a) l[a] = (l[a - 1] + s[a - 1]) << 1;
            if (r) {
              i = new o(1 << e);
              var h = 15 - e;
              for (a = 0; a < n; ++a)
                if (t[a])
                  for (
                    var f = (a << 4) | t[a],
                      u = e - t[a],
                      d = l[t[a] - 1]++ << u,
                      c = d | ((1 << u) - 1);
                    d <= c;
                    ++d
                  )
                    i[y[d] >> h] = f;
            } else
              for (a = 0, i = new o(n); a < n; ++a)
                t[a] && (i[a] = y[l[t[a] - 1]++] >> (15 - t[a]));
            return i;
          },
          E = new a(288),
          w = 0;
        w < 144;
        ++w
      )
        E[w] = 8;
      for (var w = 144; w < 256; ++w) E[w] = 9;
      for (var w = 256; w < 280; ++w) E[w] = 7;
      for (var w = 280; w < 288; ++w) E[w] = 8;
      for (var U = new a(32), w = 0; w < 32; ++w) U[w] = 5;
      var k = v(E, 9, 0),
        A = v(U, 5, 0),
        N = function (t) {
          for (var e = t[0], r = 1; r < t.length; ++r) t[r] > e && (e = t[r]);
          return e;
        },
        L = function (t, e, r) {
          var i = (e / 8) | 0;
          return ((t[i] | (t[i + 1] << 8)) >> (7 & e)) & r;
        },
        O = function (t, e) {
          var r = (e / 8) | 0;
          return (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16)) >> (7 & e);
        },
        F = function (t) {
          return ((t + 7) / 8) | 0;
        },
        x = function (t, e, r) {
          return (
            (null == e || e < 0) && (e = 0),
            (null == r || r > t.length) && (r = t.length),
            new a(t.subarray(e, r))
          );
        },
        C = [
          "unexpected EOF",
          "invalid block type",
          "invalid length/literal",
          "invalid distance",
          "stream finished",
          "no stream handler",
          ,
          "no callback",
          "invalid UTF-8 data",
          "extra field too long",
          "date not in range 1980-2099",
          "filename too long",
          "stream finishing",
          "invalid zip data",
        ],
        S = function (t, e, r) {
          var i = Error(e || C[t]);
          if (
            ((i.code = t),
            Error.captureStackTrace && Error.captureStackTrace(i, S),
            !r)
          )
            throw i;
          return i;
        },
        T = function (t, e, r, i) {
          var n = t.length,
            o = i ? i.length : 0;
          if (!n || (e.f && !e.l)) return r || new a(0);
          var s = !r,
            u = s || 2 != e.i,
            d = e.i;
          s && (r = new a(3 * n));
          var g = function (t) {
              var e = r.length;
              if (t > e) {
                var i = new a(Math.max(2 * e, t));
                (i.set(r), (r = i));
              }
            },
            p = e.f || 0,
            b = e.p || 0,
            y = e.b || 0,
            w = e.l,
            _ = e.d,
            E = e.m,
            U = e.n,
            k = 8 * n;
          do {
            if (!w) {
              p = L(t, b, 1);
              var A = L(t, b + 1, 3);
              if (((b += 3), A))
                if (1 == A) ((w = null), (_ = null), (E = 9), (U = 5));
                else if (2 == A) {
                  var C = L(t, b, 31) + 257,
                    T = L(t, b + 10, 15) + 4,
                    R = C + L(t, b + 5, 31) + 1;
                  b += 14;
                  for (var P = new a(R), I = new a(19), M = 0; M < T; ++M)
                    I[f[M]] = L(t, b + 3 * M, 7);
                  b += 3 * T;
                  for (
                    var D = N(I), B = (1 << D) - 1, W = v(I, D, 1), M = 0;
                    M < R;
                  ) {
                    var G = W[L(t, b, B)];
                    b += 15 & G;
                    var z = G >> 4;
                    if (z < 16) P[M++] = z;
                    else {
                      var $ = 0,
                        H = 0;
                      for (
                        16 == z
                          ? ((H = 3 + L(t, b, 3)), (b += 2), ($ = P[M - 1]))
                          : 17 == z
                            ? ((H = 3 + L(t, b, 7)), (b += 3))
                            : 18 == z && ((H = 11 + L(t, b, 127)), (b += 7));
                        H--;
                      )
                        P[M++] = $;
                    }
                  }
                  var K = P.subarray(0, C),
                    V = P.subarray(C);
                  ((E = N(K)), (U = N(V)), (w = v(K, E, 1)), (_ = v(V, U, 1)));
                } else S(1);
              else {
                var z = F(b) + 4,
                  j = t[z - 4] | (t[z - 3] << 8),
                  q = z + j;
                if (q > n) {
                  d && S(0);
                  break;
                }
                (u && g(y + j),
                  r.set(t.subarray(z, q), y),
                  (e.b = y += j),
                  (e.p = b = 8 * q),
                  (e.f = p));
                continue;
              }
              if (b > k) {
                d && S(0);
                break;
              }
            }
            u && g(y + 131072);
            for (var Y = (1 << E) - 1, X = (1 << U) - 1, J = b; ; J = b) {
              var $ = w[O(t, b) & Y],
                Z = $ >> 4;
              if ((b += 15 & $) > k) {
                d && S(0);
                break;
              }
              if (($ || S(2), Z < 256)) r[y++] = Z;
              else if (256 == Z) {
                ((J = b), (w = null));
                break;
              } else {
                var Q = Z - 254;
                if (Z > 264) {
                  var M = Z - 257,
                    tt = l[M];
                  ((Q = L(t, b, (1 << tt) - 1) + c[M]), (b += tt));
                }
                var te = _[O(t, b) & X],
                  tr = te >> 4;
                (te || S(3), (b += 15 & te));
                var V = m[tr];
                if (tr > 3) {
                  var tt = h[tr];
                  ((V += O(t, b) & ((1 << tt) - 1)), (b += tt));
                }
                if (b > k) {
                  d && S(0);
                  break;
                }
                u && g(y + 131072);
                var ti = y + Q;
                if (y < V) {
                  var tn = o - V,
                    ta = Math.min(V, ti);
                  for (tn + y < 0 && S(3); y < ta; ++y) r[y] = i[tn + y];
                }
                for (; y < ti; ++y) r[y] = r[y - V];
              }
            }
            ((e.l = w),
              (e.p = J),
              (e.b = y),
              (e.f = p),
              w && ((p = 1), (e.m = E), (e.d = _), (e.n = U)));
          } while (!p);
          return y != r.length && s ? x(r, 0, y) : r.subarray(0, y);
        },
        R = function (t, e, r) {
          r <<= 7 & e;
          var i = (e / 8) | 0;
          ((t[i] |= r), (t[i + 1] |= r >> 8));
        },
        P = function (t, e, r) {
          r <<= 7 & e;
          var i = (e / 8) | 0;
          ((t[i] |= r), (t[i + 1] |= r >> 8), (t[i + 2] |= r >> 16));
        },
        I = function (t, e) {
          for (var r = [], i = 0; i < t.length; ++i)
            t[i] && r.push({ s: i, f: t[i] });
          var n = r.length,
            s = r.slice();
          if (!n) return { t: $, l: 0 };
          if (1 == n) {
            var l = new a(r[0].s + 1);
            return ((l[r[0].s] = 1), { t: l, l: 1 });
          }
          (r.sort(function (t, e) {
            return t.f - e.f;
          }),
            r.push({ s: -1, f: 25001 }));
          var h = r[0],
            f = r[1],
            u = 0,
            d = 1,
            c = 2;
          for (r[0] = { s: -1, f: h.f + f.f, l: h, r: f }; d != n - 1;)
            ((h = r[r[u].f < r[c].f ? u++ : c++]),
              (f = r[u != d && r[u].f < r[c].f ? u++ : c++]),
              (r[d++] = { s: -1, f: h.f + f.f, l: h, r: f }));
          for (var g = s[0].s, i = 1; i < n; ++i) s[i].s > g && (g = s[i].s);
          var p = new o(g + 1),
            m = M(r[d - 1], p, 0);
          if (m > e) {
            var i = 0,
              b = 0,
              y = m - e,
              w = 1 << y;
            for (
              s.sort(function (t, e) {
                return p[e.s] - p[t.s] || t.f - e.f;
              });
              i < n;
              ++i
            ) {
              var _ = s[i].s;
              if (p[_] > e) ((b += w - (1 << (m - p[_]))), (p[_] = e));
              else break;
            }
            for (b >>= y; b > 0;) {
              var v = s[i].s;
              p[v] < e ? (b -= 1 << (e - p[v]++ - 1)) : ++i;
            }
            for (; i >= 0 && b; --i) {
              var E = s[i].s;
              p[E] == e && (--p[E], ++b);
            }
            m = e;
          }
          return { t: new a(p), l: m };
        },
        M = function (t, e, r) {
          return -1 == t.s
            ? Math.max(M(t.l, e, r + 1), M(t.r, e, r + 1))
            : (e[t.s] = r);
        },
        D = function (t) {
          for (var e = t.length; e && !t[--e];);
          for (
            var r = new o(++e),
              i = 0,
              n = t[0],
              a = 1,
              s = function (t) {
                r[i++] = t;
              },
              l = 1;
            l <= e;
            ++l
          )
            if (t[l] == n && l != e) ++a;
            else {
              if (!n && a > 2) {
                for (; a > 138; a -= 138) s(32754);
                a > 2 &&
                  (s(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305),
                  (a = 0));
              } else if (a > 3) {
                for (s(n), --a; a > 6; a -= 6) s(8304);
                a > 2 && (s(((a - 3) << 5) | 8208), (a = 0));
              }
              for (; a--;) s(n);
              ((a = 1), (n = t[l]));
            }
          return { c: r.subarray(0, i), n: e };
        },
        B = function (t, e) {
          for (var r = 0, i = 0; i < e.length; ++i) r += t[i] * e[i];
          return r;
        },
        W = function (t, e, r) {
          var i = r.length,
            n = F(e + 2);
          ((t[n] = 255 & i),
            (t[n + 1] = i >> 8),
            (t[n + 2] = 255 ^ t[n]),
            (t[n + 3] = 255 ^ t[n + 1]));
          for (var a = 0; a < i; ++a) t[n + a + 4] = r[a];
          return (n + 4 + i) * 8;
        },
        G = function (t, e, r, i, n, a, s, u, d, c, g) {
          (R(e, g++, r), ++n[256]);
          for (
            var p,
              m,
              b,
              y,
              w = I(n, 15),
              _ = w.t,
              N = w.l,
              L = I(a, 15),
              O = L.t,
              F = L.l,
              x = D(_),
              C = x.c,
              S = x.n,
              T = D(O),
              M = T.c,
              G = T.n,
              z = new o(19),
              $ = 0;
            $ < C.length;
            ++$
          )
            ++z[31 & C[$]];
          for (var $ = 0; $ < M.length; ++$) ++z[31 & M[$]];
          for (
            var H = I(z, 7), K = H.t, V = H.l, j = 19;
            j > 4 && !K[f[j - 1]];
            --j
          );
          var q = (c + 5) << 3,
            Y = B(n, E) + B(a, U) + s,
            X =
              B(n, _) +
              B(a, O) +
              s +
              14 +
              3 * j +
              B(z, K) +
              2 * z[16] +
              3 * z[17] +
              7 * z[18];
          if (d >= 0 && q <= Y && q <= X) return W(e, g, t.subarray(d, d + c));
          if ((R(e, g, 1 + (X < Y)), (g += 2), X < Y)) {
            ((p = v(_, N, 0)), (m = _), (b = v(O, F, 0)), (y = O));
            var J = v(K, V, 0);
            (R(e, g, S - 257),
              R(e, g + 5, G - 1),
              R(e, g + 10, j - 4),
              (g += 14));
            for (var $ = 0; $ < j; ++$) R(e, g + 3 * $, K[f[$]]);
            g += 3 * j;
            for (var Z = [C, M], Q = 0; Q < 2; ++Q)
              for (var tt = Z[Q], $ = 0; $ < tt.length; ++$) {
                var te = 31 & tt[$];
                (R(e, g, J[te]),
                  (g += K[te]),
                  te > 15 && (R(e, g, (tt[$] >> 5) & 127), (g += tt[$] >> 12)));
              }
          } else ((p = k), (m = E), (b = A), (y = U));
          for (var $ = 0; $ < u; ++$) {
            var tr = i[$];
            if (tr > 255) {
              var te = (tr >> 18) & 31;
              (P(e, g, p[te + 257]),
                (g += m[te + 257]),
                te > 7 && (R(e, g, (tr >> 23) & 31), (g += l[te])));
              var ti = 31 & tr;
              (P(e, g, b[ti]),
                (g += y[ti]),
                ti > 3 && (P(e, g, (tr >> 5) & 8191), (g += h[ti])));
            } else (P(e, g, p[tr]), (g += m[tr]));
          }
          return (P(e, g, p[256]), g + m[256]);
        },
        z = new s([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        $ = new a(0),
        H = function (t, e, r, i, n, f) {
          var u = f.z || t.length,
            d = new a(i + u + 5 * (1 + Math.ceil(u / 7e3)) + n),
            c = d.subarray(i, d.length - n),
            p = f.l,
            m = 7 & (f.r || 0);
          if (e) {
            m && (c[0] = f.r >> 3);
            for (
              var y = z[e - 1],
                w = y >> 13,
                _ = 8191 & y,
                v = (1 << r) - 1,
                E = f.p || new o(32768),
                U = f.h || new o(v + 1),
                k = Math.ceil(r / 3),
                A = 2 * k,
                N = function (e) {
                  return (t[e] ^ (t[e + 1] << k) ^ (t[e + 2] << A)) & v;
                },
                L = new s(25e3),
                O = new o(288),
                C = new o(32),
                S = 0,
                T = 0,
                R = f.i || 0,
                P = 0,
                I = f.w || 0,
                M = 0;
              R + 2 < u;
              ++R
            ) {
              var D = N(R),
                B = 32767 & R,
                $ = U[D];
              if (((E[B] = $), (U[D] = B), I <= R)) {
                var H = u - R;
                if ((S > 7e3 || P > 24576) && (H > 423 || !p)) {
                  ((m = G(t, c, 0, L, O, C, T, P, M, R - M, m)),
                    (P = S = T = 0),
                    (M = R));
                  for (var K = 0; K < 286; ++K) O[K] = 0;
                  for (var K = 0; K < 30; ++K) C[K] = 0;
                }
                var V = 2,
                  j = 0,
                  q = _,
                  Y = (B - $) & 32767;
                if (H > 2 && D == N(R - Y))
                  for (
                    var X = Math.min(w, H) - 1,
                      J = Math.min(32767, R),
                      Z = Math.min(258, H);
                    Y <= J && --q && B != $;
                  ) {
                    if (t[R + V] == t[R + V - Y]) {
                      for (var Q = 0; Q < Z && t[R + Q] == t[R + Q - Y]; ++Q);
                      if (Q > V) {
                        if (((V = Q), (j = Y), Q > X)) break;
                        for (
                          var tt = Math.min(Y, Q - 2), te = 0, K = 0;
                          K < tt;
                          ++K
                        ) {
                          var tr = (R - Y + K) & 32767,
                            ti = E[tr],
                            tn = (tr - ti) & 32767;
                          tn > te && ((te = tn), ($ = tr));
                        }
                      }
                    }
                    (($ = E[(B = $)]), (Y += (B - $) & 32767));
                  }
                if (j) {
                  L[P++] = 0x10000000 | (g[V] << 18) | b[j];
                  var ta = 31 & g[V],
                    to = 31 & b[j];
                  ((T += l[ta] + h[to]),
                    ++O[257 + ta],
                    ++C[to],
                    (I = R + V),
                    ++S);
                } else ((L[P++] = t[R]), ++O[t[R]]);
              }
            }
            for (R = Math.max(R, I); R < u; ++R) ((L[P++] = t[R]), ++O[t[R]]);
            ((m = G(t, c, p, L, O, C, T, P, M, R - M, m)),
              p ||
                ((f.r = (7 & m) | (c[(m / 8) | 0] << 3)),
                (m -= 7),
                (f.h = U),
                (f.p = E),
                (f.i = R),
                (f.w = I)));
          } else {
            for (var R = f.w || 0; R < u + p; R += 65535) {
              var ts = R + 65535;
              (ts >= u && ((c[(m / 8) | 0] = p), (ts = u)),
                (m = W(c, m + 1, t.subarray(R, ts))));
            }
            f.i = u;
          }
          return x(d, 0, i + F(m) + n);
        },
        K = function () {
          var t = -1;
          return {
            p: function (e) {
              for (var r = t, i = 0; i < e.length; ++i)
                r = null[(255 & r) ^ e[i]] ^ (r >>> 8);
              t = r;
            },
            d: function () {
              return ~t;
            },
          };
        },
        V = function () {
          var t = 1,
            e = 0;
          return {
            p: function (r) {
              for (var i = t, n = e, a = 0 | r.length, o = 0; o != a;) {
                for (var s = Math.min(o + 2655, a); o < s; ++o) n += i += r[o];
                ((i = (65535 & i) + 15 * (i >> 16)),
                  (n = (65535 & n) + 15 * (n >> 16)));
              }
              ((t = i), (e = n));
            },
            d: function () {
              return (
                (t %= 65521),
                (e %= 65521),
                ((255 & t) << 24) |
                  ((65280 & t) << 8) |
                  ((255 & e) << 8) |
                  (e >> 8)
              );
            },
          };
        },
        j = function (t, e, r, i, n) {
          if (!n && ((n = { l: 1 }), e.dictionary)) {
            var o = e.dictionary.subarray(-32768),
              s = new a(o.length + t.length);
            (s.set(o), s.set(t, o.length), (t = s), (n.w = o.length));
          }
          return H(
            t,
            null == e.level ? 6 : e.level,
            null == e.mem
              ? n.l
                ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length))))
                : 20
              : 12 + e.mem,
            r,
            i,
            n,
          );
        },
        q = function (t, e) {
          var r = {};
          for (var i in t) r[i] = t[i];
          for (var i in e) r[i] = e[i];
          return r;
        },
        Y = function (t, e, r) {
          for (
            var i = t(),
              n = t.toString(),
              a = n
                .slice(n.indexOf("[") + 1, n.lastIndexOf("]"))
                .replace(/\s+/g, "")
                .split(","),
              o = 0;
            o < i.length;
            ++o
          ) {
            var s = i[o],
              l = a[o];
            if ("function" == typeof s) {
              e += ";" + l + "=";
              var h = s.toString();
              if (s.prototype)
                if (-1 != h.indexOf("[native code]")) {
                  var f = h.indexOf(" ", 8) + 1;
                  e += h.slice(f, h.indexOf("(", f));
                } else
                  for (var u in ((e += h), s.prototype))
                    e +=
                      ";" +
                      l +
                      ".prototype." +
                      u +
                      "=" +
                      s.prototype[u].toString();
              else e += h;
            } else r[l] = s;
          }
          return e;
        },
        X = function (t) {
          var e = [];
          for (var r in t)
            t[r].buffer && e.push((t[r] = new t[r].constructor(t[r])).buffer);
          return e;
        },
        J = function (t, e, r, i) {
          if (!null[r]) {
            for (var a = "", o = {}, s = t.length - 1, l = 0; l < s; ++l)
              a = Y(t[l], a, o);
            null[r] = { c: Y(t[s], a, o), e: o };
          }
          var h = q({}, null[r].e);
          return n(
            null[r].c +
              ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" +
              e.toString() +
              "}",
            r,
            h,
            X(h),
            i,
          );
        },
        Z = function () {
          return [
            a,
            o,
            s,
            l,
            h,
            f,
            c,
            m,
            null,
            null,
            y,
            C,
            v,
            N,
            L,
            O,
            F,
            x,
            S,
            T,
            tc,
            Q,
            tt,
          ];
        },
        Q = function (t) {
          return postMessage(t, [t.buffer]);
        },
        tt = function (t) {
          return (
            t && { out: t.size && new a(t.size), dictionary: t.dictionary }
          );
        },
        te = function (t, e, r, i, n, a) {
          var o = J(r, i, n, function (t, e) {
            (o.terminate(), a(t, e));
          });
          return (
            o.postMessage([t, e], e.consume ? [t.buffer] : []),
            function () {
              o.terminate();
            }
          );
        },
        tr = function (t, e) {
          return t[e] | (t[e + 1] << 8);
        },
        ti = function (t, e) {
          return (
            (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0
          );
        },
        tn = function (t, e) {
          return ti(t, e) + 0x100000000 * ti(t, e + 4);
        },
        ta = function (t, e, r) {
          for (; r; ++e) ((t[e] = r), (r >>>= 8));
        },
        to = function (t, e) {
          var r = e.filename;
          if (
            ((t[0] = 31),
            (t[1] = 139),
            (t[2] = 8),
            (t[8] = e.level < 2 ? 4 : 2 * (9 == e.level)),
            (t[9] = 3),
            0 != e.mtime &&
              ta(t, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)),
            r)
          ) {
            t[3] = 8;
            for (var i = 0; i <= r.length; ++i) t[i + 10] = r.charCodeAt(i);
          }
        },
        ts = function (t) {
          (31 != t[0] || 139 != t[1] || 8 != t[2]) && S(6, "invalid gzip data");
          var e = t[3],
            r = 10;
          4 & e && (r += (t[10] | (t[11] << 8)) + 2);
          for (var i = ((e >> 3) & 1) + ((e >> 4) & 1); i > 0; i -= !t[r++]);
          return r + (2 & e);
        },
        tl = function (t) {
          var e = t.length;
          return (
            (t[e - 4] |
              (t[e - 3] << 8) |
              (t[e - 2] << 16) |
              (t[e - 1] << 24)) >>>
            0
          );
        },
        th = function (t) {
          return 10 + (t.filename ? t.filename.length + 1 : 0);
        },
        tf = function (t, e) {
          var r = e.level;
          if (
            ((t[0] = 120),
            (t[1] =
              ((0 == r ? 0 : r < 6 ? 1 : 9 == r ? 3 : 2) << 6) |
              (e.dictionary && 32)),
            (t[1] |= 31 - (((t[0] << 8) | t[1]) % 31)),
            e.dictionary)
          ) {
            var i = V();
            (i.p(e.dictionary), ta(t, 2, i.d()));
          }
        },
        tu = function (t, e) {
          return (
            ((15 & t[0]) != 8 || t[0] >> 4 > 7 || ((t[0] << 8) | t[1]) % 31) &&
              S(6, "invalid zlib data"),
            ((t[1] >> 5) & 1) == +!e &&
              S(
                6,
                "invalid zlib data: " +
                  (32 & t[1] ? "need" : "unexpected") +
                  " dictionary",
              ),
            ((t[1] >> 3) & 4) + 2
          );
        };
      function td(t, e) {
        return j(t, e || {}, 0, 0);
      }
      function tc(t, e) {
        return T(t, { i: 2 }, e && e.out, e && e.dictionary);
      }
      function tg(t, e) {
        e || (e = {});
        var r = V();
        r.p(t);
        var i = j(t, e, e.dictionary ? 6 : 2, 4);
        return (tf(i, e), ta(i, i.length - 4, r.d()), i);
      }
      var tp = "undefined" != typeof TextEncoder && new TextEncoder(),
        tm = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        tm.decode($, { stream: !0 });
      } catch (t) {}
      var tb = function (t) {
          for (var e = "", r = 0; ;) {
            var i = t[r++],
              n = (i > 127) + (i > 223) + (i > 239);
            if (r + n > t.length) return { s: e, r: x(t, r - 1) };
            n
              ? 3 == n
                ? (e += String.fromCharCode(
                    55296 |
                      ((i =
                        (((15 & i) << 18) |
                          ((63 & t[r++]) << 12) |
                          ((63 & t[r++]) << 6) |
                          (63 & t[r++])) -
                        65536) >>
                        10),
                    56320 | (1023 & i),
                  ))
                : 1 & n
                  ? (e += String.fromCharCode(((31 & i) << 6) | (63 & t[r++])))
                  : (e += String.fromCharCode(
                      ((15 & i) << 12) | ((63 & t[r++]) << 6) | (63 & t[r++]),
                    ))
              : (e += String.fromCharCode(i));
          }
        },
        ty = function (t, e) {
          for (; 1 != tr(t, e); e += 4 + tr(t, e + 2));
          return [tn(t, e + 12), tn(t, e + 4), tn(t, e + 20)];
        },
        tw = function (t) {
          var e = 0;
          if (t)
            for (var r in t) {
              var i = t[r].length;
              (i > 65535 && S(9), (e += i + 4));
            }
          return e;
        };
      "function" == typeof queueMicrotask && queueMicrotask;
    },
    64659: (t, e, r) => {
      function i(t, e = "utf8") {
        return new TextDecoder(e).decode(t);
      }
      r.d(e, { D4: () => T });
      let n = new TextEncoder(),
        a = (() => {
          let t = new Uint8Array(4);
          return !((new Uint32Array(t.buffer)[0] = 1) & t[0]);
        })(),
        o = {
          int8: globalThis.Int8Array,
          uint8: globalThis.Uint8Array,
          int16: globalThis.Int16Array,
          uint16: globalThis.Uint16Array,
          int32: globalThis.Int32Array,
          uint32: globalThis.Uint32Array,
          uint64: globalThis.BigUint64Array,
          int64: globalThis.BigInt64Array,
          float32: globalThis.Float32Array,
          float64: globalThis.Float64Array,
        };
      class s {
        buffer;
        byteLength;
        byteOffset;
        length;
        offset;
        lastWrittenByte;
        littleEndian;
        _data;
        _mark;
        _marks;
        constructor(t = 8192, e = {}) {
          let r = !1;
          "number" == typeof t
            ? (t = new ArrayBuffer(t))
            : ((r = !0), (this.lastWrittenByte = t.byteLength));
          let i = e.offset ? e.offset >>> 0 : 0,
            n = t.byteLength - i,
            a = i;
          ((ArrayBuffer.isView(t) || t instanceof s) &&
            (t.byteLength !== t.buffer.byteLength && (a = t.byteOffset + i),
            (t = t.buffer)),
            r ? (this.lastWrittenByte = n) : (this.lastWrittenByte = 0),
            (this.buffer = t),
            (this.length = n),
            (this.byteLength = n),
            (this.byteOffset = a),
            (this.offset = 0),
            (this.littleEndian = !0),
            (this._data = new DataView(this.buffer, a, n)),
            (this._mark = 0),
            (this._marks = []));
        }
        available(t = 1) {
          return this.offset + t <= this.length;
        }
        isLittleEndian() {
          return this.littleEndian;
        }
        setLittleEndian() {
          return ((this.littleEndian = !0), this);
        }
        isBigEndian() {
          return !this.littleEndian;
        }
        setBigEndian() {
          return ((this.littleEndian = !1), this);
        }
        skip(t = 1) {
          return ((this.offset += t), this);
        }
        back(t = 1) {
          return ((this.offset -= t), this);
        }
        seek(t) {
          return ((this.offset = t), this);
        }
        mark() {
          return ((this._mark = this.offset), this);
        }
        reset() {
          return ((this.offset = this._mark), this);
        }
        pushMark() {
          return (this._marks.push(this.offset), this);
        }
        popMark() {
          let t = this._marks.pop();
          if (void 0 === t) throw Error("Mark stack empty");
          return (this.seek(t), this);
        }
        rewind() {
          return ((this.offset = 0), this);
        }
        ensureAvailable(t = 1) {
          if (!this.available(t)) {
            let e = 2 * (this.offset + t),
              r = new Uint8Array(e);
            (r.set(new Uint8Array(this.buffer)),
              (this.buffer = r.buffer),
              (this.length = e),
              (this.byteLength = e),
              (this._data = new DataView(this.buffer)));
          }
          return this;
        }
        readBoolean() {
          return 0 !== this.readUint8();
        }
        readInt8() {
          return this._data.getInt8(this.offset++);
        }
        readUint8() {
          return this._data.getUint8(this.offset++);
        }
        readByte() {
          return this.readUint8();
        }
        readBytes(t = 1) {
          return this.readArray(t, "uint8");
        }
        readArray(t, e) {
          let r = o[e].BYTES_PER_ELEMENT * t,
            i = this.byteOffset + this.offset,
            n = this.buffer.slice(i, i + r);
          if (this.littleEndian === a && "uint8" !== e && "int8" !== e) {
            let t = new Uint8Array(this.buffer.slice(i, i + r));
            t.reverse();
            let n = new o[e](t.buffer);
            return ((this.offset += r), n.reverse(), n);
          }
          let s = new o[e](n);
          return ((this.offset += r), s);
        }
        readInt16() {
          let t = this._data.getInt16(this.offset, this.littleEndian);
          return ((this.offset += 2), t);
        }
        readUint16() {
          let t = this._data.getUint16(this.offset, this.littleEndian);
          return ((this.offset += 2), t);
        }
        readInt32() {
          let t = this._data.getInt32(this.offset, this.littleEndian);
          return ((this.offset += 4), t);
        }
        readUint32() {
          let t = this._data.getUint32(this.offset, this.littleEndian);
          return ((this.offset += 4), t);
        }
        readFloat32() {
          let t = this._data.getFloat32(this.offset, this.littleEndian);
          return ((this.offset += 4), t);
        }
        readFloat64() {
          let t = this._data.getFloat64(this.offset, this.littleEndian);
          return ((this.offset += 8), t);
        }
        readBigInt64() {
          let t = this._data.getBigInt64(this.offset, this.littleEndian);
          return ((this.offset += 8), t);
        }
        readBigUint64() {
          let t = this._data.getBigUint64(this.offset, this.littleEndian);
          return ((this.offset += 8), t);
        }
        readChar() {
          return String.fromCharCode(this.readInt8());
        }
        readChars(t = 1) {
          let e = "";
          for (let r = 0; r < t; r++) e += this.readChar();
          return e;
        }
        readUtf8(t = 1) {
          return i(this.readBytes(t));
        }
        decodeText(t = 1, e = "utf8") {
          return i(this.readBytes(t), e);
        }
        writeBoolean(t) {
          return (this.writeUint8(255 * !!t), this);
        }
        writeInt8(t) {
          return (
            this.ensureAvailable(1),
            this._data.setInt8(this.offset++, t),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeUint8(t) {
          return (
            this.ensureAvailable(1),
            this._data.setUint8(this.offset++, t),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeByte(t) {
          return this.writeUint8(t);
        }
        writeBytes(t) {
          this.ensureAvailable(t.length);
          for (let e = 0; e < t.length; e++)
            this._data.setUint8(this.offset++, t[e]);
          return (this._updateLastWrittenByte(), this);
        }
        writeInt16(t) {
          return (
            this.ensureAvailable(2),
            this._data.setInt16(this.offset, t, this.littleEndian),
            (this.offset += 2),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeUint16(t) {
          return (
            this.ensureAvailable(2),
            this._data.setUint16(this.offset, t, this.littleEndian),
            (this.offset += 2),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeInt32(t) {
          return (
            this.ensureAvailable(4),
            this._data.setInt32(this.offset, t, this.littleEndian),
            (this.offset += 4),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeUint32(t) {
          return (
            this.ensureAvailable(4),
            this._data.setUint32(this.offset, t, this.littleEndian),
            (this.offset += 4),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeFloat32(t) {
          return (
            this.ensureAvailable(4),
            this._data.setFloat32(this.offset, t, this.littleEndian),
            (this.offset += 4),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeFloat64(t) {
          return (
            this.ensureAvailable(8),
            this._data.setFloat64(this.offset, t, this.littleEndian),
            (this.offset += 8),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeBigInt64(t) {
          return (
            this.ensureAvailable(8),
            this._data.setBigInt64(this.offset, t, this.littleEndian),
            (this.offset += 8),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeBigUint64(t) {
          return (
            this.ensureAvailable(8),
            this._data.setBigUint64(this.offset, t, this.littleEndian),
            (this.offset += 8),
            this._updateLastWrittenByte(),
            this
          );
        }
        writeChar(t) {
          return this.writeUint8(t.charCodeAt(0));
        }
        writeChars(t) {
          for (let e = 0; e < t.length; e++) this.writeUint8(t.charCodeAt(e));
          return this;
        }
        writeUtf8(t) {
          return this.writeBytes(n.encode(t));
        }
        toArray() {
          return new Uint8Array(
            this.buffer,
            this.byteOffset,
            this.lastWrittenByte,
          );
        }
        getWrittenByteLength() {
          return this.lastWrittenByte - this.byteOffset;
        }
        _updateLastWrittenByte() {
          this.offset > this.lastWrittenByte &&
            (this.lastWrittenByte = this.offset);
        }
      }
      var l,
        h = r(39959);
      let f = [];
      for (let t = 0; t < 256; t++) {
        let e = t;
        for (let t = 0; t < 8; t++)
          1 & e ? (e = 0xedb88320 ^ (e >>> 1)) : (e >>>= 1);
        f[t] = e;
      }
      function u(t, e, r) {
        var i;
        let n = t.readUint32(),
          a =
            ((i = new Uint8Array(t.buffer, t.byteOffset + t.offset - e - 4, e)),
            (0xffffffff ^
              (function (t, e, r) {
                let i = 0xffffffff;
                for (let t = 0; t < r; t++) i = f[(i ^ e[t]) & 255] ^ (i >>> 8);
                return i;
              })(0, i, e)) >>>
              0);
        if (a !== n)
          throw Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${a}`);
      }
      function d(t, e, r) {
        for (let i = 0; i < r; i++) e[i] = t[i];
      }
      function c(t, e, r, i) {
        let n = 0;
        for (; n < i; n++) e[n] = t[n];
        for (; n < r; n++) e[n] = (t[n] + e[n - i]) & 255;
      }
      function g(t, e, r, i) {
        let n = 0;
        if (0 === r.length) for (; n < i; n++) e[n] = t[n];
        else for (; n < i; n++) e[n] = (t[n] + r[n]) & 255;
      }
      function p(t, e, r, i, n) {
        let a = 0;
        if (0 === r.length) {
          for (; a < n; a++) e[a] = t[a];
          for (; a < i; a++) e[a] = (t[a] + (e[a - n] >> 1)) & 255;
        } else {
          for (; a < n; a++) e[a] = (t[a] + (r[a] >> 1)) & 255;
          for (; a < i; a++) e[a] = (t[a] + ((e[a - n] + r[a]) >> 1)) & 255;
        }
      }
      function m(t, e, r, i, n) {
        let a = 0;
        if (0 === r.length) {
          for (; a < n; a++) e[a] = t[a];
          for (; a < i; a++) e[a] = (t[a] + e[a - n]) & 255;
        } else {
          for (; a < n; a++) e[a] = (t[a] + r[a]) & 255;
          for (; a < i; a++)
            e[a] =
              (t[a] +
                (function (t, e, r) {
                  let i = t + e - r,
                    n = Math.abs(i - t),
                    a = Math.abs(i - e),
                    o = Math.abs(i - r);
                  return n <= a && n <= o ? t : a <= o ? e : r;
                })(e[a - n], r[a], r[a - n])) &
              255;
        }
      }
      let b = 255 === new Uint8Array(new Uint16Array([255]).buffer)[0],
        y = 255 === new Uint8Array(new Uint16Array([255]).buffer)[0],
        w = new Uint8Array(0);
      function _(t) {
        let e,
          r,
          { data: i, width: n, height: a, channels: o, depth: s } = t,
          l = Math.ceil(s / 8) * o,
          h = Math.ceil((s / 8) * o * n),
          f = new Uint8Array(a * h),
          u = w,
          b = 0;
        for (let t = 0; t < a; t++) {
          switch (
            ((e = i.subarray(b + 1, b + 1 + h)),
            (r = f.subarray(t * h, (t + 1) * h)),
            i[b])
          ) {
            case 0:
              d(e, r, h);
              break;
            case 1:
              c(e, r, h, l);
              break;
            case 2:
              g(e, r, u, h);
              break;
            case 3:
              p(e, r, u, h, l);
              break;
            case 4:
              m(e, r, u, h, l);
              break;
            default:
              throw Error(`Unsupported filter: ${i[b]}`);
          }
          ((u = r), (b += h + 1));
        }
        if (16 !== s) return f;
        {
          let t = new Uint16Array(f.buffer);
          if (y)
            for (let e = 0; e < t.length; e++) {
              var _;
              t[e] = ((255 & (_ = t[e])) << 8) | ((_ >> 8) & 255);
            }
          return t;
        }
      }
      let v = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
      function E(t) {
        if (
          !(function (t) {
            if (t.length < v.length) return !1;
            for (let e = 0; e < v.length; e++) if (t[e] !== v[e]) return !1;
            return !0;
          })(t.readBytes(v.length))
        )
          throw Error("wrong PNG signature");
      }
      let U = new TextDecoder("latin1"),
        k = /^[\u0000-\u00FF]*$/;
      function A(t) {
        for (t.mark(); 0 !== t.readByte(););
        let e = t.offset;
        t.reset();
        let r = U.decode(t.readBytes(e - t.offset - 1));
        return (
          t.skip(1),
          (function (t) {
            if (
              ((function (t) {
                if (!k.test(t)) throw Error("invalid latin1 text");
              })(t),
              0 === t.length || t.length > 79)
            )
              throw Error("keyword length must be between 1 and 79");
          })(r),
          r
        );
      }
      let N = {
          UNKNOWN: -1,
          GREYSCALE: 0,
          TRUECOLOUR: 2,
          INDEXED_COLOUR: 3,
          GREYSCALE_ALPHA: 4,
          TRUECOLOUR_ALPHA: 6,
        },
        L = { UNKNOWN: -1, DEFLATE: 0 },
        O = { UNKNOWN: -1, ADAPTIVE: 0 },
        F = { UNKNOWN: -1, NO_INTERLACE: 0, ADAM7: 1 },
        x = { NONE: 0, BACKGROUND: 1, PREVIOUS: 2 },
        C = { SOURCE: 0, OVER: 1 };
      class S extends s {
        _checkCrc;
        _inflator;
        _png;
        _apng;
        _end;
        _hasPalette;
        _palette;
        _hasTransparency;
        _transparency;
        _compressionMethod;
        _filterMethod;
        _interlaceMethod;
        _colorType;
        _isAnimated;
        _numberOfFrames;
        _numberOfPlays;
        _frames;
        _writingDataChunks;
        constructor(t, e = {}) {
          super(t);
          let { checkCrc: r = !1 } = e;
          ((this._checkCrc = r),
            (this._inflator = new h.EL()),
            (this._png = {
              width: -1,
              height: -1,
              channels: -1,
              data: new Uint8Array(0),
              depth: 1,
              text: {},
            }),
            (this._apng = {
              width: -1,
              height: -1,
              channels: -1,
              depth: 1,
              numberOfFrames: 1,
              numberOfPlays: 0,
              text: {},
              frames: [],
            }),
            (this._end = !1),
            (this._hasPalette = !1),
            (this._palette = []),
            (this._hasTransparency = !1),
            (this._transparency = new Uint16Array(0)),
            (this._compressionMethod = L.UNKNOWN),
            (this._filterMethod = O.UNKNOWN),
            (this._interlaceMethod = F.UNKNOWN),
            (this._colorType = N.UNKNOWN),
            (this._isAnimated = !1),
            (this._numberOfFrames = 1),
            (this._numberOfPlays = 0),
            (this._frames = []),
            (this._writingDataChunks = !1),
            this.setBigEndian());
        }
        decode() {
          for (E(this); !this._end;) {
            let t = this.readUint32(),
              e = this.readChars(4);
            this.decodeChunk(t, e);
          }
          return (this.decodeImage(), this._png);
        }
        decodeApng() {
          for (E(this); !this._end;) {
            let t = this.readUint32(),
              e = this.readChars(4);
            this.decodeApngChunk(t, e);
          }
          return (this.decodeApngImage(), this._apng);
        }
        decodeChunk(t, e) {
          let r = this.offset;
          switch (e) {
            case "IHDR":
              this.decodeIHDR();
              break;
            case "PLTE":
              this.decodePLTE(t);
              break;
            case "IDAT":
              this.decodeIDAT(t);
              break;
            case "IEND":
              this._end = !0;
              break;
            case "tRNS":
              this.decodetRNS(t);
              break;
            case "iCCP":
              this.decodeiCCP(t);
              break;
            case "tEXt":
              !(function (t, e, r) {
                var i, n;
                let a = A(e);
                t[a] =
                  ((i = e), (n = r - a.length - 1), U.decode(i.readBytes(n)));
              })(this._png.text, this, t);
              break;
            case "pHYs":
              this.decodepHYs();
              break;
            default:
              this.skip(t);
          }
          if (this.offset - r !== t)
            throw Error(`Length mismatch while decoding chunk ${e}`);
          this._checkCrc ? u(this, t + 4, e) : this.skip(4);
        }
        decodeApngChunk(t, e) {
          let r = this.offset;
          switch (
            ("fdAT" !== e &&
              "IDAT" !== e &&
              this._writingDataChunks &&
              this.pushDataToFrame(),
            e)
          ) {
            case "acTL":
              this.decodeACTL();
              break;
            case "fcTL":
              this.decodeFCTL();
              break;
            case "fdAT":
              this.decodeFDAT(t);
              break;
            default:
              (this.decodeChunk(t, e), (this.offset = r + t));
          }
          if (this.offset - r !== t)
            throw Error(`Length mismatch while decoding chunk ${e}`);
          this._checkCrc ? u(this, t + 4, e) : this.skip(4);
        }
        decodeIHDR() {
          let t,
            e = this._png;
          ((e.width = this.readUint32()),
            (e.height = this.readUint32()),
            (e.depth = (function (t) {
              if (1 !== t && 2 !== t && 4 !== t && 8 !== t && 16 !== t)
                throw Error(`invalid bit depth: ${t}`);
              return t;
            })(this.readUint8())));
          let r = this.readUint8();
          switch (((this._colorType = r), r)) {
            case N.GREYSCALE:
              t = 1;
              break;
            case N.TRUECOLOUR:
              t = 3;
              break;
            case N.INDEXED_COLOUR:
              t = 1;
              break;
            case N.GREYSCALE_ALPHA:
              t = 2;
              break;
            case N.TRUECOLOUR_ALPHA:
              t = 4;
              break;
            case N.UNKNOWN:
            default:
              throw Error(`Unknown color type: ${r}`);
          }
          if (
            ((this._png.channels = t),
            (this._compressionMethod = this.readUint8()),
            this._compressionMethod !== L.DEFLATE)
          )
            throw Error(
              `Unsupported compression method: ${this._compressionMethod}`,
            );
          ((this._filterMethod = this.readUint8()),
            (this._interlaceMethod = this.readUint8()));
        }
        decodeACTL() {
          ((this._numberOfFrames = this.readUint32()),
            (this._numberOfPlays = this.readUint32()),
            (this._isAnimated = !0));
        }
        decodeFCTL() {
          let t = {
            sequenceNumber: this.readUint32(),
            width: this.readUint32(),
            height: this.readUint32(),
            xOffset: this.readUint32(),
            yOffset: this.readUint32(),
            delayNumber: this.readUint16(),
            delayDenominator: this.readUint16(),
            disposeOp: this.readUint8(),
            blendOp: this.readUint8(),
            data: new Uint8Array(0),
          };
          this._frames.push(t);
        }
        decodePLTE(t) {
          if (t % 3 != 0)
            throw RangeError(
              `PLTE field length must be a multiple of 3. Got ${t}`,
            );
          let e = t / 3;
          this._hasPalette = !0;
          let r = [];
          this._palette = r;
          for (let t = 0; t < e; t++)
            r.push([this.readUint8(), this.readUint8(), this.readUint8()]);
        }
        decodeIDAT(t) {
          this._writingDataChunks = !0;
          let e = this.offset + this.byteOffset;
          if (
            (this._inflator.push(new Uint8Array(this.buffer, e, t)),
            this._inflator.err)
          )
            throw Error(
              `Error while decompressing the data: ${this._inflator.err}`,
            );
          this.skip(t);
        }
        decodeFDAT(t) {
          this._writingDataChunks = !0;
          let e = t,
            r = this.offset + this.byteOffset;
          if (
            ((r += 4),
            (e -= 4),
            this._inflator.push(new Uint8Array(this.buffer, r, e)),
            this._inflator.err)
          )
            throw Error(
              `Error while decompressing the data: ${this._inflator.err}`,
            );
          this.skip(t);
        }
        decodetRNS(t) {
          switch (this._colorType) {
            case N.GREYSCALE:
            case N.TRUECOLOUR:
              if (t % 2 != 0)
                throw RangeError(
                  `tRNS chunk length must be a multiple of 2. Got ${t}`,
                );
              if (t / 2 > this._png.width * this._png.height)
                throw Error(
                  `tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`,
                );
              ((this._hasTransparency = !0),
                (this._transparency = new Uint16Array(t / 2)));
              for (let e = 0; e < t / 2; e++)
                this._transparency[e] = this.readUint16();
              break;
            case N.INDEXED_COLOUR: {
              if (t > this._palette.length)
                throw Error(
                  `tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`,
                );
              let e = 0;
              for (; e < t; e++) {
                let t = this.readByte();
                this._palette[e].push(t);
              }
              for (; e < this._palette.length; e++) this._palette[e].push(255);
              break;
            }
            case N.UNKNOWN:
            case N.GREYSCALE_ALPHA:
            case N.TRUECOLOUR_ALPHA:
            default:
              throw Error(
                `tRNS chunk is not supported for color type ${this._colorType}`,
              );
          }
        }
        decodeiCCP(t) {
          let e = A(this),
            r = this.readUint8();
          if (r !== L.DEFLATE)
            throw Error(`Unsupported iCCP compression method: ${r}`);
          let i = this.readBytes(t - e.length - 2);
          this._png.iccEmbeddedProfile = { name: e, profile: (0, h.UD)(i) };
        }
        decodepHYs() {
          let t = this.readUint32(),
            e = this.readUint32(),
            r = this.readByte();
          this._png.resolution = { x: t, y: e, unit: r };
        }
        decodeApngImage() {
          ((this._apng.width = this._png.width),
            (this._apng.height = this._png.height),
            (this._apng.channels = this._png.channels),
            (this._apng.depth = this._png.depth),
            (this._apng.numberOfFrames = this._numberOfFrames),
            (this._apng.numberOfPlays = this._numberOfPlays),
            (this._apng.text = this._png.text),
            (this._apng.resolution = this._png.resolution));
          for (let t = 0; t < this._numberOfFrames; t++) {
            let e = {
                sequenceNumber: this._frames[t].sequenceNumber,
                delayNumber: this._frames[t].delayNumber,
                delayDenominator: this._frames[t].delayDenominator,
                data:
                  8 === this._apng.depth
                    ? new Uint8Array(
                        this._apng.width *
                          this._apng.height *
                          this._apng.channels,
                      )
                    : new Uint16Array(
                        this._apng.width *
                          this._apng.height *
                          this._apng.channels,
                      ),
              },
              r = this._frames.at(t);
            if (r) {
              if (
                ((r.data = _({
                  data: r.data,
                  width: r.width,
                  height: r.height,
                  channels: this._apng.channels,
                  depth: this._apng.depth,
                })),
                this._hasPalette && (this._apng.palette = this._palette),
                this._hasTransparency &&
                  (this._apng.transparency = this._transparency),
                0 === t ||
                  (0 === r.xOffset &&
                    0 === r.yOffset &&
                    r.width === this._png.width &&
                    r.height === this._png.height))
              )
                e.data = r.data;
              else {
                let i = this._apng.frames.at(t - 1);
                (this.disposeFrame(r, i, e), this.addFrameDataToCanvas(e, r));
              }
              this._apng.frames.push(e);
            }
          }
          return this._apng;
        }
        disposeFrame(t, e, r) {
          switch (t.disposeOp) {
            case x.NONE:
              break;
            case x.BACKGROUND:
              for (let e = 0; e < this._png.height; e++)
                for (let i = 0; i < this._png.width; i++) {
                  let n = (e * t.width + i) * this._png.channels;
                  for (let t = 0; t < this._png.channels; t++)
                    r.data[n + t] = 0;
                }
              break;
            case x.PREVIOUS:
              r.data.set(e.data);
              break;
            default:
              throw Error("Unknown disposeOp");
          }
        }
        addFrameDataToCanvas(t, e) {
          let r = 1 << this._png.depth,
            i = (t, r) => ({
              index:
                ((t + e.yOffset) * this._png.width + e.xOffset + r) *
                this._png.channels,
              frameIndex: (t * e.width + r) * this._png.channels,
            });
          switch (e.blendOp) {
            case C.SOURCE:
              for (let r = 0; r < e.height; r++)
                for (let n = 0; n < e.width; n++) {
                  let { index: a, frameIndex: o } = i(r, n);
                  for (let r = 0; r < this._png.channels; r++)
                    t.data[a + r] = e.data[o + r];
                }
              break;
            case C.OVER:
              for (let n = 0; n < e.height; n++)
                for (let a = 0; a < e.width; a++) {
                  let { index: o, frameIndex: s } = i(n, a);
                  for (let i = 0; i < this._png.channels; i++) {
                    let n = e.data[s + this._png.channels - 1] / r,
                      a = Math.floor(
                        n *
                          (i % (this._png.channels - 1) == 0
                            ? 1
                            : e.data[s + i]) +
                          (1 - n) * t.data[o + i],
                      );
                    t.data[o + i] += a;
                  }
                }
              break;
            default:
              throw Error("Unknown blendOp");
          }
        }
        decodeImage() {
          if (this._inflator.err)
            throw Error(
              `Error while decompressing the data: ${this._inflator.err}`,
            );
          let t = this._isAnimated
            ? (this._frames?.at(0)).data
            : this._inflator.result;
          if (this._filterMethod !== O.ADAPTIVE)
            throw Error(`Filter method ${this._filterMethod} not supported`);
          if (this._interlaceMethod === F.NO_INTERLACE)
            this._png.data = _({
              data: t,
              width: this._png.width,
              height: this._png.height,
              channels: this._png.channels,
              depth: this._png.depth,
            });
          else if (this._interlaceMethod === F.ADAM7)
            this._png.data = (function (t) {
              let { data: e, width: r, height: i, channels: n, depth: a } = t,
                o = [
                  { x: 0, y: 0, xStep: 8, yStep: 8 },
                  { x: 4, y: 0, xStep: 8, yStep: 8 },
                  { x: 0, y: 4, xStep: 4, yStep: 8 },
                  { x: 2, y: 0, xStep: 4, yStep: 4 },
                  { x: 0, y: 2, xStep: 2, yStep: 4 },
                  { x: 1, y: 0, xStep: 2, yStep: 2 },
                  { x: 0, y: 1, xStep: 1, yStep: 2 },
                ],
                s = Math.ceil(a / 8) * n,
                l = new Uint8Array(i * r * s),
                h = 0;
              for (let t = 0; t < 7; t++) {
                let n = o[t],
                  a = Math.ceil((r - n.x) / n.xStep),
                  f = Math.ceil((i - n.y) / n.yStep);
                if (a <= 0 || f <= 0) continue;
                let u = a * s,
                  b = new Uint8Array(u);
                for (let t = 0; t < f; t++) {
                  let o = e[h++],
                    f = e.subarray(h, h + u);
                  h += u;
                  let y = new Uint8Array(u);
                  switch (o) {
                    case 0:
                      d(f, y, u);
                      break;
                    case 1:
                      c(f, y, u, s);
                      break;
                    case 2:
                      g(f, y, b, u);
                      break;
                    case 3:
                      p(f, y, b, u, s);
                      break;
                    case 4:
                      m(f, y, b, u, s);
                      break;
                    default:
                      throw Error(`Unsupported filter: ${o}`);
                  }
                  b.set(y);
                  for (let e = 0; e < a; e++) {
                    let a = n.x + e * n.xStep,
                      o = n.y + t * n.yStep;
                    if (!(a >= r) && !(o >= i))
                      for (let t = 0; t < s; t++)
                        l[(o * r + a) * s + t] = y[e * s + t];
                  }
                }
              }
              if (16 !== a) return l;
              {
                let t = new Uint16Array(l.buffer);
                if (b)
                  for (let e = 0; e < t.length; e++) {
                    var f;
                    t[e] = ((255 & (f = t[e])) << 8) | ((f >> 8) & 255);
                  }
                return t;
              }
            })({
              data: t,
              width: this._png.width,
              height: this._png.height,
              channels: this._png.channels,
              depth: this._png.depth,
            });
          else
            throw Error(
              `Interlace method ${this._interlaceMethod} not supported`,
            );
          (this._hasPalette && (this._png.palette = this._palette),
            this._hasTransparency &&
              (this._png.transparency = this._transparency));
        }
        pushDataToFrame() {
          let t = this._inflator.result,
            e = this._frames.at(-1);
          (e
            ? (e.data = t)
            : this._frames.push({
                sequenceNumber: 0,
                width: this._png.width,
                height: this._png.height,
                xOffset: 0,
                yOffset: 0,
                delayNumber: 0,
                delayDenominator: 0,
                disposeOp: x.NONE,
                blendOp: C.SOURCE,
                data: t,
              }),
            (this._inflator = new h.EL()),
            (this._writingDataChunks = !1));
        }
      }
      function T(t, e) {
        return new S(t, e).decode();
      }
      !(function (t) {
        ((t[(t.UNKNOWN = 0)] = "UNKNOWN"), (t[(t.METRE = 1)] = "METRE"));
      })(l || (l = {}));
    },
  },
]);
