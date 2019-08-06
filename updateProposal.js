db.Proposal.find({"_id":"14CD3N"}).forEach(
  function (e) {
    // update document, using its own properties
	print(e.owner);
	e.pi_firstname = "Oliver";
	e.pi_lastname = "Lohmann";
	e.firstname = "Oliver";
	e.lastname = "Lohmann";
	e.title = "SANS/Reflectometry";
	e.abstract = "SANS/Reflectometry";
	e.email = "oliver.lohmann@esss.se";
	e.pi_email = "oliver.lohmann@esss.se";

    // remove old properties

    // save the updated document
     db.Proposal.save(e);
  }
)
