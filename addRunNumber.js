db.Dataset.find({ creationLocation: "V20" }).forEach(function(e) {
  // update document, using its own properties
  if (typeof (e.scientificMetadata.file_name) === "string") {
    res = e.scientificMetadata.file_name.split("_").pop().slice(0, -4);
  } else {
    res = e.scientificMetadata.file_name.value.split("_").pop().slice(0, -4);
  }
  e.scientificMetadata.runNumber = { value: parseInt(res), unit: "", type: "number" };
printjson(e.scientificMetadata.runNumber);
  db.Dataset.save(e);
});
