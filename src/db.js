const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-2upep.mongodb.net/vehicle_projects?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose;
