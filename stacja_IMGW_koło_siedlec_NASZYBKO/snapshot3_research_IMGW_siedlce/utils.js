let researchData = [
  /* 1 */
  {
    value_imgw: -0.086,
    date_um_str: "2019-03-01T04:00:00.000Z",
    hour: 4,
    category: 2019,
  },

  /* 2 */
  {
    value_imgw: -0.096,
    date_um_str: "2019-03-01T05:00:00.000Z",
    hour: 5,
    category: 2019,
  },

  /* 3 */
  {
    value_imgw: -0.527,
    date_um_str: "2019-03-01T06:00:00.000Z",
    hour: 6,
    category: 2019,
  },

  /* 4 */
  {
    value_imgw: -0.388,
    date_um_str: "2019-03-01T23:00:00.000Z",
    hour: 23,
    category: 2019,
  },

  /* 5 */
  {
    value_imgw: -1.116,
    date_um_str: "2019-03-02T00:00:00.000Z",
    hour: 0,
    category: 2019,
  },

  /* 6 */
  {
    value_imgw: -2.182,
    date_um_str: "2019-03-02T01:00:00.000Z",
    hour: 1,
    category: 2019,
  },

  /* 7 */
  {
    value_imgw: -2.411,
    date_um_str: "2019-03-02T02:00:00.000Z",
    hour: 2,
    category: 2019,
  },

  /* 8 */
  {
    value_imgw: -2.919,
    date_um_str: "2019-03-02T03:00:00.000Z",
    hour: 3,
    category: 2019,
  },

  /* 9 */
  {
    value_imgw: -3.282,
    date_um_str: "2019-03-02T04:00:00.000Z",
    hour: 4,
    category: 2019,
  },

  /* 10 */
  {
    value_imgw: -3.819,
    date_um_str: "2019-03-02T05:00:00.000Z",
    hour: 5,
    category: 2019,
  },

  /* 11 */
  {
    value_imgw: -3.151,
    date_um_str: "2019-03-02T06:00:00.000Z",
    hour: 6,
    category: 2019,
  },

  /* 12 */
  {
    value_imgw: -1.865,
    date_um_str: "2019-03-02T07:00:00.000Z",
    hour: 7,
    category: 2019,
  },

  /* 13 */
  {
    value_imgw: -0.06,
    date_um_str: "2019-03-02T08:00:00.000Z",
    hour: 8,
    category: 2019,
  },

  /* 14 */
  {
    value_imgw: -0.042,
    date_um_str: "2019-03-12T00:00:00.000Z",
    hour: 0,
    category: 2019,
  },

  /* 15 */
  {
    value_imgw: -1.027,
    date_um_str: "2019-03-26T01:00:00.000Z",
    hour: 1,
    category: 2019,
  },

  /* 16 */
  {
    value_imgw: -0.553,
    date_um_str: "2019-03-27T05:00:00.000Z",
    hour: 5,
    category: 2019,
  },

  /* 17 */
  {
    value_imgw: -0.616,
    date_um_str: "2019-03-31T22:00:00.000Z",
    hour: 22,
    category: 2019,
  },

  /* 18 */
  {
    value_imgw: -0.455,
    date_um_str: "2019-03-31T23:00:00.000Z",
    hour: 23,
    category: 2019,
  },

  /* 19 */
  {
    value_imgw: -0.398,
    date_um_str: "2019-04-01T03:00:00.000Z",
    hour: 3,
    category: 2019,
  },

  /* 20 */
  {
    value_imgw: -0.747,
    date_um_str: "2019-04-01T04:00:00.000Z",
    hour: 4,
    category: 2019,
  },

  /* 21 */
  {
    value_imgw: -0.684,
    date_um_str: "2019-04-01T05:00:00.000Z",
    hour: 5,
    category: 2019,
  },

  /* 22 */
  {
    value_imgw: -0.214,
    date_um_str: "2019-04-09T20:00:00.000Z",
    hour: 20,
    category: 2019,
  },

  /* 23 */
  {
    value_imgw: -0.367,
    date_um_str: "2019-04-09T21:00:00.000Z",
    hour: 21,
    category: 2019,
  },
];

let chart3 = new Taucharts.Chart({
  type: "scatterplot",
  data: researchData,
  x: "hour",
  y: "value_imgw",
  color: "category",
  plugins: [
    Taucharts.api.plugins.get("tooltip")(),
    Taucharts.api.plugins.get("legend")(),
  ],
});
chart3.renderTo("#look_for_good_cases");

researchData;
