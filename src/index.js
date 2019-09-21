const express = require("express");
const app = express();

// Importando módulos da API
const customers = require("./api/customers");

// Definindo rotas da API
app.use("/customers", customers);

// Rodar a aplicação
app.listen(3000, function() {
  console.log("Estou rodando na porta 3000!");
});
