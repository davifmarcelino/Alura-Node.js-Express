const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { estrategiaAutenticacao } = require("./src/usuarios");

app.use(
  express.json(),
  bodyParser.urlencoded({
    extended: true,
  })
);

module.exports = app;
