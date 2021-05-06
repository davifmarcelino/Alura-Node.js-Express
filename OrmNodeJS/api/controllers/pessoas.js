const { pessoas } = require("../services");

class PessoasController {
  async store(req, res) {
    try {
      await pessoas.store(req.body);

      res.status(201).json(req.body);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const todasAsPessoas = await pessoas.index();

      res.status(200).json(todasAsPessoas);
    } catch (err) {
      res.status(500).json(err.message);
      console.log(err);
    }
  }

  async show(req, res) {
    try {
      const pessoa = await pessoas.show({ where: { id: req.params.id } });

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    try {
      await pessoas.update(req.body, { where: { id: req.params.id } });
      const pessoa = await pessoas.show(req.params.id);

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      await pessoas.delete({ where: { id: req.params.id } });

      res.status(200).json(req.params.id);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = new PessoasController();
