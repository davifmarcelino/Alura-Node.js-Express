const query = require("../infrastructure/queries");

class Atendimentos {
  store(atendimento) {
    const sql = "INSERT INTO atendimentos SET ?";
    return query(sql, atendimento);
  }

  index() {
    const sql = "SELECT * FROM atendimentos";
    return query(sql);
  }
}

module.exports = new Atendimentos();
