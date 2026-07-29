"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1743],
  {
    1743: (e, a, c) => {
      c.d(a, {
        AQ: () => u,
        Ay: () => f,
        Bh: () => n,
        Ey: () => g,
        Hp: () => m,
        L: () => O,
        S7: () => o,
        W_: () => p,
        Zx: () => S,
        aV: () => d,
        bX: () => l,
        fl: () => s,
        nI: () => z,
        sw: () => y,
      });
      var t = c(5710);
      let r = (0, t.zD)("extra/sendPanelDetailsEmail", async (e, a) => {
          let { panelData: c, recipientEmail: t } = e;
          try {
            if (
              !(
                await fetch("/api/sendPanelEmail", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ panelData: c, recipientEmail: t }),
                })
              ).ok
            )
              return a.rejectWithValue("Failed to send email.");
            return (
              console.log("Email sent successfully!"),
              "Email sent successfully!"
            );
          } catch (e) {
            if (e instanceof Error)
              return a.rejectWithValue("Error sending email: " + e.message);
            return a.rejectWithValue("Unknown error occurred");
          }
        }),
        i = (0, t.Z0)({
          name: "extra",
          initialState: {
            logoUrl: "/Image/logoVerni.png",
            pdfLogoUrl: "/Image/logoVerni.png",
            alert: { message: "", severity: "error", duration: 0 },
            accessoryOccupancy: {
              totalSize: 0,
              totalOccupiedSize: 0,
              totalOccupiedSize1: 0,
              totalOccupiedSize2: 0,
            },
            accessoryCurrentId: 0,
            sendingEmailStatus: "idle",
          },
          reducers: {
            setLogoUrl(e, a) {
              e.logoUrl = a.payload.url;
            },
            setPdfLogoUrl(e, a) {
              e.pdfLogoUrl = a.payload.url;
            },
            showAlert(e, a) {
              (e.alert.message = a.payload.message),
                (e.alert.severity = a.payload.severity || "error"),
                (e.alert.duration = a.payload.duration || 3e3);
            },
            resetAlert(e) {
              (e.alert.message = ""), (e.alert.duration = 0);
            },
            setTotalSize(e, a) {
              e.accessoryOccupancy.totalSize = a.payload;
            },
            addTotalOccupiedSize(e, a) {
              e.accessoryOccupancy.totalOccupiedSize += a.payload;
            },
            subtractTotalOccupiedSize(e, a) {
              e.accessoryOccupancy.totalOccupiedSize -= a.payload;
            },
            addTotalOccupiedSize1(e, a) {
              e.accessoryOccupancy.totalOccupiedSize1 += a.payload;
            },
            subtractTotalOccupiedSize1(e, a) {
              e.accessoryOccupancy.totalOccupiedSize1 -= a.payload;
            },
            addTotalOccupiedSize2(e, a) {
              e.accessoryOccupancy.totalOccupiedSize2 += a.payload;
            },
            subtractTotalOccupiedSize2(e, a) {
              e.accessoryOccupancy.totalOccupiedSize2 -= a.payload;
            },
            resetTotalOccupiedSize(e) {
              (e.accessoryOccupancy.totalOccupiedSize = 0),
                (e.accessoryOccupancy.totalOccupiedSize1 = 0),
                (e.accessoryOccupancy.totalOccupiedSize2 = 0);
            },
            incrementAccessoryId(e) {
              e.accessoryCurrentId++;
            },
          },
          extraReducers: (e) => {
            e.addCase(r.pending, (e) => {
              e.sendingEmailStatus = "loading";
            })
              .addCase(r.fulfilled, (e, a) => {
                e.sendingEmailStatus = "succeeded";
              })
              .addCase(r.rejected, (e, a) => {
                e.sendingEmailStatus = "failed";
              });
          },
        }),
        {
          setLogoUrl: l,
          setPdfLogoUrl: s,
          showAlert: o,
          resetAlert: d,
          setTotalSize: u,
          addTotalOccupiedSize: n,
          subtractTotalOccupiedSize: p,
          addTotalOccupiedSize1: y,
          subtractTotalOccupiedSize1: O,
          addTotalOccupiedSize2: S,
          subtractTotalOccupiedSize2: g,
          resetTotalOccupiedSize: z,
          incrementAccessoryId: m,
        } = i.actions,
        f = i.reducer;
    },
  },
]);
