db.Dataset.find().forEach(function(e) {
  // update document, using its own properties
  if (e.hasOwnProperty("scientificMetadata")) {
    delete e.scientificMetadata.runNumber;
    delete e.scientificMetadata.size;
    print(e.scientificMetadata);
    db.Dataset.save(e);
  }
});
