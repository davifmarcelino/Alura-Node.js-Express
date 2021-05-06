const { turmas } = require("../services");

class TurmasController {
  async store(req, res) {
    try {
      await turmas.store(req.body);

      res.status(201).json(req.body);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const todasAsTurmas = await turmas.index();

      res.status(200).json(todasAsTurmas);
    } catch (err) {
      res.status(500).json(err.message);
      console.log(err);
    }
  }

  async show(req, res) {
    try {
      const pessoa = await turmas.show({ where: { id: req.params.id } });

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    try {
      await turmas.update(req.body, { where: { id: req.params.id } });
      const pessoa = await turmas.show(req.params.id);

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      await turmas.delete({ where: { id: req.params.id } });

      res.status(200).json(req.params.id);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = new TurmasController();
