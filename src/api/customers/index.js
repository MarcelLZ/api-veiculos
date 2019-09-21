const { Router } = require("express");
const routes = new Router();

// Banco de dados fake
const FAKE_DB = [
  { name: "Tiago" },
  { name: "Nícolas" },
  { name: "Luiz" },
  { name: "Marcel" },
  { name: "Adriana" },
  { name: "Nilson" }
];

routes.get("/", function(req, res) {
  res.json(FAKE_DB);
});

routes.post("/", function(req, res) {
  FAKE_DB.push({ name: "Fulaninho" });
  res.json(FAKE_DB);
});

module.exports = routes;
