const express = require("express");

const reclamacoesRouter = require("./reclamacoes");

const app = express();

app.use(express.json());

app.use("/:idProduto/reclamacoes", reclamacoesRouter);

app.listen(3000, () => console.log("Server was started"));
