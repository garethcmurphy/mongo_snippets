db.Dataset.find({ datasetName: "Fe3O4" }).forEach(function(e) {
  // update document, using its own properties=
  e.owner = "Simon Ward";
  e.principalInvestigator = "Simon Ward";
  e.ownerEmail = "simon.ward@ess.eu";
  e.contactEmail = e.ownerEmail
  e.investigator = e.ownerEmail
  e.isPublished = true
  e.type = "raw"
  print(tojson(e));

  // remove old properties

  // save the updated document
  db.Dataset.save(e);
});
