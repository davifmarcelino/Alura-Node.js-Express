const Services = require("./Services");
const models = require("../models");

class Pessoas extends Services {
  constructor() {
    super("Pessoas");
  }
}

module.exports = new Pessoas();
