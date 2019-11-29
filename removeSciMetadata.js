db.Dataset.find({ datasetName: "Loki McStas data" }).forEach(function(e) {
  // update document, using its own properties
  e.scientificMetadata= {}
  e.investigator= "Torben Nielsen"
  e.inputDatasets= ["string"]
  e.usedSoftware= ["string"]
  db.Dataset.save(e);
});
