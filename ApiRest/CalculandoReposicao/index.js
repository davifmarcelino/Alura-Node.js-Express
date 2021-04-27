//Este codigo é apenas para aprendizagem e é meramente ilustrativo
const { Router } = require("express");
const router = Router();
const tabelaProdutos = require("./dao");

router.post("/:idFornecedor/calcular-reposicao", async (res, req, next) => {
  try {
    const fornecedor = new Fornecedor({ id: res.params.idFornecedor });
    await fornecedor.carregar();
    const produtos = tabelaProdutos.listar(fornecedor.id, { estoque: 0 });
    res.send({
      message: `${produtos.length} precisam de reposicao de estoque`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
