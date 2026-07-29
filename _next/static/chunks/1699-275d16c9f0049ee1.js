"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1699],
  {
    41699: (e, t, s) => {
      s.d(t, { Ay: () => l, T3: () => i, VL: () => d, mJ: () => n });
      var a = s(5710);
      let i = (0, a.zD)("adminSettings/fetchUserSettings", async (e) => {
          let t = await fetch("/api/userSettings/".concat(e));
          if (!t.ok) throw Error("Failed to fetch user settings");
          return { userId: e, settings: await t.json() };
        }),
        n = (0, a.zD)("adminSettings/updateUserSettings", async (e) => {
          let { userId: t, settings: s } = e,
            a = await fetch("/api/userSettings/".concat(t), {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(s),
            });
          if (!a.ok) throw Error("Failed to update user settings");
          return { userId: t, settings: await a.json() };
        }),
        r = (0, a.Z0)({
          name: "adminSettings",
          initialState: { settings: {}, status: "idle" },
          reducers: {},
          extraReducers: (e) => {
            e.addCase(i.pending, (e) => {
              e.status = "loading";
            })
              .addCase(i.fulfilled, (e, t) => {
                (e.status = "idle"),
                  (e.settings[t.payload.userId] = t.payload.settings);
              })
              .addCase(i.rejected, (e) => {
                e.status = "failed";
              })
              .addCase(n.fulfilled, (e, t) => {
                e.settings[t.payload.userId] = t.payload.settings;
              });
          },
        }),
        d = (e) => (t) =>
          t.adminSettings.settings[e] || {
            selectedTechnology: "Remote",
            discountPct: 0,
            allowScreenshots: !1,
            allowPremium: !1,
            premiumExpiresAt: null,
            hidePrices: !1,
            hideBasePrice: !1,
            hideLandingPrice: !1,
            hidePurchaseCost: !1,
            enableMargin: !1,
            enableGst: !1,
            gstPercentage: 18,
            defaultPremiumDays: 30,
            premiumMonthlyDuration: 30,
            premiumYearlyDuration: 365,
            theme: "classic",
            pdfEncrypt: !1,
            pdfPasswordSet: !1,
            customSiteTitle: null,
            customUrlHandle: null,
            customUrlType: "subpath",
            customUrlEnabled: !1,
          },
        l = r.reducer;
    },
  },
]);
