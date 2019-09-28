const { Router } = require("express");
const routes = new Router();

const vehiclesModel = require("../../models/vehicles");

routes.get("/", function(req, res) {
  vehiclesModel
    .find()
    .then(resposta => res.json(resposta))
    .catch(() => res.json({ msg: "Erro ao buscar o veículo." }));
});

routes.post("/", function(req, res) {
  vehiclesModel
    .create({
      name: req.body.name,
      year: req.body.year
    })
    .then(() => res.json({ msg: "Veículo cadastrado com sucesso!" }))
    .catch(() => res.json({ msg: "Erro ao cadastrar veículo." }));
});

routes.put("/:id", function(req, res) {
  const id = req.params.id;

  vehiclesModel
    .findOneAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        year: req.body.year
      }
    )
    .then(() => res.json({ msg: "Veículo atualizado com sucesso!" }))
    .catch(() => res.json({ msg: "Erro ao atualizar o veículo." }));
});

routes.delete("/:id", function(req, res) {
  const id = req.params.id;

  vehiclesModel
    .findOneAndRemove({ _id: id })
    .then(() => res.json({ msg: "Veículo removido com sucesso." }))
    .catch(() => res.json({ msg: "Erro ao remover veículo." }));
});

module.exports = routes;
