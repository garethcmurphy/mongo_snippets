db.Proposal.find({ _id: "YC7SZ5" }).forEach(function(e) {
  // update document, using its own properties
  print(e.MeasurementPeriodList[0].start);
  e.MeasurementPeriodList[0].start=new Date("2019-11-27T00:01:00Z");
  print(e.MeasurementPeriodList[0].start);
  // save the updated document
  db.Proposal.save(e);
});
