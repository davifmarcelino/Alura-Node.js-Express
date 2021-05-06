const { niveis } = require("../services");

class NiveisController {
  async store(req, res) {
    try {
      await niveis.store(req.body);

      res.status(201).json(req.body);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const todosOsNiveis = await niveis.index();

      res.status(200).json(todosOsNiveis);
    } catch (err) {
      res.status(500).json(err.message);
      console.log(err);
    }
  }

  async show(req, res) {
    try {
      const pessoa = await niveis.show({ where: { id: req.params.id } });

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    try {
      await niveis.update(req.body, { where: { id: req.params.id } });
      const pessoa = await niveis.show(req.params.id);

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      await niveis.delete({ where: { id: req.params.id } });

      res.status(200).json(req.params.id);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = new NiveisController();
