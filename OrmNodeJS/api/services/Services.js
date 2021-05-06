const models = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async store(data) {
    return models[this.modelName].create(data);
  }

  async index(options = {}) {
    return models[this.modelName].findAll(options);
  }

  async show(options = {}) {
    return models[this.modelName].findOne(options);
  }

  async update(data, options = {}) {
    return models[this.modelName].update(data, options);
  }

  async delete(options = {}) {
    return models[this.modelName].destroy(options);
  }
}

module.exports = Services;
