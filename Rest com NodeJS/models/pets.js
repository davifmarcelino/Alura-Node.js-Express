const connection = require("../infrastructure/connection");
const imageUpload = require("../uploads/imageUpload");

class Pets {
  store(pet, res) {
    imageUpload(pet.imagem, pet.nome, (error, newPath) => {
      if (error) {
        res.status(400).json({ error });
      } else {
        pet.imagem = newPath;

        const sql = "INSERT INTO Pets SET ?";
        connection.query(sql, pet, (error, result) => {
          if (error) {
            res.status(400).json(error);
          } else {
            const id = result.insertId;
            res.status(200).json({ ...pet, id });
          }
        });
      }
    });
  }
}

module.exports = new Pets();
