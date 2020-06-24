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
    value_imgw: 2.685,
    value_um: 2.975,
    date_imgw_str: "2019-04-15T06:00:00.000Z",
    forecast_duration: 6,
    category: "forecast",
  },

  /* 2 */
  {
    value_imgw: 5.867,
    value_um: 5.35,
    date_imgw_str: "2019-04-15T07:00:00.000Z",
    forecast_duration: 7,
    category: "forecast",
  },

  /* 3 */
  {
    value_imgw: 7.468,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T08:00:00.000Z",
    forecast_duration: 8,
    category: "forecast",
  },

  /* 4 */
  {
    value_imgw: 9.291,
    value_um: 8.35,
    date_imgw_str: "2019-04-15T09:00:00.000Z",
    forecast_duration: 9,
    category: "forecast",
  },

  /* 5 */
  {
    value_imgw: 10.286,
    value_um: 8.6,
    date_imgw_str: "2019-04-15T10:00:00.000Z",
    forecast_duration: 10,
    category: "forecast",
  },

  /* 6 */
  {
    value_imgw: 10.787,
    value_um: 8.975,
    date_imgw_str: "2019-04-15T11:00:00.000Z",
    forecast_duration: 11,
    category: "forecast",
  },

  /* 7 */
  {
    value_imgw: 11.444,
    value_um: 9.35,
    date_imgw_str: "2019-04-15T12:00:00.000Z",
    forecast_duration: 12,
    category: "forecast",
  },

  /* 8 */
  {
    value_imgw: 12.007,
    value_um: 9.725,
    date_imgw_str: "2019-04-15T13:00:00.000Z",
    forecast_duration: 13,
    category: "forecast",
  },

  /* 9 */
  {
    value_imgw: 12.344,
    value_um: 9.6,
    date_imgw_str: "2019-04-15T14:00:00.000Z",
    forecast_duration: 14,
    category: "forecast",
  },

  /* 10 */
  {
    value_imgw: 12.031,
    value_um: 9.35,
    date_imgw_str: "2019-04-15T15:00:00.000Z",
    forecast_duration: 15,
    category: "forecast",
  },

  /* 11 */
  {
    value_imgw: 11.542,
    value_um: 8.6,
    date_imgw_str: "2019-04-15T16:00:00.000Z",
    forecast_duration: 16,
    category: "forecast",
  },

  /* 12 */
  {
    value_imgw: 10.683,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T17:00:00.000Z",
    forecast_duration: 17,
    category: "forecast",
  },

  /* 13 */
  {
    value_imgw: 8.898,
    value_um: 5.85,
    date_imgw_str: "2019-04-15T18:00:00.000Z",
    forecast_duration: 18,
    category: "forecast",
  },

  /* 14 */
  {
    value_imgw: 7.229,
    value_um: 5.475,
    date_imgw_str: "2019-04-15T19:00:00.000Z",
    forecast_duration: 19,
    category: "forecast",
  },

  /* 15 */
  {
    value_imgw: 6.087,
    value_um: 4.475,
    date_imgw_str: "2019-04-15T20:00:00.000Z",
    forecast_duration: 20,
    category: "forecast",
  },

  /* 16 */
  {
    value_imgw: 3.024,
    value_um: 3.35,
    date_imgw_str: "2019-04-15T21:00:00.000Z",
    forecast_duration: 21,
    category: "forecast",
  },

  /* 17 */
  {
    value_imgw: 2.92,
    value_um: 2.1,
    date_imgw_str: "2019-04-15T22:00:00.000Z",
    forecast_duration: 22,
    category: "forecast",
  },

  /* 18 */
  {
    value_imgw: 0.344,
    value_um: 1.225,
    date_imgw_str: "2019-04-15T23:00:00.000Z",
    forecast_duration: 23,
    category: "forecast",
  },

  /* 19 */
  {
    value_imgw: -0.182,
    value_um: 0.6,
    date_imgw_str: "2019-04-16T00:00:00.000Z",
    forecast_duration: 24,
    category: "forecast",
  },

  /* 20 */
  {
    value_imgw: -0.903,
    value_um: 0.225,
    date_imgw_str: "2019-04-16T01:00:00.000Z",
    forecast_duration: 25,
    category: "forecast",
  },

  /* 1 */
  {
    value_imgw: 2.685,
    value_um: 3.1,
    date_imgw_str: "2019-04-15T06:00:00.000Z",
    forecast_duration: 30,
    category: "forecast_04_14",
  },

  /* 2 */
  {
    value_imgw: 5.867,
    value_um: 4.35,
    date_imgw_str: "2019-04-15T07:00:00.000Z",
    forecast_duration: 31,
    category: "forecast_04_14",
  },

  /* 3 */
  {
    value_imgw: 7.468,
    value_um: 5.6,
    date_imgw_str: "2019-04-15T08:00:00.000Z",
    forecast_duration: 32,
    category: "forecast_04_14",
  },

  /* 4 */
  {
    value_imgw: 9.291,
    value_um: 5.975,
    date_imgw_str: "2019-04-15T09:00:00.000Z",
    forecast_duration: 33,
    category: "forecast_04_14",
  },

  /* 5 */
  {
    value_imgw: 10.286,
    value_um: 6.225,
    date_imgw_str: "2019-04-15T10:00:00.000Z",
    forecast_duration: 34,
    category: "forecast_04_14",
  },

  /* 6 */
  {
    value_imgw: 10.787,
    value_um: 7.225,
    date_imgw_str: "2019-04-15T11:00:00.000Z",
    forecast_duration: 35,
    category: "forecast_04_14",
  },

  /* 7 */
  {
    value_imgw: 11.444,
    value_um: 7.85,
    date_imgw_str: "2019-04-15T12:00:00.000Z",
    forecast_duration: 36,
    category: "forecast_04_14",
  },

  /* 8 */
  {
    value_imgw: 12.007,
    value_um: 7.975,
    date_imgw_str: "2019-04-15T13:00:00.000Z",
    forecast_duration: 37,
    category: "forecast_04_14",
  },

  /* 9 */
  {
    value_imgw: 12.344,
    value_um: 7.85,
    date_imgw_str: "2019-04-15T14:00:00.000Z",
    forecast_duration: 38,
    category: "forecast_04_14",
  },

  /* 10 */
  {
    value_imgw: 12.031,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T15:00:00.000Z",
    forecast_duration: 39,
    category: "forecast_04_14",
  },

  /* 11 */
  {
    value_imgw: 11.542,
    value_um: 6.6,
    date_imgw_str: "2019-04-15T16:00:00.000Z",
    forecast_duration: 40,
    category: "forecast_04_14",
  },

  /* 12 */
  {
    value_imgw: 10.683,
    value_um: 5.975,
    date_imgw_str: "2019-04-15T17:00:00.000Z",
    forecast_duration: 41,
    category: "forecast_04_14",
  },

  /* 13 */
  {
    value_imgw: 8.898,
    value_um: 5.225,
    date_imgw_str: "2019-04-15T18:00:00.000Z",
    forecast_duration: 42,
    category: "forecast_04_14",
  },

  /* 14 */
  {
    value_imgw: 7.229,
    value_um: 4.725,
    date_imgw_str: "2019-04-15T19:00:00.000Z",
    forecast_duration: 43,
    category: "forecast_04_14",
  },

  /* 15 */
  {
    value_imgw: 6.087,
    value_um: 3.1,
    date_imgw_str: "2019-04-15T20:00:00.000Z",
    forecast_duration: 44,
    category: "forecast_04_14",
  },

  /* 16 */
  {
    value_imgw: 3.024,
    value_um: 2.475,
    date_imgw_str: "2019-04-15T21:00:00.000Z",
    forecast_duration: 45,
    category: "forecast_04_14",
  },

  /* 17 */
  {
    value_imgw: 2.92,
    value_um: 2.35,
    date_imgw_str: "2019-04-15T22:00:00.000Z",
    forecast_duration: 46,
    category: "forecast_04_14",
  },

  /* 18 */
  {
    value_imgw: 0.344,
    value_um: 0.975,
    date_imgw_str: "2019-04-15T23:00:00.000Z",
    forecast_duration: 47,
    category: "forecast_04_14",
  },

  /* 19 */
  {
    value_imgw: -0.182,
    value_um: 0.975,
    date_imgw_str: "2019-04-16T00:00:00.000Z",
    forecast_duration: 48,
    category: "forecast_04_14",
  },

  /* 20 */
  {
    value_imgw: -0.903,
    value_um: 0.35,
    date_imgw_str: "2019-04-16T01:00:00.000Z",
    forecast_duration: 49,
    category: "forecast_04_14",
  },

  /* 21 */
  {
    value_imgw: -1.985,
    value_um: -0.525,
    date_imgw_str: "2019-04-16T02:00:00.000Z",
    forecast_duration: 50,
    category: "forecast_04_14",
  },

  /* 22 */
  {
    value_imgw: -1.984,
    value_um: -1.275,
    date_imgw_str: "2019-04-16T03:00:00.000Z",
    forecast_duration: 51,
    category: "forecast_04_14",
  },

  /* 23 */
  {
    value_imgw: -2.651,
    value_um: -1.775,
    date_imgw_str: "2019-04-16T04:00:00.000Z",
    forecast_duration: 52,
    category: "forecast_04_14",
  },

  /* 24 */
  {
    value_imgw: -1.432,
    value_um: 0.1,
    date_imgw_str: "2019-04-16T05:00:00.000Z",
    forecast_duration: 53,
    category: "forecast_04_14",
  },

  /* 25 */
  {
    value_imgw: 1.721,
    value_um: 2.975,
    date_imgw_str: "2019-04-16T06:00:00.000Z",
    forecast_duration: 54,
    category: "forecast_04_14",
  },

  /* 1 */
  {
    value_imgw: 2.685,
    value_um: 2.975,
    date_imgw_str: "2019-04-15T06:00:00.000Z",
    forecast_duration: 54,
    category: "forecast_04_13",
  },

  /* 2 */
  {
    value_imgw: 5.867,
    value_um: 3.975,
    date_imgw_str: "2019-04-15T07:00:00.000Z",
    forecast_duration: 55,
    category: "forecast_04_13",
  },

  /* 3 */
  {
    value_imgw: 7.468,
    value_um: 4.475,
    date_imgw_str: "2019-04-15T08:00:00.000Z",
    forecast_duration: 56,
    category: "forecast_04_13",
  },

  /* 4 */
  {
    value_imgw: 9.291,
    value_um: 4.85,
    date_imgw_str: "2019-04-15T09:00:00.000Z",
    forecast_duration: 57,
    category: "forecast_04_13",
  },

  /* 5 */
  {
    value_imgw: 10.286,
    value_um: 5.725,
    date_imgw_str: "2019-04-15T10:00:00.000Z",
    forecast_duration: 58,
    category: "forecast_04_13",
  },

  /* 6 */
  {
    value_imgw: 10.787,
    value_um: 6.1,
    date_imgw_str: "2019-04-15T11:00:00.000Z",
    forecast_duration: 59,
    category: "forecast_04_13",
  },

  /* 7 */
  {
    value_imgw: 11.444,
    value_um: 6.725,
    date_imgw_str: "2019-04-15T12:00:00.000Z",
    forecast_duration: 60,
    category: "forecast_04_13",
  },

  /* 8 */
  {
    value_imgw: 12.007,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T13:00:00.000Z",
    forecast_duration: 61,
    category: "forecast_04_13",
  },

  /* 9 */
  {
    value_imgw: 12.344,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T14:00:00.000Z",
    forecast_duration: 62,
    category: "forecast_04_13",
  },

  /* 10 */
  {
    value_imgw: 12.031,
    value_um: 7.1,
    date_imgw_str: "2019-04-15T15:00:00.000Z",
    forecast_duration: 63,
    category: "forecast_04_13",
  },

  /* 11 */
  {
    value_imgw: 11.542,
    value_um: 6.475,
    date_imgw_str: "2019-04-15T16:00:00.000Z",
    forecast_duration: 64,
    category: "forecast_04_13",
  },

  /* 12 */
  {
    value_imgw: 10.683,
    value_um: 5.225,
    date_imgw_str: "2019-04-15T17:00:00.000Z",
    forecast_duration: 65,
    category: "forecast_04_13",
  },

  /* 13 */
  {
    value_imgw: 8.898,
    value_um: 3.975,
    date_imgw_str: "2019-04-15T18:00:00.000Z",
    forecast_duration: 66,
    category: "forecast_04_13",
  },

  /* 14 */
  {
    value_imgw: 7.229,
    value_um: 3.1,
    date_imgw_str: "2019-04-15T19:00:00.000Z",
    forecast_duration: 67,
    category: "forecast_04_13",
  },

  /* 15 */
  {
    value_imgw: 6.087,
    value_um: 2.6,
    date_imgw_str: "2019-04-15T20:00:00.000Z",
    forecast_duration: 68,
    category: "forecast_04_13",
  },

  /* 16 */
  {
    value_imgw: 3.024,
    value_um: 1.225,
    date_imgw_str: "2019-04-15T21:00:00.000Z",
    forecast_duration: 69,
    category: "forecast_04_13",
  },

  /* 17 */
  {
    value_imgw: 2.92,
    value_um: 1.975,
    date_imgw_str: "2019-04-15T22:00:00.000Z",
    forecast_duration: 70,
    category: "forecast_04_13",
  },

  /* 18 */
  {
    value_imgw: 0.344,
    value_um: 0.6,
    date_imgw_str: "2019-04-15T23:00:00.000Z",
    forecast_duration: 71,
    category: "forecast_04_13",
  },

  /* 19 */
  {
    value_imgw: -0.182,
    value_um: -0.15,
    date_imgw_str: "2019-04-16T00:00:00.000Z",
    forecast_duration: 72,
    category: "forecast_04_13",
  },

  /* 20 */
  {
    value_imgw: -0.903,
    value_um: -0.025,
    date_imgw_str: "2019-04-16T01:00:00.000Z",
    forecast_duration: 73,
    category: "forecast_04_13",
  },

  /* 21 */
  {
    value_imgw: -1.985,
    value_um: -1.275,
    date_imgw_str: "2019-04-16T02:00:00.000Z",
    forecast_duration: 74,
    category: "forecast_04_13",
  },

  /* 22 */
  {
    value_imgw: -1.984,
    value_um: -0.525,
    date_imgw_str: "2019-04-16T03:00:00.000Z",
    forecast_duration: 75,
    category: "forecast_04_13",
  },

  /* 23 */
  {
    value_imgw: -2.651,
    value_um: -0.275,
    date_imgw_str: "2019-04-16T04:00:00.000Z",
    forecast_duration: 76,
    category: "forecast_04_13",
  },

  /* 24 */
  {
    value_imgw: -1.432,
    value_um: 0.475,
    date_imgw_str: "2019-04-16T05:00:00.000Z",
    forecast_duration: 77,
    category: "forecast_04_13",
  },

  /* 25 */
  {
    value_imgw: 1.721,
    value_um: 2.35,
    date_imgw_str: "2019-04-16T06:00:00.000Z",
    forecast_duration: 78,
    category: "forecast_04_13",
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
        diagonal: "rgb(180, 220, 220)",
        forecast_04_13: "rgb(200, 170, 170)",
        forecast_04_14: "rgb(200, 80, 80)",
        forecast: "rgb(250, 0, 0)",
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
