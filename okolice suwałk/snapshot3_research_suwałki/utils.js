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
    value_um: -0.65,
    date_um_str: "2019-03-01T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 2 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-01T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 3 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-01T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 4 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-01T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 5 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-01T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 6 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-01T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 7 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-01T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 7,
  },

  /* 8 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-01T08:00:00.000Z",
    hour: 8,
    category: 2019,
    forecast_duration: 8,
  },

  /* 9 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-01T09:00:00.000Z",
    hour: 9,
    category: 2019,
    forecast_duration: 9,
  },

  /* 10 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-01T10:00:00.000Z",
    hour: 10,
    category: 2019,
    forecast_duration: 10,
  },

  /* 11 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-01T11:00:00.000Z",
    hour: 11,
    category: 2019,
    forecast_duration: 11,
  },

  /* 12 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-01T13:00:00.000Z",
    hour: 13,
    category: 2019,
    forecast_duration: 13,
  },

  /* 13 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-01T14:00:00.000Z",
    hour: 14,
    category: 2019,
    forecast_duration: 14,
  },

  /* 14 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-01T15:00:00.000Z",
    hour: 15,
    category: 2019,
    forecast_duration: 15,
  },

  /* 15 */
  {
    value_um: -2.275,
    date_um_str: "2019-03-01T16:00:00.000Z",
    hour: 16,
    category: 2019,
    forecast_duration: 16,
  },

  /* 16 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-01T17:00:00.000Z",
    hour: 17,
    category: 2019,
    forecast_duration: 17,
  },

  /* 17 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-01T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 18,
  },

  /* 18 */
  {
    value_um: -3.4,
    date_um_str: "2019-03-01T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 19,
  },

  /* 19 */
  {
    value_um: -3.65,
    date_um_str: "2019-03-01T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 20,
  },

  /* 20 */
  {
    value_um: -3.275,
    date_um_str: "2019-03-01T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 21,
  },

  /* 21 */
  {
    value_um: -3.275,
    date_um_str: "2019-03-01T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 22,
  },

  /* 22 */
  {
    value_um: -3.775,
    date_um_str: "2019-03-01T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 23,
  },

  /* 23 */
  {
    value_um: -3.775,
    date_um_str: "2019-03-02T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 24 */
  {
    value_um: -3.9,
    date_um_str: "2019-03-02T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 0,
  },

  /* 25 */
  {
    value_um: -4.15,
    date_um_str: "2019-03-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 26 */
  {
    value_um: -3.775,
    date_um_str: "2019-03-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 27 */
  {
    value_um: -4.275,
    date_um_str: "2019-03-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 28 */
  {
    value_um: -4.15,
    date_um_str: "2019-03-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 29 */
  {
    value_um: -4.4,
    date_um_str: "2019-03-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 30 */
  {
    value_um: -4.4,
    date_um_str: "2019-03-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 31 */
  {
    value_um: -4.275,
    date_um_str: "2019-03-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 32 */
  {
    value_um: -4.65,
    date_um_str: "2019-03-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 33 */
  {
    value_um: -4.15,
    date_um_str: "2019-03-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 34 */
  {
    value_um: -4.525,
    date_um_str: "2019-03-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 35 */
  {
    value_um: -3.9,
    date_um_str: "2019-03-02T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 30,
  },

  /* 36 */
  {
    value_um: -4.275,
    date_um_str: "2019-03-02T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 37 */
  {
    value_um: -3.4,
    date_um_str: "2019-03-02T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 31,
  },

  /* 38 */
  {
    value_um: -3.9,
    date_um_str: "2019-03-02T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 7,
  },

  /* 39 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-02T08:00:00.000Z",
    hour: 8,
    category: 2019,
    forecast_duration: 32,
  },

  /* 40 */
  {
    value_um: -3.15,
    date_um_str: "2019-03-02T08:00:00.000Z",
    hour: 8,
    category: 2019,
    forecast_duration: 8,
  },

  /* 41 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-02T09:00:00.000Z",
    hour: 9,
    category: 2019,
    forecast_duration: 33,
  },

  /* 42 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-02T09:00:00.000Z",
    hour: 9,
    category: 2019,
    forecast_duration: 9,
  },

  /* 43 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-02T10:00:00.000Z",
    hour: 10,
    category: 2019,
    forecast_duration: 34,
  },

  /* 44 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-02T10:00:00.000Z",
    hour: 10,
    category: 2019,
    forecast_duration: 10,
  },

  /* 45 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-02T11:00:00.000Z",
    hour: 11,
    category: 2019,
    forecast_duration: 35,
  },

  /* 46 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-02T11:00:00.000Z",
    hour: 11,
    category: 2019,
    forecast_duration: 11,
  },

  /* 47 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-02T12:00:00.000Z",
    hour: 12,
    category: 2019,
    forecast_duration: 12,
  },

  /* 48 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-02T13:00:00.000Z",
    hour: 13,
    category: 2019,
    forecast_duration: 37,
  },

  /* 49 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-02T13:00:00.000Z",
    hour: 13,
    category: 2019,
    forecast_duration: 13,
  },

  /* 50 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-02T14:00:00.000Z",
    hour: 14,
    category: 2019,
    forecast_duration: 38,
  },

  /* 51 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-02T14:00:00.000Z",
    hour: 14,
    category: 2019,
    forecast_duration: 14,
  },

  /* 52 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-02T15:00:00.000Z",
    hour: 15,
    category: 2019,
    forecast_duration: 39,
  },

  /* 53 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-02T15:00:00.000Z",
    hour: 15,
    category: 2019,
    forecast_duration: 15,
  },

  /* 54 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-02T16:00:00.000Z",
    hour: 16,
    category: 2019,
    forecast_duration: 40,
  },

  /* 55 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-02T16:00:00.000Z",
    hour: 16,
    category: 2019,
    forecast_duration: 16,
  },

  /* 56 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-02T17:00:00.000Z",
    hour: 17,
    category: 2019,
    forecast_duration: 41,
  },

  /* 57 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-02T17:00:00.000Z",
    hour: 17,
    category: 2019,
    forecast_duration: 17,
  },

  /* 58 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-02T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 42,
  },

  /* 59 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-02T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 18,
  },

  /* 60 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-02T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 43,
  },

  /* 61 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-02T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 19,
  },

  /* 62 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-02T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 44,
  },

  /* 63 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-02T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 20,
  },

  /* 64 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-02T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 45,
  },

  /* 65 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-02T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 21,
  },

  /* 66 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-02T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 46,
  },

  /* 67 */
  {
    value_um: -2.15,
    date_um_str: "2019-03-02T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 22,
  },

  /* 68 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-02T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 47,
  },

  /* 69 */
  {
    value_um: -2.15,
    date_um_str: "2019-03-02T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 23,
  },

  /* 70 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-03T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 48,
  },

  /* 71 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-03T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 72 */
  {
    value_um: -2.65,
    date_um_str: "2019-03-03T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 0,
  },

  /* 73 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-03T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 49,
  },

  /* 74 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-03T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 75 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-03T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 76 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-03T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 50,
  },

  /* 77 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-03T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 78 */
  {
    value_um: -2.275,
    date_um_str: "2019-03-03T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 79 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-03T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 51,
  },

  /* 80 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-03T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 81 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-03T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 82 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-03T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 83 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-03T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 84 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-03T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 85 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-03T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 86 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-03T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 87 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-03T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 88 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-03T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 30,
  },

  /* 89 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-03T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 90 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-03T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 31,
  },

  /* 91 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-03T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 7,
  },

  /* 92 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-05T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 45,
  },

  /* 93 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-05T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 46,
  },

  /* 94 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-05T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 47,
  },

  /* 95 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-06T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 48,
  },

  /* 96 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-06T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 97 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-06T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 49,
  },

  /* 98 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-06T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 99 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-06T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 100 */
  {
    value_um: -2.275,
    date_um_str: "2019-03-06T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 50,
  },

  /* 101 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-06T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 102 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-06T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 103 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-06T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 51,
  },

  /* 104 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-06T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 105 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-06T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 106 */
  {
    value_um: -3.4,
    date_um_str: "2019-03-06T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 107 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-06T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 108 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-06T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 109 */
  {
    value_um: -3.65,
    date_um_str: "2019-03-06T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 110 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-06T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 111 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-06T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 112 */
  {
    value_um: -3.4,
    date_um_str: "2019-03-06T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 54,
  },

  /* 113 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-06T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 30,
  },

  /* 114 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-06T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 115 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-06T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 55,
  },

  /* 116 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-06T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 31,
  },

  /* 117 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-06T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 7,
  },

  /* 118 */
  {
    value_um: -2.15,
    date_um_str: "2019-03-06T08:00:00.000Z",
    hour: 8,
    category: 2019,
    forecast_duration: 56,
  },

  /* 119 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-06T08:00:00.000Z",
    hour: 8,
    category: 2019,
    forecast_duration: 32,
  },

  /* 120 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-06T08:00:00.000Z",
    hour: 8,
    category: 2019,
    forecast_duration: 8,
  },

  /* 121 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-06T09:00:00.000Z",
    hour: 9,
    category: 2019,
    forecast_duration: 57,
  },

  /* 122 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-06T09:00:00.000Z",
    hour: 9,
    category: 2019,
    forecast_duration: 33,
  },

  /* 123 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-06T09:00:00.000Z",
    hour: 9,
    category: 2019,
    forecast_duration: 9,
  },

  /* 124 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-06T10:00:00.000Z",
    hour: 10,
    category: 2019,
    forecast_duration: 58,
  },

  /* 125 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-06T11:00:00.000Z",
    hour: 11,
    category: 2019,
    forecast_duration: 59,
  },

  /* 126 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-06T12:00:00.000Z",
    hour: 12,
    category: 2019,
    forecast_duration: 60,
  },

  /* 127 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-06T13:00:00.000Z",
    hour: 13,
    category: 2019,
    forecast_duration: 61,
  },

  /* 128 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-06T14:00:00.000Z",
    hour: 14,
    category: 2019,
    forecast_duration: 62,
  },

  /* 129 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-06T15:00:00.000Z",
    hour: 15,
    category: 2019,
    forecast_duration: 63,
  },

  /* 130 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-06T16:00:00.000Z",
    hour: 16,
    category: 2019,
    forecast_duration: 64,
  },

  /* 131 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-06T17:00:00.000Z",
    hour: 17,
    category: 2019,
    forecast_duration: 65,
  },

  /* 132 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-06T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 66,
  },

  /* 133 */
  {
    value_um: -1.275,
    date_um_str: "2019-03-06T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 67,
  },

  /* 134 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-06T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 68,
  },

  /* 135 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-06T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 69,
  },

  /* 136 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-06T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 70,
  },

  /* 137 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-06T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 71,
  },

  /* 138 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-07T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 72,
  },

  /* 139 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-07T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 73,
  },

  /* 140 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-07T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 74,
  },

  /* 141 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-07T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 75,
  },

  /* 142 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-07T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 76,
  },

  /* 143 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-10T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 22,
  },

  /* 144 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-10T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 23,
  },

  /* 145 */
  {
    value_um: -0.025,
    date_um_str: "2019-03-11T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 146 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-11T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 147 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-11T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 77,
  },

  /* 148 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-11T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 149 */
  {
    value_um: -0.275,
    date_um_str: "2019-03-11T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 150 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-11T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 151 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-11T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 78,
  },

  /* 152 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-11T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 54,
  },

  /* 153 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-11T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 30,
  },

  /* 154 */
  {
    value_um: -1.025,
    date_um_str: "2019-03-11T06:00:00.000Z",
    hour: 6,
    category: 2019,
    forecast_duration: 6,
  },

  /* 155 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-11T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 55,
  },

  /* 156 */
  {
    value_um: -0.525,
    date_um_str: "2019-03-11T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 31,
  },

  /* 157 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-11T07:00:00.000Z",
    hour: 7,
    category: 2019,
    forecast_duration: 7,
  },

  /* 158 */
  {
    value_um: -0.15,
    date_um_str: "2019-03-11T17:00:00.000Z",
    hour: 17,
    category: 2019,
    forecast_duration: 17,
  },

  /* 159 */
  {
    value_um: -0.65,
    date_um_str: "2019-03-11T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 66,
  },

  /* 160 */
  {
    value_um: -0.4,
    date_um_str: "2019-03-11T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 42,
  },

  /* 161 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-11T18:00:00.000Z",
    hour: 18,
    category: 2019,
    forecast_duration: 18,
  },

  /* 162 */
  {
    value_um: -0.775,
    date_um_str: "2019-03-11T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 67,
  },

  /* 163 */
  {
    value_um: -0.9,
    date_um_str: "2019-03-11T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 43,
  },

  /* 164 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-11T19:00:00.000Z",
    hour: 19,
    category: 2019,
    forecast_duration: 19,
  },

  /* 165 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-11T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 68,
  },

  /* 166 */
  {
    value_um: -1.15,
    date_um_str: "2019-03-11T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 44,
  },

  /* 167 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-11T20:00:00.000Z",
    hour: 20,
    category: 2019,
    forecast_duration: 20,
  },

  /* 168 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-11T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 69,
  },

  /* 169 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-11T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 45,
  },

  /* 170 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-11T21:00:00.000Z",
    hour: 21,
    category: 2019,
    forecast_duration: 21,
  },

  /* 171 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-11T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 70,
  },

  /* 172 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-11T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 46,
  },

  /* 173 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-11T22:00:00.000Z",
    hour: 22,
    category: 2019,
    forecast_duration: 22,
  },

  /* 174 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-11T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 71,
  },

  /* 175 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-11T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 47,
  },

  /* 176 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-11T23:00:00.000Z",
    hour: 23,
    category: 2019,
    forecast_duration: 23,
  },

  /* 177 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-12T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 72,
  },

  /* 178 */
  {
    value_um: -1.525,
    date_um_str: "2019-03-12T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 48,
  },

  /* 179 */
  {
    value_um: -2.65,
    date_um_str: "2019-03-12T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 24,
  },

  /* 180 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-12T00:00:00.000Z",
    hour: 0,
    category: 2019,
    forecast_duration: 0,
  },

  /* 181 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-12T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 73,
  },

  /* 182 */
  {
    value_um: -2.15,
    date_um_str: "2019-03-12T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 49,
  },

  /* 183 */
  {
    value_um: -2.65,
    date_um_str: "2019-03-12T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 25,
  },

  /* 184 */
  {
    value_um: -1.4,
    date_um_str: "2019-03-12T01:00:00.000Z",
    hour: 1,
    category: 2019,
    forecast_duration: 1,
  },

  /* 185 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-12T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 74,
  },

  /* 186 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-12T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 50,
  },

  /* 187 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-12T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 26,
  },

  /* 188 */
  {
    value_um: -1.65,
    date_um_str: "2019-03-12T02:00:00.000Z",
    hour: 2,
    category: 2019,
    forecast_duration: 2,
  },

  /* 189 */
  {
    value_um: -1.775,
    date_um_str: "2019-03-12T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 75,
  },

  /* 190 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-12T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 51,
  },

  /* 191 */
  {
    value_um: -2.525,
    date_um_str: "2019-03-12T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 27,
  },

  /* 192 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-12T03:00:00.000Z",
    hour: 3,
    category: 2019,
    forecast_duration: 3,
  },

  /* 193 */
  {
    value_um: -1.9,
    date_um_str: "2019-03-12T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 76,
  },

  /* 194 */
  {
    value_um: -2.025,
    date_um_str: "2019-03-12T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 52,
  },

  /* 195 */
  {
    value_um: -2.65,
    date_um_str: "2019-03-12T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 28,
  },

  /* 196 */
  {
    value_um: -2.65,
    date_um_str: "2019-03-12T04:00:00.000Z",
    hour: 4,
    category: 2019,
    forecast_duration: 4,
  },

  /* 197 */
  {
    value_um: -2.15,
    date_um_str: "2019-03-12T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 77,
  },

  /* 198 */
  {
    value_um: -2.4,
    date_um_str: "2019-03-12T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 53,
  },

  /* 199 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-12T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 29,
  },

  /* 200 */
  {
    value_um: -2.775,
    date_um_str: "2019-03-12T05:00:00.000Z",
    hour: 5,
    category: 2019,
    forecast_duration: 5,
  },

  /* 1 */
  {
    value_um: -14.275,
    date_um_str: "2018-03-01T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 2 */
  {
    value_um: -14.275,
    date_um_str: "2018-03-01T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 3 */
  {
    value_um: -14.275,
    date_um_str: "2018-03-01T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 4 */
  {
    value_um: -14.4,
    date_um_str: "2018-03-01T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 5 */
  {
    value_um: -14.525,
    date_um_str: "2018-03-01T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 6 */
  {
    value_um: -14.775,
    date_um_str: "2018-03-01T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 7 */
  {
    value_um: -14.9,
    date_um_str: "2018-03-01T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 8 */
  {
    value_um: -14.15,
    date_um_str: "2018-03-01T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 9 */
  {
    value_um: -13.275,
    date_um_str: "2018-03-01T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 10 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-01T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 11 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-01T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 12 */
  {
    value_um: -11.65,
    date_um_str: "2018-03-01T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 13 */
  {
    value_um: -11.525,
    date_um_str: "2018-03-01T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 14 */
  {
    value_um: -12.025,
    date_um_str: "2018-03-01T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 15 */
  {
    value_um: -11.775,
    date_um_str: "2018-03-01T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 16 */
  {
    value_um: -11.775,
    date_um_str: "2018-03-01T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 17 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-01T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 16,
  },

  /* 18 */
  {
    value_um: -11.775,
    date_um_str: "2018-03-01T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 17,
  },

  /* 19 */
  {
    value_um: -11.775,
    date_um_str: "2018-03-01T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 18,
  },

  /* 20 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-01T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 19,
  },

  /* 21 */
  {
    value_um: -12.275,
    date_um_str: "2018-03-01T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 20,
  },

  /* 22 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-01T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 21,
  },

  /* 23 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-01T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 22,
  },

  /* 24 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-01T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 23,
  },

  /* 25 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-02T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 24,
  },

  /* 26 */
  {
    value_um: -13.65,
    date_um_str: "2018-03-02T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 27 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-02T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 25,
  },

  /* 28 */
  {
    value_um: -13.15,
    date_um_str: "2018-03-02T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 29 */
  {
    value_um: -12.775,
    date_um_str: "2018-03-02T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 26,
  },

  /* 30 */
  {
    value_um: -12.9,
    date_um_str: "2018-03-02T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 31 */
  {
    value_um: -12.775,
    date_um_str: "2018-03-02T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 27,
  },

  /* 32 */
  {
    value_um: -12.775,
    date_um_str: "2018-03-02T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 33 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-02T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 28,
  },

  /* 34 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-02T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 35 */
  {
    value_um: -12.4,
    date_um_str: "2018-03-02T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 29,
  },

  /* 36 */
  {
    value_um: -12.775,
    date_um_str: "2018-03-02T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 37 */
  {
    value_um: -12.275,
    date_um_str: "2018-03-02T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 30,
  },

  /* 38 */
  {
    value_um: -12.4,
    date_um_str: "2018-03-02T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 39 */
  {
    value_um: -10.9,
    date_um_str: "2018-03-02T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 31,
  },

  /* 40 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-02T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 41 */
  {
    value_um: -9.525,
    date_um_str: "2018-03-02T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 32,
  },

  /* 42 */
  {
    value_um: -9.4,
    date_um_str: "2018-03-02T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 43 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-02T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 33,
  },

  /* 44 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-02T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 45 */
  {
    value_um: -7.525,
    date_um_str: "2018-03-02T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 34,
  },

  /* 46 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-02T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 47 */
  {
    value_um: -7.15,
    date_um_str: "2018-03-02T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 35,
  },

  /* 48 */
  {
    value_um: -6.775,
    date_um_str: "2018-03-02T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 49 */
  {
    value_um: -6.775,
    date_um_str: "2018-03-02T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 36,
  },

  /* 50 */
  {
    value_um: -6.525,
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
    value_um: -6.4,
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
    value_um: -6.15,
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
    value_um: -7.025,
    date_um_str: "2018-03-02T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 57 */
  {
    value_um: -7.775,
    date_um_str: "2018-03-02T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 40,
  },

  /* 58 */
  {
    value_um: -7.4,
    date_um_str: "2018-03-02T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 16,
  },

  /* 59 */
  {
    value_um: -8.275,
    date_um_str: "2018-03-02T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 41,
  },

  /* 60 */
  {
    value_um: -7.9,
    date_um_str: "2018-03-02T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 17,
  },

  /* 61 */
  {
    value_um: -8.525,
    date_um_str: "2018-03-02T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 42,
  },

  /* 62 */
  {
    value_um: -8.15,
    date_um_str: "2018-03-02T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 18,
  },

  /* 63 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-02T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 43,
  },

  /* 64 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-02T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 19,
  },

  /* 65 */
  {
    value_um: -9.65,
    date_um_str: "2018-03-02T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 44,
  },

  /* 66 */
  {
    value_um: -9.4,
    date_um_str: "2018-03-02T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 20,
  },

  /* 67 */
  {
    value_um: -10.15,
    date_um_str: "2018-03-02T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 45,
  },

  /* 68 */
  {
    value_um: -9.775,
    date_um_str: "2018-03-02T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 21,
  },

  /* 69 */
  {
    value_um: -10.65,
    date_um_str: "2018-03-02T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 46,
  },

  /* 70 */
  {
    value_um: -10.025,
    date_um_str: "2018-03-02T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 22,
  },

  /* 71 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-02T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 47,
  },

  /* 72 */
  {
    value_um: -10.4,
    date_um_str: "2018-03-02T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 23,
  },

  /* 73 */
  {
    value_um: -11.15,
    date_um_str: "2018-03-03T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 48,
  },

  /* 74 */
  {
    value_um: -11.15,
    date_um_str: "2018-03-03T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 24,
  },

  /* 75 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-03T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 76 */
  {
    value_um: -11.4,
    date_um_str: "2018-03-03T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 49,
  },

  /* 77 */
  {
    value_um: -11.65,
    date_um_str: "2018-03-03T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 25,
  },

  /* 78 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-03T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 79 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-03T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 50,
  },

  /* 80 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-03T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 26,
  },

  /* 81 */
  {
    value_um: -12.775,
    date_um_str: "2018-03-03T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 82 */
  {
    value_um: -12.15,
    date_um_str: "2018-03-03T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 51,
  },

  /* 83 */
  {
    value_um: -12.15,
    date_um_str: "2018-03-03T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 27,
  },

  /* 84 */
  {
    value_um: -13.275,
    date_um_str: "2018-03-03T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 85 */
  {
    value_um: -12.275,
    date_um_str: "2018-03-03T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 52,
  },

  /* 86 */
  {
    value_um: -12.4,
    date_um_str: "2018-03-03T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 28,
  },

  /* 87 */
  {
    value_um: -13.65,
    date_um_str: "2018-03-03T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 88 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-03T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 53,
  },

  /* 89 */
  {
    value_um: -12.65,
    date_um_str: "2018-03-03T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 29,
  },

  /* 90 */
  {
    value_um: -14.025,
    date_um_str: "2018-03-03T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 91 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-03T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 54,
  },

  /* 92 */
  {
    value_um: -12.525,
    date_um_str: "2018-03-03T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 30,
  },

  /* 93 */
  {
    value_um: -13.775,
    date_um_str: "2018-03-03T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 94 */
  {
    value_um: -11.275,
    date_um_str: "2018-03-03T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 55,
  },

  /* 95 */
  {
    value_um: -11.4,
    date_um_str: "2018-03-03T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 31,
  },

  /* 96 */
  {
    value_um: -12.775,
    date_um_str: "2018-03-03T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 97 */
  {
    value_um: -9.9,
    date_um_str: "2018-03-03T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 56,
  },

  /* 98 */
  {
    value_um: -10.275,
    date_um_str: "2018-03-03T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 32,
  },

  /* 99 */
  {
    value_um: -11.525,
    date_um_str: "2018-03-03T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 100 */
  {
    value_um: -8.65,
    date_um_str: "2018-03-03T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 57,
  },

  /* 101 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-03T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 33,
  },

  /* 102 */
  {
    value_um: -10.65,
    date_um_str: "2018-03-03T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 103 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-03T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 58,
  },

  /* 104 */
  {
    value_um: -8.275,
    date_um_str: "2018-03-03T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 34,
  },

  /* 105 */
  {
    value_um: -9.9,
    date_um_str: "2018-03-03T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 106 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-03T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 59,
  },

  /* 107 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-03T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 35,
  },

  /* 108 */
  {
    value_um: -9.275,
    date_um_str: "2018-03-03T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 109 */
  {
    value_um: -6.65,
    date_um_str: "2018-03-03T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 60,
  },

  /* 110 */
  {
    value_um: -7.4,
    date_um_str: "2018-03-03T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 36,
  },

  /* 111 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-03T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 112 */
  {
    value_um: -6.525,
    date_um_str: "2018-03-03T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 61,
  },

  /* 113 */
  {
    value_um: -7.275,
    date_um_str: "2018-03-03T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 37,
  },

  /* 114 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-03T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 115 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-03T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 62,
  },

  /* 116 */
  {
    value_um: -7.4,
    date_um_str: "2018-03-03T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 38,
  },

  /* 117 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-03T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 118 */
  {
    value_um: -7.275,
    date_um_str: "2018-03-03T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 63,
  },

  /* 119 */
  {
    value_um: -7.65,
    date_um_str: "2018-03-03T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 39,
  },

  /* 120 */
  {
    value_um: -8.9,
    date_um_str: "2018-03-03T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 121 */
  {
    value_um: -8.15,
    date_um_str: "2018-03-03T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 64,
  },

  /* 122 */
  {
    value_um: -8.275,
    date_um_str: "2018-03-03T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 40,
  },

  /* 123 */
  {
    value_um: -9.275,
    date_um_str: "2018-03-03T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 16,
  },

  /* 124 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-03T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 65,
  },

  /* 125 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-03T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 41,
  },

  /* 126 */
  {
    value_um: -9.025,
    date_um_str: "2018-03-03T17:00:00.000Z",
    hour: 17,
    category: 2018,
    forecast_duration: 17,
  },

  /* 127 */
  {
    value_um: -9.4,
    date_um_str: "2018-03-03T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 66,
  },

  /* 128 */
  {
    value_um: -9.4,
    date_um_str: "2018-03-03T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 42,
  },

  /* 129 */
  {
    value_um: -9.15,
    date_um_str: "2018-03-03T18:00:00.000Z",
    hour: 18,
    category: 2018,
    forecast_duration: 18,
  },

  /* 130 */
  {
    value_um: -9.9,
    date_um_str: "2018-03-03T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 67,
  },

  /* 131 */
  {
    value_um: -9.4,
    date_um_str: "2018-03-03T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 43,
  },

  /* 132 */
  {
    value_um: -9.525,
    date_um_str: "2018-03-03T19:00:00.000Z",
    hour: 19,
    category: 2018,
    forecast_duration: 19,
  },

  /* 133 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-03T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 68,
  },

  /* 134 */
  {
    value_um: -9.775,
    date_um_str: "2018-03-03T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 44,
  },

  /* 135 */
  {
    value_um: -9.775,
    date_um_str: "2018-03-03T20:00:00.000Z",
    hour: 20,
    category: 2018,
    forecast_duration: 20,
  },

  /* 136 */
  {
    value_um: -10.9,
    date_um_str: "2018-03-03T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 69,
  },

  /* 137 */
  {
    value_um: -9.9,
    date_um_str: "2018-03-03T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 45,
  },

  /* 138 */
  {
    value_um: -9.775,
    date_um_str: "2018-03-03T21:00:00.000Z",
    hour: 21,
    category: 2018,
    forecast_duration: 21,
  },

  /* 139 */
  {
    value_um: -10.9,
    date_um_str: "2018-03-03T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 70,
  },

  /* 140 */
  {
    value_um: -10.275,
    date_um_str: "2018-03-03T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 46,
  },

  /* 141 */
  {
    value_um: -10.025,
    date_um_str: "2018-03-03T22:00:00.000Z",
    hour: 22,
    category: 2018,
    forecast_duration: 22,
  },

  /* 142 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-03T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 71,
  },

  /* 143 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-03T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 47,
  },

  /* 144 */
  {
    value_um: -10.15,
    date_um_str: "2018-03-03T23:00:00.000Z",
    hour: 23,
    category: 2018,
    forecast_duration: 23,
  },

  /* 145 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 72,
  },

  /* 146 */
  {
    value_um: -10.65,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 48,
  },

  /* 147 */
  {
    value_um: -9.9,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 24,
  },

  /* 148 */
  {
    value_um: -12.025,
    date_um_str: "2018-03-04T00:00:00.000Z",
    hour: 0,
    category: 2018,
    forecast_duration: 0,
  },

  /* 149 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 73,
  },

  /* 150 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 49,
  },

  /* 151 */
  {
    value_um: -10.025,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 25,
  },

  /* 152 */
  {
    value_um: -12.025,
    date_um_str: "2018-03-04T01:00:00.000Z",
    hour: 1,
    category: 2018,
    forecast_duration: 1,
  },

  /* 153 */
  {
    value_um: -11.275,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 74,
  },

  /* 154 */
  {
    value_um: -10.4,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 50,
  },

  /* 155 */
  {
    value_um: -10.15,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 26,
  },

  /* 156 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-04T02:00:00.000Z",
    hour: 2,
    category: 2018,
    forecast_duration: 2,
  },

  /* 157 */
  {
    value_um: -11.275,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 75,
  },

  /* 158 */
  {
    value_um: -10.025,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 51,
  },

  /* 159 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 27,
  },

  /* 160 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-04T03:00:00.000Z",
    hour: 3,
    category: 2018,
    forecast_duration: 3,
  },

  /* 161 */
  {
    value_um: -11.525,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 76,
  },

  /* 162 */
  {
    value_um: -9.9,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 52,
  },

  /* 163 */
  {
    value_um: -11.025,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 28,
  },

  /* 164 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-04T04:00:00.000Z",
    hour: 4,
    category: 2018,
    forecast_duration: 4,
  },

  /* 165 */
  {
    value_um: -11.65,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 77,
  },

  /* 166 */
  {
    value_um: -9.275,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 53,
  },

  /* 167 */
  {
    value_um: -10.9,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 29,
  },

  /* 168 */
  {
    value_um: -12.15,
    date_um_str: "2018-03-04T05:00:00.000Z",
    hour: 5,
    category: 2018,
    forecast_duration: 5,
  },

  /* 169 */
  {
    value_um: -11.4,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 78,
  },

  /* 170 */
  {
    value_um: -8.775,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 54,
  },

  /* 171 */
  {
    value_um: -10.525,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 30,
  },

  /* 172 */
  {
    value_um: -11.9,
    date_um_str: "2018-03-04T06:00:00.000Z",
    hour: 6,
    category: 2018,
    forecast_duration: 6,
  },

  /* 173 */
  {
    value_um: -8.4,
    date_um_str: "2018-03-04T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 55,
  },

  /* 174 */
  {
    value_um: -9.525,
    date_um_str: "2018-03-04T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 31,
  },

  /* 175 */
  {
    value_um: -10.65,
    date_um_str: "2018-03-04T07:00:00.000Z",
    hour: 7,
    category: 2018,
    forecast_duration: 7,
  },

  /* 176 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-04T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 56,
  },

  /* 177 */
  {
    value_um: -8.775,
    date_um_str: "2018-03-04T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 32,
  },

  /* 178 */
  {
    value_um: -9.275,
    date_um_str: "2018-03-04T08:00:00.000Z",
    hour: 8,
    category: 2018,
    forecast_duration: 8,
  },

  /* 179 */
  {
    value_um: -7.025,
    date_um_str: "2018-03-04T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 57,
  },

  /* 180 */
  {
    value_um: -8.525,
    date_um_str: "2018-03-04T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 33,
  },

  /* 181 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-04T09:00:00.000Z",
    hour: 9,
    category: 2018,
    forecast_duration: 9,
  },

  /* 182 */
  {
    value_um: -6.15,
    date_um_str: "2018-03-04T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 58,
  },

  /* 183 */
  {
    value_um: -8.025,
    date_um_str: "2018-03-04T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 34,
  },

  /* 184 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-04T10:00:00.000Z",
    hour: 10,
    category: 2018,
    forecast_duration: 10,
  },

  /* 185 */
  {
    value_um: -5.525,
    date_um_str: "2018-03-04T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 59,
  },

  /* 186 */
  {
    value_um: -7.525,
    date_um_str: "2018-03-04T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 35,
  },

  /* 187 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-04T11:00:00.000Z",
    hour: 11,
    category: 2018,
    forecast_duration: 11,
  },

  /* 188 */
  {
    value_um: -5.275,
    date_um_str: "2018-03-04T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 60,
  },

  /* 189 */
  {
    value_um: -6.9,
    date_um_str: "2018-03-04T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 36,
  },

  /* 190 */
  {
    value_um: -5.9,
    date_um_str: "2018-03-04T12:00:00.000Z",
    hour: 12,
    category: 2018,
    forecast_duration: 12,
  },

  /* 191 */
  {
    value_um: -5.275,
    date_um_str: "2018-03-04T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 61,
  },

  /* 192 */
  {
    value_um: -6.65,
    date_um_str: "2018-03-04T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 37,
  },

  /* 193 */
  {
    value_um: -5.65,
    date_um_str: "2018-03-04T13:00:00.000Z",
    hour: 13,
    category: 2018,
    forecast_duration: 13,
  },

  /* 194 */
  {
    value_um: -5.4,
    date_um_str: "2018-03-04T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 62,
  },

  /* 195 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-04T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 38,
  },

  /* 196 */
  {
    value_um: -5.775,
    date_um_str: "2018-03-04T14:00:00.000Z",
    hour: 14,
    category: 2018,
    forecast_duration: 14,
  },

  /* 197 */
  {
    value_um: -5.525,
    date_um_str: "2018-03-04T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 63,
  },

  /* 198 */
  {
    value_um: -6.275,
    date_um_str: "2018-03-04T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 39,
  },

  /* 199 */
  {
    value_um: -6.4,
    date_um_str: "2018-03-04T15:00:00.000Z",
    hour: 15,
    category: 2018,
    forecast_duration: 15,
  },

  /* 200 */
  {
    value_um: -6.025,
    date_um_str: "2018-03-04T16:00:00.000Z",
    hour: 16,
    category: 2018,
    forecast_duration: 64,
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
