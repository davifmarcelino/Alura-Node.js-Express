const express = require("express");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.set("X-powered-By", "Gatito Petshop");
  next();
});

app.listen(3000);
