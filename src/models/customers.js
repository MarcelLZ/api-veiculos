const db = require("../db");

module.exports = db.model("customers", {
  name: String,
  street: String,
  created: { type: Date, default: Date.now }
});
