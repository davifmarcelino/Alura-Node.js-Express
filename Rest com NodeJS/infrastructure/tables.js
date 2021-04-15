class Tables {
  init(connection) {
    this.connection = connection;
    this.createAtendimento();
    this.createPets();
  }

  createAtendimento() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text,data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))";
    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela atendimento criada");
      }
    });
  }

  createPets() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(20), imagem varchar(200), PRIMARY KEY(id))";
    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela Pets criada");
      }
    });
  }
}

module.exports = new Tables();
