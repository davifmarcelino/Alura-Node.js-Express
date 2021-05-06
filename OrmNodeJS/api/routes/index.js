const pessoas = require("./pessoas");
const turmas = require("./turmas");
const matriculas = require("./matriculas");
const niveis = require("./niveis");

module.exports = (app) => {
  app.use("/pessoas", pessoas);
  app.use("/turmas", turmas);
  app.use("/matriculas", matriculas);
  app.use("/niveis", niveis);
};
