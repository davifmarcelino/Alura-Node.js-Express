const Pets = require("../models/pets");

module.exports = (app) => {
  app.post("/pets", (req, res) => {
    Pets.store(req.body, res);
  });
};
