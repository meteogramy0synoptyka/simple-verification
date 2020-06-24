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

function computeEffectivenessSeparateDobaPeriod(umimgw) {
  let dane = umimgw.map((r) => ({
    um: r.value_um,
    imgw: r.value_imgw,
    doba_number: r.doba_number,
    p: computeP(Number(r.value_um)),
    status: computeDescription(computeP(r.value_um), r.value_imgw),
  }));

  console.log("Dane są następujące", dane);

  let yes = dane
    .filter((i) => i.doba_number === 1)
    .filter((i) => i.status === "TAK").length;
  let no = dane
    .filter((i) => i.doba_number === 1)
    .filter((i) => i.status === "NIE").length;
  let false_yes = dane
    .filter((i) => i.doba_number === 1)
    .filter((i) => i.status === "FAŁSZYWE TAK").length;
  let false_no = dane
    .filter((i) => i.doba_number === 1)
    .filter((i) => i.status === "FAŁSZYWE NIE").length;

  let yes2 = dane
    .filter((i) => i.doba_number === 2)
    .filter((i) => i.status === "TAK").length;
  let no2 = dane
    .filter((i) => i.doba_number === 2)
    .filter((i) => i.status === "NIE").length;
  let false_yes2 = dane
    .filter((i) => i.doba_number === 2)
    .filter((i) => i.status === "FAŁSZYWE TAK").length;
  let false_no2 = dane
    .filter((i) => i.doba_number === 2)
    .filter((i) => i.status === "FAŁSZYWE NIE").length;

  let effectiveness = [
    { status: "TAK doba1", num: yes / 24 },
    { status: "NIE doba1", num: no / 24 },
    { status: "FAŁSZYWE TAK doba1", num: false_yes / 24 },
    { status: "FAŁSZYWE NIE doba1", num: false_no / 24 },
    { status: "TAK doba2", num: yes2 / 24 },
    { status: "NIE doba2", num: no2 / 24 },
    { status: "FAŁSZYWE TAK doba2", num: false_yes2 / 24 },
    { status: "FAŁSZYWE NIE doba2", num: false_no2 / 24 },
  ];

  console.log("effectiveness is !!!", effectiveness);

  return effectiveness;
}

let forecast0 = [
  /* 1 */
  {
    value_imgw: 1.506,
    value_um: -3.4,
    date_imgw_str: "2019-03-02T00:00:00.000Z",
    forecast_duration: 0,
    category: "forecast",
  },

  /* 2 */
  {
    value_imgw: 0.722,
    value_um: -3.525,
    date_imgw_str: "2019-03-02T01:00:00.000Z",
    forecast_duration: 1,
    category: "forecast",
  },

  /* 3 */
  {
    value_imgw: 0.663,
    value_um: -3.525,
    date_imgw_str: "2019-03-02T02:00:00.000Z",
    forecast_duration: 2,
    category: "forecast",
  },

  /* 4 */
  {
    value_imgw: 0.335,
    value_um: -3.525,
    date_imgw_str: "2019-03-02T03:00:00.000Z",
    forecast_duration: 3,
    category: "forecast",
  },

  /* 5 */
  {
    value_imgw: 0.029,
    value_um: -3.525,
    date_imgw_str: "2019-03-02T04:00:00.000Z",
    forecast_duration: 4,
    category: "forecast",
  },

  /* 6 */
  {
    value_imgw: -0.224,
    value_um: -3.525,
    date_imgw_str: "2019-03-02T05:00:00.000Z",
    forecast_duration: 5,
    category: "forecast",
  },

  /* 7 */
  {
    value_imgw: -0.13,
    value_um: -3.4,
    date_imgw_str: "2019-03-02T06:00:00.000Z",
    forecast_duration: 6,
    category: "forecast",
  },

  /* 8 */
  {
    value_imgw: 0.203,
    value_um: -3.025,
    date_imgw_str: "2019-03-02T07:00:00.000Z",
    forecast_duration: 7,
    category: "forecast",
  },

  /* 9 */
  {
    value_imgw: 0.993,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T08:00:00.000Z",
    forecast_duration: 8,
    category: "forecast",
  },

  /* 10 */
  {
    value_imgw: 1.452,
    value_um: -2.025,
    date_imgw_str: "2019-03-02T09:00:00.000Z",
    forecast_duration: 9,
    category: "forecast",
  },

  /* 11 */
  {
    value_imgw: 2.239,
    value_um: -1.4,
    date_imgw_str: "2019-03-02T10:00:00.000Z",
    forecast_duration: 10,
    category: "forecast",
  },

  /* 12 */
  {
    value_imgw: 2.821,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T11:00:00.000Z",
    forecast_duration: 11,
    category: "forecast",
  },

  /* 13 */
  {
    value_imgw: 3.27,
    value_um: -0.9,
    date_imgw_str: "2019-03-02T12:00:00.000Z",
    forecast_duration: 12,
    category: "forecast",
  },

  /* 14 */
  {
    value_imgw: 3.686,
    value_um: -0.775,
    date_imgw_str: "2019-03-02T13:00:00.000Z",
    forecast_duration: 13,
    category: "forecast",
  },

  /* 15 */
  {
    value_imgw: 3.913,
    value_um: -0.65,
    date_imgw_str: "2019-03-02T14:00:00.000Z",
    forecast_duration: 14,
    category: "forecast",
  },

  /* 16 */
  {
    value_imgw: 3.959,
    value_um: -1.275,
    date_imgw_str: "2019-03-02T15:00:00.000Z",
    forecast_duration: 15,
    category: "forecast",
  },

  /* 17 */
  {
    value_imgw: 3.658,
    value_um: -1.525,
    date_imgw_str: "2019-03-02T16:00:00.000Z",
    forecast_duration: 16,
    category: "forecast",
  },

  /* 18 */
  {
    value_imgw: 3.258,
    value_um: -1.775,
    date_imgw_str: "2019-03-02T17:00:00.000Z",
    forecast_duration: 17,
    category: "forecast",
  },

  /* 19 */
  {
    value_imgw: 3.015,
    value_um: -1.9,
    date_imgw_str: "2019-03-02T18:00:00.000Z",
    forecast_duration: 18,
    category: "forecast",
  },

  /* 20 */
  {
    value_imgw: 3.052,
    value_um: -2.4,
    date_imgw_str: "2019-03-02T19:00:00.000Z",
    forecast_duration: 19,
    category: "forecast",
  },

  /* 21 */
  {
    value_imgw: 3.014,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T20:00:00.000Z",
    forecast_duration: 20,
    category: "forecast",
  },

  /* 22 */
  {
    value_imgw: 2.866,
    value_um: -2.65,
    date_imgw_str: "2019-03-02T21:00:00.000Z",
    forecast_duration: 21,
    category: "forecast",
  },

  /* 23 */
  {
    value_imgw: 2.828,
    value_um: -2.65,
    date_imgw_str: "2019-03-02T22:00:00.000Z",
    forecast_duration: 22,
    category: "forecast",
  },

  /* 24 */
  {
    value_imgw: 3.055,
    value_um: -2.525,
    date_imgw_str: "2019-03-02T23:00:00.000Z",
    forecast_duration: 23,
    category: "forecast",
  },

  /* 25 */
  {
    value_imgw: 3.253,
    value_um: -2.4,
    date_imgw_str: "2019-03-03T00:00:00.000Z",
    forecast_duration: 24,
    category: "forecast",
  },

  /* 26 */
  {
    value_imgw: 3.219,
    value_um: -2.025,
    date_imgw_str: "2019-03-03T01:00:00.000Z",
    forecast_duration: 25,
    category: "forecast",
  },

  /* 27 */
  {
    value_imgw: 2.683,
    value_um: -1.65,
    date_imgw_str: "2019-03-03T02:00:00.000Z",
    forecast_duration: 26,
    category: "forecast",
  },

  /* 28 */
  {
    value_imgw: 3.431,
    value_um: -1.525,
    date_imgw_str: "2019-03-03T03:00:00.000Z",
    forecast_duration: 27,
    category: "forecast",
  },

  /* 29 */
  {
    value_imgw: 3.711,
    value_um: -1.025,
    date_imgw_str: "2019-03-03T04:00:00.000Z",
    forecast_duration: 28,
    category: "forecast",
  },

  /* 30 */
  {
    value_imgw: 4.82,
    value_um: -0.65,
    date_imgw_str: "2019-03-03T05:00:00.000Z",
    forecast_duration: 29,
    category: "forecast",
  },

  /* 31 */
  {
    value_imgw: 5.2,
    value_um: -0.275,
    date_imgw_str: "2019-03-03T06:00:00.000Z",
    forecast_duration: 30,
    category: "forecast",
  },

  /* 32 */
  {
    value_imgw: 6.167,
    value_um: 0.35,
    date_imgw_str: "2019-03-03T07:00:00.000Z",
    forecast_duration: 31,
    category: "forecast",
  },

  /* 33 */
  {
    value_imgw: 7.113,
    value_um: 1.225,
    date_imgw_str: "2019-03-03T08:00:00.000Z",
    forecast_duration: 32,
    category: "forecast",
  },

  /* 34 */
  {
    value_imgw: 8.651,
    value_um: 1.85,
    date_imgw_str: "2019-03-03T09:00:00.000Z",
    forecast_duration: 33,
    category: "forecast",
  },

  /* 35 */
  {
    value_imgw: 10.151,
    value_um: 2.6,
    date_imgw_str: "2019-03-03T10:00:00.000Z",
    forecast_duration: 34,
    category: "forecast",
  },

  /* 36 */
  {
    value_imgw: 10.696,
    value_um: 3.1,
    date_imgw_str: "2019-03-03T11:00:00.000Z",
    forecast_duration: 35,
    category: "forecast",
  },

  /* 37 */
  {
    value_imgw: 11,
    value_um: 2.85,
    date_imgw_str: "2019-03-03T12:00:00.000Z",
    forecast_duration: 36,
    category: "forecast",
  },

  /* 38 */
  {
    value_imgw: 11.033,
    value_um: 2.975,
    date_imgw_str: "2019-03-03T13:00:00.000Z",
    forecast_duration: 37,
    category: "forecast",
  },

  /* 39 */
  {
    value_imgw: 11.362,
    value_um: 3.35,
    date_imgw_str: "2019-03-03T14:00:00.000Z",
    forecast_duration: 38,
    category: "forecast",
  },

  /* 40 */
  {
    value_imgw: 11.19,
    value_um: 3.475,
    date_imgw_str: "2019-03-03T15:00:00.000Z",
    forecast_duration: 39,
    category: "forecast",
  },

  /* 41 */
  {
    value_imgw: 10.729,
    value_um: 3.725,
    date_imgw_str: "2019-03-03T16:00:00.000Z",
    forecast_duration: 40,
    category: "forecast",
  },

  /* 42 */
  {
    value_imgw: 10.331,
    value_um: 4.1,
    date_imgw_str: "2019-03-03T17:00:00.000Z",
    forecast_duration: 41,
    category: "forecast",
  },

  /* 43 */
  {
    value_imgw: 10.179,
    value_um: 4.225,
    date_imgw_str: "2019-03-03T18:00:00.000Z",
    forecast_duration: 42,
    category: "forecast",
  },

  /* 44 */
  {
    value_imgw: 10.48,
    value_um: 4.1,
    date_imgw_str: "2019-03-03T19:00:00.000Z",
    forecast_duration: 43,
    category: "forecast",
  },

  /* 45 */
  {
    value_imgw: 10.185,
    value_um: 4.225,
    date_imgw_str: "2019-03-03T20:00:00.000Z",
    forecast_duration: 44,
    category: "forecast",
  },

  /* 46 */
  {
    value_imgw: 9.88,
    value_um: 4.35,
    date_imgw_str: "2019-03-03T21:00:00.000Z",
    forecast_duration: 45,
    category: "forecast",
  },

  /* 47 */
  {
    value_imgw: 9.31,
    value_um: 4.6,
    date_imgw_str: "2019-03-03T22:00:00.000Z",
    forecast_duration: 46,
    category: "forecast",
  },

  /* 48 */
  {
    value_imgw: 9.087,
    value_um: 5.1,
    date_imgw_str: "2019-03-03T23:00:00.000Z",
    forecast_duration: 47,
    category: "forecast",
  },

  /* 49 */
  {
    value_imgw: 9.417,
    value_um: 5.35,
    date_imgw_str: "2019-03-04T00:00:00.000Z",
    forecast_duration: 48,
    category: "forecast",
  },

  /* 50 */
  {
    value_imgw: 9.248,
    value_um: 5.725,
    date_imgw_str: "2019-03-04T01:00:00.000Z",
    forecast_duration: 49,
    category: "forecast",
  },

  /* 51 */
  {
    value_imgw: 9.102,
    value_um: 5.85,
    date_imgw_str: "2019-03-04T02:00:00.000Z",
    forecast_duration: 50,
    category: "forecast",
  },

  /* 52 */
  {
    value_imgw: 8.995,
    value_um: 5.975,
    date_imgw_str: "2019-03-04T03:00:00.000Z",
    forecast_duration: 51,
    category: "forecast",
  },

  /* 53 */
  {
    value_imgw: 8.764,
    value_um: 6.1,
    date_imgw_str: "2019-03-04T04:00:00.000Z",
    forecast_duration: 52,
    category: "forecast",
  },

  /* 54 */
  {
    value_imgw: 8.811,
    value_um: 6.1,
    date_imgw_str: "2019-03-04T05:00:00.000Z",
    forecast_duration: 53,
    category: "forecast",
  },

  /* 55 */
  {
    value_imgw: 8.252,
    value_um: 6.225,
    date_imgw_str: "2019-03-04T06:00:00.000Z",
    forecast_duration: 54,
    category: "forecast",
  },

  /* 56 */
  {
    value_imgw: 9.188,
    value_um: 6.6,
    date_imgw_str: "2019-03-04T07:00:00.000Z",
    forecast_duration: 55,
    category: "forecast",
  },

  /* 57 */
  {
    value_imgw: 10.835,
    value_um: 6.975,
    date_imgw_str: "2019-03-04T08:00:00.000Z",
    forecast_duration: 56,
    category: "forecast",
  },

  /* 58 */
  {
    value_imgw: 12.642,
    value_um: 7.225,
    date_imgw_str: "2019-03-04T09:00:00.000Z",
    forecast_duration: 57,
    category: "forecast",
  },

  /* 59 */
  {
    value_imgw: 13.659,
    value_um: 8.35,
    date_imgw_str: "2019-03-04T10:00:00.000Z",
    forecast_duration: 58,
    category: "forecast",
  },

  /* 60 */
  {
    value_imgw: 14.43,
    value_um: 9.725,
    date_imgw_str: "2019-03-04T11:00:00.000Z",
    forecast_duration: 59,
    category: "forecast",
  },

  /* 61 */
  {
    value_imgw: 14.968,
    value_um: 10.975,
    date_imgw_str: "2019-03-04T12:00:00.000Z",
    forecast_duration: 60,
    category: "forecast",
  },

  /* 62 */
  {
    value_imgw: 15.31,
    value_um: 10.975,
    date_imgw_str: "2019-03-04T13:00:00.000Z",
    forecast_duration: 61,
    category: "forecast",
  },

  /* 63 */
  {
    value_imgw: 16.351,
    value_um: 10.85,
    date_imgw_str: "2019-03-04T14:00:00.000Z",
    forecast_duration: 62,
    category: "forecast",
  },

  /* 64 */
  {
    value_imgw: 15.29,
    value_um: 10.6,
    date_imgw_str: "2019-03-04T15:00:00.000Z",
    forecast_duration: 63,
    category: "forecast",
  },

  /* 65 */
  {
    value_imgw: 14.306,
    value_um: 10.1,
    date_imgw_str: "2019-03-04T16:00:00.000Z",
    forecast_duration: 64,
    category: "forecast",
  },

  /* 66 */
  {
    value_imgw: 13.158,
    value_um: 9.6,
    date_imgw_str: "2019-03-04T17:00:00.000Z",
    forecast_duration: 65,
    category: "forecast",
  },

  /* 67 */
  {
    value_imgw: 11.911,
    value_um: 9.225,
    date_imgw_str: "2019-03-04T18:00:00.000Z",
    forecast_duration: 66,
    category: "forecast",
  },

  /* 68 */
  {
    value_imgw: 11.113,
    value_um: 9.475,
    date_imgw_str: "2019-03-04T19:00:00.000Z",
    forecast_duration: 67,
    category: "forecast",
  },

  /* 69 */
  {
    value_imgw: 10.668,
    value_um: 8.85,
    date_imgw_str: "2019-03-04T20:00:00.000Z",
    forecast_duration: 68,
    category: "forecast",
  },

  /* 70 */
  {
    value_imgw: 9.734,
    value_um: 7.85,
    date_imgw_str: "2019-03-04T21:00:00.000Z",
    forecast_duration: 69,
    category: "forecast",
  },

  /* 71 */
  {
    value_imgw: 8.351,
    value_um: 7.725,
    date_imgw_str: "2019-03-04T22:00:00.000Z",
    forecast_duration: 70,
    category: "forecast",
  },

  /* 72 */
  {
    value_imgw: 6.227,
    value_um: 7.6,
    date_imgw_str: "2019-03-04T23:00:00.000Z",
    forecast_duration: 71,
    category: "forecast",
  },

  /* 73 */
  {
    value_imgw: 5.969,
    value_um: 7.35,
    date_imgw_str: "2019-03-05T00:00:00.000Z",
    forecast_duration: 72,
    category: "forecast",
  },

  /* 74 */
  {
    value_imgw: 5.209,
    value_um: 6.725,
    date_imgw_str: "2019-03-05T01:00:00.000Z",
    forecast_duration: 73,
    category: "forecast",
  },

  /* 75 */
  {
    value_imgw: 4.913,
    value_um: 6.475,
    date_imgw_str: "2019-03-05T02:00:00.000Z",
    forecast_duration: 74,
    category: "forecast",
  },

  /* 76 */
  {
    value_imgw: 5.08,
    value_um: 6.225,
    date_imgw_str: "2019-03-05T03:00:00.000Z",
    forecast_duration: 75,
    category: "forecast",
  },

  /* 77 */
  {
    value_imgw: 4.975,
    value_um: 6.1,
    date_imgw_str: "2019-03-05T04:00:00.000Z",
    forecast_duration: 76,
    category: "forecast",
  },

  /* 78 */
  {
    value_imgw: 4.847,
    value_um: 5.6,
    date_imgw_str: "2019-03-05T05:00:00.000Z",
    forecast_duration: 77,
    category: "forecast",
  },

  /* 79 */
  {
    value_imgw: 5.202,
    value_um: 5.6,
    date_imgw_str: "2019-03-05T06:00:00.000Z",
    forecast_duration: 78,
    category: "forecast",
  },
];

let forecast = forecast0.map((r) => ({
  value_imgw: r.value_imgw,
  value_um: r.value_um,
  date_imgw_str: r.date_imgw_str,
  forecast_duration: r.forecast_duration,
  doba_number: Math.floor((r.forecast_duration - 6) / 24) + 1,
  category: `doba${Math.floor((r.forecast_duration - 6) / 24) + 1}`,
}));

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
        doba0: "rgb(250, 0, 0)",
        doba1: "rgb(0, 250, 0)",
        doba2: "rgb(0, 0, 250)",
        doba3: "rgb(0, 250, 250)",
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
  guide: {
    color: {
      brewer: {
        "TAK doba1": "rgb(250, 50, 50)",
        "NIE doba1": "rgb(50, 250, 50)",
        "FAŁSZYWE TAK doba1": "rgb(0, 250, 0)",
        "FAŁSZYWE NIE doba1": "rgb(250, 0, 0)",

        "TAK doba2": "rgb(250, 50, 150)",
        "NIE doba2": "rgb(50, 250, 150)",
        "FAŁSZYWE TAK doba2": "rgb(0, 250, 100)",
        "FAŁSZYWE NIE doba2": "rgb(250, 0, 100)",
      },
    },
  },
  type: "bar",
  data: computeEffectivenessSeparateDobaPeriod(forecast),
  x: "status",
  y: "num",
  color: "status",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart2.renderTo("#taucharts_chart2");
