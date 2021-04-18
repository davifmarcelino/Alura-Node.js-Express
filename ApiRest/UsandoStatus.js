const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const accessedSites = [];

app.post("/api/sites", (req, res) => {
  if (!req.body.accessDate || !req.body.url) {
    res.status(400);
    return res.send(
      JSON.stringify({
        message:
          'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!',
      })
    );
  }

  const site = {
    accessDate: req.body.accessDate,
    url: req.body.url,
  };

  accessedSites.push(site);

  res.status(201);
  res.send(JSON.stringify(site));
});

app.listen(3000, () => console.log("Sever was started"));
