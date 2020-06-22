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

function computeEffectivenessPercentage(umimgw) {
  let dane = umimgw.map((r) => ({
    um: r.value_um,
    imgw: r.value_imgw,
    p: computeP(Number(r.value_um)),
    status: computeDescription(computeP(r.value_um), r.value_imgw),
  }));

  let data_length = dane.length;

  console.log("Dane są następujące", dane);

  let yes = dane.filter((i) => i.status === "TAK").length;
  let no = dane.filter((i) => i.status === "NIE").length;
  let false_yes = dane.filter((i) => i.status === "FAŁSZYWE TAK").length;
  let false_no = dane.filter((i) => i.status === "FAŁSZYWE NIE").length;

  let normalized_effectiveness = [
    { status: "TAK", num: yes / data_length },
    { status: "NIE", num: no / data_length },
    { status: "FAŁSZYWE TAK", num: false_yes / data_length },
    { status: "FAŁSZYWE NIE", num: false_no / data_length },
  ];

  console.log(normalized_effectiveness);

  return normalized_effectiveness;
}

let forecast = [
  /* 1 */
  {
    value_imgw: 1.911,
    value_um: 3.725,
    date_imgw_str: "2019-04-14T00:00:00.000Z",
    forecast_duration: 0,
  },

  /* 2 */
  {
    value_imgw: 1.872,
    value_um: 3.475,
    date_imgw_str: "2019-04-14T01:00:00.000Z",
    forecast_duration: 1,
  },

  /* 3 */
  {
    value_imgw: 1.955,
    value_um: 3.1,
    date_imgw_str: "2019-04-14T02:00:00.000Z",
    forecast_duration: 2,
  },

  /* 4 */
  {
    value_imgw: 1.922,
    value_um: 2.725,
    date_imgw_str: "2019-04-14T03:00:00.000Z",
    forecast_duration: 3,
  },

  /* 5 */
  {
    value_imgw: 1.943,
    value_um: 2.475,
    date_imgw_str: "2019-04-14T04:00:00.000Z",
    forecast_duration: 4,
  },

  /* 6 */
  {
    value_imgw: 1.966,
    value_um: 2.725,
    date_imgw_str: "2019-04-14T05:00:00.000Z",
    forecast_duration: 5,
  },

  /* 7 */
  {
    value_imgw: 2.949,
    value_um: 3.85,
    date_imgw_str: "2019-04-14T06:00:00.000Z",
    forecast_duration: 6,
  },

  /* 8 */
  {
    value_imgw: 4.091,
    value_um: 5.35,
    date_imgw_str: "2019-04-14T07:00:00.000Z",
    forecast_duration: 7,
  },

  /* 9 */
  {
    value_imgw: 5.667,
    value_um: 6.975,
    date_imgw_str: "2019-04-14T08:00:00.000Z",
    forecast_duration: 8,
  },

  /* 10 */
  {
    value_imgw: 6.725,
    value_um: 8.475,
    date_imgw_str: "2019-04-14T09:00:00.000Z",
    forecast_duration: 9,
  },

  /* 11 */
  {
    value_imgw: 8.208,
    value_um: 9.1,
    date_imgw_str: "2019-04-14T10:00:00.000Z",
    forecast_duration: 10,
  },

  /* 12 */
  {
    value_imgw: 10.249,
    value_um: 9.6,
    date_imgw_str: "2019-04-14T11:00:00.000Z",
    forecast_duration: 11,
  },

  /* 13 */
  {
    value_imgw: 11.071,
    value_um: 10.225,
    date_imgw_str: "2019-04-14T12:00:00.000Z",
    forecast_duration: 12,
  },

  /* 14 */
  {
    value_imgw: 11.792,
    value_um: 10.6,
    date_imgw_str: "2019-04-14T13:00:00.000Z",
    forecast_duration: 13,
  },

  /* 15 */
  {
    value_imgw: 13.089,
    value_um: 10.725,
    date_imgw_str: "2019-04-14T14:00:00.000Z",
    forecast_duration: 14,
  },

  /* 16 */
  {
    value_imgw: 12.817,
    value_um: 10.475,
    date_imgw_str: "2019-04-14T15:00:00.000Z",
    forecast_duration: 15,
  },

  /* 17 */
  {
    value_imgw: 12.553,
    value_um: 9.975,
    date_imgw_str: "2019-04-14T16:00:00.000Z",
    forecast_duration: 16,
  },

  /* 18 */
  {
    value_imgw: 11.801,
    value_um: 8.35,
    date_imgw_str: "2019-04-14T17:00:00.000Z",
    forecast_duration: 17,
  },

  /* 19 */
  {
    value_imgw: 10.448,
    value_um: 6.6,
    date_imgw_str: "2019-04-14T18:00:00.000Z",
    forecast_duration: 18,
  },

  /* 20 */
  {
    value_imgw: 9.096,
    value_um: 5.725,
    date_imgw_str: "2019-04-14T19:00:00.000Z",
    forecast_duration: 19,
  },

  /* 21 */
  {
    value_imgw: 7.861,
    value_um: 4.475,
    date_imgw_str: "2019-04-14T20:00:00.000Z",
    forecast_duration: 20,
  },

  /* 22 */
  {
    value_imgw: 7.029,
    value_um: 4.225,
    date_imgw_str: "2019-04-14T21:00:00.000Z",
    forecast_duration: 21,
  },

  /* 23 */
  {
    value_imgw: 5.609,
    value_um: 3.725,
    date_imgw_str: "2019-04-14T22:00:00.000Z",
    forecast_duration: 22,
  },

  /* 24 */
  {
    value_imgw: 4.859,
    value_um: 3.1,
    date_imgw_str: "2019-04-14T23:00:00.000Z",
    forecast_duration: 23,
  },

  /* 25 */
  {
    value_imgw: 4.128,
    value_um: 2.475,
    date_imgw_str: "2019-04-15T00:00:00.000Z",
    forecast_duration: 24,
  },

  /* 26 */
  {
    value_imgw: 3.502,
    value_um: 1.6,
    date_imgw_str: "2019-04-15T01:00:00.000Z",
    forecast_duration: 25,
  },

  /* 27 */
  {
    value_imgw: 2.341,
    value_um: 1.1,
    date_imgw_str: "2019-04-15T02:00:00.000Z",
    forecast_duration: 26,
  },

  /* 28 */
  {
    value_imgw: 2.124,
    value_um: 0.725,
    date_imgw_str: "2019-04-15T03:00:00.000Z",
    forecast_duration: 27,
  },

  /* 29 */
  {
    value_imgw: 0.358,
    value_um: 0.225,
    date_imgw_str: "2019-04-15T04:00:00.000Z",
    forecast_duration: 28,
  },

  /* 30 */
  {
    value_imgw: 1.165,
    value_um: 1.475,
    date_imgw_str: "2019-04-15T05:00:00.000Z",
    forecast_duration: 29,
  },

  /* 31 */
  {
    value_imgw: 2.685,
    value_um: 3.35,
    date_imgw_str: "2019-04-15T06:00:00.000Z",
    forecast_duration: 30,
  },

  /* 32 */
  {
    value_imgw: 5.867,
    value_um: 4.85,
    date_imgw_str: "2019-04-15T07:00:00.000Z",
    forecast_duration: 31,
  },

  /* 33 */
  {
    value_imgw: 7.468,
    value_um: 6.225,
    date_imgw_str: "2019-04-15T08:00:00.000Z",
    forecast_duration: 32,
  },

  /* 34 */
  {
    value_imgw: 9.291,
    value_um: 6.6,
    date_imgw_str: "2019-04-15T09:00:00.000Z",
    forecast_duration: 33,
  },

  /* 35 */
  {
    value_imgw: 10.286,
    value_um: 7.1,
    date_imgw_str: "2019-04-15T10:00:00.000Z",
    forecast_duration: 34,
  },

  /* 36 */
  {
    value_imgw: 10.787,
    value_um: 7.6,
    date_imgw_str: "2019-04-15T11:00:00.000Z",
    forecast_duration: 35,
  },

  /* 37 */
  {
    value_imgw: 11.444,
    value_um: 7.975,
    date_imgw_str: "2019-04-15T12:00:00.000Z",
    forecast_duration: 36,
  },

  /* 38 */
  {
    value_imgw: 12.007,
    value_um: 8.35,
    date_imgw_str: "2019-04-15T13:00:00.000Z",
    forecast_duration: 37,
  },

  /* 39 */
  {
    value_imgw: 12.344,
    value_um: 8.35,
    date_imgw_str: "2019-04-15T14:00:00.000Z",
    forecast_duration: 38,
  },

  /* 40 */
  {
    value_imgw: 12.031,
    value_um: 8.225,
    date_imgw_str: "2019-04-15T15:00:00.000Z",
    forecast_duration: 39,
  },

  /* 41 */
  {
    value_imgw: 11.542,
    value_um: 7.975,
    date_imgw_str: "2019-04-15T16:00:00.000Z",
    forecast_duration: 40,
  },

  /* 42 */
  {
    value_imgw: 10.683,
    value_um: 6.85,
    date_imgw_str: "2019-04-15T17:00:00.000Z",
    forecast_duration: 41,
  },

  /* 43 */
  {
    value_imgw: 8.898,
    value_um: 5.85,
    date_imgw_str: "2019-04-15T18:00:00.000Z",
    forecast_duration: 42,
  },

  /* 44 */
  {
    value_imgw: 7.229,
    value_um: 5.475,
    date_imgw_str: "2019-04-15T19:00:00.000Z",
    forecast_duration: 43,
  },

  /* 45 */
  {
    value_imgw: 6.087,
    value_um: 5.1,
    date_imgw_str: "2019-04-15T20:00:00.000Z",
    forecast_duration: 44,
  },

  /* 46 */
  {
    value_imgw: 3.024,
    value_um: 4.6,
    date_imgw_str: "2019-04-15T21:00:00.000Z",
    forecast_duration: 45,
  },

  /* 47 */
  {
    value_imgw: 2.92,
    value_um: 3.725,
    date_imgw_str: "2019-04-15T22:00:00.000Z",
    forecast_duration: 46,
  },

  /* 48 */
  {
    value_imgw: 0.344,
    value_um: 2.475,
    date_imgw_str: "2019-04-15T23:00:00.000Z",
    forecast_duration: 47,
  },

  /* 49 */
  {
    value_imgw: -0.182,
    value_um: 1.475,
    date_imgw_str: "2019-04-16T00:00:00.000Z",
    forecast_duration: 48,
  },

  /* 50 */
  {
    value_imgw: -0.903,
    value_um: 0.6,
    date_imgw_str: "2019-04-16T01:00:00.000Z",
    forecast_duration: 49,
  },

  /* 51 */
  {
    value_imgw: -1.985,
    value_um: -0.025,
    date_imgw_str: "2019-04-16T02:00:00.000Z",
    forecast_duration: 50,
  },

  /* 52 */
  {
    value_imgw: -1.984,
    value_um: -0.525,
    date_imgw_str: "2019-04-16T03:00:00.000Z",
    forecast_duration: 51,
  },

  /* 53 */
  {
    value_imgw: -2.651,
    value_um: -0.9,
    date_imgw_str: "2019-04-16T04:00:00.000Z",
    forecast_duration: 52,
  },

  /* 54 */
  {
    value_imgw: -1.432,
    value_um: 0.35,
    date_imgw_str: "2019-04-16T05:00:00.000Z",
    forecast_duration: 53,
  },

  /* 55 */
  {
    value_imgw: 1.721,
    value_um: 2.35,
    date_imgw_str: "2019-04-16T06:00:00.000Z",
    forecast_duration: 54,
  },

  /* 56 */
  {
    value_imgw: 5.145,
    value_um: 4.35,
    date_imgw_str: "2019-04-16T07:00:00.000Z",
    forecast_duration: 55,
  },

  /* 57 */
  {
    value_imgw: 9.449,
    value_um: 5.475,
    date_imgw_str: "2019-04-16T08:00:00.000Z",
    forecast_duration: 56,
  },

  /* 58 */
  {
    value_imgw: 10.368,
    value_um: 6.475,
    date_imgw_str: "2019-04-16T09:00:00.000Z",
    forecast_duration: 57,
  },

  /* 59 */
  {
    value_imgw: 11.219,
    value_um: 7.225,
    date_imgw_str: "2019-04-16T10:00:00.000Z",
    forecast_duration: 58,
  },

  /* 60 */
  {
    value_imgw: 12.585,
    value_um: 8.1,
    date_imgw_str: "2019-04-16T11:00:00.000Z",
    forecast_duration: 59,
  },

  /* 61 */
  {
    value_imgw: 13.45,
    value_um: 8.975,
    date_imgw_str: "2019-04-16T12:00:00.000Z",
    forecast_duration: 60,
  },

  /* 62 */
  {
    value_imgw: 13.665,
    value_um: 9.85,
    date_imgw_str: "2019-04-16T13:00:00.000Z",
    forecast_duration: 61,
  },

  /* 63 */
  {
    value_imgw: 14.236,
    value_um: 10.35,
    date_imgw_str: "2019-04-16T14:00:00.000Z",
    forecast_duration: 62,
  },

  /* 64 */
  {
    value_imgw: 14.301,
    value_um: 10.35,
    date_imgw_str: "2019-04-16T15:00:00.000Z",
    forecast_duration: 63,
  },

  /* 65 */
  {
    value_imgw: 14.02,
    value_um: 9.225,
    date_imgw_str: "2019-04-16T16:00:00.000Z",
    forecast_duration: 64,
  },

  /* 66 */
  {
    value_imgw: 13.123,
    value_um: 7.975,
    date_imgw_str: "2019-04-16T17:00:00.000Z",
    forecast_duration: 65,
  },

  /* 67 */
  {
    value_imgw: 11.091,
    value_um: 7.1,
    date_imgw_str: "2019-04-16T18:00:00.000Z",
    forecast_duration: 66,
  },

  /* 68 */
  {
    value_imgw: 9.631,
    value_um: 6.85,
    date_imgw_str: "2019-04-16T19:00:00.000Z",
    forecast_duration: 67,
  },

  /* 69 */
  {
    value_imgw: 8.49,
    value_um: 6.725,
    date_imgw_str: "2019-04-16T20:00:00.000Z",
    forecast_duration: 68,
  },

  /* 70 */
  {
    value_imgw: 7.108,
    value_um: 6.6,
    date_imgw_str: "2019-04-16T21:00:00.000Z",
    forecast_duration: 69,
  },

  /* 71 */
  {
    value_imgw: 6.308,
    value_um: 6.475,
    date_imgw_str: "2019-04-16T22:00:00.000Z",
    forecast_duration: 70,
  },

  /* 72 */
  {
    value_imgw: 5.449,
    value_um: 5.975,
    date_imgw_str: "2019-04-16T23:00:00.000Z",
    forecast_duration: 71,
  },

  /* 73 */
  {
    value_imgw: 4.946,
    value_um: 4.975,
    date_imgw_str: "2019-04-17T00:00:00.000Z",
    forecast_duration: 72,
  },

  /* 74 */
  {
    value_imgw: 3.838,
    value_um: 4.35,
    date_imgw_str: "2019-04-17T01:00:00.000Z",
    forecast_duration: 73,
  },

  /* 75 */
  {
    value_imgw: 1.259,
    value_um: 3.475,
    date_imgw_str: "2019-04-17T02:00:00.000Z",
    forecast_duration: 74,
  },

  /* 76 */
  {
    value_imgw: 1.424,
    value_um: 2.85,
    date_imgw_str: "2019-04-17T03:00:00.000Z",
    forecast_duration: 75,
  },

  /* 77 */
  {
    value_imgw: 2.534,
    value_um: 2.475,
    date_imgw_str: "2019-04-17T04:00:00.000Z",
    forecast_duration: 76,
  },

  /* 78 */
  {
    value_imgw: 3.609,
    value_um: 3.85,
    date_imgw_str: "2019-04-17T05:00:00.000Z",
    forecast_duration: 77,
  },

  /* 79 */
  {
    value_imgw: 5.407,
    value_um: 5.725,
    date_imgw_str: "2019-04-17T06:00:00.000Z",
    forecast_duration: 78,
  },
];

let historicals = [];

let diagonal = forecast.map((v) => ({
  value_imgw: v.value_imgw,
  value_um: v.value_imgw,
  category: "diagonal",
}));

forecastDiagonal = forecast.concat(diagonal);

let chart = new Taucharts.Chart({
  guide: {
    color: {
      brewer: {
        diagonal: "rgb(200, 200, 200)",
      },
    },
  },
  type: "scatterplot",
  data: forecastDiagonal.concat(historicals),
  x: "value_um",
  y: "value_imgw",
  color: "category",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart.renderTo("#taucharts_chart");

let chart3 = new Taucharts.Chart({
  type: "bar",
  data: computeEffectivenessPercentage(forecast),
  x: "status",
  y: "num",
  color: "status",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart3.renderTo("#taucharts_chart2_percentage");

let chart4 = new Taucharts.Chart({
  type: "bar",
  data: computeEffectivenessPercentage(historicals),
  x: "status",
  y: "num",
  color: "status",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart4.renderTo("#taucharts_chart2_percentage_historicals");
