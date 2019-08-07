db.Dataset.find({ creationLocation: "V20" }).forEach(function(e) {
  // update document, using its own properties
  res = e.sourceFolder.split("/").pop();
  e.sourceFolder = "/nfs/groups/beamlines/v20/" + res;
  print(e.sourceFolder);

  // remove old properties

  // save the updated document
   db.Dataset.save(e);
});
