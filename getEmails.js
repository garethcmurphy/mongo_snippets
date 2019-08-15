db.User.find().sort({ email: 1 }).forEach(function(e) {
  print(e.email);
});
