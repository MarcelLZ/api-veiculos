const uuid = require("uuid");
const { Router } = require("express");
const routes = new Router();

let FAKE_DB = [
  { id: uuid(), name: "Cruze", year: 2014 },
  { id: uuid(), name: "Tracker", year: 2021 }
];

routes.get("/", function(req, res) {
  return res.json(FAKE_DB);
});

routes.post("/", function(req, res) {
  FAKE_DB.push({
    id: uuid(),
    name: req.body.name,
    year: req.body.year
  });

  return res.json(FAKE_DB);
});

routes.put("/:id", function(req, res) {
  const id = req.params.id;
  const foundVehicle = FAKE_DB.filter(vehicle => vehicle.id === id);

  FAKE_DB = FAKE_DB.filter(vehicle => vehicle.id !== id);
  const updatedVehicle = Object.assign(foundVehicle, req.body);

  FAKE_DB.push(updatedVehicle);
  return res.json(FAKE_DB);
});

routes.delete("/:id", function(req, res) {
  FAKE_DB = FAKE_DB.filter(vehicle => vehicle.id !== id);
  return res.json(FAKE_DB);
});

module.exports = routes;
