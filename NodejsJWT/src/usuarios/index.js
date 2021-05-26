module.exports = {
  rotas: require("./usuarios-rotas"),
  controlador: require("./usuarios-controlador"),
  modelo: require("./usuarios-modelo"),
  estrategiaAutenticacao: require("./estrategias-autenticacao"),
  middlewareAutenticacao: require("./middlewares-autenticacao"),
};
