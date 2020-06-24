function computeP(x, slope = 0.97, intercept = 0.084) {
  return 1 / (1 + Math.exp(slope * (x + intercept)));
}

function computeDescription(p, imgw) {
  descriptions = [
    ["NIE", "FAŁSZYWE TAK"],
    ["FAŁSZYWE NIE", "TAK"],
  ];

  function verification(p, observ) {
    //default is "TAK, owszem, przymrozka nie ma"
    probabilityIndex = 0;
    verifIndex = 0;

    if (p > 0.1) {
      probabilityIndex = 1;
    }
    if (observ < 0) {
      verifIndex = 1;
    }
    return [verifIndex, probabilityIndex];
  }

  [verifIndex, probabilityIndex] = verification(p, imgw);
  console.log("verifindex is", verifIndex, "probIndex is", probabilityIndex);

  return descriptions[verifIndex][probabilityIndex];
}

function computeEffectiveness(umimgw) {
  let dane = umimgw.map((r) => ({
    um: r.value_um,
    imgw: r.value_imgw,
    p: computeP(Number(r.value_um)),
    status: computeDescription(computeP(r.value_um), r.value_imgw),
  }));

  console.log("Dane są następujące", dane);

  let yes = dane.filter((i) => i.status === "TAK").length;
  let no = dane.filter((i) => i.status === "NIE").length;
  let false_yes = dane.filter((i) => i.status === "FAŁSZYWE TAK").length;
  let false_no = dane.filter((i) => i.status === "FAŁSZYWE NIE").length;

  let effectiveness = [
    { status: "TAK", num: yes },
    { status: "NIE", num: no },
    { status: "FAŁSZYWE TAK", num: false_yes },
    { status: "FAŁSZYWE NIE", num: false_no },
  ];

  console.log(effectiveness);

  return effectiveness;
}

let forecast = [
  /* 1 */
  {
    value_imgw: -0.13,
    value_um: -3.4,
    date_imgw_str: "2019-03-02T06:00:00.000Z",
    forecast_duration: 6,
    category: "forecast_03_02",
  },

  /* 2 */
  {
    value_imgw: 0.203,
    value_um: -3.025,
    date_imgw_str: "2019-03-02T07:00:00.000Z",
    forecast_duration: 7,
    category: "forecast_03_02",
  },

  /* 3 */
  {
    value_imgw: 0.993,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T08:00:00.000Z",
    forecast_duration: 8,
    category: "forecast_03_02",
  },

  /* 4 */
  {
    value_imgw: 1.452,
    value_um: -2.025,
    date_imgw_str: "2019-03-02T09:00:00.000Z",
    forecast_duration: 9,
    category: "forecast_03_02",
  },

  /* 5 */
  {
    value_imgw: 2.239,
    value_um: -1.4,
    date_imgw_str: "2019-03-02T10:00:00.000Z",
    forecast_duration: 10,
    category: "forecast_03_02",
  },

  /* 6 */
  {
    value_imgw: 2.821,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T11:00:00.000Z",
    forecast_duration: 11,
    category: "forecast_03_02",
  },

  /* 7 */
  {
    value_imgw: 3.27,
    value_um: -0.9,
    date_imgw_str: "2019-03-02T12:00:00.000Z",
    forecast_duration: 12,
    category: "forecast_03_02",
  },

  /* 8 */
  {
    value_imgw: 3.686,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T13:00:00.000Z",
    forecast_duration: 13,
    category: "forecast_03_02",
  },

  /* 9 */
  {
    value_imgw: 3.913,
    value_um: -0.65,
    date_imgw_str: "2019-03-02T14:00:00.000Z",
    forecast_duration: 14,
    category: "forecast_03_02",
  },

  /* 10 */
  {
    value_imgw: 3.959,
    value_um: -1.275,
    date_imgw_str: "2019-03-02T15:00:00.000Z",
    forecast_duration: 15,
    category: "forecast_03_02",
  },

  /* 11 */
  {
    value_imgw: 3.658,
    value_um: -1.525,
    date_imgw_str: "2019-03-02T16:00:00.000Z",
    forecast_duration: 16,
    category: "forecast_03_02",
  },

  /* 12 */
  {
    value_imgw: 3.258,
    value_um: -1.775,
    date_imgw_str: "2019-03-02T17:00:00.000Z",
    forecast_duration: 17,
    category: "forecast_03_02",
  },

  /* 13 */
  {
    value_imgw: 3.015,
    value_um: -1.9,
    date_imgw_str: "2019-03-02T18:00:00.000Z",
    forecast_duration: 18,
    category: "forecast_03_02",
  },

  /* 14 */
  {
    value_imgw: 3.052,
    value_um: -2.4,
    date_imgw_str: "2019-03-02T19:00:00.000Z",
    forecast_duration: 19,
    category: "forecast_03_02",
  },

  /* 15 */
  {
    value_imgw: 3.014,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T20:00:00.000Z",
    forecast_duration: 20,
    category: "forecast_03_02",
  },

  /* 16 */
  {
    value_imgw: 2.866,
    value_um: -2.65,
    date_imgw_str: "2019-03-02T21:00:00.000Z",
    forecast_duration: 21,
    category: "forecast_03_02",
  },

  /* 17 */
  {
    value_imgw: 2.828,
    value_um: -2.65,
    date_imgw_str: "2019-03-02T22:00:00.000Z",
    forecast_duration: 22,
    category: "forecast_03_02",
  },

  /* 18 */
  {
    value_imgw: 3.055,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T23:00:00.000Z",
    forecast_duration: 23,
    category: "forecast_03_02",
  },

  /* 19 */
  {
    value_imgw: 3.253,
    value_um: -2.4,
    date_imgw_str: "2019-03-03T00:00:00.000Z",
    forecast_duration: 24,
    category: "forecast_03_02",
  },

  /* 20 */
  {
    value_imgw: 3.219,
    value_um: -2.025,
    date_imgw_str: "2019-03-03T01:00:00.000Z",
    forecast_duration: 25,
    category: "forecast_03_02",
  },

  /* 21 */
  {
    value_imgw: 2.683,
    value_um: -1.65,
    date_imgw_str: "2019-03-03T02:00:00.000Z",
    forecast_duration: 26,
    category: "forecast_03_02",
  },

  /* 22 */
  {
    value_imgw: 3.431,
    value_um: -1.525,
    date_imgw_str: "2019-03-03T03:00:00.000Z",
    forecast_duration: 27,
    category: "forecast_03_02",
  },

  /* 23 */
  {
    value_imgw: 3.711,
    value_um: -1.025,
    date_imgw_str: "2019-03-03T04:00:00.000Z",
    forecast_duration: 28,
    category: "forecast_03_02",
  },

  /* 24 */
  {
    value_imgw: 4.82,
    value_um: -0.65,
    date_imgw_str: "2019-03-03T05:00:00.000Z",
    forecast_duration: 29,
    category: "forecast_03_02",
  },

  /* 25 */
  {
    value_imgw: 5.2,
    value_um: -0.275,
    date_imgw_str: "2019-03-03T06:00:00.000Z",
    forecast_duration: 30,
    category: "forecast_03_02",
  },

  /* 1 */
  {
    value_imgw: -0.13,
    value_um: -3.275,
    date_imgw_str: "2019-03-02T06:00:00.000Z",
    forecast_duration: 30,
    category: "forecast_03_01",
  },

  /* 2 */
  {
    value_imgw: 0.203,
    value_um: -3.15,
    date_imgw_str: "2019-03-02T07:00:00.000Z",
    forecast_duration: 31,
    category: "forecast_03_01",
  },

  /* 3 */
  {
    value_imgw: 0.993,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T08:00:00.000Z",
    forecast_duration: 32,
    category: "forecast_03_01",
  },

  /* 4 */
  {
    value_imgw: 1.452,
    value_um: -2.15,
    date_imgw_str: "2019-03-02T09:00:00.000Z",
    forecast_duration: 33,
    category: "forecast_03_01",
  },

  /* 5 */
  {
    value_imgw: 2.239,
    value_um: -1.4,
    date_imgw_str: "2019-03-02T10:00:00.000Z",
    forecast_duration: 34,
    category: "forecast_03_01",
  },

  /* 6 */
  {
    value_imgw: 2.821,
    value_um: -0.9,
    date_imgw_str: "2019-03-02T11:00:00.000Z",
    forecast_duration: 35,
    category: "forecast_03_01",
  },

  /* 7 */
  {
    value_imgw: 3.27,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T12:00:00.000Z",
    forecast_duration: 36,
    category: "forecast_03_01",
  },

  /* 8 */
  {
    value_imgw: 3.686,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T13:00:00.000Z",
    forecast_duration: 37,
    category: "forecast_03_01",
  },

  /* 9 */
  {
    value_imgw: 3.913,
    value_um: -0.9,
    date_imgw_str: "2019-03-02T14:00:00.000Z",
    forecast_duration: 38,
    category: "forecast_03_01",
  },

  /* 10 */
  {
    value_imgw: 3.959,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T15:00:00.000Z",
    forecast_duration: 39,
    category: "forecast_03_01",
  },

  /* 11 */
  {
    value_imgw: 3.658,
    value_um: -1.65,
    date_imgw_str: "2019-03-02T16:00:00.000Z",
    forecast_duration: 40,
    category: "forecast_03_01",
  },

  /* 12 */
  {
    value_imgw: 3.258,
    value_um: -1.775,
    date_imgw_str: "2019-03-02T17:00:00.000Z",
    forecast_duration: 41,
    category: "forecast_03_01",
  },

  /* 13 */
  {
    value_imgw: 3.015,
    value_um: -2.15,
    date_imgw_str: "2019-03-02T18:00:00.000Z",
    forecast_duration: 42,
    category: "forecast_03_01",
  },

  /* 14 */
  {
    value_imgw: 3.052,
    value_um: -2.275,
    date_imgw_str: "2019-03-02T19:00:00.000Z",
    forecast_duration: 43,
    category: "forecast_03_01",
  },

  /* 15 */
  {
    value_imgw: 3.014,
    value_um: -2.15,
    date_imgw_str: "2019-03-02T20:00:00.000Z",
    forecast_duration: 44,
    category: "forecast_03_01",
  },

  /* 16 */
  {
    value_imgw: 2.866,
    value_um: -1.9,
    date_imgw_str: "2019-03-02T21:00:00.000Z",
    forecast_duration: 45,
    category: "forecast_03_01",
  },

  /* 17 */
  {
    value_imgw: 2.828,
    value_um: -1.275,
    date_imgw_str: "2019-03-02T22:00:00.000Z",
    forecast_duration: 46,
    category: "forecast_03_01",
  },

  /* 18 */
  {
    value_imgw: 3.055,
    value_um: -1.15,
    date_imgw_str: "2019-03-02T23:00:00.000Z",
    forecast_duration: 47,
    category: "forecast_03_01",
  },

  /* 19 */
  {
    value_imgw: 3.253,
    value_um: -1.275,
    date_imgw_str: "2019-03-03T00:00:00.000Z",
    forecast_duration: 48,
    category: "forecast_03_01",
  },

  /* 20 */
  {
    value_imgw: 3.219,
    value_um: -0.9,
    date_imgw_str: "2019-03-03T01:00:00.000Z",
    forecast_duration: 49,
    category: "forecast_03_01",
  },

  /* 21 */
  {
    value_imgw: 2.683,
    value_um: -0.775,
    date_imgw_str: "2019-03-03T02:00:00.000Z",
    forecast_duration: 50,
    category: "forecast_03_01",
  },

  /* 22 */
  {
    value_imgw: 3.431,
    value_um: -0.525,
    date_imgw_str: "2019-03-03T03:00:00.000Z",
    forecast_duration: 51,
    category: "forecast_03_01",
  },

  /* 23 */
  {
    value_imgw: 3.711,
    value_um: -0.275,
    date_imgw_str: "2019-03-03T04:00:00.000Z",
    forecast_duration: 52,
    category: "forecast_03_01",
  },

  /* 24 */
  {
    value_imgw: 4.82,
    value_um: 0.1,
    date_imgw_str: "2019-03-03T05:00:00.000Z",
    forecast_duration: 53,
    category: "forecast_03_01",
  },

  /* 25 */
  {
    value_imgw: 5.2,
    value_um: 0.475,
    date_imgw_str: "2019-03-03T06:00:00.000Z",
    forecast_duration: 54,
    category: "forecast_03_01",
  },
];

let diagonal = forecast.map((v) => ({
  value_imgw: v.value_imgw,
  value_um: v.value_imgw,
  category: "diagonal",
}));

let chart = new Taucharts.Chart({
  guide: {
    color: {
      brewer: {
        diagonal: "rgb(220, 220, 220)",
        forecast_03_01: "rgb(200, 90, 90)",
        forecast_03_02: "rgb(250, 0, 0)",
      },
    },
  },
  type: "scatterplot",
  data: forecast.concat(diagonal),
  x: "value_um",
  y: "value_imgw",
  color: "category",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart.renderTo("#taucharts_chart");

let chart2 = new Taucharts.Chart({
  type: "bar",
  data: computeEffectiveness(forecast),
  x: "status",
  y: "num",
  color: "status",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart2.renderTo("#taucharts_chart2");
