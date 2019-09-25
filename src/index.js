const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Importando módulos da API
const customers = require("./api/customers");
const vehicles = require("./api/vehicles");

// Definindo rotas da API
app.use("/customers", customers);
app.use("/vehicles", vehicles);

// Rodar a aplicação
app.listen(3000, function() {
  console.log("Estou rodando na porta 3000!");
});
