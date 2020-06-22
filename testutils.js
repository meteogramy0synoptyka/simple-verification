//function to TEST
function computeP(x, slope = 0.97, intercept = 0.084) {
  return 1 / (1 + Math.exp(slope * (x + intercept)));
}

//function to TEST
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

//function to TEST
function computeEffectiveness(umimgw) {
  let dane = umimgw.map((r) => ({
    um: r.um,
    imgw: r.imgw,
    p: computeP(r.um),
    status: computeDescription(computeP(r.um), r.imgw),
  }));

  console.log("Dane są następujące", dane);

  let yes = dane.filter((i) => i.status === "TAK").length;
  let no = dane.filter((i) => i.status === "NIE").length;
  let false_yes = dane.filter((i) => i.status === "FAŁSZYWE TAK").length;
  let false_no = dane.filter((i) => i.status === "FAŁSZYWE NIE").length;

  let effectiveness = [
    { status: "TAK", num: yes },
    { status: "NIE", num: yes },
    { status: "FAŁSZYWE TAK", num: false_yes },
    { status: "FAŁSZYWE NIE", num: false_no },
  ];

  console.log(effectiveness);

  return effectiveness;
}

//test data
var demo_datas = [
  { p: 0.0, imgw: 1 },
  { p: 0.1, imgw: 2 },
  { p: 0.2, imgw: 3 },
  { p: 0.3, imgw: -1 },
  { p: 0.4, imgw: -2 },
  { p: 0.5, imgw: 1 },
];

// demo_datas.map((r) => {
//   console.log(`p: ${r.p}, imgw: ${r.imgw}, ${computeDescription(r.p, r.imgw)}`);
// });

//test data
var umimgw = [
  { um: 1, imgw: 1 },
  { um: 2, imgw: 2 },
  { um: -1, imgw: 3 },
  { um: -3, imgw: -1 },
  { um: 2, imgw: -2 },
  { um: 3, imgw: 1 },
  { um: 5, imgw: -2 },
  { um: 4, imgw: -1 },
];

computeEffectiveness(umimgw);
