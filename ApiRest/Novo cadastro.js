const { Router } = require("express");
const router = Router();
const Fornecedor = require("./Fornecedor");
const { SerializadorFornecedor } = require("../../Serializador");

router.post("/", async (req, res, next) => {
  try {
    const fornecedor = new Fornecedor(req.body);
    await fornecedor.criar();

    const serializador = new SerializadorFornecedor(
      res.getHeader("Content-Type")
    );

    res.status(201);
    res.send(serializador.serializar(fornecedor));
  } catch (error) {
    next(error);
  }
});
