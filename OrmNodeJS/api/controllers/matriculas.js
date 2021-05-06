const { matriculas } = require("../services");

class MatriculasController {
  async store(req, res) {
    try {
      await matriculas.store(req.body);

      res.status(201).json(req.body);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async index(req, res) {
    try {
      const todasAsMatriculas = await matriculas.index();

      res.status(200).json(todasAsMatriculas);
    } catch (err) {
      res.status(500).json(err.message);
      console.log(err);
    }
  }

  async show(req, res) {
    try {
      const pessoa = await matriculas.show({ where: { id: req.params.id } });

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async update(req, res) {
    try {
      await matriculas.update(req.body, { where: { id: req.params.id } });
      const pessoa = await matriculas.show(req.params.id);

      res.status(200).json(pessoa);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      await matriculas.delete({ where: { id: req.params.id } });

      res.status(200).json(req.params.id);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = new MatriculasController();
