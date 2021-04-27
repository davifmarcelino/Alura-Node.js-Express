//Este codigo é apenas para aprendizagem e é meramente ilustrativo
module.exports = {
  listar(idFornecedor, criterios = {}) {
    criterios.fornecedor = idFornecedor;
    return Modelo.findAll({
      where: criterios,
      raw: true,
    });
  },
};
