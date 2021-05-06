const Services = require("./Services");
const models = require("../models");

class Matriculas extends Services {
  constructor() {
    super("Matriculas");
  }
}

module.exports = new Matriculas();
