const Services = require("./Services");
const models = require("../models");

class Turmas extends Services {
  constructor() {
    super("Turmas");
  }
}

module.exports = new Turmas();
