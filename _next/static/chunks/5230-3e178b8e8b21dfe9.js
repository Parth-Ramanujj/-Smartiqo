"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5230],
  {
    23467: (e, o, l) => {
      l.d(o, { Vm: () => M, d$: () => d });
      let t = {
          "Touch Panel": {
            "2 Module": 500,
            "3 Module": 700,
            "4 Module": 650,
            "4 Module 1 Socket": 650,
            "6 Module": 850,
            "6 Module 1 Socket": 850,
            "6 Module 2 Socket": 850,
            "8 Module": 1200,
            "8 Module S": 1400,
            "8 Module 1 Socket": 1200,
            "8 Module 2 Socket": 1200,
            "12 Module": 1700,
            "12 Module 2 Socket H": 1700,
            "12 Module 2 Socket V": 1700,
            "16 Module": 1800,
            "18 Module": 2e3,
          },
          Edge: {
            "2 Module": 700,
            "3 Module": 0,
            "4 Module": 950,
            "4 Module 1 Socket": 950,
            "6 Module": 1250,
            "6 Module 1 Socket": 1250,
            "6 Module 2 Socket": 1250,
            "8 Module": 1740,
            "8 Module S": 0,
            "8 Module 1 Socket": 1740,
            "8 Module 2 Socket": 1740,
            "12 Module": 2500,
            "12 Module 2 Socket H": 2500,
            "12 Module 2 Socket V": 2500,
            "16 Module": 0,
            "18 Module": 0,
          },
          Color: {
            "2 Module": 700,
            "3 Module": 0,
            "4 Module": 950,
            "4 Module 1 Socket": 950,
            "6 Module": 1250,
            "6 Module 1 Socket": 1250,
            "6 Module 2 Socket": 1250,
            "8 Module": 1740,
            "8 Module S": 0,
            "8 Module 1 Socket": 1740,
            "8 Module 2 Socket": 1740,
            "12 Module": 2500,
            "12 Module 2 Socket H": 2500,
            "12 Module 2 Socket V": 2500,
            "16 Module": 0,
            "18 Module": 0,
          },
          "Royal Edge": {
            "2 Module": 750,
            "3 Module": 0,
            "4 Module": 1200,
            "4 Module 1 Socket": 1200,
            "6 Module": 1700,
            "6 Module 1 Socket": 1700,
            "6 Module 2 Socket": 1700,
            "8 Module": 2390,
            "8 Module S": 0,
            "8 Module 1 Socket": 2390,
            "8 Module 2 Socket": 2390,
            "12 Module": 3350,
            "12 Module 2 Socket H": 3350,
            "12 Module 2 Socket V": 3350,
            "16 Module": 0,
            "18 Module": 0,
          },
        },
        u = {
          "2 Module": 520,
          "4 Module": 700,
          "6 Module": 900,
          "8 Module": 1e3,
          "8 Module S": 0,
          "12 Module": 1500,
          "4 Module 1 Socket": 800,
          "6 Module 1 Socket": 1e3,
          "6 Module 2 Socket": 1100,
          "8 Module 1 Socket": 1100,
          "8 Module 2 Socket": 1200,
          "12 Module 2 Socket H": 1700,
          "12 Module 2 Socket V": 1700,
          "3 Module": 0,
          "16 Module": 0,
          "18 Module": 0,
        },
        d = (() => {
          let e = {};
          for (let o of Object.keys(t))
            e[o] = {
              Acrylic: { ...t[o] },
              Glass: Object.fromEntries(
                Object.entries(t[o]).map((e) => {
                  let [o, l] = e;
                  return [o, l + (u[o] || 0)];
                }),
              ),
            };
          return e;
        })(),
        M = {
          panelListPrices: d,
          semiFinishedPrices: {
            "2 Switch": 2200,
            "4 Switch": 3350,
            "6 Switch": 4400,
            "2 Switch 1 HV": 2300,
            "2 HV": 2600,
            "2 TW": 2200,
            "4 TW": 4550,
            "6 TW": 5150,
            "6 HV": 5150,
            "8 Switch": 5450,
            "8 TW": 5750,
            "10 Switch": 6500,
            "4 Switch + 1 Fan": 4850,
            "4 Switch + 2 Fan": 6350,
            "6 Switch + 1 Fan": 6e3,
            "6 Switch + 2 Fan": 7400,
            "8 Switch + 1 Fan": 7200,
            "4 Switch (2-Module) Color": 3855,
            "4 Switch (4-Module) Color": 4355,
            "2 TW Color": 2860,
            "4 TW Color": 5915,
            "6 TW Color": 6695,
            "6 HV Color": 6695,
            "8 TW Color": 7475,
            "2 Dimmer": 3e3,
            "4 Scene Controller": 2400,
            "Door Bell": 1100,
            Bell: 1100,
            Curtain: 2300,
            "2 Curtain": 3e3,
            "2 Switch 1 HV Color": 2990,
            "2 HV Color": 3380,
            "2 Switch Color": 2860,
            "4 Switch Color": 4355,
            "4 HV": 4550,
            "4 HV Color": 5915,
            "4 Switch (2-Module)": 3e3,
            "4 Switch (4-Module)": 3350,
            "6 Switch Color": 5720,
            "6 Switch + 2 Fan Color": 9700,
            "8 Switch Color": 7085,
            "10 Switch Color": 8484,
            "4 Switch + 1 Fan Color": 6305,
            "4 Switch + 2 Fan Color": 8200,
            "6 Switch + 1 Fan Color": 7800,
            "8 Switch + 1 Fan Color": 9295,
            "2 Dimmer Color": 4500,
            "4 Scene Controller Color": 3605,
            "Door Bell Color": 1800,
            "Bell Color": 1800,
            "Curtain Color": 2990,
            "2 Curtain Color": 3800,
          },
          rawMaterialBase: {
            "3 Pin Socket": 0,
            "Universal Socket": 0,
            "16A Socket": 400,
            "USB-Type C": 1800,
            "Telephone (RJ11)": 398,
            "Ethernet (RJ45)": 900,
            "TV Socket": 380,
          },
          rawMaterialUplift: {
            "Touch Panel": 200,
            Edge: 200,
            Color: 200,
            "Royal Edge": 300,
          },
          firmwareUnitPrice: { "Remote Based": 0, Tuya: 1700, Zigbee: 3e3 },
          royalEdgeExtraFrame: {
            "2 Module": 800,
            "4 Module": 1200,
            "4 Module 1 Socket": 1200,
            "6 Module": 1600,
            "6 Module 1 Socket": 1600,
            "6 Module 2 Socket": 1600,
            "8 Module": 2e3,
            "8 Module 1 Socket": 2e3,
            "8 Module 2 Socket": 2e3,
            "12 Module": 2400,
            "12 Module 2 Socket V": 2400,
            "12 Module 2 Socket H": 2400,
          },
        };
    },
    65230: (e, o, l) => {
      l.d(o, { Ci: () => d, eL: () => r, kQ: () => c });
      var t = l(23467);
      function u(e) {
        return !!e && "object" == typeof e && !Array.isArray(e);
      }
      function d(e, o) {
        let l = null != o ? o : t.Vm;
        if (!u(l)) throw Error("Pricing defaults are not available.");
        return (function e(o, l) {
          if (!u(l)) return o;
          for (let [t, d] of Object.entries(l))
            u(d) && u(o[t]) ? (o[t] = e(o[t], d)) : (o[t] = d);
          return o;
        })(
          (function (e) {
            let o = JSON.stringify(e);
            return void 0 === o ? e : JSON.parse(o);
          })(l),
          e,
        );
      }
      let M = d({});
      function c(e) {
        return (M = d(e));
      }
      function r() {
        return M;
      }
    },
  },
]);
