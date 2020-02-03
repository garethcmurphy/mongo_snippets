db.PublishedData.find().forEach(function(e) {
  // update document, using its own properties
  datePub = new Date("2020-01-03T19:38:34.203Z");
  e.creationTime = datePub;
  e.scicatUser = "ingestor";
  print(e.creationTime);

  // remove old properties

  // save the updated document
   db.PublishedData.save(e);
});
