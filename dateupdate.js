db.Dataset.find({"creationLocation":"V20"}).forEach(
  function (e) {
    // update document, using its own properties
	res = e.datasetlifecycle.dateOfDiskPurging
	print(res)
	date = new Date('2029-06-03T19:38:34.203Z');
	datePub = new Date('2022-06-03T19:38:34.203Z');

	e.datasetlifecycle.dateOfPublishing = datePub
	e.datasetlifecycle.dateOfDiskPurging = date
	e.datasetlifecycle.archiveRetentionTime = date

    db.Dataset.save(e);
  }
)
