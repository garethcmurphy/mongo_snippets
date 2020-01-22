db.PublishedData.find().forEach(function(e) {
  // update document, using its own properties
  print(e.creator);
  e.creator = e.authors;

  // remove old properties

  // save the updated document
   db.PublishedData.save(e);
});
