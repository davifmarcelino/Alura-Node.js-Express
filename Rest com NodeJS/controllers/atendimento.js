const Atendimento = require("../models/atendimento");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => Atendimento.index(res));

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimento.show(id, res);
  });

  app.post("/atendimentos", (req, res) => {
    Atendimento.store(req.body, res);
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimento.update(id, req.body, res);
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimento.delete(id, res);
  });
};
