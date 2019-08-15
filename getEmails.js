db.User.find().forEach(function(e) {
  // update document, using its own properties
  print(e.email);
});
