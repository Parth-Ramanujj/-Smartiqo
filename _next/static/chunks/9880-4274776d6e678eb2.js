"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9880],
  {
    49880: (i, e, o) => {
      o.d(e, { KZ: () => c, Zw: () => r, sR: () => d });
      let r = [],
        d = [
          {
            stepNo: 1,
            step: "Panel",
            description: "Create your own panel",
            options: [
              { "Panel 0": "Touch Panel", id: "0", price: 0, noFrame: !0 },
              { "Panel 1": "Edge", id: "1", price: 0 },
              { "Panel 2": "Color", id: "2", price: 0 },
            ],
          },
          {
            stepNo: 2,
            step: "Material",
            description: "Material",
            options: [
              { "Material 1": "Glass", id: "5", price: 0 },
              { "Material 2": "Acrylic", id: "6", price: 0 },
            ],
          },
          {
            stepNo: 3,
            step: "Size",
            description: "Size",
            options: [
              { "Size 1": "2 Module", id: "7", price: 100 },
              { "Size 2": "3 Module", id: "30", price: 150 },
              { "Size 3": "4 Module", id: "8", price: 100 },
              { "Size 4": "6 Module", id: "9", price: 100 },
              { "Size 7": "12 Module", id: "11", price: 100 },
              { "Size 6": "16 Module", id: "12", price: 150 },
              { "Size 9": "18 Module", id: "18", price: 140 },
              { "Size 6": "8 Module S", id: "32", price: 400 },
              { "Size 5": "8 Module", id: "10", price: 400 },
            ],
          },
          {
            stepNo: 4,
            step: "Accessories",
            description: "Accessories",
            optionTypes: [
              "1 Modular",
              "2 Modular",
              "4 Modular",
              "6 Modular",
              "8 Modular",
            ],
            optionsData: [
              {
                optionType: "1 Modular",
                options: [
                  { "1 Modular": "Telephone (RJ11)", id: "t1", price: 0 },
                  { "1 Modular": "Ethernet (RJ45)", id: "t2", price: 0 },
                  { "1 Modular": "TV Socket", id: "t3", price: 0 },
                ],
              },
              {
                optionType: "2 Modular",
                options: [
                  { "2 Modular": "2 Switch", id: "12", price: 2200 },
                  { "2 Modular": "2 Switch 1 HV", id: "13", price: 100 },
                  { "2 Modular": "2 TW", id: "14", price: 2200 },
                  { "2 Modular": "2 HV", id: "15", price: 100 },
                  { "2 Modular": "Bell", id: "16", price: 1100 },
                  { "2 Modular": "Curtain", id: "17", price: 2300 },
                  { "2 Modular": "3 Pin Socket", id: "18", price: 100 },
                  {
                    "2 Modular": "Universal Socket",
                    id: "universal-socket",
                    price: 100,
                  },
                  { "2 Modular": "16A Socket", id: "16a", price: 100 },
                  { "2 Modular": "2 Dimmer(Phase Cut)", id: "19", price: 3e3 },
                  { "2 Modular": "4 Scene Controller", id: "20", price: 2400 },
                  {
                    "2 Modular": "4 Switch (2-Module)",
                    id: "4-Switch-2mod",
                    price: 3350,
                  },
                  { "2 Modular": "2 Curtain", id: "17a", price: 3e3 },
                  { "2 Modular": "USB-Type C", id: "2usbc", price: 0 },
                ],
              },
              {
                optionType: "4 Modular",
                options: [
                  { "4 Modular": "4 Switch (4-Module)", id: "21", price: 3350 },
                  { "4 Modular": "4 Switch + 1 Fan", id: "22", price: 4850 },
                  { "4 Modular": "4 HV", id: "4-switch-4hv", price: 4550 },
                  { "4 Modular": "6 Switch", id: "23", price: 4400 },
                  { "4 Modular": "6 HV", id: "6-switch-6hv", price: 5150 },
                  { "4 Modular": "4 TW", id: "4-switch-1-2way", price: 4550 },
                  { "4 Modular": "6 TW", id: "6-switch-1-2way", price: 4400 },
                ],
              },
              {
                optionType: "6 Modular",
                options: [
                  { "6 Modular": "8 Switch", id: "24", price: 5450 },
                  { "6 Modular": "8 TW", id: "8-switch-1-2way", price: 5450 },
                  { "6 Modular": "6 Switch + 1 Fan", id: "25", price: 6e3 },
                  { "6 Modular": "4 Switch + 2 Fan", id: "26", price: 6300 },
                ],
              },
              {
                optionType: "8 Modular",
                options: [
                  { "8 Modular": "10 Switch", id: "27", price: 6500 },
                  { "8 Modular": "6 Switch + 2 Fan", id: "28", price: 7400 },
                  { "8 Modular": "8 Switch + 1 Fan", id: "34", price: 7200 },
                ],
              },
            ],
          },
          {
            stepNo: 5,
            step: "Icons",
            description: "Icons",
            optionTypes: [],
            optionsData: [],
          },
          {
            stepNo: 6,
            step: "Color",
            description: "Color",
            optionTypes: ["Material Color", "Frame Color"],
            optionsData: [
              {
                optionType: "Material Color",
                options: [
                  {
                    "Material Color": "Black",
                    color: "#000000",
                    id: "900",
                    price: 0,
                  },
                  {
                    "Material Color": "White",
                    color: "#FFFFFF",
                    id: "901",
                    price: 0,
                  },
                  {
                    "Material Color": "Grey",
                    color: "#a8a8a8",
                    id: "902",
                    price: 0,
                  },
                  {
                    "Material Color": "Royal Blue",
                    color: "#4b4c8c",
                    id: "903",
                    price: 0,
                  },
                  {
                    "Material Color": "Gold",
                    color: "#c4ac7c",
                    id: "904",
                    price: 0,
                  },
                  {
                    "Material Color": "Light Gray",
                    color: "#d3d3d3",
                    id: "905",
                    price: 0,
                  },
                ],
              },
              {
                optionType: "Frame Color",
                options: [
                  {
                    "Frame Color": "Black",
                    color: "#000000",
                    id: "951",
                    price: 0,
                  },
                  {
                    "Frame Color": "Grey",
                    color: "#5b5858",
                    id: "953",
                    price: 0,
                  },
                  {
                    "Frame Color": "Silver",
                    color: "#dddddd",
                    id: "954",
                    price: 0,
                  },
                  {
                    "Frame Color": "Gold",
                    color: "#e2b144",
                    id: "955",
                    price: 0,
                  },
                  {
                    "Frame Color": "Rose Gold",
                    color: "#b76e79",
                    id: "956",
                    price: 0,
                  },
                  {
                    "Frame Color": "Chrome",
                    color: "#d8dbde",
                    id: "957",
                    price: 0,
                  },
                ],
              },
            ],
          },
          {
            stepNo: 7,
            step: "Technology",
            description: "Select Technology",
            options: [
              { label: "Remote Based", id: "tech1", price: 0 },
              { label: "Wi-Fi", id: "tech2", price: 850 },
              { label: "Zigbee", id: "tech3", price: 1e3 },
            ].map((i) => ({ Technology: i.label, id: i.id, price: i.price })),
          },
          { stepNo: 8, step: "Cart", description: "Your Cart" },
        ];
      function c(i, e) {
        return d.slice();
      }
    },
  },
]);
