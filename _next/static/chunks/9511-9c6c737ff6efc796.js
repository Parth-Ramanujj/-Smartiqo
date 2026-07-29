"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9511],
  {
    99511: (e, t, s) => {
      s.d(t, {
        Ay: () => D,
        Dg: () => u,
        EY: () => l,
        _0: () => i,
        bG: () => d,
        iY: () => p,
        n: () => o,
        pm: () => c,
        sQ: () => n,
        sk: () => r,
      });
      let a = (0, s(5710).Z0)({
          name: "selection",
          initialState: {
            selectionData: [],
            currentStep: {},
            isNextDisabled: !0,
            isPrevDisabled: !0,
            autoNext: !1,
            autoMode: !1,
          },
          reducers: {
            setSelectionData: (e, t) => {
              e.selectionData = t.payload;
            },
            setCurrentStep: (e, t) => {
              e.currentStep = t.payload;
            },
            setIsNextStepDisabled: (e, t) => {
              e.isNextDisabled = t.payload;
            },
            gotoStep: (e, t) => {
              let { stepData: s, cartData: a, currentStep: o } = t.payload,
                l = o.stepNo - 1,
                i = s.step,
                r = e.selectionData.findIndex((e) => e.step === i);
              if (-1 === r) return void console.error("Step not found");
              let n = Math.min(r, 4);
              if (
                !e.selectionData.slice(0, n).every((e) => {
                  let t = a[e.step.toLowerCase()];
                  return Array.isArray(t)
                    ? t.length > 0
                    : "object" == typeof t && null !== t;
                })
              )
                throw Error(
                  "Please complete the previous step to continue to the next one",
                );
              (e.currentStep = e.selectionData[r]),
                r < l && (e.isNextDisabled = !1);
            },
            nextStep: (e, t) => {
              if (e.currentStep) {
                let s =
                  e.selectionData.findIndex(
                    (t) => t.stepNo === e.currentStep.stepNo,
                  ) + 1;
                if (s < e.selectionData.length) {
                  if (
                    ((e.currentStep = e.selectionData[s]),
                    (e.isPrevDisabled = !1),
                    t.payload)
                  ) {
                    let a = e.currentStep.step.toLowerCase(),
                      o = t.payload;
                    if (s < 4) {
                      let t = o[a];
                      Array.isArray(t)
                        ? (e.isNextDisabled = 0 === t.length)
                        : "object" == typeof t && null !== t
                          ? (e.isNextDisabled = !1)
                          : (e.isNextDisabled = !0);
                    } else e.isNextDisabled = !1;
                  }
                } else
                  console.log("You are at the last step."),
                    (e.isNextDisabled = !0);
              }
            },
            previousStep: (e) => {
              if (e.currentStep) {
                let t =
                  e.selectionData.findIndex(
                    (t) => t.stepNo === e.currentStep.stepNo,
                  ) - 1;
                t >= 0
                  ? ((e.currentStep = e.selectionData[t]),
                    (e.isNextDisabled = !1))
                  : (console.log("You are at the first step."),
                    (e.isPrevDisabled = !0));
              }
            },
            isStepValid: (e, t) => {
              let { cartData: s } = t.payload,
                a = e.currentStep;
              if (a.stepNo < 5) {
                let t = s[a.step.toLowerCase()];
                if (a.stepNo < 4) e.isNextDisabled = void 0 === t;
                else {
                  var o;
                  e.isNextDisabled =
                    (null == (o = t[0]) ? void 0 : o.options.length) < 2;
                }
              }
            },
            toggleAutoNext: (e) => {
              e.autoNext = !e.autoNext;
            },
            toggleAutoMode: (e, t) => {
              var s;
              e.autoMode =
                !!(null == t || null == (s = t.payload) ? void 0 : s.allowed) &&
                !e.autoMode;
            },
          },
        }),
        {
          setSelectionData: o,
          setCurrentStep: l,
          gotoStep: i,
          nextStep: r,
          previousStep: n,
          setIsNextStepDisabled: p,
          isStepValid: d,
          toggleAutoNext: u,
          toggleAutoMode: c,
        } = a.actions,
        D = a.reducer;
    },
  },
]);
