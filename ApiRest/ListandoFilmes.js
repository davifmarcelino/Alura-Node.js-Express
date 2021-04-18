const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/api/filmes", (req, res) => {
  const filmes = [
    { nome: "Os Vingadores 3" },
    { nome: "Destacamento Blood" },
    { nome: "Pantera Negra" },
  ];

  res.send(JSON.stringify(filmes));
});

app.listen(3000, () => console.log("Server was started"));
