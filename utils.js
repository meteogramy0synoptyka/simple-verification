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

let researchData = [
  /* 1 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-01T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 0,
  },

  /* 2 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-01T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 1,
  },

  /* 3 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-01T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 4 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-01T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 5 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-01T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 5,
  },

  /* 6 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-01T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 6,
  },

  /* 7 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-02T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 8 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-02T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 9 */
  {
    value_um: -0.525,
    date_um_str: "2016-03-02T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 5,
  },

  /* 10 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-02T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 6,
  },

  /* 11 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-08T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 12 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-08T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 13 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-08T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 53,
  },

  /* 14 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-08T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 46,
  },

  /* 15 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-08T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 22,
  },

  /* 16 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-08T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 71,
  },

  /* 17 */
  {
    value_um: -0.525,
    date_um_str: "2016-03-08T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 47,
  },

  /* 18 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-08T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 23,
  },

  /* 19 */
  {
    value_um: -1.025,
    date_um_str: "2016-03-09T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 72,
  },

  /* 20 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-09T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 48,
  },

  /* 21 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-09T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 24,
  },

  /* 22 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-09T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 0,
  },

  /* 23 */
  {
    value_um: -0.525,
    date_um_str: "2016-03-09T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 49,
  },

  /* 24 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-09T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 25,
  },

  /* 25 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-09T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 1,
  },

  /* 26 */
  {
    value_um: -1.025,
    date_um_str: "2016-03-09T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 50,
  },

  /* 27 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-09T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 26,
  },

  /* 28 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-09T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 2,
  },

  /* 29 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-09T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 30 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-09T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 27,
  },

  /* 31 */
  {
    value_um: -0.775,
    date_um_str: "2016-03-09T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 32 */
  {
    value_um: -1.4,
    date_um_str: "2016-03-09T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 33 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-09T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 28,
  },

  /* 34 */
  {
    value_um: -0.525,
    date_um_str: "2016-03-09T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 35 */
  {
    value_um: -1.4,
    date_um_str: "2016-03-09T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 53,
  },

  /* 36 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-09T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 29,
  },

  /* 37 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-09T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 5,
  },

  /* 38 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-09T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 54,
  },

  /* 39 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-09T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 30,
  },

  /* 40 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-13T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 72,
  },

  /* 41 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-13T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 22,
  },

  /* 42 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-13T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 23,
  },

  /* 43 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-14T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 24,
  },

  /* 44 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-14T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 0,
  },

  /* 45 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-14T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 25,
  },

  /* 46 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-14T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 1,
  },

  /* 47 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-14T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 26,
  },

  /* 48 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-14T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 2,
  },

  /* 49 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-14T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 27,
  },

  /* 50 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-14T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 51 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-14T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 28,
  },

  /* 52 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-14T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 53 */
  {
    value_um: -0.525,
    date_um_str: "2016-03-16T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 48,
  },

  /* 54 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-16T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 24,
  },

  /* 55 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-16T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 49,
  },

  /* 56 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-16T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 25,
  },

  /* 57 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-16T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 50,
  },

  /* 58 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-16T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 26,
  },

  /* 59 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-16T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 60 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-16T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 27,
  },

  /* 61 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-16T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 62 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-16T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 63 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-16T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 28,
  },

  /* 64 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-16T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 65 */
  {
    value_um: -1.775,
    date_um_str: "2016-03-16T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 29,
  },

  /* 66 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-16T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 5,
  },

  /* 67 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-16T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 30,
  },

  /* 68 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-18T19:00:00.000Z",
    hour: 19,
    category: 2016,
    forecast_duration: 43,
  },

  /* 69 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-18T20:00:00.000Z",
    hour: 20,
    category: 2016,
    forecast_duration: 44,
  },

  /* 70 */
  {
    value_um: -1.025,
    date_um_str: "2016-03-18T21:00:00.000Z",
    hour: 21,
    category: 2016,
    forecast_duration: 69,
  },

  /* 71 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-18T21:00:00.000Z",
    hour: 21,
    category: 2016,
    forecast_duration: 45,
  },

  /* 72 */
  {
    value_um: -1.775,
    date_um_str: "2016-03-18T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 70,
  },

  /* 73 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-18T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 46,
  },

  /* 74 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-18T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 22,
  },

  /* 75 */
  {
    value_um: -2.275,
    date_um_str: "2016-03-18T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 71,
  },

  /* 76 */
  {
    value_um: -1.65,
    date_um_str: "2016-03-18T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 47,
  },

  /* 77 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-18T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 23,
  },

  /* 78 */
  {
    value_um: -2.275,
    date_um_str: "2016-03-19T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 72,
  },

  /* 79 */
  {
    value_um: -1.9,
    date_um_str: "2016-03-19T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 48,
  },

  /* 80 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-19T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 24,
  },

  /* 81 */
  {
    value_um: -1.9,
    date_um_str: "2016-03-19T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 49,
  },

  /* 82 */
  {
    value_um: -1.525,
    date_um_str: "2016-03-19T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 25,
  },

  /* 83 */
  {
    value_um: -0.775,
    date_um_str: "2016-03-19T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 1,
  },

  /* 84 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-19T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 50,
  },

  /* 85 */
  {
    value_um: -1.525,
    date_um_str: "2016-03-19T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 26,
  },

  /* 86 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-19T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 2,
  },

  /* 87 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-19T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 88 */
  {
    value_um: -2.15,
    date_um_str: "2016-03-19T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 27,
  },

  /* 89 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-19T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 90 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-19T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 91 */
  {
    value_um: -1.9,
    date_um_str: "2016-03-19T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 28,
  },

  /* 92 */
  {
    value_um: -1.025,
    date_um_str: "2016-03-19T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 53,
  },

  /* 93 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-19T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 29,
  },

  /* 94 */
  {
    value_um: -0.525,
    date_um_str: "2016-03-19T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 54,
  },

  /* 95 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-19T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 30,
  },

  /* 96 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-22T20:00:00.000Z",
    hour: 20,
    category: 2016,
    forecast_duration: 68,
  },

  /* 97 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-22T20:00:00.000Z",
    hour: 20,
    category: 2016,
    forecast_duration: 20,
  },

  /* 98 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-22T21:00:00.000Z",
    hour: 21,
    category: 2016,
    forecast_duration: 69,
  },

  /* 99 */
  {
    value_um: -0.65,
    date_um_str: "2016-03-22T21:00:00.000Z",
    hour: 21,
    category: 2016,
    forecast_duration: 21,
  },

  /* 100 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-22T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 70,
  },

  /* 101 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-22T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 22,
  },

  /* 102 */
  {
    value_um: -1.525,
    date_um_str: "2016-03-22T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 71,
  },

  /* 103 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-22T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 47,
  },

  /* 104 */
  {
    value_um: -1.775,
    date_um_str: "2016-03-22T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 23,
  },

  /* 105 */
  {
    value_um: -1.4,
    date_um_str: "2016-03-23T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 72,
  },

  /* 106 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-23T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 48,
  },

  /* 107 */
  {
    value_um: -2.025,
    date_um_str: "2016-03-23T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 24,
  },

  /* 108 */
  {
    value_um: -1.65,
    date_um_str: "2016-03-23T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 0,
  },

  /* 109 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-23T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 49,
  },

  /* 110 */
  {
    value_um: -1.775,
    date_um_str: "2016-03-23T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 25,
  },

  /* 111 */
  {
    value_um: -2.4,
    date_um_str: "2016-03-23T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 1,
  },

  /* 112 */
  {
    value_um: -1.65,
    date_um_str: "2016-03-23T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 26,
  },

  /* 113 */
  {
    value_um: -2.275,
    date_um_str: "2016-03-23T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 2,
  },

  /* 114 */
  {
    value_um: -0.025,
    date_um_str: "2016-03-23T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 115 */
  {
    value_um: -1.525,
    date_um_str: "2016-03-23T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 27,
  },

  /* 116 */
  {
    value_um: -2.025,
    date_um_str: "2016-03-23T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 117 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-23T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 118 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-23T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 28,
  },

  /* 119 */
  {
    value_um: -1.775,
    date_um_str: "2016-03-23T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 120 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-23T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 53,
  },

  /* 121 */
  {
    value_um: -1.15,
    date_um_str: "2016-03-23T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 29,
  },

  /* 122 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-23T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 5,
  },

  /* 123 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-23T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 30,
  },

  /* 124 */
  {
    value_um: -0.275,
    date_um_str: "2016-03-23T06:00:00.000Z",
    hour: 6,
    category: 2016,
    forecast_duration: 6,
  },

  /* 125 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-23T21:00:00.000Z",
    hour: 21,
    category: 2016,
    forecast_duration: 69,
  },

  /* 126 */
  {
    value_um: -0.9,
    date_um_str: "2016-03-23T22:00:00.000Z",
    hour: 22,
    category: 2016,
    forecast_duration: 70,
  },

  /* 127 */
  {
    value_um: -1.275,
    date_um_str: "2016-03-23T23:00:00.000Z",
    hour: 23,
    category: 2016,
    forecast_duration: 71,
  },

  /* 128 */
  {
    value_um: -1.4,
    date_um_str: "2016-03-24T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 72,
  },

  /* 129 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-24T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 50,
  },

  /* 130 */
  {
    value_um: -0.775,
    date_um_str: "2016-03-24T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 131 */
  {
    value_um: -1.4,
    date_um_str: "2016-03-24T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 132 */
  {
    value_um: -1.4,
    date_um_str: "2016-03-24T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 53,
  },

  /* 133 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-25T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 48,
  },

  /* 134 */
  {
    value_um: -0.4,
    date_um_str: "2016-03-25T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 49,
  },

  /* 135 */
  {
    value_um: -0.15,
    date_um_str: "2016-03-27T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 136 */
  {
    value_um: -0.525,
    date_um_str: "2016-04-02T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 51,
  },

  /* 137 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-02T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 138 */
  {
    value_um: -0.775,
    date_um_str: "2016-04-02T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 52,
  },

  /* 139 */
  {
    value_um: -0.275,
    date_um_str: "2016-04-02T04:00:00.000Z",
    hour: 4,
    category: 2016,
    forecast_duration: 4,
  },

  /* 140 */
  {
    value_um: -0.525,
    date_um_str: "2016-04-02T05:00:00.000Z",
    hour: 5,
    category: 2016,
    forecast_duration: 53,
  },

  /* 141 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-26T00:00:00.000Z",
    hour: 0,
    category: 2016,
    forecast_duration: 72,
  },

  /* 142 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-26T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 25,
  },

  /* 143 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-26T01:00:00.000Z",
    hour: 1,
    category: 2016,
    forecast_duration: 1,
  },

  /* 144 */
  {
    value_um: -0.275,
    date_um_str: "2016-04-26T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 26,
  },

  /* 145 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-26T02:00:00.000Z",
    hour: 2,
    category: 2016,
    forecast_duration: 2,
  },

  /* 146 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-26T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 27,
  },

  /* 147 */
  {
    value_um: -0.025,
    date_um_str: "2016-04-26T03:00:00.000Z",
    hour: 3,
    category: 2016,
    forecast_duration: 3,
  },

  /* 1 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-06T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 47,
  },

  /* 2 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-06T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 23,
  },

  /* 3 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-07T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 48,
  },

  /* 4 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-07T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 24,
  },

  /* 5 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-07T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 0,
  },

  /* 6 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-07T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 49,
  },

  /* 7 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-07T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 25,
  },

  /* 8 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-07T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 9 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 10 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 50,
  },

  /* 11 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 26,
  },

  /* 12 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-07T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 13 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-07T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 14 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-07T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 51,
  },

  /* 15 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-07T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 27,
  },

  /* 16 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-07T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 17 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-07T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 18 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-07T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 52,
  },

  /* 19 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-07T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 20 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-07T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 21 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-07T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 77,
  },

  /* 22 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 53,
  },

  /* 23 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 24 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-07T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 25 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-07T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 78,
  },

  /* 26 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-07T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 6,
  },

  /* 27 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T07:00:00.000Z",
    hour: 7,
    category: 2017,
    forecast_duration: 7,
  },

  /* 28 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-07T18:00:00.000Z",
    hour: 18,
    category: 2017,
    forecast_duration: 18,
  },

  /* 29 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T19:00:00.000Z",
    hour: 19,
    category: 2017,
    forecast_duration: 43,
  },

  /* 30 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-07T20:00:00.000Z",
    hour: 20,
    category: 2017,
    forecast_duration: 20,
  },

  /* 31 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-08T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 48,
  },

  /* 32 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-08T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 33 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-08T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 34 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-08T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 35 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-08T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 52,
  },

  /* 36 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-08T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 37 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-08T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 53,
  },

  /* 38 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-08T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 39 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-08T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 40 */
  {
    value_um: -0.9,
    date_um_str: "2017-03-08T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 54,
  },

  /* 41 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-08T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 30,
  },

  /* 42 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-08T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 6,
  },

  /* 43 */
  {
    value_um: -0.775,
    date_um_str: "2017-03-08T07:00:00.000Z",
    hour: 7,
    category: 2017,
    forecast_duration: 55,
  },

  /* 44 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-08T07:00:00.000Z",
    hour: 7,
    category: 2017,
    forecast_duration: 31,
  },

  /* 45 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-08T08:00:00.000Z",
    hour: 8,
    category: 2017,
    forecast_duration: 56,
  },

  /* 46 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-12T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 0,
  },

  /* 47 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-12T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 48 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-12T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 49 */
  {
    value_um: -1.4,
    date_um_str: "2017-03-12T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 50 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-12T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 30,
  },

  /* 51 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-12T20:00:00.000Z",
    hour: 20,
    category: 2017,
    forecast_duration: 20,
  },

  /* 52 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-12T21:00:00.000Z",
    hour: 21,
    category: 2017,
    forecast_duration: 45,
  },

  /* 53 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-12T21:00:00.000Z",
    hour: 21,
    category: 2017,
    forecast_duration: 21,
  },

  /* 54 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-12T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 46,
  },

  /* 55 */
  {
    value_um: -1.025,
    date_um_str: "2017-03-12T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 22,
  },

  /* 56 */
  {
    value_um: -1.525,
    date_um_str: "2017-03-12T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 23,
  },

  /* 57 */
  {
    value_um: -1.775,
    date_um_str: "2017-03-13T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 24,
  },

  /* 58 */
  {
    value_um: -1.275,
    date_um_str: "2017-03-13T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 0,
  },

  /* 59 */
  {
    value_um: -1.775,
    date_um_str: "2017-03-13T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 25,
  },

  /* 60 */
  {
    value_um: -2.025,
    date_um_str: "2017-03-13T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 61 */
  {
    value_um: -1.275,
    date_um_str: "2017-03-13T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 26,
  },

  /* 62 */
  {
    value_um: -2.275,
    date_um_str: "2017-03-13T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 63 */
  {
    value_um: -0.9,
    date_um_str: "2017-03-13T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 27,
  },

  /* 64 */
  {
    value_um: -2.15,
    date_um_str: "2017-03-13T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 65 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-13T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 66 */
  {
    value_um: -1.9,
    date_um_str: "2017-03-13T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 67 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-13T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 68 */
  {
    value_um: -1.9,
    date_um_str: "2017-03-13T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 69 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-13T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 30,
  },

  /* 70 */
  {
    value_um: -1.65,
    date_um_str: "2017-03-13T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 6,
  },

  /* 71 */
  {
    value_um: -1.275,
    date_um_str: "2017-03-13T07:00:00.000Z",
    hour: 7,
    category: 2017,
    forecast_duration: 7,
  },

  /* 72 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-13T08:00:00.000Z",
    hour: 8,
    category: 2017,
    forecast_duration: 8,
  },

  /* 73 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-13T21:00:00.000Z",
    hour: 21,
    category: 2017,
    forecast_duration: 69,
  },

  /* 74 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-13T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 70,
  },

  /* 75 */
  {
    value_um: -0.9,
    date_um_str: "2017-03-13T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 71,
  },

  /* 76 */
  {
    value_um: -1.275,
    date_um_str: "2017-03-14T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 72,
  },

  /* 77 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-14T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 73,
  },

  /* 78 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-14T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 79 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-14T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 80 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-14T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 81 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-14T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 82 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-14T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 83 */
  {
    value_um: -0.9,
    date_um_str: "2017-03-14T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 84 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-14T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 85 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-19T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 86 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-19T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 87 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-19T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 77,
  },

  /* 88 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-22T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 71,
  },

  /* 89 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-23T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 72,
  },

  /* 90 */
  {
    value_um: -0.9,
    date_um_str: "2017-03-23T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 73,
  },

  /* 91 */
  {
    value_um: -1.275,
    date_um_str: "2017-03-23T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 92 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-23T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 93 */
  {
    value_um: -1.525,
    date_um_str: "2017-03-23T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 94 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-23T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 51,
  },

  /* 95 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-23T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 27,
  },

  /* 96 */
  {
    value_um: -0.15,
    date_um_str: "2017-03-23T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 97 */
  {
    value_um: -1.9,
    date_um_str: "2017-03-23T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 98 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-23T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 52,
  },

  /* 99 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-23T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 100 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-23T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 101 */
  {
    value_um: -1.9,
    date_um_str: "2017-03-23T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 77,
  },

  /* 102 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-23T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 53,
  },

  /* 103 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-23T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 104 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-23T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 105 */
  {
    value_um: -0.65,
    date_um_str: "2017-03-26T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 106 */
  {
    value_um: -0.275,
    date_um_str: "2017-03-26T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 107 */
  {
    value_um: -0.525,
    date_um_str: "2017-03-26T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 108 */
  {
    value_um: -1.275,
    date_um_str: "2017-03-26T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 109 */
  {
    value_um: -0.4,
    date_um_str: "2017-03-26T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 110 */
  {
    value_um: -1.525,
    date_um_str: "2017-03-26T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 111 */
  {
    value_um: -0.025,
    date_um_str: "2017-03-26T06:00:00.000Z",
    hour: 6,
    category: 2017,
    forecast_duration: 6,
  },

  /* 112 */
  {
    value_um: -0.4,
    date_um_str: "2017-04-16T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 71,
  },

  /* 113 */
  {
    value_um: -0.15,
    date_um_str: "2017-04-16T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 47,
  },

  /* 114 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-16T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 23,
  },

  /* 115 */
  {
    value_um: -0.65,
    date_um_str: "2017-04-17T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 72,
  },

  /* 116 */
  {
    value_um: -0.15,
    date_um_str: "2017-04-17T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 48,
  },

  /* 117 */
  {
    value_um: -1.15,
    date_um_str: "2017-04-17T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 24,
  },

  /* 118 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-17T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 73,
  },

  /* 119 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-17T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 49,
  },

  /* 120 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-17T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 25,
  },

  /* 121 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-17T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 122 */
  {
    value_um: -1.775,
    date_um_str: "2017-04-17T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 123 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-17T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 50,
  },

  /* 124 */
  {
    value_um: -1.525,
    date_um_str: "2017-04-17T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 26,
  },

  /* 125 */
  {
    value_um: -1.4,
    date_um_str: "2017-04-17T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 126 */
  {
    value_um: -1.775,
    date_um_str: "2017-04-17T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 127 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-17T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 51,
  },

  /* 128 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-17T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 27,
  },

  /* 129 */
  {
    value_um: -1.525,
    date_um_str: "2017-04-17T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 130 */
  {
    value_um: -1.525,
    date_um_str: "2017-04-17T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 131 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-17T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 52,
  },

  /* 132 */
  {
    value_um: -0.025,
    date_um_str: "2017-04-17T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 133 */
  {
    value_um: -1.525,
    date_um_str: "2017-04-17T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 134 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-17T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 135 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-18T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 0,
  },

  /* 136 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-18T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 137 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-18T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 138 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-18T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 139 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-18T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 140 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-19T21:00:00.000Z",
    hour: 21,
    category: 2017,
    forecast_duration: 69,
  },

  /* 141 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-19T21:00:00.000Z",
    hour: 21,
    category: 2017,
    forecast_duration: 21,
  },

  /* 142 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-19T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 70,
  },

  /* 143 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-19T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 46,
  },

  /* 144 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-19T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 22,
  },

  /* 145 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-19T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 71,
  },

  /* 146 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-19T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 47,
  },

  /* 147 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-19T23:00:00.000Z",
    hour: 23,
    category: 2017,
    forecast_duration: 23,
  },

  /* 148 */
  {
    value_um: -1.9,
    date_um_str: "2017-04-20T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 72,
  },

  /* 149 */
  {
    value_um: -0.9,
    date_um_str: "2017-04-20T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 48,
  },

  /* 150 */
  {
    value_um: -1.525,
    date_um_str: "2017-04-20T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 24,
  },

  /* 151 */
  {
    value_um: -2.15,
    date_um_str: "2017-04-20T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 0,
  },

  /* 152 */
  {
    value_um: -2.4,
    date_um_str: "2017-04-20T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 73,
  },

  /* 153 */
  {
    value_um: -1.275,
    date_um_str: "2017-04-20T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 49,
  },

  /* 154 */
  {
    value_um: -1.775,
    date_um_str: "2017-04-20T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 25,
  },

  /* 155 */
  {
    value_um: -2.275,
    date_um_str: "2017-04-20T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 156 */
  {
    value_um: -2.775,
    date_um_str: "2017-04-20T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 157 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-20T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 50,
  },

  /* 158 */
  {
    value_um: -2.025,
    date_um_str: "2017-04-20T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 26,
  },

  /* 159 */
  {
    value_um: -3.025,
    date_um_str: "2017-04-20T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 160 */
  {
    value_um: -2.9,
    date_um_str: "2017-04-20T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 161 */
  {
    value_um: -1.65,
    date_um_str: "2017-04-20T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 51,
  },

  /* 162 */
  {
    value_um: -1.525,
    date_um_str: "2017-04-20T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 27,
  },

  /* 163 */
  {
    value_um: -2.525,
    date_um_str: "2017-04-20T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 164 */
  {
    value_um: -3.4,
    date_um_str: "2017-04-20T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 165 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-20T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 52,
  },

  /* 166 */
  {
    value_um: -2.65,
    date_um_str: "2017-04-20T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 28,
  },

  /* 167 */
  {
    value_um: -3.025,
    date_um_str: "2017-04-20T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 168 */
  {
    value_um: -2.15,
    date_um_str: "2017-04-20T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 77,
  },

  /* 169 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-20T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 29,
  },

  /* 170 */
  {
    value_um: -1.4,
    date_um_str: "2017-04-20T05:00:00.000Z",
    hour: 5,
    category: 2017,
    forecast_duration: 5,
  },

  /* 171 */
  {
    value_um: -0.15,
    date_um_str: "2017-04-27T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 72,
  },

  /* 172 */
  {
    value_um: -0.025,
    date_um_str: "2017-04-27T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 48,
  },

  /* 173 */
  {
    value_um: -0.4,
    date_um_str: "2017-04-27T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 73,
  },

  /* 174 */
  {
    value_um: -0.275,
    date_um_str: "2017-04-27T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 49,
  },

  /* 175 */
  {
    value_um: -0.025,
    date_um_str: "2017-04-27T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 1,
  },

  /* 176 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-27T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 177 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-27T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 50,
  },

  /* 178 */
  {
    value_um: -0.525,
    date_um_str: "2017-04-27T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 2,
  },

  /* 179 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-27T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 180 */
  {
    value_um: -0.9,
    date_um_str: "2017-04-27T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 51,
  },

  /* 181 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-27T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 3,
  },

  /* 182 */
  {
    value_um: -0.775,
    date_um_str: "2017-04-27T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 183 */
  {
    value_um: -1.025,
    date_um_str: "2017-04-27T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 52,
  },

  /* 184 */
  {
    value_um: -0.65,
    date_um_str: "2017-04-27T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 4,
  },

  /* 185 */
  {
    value_um: -0.025,
    date_um_str: "2017-05-09T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 51,
  },

  /* 186 */
  {
    value_um: -0.15,
    date_um_str: "2017-05-10T22:00:00.000Z",
    hour: 22,
    category: 2017,
    forecast_duration: 70,
  },

  /* 187 */
  {
    value_um: -0.525,
    date_um_str: "2017-05-11T00:00:00.000Z",
    hour: 0,
    category: 2017,
    forecast_duration: 72,
  },

  /* 188 */
  {
    value_um: -0.9,
    date_um_str: "2017-05-11T01:00:00.000Z",
    hour: 1,
    category: 2017,
    forecast_duration: 73,
  },

  /* 189 */
  {
    value_um: -1.15,
    date_um_str: "2017-05-11T02:00:00.000Z",
    hour: 2,
    category: 2017,
    forecast_duration: 74,
  },

  /* 190 */
  {
    value_um: -1.4,
    date_um_str: "2017-05-11T03:00:00.000Z",
    hour: 3,
    category: 2017,
    forecast_duration: 75,
  },

  /* 191 */
  {
    value_um: -0.275,
    date_um_str: "2017-05-11T04:00:00.000Z",
    hour: 4,
    category: 2017,
    forecast_duration: 76,
  },

  /* 1 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-01T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 2 */
  {
    value_um: -9.275,
    date_um_str: "2018-03-01T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 3 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-01T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 4 */
  {
    value_um: -8.775,
    date_um_str: "2018-03-01T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 5 */
  {
    value_um: -8.525,
    date_um_str: "2018-03-01T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 6 */
  {
    value_um: -8.275,
    date_um_str: "2018-03-01T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 7 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-01T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 8 */
  {
    value_um: -7.775,
    date_um_str: "2018-03-01T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 9 */
  {
    value_um: -7.025,
    date_um_str: "2018-03-01T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 10 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-01T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 11 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-01T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 12 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-01T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 13 */
  {
    value_um: -7.9,
    date_um_str: "2018-03-01T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 14 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-01T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 15 */
  {
    value_um: -8.15,
    date_um_str: "2018-03-01T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 16 */
  {
    value_um: -8.775,
    date_um_str: "2018-03-01T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 17 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-01T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 16,
  },

  /* 18 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-01T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 17,
  },

  /* 19 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-01T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 18,
  },

  /* 20 */
  {
    value_um: -8.65,
    date_um_str: "2018-03-01T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 19,
  },

  /* 21 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-01T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 20,
  },

  /* 22 */
  {
    value_um: -8.15,
    date_um_str: "2018-03-01T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 21,
  },

  /* 23 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-01T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 22,
  },

  /* 24 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-01T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 23,
  },

  /* 25 */
  {
    value_um: -9.4,
    date_um_str: "2018-03-02T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 24,
  },

  /* 26 */
  {
    value_um: -8.775,
    date_um_str: "2018-03-02T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 27 */
  {
    value_um: -9.775,
    date_um_str: "2018-03-02T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 25,
  },

  /* 28 */
  {
    value_um: -8.525,
    date_um_str: "2018-03-02T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 29 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-02T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 26,
  },

  /* 30 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-02T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 31 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-02T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 27,
  },

  /* 32 */
  {
    value_um: -9.65,
    date_um_str: "2018-03-02T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 33 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-02T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 28,
  },

  /* 34 */
  {
    value_um: -9.65,
    date_um_str: "2018-03-02T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 35 */
  {
    value_um: -11.15,
    date_um_str: "2018-03-02T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 29,
  },

  /* 36 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-02T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 37 */
  {
    value_um: -11.15,
    date_um_str: "2018-03-02T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 30,
  },

  /* 38 */
  {
    value_um: -10.15,
    date_um_str: "2018-03-02T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 39 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-02T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 31,
  },

  /* 40 */
  {
    value_um: -10.275,
    date_um_str: "2018-03-02T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 41 */
  {
    value_um: -10.025,
    date_um_str: "2018-03-02T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 32,
  },

  /* 42 */
  {
    value_um: -9.525,
    date_um_str: "2018-03-02T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 43 */
  {
    value_um: -9.65,
    date_um_str: "2018-03-02T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 33,
  },

  /* 44 */
  {
    value_um: -8.775,
    date_um_str: "2018-03-02T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 45 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-02T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 34,
  },

  /* 46 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-02T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 47 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-02T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 35,
  },

  /* 48 */
  {
    value_um: -7.4,
    date_um_str: "2018-03-02T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 49 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-02T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 36,
  },

  /* 50 */
  {
    value_um: -6.775,
    date_um_str: "2018-03-02T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 51 */
  {
    value_um: -6.65,
    date_um_str: "2018-03-02T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 37,
  },

  /* 52 */
  {
    value_um: -6.525,
    date_um_str: "2018-03-02T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 53 */
  {
    value_um: -6.65,
    date_um_str: "2018-03-02T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 38,
  },

  /* 54 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-02T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 55 */
  {
    value_um: -6.775,
    date_um_str: "2018-03-02T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 39,
  },

  /* 56 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-02T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 57 */
  {
    value_um: -6.775,
    date_um_str: "2018-03-02T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 40,
  },

  /* 58 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-02T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 16,
  },

  /* 59 */
  {
    value_um: -6.275,
    date_um_str: "2018-03-02T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 41,
  },

  /* 60 */
  {
    value_um: -7.275,
    date_um_str: "2018-03-02T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 17,
  },

  /* 61 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-02T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 42,
  },

  /* 62 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-02T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 18,
  },

  /* 63 */
  {
    value_um: -6.775,
    date_um_str: "2018-03-02T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 43,
  },

  /* 64 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-02T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 19,
  },

  /* 65 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-02T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 44,
  },

  /* 66 */
  {
    value_um: -5.9,
    date_um_str: "2018-03-02T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 20,
  },

  /* 67 */
  {
    value_um: -5.775,
    date_um_str: "2018-03-02T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 45,
  },

  /* 68 */
  {
    value_um: -5.775,
    date_um_str: "2018-03-02T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 21,
  },

  /* 69 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-02T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 46,
  },

  /* 70 */
  {
    value_um: -5.275,
    date_um_str: "2018-03-02T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 22,
  },

  /* 71 */
  {
    value_um: -7.4,
    date_um_str: "2018-03-02T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 47,
  },

  /* 72 */
  {
    value_um: -5.025,
    date_um_str: "2018-03-02T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 23,
  },

  /* 73 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-03T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 48,
  },

  /* 74 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-03T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 24,
  },

  /* 75 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-03T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 76 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-03T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 49,
  },

  /* 77 */
  {
    value_um: -4.775,
    date_um_str: "2018-03-03T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 25,
  },

  /* 78 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-03T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 79 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-03T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 50,
  },

  /* 80 */
  {
    value_um: -4.775,
    date_um_str: "2018-03-03T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 26,
  },

  /* 81 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-03T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 82 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-03T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 51,
  },

  /* 83 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-03T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 27,
  },

  /* 84 */
  {
    value_um: -6.525,
    date_um_str: "2018-03-03T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 85 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-03T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 52,
  },

  /* 86 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-03T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 28,
  },

  /* 87 */
  {
    value_um: -5.775,
    date_um_str: "2018-03-03T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 88 */
  {
    value_um: -9.275,
    date_um_str: "2018-03-03T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 53,
  },

  /* 89 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-03T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 29,
  },

  /* 90 */
  {
    value_um: -5.4,
    date_um_str: "2018-03-03T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 91 */
  {
    value_um: -9.525,
    date_um_str: "2018-03-03T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 54,
  },

  /* 92 */
  {
    value_um: -4.4,
    date_um_str: "2018-03-03T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 30,
  },

  /* 93 */
  {
    value_um: -5.4,
    date_um_str: "2018-03-03T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 94 */
  {
    value_um: -7.275,
    date_um_str: "2018-03-03T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 55,
  },

  /* 95 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-03T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 31,
  },

  /* 96 */
  {
    value_um: -5.525,
    date_um_str: "2018-03-03T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 97 */
  {
    value_um: -5.65,
    date_um_str: "2018-03-03T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 56,
  },

  /* 98 */
  {
    value_um: -4.025,
    date_um_str: "2018-03-03T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 32,
  },

  /* 99 */
  {
    value_um: -5.15,
    date_um_str: "2018-03-03T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 100 */
  {
    value_um: -4.525,
    date_um_str: "2018-03-03T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 57,
  },

  /* 101 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-03T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 33,
  },

  /* 102 */
  {
    value_um: -4.775,
    date_um_str: "2018-03-03T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 103 */
  {
    value_um: -3.775,
    date_um_str: "2018-03-03T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 58,
  },

  /* 104 */
  {
    value_um: -3.15,
    date_um_str: "2018-03-03T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 34,
  },

  /* 105 */
  {
    value_um: -4.4,
    date_um_str: "2018-03-03T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 106 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-03T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 59,
  },

  /* 107 */
  {
    value_um: -3.15,
    date_um_str: "2018-03-03T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 35,
  },

  /* 108 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-03T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 109 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-03T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 60,
  },

  /* 110 */
  {
    value_um: -3.275,
    date_um_str: "2018-03-03T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 36,
  },

  /* 111 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-03T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 112 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-03T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 61,
  },

  /* 113 */
  {
    value_um: -3.275,
    date_um_str: "2018-03-03T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 37,
  },

  /* 114 */
  {
    value_um: -4.025,
    date_um_str: "2018-03-03T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 115 */
  {
    value_um: -3.775,
    date_um_str: "2018-03-03T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 62,
  },

  /* 116 */
  {
    value_um: -3.4,
    date_um_str: "2018-03-03T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 38,
  },

  /* 117 */
  {
    value_um: -4.15,
    date_um_str: "2018-03-03T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 118 */
  {
    value_um: -4.15,
    date_um_str: "2018-03-03T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 63,
  },

  /* 119 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-03T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 39,
  },

  /* 120 */
  {
    value_um: -4.4,
    date_um_str: "2018-03-03T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 121 */
  {
    value_um: -4.4,
    date_um_str: "2018-03-03T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 64,
  },

  /* 122 */
  {
    value_um: -3.775,
    date_um_str: "2018-03-03T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 40,
  },

  /* 123 */
  {
    value_um: -4.525,
    date_um_str: "2018-03-03T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 16,
  },

  /* 124 */
  {
    value_um: -4.4,
    date_um_str: "2018-03-03T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 65,
  },

  /* 125 */
  {
    value_um: -3.775,
    date_um_str: "2018-03-03T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 41,
  },

  /* 126 */
  {
    value_um: -5.025,
    date_um_str: "2018-03-03T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 17,
  },

  /* 127 */
  {
    value_um: -4.525,
    date_um_str: "2018-03-03T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 66,
  },

  /* 128 */
  {
    value_um: -3.9,
    date_um_str: "2018-03-03T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 42,
  },

  /* 129 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-03T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 18,
  },

  /* 130 */
  {
    value_um: -4.525,
    date_um_str: "2018-03-03T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 67,
  },

  /* 131 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-03T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 43,
  },

  /* 132 */
  {
    value_um: -5.15,
    date_um_str: "2018-03-03T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 19,
  },

  /* 133 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-03T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 68,
  },

  /* 134 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-03T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 44,
  },

  /* 135 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-03T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 20,
  },

  /* 136 */
  {
    value_um: -5.4,
    date_um_str: "2018-03-03T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 69,
  },

  /* 137 */
  {
    value_um: -4.4,
    date_um_str: "2018-03-03T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 45,
  },

  /* 138 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-03T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 21,
  },

  /* 139 */
  {
    value_um: -5.15,
    date_um_str: "2018-03-03T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 70,
  },

  /* 140 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-03T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 46,
  },

  /* 141 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-03T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 22,
  },

  /* 142 */
  {
    value_um: -4.775,
    date_um_str: "2018-03-03T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 71,
  },

  /* 143 */
  {
    value_um: -4.525,
    date_um_str: "2018-03-03T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 47,
  },

  /* 144 */
  {
    value_um: -4.525,
    date_um_str: "2018-03-03T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 23,
  },

  /* 145 */
  {
    value_um: -4.775,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 72,
  },

  /* 146 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 48,
  },

  /* 147 */
  {
    value_um: -4.65,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 24,
  },

  /* 148 */
  {
    value_um: -6.275,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 149 */
  {
    value_um: -5.4,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 73,
  },

  /* 150 */
  {
    value_um: -6.275,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 49,
  },

  /* 151 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 25,
  },

  /* 152 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 153 */
  {
    value_um: -5.775,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 74,
  },

  /* 154 */
  {
    value_um: -6.15,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 50,
  },

  /* 155 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 26,
  },

  /* 156 */
  {
    value_um: -6.025,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 157 */
  {
    value_um: -6.275,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 75,
  },

  /* 158 */
  {
    value_um: -6.275,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 51,
  },

  /* 159 */
  {
    value_um: -4.15,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 27,
  },

  /* 160 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 161 */
  {
    value_um: -6.525,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 76,
  },

  /* 162 */
  {
    value_um: -6.15,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 52,
  },

  /* 163 */
  {
    value_um: -4.15,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 28,
  },

  /* 164 */
  {
    value_um: -4.15,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 165 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 77,
  },

  /* 166 */
  {
    value_um: -4.9,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 53,
  },

  /* 167 */
  {
    value_um: -4.025,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 29,
  },

  /* 168 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 169 */
  {
    value_um: -6.65,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 78,
  },

  /* 170 */
  {
    value_um: -4.275,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 54,
  },

  /* 171 */
  {
    value_um: -3.9,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 30,
  },

  /* 172 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 173 */
  {
    value_um: -3.9,
    date_um_str: "2018-03-04T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 55,
  },

  /* 174 */
  {
    value_um: -3.525,
    date_um_str: "2018-03-04T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 31,
  },

  /* 175 */
  {
    value_um: -3.15,
    date_um_str: "2018-03-04T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 176 */
  {
    value_um: -3.15,
    date_um_str: "2018-03-04T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 56,
  },

  /* 177 */
  {
    value_um: -2.9,
    date_um_str: "2018-03-04T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 32,
  },

  /* 178 */
  {
    value_um: -2.65,
    date_um_str: "2018-03-04T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 179 */
  {
    value_um: -2.65,
    date_um_str: "2018-03-04T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 57,
  },

  /* 180 */
  {
    value_um: -2.275,
    date_um_str: "2018-03-04T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 33,
  },

  /* 181 */
  {
    value_um: -2.15,
    date_um_str: "2018-03-04T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 182 */
  {
    value_um: -1.9,
    date_um_str: "2018-03-04T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 58,
  },

  /* 183 */
  {
    value_um: -1.9,
    date_um_str: "2018-03-04T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 34,
  },

  /* 184 */
  {
    value_um: -1.775,
    date_um_str: "2018-03-04T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 185 */
  {
    value_um: -1.4,
    date_um_str: "2018-03-04T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 59,
  },

  /* 186 */
  {
    value_um: -1.525,
    date_um_str: "2018-03-04T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 35,
  },

  /* 187 */
  {
    value_um: -1.4,
    date_um_str: "2018-03-04T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 188 */
  {
    value_um: -1.15,
    date_um_str: "2018-03-04T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 60,
  },

  /* 189 */
  {
    value_um: -1.15,
    date_um_str: "2018-03-04T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 36,
  },

  /* 190 */
  {
    value_um: -1.025,
    date_um_str: "2018-03-04T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 191 */
  {
    value_um: -1.275,
    date_um_str: "2018-03-04T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 61,
  },

  /* 192 */
  {
    value_um: -1.15,
    date_um_str: "2018-03-04T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 37,
  },

  /* 193 */
  {
    value_um: -0.775,
    date_um_str: "2018-03-04T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 194 */
  {
    value_um: -1.275,
    date_um_str: "2018-03-04T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 62,
  },

  /* 195 */
  {
    value_um: -1.025,
    date_um_str: "2018-03-04T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 38,
  },

  /* 196 */
  {
    value_um: -0.65,
    date_um_str: "2018-03-04T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 197 */
  {
    value_um: -1.65,
    date_um_str: "2018-03-04T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 63,
  },

  /* 198 */
  {
    value_um: -1.025,
    date_um_str: "2018-03-04T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 39,
  },

  /* 199 */
  {
    value_um: -0.65,
    date_um_str: "2018-03-04T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 200 */
  {
    value_um: -2.275,
    date_um_str: "2018-03-04T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 64,
  },

  /* 1 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-01T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 2 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-01T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 3 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-01T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 18,
  },

  /* 4 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-01T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 19,
  },

  /* 5 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-01T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 20,
  },

  /* 6 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-01T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 21,
  },

  /* 7 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-01T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 22,
  },

  /* 8 */
  {
    value_um: -2.275,
    date_um_str: "2019-03-01T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 23,
  },

  /* 9 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-02T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 10 */
  {
    value_um: -2.15,
    date_um_str: "2019-03-02T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 0,
  },

  /* 11 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 12 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 13 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 14 */
  {
    value_um: -2.275,
    date_um_str: "2019-03-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 15 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 16 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 17 */
  {
    value_um: -2.65,
    date_um_str: "2019-03-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 18 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 19 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 20 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 21 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-02T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 30,
  },

  /* 22 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-02T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 23 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-02T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 31,
  },

  /* 24 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-02T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 7,
  },

  /* 25 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-20T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 26 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-20T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 27 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-20T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 28 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-20T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 29 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-20T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 30 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-20T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 75,
  },

  /* 31 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-20T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 32 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-20T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 33 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-20T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 76,
  },

  /* 34 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-20T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 35 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-20T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 36 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-20T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 37 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-20T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 77,
  },

  /* 38 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-20T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 39 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-20T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 40 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-20T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 41 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-20T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 54,
  },

  /* 42 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-26T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 43 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-26T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 44 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-26T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 45 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-26T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 46 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-26T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 47 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-26T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 48 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-26T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 46,
  },

  /* 49 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-26T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 71,
  },

  /* 50 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-26T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 47,
  },

  /* 51 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-26T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 23,
  },

  /* 52 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-27T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 72,
  },

  /* 53 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-27T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 48,
  },

  /* 54 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-27T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 55 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-27T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 73,
  },

  /* 56 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-27T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 49,
  },

  /* 57 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-27T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 58 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-27T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 59 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-27T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 74,
  },

  /* 60 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-27T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 50,
  },

  /* 61 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-27T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 62 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-27T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 63 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-27T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 51,
  },

  /* 64 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-27T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 65 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-27T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 66 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-27T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 67 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-27T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 68 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-27T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 69 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-27T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 70 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-27T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 71 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-27T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 54,
  },

  /* 72 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-01T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 73 */
  {
    value_um: -0.275,
    date_um_str: "2019-04-01T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 74 */
  {
    value_um: -0.65,
    date_um_str: "2019-04-01T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 75 */
  {
    value_um: -0.9,
    date_um_str: "2019-04-01T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 76 */
  {
    value_um: -0.4,
    date_um_str: "2019-04-01T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 77 */
  {
    value_um: -1.4,
    date_um_str: "2019-04-01T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 78 */
  {
    value_um: -0.4,
    date_um_str: "2019-04-01T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 79 */
  {
    value_um: -1.275,
    date_um_str: "2019-04-01T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 80 */
  {
    value_um: -0.4,
    date_um_str: "2019-04-01T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 71,
  },

  /* 81 */
  {
    value_um: -0.775,
    date_um_str: "2019-04-02T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 72,
  },

  /* 82 */
  {
    value_um: -1.275,
    date_um_str: "2019-04-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 73,
  },

  /* 83 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 84 */
  {
    value_um: -1.4,
    date_um_str: "2019-04-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 74,
  },

  /* 85 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 86 */
  {
    value_um: -1.4,
    date_um_str: "2019-04-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 75,
  },

  /* 87 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 88 */
  {
    value_um: -1.4,
    date_um_str: "2019-04-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 76,
  },

  /* 89 */
  {
    value_um: -0.525,
    date_um_str: "2019-04-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 90 */
  {
    value_um: -0.9,
    date_um_str: "2019-04-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 77,
  },

  /* 91 */
  {
    value_um: -0.275,
    date_um_str: "2019-04-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 92 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-09T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 69,
  },

  /* 93 */
  {
    value_um: -0.025,
    date_um_str: "2019-04-09T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 21,
  },

  /* 94 */
  {
    value_um: -0.65,
    date_um_str: "2019-04-09T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 70,
  },

  /* 95 */
  {
    value_um: -0.525,
    date_um_str: "2019-04-09T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 22,
  },

  /* 96 */
  {
    value_um: -0.65,
    date_um_str: "2019-04-09T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 71,
  },

  /* 97 */
  {
    value_um: -1.15,
    date_um_str: "2019-04-10T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 72,
  },

  /* 98 */
  {
    value_um: -1.525,
    date_um_str: "2019-04-10T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 0,
  },

  /* 99 */
  {
    value_um: -1.775,
    date_um_str: "2019-04-10T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 73,
  },

  /* 100 */
  {
    value_um: -2.025,
    date_um_str: "2019-04-10T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 101 */
  {
    value_um: -2.025,
    date_um_str: "2019-04-10T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 74,
  },

  /* 102 */
  {
    value_um: -2.525,
    date_um_str: "2019-04-10T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 103 */
  {
    value_um: -2.65,
    date_um_str: "2019-04-10T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 75,
  },

  /* 104 */
  {
    value_um: -1.775,
    date_um_str: "2019-04-10T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 105 */
  {
    value_um: -3.15,
    date_um_str: "2019-04-10T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 76,
  },

  /* 106 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-10T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 107 */
  {
    value_um: -1.775,
    date_um_str: "2019-04-10T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 77,
  },

  /* 108 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-10T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 78,
  },

  /* 109 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-13T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 110 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-16T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 75,
  },

  /* 111 */
  {
    value_um: -0.525,
    date_um_str: "2019-04-16T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 76,
  },

  /* 112 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-20T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 113 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-20T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 51,
  },

  /* 114 */
  {
    value_um: -0.15,
    date_um_str: "2019-04-20T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 115 */
  {
    value_um: -0.025,
    date_um_str: "2019-05-06T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },
];

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
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

let diagonal = forecast.map((v) => ({
  value_imgw: v.value_imgw,
  value_um: v.value_imgw,
  category: "diagonal",
}));

let chart = new Taucharts.Chart({
  guide: {
    color: {
      brewer: {
        diagonal: "rgb(200, 200, 200)",
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

let chart3 = new Taucharts.Chart({
  type: "scatterplot",
  data: researchData,
  x: "hour",
  y: "value_um",
  color: "category",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart3.renderTo("#look_for_good_cases");

researchData;
