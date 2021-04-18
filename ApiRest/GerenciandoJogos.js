const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const favoriteGames = [];

app.post("/api/games", (req, res) => {
  try {
    if (!req.body.nome || !req.body.plataforma) {
      throw new Error("Campo ivalido");
    }
    favoriteGames.push(req.body);
    res.send(JSON.stringify(req.body));
  } catch (error) {
    res.send(JSON.stringify({ message: error.message }));
  }
});

app.get("/api/games", (req, res) => {
  res.send(JSON.stringify(favoriteGames));
});

app.listen(3000, () => console.log("Server was started"));
