db.Dataset.find({ creationLocation: "V20" }).forEach(function(e) {
  // update document, using its own properties
  delete e.scientificMetadata.chopper_1_phase
  delete e.scientificMetadata.chopper_2_phase
  delete e.scientificMetadata.chopper_3_phase
  delete e.scientificMetadata.chopper_4_phase
  delete e.scientificMetadata.chopper_1_speed
  delete e.scientificMetadata.chopper_2_speed
  delete e.scientificMetadata.chopper_3_speed
  delete e.scientificMetadata.chopper_4_speed
  print(e.scientificMetadata)
  db.Dataset.save(e);
});
