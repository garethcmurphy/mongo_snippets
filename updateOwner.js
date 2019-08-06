db.Dataset.find({ proposalId: "14CD3N" }).forEach(function(e) {
  // update document, using its own properties
  print(e.owner);
  e.owner = "Oliver Lohmann";
  e.principalInvestigator = "Oliver Lohmann";
  e.contactEmail = "oliver.lohmann@esss.se";

  // remove old properties

  // save the updated document
  db.Dataset.save(e);
});
