//////////////////////////////////////////////////////////////////////////////////////////////
////ONE FORECAST1/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// db.UM.aggregate([
//     //wybierz tylko 1 węzeł i 1 prognozę
//     {
//         $match: {
//             row: 211, col: 233, start_forecast: ISODate("2019-04-15T02:00:00+02:00")
//         },
//     },
//     // {
//     //     $limit: 3,
//     // },
//     //dobierz do tego dane z IMGW
//     {
//         $lookup: {
//             from: "IMGW",
//             localField: "date_um",
//             foreignField: "date_imgw",
//             as: "join"

//         }
//     },
//     {
//         $replaceRoot: {
//             newRoot: {
//                 $mergeObjects: [
//                         {
//                             $arrayElemAt: ["$join", 0]
//                         },
//                         "$$ROOT"
//                     ]
//             }
//         }
//     },
//     //datę typu ISODate zamień na string, dodaj category
//     {
//         $project : {
//             date_imgw_str: {
//                 $dateToString : {
//                     date: "$date_imgw"
//                 }
//             },
//             forecast_duration: {
//                 $divide: [
//                     {
//                       $subtract: ["$date_imgw", "$start_forecast"] //różnica w milisekundach
//                     },
//                     1000*3600
//                 ]

//             },
//             category: "forecast",

//             value_um: 1,
//             value_imgw: 1,
//             _id: 0
//         }
//     }
// ]).sort({start_forecast: 1})

//////////////////////////////////////////////////////////////////////////////////////////////
////ONE FORECAST1 z wydzielonym wyprzedzeniem/////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// db.UM.aggregate([
//     //wybierz tylko 1 węzeł i 1 prognozę
//     {
//         $match: {
//             row: 211, col: 233, start_forecast: ISODate("2019-04-15T02:00:00+02:00")
//         },
//     },
//     // {
//     //     $limit: 3,
//     // },
//     //dobierz do tego dane z IMGW
//     {
//         $lookup: {
//             from: "IMGW",
//             localField: "date_um",
//             foreignField: "date_imgw",
//             as: "join"

//         }
//     },
//     {
//         $replaceRoot: {
//             newRoot: {
//                 $mergeObjects: [
//                         {
//                             $arrayElemAt: ["$join", 0]
//                         },
//                         "$$ROOT"
//                     ]
//             }
//         }
//     },
//     //datę typu ISODate zamień na string, dodaj category
//     {
//         $project : {
//             date_imgw_str: {
//                 $dateToString : {
//                     date: "$date_imgw"
//                 }
//             },
//             forecast_duration: {
//                 $divide: [
//                     {
//                       $subtract: ["$date_imgw", "$start_forecast"] //różnica w milisekundach
//                     },
//                     1000*3600
//                 ]

//             },

//             value_um: 1,
//             value_imgw: 1,
//             _id: 0
//         }
//     },
//     {
//         $match: {
//             forecast_duration: {
//                 $lte: 24
//             }
//         }
//     }

// ]).sort({start_forecast: 1})

//////////////////////////////////////////////////////////////////////////////////////////////
////wszystkie DATY z ujemnymi temperaturami dla UM////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//
// db.UM.aggregate([
//     //wybierz tylko 1 węzeł i 1 prognozę
//     {
//         $match: {
//             row: 281, col: 195, start_forecast: {
//                 $gte: new ISODate("2019-03-01T01:00:00+01:00"),
//                 $lte: new ISODate("2019-06-01T01:00:00+01:00"),
//             },
//             value_um: {
//                 $lte: 0
//             }
//         },
//     },
//     //datę typu ISODate zamień na string, dodaj category
//     {
//         $project : {
//             date_um_str: {
//                 $dateToString : {
//                     date: "$date_um"
//                 }
//             },
//             hour: {
//                 $hour: "$date_um"
//             },
//             category: {
//                 $year: "$date_um"
//             },
//             forecast_duration: {
//                 $divide: [
//                     {
//                       $subtract: ["$date_um", "$start_forecast"] //różnica w milisekundach
//                     },
//                     1000*3600
//                 ]
//
//             },
//
//             value_um: 1,
//             value_imgw: 1,
//             _id: 0
//         }
//     }
// ]).sort({date_um_str: 1})

//////////////////////////////////////////////////////////////////////////////////////////////
////wszystkie dni z ujemnymi temperaturami dla IMGW IMGW IMGW////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// db.IMGW.aggregate([
//     //wybierz tylko 1 węzeł i 1 prognozę
//     {
//         $match: {
//             row: 175, col: 240, date_imgw: {
//                 $gte: new ISODate("2019-03-01T01:00:00+01:00"),
//                 $lte: new ISODate("2019-06-01T01:00:00+01:00"),
//             },
//             value_imgw: {
//                 $lte: 0
//             }
//         },
//     },
//     //datę typu ISODate zamień na string, dodaj category
//     {
//         $project : {
//             date_um_str: {
//                 $dateToString : {
//                     date: "$date_imgw"
//                 }
//             },
//             hour: {
//                 $hour: "$date_imgw"
//             },
//             category: {
//                 $year: "$date_imgw"
//             },

//             value_imgw: 1,
//             _id: 0
//         }
//     }
// ]).sort({date_um_str: 1})

////////////////////////////////////////////
////HISTORICALS1 - VESION WITH JOIN/////////
////////////////////////////////////////////

// db.createView(
//     "IMGWpoint",
//     "IMGW",
//     [{
//         $match{row: 211, col: 233}
//     }]
// )

// db.IMGWpoint.find({})

// db.UM.aggregate([
//   {
//     $match: {
//       $or: [
//         {
//           date_um: {
//             $gte: new Date(2018, 9, 29, 0),
//             $lte: new Date(2018, 9, 30, 2),
//           },
//           row: 211,
//           col: 233,
//         },
//         {
//           date_um: {
//             $gte: new Date(2019, 9, 29, 0),
//             $lte: new Date(2019, 9, 30, 2),
//           },
//           row: 211,
//           col: 233,
//         },
//       ],
//     },
//   },
//   //preparing data for Taucharts Visualisation
//   {
//     $project: {
//       start_forecast_str: {
//         $dateToString: {
//           date: "$start_forecast",
//         },
//       },
//         date_um_str: {
//         $dateToString: {
//           date: "$date_um",
//         },
//       },
//       category: {
//         $year: "$date_um",
//       },
//       value_um: 1,
//       _id: 0
//     },
//   },
// ]).sort({ date_um_str: 1 });

// db.IMGW.aggregate([
//   {
//     $match: {
//       $or: [
//         {
//           date_um: {
//             $gte: new ISODate("2018-03-01T00:00:00+01:00"),
//             $lte: new ISODate("2018-04-01T00:00:00+01:00"),
//           },
//           row: 211,
//           col: 233,
//         },
//         {
//           date_um: {
//             $gte: new ISODate("2019-03-01T00:00:00+01:00"),
//             $lte: new ISODate("2019-04-01T00:00:00+01:00"),
//           },
//           row: 211,
//           col: 233,
//         },
//       ],
//     },
//   },
//   //preparing data for Taucharts Visualisation
// //   {
// //     $project: {
// //       date_imgw_str: {
// //         $dateToString: {
// //           date: "$date_imgw",
// //         },
// //       },
// //       category: {
// //         $year: "$date_imgw",
// //       },
// //       value_imgw: 1,
// //       _id: 0
// //     },
// //   },
// ]).sort({ date_imgw_str: 1 });

////////////////////////////////////////////////////////////////////////////////
///EXAMPLE QUERY WITH SHIFTED TIME BETWEEN "UM" AND "IMGW"  ////////////////////
////////////////////////////////////////////////////////////////////////////////
//...

///////////////////////////////////////////////////////////////////////////////////////////
///broad range of forecasts with cutted forecast (not whole forecast but) small part only UM.//////
///////////////////////////////////////////////////////////////////////////////////////////
//
//... ... ... ...

///////////////////////////////////////////////////////////////////////////////
//LOCATE UM ERRORS with datas//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// let startDate = new Date(2019, 2, 1, 1)
// let endDate = new Date(2019, 4, 1, 1)
// for (let my_date=startDate; my_date < endDate; my_date.setDate(my_date.getDate()+1)){
//     // //COUNT - zliczanie liczby rekordów
// let query_res = db.UM.aggregate([
//     {
//         $match: {
//             row: 211, col:233, start_forecast: my_date
//         }
//     }
// ]).count()
// console.log("For Date", my_date, "number of is", query_res)
// }

//count negative temperatures througr forecasts

///////////////////////////////////////////////////////////////////////////////
//add model type to UM collection//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// db.UM.update({
//     start_forecast: {
//   $gte: ISODate("2017-02-20T01+01:00"),
//   //$lte: ISODate("2017-02-24T01+01:00")
// }
// }, {
// $set : {
// type_model: "P5"
// },
// }, false, true)

///////////////////////////////////////////////////////////////////////////////
//remove documents from collection under following criteria////////////////////
//remove all IGW datas under particular node //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//db.IMGW.remove({row:211, col:233})

///////////////////////////////////////////////////////////////////////////////
////change Time zone for all dates and for all nodes into UTC zone
//https://stackoverflow.com/questions/34914737/mongodb-aggregate-convert-date-to-another-timezone
//{ date: now, offset: now.getTimezoneOffset() }
/////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//db.UM.changeMany
//db.collection.update()
//{}, {$set:{...}}, {upsert: true}
//$set...
//$date -> $hours, $minutes, $hours, $zone ???

////////////////////////////////////////////////////////////////////////////////
///dodaj dla wszystkich kolekcji UM tag, że chodzi o temperaturę param=air1p5m
////////////////////////////////////////////////////////////////////////////////
//db.UMchangeMany
//db.collection.update()
//$set

///////////////////////////////////////////////////////////////////////////////
///CIEKAWOSTKA - najbliższy punkt w MongoDB -
///////////////////////////////////////////////////////////////////////////////
// db.places.aggregate([
//     {
//       $geoNear: {
//          near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
//          distanceField: "dist.calculated",
//          maxDistance: 2,
//          query: { category: "Parks" },
//          includeLocs: "dist.location",
//          spherical: true
//       }
//     }
//  ])
