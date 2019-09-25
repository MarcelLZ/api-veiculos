const uuid = require("uuid/v1");
const { Router } = require("express");
const routes = new Router();

// Banco de dados fake
let FAKE_DB = [
  { id: uuid(), name: "Tiago", street: "Rua Antonio" },
  { id: uuid(), name: "Nícolas", street: "Rua Antonio" },
  { id: uuid(), name: "Luiz", street: "Rua Antonio" },
  { id: uuid(), name: "Marcel", street: "Rua Antonio" },
  { id: uuid(), name: "Adriana", street: "Rua Antonio" },
  { id: uuid(), name: "Nilson", street: "Rua Antonio" }
];

routes.get("/", function(req, res) {
  res.json(FAKE_DB);
});

routes.post("/", function(req, res) {
  FAKE_DB.push({
    id: uuid(),
    name: req.body.name,
    street: req.body.street
  });

  res.json(FAKE_DB);
});

routes.put("/:id", function(req, res) {
  const id = +req.params.id;
  const foundCustomer = FAKE_DB.find(customer => customer.id === id);

  FAKE_DB = FAKE_DB.filter(customer => customer.id !== id);
  const updatedCustomer = Object.assign(foundCustomer, req.body);

  FAKE_DB.push(updatedCustomer);
  return res.json(FAKE_DB);
});

routes.delete("/:id", function(req, res) {
  const id = +req.params.id;

  FAKE_DB = FAKE_DB.filter(customer => customer.id !== id);
  return res.json(FAKE_DB);
});

module.exports = routes;
