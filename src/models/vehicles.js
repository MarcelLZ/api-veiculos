const db = require("../db");

module.exports = db.model("vehicles", {
  name: String,
  year: Number,
  created: { type: Date, default: Date.now }
});
