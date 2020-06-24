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
    value_imgw: 4.128,
    value_um: 1.85,
    date_imgw_str: "2019-04-15T00:00:00.000Z",
    forecast_duration: 0,
    category: "forecast",
  },

  /* 2 */
  {
    value_imgw: 3.502,
    value_um: 0.975,
    date_imgw_str: "2019-04-15T01:00:00.000Z",
    forecast_duration: 1,
    category: "forecast",
  },

  /* 3 */
  {
    value_imgw: 2.341,
    value_um: 0.725,
    date_imgw_str: "2019-04-15T02:00:00.000Z",
    forecast_duration: 2,
    category: "forecast",
  },

  /* 4 */
  {
    value_imgw: 2.124,
    value_um: 0.225,
    date_imgw_str: "2019-04-15T03:00:00.000Z",
    forecast_duration: 3,
    category: "forecast",
  },

  /* 5 */
  {
    value_imgw: 0.358,
    value_um: -0.275,
    date_imgw_str: "2019-04-15T04:00:00.000Z",
    forecast_duration: 4,
    category: "forecast",
  },

  /* 6 */
  {
    value_imgw: 1.165,
    value_um: 0.85,
    date_imgw_str: "2019-04-15T05:00:00.000Z",
    forecast_duration: 5,
    category: "forecast",
  },

  /* 7 */
  {
    value_imgw: 2.685,
    value_um: 2.975,
    date_imgw_str: "2019-04-15T06:00:00.000Z",
    forecast_duration: 6,
    category: "forecast",
  },

  /* 8 */
  {
    value_imgw: 5.867,
    value_um: 5.35,
    date_imgw_str: "2019-04-15T07:00:00.000Z",
    forecast_duration: 7,
    category: "forecast",
  },

  /* 9 */
  {
    value_imgw: 7.468,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T08:00:00.000Z",
    forecast_duration: 8,
    category: "forecast",
  },

  /* 10 */
  {
    value_imgw: 9.291,
    value_um: 8.35,
    date_imgw_str: "2019-04-15T09:00:00.000Z",
    forecast_duration: 9,
    category: "forecast",
  },

  /* 11 */
  {
    value_imgw: 10.286,
    value_um: 8.6,
    date_imgw_str: "2019-04-15T10:00:00.000Z",
    forecast_duration: 10,
    category: "forecast",
  },

  /* 12 */
  {
    value_imgw: 10.787,
    value_um: 8.975,
    date_imgw_str: "2019-04-15T11:00:00.000Z",
    forecast_duration: 11,
    category: "forecast",
  },

  /* 13 */
  {
    value_imgw: 11.444,
    value_um: 9.35,
    date_imgw_str: "2019-04-15T12:00:00.000Z",
    forecast_duration: 12,
    category: "forecast",
  },

  /* 14 */
  {
    value_imgw: 12.007,
    value_um: 9.725,
    date_imgw_str: "2019-04-15T13:00:00.000Z",
    forecast_duration: 13,
    category: "forecast",
  },

  /* 15 */
  {
    value_imgw: 12.344,
    value_um: 9.6,
    date_imgw_str: "2019-04-15T14:00:00.000Z",
    forecast_duration: 14,
    category: "forecast",
  },

  /* 16 */
  {
    value_imgw: 12.031,
    value_um: 9.35,
    date_imgw_str: "2019-04-15T15:00:00.000Z",
    forecast_duration: 15,
    category: "forecast",
  },

  /* 17 */
  {
    value_imgw: 11.542,
    value_um: 8.6,
    date_imgw_str: "2019-04-15T16:00:00.000Z",
    forecast_duration: 16,
    category: "forecast",
  },

  /* 18 */
  {
    value_imgw: 10.683,
    value_um: 7.35,
    date_imgw_str: "2019-04-15T17:00:00.000Z",
    forecast_duration: 17,
    category: "forecast",
  },

  /* 19 */
  {
    value_imgw: 8.898,
    value_um: 5.85,
    date_imgw_str: "2019-04-15T18:00:00.000Z",
    forecast_duration: 18,
    category: "forecast",
  },

  /* 20 */
  {
    value_imgw: 7.229,
    value_um: 5.475,
    date_imgw_str: "2019-04-15T19:00:00.000Z",
    forecast_duration: 19,
    category: "forecast",
  },

  /* 21 */
  {
    value_imgw: 6.087,
    value_um: 4.475,
    date_imgw_str: "2019-04-15T20:00:00.000Z",
    forecast_duration: 20,
    category: "forecast",
  },

  /* 22 */
  {
    value_imgw: 3.024,
    value_um: 3.35,
    date_imgw_str: "2019-04-15T21:00:00.000Z",
    forecast_duration: 21,
    category: "forecast",
  },

  /* 23 */
  {
    value_imgw: 2.92,
    value_um: 2.1,
    date_imgw_str: "2019-04-15T22:00:00.000Z",
    forecast_duration: 22,
    category: "forecast",
  },

  /* 24 */
  {
    value_imgw: 0.344,
    value_um: 1.225,
    date_imgw_str: "2019-04-15T23:00:00.000Z",
    forecast_duration: 23,
    category: "forecast",
  },

  /* 25 */
  {
    value_imgw: -0.182,
    value_um: 0.6,
    date_imgw_str: "2019-04-16T00:00:00.000Z",
    forecast_duration: 24,
    category: "forecast",
  },

  /* 26 */
  {
    value_imgw: -0.903,
    value_um: 0.225,
    date_imgw_str: "2019-04-16T01:00:00.000Z",
    forecast_duration: 25,
    category: "forecast",
  },

  /* 27 */
  {
    value_imgw: -1.985,
    value_um: -0.775,
    date_imgw_str: "2019-04-16T02:00:00.000Z",
    forecast_duration: 26,
    category: "forecast",
  },

  /* 28 */
  {
    value_imgw: -1.984,
    value_um: -1.025,
    date_imgw_str: "2019-04-16T03:00:00.000Z",
    forecast_duration: 27,
    category: "forecast",
  },

  /* 29 */
  {
    value_imgw: -2.651,
    value_um: -1.15,
    date_imgw_str: "2019-04-16T04:00:00.000Z",
    forecast_duration: 28,
    category: "forecast",
  },

  /* 30 */
  {
    value_imgw: -1.432,
    value_um: 0.6,
    date_imgw_str: "2019-04-16T05:00:00.000Z",
    forecast_duration: 29,
    category: "forecast",
  },

  /* 31 */
  {
    value_imgw: 1.721,
    value_um: 3.35,
    date_imgw_str: "2019-04-16T06:00:00.000Z",
    forecast_duration: 30,
    category: "forecast",
  },

  /* 32 */
  {
    value_imgw: 5.145,
    value_um: 6.1,
    date_imgw_str: "2019-04-16T07:00:00.000Z",
    forecast_duration: 31,
    category: "forecast",
  },

  /* 33 */
  {
    value_imgw: 9.449,
    value_um: 7.6,
    date_imgw_str: "2019-04-16T08:00:00.000Z",
    forecast_duration: 32,
    category: "forecast",
  },

  /* 34 */
  {
    value_imgw: 10.368,
    value_um: 8.225,
    date_imgw_str: "2019-04-16T09:00:00.000Z",
    forecast_duration: 33,
    category: "forecast",
  },

  /* 35 */
  {
    value_imgw: 11.219,
    value_um: 8.6,
    date_imgw_str: "2019-04-16T10:00:00.000Z",
    forecast_duration: 34,
    category: "forecast",
  },

  /* 36 */
  {
    value_imgw: 12.585,
    value_um: 9.225,
    date_imgw_str: "2019-04-16T11:00:00.000Z",
    forecast_duration: 35,
    category: "forecast",
  },

  /* 37 */
  {
    value_imgw: 13.45,
    value_um: 9.975,
    date_imgw_str: "2019-04-16T12:00:00.000Z",
    forecast_duration: 36,
    category: "forecast",
  },

  /* 38 */
  {
    value_imgw: 13.665,
    value_um: 10.35,
    date_imgw_str: "2019-04-16T13:00:00.000Z",
    forecast_duration: 37,
    category: "forecast",
  },

  /* 39 */
  {
    value_imgw: 14.236,
    value_um: 10.35,
    date_imgw_str: "2019-04-16T14:00:00.000Z",
    forecast_duration: 38,
    category: "forecast",
  },

  /* 40 */
  {
    value_imgw: 14.301,
    value_um: 9.85,
    date_imgw_str: "2019-04-16T15:00:00.000Z",
    forecast_duration: 39,
    category: "forecast",
  },

  /* 41 */
  {
    value_imgw: 14.02,
    value_um: 8.975,
    date_imgw_str: "2019-04-16T16:00:00.000Z",
    forecast_duration: 40,
    category: "forecast",
  },

  /* 42 */
  {
    value_imgw: 13.123,
    value_um: 7.6,
    date_imgw_str: "2019-04-16T17:00:00.000Z",
    forecast_duration: 41,
    category: "forecast",
  },

  /* 43 */
  {
    value_imgw: 11.091,
    value_um: 5.725,
    date_imgw_str: "2019-04-16T18:00:00.000Z",
    forecast_duration: 42,
    category: "forecast",
  },

  /* 44 */
  {
    value_imgw: 9.631,
    value_um: 5.1,
    date_imgw_str: "2019-04-16T19:00:00.000Z",
    forecast_duration: 43,
    category: "forecast",
  },

  /* 45 */
  {
    value_imgw: 8.49,
    value_um: 5.1,
    date_imgw_str: "2019-04-16T20:00:00.000Z",
    forecast_duration: 44,
    category: "forecast",
  },

  /* 46 */
  {
    value_imgw: 7.108,
    value_um: 4.975,
    date_imgw_str: "2019-04-16T21:00:00.000Z",
    forecast_duration: 45,
    category: "forecast",
  },

  /* 47 */
  {
    value_imgw: 6.308,
    value_um: 4.6,
    date_imgw_str: "2019-04-16T22:00:00.000Z",
    forecast_duration: 46,
    category: "forecast",
  },

  /* 48 */
  {
    value_imgw: 5.449,
    value_um: 4.35,
    date_imgw_str: "2019-04-16T23:00:00.000Z",
    forecast_duration: 47,
    category: "forecast",
  },

  /* 49 */
  {
    value_imgw: 4.946,
    value_um: 3.975,
    date_imgw_str: "2019-04-17T00:00:00.000Z",
    forecast_duration: 48,
    category: "forecast",
  },

  /* 50 */
  {
    value_imgw: 3.838,
    value_um: 3.85,
    date_imgw_str: "2019-04-17T01:00:00.000Z",
    forecast_duration: 49,
    category: "forecast",
  },

  /* 51 */
  {
    value_imgw: 1.259,
    value_um: 3.475,
    date_imgw_str: "2019-04-17T02:00:00.000Z",
    forecast_duration: 50,
    category: "forecast",
  },

  /* 52 */
  {
    value_imgw: 1.424,
    value_um: 3.35,
    date_imgw_str: "2019-04-17T03:00:00.000Z",
    forecast_duration: 51,
    category: "forecast",
  },

  /* 53 */
  {
    value_imgw: 2.534,
    value_um: 3.225,
    date_imgw_str: "2019-04-17T04:00:00.000Z",
    forecast_duration: 52,
    category: "forecast",
  },

  /* 54 */
  {
    value_imgw: 3.609,
    value_um: 3.6,
    date_imgw_str: "2019-04-17T05:00:00.000Z",
    forecast_duration: 53,
    category: "forecast",
  },

  /* 55 */
  {
    value_imgw: 5.407,
    value_um: 4.35,
    date_imgw_str: "2019-04-17T06:00:00.000Z",
    forecast_duration: 54,
    category: "forecast",
  },

  /* 56 */
  {
    value_imgw: 7.715,
    value_um: 5.85,
    date_imgw_str: "2019-04-17T07:00:00.000Z",
    forecast_duration: 55,
    category: "forecast",
  },

  /* 57 */
  {
    value_imgw: 9.463,
    value_um: 8.1,
    date_imgw_str: "2019-04-17T08:00:00.000Z",
    forecast_duration: 56,
    category: "forecast",
  },

  /* 58 */
  {
    value_imgw: 11.4,
    value_um: 9.725,
    date_imgw_str: "2019-04-17T09:00:00.000Z",
    forecast_duration: 57,
    category: "forecast",
  },

  /* 59 */
  {
    value_imgw: 12.978,
    value_um: 10.1,
    date_imgw_str: "2019-04-17T10:00:00.000Z",
    forecast_duration: 58,
    category: "forecast",
  },

  /* 60 */
  {
    value_imgw: 14.743,
    value_um: 10.85,
    date_imgw_str: "2019-04-17T11:00:00.000Z",
    forecast_duration: 59,
    category: "forecast",
  },

  /* 61 */
  {
    value_imgw: 15.876,
    value_um: 11.975,
    date_imgw_str: "2019-04-17T12:00:00.000Z",
    forecast_duration: 60,
    category: "forecast",
  },

  /* 62 */
  {
    value_imgw: 16.526,
    value_um: 12.225,
    date_imgw_str: "2019-04-17T13:00:00.000Z",
    forecast_duration: 61,
    category: "forecast",
  },

  /* 63 */
  {
    value_imgw: 16.76,
    value_um: 12.225,
    date_imgw_str: "2019-04-17T14:00:00.000Z",
    forecast_duration: 62,
    category: "forecast",
  },

  /* 64 */
  {
    value_imgw: 16.925,
    value_um: 12.35,
    date_imgw_str: "2019-04-17T15:00:00.000Z",
    forecast_duration: 63,
    category: "forecast",
  },

  /* 65 */
  {
    value_imgw: 16.791,
    value_um: 12.225,
    date_imgw_str: "2019-04-17T16:00:00.000Z",
    forecast_duration: 64,
    category: "forecast",
  },

  /* 66 */
  {
    value_imgw: 15.857,
    value_um: 10.85,
    date_imgw_str: "2019-04-17T17:00:00.000Z",
    forecast_duration: 65,
    category: "forecast",
  },

  /* 67 */
  {
    value_imgw: 14.212,
    value_um: 9.35,
    date_imgw_str: "2019-04-17T18:00:00.000Z",
    forecast_duration: 66,
    category: "forecast",
  },

  /* 68 */
  {
    value_imgw: 12.404,
    value_um: 9.225,
    date_imgw_str: "2019-04-17T19:00:00.000Z",
    forecast_duration: 67,
    category: "forecast",
  },

  /* 69 */
  {
    value_imgw: 9.395,
    value_um: 8.475,
    date_imgw_str: "2019-04-17T20:00:00.000Z",
    forecast_duration: 68,
    category: "forecast",
  },

  /* 70 */
  {
    value_imgw: 6.218,
    value_um: 6.975,
    date_imgw_str: "2019-04-17T21:00:00.000Z",
    forecast_duration: 69,
    category: "forecast",
  },

  /* 71 */
  {
    value_imgw: 5.588,
    value_um: 6.725,
    date_imgw_str: "2019-04-17T22:00:00.000Z",
    forecast_duration: 70,
    category: "forecast",
  },

  /* 72 */
  {
    value_imgw: 4.41,
    value_um: 6.85,
    date_imgw_str: "2019-04-17T23:00:00.000Z",
    forecast_duration: 71,
    category: "forecast",
  },

  /* 73 */
  {
    value_imgw: 3.217,
    value_um: 7.1,
    date_imgw_str: "2019-04-18T00:00:00.000Z",
    forecast_duration: 72,
    category: "forecast",
  },

  /* 74 */
  {
    value_imgw: 2.096,
    value_um: 6.975,
    date_imgw_str: "2019-04-18T01:00:00.000Z",
    forecast_duration: 73,
    category: "forecast",
  },

  /* 75 */
  {
    value_imgw: 1.445,
    value_um: 6.1,
    date_imgw_str: "2019-04-18T02:00:00.000Z",
    forecast_duration: 74,
    category: "forecast",
  },

  /* 76 */
  {
    value_imgw: 0.235,
    value_um: 5.225,
    date_imgw_str: "2019-04-18T03:00:00.000Z",
    forecast_duration: 75,
    category: "forecast",
  },

  /* 77 */
  {
    value_imgw: 0.291,
    value_um: 4.725,
    date_imgw_str: "2019-04-18T04:00:00.000Z",
    forecast_duration: 76,
    category: "forecast",
  },

  /* 78 */
  {
    value_imgw: 0.98,
    value_um: 5.725,
    date_imgw_str: "2019-04-18T05:00:00.000Z",
    forecast_duration: 77,
    category: "forecast",
  },

  /* 79 */
  {
    value_imgw: 4.854,
    value_um: 7.725,
    date_imgw_str: "2019-04-18T06:00:00.000Z",
    forecast_duration: 78,
    category: "forecast",
  },
];

let historicals = [
  /* 1 */
{
	"value_imgw" : 4.278,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-01T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 2 */
{
	"value_imgw" : 4.637,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-01T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 3 */
{
	"value_imgw" : 4.884,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-01T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 4 */
{
	"value_imgw" : 5.249,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-03-01T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 5 */
{
	"value_imgw" : 5.363,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-03-01T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 6 */
{
	"value_imgw" : 6.043,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-01T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 7 */
{
	"value_imgw" : 6.187,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-01T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 8 */
{
	"value_imgw" : 6.303,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-01T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 9 */
{
	"value_imgw" : 6.039,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-01T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 10 */
{
	"value_imgw" : 4.611,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-01T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 11 */
{
	"value_imgw" : 4.635,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-01T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 12 */
{
	"value_imgw" : 4.517,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-03-01T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 13 */
{
	"value_imgw" : 4.113,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-01T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 14 */
{
	"value_imgw" : 3.707,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-01T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 15 */
{
	"value_imgw" : 3.37,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-01T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 16 */
{
	"value_imgw" : 2.879,
	"value_um" : -0.525,
	"date_imgw_str" : "2019-03-01T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 17 */
{
	"value_imgw" : 2.231,
	"value_um" : -0.9,
	"date_imgw_str" : "2019-03-01T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 18 */
{
	"value_imgw" : 1.983,
	"value_um" : -1.775,
	"date_imgw_str" : "2019-03-01T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 19 */
{
	"value_imgw" : 1.506,
	"value_um" : -2.15,
	"date_imgw_str" : "2019-03-02T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 20 */
{
	"value_imgw" : 0.722,
	"value_um" : -2.15,
	"date_imgw_str" : "2019-03-02T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 21 */
{
	"value_imgw" : 0.663,
	"value_um" : -2.525,
	"date_imgw_str" : "2019-03-02T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 22 */
{
	"value_imgw" : 0.335,
	"value_um" : -2.775,
	"date_imgw_str" : "2019-03-02T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 23 */
{
	"value_imgw" : 0.029,
	"value_um" : -3.15,
	"date_imgw_str" : "2019-03-02T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 24 */
{
	"value_imgw" : -0.224,
	"value_um" : -3.275,
	"date_imgw_str" : "2019-03-02T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 25 */
{
	"value_imgw" : -0.13,
	"value_um" : -3.15,
	"date_imgw_str" : "2019-03-02T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 26 */
{
	"value_imgw" : -0.13,
	"value_um" : -3.275,
	"date_imgw_str" : "2019-03-02T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 27 */
{
	"value_imgw" : 0.203,
	"value_um" : -2.9,
	"date_imgw_str" : "2019-03-02T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 28 */
{
	"value_imgw" : 0.993,
	"value_um" : -2.15,
	"date_imgw_str" : "2019-03-02T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 29 */
{
	"value_imgw" : 1.452,
	"value_um" : -1.525,
	"date_imgw_str" : "2019-03-02T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 30 */
{
	"value_imgw" : 2.239,
	"value_um" : -0.65,
	"date_imgw_str" : "2019-03-02T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 31 */
{
	"value_imgw" : 2.821,
	"value_um" : -0.15,
	"date_imgw_str" : "2019-03-02T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 32 */
{
	"value_imgw" : 3.27,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-02T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 33 */
{
	"value_imgw" : 3.686,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-02T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 34 */
{
	"value_imgw" : 3.913,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-02T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 35 */
{
	"value_imgw" : 3.959,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-03-02T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 36 */
{
	"value_imgw" : 3.658,
	"value_um" : -0.4,
	"date_imgw_str" : "2019-03-02T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 37 */
{
	"value_imgw" : 3.258,
	"value_um" : -1.65,
	"date_imgw_str" : "2019-03-02T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 38 */
{
	"value_imgw" : 3.015,
	"value_um" : -2.15,
	"date_imgw_str" : "2019-03-02T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 39 */
{
	"value_imgw" : 3.052,
	"value_um" : -2.025,
	"date_imgw_str" : "2019-03-02T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 40 */
{
	"value_imgw" : 3.014,
	"value_um" : -1.9,
	"date_imgw_str" : "2019-03-02T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 41 */
{
	"value_imgw" : 2.866,
	"value_um" : -2.025,
	"date_imgw_str" : "2019-03-02T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 42 */
{
	"value_imgw" : 2.828,
	"value_um" : -1.9,
	"date_imgw_str" : "2019-03-02T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 43 */
{
	"value_imgw" : 3.055,
	"value_um" : -1.9,
	"date_imgw_str" : "2019-03-02T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 44 */
{
	"value_imgw" : 3.253,
	"value_um" : -1.775,
	"date_imgw_str" : "2019-03-03T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 45 */
{
	"value_imgw" : 3.219,
	"value_um" : -1.15,
	"date_imgw_str" : "2019-03-03T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 46 */
{
	"value_imgw" : 2.683,
	"value_um" : -0.525,
	"date_imgw_str" : "2019-03-03T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 47 */
{
	"value_imgw" : 3.431,
	"value_um" : -0.025,
	"date_imgw_str" : "2019-03-03T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 48 */
{
	"value_imgw" : 3.711,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-03T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 49 */
{
	"value_imgw" : 4.82,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-03T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 50 */
{
	"value_imgw" : 5.2,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-03-03T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 51 */
{
	"value_imgw" : 5.2,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-03-03T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 52 */
{
	"value_imgw" : 6.167,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-03T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 53 */
{
	"value_imgw" : 7.113,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-03T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 54 */
{
	"value_imgw" : 8.651,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-03-03T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 55 */
{
	"value_imgw" : 10.151,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-03T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 56 */
{
	"value_imgw" : 10.696,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-03T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 57 */
{
	"value_imgw" : 11,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-03T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 58 */
{
	"value_imgw" : 11.033,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 59 */
{
	"value_imgw" : 11.362,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-03T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 60 */
{
	"value_imgw" : 11.19,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-03T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 61 */
{
	"value_imgw" : 10.729,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-03T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 62 */
{
	"value_imgw" : 10.331,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 63 */
{
	"value_imgw" : 10.179,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 64 */
{
	"value_imgw" : 10.48,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-03T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 65 */
{
	"value_imgw" : 10.185,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 66 */
{
	"value_imgw" : 9.88,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 67 */
{
	"value_imgw" : 9.31,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 68 */
{
	"value_imgw" : 9.087,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-03T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 69 */
{
	"value_imgw" : 9.417,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-04T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 70 */
{
	"value_imgw" : 9.248,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-04T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 71 */
{
	"value_imgw" : 9.102,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-04T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 72 */
{
	"value_imgw" : 8.995,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-04T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 73 */
{
	"value_imgw" : 8.764,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-04T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 74 */
{
	"value_imgw" : 8.811,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-04T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 75 */
{
	"value_imgw" : 8.252,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-04T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 76 */
{
	"value_imgw" : 8.252,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-04T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 77 */
{
	"value_imgw" : 9.188,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-03-04T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 78 */
{
	"value_imgw" : 10.835,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-04T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 79 */
{
	"value_imgw" : 12.642,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-03-04T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 80 */
{
	"value_imgw" : 13.659,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-03-04T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 81 */
{
	"value_imgw" : 14.43,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-03-04T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 82 */
{
	"value_imgw" : 14.968,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-03-04T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 83 */
{
	"value_imgw" : 15.31,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-03-04T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 84 */
{
	"value_imgw" : 16.351,
	"value_um" : 12.975,
	"date_imgw_str" : "2019-03-04T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 85 */
{
	"value_imgw" : 15.29,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-03-04T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 86 */
{
	"value_imgw" : 14.306,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-03-04T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 87 */
{
	"value_imgw" : 13.158,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-03-04T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 88 */
{
	"value_imgw" : 11.911,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-03-04T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 89 */
{
	"value_imgw" : 11.113,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-03-04T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 90 */
{
	"value_imgw" : 10.668,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-03-04T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 91 */
{
	"value_imgw" : 9.734,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-04T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 92 */
{
	"value_imgw" : 8.351,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-04T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 93 */
{
	"value_imgw" : 6.227,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-04T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 94 */
{
	"value_imgw" : 5.969,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-05T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 95 */
{
	"value_imgw" : 5.209,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-05T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 96 */
{
	"value_imgw" : 4.913,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-05T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 97 */
{
	"value_imgw" : 5.08,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-05T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 98 */
{
	"value_imgw" : 4.975,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-05T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 99 */
{
	"value_imgw" : 4.847,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-05T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 100 */
{
	"value_imgw" : 5.202,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-05T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 101 */
{
	"value_imgw" : 5.202,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-05T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 102 */
{
	"value_imgw" : 5.698,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-03-05T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 103 */
{
	"value_imgw" : 7.144,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-05T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 104 */
{
	"value_imgw" : 7.936,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-05T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 105 */
{
	"value_imgw" : 8.345,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-05T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 106 */
{
	"value_imgw" : 6.772,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-05T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 107 */
{
	"value_imgw" : 8.052,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-05T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 108 */
{
	"value_imgw" : 8.295,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-05T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 109 */
{
	"value_imgw" : 8.922,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-05T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 110 */
{
	"value_imgw" : 6.546,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-05T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 111 */
{
	"value_imgw" : 5.07,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-05T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 112 */
{
	"value_imgw" : 4.271,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-05T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 113 */
{
	"value_imgw" : 3.334,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-05T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 114 */
{
	"value_imgw" : 3.441,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-05T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 115 */
{
	"value_imgw" : 3.306,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-05T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 116 */
{
	"value_imgw" : 3.926,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-05T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 117 */
{
	"value_imgw" : 3.836,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-05T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 118 */
{
	"value_imgw" : 3.628,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-05T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 119 */
{
	"value_imgw" : 3.745,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-06T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 120 */
{
	"value_imgw" : 3.238,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-06T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 121 */
{
	"value_imgw" : 2.827,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-06T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 122 */
{
	"value_imgw" : 2.405,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-06T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 123 */
{
	"value_imgw" : 1.519,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-06T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 124 */
{
	"value_imgw" : 1.359,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-06T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 125 */
{
	"value_imgw" : 1.203,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-06T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 126 */
{
	"value_imgw" : 1.203,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-06T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 127 */
{
	"value_imgw" : 2.875,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-06T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 128 */
{
	"value_imgw" : 5.202,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-06T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 129 */
{
	"value_imgw" : 6.645,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-06T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 130 */
{
	"value_imgw" : 7.71,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-06T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 131 */
{
	"value_imgw" : 8.792,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-06T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 132 */
{
	"value_imgw" : 9.538,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-03-06T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 133 */
{
	"value_imgw" : 9.813,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-03-06T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 134 */
{
	"value_imgw" : 10.194,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-03-06T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 135 */
{
	"value_imgw" : 10.111,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-03-06T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 136 */
{
	"value_imgw" : 9.091,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-06T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 137 */
{
	"value_imgw" : 8.009,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-06T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 138 */
{
	"value_imgw" : 7.493,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-06T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 139 */
{
	"value_imgw" : 7.473,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-06T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 140 */
{
	"value_imgw" : 7.193,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-06T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 141 */
{
	"value_imgw" : 7.026,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-06T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 142 */
{
	"value_imgw" : 7.127,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-06T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 143 */
{
	"value_imgw" : 7.278,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-06T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 144 */
{
	"value_imgw" : 7.34,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-03-07T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 145 */
{
	"value_imgw" : 7.432,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-07T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 146 */
{
	"value_imgw" : 7.363,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-07T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 147 */
{
	"value_imgw" : 7.37,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-07T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 148 */
{
	"value_imgw" : 8.019,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-07T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 149 */
{
	"value_imgw" : 7.921,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-07T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 150 */
{
	"value_imgw" : 7.672,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-07T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 151 */
{
	"value_imgw" : 7.672,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-07T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 152 */
{
	"value_imgw" : 8.415,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-07T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 153 */
{
	"value_imgw" : 9.391,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-07T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 154 */
{
	"value_imgw" : 11.091,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-07T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 155 */
{
	"value_imgw" : 12.352,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-03-07T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 156 */
{
	"value_imgw" : 13.365,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-03-07T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 157 */
{
	"value_imgw" : 14.67,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-03-07T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 158 */
{
	"value_imgw" : 15.15,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-03-07T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 159 */
{
	"value_imgw" : 15.849,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-03-07T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 160 */
{
	"value_imgw" : 15.818,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-03-07T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 161 */
{
	"value_imgw" : 14.54,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-03-07T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 162 */
{
	"value_imgw" : 12.158,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-03-07T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 163 */
{
	"value_imgw" : 11.217,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-03-07T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 164 */
{
	"value_imgw" : 10.954,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-03-07T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 165 */
{
	"value_imgw" : 10.741,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-03-07T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 166 */
{
	"value_imgw" : 10.075,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-03-07T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 167 */
{
	"value_imgw" : 9.649,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-03-07T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 168 */
{
	"value_imgw" : 9.132,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-07T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 169 */
{
	"value_imgw" : 8.132,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-08T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 170 */
{
	"value_imgw" : 8.543,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-08T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 171 */
{
	"value_imgw" : 8.305,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-08T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 172 */
{
	"value_imgw" : 8.412,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-08T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 173 */
{
	"value_imgw" : 7.93,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-08T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 174 */
{
	"value_imgw" : 7.696,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-08T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 175 */
{
	"value_imgw" : 8.238,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-08T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 176 */
{
	"value_imgw" : 8.238,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-08T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 177 */
{
	"value_imgw" : 8.972,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-08T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 178 */
{
	"value_imgw" : 10.341,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-03-08T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 179 */
{
	"value_imgw" : 11.126,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-08T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 180 */
{
	"value_imgw" : 11.327,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-03-08T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 181 */
{
	"value_imgw" : 12.299,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-03-08T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 182 */
{
	"value_imgw" : 12.172,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-03-08T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 183 */
{
	"value_imgw" : 11.775,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-03-08T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 184 */
{
	"value_imgw" : 11.899,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-03-08T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 185 */
{
	"value_imgw" : 11.443,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-08T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 186 */
{
	"value_imgw" : 10.282,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-08T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 187 */
{
	"value_imgw" : 9.175,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-03-08T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 188 */
{
	"value_imgw" : 8.552,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-08T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 189 */
{
	"value_imgw" : 7.226,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-08T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 190 */
{
	"value_imgw" : 6.371,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-08T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 191 */
{
	"value_imgw" : 6.214,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-08T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 192 */
{
	"value_imgw" : 5.171,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-08T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 193 */
{
	"value_imgw" : 4.78,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-08T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 194 */
{
	"value_imgw" : 4.873,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-09T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 195 */
{
	"value_imgw" : 4.648,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-09T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 196 */
{
	"value_imgw" : 4.463,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-09T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 197 */
{
	"value_imgw" : 4.747,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-09T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 198 */
{
	"value_imgw" : 5.071,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-09T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 199 */
{
	"value_imgw" : 4.914,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-09T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 200 */
{
	"value_imgw" : 5.258,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-09T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 201 */
{
	"value_imgw" : 5.258,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-09T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 202 */
{
	"value_imgw" : 6.531,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-09T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 203 */
{
	"value_imgw" : 8.34,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-09T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 204 */
{
	"value_imgw" : 7.756,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-09T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 205 */
{
	"value_imgw" : 7.188,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-03-09T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 206 */
{
	"value_imgw" : 8.251,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-03-09T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 207 */
{
	"value_imgw" : 9.494,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-03-09T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 208 */
{
	"value_imgw" : 10.925,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-09T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 209 */
{
	"value_imgw" : 10.93,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-09T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 210 */
{
	"value_imgw" : 9.562,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-09T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 211 */
{
	"value_imgw" : 9.297,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-09T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 212 */
{
	"value_imgw" : 8.544,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-09T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 213 */
{
	"value_imgw" : 8.361,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-09T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 214 */
{
	"value_imgw" : 7.145,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-09T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 215 */
{
	"value_imgw" : 6.768,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-09T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 216 */
{
	"value_imgw" : 7.028,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-09T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 217 */
{
	"value_imgw" : 7.242,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-09T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 218 */
{
	"value_imgw" : 6.016,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-09T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 219 */
{
	"value_imgw" : 5.657,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-10T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 220 */
{
	"value_imgw" : 4.727,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-10T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 221 */
{
	"value_imgw" : 4.006,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-10T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 222 */
{
	"value_imgw" : 3.348,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-10T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 223 */
{
	"value_imgw" : 3.573,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-10T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 224 */
{
	"value_imgw" : 3.983,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-10T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 225 */
{
	"value_imgw" : 4.631,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-10T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 226 */
{
	"value_imgw" : 4.631,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-10T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 227 */
{
	"value_imgw" : 6.066,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-10T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 228 */
{
	"value_imgw" : 7.445,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-10T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 229 */
{
	"value_imgw" : 8.119,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-10T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 230 */
{
	"value_imgw" : 7.971,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-10T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 231 */
{
	"value_imgw" : 8.09,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-10T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 232 */
{
	"value_imgw" : 7.473,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-10T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 233 */
{
	"value_imgw" : 6.607,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-03-10T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 234 */
{
	"value_imgw" : 7.047,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-10T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 235 */
{
	"value_imgw" : 8.166,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-10T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 236 */
{
	"value_imgw" : 8.195,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-10T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 237 */
{
	"value_imgw" : 8.253,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-10T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 238 */
{
	"value_imgw" : 8.168,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-10T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 239 */
{
	"value_imgw" : 8.184,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-10T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 240 */
{
	"value_imgw" : 8.693,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-10T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 241 */
{
	"value_imgw" : 8.31,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-10T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 242 */
{
	"value_imgw" : 8.724,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-10T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 243 */
{
	"value_imgw" : 7.824,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-10T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 244 */
{
	"value_imgw" : 5.115,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-11T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 245 */
{
	"value_imgw" : 3.168,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-11T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 246 */
{
	"value_imgw" : 2.538,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-11T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 247 */
{
	"value_imgw" : 2.602,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-11T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 248 */
{
	"value_imgw" : 2.496,
	"value_um" : 1.475,
	"date_imgw_str" : "2019-03-11T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 249 */
{
	"value_imgw" : 2.612,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-03-11T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 250 */
{
	"value_imgw" : 2.687,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-03-11T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 251 */
{
	"value_imgw" : 2.687,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-03-11T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 252 */
{
	"value_imgw" : 3.424,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-11T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 253 */
{
	"value_imgw" : 4.548,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-03-11T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 254 */
{
	"value_imgw" : 5.456,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-11T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 255 */
{
	"value_imgw" : 5.727,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-11T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 256 */
{
	"value_imgw" : 5,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-11T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 257 */
{
	"value_imgw" : 4.708,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-11T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 258 */
{
	"value_imgw" : 5.17,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-11T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 259 */
{
	"value_imgw" : 4.964,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-11T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 260 */
{
	"value_imgw" : 3.328,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-03-11T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 261 */
{
	"value_imgw" : 2.417,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-11T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 262 */
{
	"value_imgw" : 2.362,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-11T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 263 */
{
	"value_imgw" : 2.001,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-03-11T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 264 */
{
	"value_imgw" : 1.736,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-03-11T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 265 */
{
	"value_imgw" : 1.989,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-11T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 266 */
{
	"value_imgw" : 1.743,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-11T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 267 */
{
	"value_imgw" : 1.672,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-11T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 268 */
{
	"value_imgw" : 1.66,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-11T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 269 */
{
	"value_imgw" : 1.711,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-12T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 270 */
{
	"value_imgw" : 1.612,
	"value_um" : 0.1,
	"date_imgw_str" : "2019-03-12T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 271 */
{
	"value_imgw" : 1.7,
	"value_um" : 0.1,
	"date_imgw_str" : "2019-03-12T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 272 */
{
	"value_imgw" : 1.799,
	"value_um" : 0.1,
	"date_imgw_str" : "2019-03-12T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 273 */
{
	"value_imgw" : 1.606,
	"value_um" : -0.275,
	"date_imgw_str" : "2019-03-12T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 274 */
{
	"value_imgw" : 1.245,
	"value_um" : -1.15,
	"date_imgw_str" : "2019-03-12T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 275 */
{
	"value_imgw" : 1.826,
	"value_um" : -1.65,
	"date_imgw_str" : "2019-03-12T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 276 */
{
	"value_imgw" : 1.826,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-12T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 277 */
{
	"value_imgw" : 2.127,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-12T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 278 */
{
	"value_imgw" : 2.975,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-03-12T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 279 */
{
	"value_imgw" : 3.66,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-03-12T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 280 */
{
	"value_imgw" : 4.729,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-12T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 281 */
{
	"value_imgw" : 5.346,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-12T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 282 */
{
	"value_imgw" : 6.262,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-12T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 283 */
{
	"value_imgw" : 6.493,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-12T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 284 */
{
	"value_imgw" : 6.682,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-12T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 285 */
{
	"value_imgw" : 6.504,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-12T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 286 */
{
	"value_imgw" : 6.235,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-12T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 287 */
{
	"value_imgw" : 4.501,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-03-12T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 288 */
{
	"value_imgw" : 3.207,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-12T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 289 */
{
	"value_imgw" : 2.621,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-12T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 290 */
{
	"value_imgw" : 2.723,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-12T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 291 */
{
	"value_imgw" : 2.924,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-12T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 292 */
{
	"value_imgw" : 3.16,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-12T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 293 */
{
	"value_imgw" : 3.398,
	"value_um" : -0.025,
	"date_imgw_str" : "2019-03-12T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 294 */
{
	"value_imgw" : 3.555,
	"value_um" : -0.4,
	"date_imgw_str" : "2019-03-13T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 295 */
{
	"value_imgw" : 3.941,
	"value_um" : -0.65,
	"date_imgw_str" : "2019-03-13T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 296 */
{
	"value_imgw" : 4.014,
	"value_um" : -0.775,
	"date_imgw_str" : "2019-03-13T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 297 */
{
	"value_imgw" : 3.822,
	"value_um" : -0.9,
	"date_imgw_str" : "2019-03-13T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 298 */
{
	"value_imgw" : 4.043,
	"value_um" : -0.9,
	"date_imgw_str" : "2019-03-13T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 299 */
{
	"value_imgw" : 4.078,
	"value_um" : -0.525,
	"date_imgw_str" : "2019-03-13T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 300 */
{
	"value_imgw" : 4.1,
	"value_um" : -0.025,
	"date_imgw_str" : "2019-03-13T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 301 */
{
	"value_imgw" : 4.1,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-03-13T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 302 */
{
	"value_imgw" : 3.617,
	"value_um" : 0.975,
	"date_imgw_str" : "2019-03-13T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 303 */
{
	"value_imgw" : 3.894,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-13T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 304 */
{
	"value_imgw" : 5.411,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-13T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 305 */
{
	"value_imgw" : 7.216,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-13T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 306 */
{
	"value_imgw" : 8.741,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-13T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 307 */
{
	"value_imgw" : 9.086,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-13T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 308 */
{
	"value_imgw" : 9.393,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-13T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 309 */
{
	"value_imgw" : 9.513,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-13T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 310 */
{
	"value_imgw" : 8.908,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-13T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 311 */
{
	"value_imgw" : 8.208,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-13T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 312 */
{
	"value_imgw" : 6.715,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-13T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 313 */
{
	"value_imgw" : 5.632,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-13T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 314 */
{
	"value_imgw" : 4.851,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-13T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 315 */
{
	"value_imgw" : 5.57,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-13T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 316 */
{
	"value_imgw" : 5.238,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-03-13T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 317 */
{
	"value_imgw" : 5.22,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-13T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 318 */
{
	"value_imgw" : 4.457,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-13T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 319 */
{
	"value_imgw" : 5.109,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-14T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 320 */
{
	"value_imgw" : 5.073,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-14T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 321 */
{
	"value_imgw" : 5.006,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-03-14T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 322 */
{
	"value_imgw" : 4.649,
	"value_um" : 1.475,
	"date_imgw_str" : "2019-03-14T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 323 */
{
	"value_imgw" : 4.838,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-14T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 324 */
{
	"value_imgw" : 4.68,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-14T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 325 */
{
	"value_imgw" : 4.559,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-14T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 326 */
{
	"value_imgw" : 4.559,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-14T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 327 */
{
	"value_imgw" : 4.992,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-14T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 328 */
{
	"value_imgw" : 5.586,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-14T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 329 */
{
	"value_imgw" : 6.331,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-14T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 330 */
{
	"value_imgw" : 7.383,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-03-14T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 331 */
{
	"value_imgw" : 8.337,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-03-14T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 332 */
{
	"value_imgw" : 9.699,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-14T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 333 */
{
	"value_imgw" : 7.177,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-14T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 334 */
{
	"value_imgw" : 8.759,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-14T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 335 */
{
	"value_imgw" : 7.091,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-14T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 336 */
{
	"value_imgw" : 6.739,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-14T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 337 */
{
	"value_imgw" : 6.089,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-14T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 338 */
{
	"value_imgw" : 5.271,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-14T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 339 */
{
	"value_imgw" : 4.716,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-14T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 340 */
{
	"value_imgw" : 4.613,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-14T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 341 */
{
	"value_imgw" : 4.332,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-14T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 342 */
{
	"value_imgw" : 4.131,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-14T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 343 */
{
	"value_imgw" : 4.112,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-14T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 344 */
{
	"value_imgw" : 4.344,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-15T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 345 */
{
	"value_imgw" : 4.638,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-15T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 346 */
{
	"value_imgw" : 4.972,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-15T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 347 */
{
	"value_imgw" : 5.049,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-15T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 348 */
{
	"value_imgw" : 5.152,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-15T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 349 */
{
	"value_imgw" : 5.12,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-15T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 350 */
{
	"value_imgw" : 5.125,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-15T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 351 */
{
	"value_imgw" : 5.125,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-15T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 352 */
{
	"value_imgw" : 5.403,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-15T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 353 */
{
	"value_imgw" : 5.78,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-15T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 354 */
{
	"value_imgw" : 6.629,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-15T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 355 */
{
	"value_imgw" : 7.42,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-15T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 356 */
{
	"value_imgw" : 8.201,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-15T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 357 */
{
	"value_imgw" : 8.866,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-15T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 358 */
{
	"value_imgw" : 9.391,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-15T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 359 */
{
	"value_imgw" : 9.457,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-15T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 360 */
{
	"value_imgw" : 8.953,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-15T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 361 */
{
	"value_imgw" : 8.333,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-15T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 362 */
{
	"value_imgw" : 7.852,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-15T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 363 */
{
	"value_imgw" : 7.616,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-15T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 364 */
{
	"value_imgw" : 7.603,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-15T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 365 */
{
	"value_imgw" : 7.766,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-15T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 366 */
{
	"value_imgw" : 8.725,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-03-15T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 367 */
{
	"value_imgw" : 8.524,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-15T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 368 */
{
	"value_imgw" : 7.503,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-15T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 369 */
{
	"value_imgw" : 7.229,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-16T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 370 */
{
	"value_imgw" : 7.137,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-16T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 371 */
{
	"value_imgw" : 6.399,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-16T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 372 */
{
	"value_imgw" : 5.944,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-16T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 373 */
{
	"value_imgw" : 5.57,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-16T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 374 */
{
	"value_imgw" : 5.382,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-16T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 375 */
{
	"value_imgw" : 5.715,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-16T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 376 */
{
	"value_imgw" : 5.715,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-16T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 377 */
{
	"value_imgw" : 6.436,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-16T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 378 */
{
	"value_imgw" : 7.127,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-16T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 379 */
{
	"value_imgw" : 7.949,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-16T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 380 */
{
	"value_imgw" : 9.024,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-16T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 381 */
{
	"value_imgw" : 9.381,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-16T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 382 */
{
	"value_imgw" : 9.164,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-16T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 383 */
{
	"value_imgw" : 8.397,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-16T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 384 */
{
	"value_imgw" : 7.97,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-16T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 385 */
{
	"value_imgw" : 7.479,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-16T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 386 */
{
	"value_imgw" : 6.921,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-16T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 387 */
{
	"value_imgw" : 6.311,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-16T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 388 */
{
	"value_imgw" : 5.923,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-16T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 389 */
{
	"value_imgw" : 6.332,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-16T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 390 */
{
	"value_imgw" : 7.058,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-16T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 391 */
{
	"value_imgw" : 7.697,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-16T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 392 */
{
	"value_imgw" : 8.263,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-16T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 393 */
{
	"value_imgw" : 8.737,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-16T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 394 */
{
	"value_imgw" : 8.886,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-17T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 395 */
{
	"value_imgw" : 8.896,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-17T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 396 */
{
	"value_imgw" : 7.702,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-17T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 397 */
{
	"value_imgw" : 7.921,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-17T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 398 */
{
	"value_imgw" : 7.299,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-17T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 399 */
{
	"value_imgw" : 6.094,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-17T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 400 */
{
	"value_imgw" : 6.555,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-17T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 401 */
{
	"value_imgw" : 6.555,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-17T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 402 */
{
	"value_imgw" : 8.75,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-03-17T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 403 */
{
	"value_imgw" : 10.543,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-03-17T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 404 */
{
	"value_imgw" : 13.484,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-17T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 405 */
{
	"value_imgw" : 15.966,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-03-17T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 406 */
{
	"value_imgw" : 16.432,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-03-17T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 407 */
{
	"value_imgw" : 17.163,
	"value_um" : 14.1,
	"date_imgw_str" : "2019-03-17T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 408 */
{
	"value_imgw" : 18.256,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-03-17T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 409 */
{
	"value_imgw" : 19.78,
	"value_um" : 14.85,
	"date_imgw_str" : "2019-03-17T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 410 */
{
	"value_imgw" : 19.27,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-03-17T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 411 */
{
	"value_imgw" : 17.713,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-03-17T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 412 */
{
	"value_imgw" : 14.401,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-03-17T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 413 */
{
	"value_imgw" : 12.78,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-03-17T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 414 */
{
	"value_imgw" : 11.02,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-17T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 415 */
{
	"value_imgw" : 9.105,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-17T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 416 */
{
	"value_imgw" : 7.109,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-17T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 417 */
{
	"value_imgw" : 6.821,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-17T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 418 */
{
	"value_imgw" : 6.093,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-17T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 419 */
{
	"value_imgw" : 5.619,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-18T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 420 */
{
	"value_imgw" : 5.722,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-18T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 421 */
{
	"value_imgw" : 5.617,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-18T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 422 */
{
	"value_imgw" : 5.553,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-03-18T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 423 */
{
	"value_imgw" : 5.176,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-18T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 424 */
{
	"value_imgw" : 5.111,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-18T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 425 */
{
	"value_imgw" : 5.221,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-18T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 426 */
{
	"value_imgw" : 5.221,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-18T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 427 */
{
	"value_imgw" : 5.712,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-18T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 428 */
{
	"value_imgw" : 5.932,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-18T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 429 */
{
	"value_imgw" : 6.572,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-18T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 430 */
{
	"value_imgw" : 7.158,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-03-18T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 431 */
{
	"value_imgw" : 7.475,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-18T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 432 */
{
	"value_imgw" : 7.386,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-03-18T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 433 */
{
	"value_imgw" : 7.451,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-18T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 434 */
{
	"value_imgw" : 7.494,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-18T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 435 */
{
	"value_imgw" : 7.322,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-18T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 436 */
{
	"value_imgw" : 7.374,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-18T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 437 */
{
	"value_imgw" : 5.733,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-03-18T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 438 */
{
	"value_imgw" : 4.93,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-18T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 439 */
{
	"value_imgw" : 4.103,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-18T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 440 */
{
	"value_imgw" : 3.493,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-18T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 441 */
{
	"value_imgw" : 2.958,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-18T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 442 */
{
	"value_imgw" : 2.278,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-18T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 443 */
{
	"value_imgw" : 2.374,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-18T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 444 */
{
	"value_imgw" : 2.724,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-03-19T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 445 */
{
	"value_imgw" : 2.621,
	"value_um" : 1.475,
	"date_imgw_str" : "2019-03-19T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 446 */
{
	"value_imgw" : 1.679,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-03-19T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 447 */
{
	"value_imgw" : 2.163,
	"value_um" : 0.975,
	"date_imgw_str" : "2019-03-19T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 448 */
{
	"value_imgw" : 1.544,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-19T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 449 */
{
	"value_imgw" : 1.132,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-03-19T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 450 */
{
	"value_imgw" : 1.306,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-03-19T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 451 */
{
	"value_imgw" : 1.306,
	"value_um" : 0.975,
	"date_imgw_str" : "2019-03-19T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 452 */
{
	"value_imgw" : 3.168,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-19T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 453 */
{
	"value_imgw" : 4.846,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-19T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 454 */
{
	"value_imgw" : 5.587,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-19T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 455 */
{
	"value_imgw" : 5.926,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-19T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 456 */
{
	"value_imgw" : 6.633,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-19T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 457 */
{
	"value_imgw" : 6.933,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-19T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 458 */
{
	"value_imgw" : 7.443,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-19T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 459 */
{
	"value_imgw" : 7.08,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-19T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 460 */
{
	"value_imgw" : 6.535,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-19T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 461 */
{
	"value_imgw" : 5.983,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-19T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 462 */
{
	"value_imgw" : 5.117,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-19T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 463 */
{
	"value_imgw" : 3.63,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-19T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 464 */
{
	"value_imgw" : 2.356,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-19T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 465 */
{
	"value_imgw" : 0.951,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-03-19T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 466 */
{
	"value_imgw" : -0.383,
	"value_um" : 0.725,
	"date_imgw_str" : "2019-03-19T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 467 */
{
	"value_imgw" : -1.027,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-03-19T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 468 */
{
	"value_imgw" : -0.668,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-03-19T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 469 */
{
	"value_imgw" : -1.61,
	"value_um" : -0.15,
	"date_imgw_str" : "2019-03-20T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 470 */
{
	"value_imgw" : -1.738,
	"value_um" : -0.65,
	"date_imgw_str" : "2019-03-20T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 471 */
{
	"value_imgw" : -1.782,
	"value_um" : -1.15,
	"date_imgw_str" : "2019-03-20T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 472 */
{
	"value_imgw" : -1.755,
	"value_um" : -1.4,
	"date_imgw_str" : "2019-03-20T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 473 */
{
	"value_imgw" : -2.242,
	"value_um" : -1.65,
	"date_imgw_str" : "2019-03-20T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 474 */
{
	"value_imgw" : -2.62,
	"value_um" : -1.525,
	"date_imgw_str" : "2019-03-20T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 475 */
{
	"value_imgw" : -2.004,
	"value_um" : -1.15,
	"date_imgw_str" : "2019-03-20T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 476 */
{
	"value_imgw" : -2.004,
	"value_um" : -0.9,
	"date_imgw_str" : "2019-03-20T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 477 */
{
	"value_imgw" : 1.296,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-03-20T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 478 */
{
	"value_imgw" : 3.739,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-20T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 479 */
{
	"value_imgw" : 6.196,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-20T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 480 */
{
	"value_imgw" : 7.423,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-20T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 481 */
{
	"value_imgw" : 7.941,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-20T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 482 */
{
	"value_imgw" : 8.864,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-20T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 483 */
{
	"value_imgw" : 9.541,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-03-20T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 484 */
{
	"value_imgw" : 10.079,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-03-20T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 485 */
{
	"value_imgw" : 10.064,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-20T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 486 */
{
	"value_imgw" : 9.751,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-20T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 487 */
{
	"value_imgw" : 6.992,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-20T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 488 */
{
	"value_imgw" : 5.402,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-20T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 489 */
{
	"value_imgw" : 3.951,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-20T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 490 */
{
	"value_imgw" : 1.887,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-20T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 491 */
{
	"value_imgw" : 1.382,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-03-20T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 492 */
{
	"value_imgw" : 0.728,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-03-20T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 493 */
{
	"value_imgw" : 0.782,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-03-20T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 494 */
{
	"value_imgw" : 0.257,
	"value_um" : 1.475,
	"date_imgw_str" : "2019-03-21T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 495 */
{
	"value_imgw" : 0.581,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-03-21T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 496 */
{
	"value_imgw" : 0.723,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-21T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 497 */
{
	"value_imgw" : 0.635,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-21T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 498 */
{
	"value_imgw" : 0.017,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-21T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 499 */
{
	"value_imgw" : 0.48,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-21T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 500 */
{
	"value_imgw" : 1.181,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-21T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 501 */
{
	"value_imgw" : 1.181,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-21T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 502 */
{
	"value_imgw" : 2.672,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-21T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 503 */
{
	"value_imgw" : 4.28,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-21T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 504 */
{
	"value_imgw" : 6.83,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-21T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 505 */
{
	"value_imgw" : 9.302,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-21T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 506 */
{
	"value_imgw" : 11.203,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-21T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 507 */
{
	"value_imgw" : 12.204,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-21T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 508 */
{
	"value_imgw" : 13.122,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-21T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 509 */
{
	"value_imgw" : 13.685,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-21T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 510 */
{
	"value_imgw" : 14.113,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-03-21T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 511 */
{
	"value_imgw" : 13.885,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-21T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 512 */
{
	"value_imgw" : 11.515,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-21T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 513 */
{
	"value_imgw" : 9.941,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-21T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 514 */
{
	"value_imgw" : 8.795,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-21T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 515 */
{
	"value_imgw" : 6.038,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-21T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 516 */
{
	"value_imgw" : 4.916,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-21T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 517 */
{
	"value_imgw" : 4.19,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-21T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 518 */
{
	"value_imgw" : 3.627,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-21T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 519 */
{
	"value_imgw" : 2.109,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-22T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 520 */
{
	"value_imgw" : 1.886,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-22T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 521 */
{
	"value_imgw" : 0.901,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-22T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 522 */
{
	"value_imgw" : 1.265,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-22T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 523 */
{
	"value_imgw" : 1.31,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-22T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 524 */
{
	"value_imgw" : 0.665,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-22T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 525 */
{
	"value_imgw" : 1.166,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-22T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 526 */
{
	"value_imgw" : 1.166,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-22T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 527 */
{
	"value_imgw" : 4.119,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-22T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 528 */
{
	"value_imgw" : 6.378,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-22T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 529 */
{
	"value_imgw" : 9.08,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-03-22T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 530 */
{
	"value_imgw" : 10.672,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-03-22T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 531 */
{
	"value_imgw" : 11.544,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-22T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 532 */
{
	"value_imgw" : 12.284,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-22T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 533 */
{
	"value_imgw" : 12.36,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-03-22T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 534 */
{
	"value_imgw" : 12.987,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-03-22T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 535 */
{
	"value_imgw" : 12.93,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-03-22T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 536 */
{
	"value_imgw" : 12.184,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-03-22T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 537 */
{
	"value_imgw" : 10.841,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-22T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 538 */
{
	"value_imgw" : 9.559,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-22T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 539 */
{
	"value_imgw" : 8.889,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-22T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 540 */
{
	"value_imgw" : 7.612,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-03-22T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 541 */
{
	"value_imgw" : 5.602,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-22T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 542 */
{
	"value_imgw" : 4.516,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-22T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 543 */
{
	"value_imgw" : 4.757,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-22T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 544 */
{
	"value_imgw" : 5.062,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-23T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 545 */
{
	"value_imgw" : 4.874,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-23T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 546 */
{
	"value_imgw" : 4.215,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-23T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 547 */
{
	"value_imgw" : 4.416,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-23T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 548 */
{
	"value_imgw" : 4.212,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-23T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 549 */
{
	"value_imgw" : 3.916,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-23T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 550 */
{
	"value_imgw" : 4.27,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-23T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 551 */
{
	"value_imgw" : 4.27,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-03-23T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 552 */
{
	"value_imgw" : 5.357,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-23T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 553 */
{
	"value_imgw" : 6.788,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-23T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 554 */
{
	"value_imgw" : 9.21,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-23T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 555 */
{
	"value_imgw" : 11.87,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-23T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 556 */
{
	"value_imgw" : 14.979,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-03-23T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 557 */
{
	"value_imgw" : 18.046,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-03-23T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 558 */
{
	"value_imgw" : 19.023,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-03-23T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 559 */
{
	"value_imgw" : 19.431,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-03-23T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 560 */
{
	"value_imgw" : 19.18,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-03-23T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 561 */
{
	"value_imgw" : 18.32,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-03-23T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 562 */
{
	"value_imgw" : 15.918,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-23T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 563 */
{
	"value_imgw" : 14.108,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-03-23T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 564 */
{
	"value_imgw" : 13.026,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-03-23T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 565 */
{
	"value_imgw" : 11.004,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-23T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 566 */
{
	"value_imgw" : 9.956,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-23T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 567 */
{
	"value_imgw" : 9.21,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-23T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 568 */
{
	"value_imgw" : 9.73,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-23T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 569 */
{
	"value_imgw" : 8.978,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-03-24T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 570 */
{
	"value_imgw" : 8.405,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-03-24T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 571 */
{
	"value_imgw" : 8.281,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-03-24T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 572 */
{
	"value_imgw" : 7.985,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-24T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 573 */
{
	"value_imgw" : 7.306,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-24T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 574 */
{
	"value_imgw" : 6.516,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-24T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 575 */
{
	"value_imgw" : 6.724,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-24T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 576 */
{
	"value_imgw" : 6.724,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-24T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 577 */
{
	"value_imgw" : 7.082,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-03-24T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 578 */
{
	"value_imgw" : 7.725,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-24T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 579 */
{
	"value_imgw" : 8.754,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-24T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 580 */
{
	"value_imgw" : 9.418,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-03-24T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 581 */
{
	"value_imgw" : 9.799,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-24T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 582 */
{
	"value_imgw" : 10.14,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-03-24T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 583 */
{
	"value_imgw" : 10.324,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-03-24T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 584 */
{
	"value_imgw" : 10.416,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-03-24T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 585 */
{
	"value_imgw" : 9.785,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-03-24T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 586 */
{
	"value_imgw" : 9.332,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-03-24T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 587 */
{
	"value_imgw" : 8.89,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-24T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 588 */
{
	"value_imgw" : 8.384,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-24T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 589 */
{
	"value_imgw" : 7.745,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-24T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 590 */
{
	"value_imgw" : 7.673,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-03-24T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 591 */
{
	"value_imgw" : 7.185,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-24T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 592 */
{
	"value_imgw" : 7.243,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-24T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 593 */
{
	"value_imgw" : 6.801,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-24T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 594 */
{
	"value_imgw" : 6.372,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-25T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 595 */
{
	"value_imgw" : 6.047,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-03-25T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 596 */
{
	"value_imgw" : 5.82,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-25T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 597 */
{
	"value_imgw" : 4.67,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-25T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 598 */
{
	"value_imgw" : 4.58,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-25T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 599 */
{
	"value_imgw" : 3.717,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-25T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 600 */
{
	"value_imgw" : 4.154,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-25T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 601 */
{
	"value_imgw" : 4.154,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-25T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 602 */
{
	"value_imgw" : 5.949,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-25T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 603 */
{
	"value_imgw" : 7.134,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-25T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 604 */
{
	"value_imgw" : 7.711,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-25T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 605 */
{
	"value_imgw" : 7.623,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-03-25T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 606 */
{
	"value_imgw" : 8.159,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-03-25T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 607 */
{
	"value_imgw" : 7.747,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-03-25T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 608 */
{
	"value_imgw" : 4.72,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-03-25T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 609 */
{
	"value_imgw" : 5.563,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-03-25T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 610 */
{
	"value_imgw" : 4.207,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-25T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 611 */
{
	"value_imgw" : 5.243,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-25T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 612 */
{
	"value_imgw" : 4.522,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-03-25T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 613 */
{
	"value_imgw" : 3.436,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-25T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 614 */
{
	"value_imgw" : 3.258,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-25T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 615 */
{
	"value_imgw" : 2.628,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-25T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 616 */
{
	"value_imgw" : 3.166,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-25T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 617 */
{
	"value_imgw" : 2.914,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-25T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 618 */
{
	"value_imgw" : 3.362,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-25T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 619 */
{
	"value_imgw" : 3.04,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-26T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 620 */
{
	"value_imgw" : 3.143,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-26T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 621 */
{
	"value_imgw" : 3.224,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-03-26T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 622 */
{
	"value_imgw" : 3.277,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-03-26T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 623 */
{
	"value_imgw" : 3.11,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-26T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 624 */
{
	"value_imgw" : 2.586,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-26T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 625 */
{
	"value_imgw" : 3.332,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-26T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 626 */
{
	"value_imgw" : 3.332,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-26T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 627 */
{
	"value_imgw" : 3.986,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-26T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 628 */
{
	"value_imgw" : 5.069,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-03-26T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 629 */
{
	"value_imgw" : 6.116,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-26T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 630 */
{
	"value_imgw" : 7.216,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-03-26T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 631 */
{
	"value_imgw" : 7.266,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-03-26T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 632 */
{
	"value_imgw" : 7.585,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-26T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 633 */
{
	"value_imgw" : 7.152,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-26T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 634 */
{
	"value_imgw" : 7.17,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-26T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 635 */
{
	"value_imgw" : 6.807,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-26T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 636 */
{
	"value_imgw" : 6.578,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-03-26T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 637 */
{
	"value_imgw" : 6.362,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-26T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 638 */
{
	"value_imgw" : 6.063,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-26T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 639 */
{
	"value_imgw" : 5.096,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-26T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 640 */
{
	"value_imgw" : 5.181,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-03-26T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 641 */
{
	"value_imgw" : 4.292,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-26T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 642 */
{
	"value_imgw" : 4.304,
	"value_um" : -0.275,
	"date_imgw_str" : "2019-03-26T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 643 */
{
	"value_imgw" : 3.975,
	"value_um" : -0.775,
	"date_imgw_str" : "2019-03-26T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 644 */
{
	"value_imgw" : 3.549,
	"value_um" : -1.4,
	"date_imgw_str" : "2019-03-27T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 645 */
{
	"value_imgw" : 2.977,
	"value_um" : -1.9,
	"date_imgw_str" : "2019-03-27T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 646 */
{
	"value_imgw" : 2.504,
	"value_um" : -2.15,
	"date_imgw_str" : "2019-03-27T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 647 */
{
	"value_imgw" : 1.743,
	"value_um" : -2.4,
	"date_imgw_str" : "2019-03-27T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 648 */
{
	"value_imgw" : 0.674,
	"value_um" : -2.525,
	"date_imgw_str" : "2019-03-27T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 649 */
{
	"value_imgw" : -0.192,
	"value_um" : -2.4,
	"date_imgw_str" : "2019-03-27T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 650 */
{
	"value_imgw" : 0.706,
	"value_um" : -1.275,
	"date_imgw_str" : "2019-03-27T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 651 */
{
	"value_imgw" : 0.706,
	"value_um" : -1.15,
	"date_imgw_str" : "2019-03-27T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 652 */
{
	"value_imgw" : 3.738,
	"value_um" : 0.35,
	"date_imgw_str" : "2019-03-27T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 653 */
{
	"value_imgw" : 4.971,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-03-27T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 654 */
{
	"value_imgw" : 6.688,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-27T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 655 */
{
	"value_imgw" : 7.421,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-27T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 656 */
{
	"value_imgw" : 8.302,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-27T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 657 */
{
	"value_imgw" : 9.146,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-27T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 658 */
{
	"value_imgw" : 9.952,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-27T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 659 */
{
	"value_imgw" : 9.982,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-27T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 660 */
{
	"value_imgw" : 9.465,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-03-27T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 661 */
{
	"value_imgw" : 8.492,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-27T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 662 */
{
	"value_imgw" : 7.655,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-27T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 663 */
{
	"value_imgw" : 6.559,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-27T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 664 */
{
	"value_imgw" : 6.707,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-03-27T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 665 */
{
	"value_imgw" : 6.598,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-27T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 666 */
{
	"value_imgw" : 6.266,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-03-27T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 667 */
{
	"value_imgw" : 6.108,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-27T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 668 */
{
	"value_imgw" : 6.368,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-27T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 669 */
{
	"value_imgw" : 6.328,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-28T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 670 */
{
	"value_imgw" : 6.456,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-28T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 671 */
{
	"value_imgw" : 6.395,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-03-28T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 672 */
{
	"value_imgw" : 6.321,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-03-28T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 673 */
{
	"value_imgw" : 6.232,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-28T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 674 */
{
	"value_imgw" : 6.222,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-03-28T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 675 */
{
	"value_imgw" : 6.582,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-03-28T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 676 */
{
	"value_imgw" : 6.582,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-28T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 677 */
{
	"value_imgw" : 7.067,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-03-28T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 678 */
{
	"value_imgw" : 7.455,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-03-28T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 679 */
{
	"value_imgw" : 8.144,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-28T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 680 */
{
	"value_imgw" : 8.945,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-28T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 681 */
{
	"value_imgw" : 9.374,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-03-28T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 682 */
{
	"value_imgw" : 10.332,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-28T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 683 */
{
	"value_imgw" : 10.043,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-03-28T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 684 */
{
	"value_imgw" : 10.482,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-28T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 685 */
{
	"value_imgw" : 10.131,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-28T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 686 */
{
	"value_imgw" : 10.318,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-03-28T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 687 */
{
	"value_imgw" : 9.777,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-28T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 688 */
{
	"value_imgw" : 8.385,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-03-28T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 689 */
{
	"value_imgw" : 7.077,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-28T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 690 */
{
	"value_imgw" : 5.296,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-28T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 691 */
{
	"value_imgw" : 3.642,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-28T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 692 */
{
	"value_imgw" : 2.146,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-28T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 693 */
{
	"value_imgw" : 1.56,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-28T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 694 */
{
	"value_imgw" : 1.626,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-03-29T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 695 */
{
	"value_imgw" : 1.814,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-29T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 696 */
{
	"value_imgw" : 2.13,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-03-29T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 697 */
{
	"value_imgw" : 2.175,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-29T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 698 */
{
	"value_imgw" : 2.437,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-29T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 699 */
{
	"value_imgw" : 2.996,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-03-29T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 700 */
{
	"value_imgw" : 3.788,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-29T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 701 */
{
	"value_imgw" : 3.788,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-03-29T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 702 */
{
	"value_imgw" : 5.329,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-03-29T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 703 */
{
	"value_imgw" : 7.02,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-29T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 704 */
{
	"value_imgw" : 8.548,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-03-29T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 705 */
{
	"value_imgw" : 9.885,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-03-29T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 706 */
{
	"value_imgw" : 10.598,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-03-29T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 707 */
{
	"value_imgw" : 11.248,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-03-29T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 708 */
{
	"value_imgw" : 11.81,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-03-29T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 709 */
{
	"value_imgw" : 12.114,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-03-29T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 710 */
{
	"value_imgw" : 12.354,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-29T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 711 */
{
	"value_imgw" : 12.371,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-03-29T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 712 */
{
	"value_imgw" : 10.996,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-03-29T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 713 */
{
	"value_imgw" : 8.708,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-29T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 714 */
{
	"value_imgw" : 5.718,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-29T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 715 */
{
	"value_imgw" : 4.267,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-03-29T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 716 */
{
	"value_imgw" : 3.483,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-29T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 717 */
{
	"value_imgw" : 2.556,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-29T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 718 */
{
	"value_imgw" : 1.75,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-29T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 719 */
{
	"value_imgw" : 0.41,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-30T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 720 */
{
	"value_imgw" : -0.603,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-03-30T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 721 */
{
	"value_imgw" : -0.53,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-30T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 722 */
{
	"value_imgw" : -1.408,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-30T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 723 */
{
	"value_imgw" : -1.44,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-30T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 724 */
{
	"value_imgw" : -1.823,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-03-30T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 725 */
{
	"value_imgw" : -0.856,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-03-30T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 726 */
{
	"value_imgw" : -0.856,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-03-30T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 727 */
{
	"value_imgw" : 2.299,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-03-30T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 728 */
{
	"value_imgw" : 6.69,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-03-30T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 729 */
{
	"value_imgw" : 10.483,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-03-30T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 730 */
{
	"value_imgw" : 12.509,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-03-30T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 731 */
{
	"value_imgw" : 14.704,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-03-30T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 732 */
{
	"value_imgw" : 16.086,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-03-30T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 733 */
{
	"value_imgw" : 17.087,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-03-30T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 734 */
{
	"value_imgw" : 18.104,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-03-30T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 735 */
{
	"value_imgw" : 18.394,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-03-30T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 736 */
{
	"value_imgw" : 17.358,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-03-30T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 737 */
{
	"value_imgw" : 14.807,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-03-30T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 738 */
{
	"value_imgw" : 11.475,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-03-30T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 739 */
{
	"value_imgw" : 9.031,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-03-30T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 740 */
{
	"value_imgw" : 7.246,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-03-30T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 741 */
{
	"value_imgw" : 6.713,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-03-30T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 742 */
{
	"value_imgw" : 5.628,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-03-30T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 743 */
{
	"value_imgw" : 4.035,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-30T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 744 */
{
	"value_imgw" : 3.088,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-03-31T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 745 */
{
	"value_imgw" : 2.735,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-03-31T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 746 */
{
	"value_imgw" : 2.365,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-03-31T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 747 */
{
	"value_imgw" : 1.032,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-03-31T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 748 */
{
	"value_imgw" : 1.045,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-03-31T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 749 */
{
	"value_imgw" : 0.469,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-03-31T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 750 */
{
	"value_imgw" : 2.747,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-03-31T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 751 */
{
	"value_imgw" : 2.747,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-03-31T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 752 */
{
	"value_imgw" : 5.73,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-03-31T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 753 */
{
	"value_imgw" : 9.997,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-03-31T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 754 */
{
	"value_imgw" : 13.095,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-03-31T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 755 */
{
	"value_imgw" : 16.062,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-03-31T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 756 */
{
	"value_imgw" : 16.675,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-03-31T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 757 */
{
	"value_imgw" : 16.947,
	"value_um" : 15.6,
	"date_imgw_str" : "2019-03-31T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 758 */
{
	"value_imgw" : 16.853,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-03-31T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 759 */
{
	"value_imgw" : 15.814,
	"value_um" : 15.35,
	"date_imgw_str" : "2019-03-31T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 760 */
{
	"value_imgw" : 14.778,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-03-31T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 761 */
{
	"value_imgw" : 13.539,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-03-31T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 762 */
{
	"value_imgw" : 11.697,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-03-31T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 763 */
{
	"value_imgw" : 9.702,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-03-31T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 764 */
{
	"value_imgw" : 8.953,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-31T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 765 */
{
	"value_imgw" : 8.358,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-03-31T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 766 */
{
	"value_imgw" : 7.747,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-03-31T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 767 */
{
	"value_imgw" : 6.941,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-03-31T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 768 */
{
	"value_imgw" : 5.413,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-03-31T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 769 */
{
	"value_imgw" : 4.23,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-01T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 770 */
{
	"value_imgw" : 3.209,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-04-01T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 771 */
{
	"value_imgw" : 2.112,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-04-01T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 772 */
{
	"value_imgw" : 1.478,
	"value_um" : 0.1,
	"date_imgw_str" : "2019-04-01T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 773 */
{
	"value_imgw" : 0.21,
	"value_um" : -0.525,
	"date_imgw_str" : "2019-04-01T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 774 */
{
	"value_imgw" : -0.132,
	"value_um" : -0.525,
	"date_imgw_str" : "2019-04-01T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 775 */
{
	"value_imgw" : 1.958,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-04-01T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 776 */
{
	"value_imgw" : 1.958,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-04-01T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 777 */
{
	"value_imgw" : 3.917,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-01T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 778 */
{
	"value_imgw" : 5.416,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-04-01T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 779 */
{
	"value_imgw" : 6.886,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-01T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 780 */
{
	"value_imgw" : 7.83,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-01T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 781 */
{
	"value_imgw" : 9.05,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-04-01T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 782 */
{
	"value_imgw" : 9.543,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-01T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 783 */
{
	"value_imgw" : 10.177,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-04-01T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 784 */
{
	"value_imgw" : 10.52,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-04-01T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 785 */
{
	"value_imgw" : 10.405,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-01T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 786 */
{
	"value_imgw" : 9.874,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-04-01T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 787 */
{
	"value_imgw" : 8.727,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-01T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 788 */
{
	"value_imgw" : 7.109,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-04-01T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 789 */
{
	"value_imgw" : 6.073,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-01T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 790 */
{
	"value_imgw" : 5.166,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-04-01T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 791 */
{
	"value_imgw" : 4.116,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-04-01T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 792 */
{
	"value_imgw" : 3.153,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-04-01T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 793 */
{
	"value_imgw" : 2.386,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-04-01T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 794 */
{
	"value_imgw" : 1.906,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-04-02T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 795 */
{
	"value_imgw" : 1.468,
	"value_um" : 0.475,
	"date_imgw_str" : "2019-04-02T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 796 */
{
	"value_imgw" : 0.663,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-04-02T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 797 */
{
	"value_imgw" : 0.019,
	"value_um" : 0.1,
	"date_imgw_str" : "2019-04-02T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 798 */
{
	"value_imgw" : -0.542,
	"value_um" : -0.025,
	"date_imgw_str" : "2019-04-02T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 799 */
{
	"value_imgw" : -2.133,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-04-02T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 800 */
{
	"value_imgw" : 0.672,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-04-02T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 801 */
{
	"value_imgw" : 0.672,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-04-02T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 802 */
{
	"value_imgw" : 3.181,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-04-02T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 803 */
{
	"value_imgw" : 5.825,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-02T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 804 */
{
	"value_imgw" : 9.063,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-02T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 805 */
{
	"value_imgw" : 12.857,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-04-02T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 806 */
{
	"value_imgw" : 14.231,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-02T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 807 */
{
	"value_imgw" : 14.995,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-02T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 808 */
{
	"value_imgw" : 15.548,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-04-02T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 809 */
{
	"value_imgw" : 15.846,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-02T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 810 */
{
	"value_imgw" : 16.009,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-02T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 811 */
{
	"value_imgw" : 15.672,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-02T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 812 */
{
	"value_imgw" : 14.372,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-02T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 813 */
{
	"value_imgw" : 12.364,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-04-02T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 814 */
{
	"value_imgw" : 11.193,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-02T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 815 */
{
	"value_imgw" : 10.801,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-02T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 816 */
{
	"value_imgw" : 10.485,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-04-02T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 817 */
{
	"value_imgw" : 10.499,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-04-02T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 818 */
{
	"value_imgw" : 10.571,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-04-02T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 819 */
{
	"value_imgw" : 9.587,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-04-03T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 820 */
{
	"value_imgw" : 9.318,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-03T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 821 */
{
	"value_imgw" : 8.641,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-04-03T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 822 */
{
	"value_imgw" : 8.201,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-04-03T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 823 */
{
	"value_imgw" : 8.059,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-04-03T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 824 */
{
	"value_imgw" : 8.02,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-04-03T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 825 */
{
	"value_imgw" : 9.911,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-03T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 826 */
{
	"value_imgw" : 9.911,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-04-03T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 827 */
{
	"value_imgw" : 11.975,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-03T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 828 */
{
	"value_imgw" : 13.732,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-04-03T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 829 */
{
	"value_imgw" : 15.193,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-03T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 830 */
{
	"value_imgw" : 16.596,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-03T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 831 */
{
	"value_imgw" : 17.846,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-03T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 832 */
{
	"value_imgw" : 18.347,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-04-03T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 833 */
{
	"value_imgw" : 19.187,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-04-03T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 834 */
{
	"value_imgw" : 18.912,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-04-03T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 835 */
{
	"value_imgw" : 18.926,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-04-03T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 836 */
{
	"value_imgw" : 17.596,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-03T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 837 */
{
	"value_imgw" : 16,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-04-03T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 838 */
{
	"value_imgw" : 14.332,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-03T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 839 */
{
	"value_imgw" : 13.043,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-03T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 840 */
{
	"value_imgw" : 12.453,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-03T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 841 */
{
	"value_imgw" : 12.094,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-03T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 842 */
{
	"value_imgw" : 12.064,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-03T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 843 */
{
	"value_imgw" : 11.618,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-03T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 844 */
{
	"value_imgw" : 11.268,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-04-04T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 845 */
{
	"value_imgw" : 10.252,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-04-04T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 846 */
{
	"value_imgw" : 9.554,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-04T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 847 */
{
	"value_imgw" : 9.875,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-04T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 848 */
{
	"value_imgw" : 9.628,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-04T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 849 */
{
	"value_imgw" : 10.039,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-04-04T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 850 */
{
	"value_imgw" : 11.751,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-04-04T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 851 */
{
	"value_imgw" : 11.751,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-04T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 852 */
{
	"value_imgw" : 13.823,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-04-04T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 853 */
{
	"value_imgw" : 15.299,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-04T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 854 */
{
	"value_imgw" : 16.256,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-04T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 855 */
{
	"value_imgw" : 17.361,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-04T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 856 */
{
	"value_imgw" : 18.383,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-04-04T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 857 */
{
	"value_imgw" : 19.031,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-04-04T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 858 */
{
	"value_imgw" : 19.21,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-04-04T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 859 */
{
	"value_imgw" : 18.509,
	"value_um" : 16.35,
	"date_imgw_str" : "2019-04-04T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 860 */
{
	"value_imgw" : 18.316,
	"value_um" : 15.6,
	"date_imgw_str" : "2019-04-04T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 861 */
{
	"value_imgw" : 17.521,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-04-04T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 862 */
{
	"value_imgw" : 16.373,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-04-04T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 863 */
{
	"value_imgw" : 15.108,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-04-04T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 864 */
{
	"value_imgw" : 14.807,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-04T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 865 */
{
	"value_imgw" : 13.967,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-04T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 866 */
{
	"value_imgw" : 13.419,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-04T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 867 */
{
	"value_imgw" : 13.368,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-04T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 868 */
{
	"value_imgw" : 13.215,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-04-04T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 869 */
{
	"value_imgw" : 12.242,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-05T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 870 */
{
	"value_imgw" : 11.638,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-04-05T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 871 */
{
	"value_imgw" : 11.068,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-04-05T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 872 */
{
	"value_imgw" : 10.637,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-05T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 873 */
{
	"value_imgw" : 9.246,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-05T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 874 */
{
	"value_imgw" : 10.13,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-04-05T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 875 */
{
	"value_imgw" : 12.437,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-04-05T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 876 */
{
	"value_imgw" : 12.437,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-05T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 877 */
{
	"value_imgw" : 14.686,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-04-05T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 878 */
{
	"value_imgw" : 16.762,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-05T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 879 */
{
	"value_imgw" : 18.283,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-04-05T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 880 */
{
	"value_imgw" : 19.271,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-04-05T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 881 */
{
	"value_imgw" : 20.446,
	"value_um" : 16.35,
	"date_imgw_str" : "2019-04-05T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 882 */
{
	"value_imgw" : 20.069,
	"value_um" : 17.225,
	"date_imgw_str" : "2019-04-05T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 883 */
{
	"value_imgw" : 20.706,
	"value_um" : 17.6,
	"date_imgw_str" : "2019-04-05T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 884 */
{
	"value_imgw" : 19.871,
	"value_um" : 17.6,
	"date_imgw_str" : "2019-04-05T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 885 */
{
	"value_imgw" : 18.672,
	"value_um" : 17.35,
	"date_imgw_str" : "2019-04-05T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 886 */
{
	"value_imgw" : 18.101,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-04-05T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 887 */
{
	"value_imgw" : 17.199,
	"value_um" : 14.1,
	"date_imgw_str" : "2019-04-05T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 888 */
{
	"value_imgw" : 15.103,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-05T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 889 */
{
	"value_imgw" : 13.621,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-04-05T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 890 */
{
	"value_imgw" : 12.671,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-04-05T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 891 */
{
	"value_imgw" : 11.756,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-04-05T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 892 */
{
	"value_imgw" : 11.444,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-05T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 893 */
{
	"value_imgw" : 10.565,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-04-05T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 894 */
{
	"value_imgw" : 8.759,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-06T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 895 */
{
	"value_imgw" : 8.173,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-04-06T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 896 */
{
	"value_imgw" : 7.308,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-06T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 897 */
{
	"value_imgw" : 6.325,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-04-06T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 898 */
{
	"value_imgw" : 4.783,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-06T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 899 */
{
	"value_imgw" : 4.395,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-04-06T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 900 */
{
	"value_imgw" : 5.749,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-06T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 901 */
{
	"value_imgw" : 5.749,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-06T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 902 */
{
	"value_imgw" : 8.576,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-06T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 903 */
{
	"value_imgw" : 11.113,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-06T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 904 */
{
	"value_imgw" : 13.412,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-06T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 905 */
{
	"value_imgw" : 15.532,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-06T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 906 */
{
	"value_imgw" : 14.211,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-06T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 907 */
{
	"value_imgw" : 14.768,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-04-06T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 908 */
{
	"value_imgw" : 14.06,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-06T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 909 */
{
	"value_imgw" : 14.172,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-06T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 910 */
{
	"value_imgw" : 14.608,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-04-06T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 911 */
{
	"value_imgw" : 13.762,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-04-06T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 912 */
{
	"value_imgw" : 12.837,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-06T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 913 */
{
	"value_imgw" : 11.859,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-06T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 914 */
{
	"value_imgw" : 10.823,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-06T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 915 */
{
	"value_imgw" : 8.004,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-04-06T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 916 */
{
	"value_imgw" : 7.053,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-06T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 917 */
{
	"value_imgw" : 6.653,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-06T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 918 */
{
	"value_imgw" : 5.093,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-06T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 919 */
{
	"value_imgw" : 4.788,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-04-07T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 920 */
{
	"value_imgw" : 3.03,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-04-07T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 921 */
{
	"value_imgw" : 3.77,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-07T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 922 */
{
	"value_imgw" : 2.431,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-07T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 923 */
{
	"value_imgw" : 1.7,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-07T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 924 */
{
	"value_imgw" : 1.851,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-07T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 925 */
{
	"value_imgw" : 3.817,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-04-07T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 926 */
{
	"value_imgw" : 3.817,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-07T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 927 */
{
	"value_imgw" : 6.971,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-07T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 928 */
{
	"value_imgw" : 9.944,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-07T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 929 */
{
	"value_imgw" : 12.546,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-07T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 930 */
{
	"value_imgw" : 14.454,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-07T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 931 */
{
	"value_imgw" : 15.442,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-04-07T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 932 */
{
	"value_imgw" : 16.197,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-07T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 933 */
{
	"value_imgw" : 16.687,
	"value_um" : 14.6,
	"date_imgw_str" : "2019-04-07T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 934 */
{
	"value_imgw" : 16.8,
	"value_um" : 14.6,
	"date_imgw_str" : "2019-04-07T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 935 */
{
	"value_imgw" : 16.738,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-04-07T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 936 */
{
	"value_imgw" : 16.413,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-04-07T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 937 */
{
	"value_imgw" : 15.484,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-04-07T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 938 */
{
	"value_imgw" : 14.285,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-07T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 939 */
{
	"value_imgw" : 12.308,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-07T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 940 */
{
	"value_imgw" : 10.453,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-07T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 941 */
{
	"value_imgw" : 7.964,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-07T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 942 */
{
	"value_imgw" : 7.101,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-07T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 943 */
{
	"value_imgw" : 5.271,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-07T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 944 */
{
	"value_imgw" : 4.933,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-08T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 945 */
{
	"value_imgw" : 4.275,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-08T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 946 */
{
	"value_imgw" : 2.749,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-04-08T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 947 */
{
	"value_imgw" : 1.959,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-04-08T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 948 */
{
	"value_imgw" : 1.64,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-04-08T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 949 */
{
	"value_imgw" : 1.481,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-08T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 950 */
{
	"value_imgw" : 4.052,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-08T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 951 */
{
	"value_imgw" : 4.052,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-08T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 952 */
{
	"value_imgw" : 7.509,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-08T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 953 */
{
	"value_imgw" : 11.189,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-08T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 954 */
{
	"value_imgw" : 14.326,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-08T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 955 */
{
	"value_imgw" : 16.056,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-04-08T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 956 */
{
	"value_imgw" : 16.841,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-08T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 957 */
{
	"value_imgw" : 17.064,
	"value_um" : 15.6,
	"date_imgw_str" : "2019-04-08T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 958 */
{
	"value_imgw" : 17.6,
	"value_um" : 16.1,
	"date_imgw_str" : "2019-04-08T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 959 */
{
	"value_imgw" : 17.717,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-04-08T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 960 */
{
	"value_imgw" : 17.393,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-04-08T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 961 */
{
	"value_imgw" : 17.001,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-08T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 962 */
{
	"value_imgw" : 15.892,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-08T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 963 */
{
	"value_imgw" : 14.062,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-08T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 964 */
{
	"value_imgw" : 10.619,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-08T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 965 */
{
	"value_imgw" : 8.034,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-04-08T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 966 */
{
	"value_imgw" : 6.102,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-04-08T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 967 */
{
	"value_imgw" : 5.482,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-04-08T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 968 */
{
	"value_imgw" : 5.027,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-04-08T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 969 */
{
	"value_imgw" : 4.395,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-09T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 970 */
{
	"value_imgw" : 3.766,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-09T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 971 */
{
	"value_imgw" : 3.12,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-04-09T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 972 */
{
	"value_imgw" : 2.324,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-04-09T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 973 */
{
	"value_imgw" : 1.861,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-09T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 974 */
{
	"value_imgw" : 1.308,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-04-09T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 975 */
{
	"value_imgw" : 3.657,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-09T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 976 */
{
	"value_imgw" : 3.657,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-09T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 977 */
{
	"value_imgw" : 6.447,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-09T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 978 */
{
	"value_imgw" : 8.156,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-09T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 979 */
{
	"value_imgw" : 9.767,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-09T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 980 */
{
	"value_imgw" : 10.444,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-04-09T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 981 */
{
	"value_imgw" : 10.507,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-09T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 982 */
{
	"value_imgw" : 11.211,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-09T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 983 */
{
	"value_imgw" : 10.921,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-09T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 984 */
{
	"value_imgw" : 10.974,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-04-09T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 985 */
{
	"value_imgw" : 10.56,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-04-09T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 986 */
{
	"value_imgw" : 9.826,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-09T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 987 */
{
	"value_imgw" : 8.578,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-04-09T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 988 */
{
	"value_imgw" : 7.108,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-09T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 989 */
{
	"value_imgw" : 6.288,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-09T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 990 */
{
	"value_imgw" : 6.096,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-09T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 991 */
{
	"value_imgw" : 5.847,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-04-09T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 992 */
{
	"value_imgw" : 5.576,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-04-09T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 993 */
{
	"value_imgw" : 5.192,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-09T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 994 */
{
	"value_imgw" : 4.767,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-04-10T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 995 */
{
	"value_imgw" : 4.532,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-04-10T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 996 */
{
	"value_imgw" : 4.189,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-10T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 997 */
{
	"value_imgw" : 3.95,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-04-10T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 998 */
{
	"value_imgw" : 3.636,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-04-10T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 999 */
{
	"value_imgw" : 3.34,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-04-10T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1000 */
{
	"value_imgw" : 3.382,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-04-10T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1001 */
{
	"value_imgw" : 3.382,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-04-10T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1002 */
{
	"value_imgw" : 3.774,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-10T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1003 */
{
	"value_imgw" : 4.359,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-04-10T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1004 */
{
	"value_imgw" : 5.275,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-10T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1005 */
{
	"value_imgw" : 6.366,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-04-10T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1006 */
{
	"value_imgw" : 6.932,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-04-10T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1007 */
{
	"value_imgw" : 7.166,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-04-10T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1008 */
{
	"value_imgw" : 7.236,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-04-10T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1009 */
{
	"value_imgw" : 7.513,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-04-10T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1010 */
{
	"value_imgw" : 7.317,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-04-10T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1011 */
{
	"value_imgw" : 7.127,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-04-10T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1012 */
{
	"value_imgw" : 6.662,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-04-10T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1013 */
{
	"value_imgw" : 6.441,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-10T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1014 */
{
	"value_imgw" : 5.969,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-10T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1015 */
{
	"value_imgw" : 5.676,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-04-10T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1016 */
{
	"value_imgw" : 5.361,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-04-10T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1017 */
{
	"value_imgw" : 5.181,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-10T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1018 */
{
	"value_imgw" : 4.855,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-04-10T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1019 */
{
	"value_imgw" : 4.145,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-04-11T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1020 */
{
	"value_imgw" : 3.688,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-11T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1021 */
{
	"value_imgw" : 3.27,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-04-11T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1022 */
{
	"value_imgw" : 2.885,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-04-11T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1023 */
{
	"value_imgw" : 2.551,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-04-11T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1024 */
{
	"value_imgw" : 2.242,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-04-11T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1025 */
{
	"value_imgw" : 2.109,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-04-11T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1026 */
{
	"value_imgw" : 2.109,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-04-11T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1027 */
{
	"value_imgw" : 2.355,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-04-11T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1028 */
{
	"value_imgw" : 2.933,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-11T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1029 */
{
	"value_imgw" : 3.998,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-04-11T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1030 */
{
	"value_imgw" : 4.795,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-04-11T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1031 */
{
	"value_imgw" : 5.654,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-11T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1032 */
{
	"value_imgw" : 5.872,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-04-11T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1033 */
{
	"value_imgw" : 5.717,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-11T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1034 */
{
	"value_imgw" : 5.763,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-11T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1035 */
{
	"value_imgw" : 5.828,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-11T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1036 */
{
	"value_imgw" : 5.821,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-11T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1037 */
{
	"value_imgw" : 5.321,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-04-11T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1038 */
{
	"value_imgw" : 4.716,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-11T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1039 */
{
	"value_imgw" : 4.338,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-11T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1040 */
{
	"value_imgw" : 3.867,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-11T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1041 */
{
	"value_imgw" : 3.323,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-04-11T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1042 */
{
	"value_imgw" : 2.942,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-11T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1043 */
{
	"value_imgw" : 2.651,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-11T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1044 */
{
	"value_imgw" : 2.454,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-04-12T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1045 */
{
	"value_imgw" : 2.181,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-04-12T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1046 */
{
	"value_imgw" : 1.964,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-04-12T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1047 */
{
	"value_imgw" : 1.765,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-04-12T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1048 */
{
	"value_imgw" : 1.647,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-04-12T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1049 */
{
	"value_imgw" : 1.599,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-04-12T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1050 */
{
	"value_imgw" : 1.833,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-04-12T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1051 */
{
	"value_imgw" : 1.833,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-04-12T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1052 */
{
	"value_imgw" : 2.559,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-04-12T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1053 */
{
	"value_imgw" : 3.647,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-04-12T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1054 */
{
	"value_imgw" : 4.318,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-12T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1055 */
{
	"value_imgw" : 4.855,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-12T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1056 */
{
	"value_imgw" : 5.416,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-12T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1057 */
{
	"value_imgw" : 5.67,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-12T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1058 */
{
	"value_imgw" : 5.725,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-12T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1059 */
{
	"value_imgw" : 5.743,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-04-12T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1060 */
{
	"value_imgw" : 5.707,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-12T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1061 */
{
	"value_imgw" : 5.46,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-12T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1062 */
{
	"value_imgw" : 5.295,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-04-12T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1063 */
{
	"value_imgw" : 4.908,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-04-12T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1064 */
{
	"value_imgw" : 4.681,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-04-12T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1065 */
{
	"value_imgw" : 4.267,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-04-12T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1066 */
{
	"value_imgw" : 4.048,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-04-12T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1067 */
{
	"value_imgw" : 3.777,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-12T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1068 */
{
	"value_imgw" : 3.48,
	"value_um" : 1.975,
	"date_imgw_str" : "2019-04-12T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1069 */
{
	"value_imgw" : 3.18,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-04-13T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1070 */
{
	"value_imgw" : 2.901,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-04-13T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1071 */
{
	"value_imgw" : 2.596,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-04-13T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1072 */
{
	"value_imgw" : 2.032,
	"value_um" : 1.475,
	"date_imgw_str" : "2019-04-13T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1073 */
{
	"value_imgw" : 1.8,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-04-13T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1074 */
{
	"value_imgw" : 1.933,
	"value_um" : 1.725,
	"date_imgw_str" : "2019-04-13T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1075 */
{
	"value_imgw" : 2.149,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-04-13T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1076 */
{
	"value_imgw" : 2.149,
	"value_um" : 1.1,
	"date_imgw_str" : "2019-04-13T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1077 */
{
	"value_imgw" : 2.675,
	"value_um" : 1.35,
	"date_imgw_str" : "2019-04-13T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1078 */
{
	"value_imgw" : 2.937,
	"value_um" : 2.225,
	"date_imgw_str" : "2019-04-13T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1079 */
{
	"value_imgw" : 3.26,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-13T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1080 */
{
	"value_imgw" : 3.538,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-13T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1081 */
{
	"value_imgw" : 3.973,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-13T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1082 */
{
	"value_imgw" : 4.118,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-04-13T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1083 */
{
	"value_imgw" : 3.859,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-04-13T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1084 */
{
	"value_imgw" : 3.52,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-13T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1085 */
{
	"value_imgw" : 3.47,
	"value_um" : 3.725,
	"date_imgw_str" : "2019-04-13T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1086 */
{
	"value_imgw" : 3.174,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-13T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1087 */
{
	"value_imgw" : 2.562,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-13T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1088 */
{
	"value_imgw" : 1.983,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-13T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1089 */
{
	"value_imgw" : 1.941,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-13T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1090 */
{
	"value_imgw" : 1.844,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-13T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1091 */
{
	"value_imgw" : 1.932,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-13T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1092 */
{
	"value_imgw" : 1.975,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-13T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1093 */
{
	"value_imgw" : 2.077,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-13T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1094 */
{
	"value_imgw" : 1.911,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-14T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1095 */
{
	"value_imgw" : 1.872,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-04-14T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1096 */
{
	"value_imgw" : 1.955,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-14T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1097 */
{
	"value_imgw" : 1.922,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-04-14T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1098 */
{
	"value_imgw" : 1.943,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-04-14T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1099 */
{
	"value_imgw" : 1.966,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-04-14T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1100 */
{
	"value_imgw" : 2.949,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-04-14T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1101 */
{
	"value_imgw" : 2.949,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-14T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1102 */
{
	"value_imgw" : 4.091,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-14T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1103 */
{
	"value_imgw" : 5.667,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-04-14T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1104 */
{
	"value_imgw" : 6.725,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-04-14T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1105 */
{
	"value_imgw" : 8.208,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-04-14T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1106 */
{
	"value_imgw" : 10.249,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-04-14T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1107 */
{
	"value_imgw" : 11.071,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-14T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1108 */
{
	"value_imgw" : 11.792,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-14T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1109 */
{
	"value_imgw" : 13.089,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-14T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1110 */
{
	"value_imgw" : 12.817,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-14T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1111 */
{
	"value_imgw" : 12.553,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-14T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1112 */
{
	"value_imgw" : 11.801,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-04-14T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1113 */
{
	"value_imgw" : 10.448,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-14T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1114 */
{
	"value_imgw" : 9.096,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-04-14T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1115 */
{
	"value_imgw" : 7.861,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-04-14T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1116 */
{
	"value_imgw" : 7.029,
	"value_um" : 4.1,
	"date_imgw_str" : "2019-04-14T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1117 */
{
	"value_imgw" : 5.609,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-04-14T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1118 */
{
	"value_imgw" : 4.859,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-04-14T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1119 */
{
	"value_imgw" : 4.128,
	"value_um" : 2.35,
	"date_imgw_str" : "2019-04-15T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1120 */
{
	"value_imgw" : 3.502,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-04-15T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1121 */
{
	"value_imgw" : 2.341,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-04-15T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1122 */
{
	"value_imgw" : 2.124,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-04-15T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1123 */
{
	"value_imgw" : 0.358,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-04-15T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1124 */
{
	"value_imgw" : 1.165,
	"value_um" : 1.6,
	"date_imgw_str" : "2019-04-15T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1125 */
{
	"value_imgw" : 2.685,
	"value_um" : 3.1,
	"date_imgw_str" : "2019-04-15T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1126 */
{
	"value_imgw" : 2.685,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-15T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1127 */
{
	"value_imgw" : 5.867,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-04-15T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1128 */
{
	"value_imgw" : 7.468,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-15T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1129 */
{
	"value_imgw" : 9.291,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-15T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1130 */
{
	"value_imgw" : 10.286,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-15T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1131 */
{
	"value_imgw" : 10.787,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-15T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1132 */
{
	"value_imgw" : 11.444,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-15T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1133 */
{
	"value_imgw" : 12.007,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-15T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1134 */
{
	"value_imgw" : 12.344,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-15T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1135 */
{
	"value_imgw" : 12.031,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-15T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1136 */
{
	"value_imgw" : 11.542,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-15T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1137 */
{
	"value_imgw" : 10.683,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-15T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1138 */
{
	"value_imgw" : 8.898,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-04-15T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1139 */
{
	"value_imgw" : 7.229,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-15T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1140 */
{
	"value_imgw" : 6.087,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-15T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1141 */
{
	"value_imgw" : 3.024,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-04-15T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1142 */
{
	"value_imgw" : 2.92,
	"value_um" : 2.1,
	"date_imgw_str" : "2019-04-15T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1143 */
{
	"value_imgw" : 0.344,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-04-15T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1144 */
{
	"value_imgw" : -0.182,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-04-16T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1145 */
{
	"value_imgw" : -0.903,
	"value_um" : 0.225,
	"date_imgw_str" : "2019-04-16T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1146 */
{
	"value_imgw" : -1.985,
	"value_um" : -0.775,
	"date_imgw_str" : "2019-04-16T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1147 */
{
	"value_imgw" : -1.984,
	"value_um" : -1.025,
	"date_imgw_str" : "2019-04-16T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1148 */
{
	"value_imgw" : -2.651,
	"value_um" : -1.15,
	"date_imgw_str" : "2019-04-16T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1149 */
{
	"value_imgw" : -1.432,
	"value_um" : 0.6,
	"date_imgw_str" : "2019-04-16T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1150 */
{
	"value_imgw" : 1.721,
	"value_um" : 3.35,
	"date_imgw_str" : "2019-04-16T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1151 */
{
	"value_imgw" : 1.721,
	"value_um" : 2.475,
	"date_imgw_str" : "2019-04-16T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1152 */
{
	"value_imgw" : 5.145,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-16T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1153 */
{
	"value_imgw" : 9.449,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-04-16T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1154 */
{
	"value_imgw" : 10.368,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-16T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1155 */
{
	"value_imgw" : 11.219,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-16T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1156 */
{
	"value_imgw" : 12.585,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-16T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1157 */
{
	"value_imgw" : 13.45,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-16T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1158 */
{
	"value_imgw" : 13.665,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-16T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1159 */
{
	"value_imgw" : 14.236,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-16T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1160 */
{
	"value_imgw" : 14.301,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-16T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1161 */
{
	"value_imgw" : 14.02,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-16T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1162 */
{
	"value_imgw" : 13.123,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-16T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1163 */
{
	"value_imgw" : 11.091,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-16T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1164 */
{
	"value_imgw" : 9.631,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-04-16T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1165 */
{
	"value_imgw" : 8.49,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-16T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1166 */
{
	"value_imgw" : 7.108,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-04-16T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1167 */
{
	"value_imgw" : 6.308,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-04-16T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1168 */
{
	"value_imgw" : 5.449,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-16T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1169 */
{
	"value_imgw" : 4.946,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-17T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1170 */
{
	"value_imgw" : 3.838,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-04-17T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1171 */
{
	"value_imgw" : 1.259,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-04-17T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1172 */
{
	"value_imgw" : 1.424,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-17T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1173 */
{
	"value_imgw" : 2.534,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-17T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1174 */
{
	"value_imgw" : 3.609,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-17T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1175 */
{
	"value_imgw" : 5.407,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-17T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1176 */
{
	"value_imgw" : 5.407,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-17T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1177 */
{
	"value_imgw" : 7.715,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-17T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1178 */
{
	"value_imgw" : 9.463,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-17T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1179 */
{
	"value_imgw" : 11.4,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-17T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1180 */
{
	"value_imgw" : 12.978,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-17T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1181 */
{
	"value_imgw" : 14.743,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-17T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1182 */
{
	"value_imgw" : 15.876,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-04-17T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1183 */
{
	"value_imgw" : 16.526,
	"value_um" : 15.35,
	"date_imgw_str" : "2019-04-17T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1184 */
{
	"value_imgw" : 16.76,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-04-17T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1185 */
{
	"value_imgw" : 16.925,
	"value_um" : 14.85,
	"date_imgw_str" : "2019-04-17T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1186 */
{
	"value_imgw" : 16.791,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-04-17T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1187 */
{
	"value_imgw" : 15.857,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-04-17T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1188 */
{
	"value_imgw" : 14.212,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-17T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1189 */
{
	"value_imgw" : 12.404,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-17T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1190 */
{
	"value_imgw" : 9.395,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-04-17T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1191 */
{
	"value_imgw" : 6.218,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-17T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1192 */
{
	"value_imgw" : 5.588,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-04-17T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1193 */
{
	"value_imgw" : 4.41,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-04-17T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1194 */
{
	"value_imgw" : 3.217,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-04-18T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1195 */
{
	"value_imgw" : 2.096,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-18T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1196 */
{
	"value_imgw" : 1.445,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-18T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1197 */
{
	"value_imgw" : 0.235,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-04-18T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1198 */
{
	"value_imgw" : 0.291,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-18T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1199 */
{
	"value_imgw" : 0.98,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-18T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1200 */
{
	"value_imgw" : 4.854,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-04-18T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1201 */
{
	"value_imgw" : 4.854,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-18T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1202 */
{
	"value_imgw" : 8.994,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-18T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1203 */
{
	"value_imgw" : 13.092,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-18T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1204 */
{
	"value_imgw" : 16.642,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-18T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1205 */
{
	"value_imgw" : 17.321,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-04-18T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1206 */
{
	"value_imgw" : 18.028,
	"value_um" : 16.1,
	"date_imgw_str" : "2019-04-18T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1207 */
{
	"value_imgw" : 18.344,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-04-18T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1208 */
{
	"value_imgw" : 18.588,
	"value_um" : 16.725,
	"date_imgw_str" : "2019-04-18T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1209 */
{
	"value_imgw" : 19.033,
	"value_um" : 16.725,
	"date_imgw_str" : "2019-04-18T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1210 */
{
	"value_imgw" : 19.146,
	"value_um" : 16.35,
	"date_imgw_str" : "2019-04-18T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1211 */
{
	"value_imgw" : 18.567,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-04-18T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1212 */
{
	"value_imgw" : 17.619,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-18T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1213 */
{
	"value_imgw" : 15.911,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-18T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1214 */
{
	"value_imgw" : 13.671,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-04-18T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1215 */
{
	"value_imgw" : 8.971,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-18T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1216 */
{
	"value_imgw" : 9.519,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-18T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1217 */
{
	"value_imgw" : 5.994,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-04-18T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1218 */
{
	"value_imgw" : 5.118,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-18T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1219 */
{
	"value_imgw" : 4.129,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-04-19T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1220 */
{
	"value_imgw" : 3.252,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-19T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1221 */
{
	"value_imgw" : 3.059,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-04-19T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1222 */
{
	"value_imgw" : 1.792,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-04-19T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1223 */
{
	"value_imgw" : 0.939,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-19T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1224 */
{
	"value_imgw" : 1.956,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-19T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1225 */
{
	"value_imgw" : 5.68,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-04-19T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1226 */
{
	"value_imgw" : 5.68,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-19T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1227 */
{
	"value_imgw" : 9.672,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-04-19T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1228 */
{
	"value_imgw" : 13.671,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-19T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1229 */
{
	"value_imgw" : 17.173,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-19T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1230 */
{
	"value_imgw" : 18.978,
	"value_um" : 16.1,
	"date_imgw_str" : "2019-04-19T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1231 */
{
	"value_imgw" : 19.689,
	"value_um" : 16.6,
	"date_imgw_str" : "2019-04-19T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1232 */
{
	"value_imgw" : 20.145,
	"value_um" : 16.85,
	"date_imgw_str" : "2019-04-19T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1233 */
{
	"value_imgw" : 20.682,
	"value_um" : 16.725,
	"date_imgw_str" : "2019-04-19T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1234 */
{
	"value_imgw" : 20.643,
	"value_um" : 16.6,
	"date_imgw_str" : "2019-04-19T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1235 */
{
	"value_imgw" : 20.429,
	"value_um" : 16.225,
	"date_imgw_str" : "2019-04-19T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1236 */
{
	"value_imgw" : 20.103,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-04-19T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1237 */
{
	"value_imgw" : 19.014,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-19T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1238 */
{
	"value_imgw" : 16.624,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-04-19T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1239 */
{
	"value_imgw" : 14.639,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-04-19T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1240 */
{
	"value_imgw" : 12.795,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-19T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1241 */
{
	"value_imgw" : 8.453,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-19T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1242 */
{
	"value_imgw" : 6.899,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-04-19T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1243 */
{
	"value_imgw" : 6.008,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-04-19T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1244 */
{
	"value_imgw" : 4.515,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-20T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1245 */
{
	"value_imgw" : 3.065,
	"value_um" : 4.225,
	"date_imgw_str" : "2019-04-20T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1246 */
{
	"value_imgw" : 2.584,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-04-20T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1247 */
{
	"value_imgw" : 1.108,
	"value_um" : 3.225,
	"date_imgw_str" : "2019-04-20T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1248 */
{
	"value_imgw" : 0.933,
	"value_um" : 2.975,
	"date_imgw_str" : "2019-04-20T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1249 */
{
	"value_imgw" : 1.75,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-20T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1250 */
{
	"value_imgw" : 5.957,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-04-20T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1251 */
{
	"value_imgw" : 5.957,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-20T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1252 */
{
	"value_imgw" : 10.083,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-20T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1253 */
{
	"value_imgw" : 13.762,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-04-20T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1254 */
{
	"value_imgw" : 17.414,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-20T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1255 */
{
	"value_imgw" : 19.091,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-04-20T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1256 */
{
	"value_imgw" : 19.61,
	"value_um" : 16.725,
	"date_imgw_str" : "2019-04-20T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1257 */
{
	"value_imgw" : 20.015,
	"value_um" : 17.1,
	"date_imgw_str" : "2019-04-20T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1258 */
{
	"value_imgw" : 20.5,
	"value_um" : 16.975,
	"date_imgw_str" : "2019-04-20T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1259 */
{
	"value_imgw" : 20.331,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-04-20T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1260 */
{
	"value_imgw" : 20.091,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-04-20T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1261 */
{
	"value_imgw" : 18.957,
	"value_um" : 14.6,
	"date_imgw_str" : "2019-04-20T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1262 */
{
	"value_imgw" : 17.735,
	"value_um" : 12.975,
	"date_imgw_str" : "2019-04-20T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1263 */
{
	"value_imgw" : 15.72,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-20T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1264 */
{
	"value_imgw" : 14.196,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-20T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1265 */
{
	"value_imgw" : 12.852,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-04-20T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1266 */
{
	"value_imgw" : 10.313,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-20T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1267 */
{
	"value_imgw" : 8.389,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-04-20T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1268 */
{
	"value_imgw" : 5.6,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-20T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1269 */
{
	"value_imgw" : 4.371,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-21T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1270 */
{
	"value_imgw" : 3.478,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-04-21T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1271 */
{
	"value_imgw" : 3.382,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-04-21T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1272 */
{
	"value_imgw" : 2.08,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-04-21T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1273 */
{
	"value_imgw" : 1.439,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-04-21T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1274 */
{
	"value_imgw" : 2.803,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-04-21T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1275 */
{
	"value_imgw" : 6.483,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-04-21T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1276 */
{
	"value_imgw" : 6.483,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-04-21T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1277 */
{
	"value_imgw" : 10.216,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-21T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1278 */
{
	"value_imgw" : 13.046,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-21T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1279 */
{
	"value_imgw" : 15.202,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-04-21T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1280 */
{
	"value_imgw" : 16.177,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-21T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1281 */
{
	"value_imgw" : 16.603,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-21T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1282 */
{
	"value_imgw" : 17.69,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-21T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1283 */
{
	"value_imgw" : 18.158,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-04-21T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1284 */
{
	"value_imgw" : 18.112,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-04-21T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1285 */
{
	"value_imgw" : 18.322,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-04-21T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1286 */
{
	"value_imgw" : 18.39,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-21T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1287 */
{
	"value_imgw" : 17.068,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-21T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1288 */
{
	"value_imgw" : 15.384,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-21T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1289 */
{
	"value_imgw" : 12.821,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-21T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1290 */
{
	"value_imgw" : 9.165,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-04-21T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1291 */
{
	"value_imgw" : 6.893,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-04-21T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1292 */
{
	"value_imgw" : 6.396,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-04-21T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1293 */
{
	"value_imgw" : 4.941,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-21T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1294 */
{
	"value_imgw" : 5.49,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-04-22T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1295 */
{
	"value_imgw" : 3.741,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-22T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1296 */
{
	"value_imgw" : 2.958,
	"value_um" : 5.85,
	"date_imgw_str" : "2019-04-22T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1297 */
{
	"value_imgw" : 1.95,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-04-22T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1298 */
{
	"value_imgw" : 2.242,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-22T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1299 */
{
	"value_imgw" : 3.615,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-04-22T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1300 */
{
	"value_imgw" : 7.412,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-04-22T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1301 */
{
	"value_imgw" : 7.412,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-04-22T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1302 */
{
	"value_imgw" : 8.699,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-04-22T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1303 */
{
	"value_imgw" : 9.357,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-04-22T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1304 */
{
	"value_imgw" : 9.832,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-22T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1305 */
{
	"value_imgw" : 10.598,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-22T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1306 */
{
	"value_imgw" : 11.315,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-04-22T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1307 */
{
	"value_imgw" : 12.463,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-04-22T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1308 */
{
	"value_imgw" : 14.009,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-04-22T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1309 */
{
	"value_imgw" : 15.164,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-04-22T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1310 */
{
	"value_imgw" : 16.304,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-22T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1311 */
{
	"value_imgw" : 15.712,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-04-22T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1312 */
{
	"value_imgw" : 15.39,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-22T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1313 */
{
	"value_imgw" : 14.233,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-04-22T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1314 */
{
	"value_imgw" : 13.219,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-22T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1315 */
{
	"value_imgw" : 12.902,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-04-22T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1316 */
{
	"value_imgw" : 11.539,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-22T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1317 */
{
	"value_imgw" : 11.262,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-22T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1318 */
{
	"value_imgw" : 10.314,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-22T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1319 */
{
	"value_imgw" : 9.678,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-04-23T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1320 */
{
	"value_imgw" : 7.887,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-04-23T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1321 */
{
	"value_imgw" : 7.319,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-04-23T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1322 */
{
	"value_imgw" : 6.558,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-04-23T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1323 */
{
	"value_imgw" : 6.097,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-04-23T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1324 */
{
	"value_imgw" : 6.695,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-04-23T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1325 */
{
	"value_imgw" : 8.655,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-23T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1326 */
{
	"value_imgw" : 8.655,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-04-23T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1327 */
{
	"value_imgw" : 10.185,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-04-23T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1328 */
{
	"value_imgw" : 12.282,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-04-23T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1329 */
{
	"value_imgw" : 14.664,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-23T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1330 */
{
	"value_imgw" : 15.594,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-04-23T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1331 */
{
	"value_imgw" : 16.909,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-04-23T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1332 */
{
	"value_imgw" : 17.823,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-04-23T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1333 */
{
	"value_imgw" : 16.968,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-04-23T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1334 */
{
	"value_imgw" : 16.458,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-04-23T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1335 */
{
	"value_imgw" : 14.851,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-04-23T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1336 */
{
	"value_imgw" : 14.14,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-04-23T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1337 */
{
	"value_imgw" : 13.765,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-23T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1338 */
{
	"value_imgw" : 13.224,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-23T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1339 */
{
	"value_imgw" : 12.626,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-23T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1340 */
{
	"value_imgw" : 12.071,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-23T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1341 */
{
	"value_imgw" : 11.582,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-04-23T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1342 */
{
	"value_imgw" : 11.315,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-23T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1343 */
{
	"value_imgw" : 11.344,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-23T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1344 */
{
	"value_imgw" : 11.325,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-24T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1345 */
{
	"value_imgw" : 11.055,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-04-24T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1346 */
{
	"value_imgw" : 11.011,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-24T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1347 */
{
	"value_imgw" : 11.028,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-24T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1348 */
{
	"value_imgw" : 10.878,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-24T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1349 */
{
	"value_imgw" : 11.113,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-24T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1350 */
{
	"value_imgw" : 11.884,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-04-24T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1351 */
{
	"value_imgw" : 11.884,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-04-24T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1352 */
{
	"value_imgw" : 12.582,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-24T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1353 */
{
	"value_imgw" : 13.391,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-04-24T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1354 */
{
	"value_imgw" : 14.055,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-24T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1355 */
{
	"value_imgw" : 14.541,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-24T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1356 */
{
	"value_imgw" : 15.535,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-24T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1357 */
{
	"value_imgw" : 17.697,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-04-24T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1358 */
{
	"value_imgw" : 18.966,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-04-24T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1359 */
{
	"value_imgw" : 19.641,
	"value_um" : 16.725,
	"date_imgw_str" : "2019-04-24T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1360 */
{
	"value_imgw" : 19.799,
	"value_um" : 16.725,
	"date_imgw_str" : "2019-04-24T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1361 */
{
	"value_imgw" : 19.506,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-04-24T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1362 */
{
	"value_imgw" : 19.011,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-24T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1363 */
{
	"value_imgw" : 17.836,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-04-24T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1364 */
{
	"value_imgw" : 16.991,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-04-24T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1365 */
{
	"value_imgw" : 16.706,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-24T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1366 */
{
	"value_imgw" : 16.362,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-04-24T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1367 */
{
	"value_imgw" : 15.818,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-24T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1368 */
{
	"value_imgw" : 15.388,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-24T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1369 */
{
	"value_imgw" : 14.813,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-25T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1370 */
{
	"value_imgw" : 14.43,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-04-25T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1371 */
{
	"value_imgw" : 14.027,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-04-25T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1372 */
{
	"value_imgw" : 13.413,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-04-25T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1373 */
{
	"value_imgw" : 13.551,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-25T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1374 */
{
	"value_imgw" : 14.033,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-04-25T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1375 */
{
	"value_imgw" : 15.181,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-25T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1376 */
{
	"value_imgw" : 15.181,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-04-25T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1377 */
{
	"value_imgw" : 17.517,
	"value_um" : 16.225,
	"date_imgw_str" : "2019-04-25T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1378 */
{
	"value_imgw" : 19.122,
	"value_um" : 18.1,
	"date_imgw_str" : "2019-04-25T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1379 */
{
	"value_imgw" : 20.751,
	"value_um" : 19.85,
	"date_imgw_str" : "2019-04-25T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1380 */
{
	"value_imgw" : 21.993,
	"value_um" : 20.975,
	"date_imgw_str" : "2019-04-25T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1381 */
{
	"value_imgw" : 23.108,
	"value_um" : 21.85,
	"date_imgw_str" : "2019-04-25T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1382 */
{
	"value_imgw" : 24.373,
	"value_um" : 22.35,
	"date_imgw_str" : "2019-04-25T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1383 */
{
	"value_imgw" : 24.905,
	"value_um" : 22.725,
	"date_imgw_str" : "2019-04-25T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1384 */
{
	"value_imgw" : 24.904,
	"value_um" : 22.85,
	"date_imgw_str" : "2019-04-25T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1385 */
{
	"value_imgw" : 24.882,
	"value_um" : 22.475,
	"date_imgw_str" : "2019-04-25T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1386 */
{
	"value_imgw" : 24.263,
	"value_um" : 21.6,
	"date_imgw_str" : "2019-04-25T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1387 */
{
	"value_imgw" : 22.768,
	"value_um" : 19.6,
	"date_imgw_str" : "2019-04-25T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1388 */
{
	"value_imgw" : 20.945,
	"value_um" : 17.1,
	"date_imgw_str" : "2019-04-25T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1389 */
{
	"value_imgw" : 17.253,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-04-25T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1390 */
{
	"value_imgw" : 16.789,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-25T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1391 */
{
	"value_imgw" : 16.529,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-04-25T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1392 */
{
	"value_imgw" : 14.851,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-04-25T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1393 */
{
	"value_imgw" : 13.302,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-04-25T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1394 */
{
	"value_imgw" : 12.287,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-26T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1395 */
{
	"value_imgw" : 11.465,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-04-26T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1396 */
{
	"value_imgw" : 10.24,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-26T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1397 */
{
	"value_imgw" : 9.718,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-26T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1398 */
{
	"value_imgw" : 9.525,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-26T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1399 */
{
	"value_imgw" : 10.751,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-26T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1400 */
{
	"value_imgw" : 14.638,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-04-26T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1401 */
{
	"value_imgw" : 14.638,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-04-26T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1402 */
{
	"value_imgw" : 18.206,
	"value_um" : 16.85,
	"date_imgw_str" : "2019-04-26T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1403 */
{
	"value_imgw" : 21.062,
	"value_um" : 19.1,
	"date_imgw_str" : "2019-04-26T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1404 */
{
	"value_imgw" : 22.368,
	"value_um" : 20.725,
	"date_imgw_str" : "2019-04-26T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1405 */
{
	"value_imgw" : 24.239,
	"value_um" : 21.6,
	"date_imgw_str" : "2019-04-26T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1406 */
{
	"value_imgw" : 25.222,
	"value_um" : 23.1,
	"date_imgw_str" : "2019-04-26T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1407 */
{
	"value_imgw" : 25.618,
	"value_um" : 23.35,
	"date_imgw_str" : "2019-04-26T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1408 */
{
	"value_imgw" : 25.484,
	"value_um" : 24.1,
	"date_imgw_str" : "2019-04-26T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1409 */
{
	"value_imgw" : 24.784,
	"value_um" : 24.225,
	"date_imgw_str" : "2019-04-26T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1410 */
{
	"value_imgw" : 24.229,
	"value_um" : 23.6,
	"date_imgw_str" : "2019-04-26T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1411 */
{
	"value_imgw" : 23.433,
	"value_um" : 22.6,
	"date_imgw_str" : "2019-04-26T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1412 */
{
	"value_imgw" : 22.043,
	"value_um" : 20.475,
	"date_imgw_str" : "2019-04-26T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1413 */
{
	"value_imgw" : 20.16,
	"value_um" : 17.85,
	"date_imgw_str" : "2019-04-26T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1414 */
{
	"value_imgw" : 18.8,
	"value_um" : 16.975,
	"date_imgw_str" : "2019-04-26T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1415 */
{
	"value_imgw" : 16.872,
	"value_um" : 16.6,
	"date_imgw_str" : "2019-04-26T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1416 */
{
	"value_imgw" : 15.619,
	"value_um" : 16.35,
	"date_imgw_str" : "2019-04-26T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1417 */
{
	"value_imgw" : 14.657,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-04-26T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1418 */
{
	"value_imgw" : 13.602,
	"value_um" : 14.6,
	"date_imgw_str" : "2019-04-26T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1419 */
{
	"value_imgw" : 12.337,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-04-27T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1420 */
{
	"value_imgw" : 11.736,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-04-27T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1421 */
{
	"value_imgw" : 11.377,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-04-27T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1422 */
{
	"value_imgw" : 10.998,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-04-27T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1423 */
{
	"value_imgw" : 10.575,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-04-27T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1424 */
{
	"value_imgw" : 10.082,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-04-27T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1425 */
{
	"value_imgw" : 9.994,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-04-27T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1426 */
{
	"value_imgw" : 9.994,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-27T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1427 */
{
	"value_imgw" : 9.78,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-27T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1428 */
{
	"value_imgw" : 10.083,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-27T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1429 */
{
	"value_imgw" : 10.505,
	"value_um" : 12.975,
	"date_imgw_str" : "2019-04-27T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1430 */
{
	"value_imgw" : 10.534,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-27T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1431 */
{
	"value_imgw" : 10.892,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-04-27T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1432 */
{
	"value_imgw" : 11.418,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-04-27T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1433 */
{
	"value_imgw" : 12.162,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-04-27T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1434 */
{
	"value_imgw" : 12.864,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-04-27T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1435 */
{
	"value_imgw" : 12.907,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-04-27T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1436 */
{
	"value_imgw" : 13.014,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-04-27T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1437 */
{
	"value_imgw" : 12.909,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-04-27T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1438 */
{
	"value_imgw" : 10.945,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-27T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1439 */
{
	"value_imgw" : 9.734,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-27T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1440 */
{
	"value_imgw" : 8.782,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-27T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1441 */
{
	"value_imgw" : 8.789,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-27T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1442 */
{
	"value_imgw" : 8.16,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-27T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1443 */
{
	"value_imgw" : 7.985,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-27T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1444 */
{
	"value_imgw" : 7.827,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-04-28T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1445 */
{
	"value_imgw" : 7.084,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-04-28T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1446 */
{
	"value_imgw" : 6.734,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-28T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1447 */
{
	"value_imgw" : 6.68,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-28T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1448 */
{
	"value_imgw" : 8.271,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-28T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1449 */
{
	"value_imgw" : 8.476,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-04-28T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1450 */
{
	"value_imgw" : 8.919,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-28T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1451 */
{
	"value_imgw" : 8.919,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-28T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1452 */
{
	"value_imgw" : 9.346,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-28T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1453 */
{
	"value_imgw" : 10.214,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-28T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1454 */
{
	"value_imgw" : 11.28,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-04-28T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1455 */
{
	"value_imgw" : 11.885,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-28T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1456 */
{
	"value_imgw" : 12.313,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-04-28T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1457 */
{
	"value_imgw" : 13.484,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-04-28T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1458 */
{
	"value_imgw" : 13.387,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-28T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1459 */
{
	"value_imgw" : 13.406,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-28T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1460 */
{
	"value_imgw" : 12.88,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-28T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1461 */
{
	"value_imgw" : 12.388,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-28T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1462 */
{
	"value_imgw" : 11.633,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-28T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1463 */
{
	"value_imgw" : 10.873,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-04-28T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1464 */
{
	"value_imgw" : 10.552,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-28T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1465 */
{
	"value_imgw" : 9.67,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-04-28T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1466 */
{
	"value_imgw" : 9.191,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-04-28T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1467 */
{
	"value_imgw" : 8.984,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-04-28T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1468 */
{
	"value_imgw" : 8.815,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-28T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1469 */
{
	"value_imgw" : 8.165,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-29T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1470 */
{
	"value_imgw" : 8.161,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-29T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1471 */
{
	"value_imgw" : 7.923,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-29T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1472 */
{
	"value_imgw" : 7.909,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-04-29T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1473 */
{
	"value_imgw" : 7.962,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-04-29T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1474 */
{
	"value_imgw" : 8.212,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-04-29T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1475 */
{
	"value_imgw" : 8.438,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-04-29T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1476 */
{
	"value_imgw" : 8.438,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-04-29T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1477 */
{
	"value_imgw" : 8.908,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-29T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1478 */
{
	"value_imgw" : 9.224,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-29T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1479 */
{
	"value_imgw" : 9.368,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-29T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1480 */
{
	"value_imgw" : 9.57,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-29T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1481 */
{
	"value_imgw" : 9.582,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-04-29T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1482 */
{
	"value_imgw" : 9.676,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-04-29T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1483 */
{
	"value_imgw" : 9.725,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-29T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1484 */
{
	"value_imgw" : 9.641,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-04-29T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1485 */
{
	"value_imgw" : 10.147,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-04-29T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1486 */
{
	"value_imgw" : 10.106,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-04-29T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1487 */
{
	"value_imgw" : 10.177,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-04-29T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1488 */
{
	"value_imgw" : 10.067,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-04-29T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1489 */
{
	"value_imgw" : 10.15,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-29T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1490 */
{
	"value_imgw" : 10.152,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-29T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1491 */
{
	"value_imgw" : 10.118,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-04-29T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1492 */
{
	"value_imgw" : 10.25,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-04-29T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1493 */
{
	"value_imgw" : 9.893,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-04-29T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1494 */
{
	"value_imgw" : 9.992,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-30T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1495 */
{
	"value_imgw" : 9.922,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-30T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1496 */
{
	"value_imgw" : 9.858,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-04-30T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1497 */
{
	"value_imgw" : 9.772,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-30T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1498 */
{
	"value_imgw" : 9.25,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-30T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1499 */
{
	"value_imgw" : 8.973,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-30T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1500 */
{
	"value_imgw" : 9.166,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-30T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1501 */
{
	"value_imgw" : 9.166,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-04-30T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1502 */
{
	"value_imgw" : 9.368,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-30T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1503 */
{
	"value_imgw" : 9.42,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-04-30T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1504 */
{
	"value_imgw" : 10.17,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-04-30T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1505 */
{
	"value_imgw" : 11.873,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-04-30T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1506 */
{
	"value_imgw" : 14.153,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-04-30T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1507 */
{
	"value_imgw" : 14.383,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-04-30T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1508 */
{
	"value_imgw" : 15.926,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-04-30T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1509 */
{
	"value_imgw" : 16.536,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-04-30T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1510 */
{
	"value_imgw" : 17.033,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-04-30T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1511 */
{
	"value_imgw" : 17.051,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-04-30T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1512 */
{
	"value_imgw" : 16.426,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-04-30T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1513 */
{
	"value_imgw" : 14.776,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-04-30T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1514 */
{
	"value_imgw" : 12.639,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-04-30T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1515 */
{
	"value_imgw" : 11.34,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-04-30T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1516 */
{
	"value_imgw" : 10.776,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-04-30T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1517 */
{
	"value_imgw" : 9.593,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-04-30T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1518 */
{
	"value_imgw" : 9.457,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-04-30T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1519 */
{
	"value_imgw" : 8.854,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-05-01T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1520 */
{
	"value_imgw" : 8.287,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-01T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1521 */
{
	"value_imgw" : 6.546,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-05-01T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1522 */
{
	"value_imgw" : 5.306,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-05-01T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1523 */
{
	"value_imgw" : 4.767,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-01T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1524 */
{
	"value_imgw" : 6.295,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-01T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1525 */
{
	"value_imgw" : 8.692,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-01T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1526 */
{
	"value_imgw" : 8.692,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-05-01T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1527 */
{
	"value_imgw" : 11.614,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-01T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1528 */
{
	"value_imgw" : 13.366,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-01T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1529 */
{
	"value_imgw" : 14.611,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-01T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1530 */
{
	"value_imgw" : 15.833,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-05-01T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1531 */
{
	"value_imgw" : 16.021,
	"value_um" : 15.6,
	"date_imgw_str" : "2019-05-01T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1532 */
{
	"value_imgw" : 16.099,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-05-01T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1533 */
{
	"value_imgw" : 17.024,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-05-01T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1534 */
{
	"value_imgw" : 16.519,
	"value_um" : 15.6,
	"date_imgw_str" : "2019-05-01T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1535 */
{
	"value_imgw" : 16.145,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-05-01T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1536 */
{
	"value_imgw" : 15.669,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-05-01T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1537 */
{
	"value_imgw" : 14.838,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-05-01T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1538 */
{
	"value_imgw" : 13.962,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-05-01T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1539 */
{
	"value_imgw" : 12.803,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-01T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1540 */
{
	"value_imgw" : 12.044,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-01T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1541 */
{
	"value_imgw" : 11.62,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-01T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1542 */
{
	"value_imgw" : 11.864,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-01T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1543 */
{
	"value_imgw" : 11.199,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-01T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1544 */
{
	"value_imgw" : 10.653,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-02T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1545 */
{
	"value_imgw" : 9.463,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-02T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1546 */
{
	"value_imgw" : 8.642,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-02T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1547 */
{
	"value_imgw" : 7.969,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-05-02T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1548 */
{
	"value_imgw" : 7.735,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-02T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1549 */
{
	"value_imgw" : 10.665,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-02T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1550 */
{
	"value_imgw" : 12.778,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-05-02T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1551 */
{
	"value_imgw" : 12.778,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-02T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1552 */
{
	"value_imgw" : 13.764,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-02T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1553 */
{
	"value_imgw" : 15.286,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-02T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1554 */
{
	"value_imgw" : 16.181,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-05-02T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1555 */
{
	"value_imgw" : 16.956,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-05-02T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1556 */
{
	"value_imgw" : 17.488,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-05-02T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1557 */
{
	"value_imgw" : 18.035,
	"value_um" : 15.6,
	"date_imgw_str" : "2019-05-02T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1558 */
{
	"value_imgw" : 18.227,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-05-02T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1559 */
{
	"value_imgw" : 18.556,
	"value_um" : 15.35,
	"date_imgw_str" : "2019-05-02T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1560 */
{
	"value_imgw" : 18.67,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-05-02T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1561 */
{
	"value_imgw" : 18.163,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-05-02T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1562 */
{
	"value_imgw" : 16.88,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-05-02T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1563 */
{
	"value_imgw" : 14.74,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-05-02T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1564 */
{
	"value_imgw" : 13.273,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-02T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1565 */
{
	"value_imgw" : 12.176,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-02T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1566 */
{
	"value_imgw" : 11.331,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-05-02T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1567 */
{
	"value_imgw" : 10.217,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-05-02T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1568 */
{
	"value_imgw" : 8.448,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-02T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1569 */
{
	"value_imgw" : 7.931,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-03T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1570 */
{
	"value_imgw" : 7.52,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-03T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1571 */
{
	"value_imgw" : 6.916,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-03T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1572 */
{
	"value_imgw" : 7.322,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-03T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1573 */
{
	"value_imgw" : 7.697,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-05-03T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1574 */
{
	"value_imgw" : 8.508,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-03T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1575 */
{
	"value_imgw" : 9.717,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-05-03T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1576 */
{
	"value_imgw" : 9.717,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-05-03T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1577 */
{
	"value_imgw" : 9.311,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-05-03T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1578 */
{
	"value_imgw" : 8.145,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-05-03T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1579 */
{
	"value_imgw" : 8.061,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-03T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1580 */
{
	"value_imgw" : 8.518,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-03T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1581 */
{
	"value_imgw" : 8.925,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-03T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1582 */
{
	"value_imgw" : 9.657,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-05-03T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1583 */
{
	"value_imgw" : 10.311,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-05-03T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1584 */
{
	"value_imgw" : 11.389,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-05-03T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1585 */
{
	"value_imgw" : 11.075,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-03T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1586 */
{
	"value_imgw" : 10.342,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-03T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1587 */
{
	"value_imgw" : 9.743,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-03T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1588 */
{
	"value_imgw" : 9.048,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-03T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1589 */
{
	"value_imgw" : 7.408,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-05-03T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1590 */
{
	"value_imgw" : 6.53,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-05-03T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1591 */
{
	"value_imgw" : 5.654,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-05-03T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1592 */
{
	"value_imgw" : 4.991,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-05-03T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1593 */
{
	"value_imgw" : 4.127,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-05-03T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1594 */
{
	"value_imgw" : 3.601,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-05-04T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1595 */
{
	"value_imgw" : 3.178,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-05-04T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1596 */
{
	"value_imgw" : 3.035,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-05-04T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1597 */
{
	"value_imgw" : 3.096,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-05-04T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1598 */
{
	"value_imgw" : 2.716,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-05-04T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1599 */
{
	"value_imgw" : 4.485,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-05-04T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1600 */
{
	"value_imgw" : 7.234,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-04T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1601 */
{
	"value_imgw" : 7.234,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-04T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1602 */
{
	"value_imgw" : 9.415,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-04T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1603 */
{
	"value_imgw" : 10.732,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-05-04T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1604 */
{
	"value_imgw" : 11.912,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-05-04T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1605 */
{
	"value_imgw" : 12.696,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-05-04T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1606 */
{
	"value_imgw" : 13.496,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-05-04T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1607 */
{
	"value_imgw" : 14.289,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-05-04T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1608 */
{
	"value_imgw" : 14.012,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-04T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1609 */
{
	"value_imgw" : 14.361,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-05-04T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1610 */
{
	"value_imgw" : 12.329,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-05-04T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1611 */
{
	"value_imgw" : 8.504,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-04T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1612 */
{
	"value_imgw" : 5.488,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-05-04T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1613 */
{
	"value_imgw" : 3.637,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-05-04T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1614 */
{
	"value_imgw" : 2.598,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-05-04T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1615 */
{
	"value_imgw" : 2.598,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-05-04T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1616 */
{
	"value_imgw" : 2.281,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-04T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1617 */
{
	"value_imgw" : 2.229,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-04T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1618 */
{
	"value_imgw" : 2.371,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-04T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1619 */
{
	"value_imgw" : 2.586,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-05T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1620 */
{
	"value_imgw" : 2.852,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-05T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1621 */
{
	"value_imgw" : 3.175,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-05-05T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1622 */
{
	"value_imgw" : 3.192,
	"value_um" : 4.85,
	"date_imgw_str" : "2019-05-05T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1623 */
{
	"value_imgw" : 3.329,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-05-05T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1624 */
{
	"value_imgw" : 3.701,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-05-05T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1625 */
{
	"value_imgw" : 4.09,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-05-05T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1626 */
{
	"value_imgw" : 4.09,
	"value_um" : 2.85,
	"date_imgw_str" : "2019-05-05T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1627 */
{
	"value_imgw" : 5.695,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-05-05T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1628 */
{
	"value_imgw" : 6.18,
	"value_um" : 3.85,
	"date_imgw_str" : "2019-05-05T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1629 */
{
	"value_imgw" : 7.339,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-05-05T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1630 */
{
	"value_imgw" : 7.956,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-05-05T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1631 */
{
	"value_imgw" : 8.305,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-05T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1632 */
{
	"value_imgw" : 9.198,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-05-05T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1633 */
{
	"value_imgw" : 9.142,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-05-05T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1634 */
{
	"value_imgw" : 9.042,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-05T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1635 */
{
	"value_imgw" : 9.177,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-05-05T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1636 */
{
	"value_imgw" : 8.931,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-05T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1637 */
{
	"value_imgw" : 8.798,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-05T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1638 */
{
	"value_imgw" : 8.252,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-05-05T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1639 */
{
	"value_imgw" : 7.349,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-05T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1640 */
{
	"value_imgw" : 6.657,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-05-05T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1641 */
{
	"value_imgw" : 6.173,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-05T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1642 */
{
	"value_imgw" : 5.69,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-05T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1643 */
{
	"value_imgw" : 5.147,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-05-05T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1644 */
{
	"value_imgw" : 5.173,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-05-06T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1645 */
{
	"value_imgw" : 4.709,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-05-06T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1646 */
{
	"value_imgw" : 4.441,
	"value_um" : 4.975,
	"date_imgw_str" : "2019-05-06T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1647 */
{
	"value_imgw" : 4.301,
	"value_um" : 4.6,
	"date_imgw_str" : "2019-05-06T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1648 */
{
	"value_imgw" : 4.209,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-05-06T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1649 */
{
	"value_imgw" : 4.882,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-05-06T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1650 */
{
	"value_imgw" : 6.118,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-05-06T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1651 */
{
	"value_imgw" : 6.118,
	"value_um" : 5.1,
	"date_imgw_str" : "2019-05-06T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1652 */
{
	"value_imgw" : 7.847,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-06T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1653 */
{
	"value_imgw" : 9.593,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-05-06T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1654 */
{
	"value_imgw" : 9.916,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-06T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1655 */
{
	"value_imgw" : 10.166,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-05-06T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1656 */
{
	"value_imgw" : 11.176,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-06T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1657 */
{
	"value_imgw" : 11.268,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-06T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1658 */
{
	"value_imgw" : 10.193,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-06T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1659 */
{
	"value_imgw" : 10.293,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-05-06T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1660 */
{
	"value_imgw" : 10.351,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-06T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1661 */
{
	"value_imgw" : 10.134,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-06T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1662 */
{
	"value_imgw" : 9.728,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-05-06T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1663 */
{
	"value_imgw" : 9.085,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-06T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1664 */
{
	"value_imgw" : 7.429,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-06T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1665 */
{
	"value_imgw" : 5.654,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-06T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1666 */
{
	"value_imgw" : 4.646,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-06T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1667 */
{
	"value_imgw" : 4.555,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-06T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1668 */
{
	"value_imgw" : 3.347,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-05-06T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1669 */
{
	"value_imgw" : 2.15,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-05-07T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1670 */
{
	"value_imgw" : 1.671,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-05-07T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1671 */
{
	"value_imgw" : 1.539,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-05-07T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1672 */
{
	"value_imgw" : 1.629,
	"value_um" : 4.35,
	"date_imgw_str" : "2019-05-07T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1673 */
{
	"value_imgw" : 1.286,
	"value_um" : 3.975,
	"date_imgw_str" : "2019-05-07T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1674 */
{
	"value_imgw" : 2.675,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-05-07T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1675 */
{
	"value_imgw" : 4.64,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-07T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1676 */
{
	"value_imgw" : 4.64,
	"value_um" : 6.85,
	"date_imgw_str" : "2019-05-07T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1677 */
{
	"value_imgw" : 6.715,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-07T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1678 */
{
	"value_imgw" : 9.571,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-05-07T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1679 */
{
	"value_imgw" : 10.57,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-05-07T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1680 */
{
	"value_imgw" : 11.599,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-05-07T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1681 */
{
	"value_imgw" : 11.642,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-05-07T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1682 */
{
	"value_imgw" : 11.99,
	"value_um" : 11.6,
	"date_imgw_str" : "2019-05-07T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1683 */
{
	"value_imgw" : 12.55,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-07T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1684 */
{
	"value_imgw" : 11.761,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-05-07T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1685 */
{
	"value_imgw" : 10.224,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-05-07T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1686 */
{
	"value_imgw" : 10.142,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-05-07T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1687 */
{
	"value_imgw" : 9.597,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-05-07T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1688 */
{
	"value_imgw" : 8.456,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-07T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1689 */
{
	"value_imgw" : 7.484,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-07T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1690 */
{
	"value_imgw" : 6.256,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-05-07T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1691 */
{
	"value_imgw" : 5.302,
	"value_um" : 4.475,
	"date_imgw_str" : "2019-05-07T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1692 */
{
	"value_imgw" : 4.064,
	"value_um" : 3.6,
	"date_imgw_str" : "2019-05-07T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1693 */
{
	"value_imgw" : 3.541,
	"value_um" : 3.475,
	"date_imgw_str" : "2019-05-07T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1694 */
{
	"value_imgw" : 2.917,
	"value_um" : 2.725,
	"date_imgw_str" : "2019-05-08T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1695 */
{
	"value_imgw" : 2.444,
	"value_um" : 1.85,
	"date_imgw_str" : "2019-05-08T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1696 */
{
	"value_imgw" : 1.927,
	"value_um" : 0.85,
	"date_imgw_str" : "2019-05-08T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1697 */
{
	"value_imgw" : 1.753,
	"value_um" : 1.225,
	"date_imgw_str" : "2019-05-08T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1698 */
{
	"value_imgw" : 1.324,
	"value_um" : 2.6,
	"date_imgw_str" : "2019-05-08T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1699 */
{
	"value_imgw" : 2.166,
	"value_um" : 4.725,
	"date_imgw_str" : "2019-05-08T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1700 */
{
	"value_imgw" : 5.422,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-05-08T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1701 */
{
	"value_imgw" : 5.422,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-08T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1702 */
{
	"value_imgw" : 8.895,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-08T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1703 */
{
	"value_imgw" : 12.71,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-08T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1704 */
{
	"value_imgw" : 13.505,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-05-08T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1705 */
{
	"value_imgw" : 14.216,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-08T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1706 */
{
	"value_imgw" : 14.701,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-05-08T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1707 */
{
	"value_imgw" : 15.571,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-05-08T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1708 */
{
	"value_imgw" : 16.016,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-05-08T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1709 */
{
	"value_imgw" : 16.419,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-05-08T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1710 */
{
	"value_imgw" : 16.217,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-05-08T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1711 */
{
	"value_imgw" : 16.058,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-05-08T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1712 */
{
	"value_imgw" : 15.167,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-08T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1713 */
{
	"value_imgw" : 14.008,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-05-08T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1714 */
{
	"value_imgw" : 12.947,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-05-08T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1715 */
{
	"value_imgw" : 12.553,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-08T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1716 */
{
	"value_imgw" : 12.448,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-05-08T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1717 */
{
	"value_imgw" : 12.216,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-08T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1718 */
{
	"value_imgw" : 12.17,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-05-08T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1719 */
{
	"value_imgw" : 12.305,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-09T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1720 */
{
	"value_imgw" : 11.893,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-09T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1721 */
{
	"value_imgw" : 11.195,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-05-09T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1722 */
{
	"value_imgw" : 10.586,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-05-09T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1723 */
{
	"value_imgw" : 9.957,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-09T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1724 */
{
	"value_imgw" : 9.918,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-05-09T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1725 */
{
	"value_imgw" : 9.524,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-05-09T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1726 */
{
	"value_imgw" : 9.524,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-09T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1727 */
{
	"value_imgw" : 9.433,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-05-09T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1728 */
{
	"value_imgw" : 9.658,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-09T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1729 */
{
	"value_imgw" : 9.964,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-09T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1730 */
{
	"value_imgw" : 10.749,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-05-09T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1731 */
{
	"value_imgw" : 11.53,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-05-09T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1732 */
{
	"value_imgw" : 12.54,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-09T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1733 */
{
	"value_imgw" : 12.211,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-09T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1734 */
{
	"value_imgw" : 12.61,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-09T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1735 */
{
	"value_imgw" : 12.885,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-05-09T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1736 */
{
	"value_imgw" : 12.9,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-09T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1737 */
{
	"value_imgw" : 13,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-09T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1738 */
{
	"value_imgw" : 12.426,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-09T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1739 */
{
	"value_imgw" : 10.695,
	"value_um" : 8.475,
	"date_imgw_str" : "2019-05-09T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1740 */
{
	"value_imgw" : 9.893,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-09T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1741 */
{
	"value_imgw" : 9.121,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-09T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1742 */
{
	"value_imgw" : 8.57,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-09T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1743 */
{
	"value_imgw" : 8.514,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-09T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1744 */
{
	"value_imgw" : 6.471,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-10T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1745 */
{
	"value_imgw" : 5.225,
	"value_um" : 8.225,
	"date_imgw_str" : "2019-05-10T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1746 */
{
	"value_imgw" : 5.652,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-10T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1747 */
{
	"value_imgw" : 4.981,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-05-10T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1748 */
{
	"value_imgw" : 6.019,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-10T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1749 */
{
	"value_imgw" : 7.179,
	"value_um" : 8.85,
	"date_imgw_str" : "2019-05-10T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1750 */
{
	"value_imgw" : 9.819,
	"value_um" : 9.35,
	"date_imgw_str" : "2019-05-10T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1751 */
{
	"value_imgw" : 9.819,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-10T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1752 */
{
	"value_imgw" : 11.568,
	"value_um" : 10.225,
	"date_imgw_str" : "2019-05-10T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1753 */
{
	"value_imgw" : 12.386,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-05-10T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1754 */
{
	"value_imgw" : 12.747,
	"value_um" : 12.975,
	"date_imgw_str" : "2019-05-10T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1755 */
{
	"value_imgw" : 13.596,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-05-10T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1756 */
{
	"value_imgw" : 13.929,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-05-10T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1757 */
{
	"value_imgw" : 14.95,
	"value_um" : 16.225,
	"date_imgw_str" : "2019-05-10T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1758 */
{
	"value_imgw" : 14.913,
	"value_um" : 16.85,
	"date_imgw_str" : "2019-05-10T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1759 */
{
	"value_imgw" : 14.82,
	"value_um" : 16.975,
	"date_imgw_str" : "2019-05-10T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1760 */
{
	"value_imgw" : 15.442,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-05-10T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1761 */
{
	"value_imgw" : 14.845,
	"value_um" : 14.85,
	"date_imgw_str" : "2019-05-10T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1762 */
{
	"value_imgw" : 15.167,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-05-10T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1763 */
{
	"value_imgw" : 13.142,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-05-10T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1764 */
{
	"value_imgw" : 12.078,
	"value_um" : 11.35,
	"date_imgw_str" : "2019-05-10T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1765 */
{
	"value_imgw" : 10.069,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-05-10T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1766 */
{
	"value_imgw" : 8.531,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-10T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1767 */
{
	"value_imgw" : 7.863,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-05-10T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1768 */
{
	"value_imgw" : 6.985,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-10T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1769 */
{
	"value_imgw" : 6.094,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-11T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1770 */
{
	"value_imgw" : 5.158,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-05-11T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1771 */
{
	"value_imgw" : 4.598,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-11T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1772 */
{
	"value_imgw" : 3.888,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-11T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1773 */
{
	"value_imgw" : 3.711,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-11T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1774 */
{
	"value_imgw" : 5.161,
	"value_um" : 9.85,
	"date_imgw_str" : "2019-05-11T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1775 */
{
	"value_imgw" : 8.666,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-05-11T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1776 */
{
	"value_imgw" : 8.666,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-05-11T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1777 */
{
	"value_imgw" : 11.184,
	"value_um" : 13.225,
	"date_imgw_str" : "2019-05-11T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1778 */
{
	"value_imgw" : 13.916,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-05-11T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1779 */
{
	"value_imgw" : 16.129,
	"value_um" : 14.975,
	"date_imgw_str" : "2019-05-11T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1780 */
{
	"value_imgw" : 17.348,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-05-11T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1781 */
{
	"value_imgw" : 18.112,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-05-11T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1782 */
{
	"value_imgw" : 17.067,
	"value_um" : 17.1,
	"date_imgw_str" : "2019-05-11T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1783 */
{
	"value_imgw" : 16.718,
	"value_um" : 17.6,
	"date_imgw_str" : "2019-05-11T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1784 */
{
	"value_imgw" : 16.905,
	"value_um" : 17.6,
	"date_imgw_str" : "2019-05-11T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1785 */
{
	"value_imgw" : 17.125,
	"value_um" : 17.35,
	"date_imgw_str" : "2019-05-11T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1786 */
{
	"value_imgw" : 16.547,
	"value_um" : 16.975,
	"date_imgw_str" : "2019-05-11T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1787 */
{
	"value_imgw" : 15.878,
	"value_um" : 16.1,
	"date_imgw_str" : "2019-05-11T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1788 */
{
	"value_imgw" : 15.295,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-05-11T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1789 */
{
	"value_imgw" : 13.932,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-05-11T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1790 */
{
	"value_imgw" : 12.472,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-05-11T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1791 */
{
	"value_imgw" : 12.574,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-05-11T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1792 */
{
	"value_imgw" : 12.49,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-05-11T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1793 */
{
	"value_imgw" : 11.934,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-05-11T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1794 */
{
	"value_imgw" : 11.525,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-05-12T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1795 */
{
	"value_imgw" : 11.323,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-05-12T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1796 */
{
	"value_imgw" : 11.143,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-12T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1797 */
{
	"value_imgw" : 10.736,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-05-12T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1798 */
{
	"value_imgw" : 10.124,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-05-12T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1799 */
{
	"value_imgw" : 9.256,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-05-12T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1800 */
{
	"value_imgw" : 8.474,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-05-12T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1801 */
{
	"value_imgw" : 8.474,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-05-12T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1802 */
{
	"value_imgw" : 7.879,
	"value_um" : 12.85,
	"date_imgw_str" : "2019-05-12T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1803 */
{
	"value_imgw" : 7.221,
	"value_um" : 13.975,
	"date_imgw_str" : "2019-05-12T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1804 */
{
	"value_imgw" : 7.631,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-05-12T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1805 */
{
	"value_imgw" : 7.911,
	"value_um" : 16.225,
	"date_imgw_str" : "2019-05-12T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1806 */
{
	"value_imgw" : 8.08,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-05-12T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1807 */
{
	"value_imgw" : 8.156,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-05-12T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1808 */
{
	"value_imgw" : 7.975,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-05-12T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1809 */
{
	"value_imgw" : 8.072,
	"value_um" : 17.1,
	"date_imgw_str" : "2019-05-12T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1810 */
{
	"value_imgw" : 8.172,
	"value_um" : 16.85,
	"date_imgw_str" : "2019-05-12T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1811 */
{
	"value_imgw" : 8.628,
	"value_um" : 15.725,
	"date_imgw_str" : "2019-05-12T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1812 */
{
	"value_imgw" : 8.802,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-05-12T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1813 */
{
	"value_imgw" : 8.506,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-05-12T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1814 */
{
	"value_imgw" : 8.037,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-05-12T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1815 */
{
	"value_imgw" : 7.647,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-12T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1816 */
{
	"value_imgw" : 7.38,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-12T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1817 */
{
	"value_imgw" : 7.386,
	"value_um" : 8.35,
	"date_imgw_str" : "2019-05-12T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1818 */
{
	"value_imgw" : 7.477,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-12T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1819 */
{
	"value_imgw" : 7.217,
	"value_um" : 7.85,
	"date_imgw_str" : "2019-05-13T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1820 */
{
	"value_imgw" : 7.061,
	"value_um" : 7.475,
	"date_imgw_str" : "2019-05-13T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1821 */
{
	"value_imgw" : 6.864,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-13T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1822 */
{
	"value_imgw" : 6.29,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-13T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1823 */
{
	"value_imgw" : 6.673,
	"value_um" : 7.1,
	"date_imgw_str" : "2019-05-13T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1824 */
{
	"value_imgw" : 7.174,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-13T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1825 */
{
	"value_imgw" : 8.251,
	"value_um" : 7.35,
	"date_imgw_str" : "2019-05-13T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1826 */
{
	"value_imgw" : 8.251,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-05-13T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1827 */
{
	"value_imgw" : 9.291,
	"value_um" : 6.6,
	"date_imgw_str" : "2019-05-13T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1828 */
{
	"value_imgw" : 10.331,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-05-13T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1829 */
{
	"value_imgw" : 11.449,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-05-13T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1830 */
{
	"value_imgw" : 11.509,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-05-13T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1831 */
{
	"value_imgw" : 11.661,
	"value_um" : 8.725,
	"date_imgw_str" : "2019-05-13T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1832 */
{
	"value_imgw" : 11.54,
	"value_um" : 9.225,
	"date_imgw_str" : "2019-05-13T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1833 */
{
	"value_imgw" : 11.125,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-05-13T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1834 */
{
	"value_imgw" : 11.473,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-05-13T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1835 */
{
	"value_imgw" : 11.716,
	"value_um" : 9.6,
	"date_imgw_str" : "2019-05-13T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1836 */
{
	"value_imgw" : 11.22,
	"value_um" : 8.975,
	"date_imgw_str" : "2019-05-13T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1837 */
{
	"value_imgw" : 10.955,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-13T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1838 */
{
	"value_imgw" : 9.86,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-05-13T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1839 */
{
	"value_imgw" : 8.305,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-13T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1840 */
{
	"value_imgw" : 6.611,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-13T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1841 */
{
	"value_imgw" : 5.21,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-13T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1842 */
{
	"value_imgw" : 4.782,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-13T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1843 */
{
	"value_imgw" : 4.662,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-13T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1844 */
{
	"value_imgw" : 3.41,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-14T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1845 */
{
	"value_imgw" : 1.749,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-05-14T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1846 */
{
	"value_imgw" : 1.815,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-14T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1847 */
{
	"value_imgw" : 1.441,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-14T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1848 */
{
	"value_imgw" : 1.843,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-14T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1849 */
{
	"value_imgw" : 4.138,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-05-14T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1850 */
{
	"value_imgw" : 6.629,
	"value_um" : 5.6,
	"date_imgw_str" : "2019-05-14T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1851 */
{
	"value_imgw" : 6.629,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-05-14T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1852 */
{
	"value_imgw" : 8.513,
	"value_um" : 5.225,
	"date_imgw_str" : "2019-05-14T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1853 */
{
	"value_imgw" : 9.383,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-05-14T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1854 */
{
	"value_imgw" : 9.034,
	"value_um" : 5.475,
	"date_imgw_str" : "2019-05-14T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1855 */
{
	"value_imgw" : 8.387,
	"value_um" : 5.35,
	"date_imgw_str" : "2019-05-14T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1856 */
{
	"value_imgw" : 7.799,
	"value_um" : 5.725,
	"date_imgw_str" : "2019-05-14T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1857 */
{
	"value_imgw" : 7.265,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-14T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1858 */
{
	"value_imgw" : 7.283,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-05-14T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1859 */
{
	"value_imgw" : 7.506,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-05-14T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1860 */
{
	"value_imgw" : 6.786,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-05-14T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1861 */
{
	"value_imgw" : 6.993,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-05-14T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1862 */
{
	"value_imgw" : 6.874,
	"value_um" : 6.1,
	"date_imgw_str" : "2019-05-14T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1863 */
{
	"value_imgw" : 6.773,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-14T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1864 */
{
	"value_imgw" : 6.472,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-14T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1865 */
{
	"value_imgw" : 6.457,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-14T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1866 */
{
	"value_imgw" : 6.277,
	"value_um" : 5.975,
	"date_imgw_str" : "2019-05-14T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1867 */
{
	"value_imgw" : 6.075,
	"value_um" : 6.225,
	"date_imgw_str" : "2019-05-14T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1868 */
{
	"value_imgw" : 5.791,
	"value_um" : 6.35,
	"date_imgw_str" : "2019-05-14T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1869 */
{
	"value_imgw" : 5.518,
	"value_um" : 6.475,
	"date_imgw_str" : "2019-05-15T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1870 */
{
	"value_imgw" : 5.413,
	"value_um" : 6.725,
	"date_imgw_str" : "2019-05-15T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1871 */
{
	"value_imgw" : 5.188,
	"value_um" : 6.975,
	"date_imgw_str" : "2019-05-15T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1872 */
{
	"value_imgw" : 5.021,
	"value_um" : 7.225,
	"date_imgw_str" : "2019-05-15T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1873 */
{
	"value_imgw" : 4.854,
	"value_um" : 7.6,
	"date_imgw_str" : "2019-05-15T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1874 */
{
	"value_imgw" : 4.784,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-05-15T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1875 */
{
	"value_imgw" : 4.937,
	"value_um" : 7.975,
	"date_imgw_str" : "2019-05-15T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1876 */
{
	"value_imgw" : 4.937,
	"value_um" : 7.725,
	"date_imgw_str" : "2019-05-15T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1877 */
{
	"value_imgw" : 5.233,
	"value_um" : 8.1,
	"date_imgw_str" : "2019-05-15T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1878 */
{
	"value_imgw" : 5.454,
	"value_um" : 8.6,
	"date_imgw_str" : "2019-05-15T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1879 */
{
	"value_imgw" : 5.749,
	"value_um" : 9.1,
	"date_imgw_str" : "2019-05-15T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1880 */
{
	"value_imgw" : 6.175,
	"value_um" : 9.475,
	"date_imgw_str" : "2019-05-15T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1881 */
{
	"value_imgw" : 6.3,
	"value_um" : 9.725,
	"date_imgw_str" : "2019-05-15T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1882 */
{
	"value_imgw" : 6.584,
	"value_um" : 9.975,
	"date_imgw_str" : "2019-05-15T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1883 */
{
	"value_imgw" : 6.778,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-15T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1884 */
{
	"value_imgw" : 6.885,
	"value_um" : 10.35,
	"date_imgw_str" : "2019-05-15T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1885 */
{
	"value_imgw" : 7.043,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-05-15T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1886 */
{
	"value_imgw" : 7.233,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-15T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1887 */
{
	"value_imgw" : 7.253,
	"value_um" : 11.1,
	"date_imgw_str" : "2019-05-15T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1888 */
{
	"value_imgw" : 7.349,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-15T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1889 */
{
	"value_imgw" : 7.37,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-05-15T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1890 */
{
	"value_imgw" : 7.554,
	"value_um" : 10.975,
	"date_imgw_str" : "2019-05-15T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1891 */
{
	"value_imgw" : 7.705,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-05-15T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1892 */
{
	"value_imgw" : 7.894,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-05-15T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1893 */
{
	"value_imgw" : 7.907,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-15T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1894 */
{
	"value_imgw" : 7.754,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-16T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1895 */
{
	"value_imgw" : 7.638,
	"value_um" : 10.6,
	"date_imgw_str" : "2019-05-16T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1896 */
{
	"value_imgw" : 7.554,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-05-16T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1897 */
{
	"value_imgw" : 7.379,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-05-16T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1898 */
{
	"value_imgw" : 7.377,
	"value_um" : 10.475,
	"date_imgw_str" : "2019-05-16T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1899 */
{
	"value_imgw" : 7.429,
	"value_um" : 10.725,
	"date_imgw_str" : "2019-05-16T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1900 */
{
	"value_imgw" : 7.689,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-05-16T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1901 */
{
	"value_imgw" : 7.689,
	"value_um" : 10.1,
	"date_imgw_str" : "2019-05-16T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1902 */
{
	"value_imgw" : 8.247,
	"value_um" : 10.85,
	"date_imgw_str" : "2019-05-16T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1903 */
{
	"value_imgw" : 9.205,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-05-16T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1904 */
{
	"value_imgw" : 10.399,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-05-16T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1905 */
{
	"value_imgw" : 11.722,
	"value_um" : 14.475,
	"date_imgw_str" : "2019-05-16T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1906 */
{
	"value_imgw" : 12.424,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-05-16T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1907 */
{
	"value_imgw" : 13.13,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-05-16T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1908 */
{
	"value_imgw" : 13.577,
	"value_um" : 16.975,
	"date_imgw_str" : "2019-05-16T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1909 */
{
	"value_imgw" : 13.755,
	"value_um" : 17.475,
	"date_imgw_str" : "2019-05-16T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1910 */
{
	"value_imgw" : 14.041,
	"value_um" : 17.475,
	"date_imgw_str" : "2019-05-16T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1911 */
{
	"value_imgw" : 14.06,
	"value_um" : 16.975,
	"date_imgw_str" : "2019-05-16T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1912 */
{
	"value_imgw" : 13.421,
	"value_um" : 15.975,
	"date_imgw_str" : "2019-05-16T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1913 */
{
	"value_imgw" : 12.864,
	"value_um" : 14.35,
	"date_imgw_str" : "2019-05-16T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1914 */
{
	"value_imgw" : 11.462,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-16T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1915 */
{
	"value_imgw" : 10.439,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-05-16T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1916 */
{
	"value_imgw" : 9.819,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-16T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1917 */
{
	"value_imgw" : 9.258,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-16T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1918 */
{
	"value_imgw" : 8.854,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-05-16T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1919 */
{
	"value_imgw" : 8.718,
	"value_um" : 12.35,
	"date_imgw_str" : "2019-05-17T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1920 */
{
	"value_imgw" : 8.475,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-17T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1921 */
{
	"value_imgw" : 8.241,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-05-17T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1922 */
{
	"value_imgw" : 7.765,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-05-17T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1923 */
{
	"value_imgw" : 8.052,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-05-17T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1924 */
{
	"value_imgw" : 8.952,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-17T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1925 */
{
	"value_imgw" : 10.049,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-05-17T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1926 */
{
	"value_imgw" : 10.049,
	"value_um" : 11.85,
	"date_imgw_str" : "2019-05-17T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1927 */
{
	"value_imgw" : 11.317,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-17T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1928 */
{
	"value_imgw" : 12.794,
	"value_um" : 12.725,
	"date_imgw_str" : "2019-05-17T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1929 */
{
	"value_imgw" : 13.962,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-05-17T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1930 */
{
	"value_imgw" : 15.137,
	"value_um" : 13.35,
	"date_imgw_str" : "2019-05-17T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1931 */
{
	"value_imgw" : 15.727,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-05-17T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1932 */
{
	"value_imgw" : 16.847,
	"value_um" : 15.1,
	"date_imgw_str" : "2019-05-17T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1933 */
{
	"value_imgw" : 17.363,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-05-17T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1934 */
{
	"value_imgw" : 18.134,
	"value_um" : 17.1,
	"date_imgw_str" : "2019-05-17T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1935 */
{
	"value_imgw" : 18.466,
	"value_um" : 17.725,
	"date_imgw_str" : "2019-05-17T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1936 */
{
	"value_imgw" : 18.559,
	"value_um" : 17.975,
	"date_imgw_str" : "2019-05-17T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1937 */
{
	"value_imgw" : 17.546,
	"value_um" : 17.475,
	"date_imgw_str" : "2019-05-17T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1938 */
{
	"value_imgw" : 15.95,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-05-17T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1939 */
{
	"value_imgw" : 15.672,
	"value_um" : 14.85,
	"date_imgw_str" : "2019-05-17T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1940 */
{
	"value_imgw" : 12.632,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-05-17T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1941 */
{
	"value_imgw" : 11.236,
	"value_um" : 13.1,
	"date_imgw_str" : "2019-05-17T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1942 */
{
	"value_imgw" : 11.188,
	"value_um" : 12.475,
	"date_imgw_str" : "2019-05-17T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1943 */
{
	"value_imgw" : 9.856,
	"value_um" : 11.725,
	"date_imgw_str" : "2019-05-17T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1944 */
{
	"value_imgw" : 9.398,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-05-18T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1945 */
{
	"value_imgw" : 9.029,
	"value_um" : 12.1,
	"date_imgw_str" : "2019-05-18T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1946 */
{
	"value_imgw" : 8.255,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-05-18T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1947 */
{
	"value_imgw" : 7.597,
	"value_um" : 11.225,
	"date_imgw_str" : "2019-05-18T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1948 */
{
	"value_imgw" : 8.237,
	"value_um" : 11.975,
	"date_imgw_str" : "2019-05-18T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1949 */
{
	"value_imgw" : 10.403,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-18T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1950 */
{
	"value_imgw" : 12.83,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-05-18T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1951 */
{
	"value_imgw" : 12.83,
	"value_um" : 15.475,
	"date_imgw_str" : "2019-05-18T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1952 */
{
	"value_imgw" : 14.256,
	"value_um" : 17.225,
	"date_imgw_str" : "2019-05-18T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1953 */
{
	"value_imgw" : 16.257,
	"value_um" : 18.35,
	"date_imgw_str" : "2019-05-18T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1954 */
{
	"value_imgw" : 17.172,
	"value_um" : 18.975,
	"date_imgw_str" : "2019-05-18T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1955 */
{
	"value_imgw" : 18.423,
	"value_um" : 19.85,
	"date_imgw_str" : "2019-05-18T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1956 */
{
	"value_imgw" : 19.355,
	"value_um" : 20.725,
	"date_imgw_str" : "2019-05-18T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1957 */
{
	"value_imgw" : 19.974,
	"value_um" : 21.35,
	"date_imgw_str" : "2019-05-18T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1958 */
{
	"value_imgw" : 20.505,
	"value_um" : 21.475,
	"date_imgw_str" : "2019-05-18T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1959 */
{
	"value_imgw" : 21.136,
	"value_um" : 21.6,
	"date_imgw_str" : "2019-05-18T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1960 */
{
	"value_imgw" : 21.171,
	"value_um" : 21.475,
	"date_imgw_str" : "2019-05-18T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1961 */
{
	"value_imgw" : 20.989,
	"value_um" : 21.225,
	"date_imgw_str" : "2019-05-18T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1962 */
{
	"value_imgw" : 20.315,
	"value_um" : 20.225,
	"date_imgw_str" : "2019-05-18T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1963 */
{
	"value_imgw" : 18.012,
	"value_um" : 18.975,
	"date_imgw_str" : "2019-05-18T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1964 */
{
	"value_imgw" : 16.474,
	"value_um" : 18.1,
	"date_imgw_str" : "2019-05-18T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1965 */
{
	"value_imgw" : 13.347,
	"value_um" : 16.35,
	"date_imgw_str" : "2019-05-18T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1966 */
{
	"value_imgw" : 12.05,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-05-18T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1967 */
{
	"value_imgw" : 11.217,
	"value_um" : 14.6,
	"date_imgw_str" : "2019-05-18T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1968 */
{
	"value_imgw" : 10.62,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-05-18T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1969 */
{
	"value_imgw" : 9.805,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-05-19T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1970 */
{
	"value_imgw" : 8.421,
	"value_um" : 12.225,
	"date_imgw_str" : "2019-05-19T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1971 */
{
	"value_imgw" : 7.804,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-05-19T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1972 */
{
	"value_imgw" : 7.739,
	"value_um" : 11.475,
	"date_imgw_str" : "2019-05-19T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1973 */
{
	"value_imgw" : 7.578,
	"value_um" : 12.6,
	"date_imgw_str" : "2019-05-19T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1974 */
{
	"value_imgw" : 10.69,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-19T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 1975 */
{
	"value_imgw" : 13.439,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-05-19T06:00:00.000Z",
	"forecast_duration" : 30
},

/* 1976 */
{
	"value_imgw" : 13.439,
	"value_um" : 15.35,
	"date_imgw_str" : "2019-05-19T06:00:00.000Z",
	"forecast_duration" : 6
},

/* 1977 */
{
	"value_imgw" : 16.167,
	"value_um" : 16.475,
	"date_imgw_str" : "2019-05-19T07:00:00.000Z",
	"forecast_duration" : 7
},

/* 1978 */
{
	"value_imgw" : 19.259,
	"value_um" : 18.1,
	"date_imgw_str" : "2019-05-19T08:00:00.000Z",
	"forecast_duration" : 8
},

/* 1979 */
{
	"value_imgw" : 20.91,
	"value_um" : 19.975,
	"date_imgw_str" : "2019-05-19T09:00:00.000Z",
	"forecast_duration" : 9
},

/* 1980 */
{
	"value_imgw" : 22.226,
	"value_um" : 20.975,
	"date_imgw_str" : "2019-05-19T10:00:00.000Z",
	"forecast_duration" : 10
},

/* 1981 */
{
	"value_imgw" : 23.045,
	"value_um" : 21.725,
	"date_imgw_str" : "2019-05-19T11:00:00.000Z",
	"forecast_duration" : 11
},

/* 1982 */
{
	"value_imgw" : 22.6,
	"value_um" : 22.1,
	"date_imgw_str" : "2019-05-19T12:00:00.000Z",
	"forecast_duration" : 12
},

/* 1983 */
{
	"value_imgw" : 21.164,
	"value_um" : 22.225,
	"date_imgw_str" : "2019-05-19T13:00:00.000Z",
	"forecast_duration" : 13
},

/* 1984 */
{
	"value_imgw" : 20.704,
	"value_um" : 22.1,
	"date_imgw_str" : "2019-05-19T14:00:00.000Z",
	"forecast_duration" : 14
},

/* 1985 */
{
	"value_imgw" : 21.873,
	"value_um" : 21.85,
	"date_imgw_str" : "2019-05-19T15:00:00.000Z",
	"forecast_duration" : 15
},

/* 1986 */
{
	"value_imgw" : 21.598,
	"value_um" : 20.6,
	"date_imgw_str" : "2019-05-19T16:00:00.000Z",
	"forecast_duration" : 16
},

/* 1987 */
{
	"value_imgw" : 17.925,
	"value_um" : 19.85,
	"date_imgw_str" : "2019-05-19T17:00:00.000Z",
	"forecast_duration" : 17
},

/* 1988 */
{
	"value_imgw" : 16.06,
	"value_um" : 17.85,
	"date_imgw_str" : "2019-05-19T18:00:00.000Z",
	"forecast_duration" : 18
},

/* 1989 */
{
	"value_imgw" : 15.181,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-05-19T19:00:00.000Z",
	"forecast_duration" : 19
},

/* 1990 */
{
	"value_imgw" : 14.915,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-05-19T20:00:00.000Z",
	"forecast_duration" : 20
},

/* 1991 */
{
	"value_imgw" : 13.789,
	"value_um" : 14.225,
	"date_imgw_str" : "2019-05-19T21:00:00.000Z",
	"forecast_duration" : 21
},

/* 1992 */
{
	"value_imgw" : 12.366,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-19T22:00:00.000Z",
	"forecast_duration" : 22
},

/* 1993 */
{
	"value_imgw" : 12.217,
	"value_um" : 13.725,
	"date_imgw_str" : "2019-05-19T23:00:00.000Z",
	"forecast_duration" : 23
},

/* 1994 */
{
	"value_imgw" : 11.322,
	"value_um" : 13.475,
	"date_imgw_str" : "2019-05-20T00:00:00.000Z",
	"forecast_duration" : 24
},

/* 1995 */
{
	"value_imgw" : 11.159,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-05-20T01:00:00.000Z",
	"forecast_duration" : 25
},

/* 1996 */
{
	"value_imgw" : 10.736,
	"value_um" : 13.85,
	"date_imgw_str" : "2019-05-20T02:00:00.000Z",
	"forecast_duration" : 26
},

/* 1997 */
{
	"value_imgw" : 10.979,
	"value_um" : 13.6,
	"date_imgw_str" : "2019-05-20T03:00:00.000Z",
	"forecast_duration" : 27
},

/* 1998 */
{
	"value_imgw" : 11.12,
	"value_um" : 14.725,
	"date_imgw_str" : "2019-05-20T04:00:00.000Z",
	"forecast_duration" : 28
},

/* 1999 */
{
	"value_imgw" : 11.756,
	"value_um" : 15.225,
	"date_imgw_str" : "2019-05-20T05:00:00.000Z",
	"forecast_duration" : 29
},

/* 2000 */
{
	"value_imgw" : 12.612,
	"value_um" : 15.85,
	"date_imgw_str" : "2019-05-20T06:00:00.000Z",
	"forecast_duration" : 30
}
]

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
