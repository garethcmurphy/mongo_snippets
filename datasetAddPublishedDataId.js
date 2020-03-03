db.Dataset.find({
  pid: "20.500.12269/df01c062-2629-4d60-913f-8f62743d37bf"
}).forEach(function(e) {
  // update document, using its own properties=
  e.publishedDataId = "5e5cfe6be22aab00c0211596";

  // save the updated document
  db.Dataset.save(e);
});
