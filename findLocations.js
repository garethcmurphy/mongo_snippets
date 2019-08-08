db.Dataset.find({ creationLocation: "V20" }).forEach(function(e) {
  // update document, using its own properties
  print(e.sourceFolder);
});
