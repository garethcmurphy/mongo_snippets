db.Dataset.find({ _id: "20.500.12269/BRIGHTNESS/MG0020" }).forEach(function(e) {
  // update document, using its own properties
  res = e.scientificMetadata;
  sci = {
    Time: "2018-09-02T16:40:31.596Z",
    IPTS: "21308.0",
    RunControlLastRunNumber: "154380.0",
    ChopSkf1EnergyReq: { u: "MeV", v: "250.0" },
    ChopSkf1SpeedReq: { u: "Hz", v: "30.0" },
    ChopSkf2EnergyReq: { u: "MeV", v: "250.0" },
    ChopSkf2SpeedReq: { u: "Hz", v: "120.0" },
    ChopSkf3EnergyReq: { u: "MeV", v: "250.0" },
    ChopSkf3SpeedReq: { u: "Hz", v: "120.0" },
    DetPChargeC: { u: "C", v: "1.0000709428200283" },
    MotSampleAxis1: "0.0",
    Motattenuator1: { u: "mm", v: "0.1" },
    Motattenuator2: { u: "mm", v: "93.4" },
    Motchtrans: { u: "mm", v: "-182.0" },
    SMSRunInfoRunTitle: "5x5 van White beam Ei set to 250meV T0=30",
    datetime: "2018-08-30T13:10:00.000Z"
  };
  e.scientificMetadata = JSON.parse(sci);
  print(JSON.stringify(res));

  //db.Dataset.save(e);
});
