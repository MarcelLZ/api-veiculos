const uuid = require("uuid/v1");
const { Router } = require("express");
const routes = new Router();

// Models.
const customersModel = require("../../models/customers");

routes.get("/", function(req, res) {
  customersModel
    .find()
    .then(res.json)
    .catch(() => res.json({ msg: "Erro ao buscar os clientes!" }));
});

routes.post("/", function(req, res) {
  customersModel
    .create({
      name: req.body.name,
      street: req.body.street
    })
    .then(() => {
      res.json({ msg: "Cliente cadastrado." });
    })
    .catch(() => res.json({ msg: "Erro ao cadastrar cliente." }));
});

routes.put("/:id", function(req, res) {
  const id = req.params.id;

  customersModel
    .findOneAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        street: req.body.street
      }
    )
    .then(() => res.json({ msg: "Cliente atualizado" }))
    .catch(() => res.json({ msg: "Erro ao atualizar o cliente." }));
});

routes.delete("/:id", function(req, res) {
  const id = req.params.id;
  customersModel
    .findOneAndRemove({ _id: id })
    .then(() => res.json({ msg: "Cliente removido!" }))
    .catch(() => res.json({ msg: "Erro ao remover cliente." }));
});

module.exports = routes;
