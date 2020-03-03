db.Sample.find({ description: "xx" }).forEach(function(e) {
  // update document, using its own properties
  e.datasetId = "20.500.12269/df01c062-2629-4d60-913f-8f62743d37bf";
  db.Sample.save(e);
});
