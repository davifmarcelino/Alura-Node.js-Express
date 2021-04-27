/*const Sequelize = require(‘sequelize’)
const colunas = {
  titulo: { type: Sequelize.STRING, allowNull: false },
  endereco: { type: Sequelize.STRING, allowNull: false },
  quantidadeDeFuncionarios: { type: Sequelize.INTEGER, allowNull: false },
}*/

module.exports = function validar(empresa) {
  if (typeof empresa.titulo !== "string" || empresa.titulo.length === 0) {
    throw new Error("Campo titulo esta invalido");
  }

  if (typeof empresa.endereco !== "string" || empresa.endereco.length === 0) {
    throw new Error("Campo endereco esta invalido");
  }

  if (typeof empresa.quantidadeDeFuncionarios !== "number") {
    throw new Error("Campo quantidade de funcionarios esta invalido");
  }
};
