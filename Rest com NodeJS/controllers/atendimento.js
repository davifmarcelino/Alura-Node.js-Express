const Atendimentos = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) =>
    Atendimentos.index()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json(error);
      })
  );

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimentos.show(id, res);
  });

  app.post("/atendimentos", (req, res) => {
    Atendimentos.store(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimentos.update(id, req.body, res);
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimentos.delete(id, res);
  });
};
