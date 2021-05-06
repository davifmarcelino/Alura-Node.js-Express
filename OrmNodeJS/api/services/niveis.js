const Services = require("./Services");
const models = require("../models");

class Niveis extends Services {
  constructor() {
    super("Niveis");
  }
}

module.exports = new Niveis();
