const express = require("express");
const routes = require("./api/routes");

const app = express();

app.use(express.json());
routes(app);

app.listen(3000, () => console.log("Server was started"));
