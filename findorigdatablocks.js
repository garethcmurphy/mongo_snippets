db.Dataset.aggregate(
  {$unwind: "$bars"},
  {$lookup: {
    from:"bar",
    localField: "bars",
    foreignField: "_id",
    as: "bar"

   }},
   {$match: {
    "bar.testprop": true
   }}
)