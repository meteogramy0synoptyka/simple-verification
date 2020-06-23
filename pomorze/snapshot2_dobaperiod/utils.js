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
    value_imgw: 4.128,
    value_um: 2.1,
    date_imgw_str: "2019-04-15T00:00:00.000Z",
    forecast_duration: 0,
  },

  /* 2 */
  {
    value_imgw: 3.502,
    value_um: 0.975,
    date_imgw_str: "2019-04-15T01:00:00.000Z",
    forecast_duration: 1,
  },

  /* 3 */
  {
    value_imgw: 2.341,
    value_um: 1.225,
    date_imgw_str: "2019-04-15T02:00:00.000Z",
    forecast_duration: 2,
  },

  /* 4 */
  {
    value_imgw: 2.124,
    value_um: 1.1,
    date_imgw_str: "2019-04-15T03:00:00.000Z",
    forecast_duration: 3,
  },

  /* 5 */
  {
    value_imgw: 0.358,
    value_um: 1.1,
    date_imgw_str: "2019-04-15T04:00:00.000Z",
    forecast_duration: 4,
  },

  /* 6 */
  {
    value_imgw: 1.165,
    value_um: 2.35,
    date_imgw_str: "2019-04-15T05:00:00.000Z",
    forecast_duration: 5,
  },

  /* 7 */
  {
    value_imgw: 2.685,
    value_um: 4.225,
    date_imgw_str: "2019-04-15T06:00:00.000Z",
    forecast_duration: 6,
  },

  /* 8 */
  {
    value_imgw: 5.867,
    value_um: 5.475,
    date_imgw_str: "2019-04-15T07:00:00.000Z",
    forecast_duration: 7,
  },

  /* 9 */
  {
    value_imgw: 7.468,
    value_um: 6.6,
    date_imgw_str: "2019-04-15T08:00:00.000Z",
    forecast_duration: 8,
  },

  /* 10 */
  {
    value_imgw: 9.291,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T09:00:00.000Z",
    forecast_duration: 9,
  },

  /* 11 */
  {
    value_imgw: 10.286,
    value_um: 7.475,
    date_imgw_str: "2019-04-15T10:00:00.000Z",
    forecast_duration: 10,
  },

  /* 12 */
  {
    value_imgw: 10.787,
    value_um: 7.6,
    date_imgw_str: "2019-04-15T11:00:00.000Z",
    forecast_duration: 11,
  },

  /* 13 */
  {
    value_imgw: 11.444,
    value_um: 7.6,
    date_imgw_str: "2019-04-15T12:00:00.000Z",
    forecast_duration: 12,
  },

  /* 14 */
  {
    value_imgw: 12.007,
    value_um: 7.1,
    date_imgw_str: "2019-04-15T13:00:00.000Z",
    forecast_duration: 13,
  },

  /* 15 */
  {
    value_imgw: 12.344,
    value_um: 6.475,
    date_imgw_str: "2019-04-15T14:00:00.000Z",
    forecast_duration: 14,
  },

  /* 16 */
  {
    value_imgw: 12.031,
    value_um: 5.975,
    date_imgw_str: "2019-04-15T15:00:00.000Z",
    forecast_duration: 15,
  },

  /* 17 */
  {
    value_imgw: 11.542,
    value_um: 5.225,
    date_imgw_str: "2019-04-15T16:00:00.000Z",
    forecast_duration: 16,
  },

  /* 18 */
  {
    value_imgw: 10.683,
    value_um: 4.225,
    date_imgw_str: "2019-04-15T17:00:00.000Z",
    forecast_duration: 17,
  },

  /* 19 */
  {
    value_imgw: 8.898,
    value_um: 3.35,
    date_imgw_str: "2019-04-15T18:00:00.000Z",
    forecast_duration: 18,
  },

  /* 20 */
  {
    value_imgw: 7.229,
    value_um: 2.975,
    date_imgw_str: "2019-04-15T19:00:00.000Z",
    forecast_duration: 19,
  },

  /* 21 */
  {
    value_imgw: 6.087,
    value_um: 2.6,
    date_imgw_str: "2019-04-15T20:00:00.000Z",
    forecast_duration: 20,
  },

  /* 22 */
  {
    value_imgw: 3.024,
    value_um: 1.975,
    date_imgw_str: "2019-04-15T21:00:00.000Z",
    forecast_duration: 21,
  },

  /* 23 */
  {
    value_imgw: 2.92,
    value_um: 2.1,
    date_imgw_str: "2019-04-15T22:00:00.000Z",
    forecast_duration: 22,
  },

  /* 24 */
  {
    value_imgw: 0.344,
    value_um: 1.225,
    date_imgw_str: "2019-04-15T23:00:00.000Z",
    forecast_duration: 23,
  },

  /* 25 */
  {
    value_imgw: -0.182,
    value_um: 1.6,
    date_imgw_str: "2019-04-16T00:00:00.000Z",
    forecast_duration: 24,
  },

  /* 26 */
  {
    value_imgw: -0.903,
    value_um: 2.725,
    date_imgw_str: "2019-04-16T01:00:00.000Z",
    forecast_duration: 25,
  },

  /* 27 */
  {
    value_imgw: -1.985,
    value_um: 3.475,
    date_imgw_str: "2019-04-16T02:00:00.000Z",
    forecast_duration: 26,
  },

  /* 28 */
  {
    value_imgw: -1.984,
    value_um: 2.975,
    date_imgw_str: "2019-04-16T03:00:00.000Z",
    forecast_duration: 27,
  },

  /* 29 */
  {
    value_imgw: -2.651,
    value_um: 2.475,
    date_imgw_str: "2019-04-16T04:00:00.000Z",
    forecast_duration: 28,
  },

  /* 30 */
  {
    value_imgw: -1.432,
    value_um: 3.1,
    date_imgw_str: "2019-04-16T05:00:00.000Z",
    forecast_duration: 29,
  },

  /* 31 */
  {
    value_imgw: 1.721,
    value_um: 4.725,
    date_imgw_str: "2019-04-16T06:00:00.000Z",
    forecast_duration: 30,
  },

  /* 32 */
  {
    value_imgw: 5.145,
    value_um: 6.225,
    date_imgw_str: "2019-04-16T07:00:00.000Z",
    forecast_duration: 31,
  },

  /* 33 */
  {
    value_imgw: 9.449,
    value_um: 7.35,
    date_imgw_str: "2019-04-16T08:00:00.000Z",
    forecast_duration: 32,
  },

  /* 34 */
  {
    value_imgw: 10.368,
    value_um: 8.225,
    date_imgw_str: "2019-04-16T09:00:00.000Z",
    forecast_duration: 33,
  },

  /* 35 */
  {
    value_imgw: 11.219,
    value_um: 8.85,
    date_imgw_str: "2019-04-16T10:00:00.000Z",
    forecast_duration: 34,
  },

  /* 36 */
  {
    value_imgw: 12.585,
    value_um: 8.975,
    date_imgw_str: "2019-04-16T11:00:00.000Z",
    forecast_duration: 35,
  },

  /* 37 */
  {
    value_imgw: 13.45,
    value_um: 8.725,
    date_imgw_str: "2019-04-16T12:00:00.000Z",
    forecast_duration: 36,
  },

  /* 38 */
  {
    value_imgw: 13.665,
    value_um: 8.475,
    date_imgw_str: "2019-04-16T13:00:00.000Z",
    forecast_duration: 37,
  },

  /* 39 */
  {
    value_imgw: 14.236,
    value_um: 7.975,
    date_imgw_str: "2019-04-16T14:00:00.000Z",
    forecast_duration: 38,
  },

  /* 40 */
  {
    value_imgw: 14.301,
    value_um: 7.1,
    date_imgw_str: "2019-04-16T15:00:00.000Z",
    forecast_duration: 39,
  },

  /* 41 */
  {
    value_imgw: 14.02,
    value_um: 6.1,
    date_imgw_str: "2019-04-16T16:00:00.000Z",
    forecast_duration: 40,
  },

  /* 42 */
  {
    value_imgw: 13.123,
    value_um: 5.1,
    date_imgw_str: "2019-04-16T17:00:00.000Z",
    forecast_duration: 41,
  },

  /* 43 */
  {
    value_imgw: 11.091,
    value_um: 4.975,
    date_imgw_str: "2019-04-16T18:00:00.000Z",
    forecast_duration: 42,
  },

  /* 44 */
  {
    value_imgw: 9.631,
    value_um: 4.975,
    date_imgw_str: "2019-04-16T19:00:00.000Z",
    forecast_duration: 43,
  },

  /* 45 */
  {
    value_imgw: 8.49,
    value_um: 4.725,
    date_imgw_str: "2019-04-16T20:00:00.000Z",
    forecast_duration: 44,
  },

  /* 46 */
  {
    value_imgw: 7.108,
    value_um: 4.725,
    date_imgw_str: "2019-04-16T21:00:00.000Z",
    forecast_duration: 45,
  },

  /* 47 */
  {
    value_imgw: 6.308,
    value_um: 4.725,
    date_imgw_str: "2019-04-16T22:00:00.000Z",
    forecast_duration: 46,
  },

  /* 48 */
  {
    value_imgw: 5.449,
    value_um: 4.725,
    date_imgw_str: "2019-04-16T23:00:00.000Z",
    forecast_duration: 47,
  },

  /* 49 */
  {
    value_imgw: 4.946,
    value_um: 4.225,
    date_imgw_str: "2019-04-17T00:00:00.000Z",
    forecast_duration: 48,
  },

  /* 50 */
  {
    value_imgw: 3.838,
    value_um: 2.975,
    date_imgw_str: "2019-04-17T01:00:00.000Z",
    forecast_duration: 49,
  },

  /* 51 */
  {
    value_imgw: 1.259,
    value_um: 2.225,
    date_imgw_str: "2019-04-17T02:00:00.000Z",
    forecast_duration: 50,
  },

  /* 52 */
  {
    value_imgw: 1.424,
    value_um: 1.725,
    date_imgw_str: "2019-04-17T03:00:00.000Z",
    forecast_duration: 51,
  },

  /* 53 */
  {
    value_imgw: 2.534,
    value_um: 1.725,
    date_imgw_str: "2019-04-17T04:00:00.000Z",
    forecast_duration: 52,
  },

  /* 54 */
  {
    value_imgw: 3.609,
    value_um: 3.725,
    date_imgw_str: "2019-04-17T05:00:00.000Z",
    forecast_duration: 53,
  },

  /* 55 */
  {
    value_imgw: 5.407,
    value_um: 5.975,
    date_imgw_str: "2019-04-17T06:00:00.000Z",
    forecast_duration: 54,
  },

  /* 56 */
  {
    value_imgw: 7.715,
    value_um: 8.1,
    date_imgw_str: "2019-04-17T07:00:00.000Z",
    forecast_duration: 55,
  },

  /* 57 */
  {
    value_imgw: 9.463,
    value_um: 10.1,
    date_imgw_str: "2019-04-17T08:00:00.000Z",
    forecast_duration: 56,
  },

  /* 58 */
  {
    value_imgw: 11.4,
    value_um: 11.225,
    date_imgw_str: "2019-04-17T09:00:00.000Z",
    forecast_duration: 57,
  },

  /* 59 */
  {
    value_imgw: 12.978,
    value_um: 12.35,
    date_imgw_str: "2019-04-17T10:00:00.000Z",
    forecast_duration: 58,
  },

  /* 60 */
  {
    value_imgw: 14.743,
    value_um: 12.975,
    date_imgw_str: "2019-04-17T11:00:00.000Z",
    forecast_duration: 59,
  },

  /* 61 */
  {
    value_imgw: 15.876,
    value_um: 12.6,
    date_imgw_str: "2019-04-17T12:00:00.000Z",
    forecast_duration: 60,
  },

  /* 62 */
  {
    value_imgw: 16.526,
    value_um: 12.475,
    date_imgw_str: "2019-04-17T13:00:00.000Z",
    forecast_duration: 61,
  },

  /* 63 */
  {
    value_imgw: 16.76,
    value_um: 11.725,
    date_imgw_str: "2019-04-17T14:00:00.000Z",
    forecast_duration: 62,
  },

  /* 64 */
  {
    value_imgw: 16.925,
    value_um: 10.85,
    date_imgw_str: "2019-04-17T15:00:00.000Z",
    forecast_duration: 63,
  },

  /* 65 */
  {
    value_imgw: 16.791,
    value_um: 9.725,
    date_imgw_str: "2019-04-17T16:00:00.000Z",
    forecast_duration: 64,
  },

  /* 66 */
  {
    value_imgw: 15.857,
    value_um: 7.725,
    date_imgw_str: "2019-04-17T17:00:00.000Z",
    forecast_duration: 65,
  },

  /* 67 */
  {
    value_imgw: 14.212,
    value_um: 5.975,
    date_imgw_str: "2019-04-17T18:00:00.000Z",
    forecast_duration: 66,
  },

  /* 68 */
  {
    value_imgw: 12.404,
    value_um: 5.475,
    date_imgw_str: "2019-04-17T19:00:00.000Z",
    forecast_duration: 67,
  },

  /* 69 */
  {
    value_imgw: 9.395,
    value_um: 5.225,
    date_imgw_str: "2019-04-17T20:00:00.000Z",
    forecast_duration: 68,
  },

  /* 70 */
  {
    value_imgw: 6.218,
    value_um: 5.1,
    date_imgw_str: "2019-04-17T21:00:00.000Z",
    forecast_duration: 69,
  },

  /* 71 */
  {
    value_imgw: 5.588,
    value_um: 4.975,
    date_imgw_str: "2019-04-17T22:00:00.000Z",
    forecast_duration: 70,
  },

  /* 72 */
  {
    value_imgw: 4.41,
    value_um: 4.725,
    date_imgw_str: "2019-04-17T23:00:00.000Z",
    forecast_duration: 71,
  },

  /* 73 */
  {
    value_imgw: 3.217,
    value_um: 4.725,
    date_imgw_str: "2019-04-18T00:00:00.000Z",
    forecast_duration: 72,
  },

  /* 74 */
  {
    value_imgw: 2.096,
    value_um: 4.35,
    date_imgw_str: "2019-04-18T01:00:00.000Z",
    forecast_duration: 73,
  },

  /* 75 */
  {
    value_imgw: 1.445,
    value_um: 3.725,
    date_imgw_str: "2019-04-18T02:00:00.000Z",
    forecast_duration: 74,
  },

  /* 76 */
  {
    value_imgw: 0.235,
    value_um: 3.1,
    date_imgw_str: "2019-04-18T03:00:00.000Z",
    forecast_duration: 75,
  },

  /* 77 */
  {
    value_imgw: 0.291,
    value_um: 3.475,
    date_imgw_str: "2019-04-18T04:00:00.000Z",
    forecast_duration: 76,
  },

  /* 78 */
  {
    value_imgw: 0.98,
    value_um: 5.475,
    date_imgw_str: "2019-04-18T05:00:00.000Z",
    forecast_duration: 77,
  },

  /* 79 */
  {
    value_imgw: 4.854,
    value_um: 7.475,
    date_imgw_str: "2019-04-18T06:00:00.000Z",
    forecast_duration: 78,
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
