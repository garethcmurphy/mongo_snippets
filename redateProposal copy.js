db.Proposal.find({ _id: "A6RG27" }).forEach(function(e) {
  // update document, using its own properties
  print(e.MeasurementPeriodList[0].end);
  e.MeasurementPeriodList[0].end=new Date("2019-11-26T23:59:00Z");
  print(e.MeasurementPeriodList[0].end);
  // save the updated document
  db.Proposal.save(e);
});
