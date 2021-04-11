const moment = require("moment");

const connection = require("../infrastructure/connection");

class Atendimentos {
  store(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    const nomeValido = atendimento.cliente.length >= 5;
    const dataValida = moment(data).isAfter(dataCriacao);

    const validacoes = [
      {
        nome: "Nome",
        valido: nomeValido,
        messagem: "Nome com menos de 5 caracters",
      },
      {
        nome: "Data",
        valido: dataValida,
        messagem: "Data anteiror a data de criacao",
      },
    ];

    const erros = validacoes.filter((validacao) => !validacao.valido);

    if (erros.length) {
      res.status(400).json(erros);
    } else {
      const formatAtendimento = { ...atendimento, dataCriacao, data };

      const sql = "INSERT INTO atendimentos SET ?";

      connection.query(sql, formatAtendimento, (error) => {
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(201).json(formatAtendimento);
        }
      });
    }
  }

  index(res) {
    const sql = "SELECT * FROM atendimentos";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(result);
      }
    });
  }

  show(id, res) {
    const sql = "SELECT * FROM atendimentos WHERE id = ?";

    connection.query(sql, id, (error, [result]) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(result);
      }
    });
  }

  update(id, values, res) {
    if (!!values.data) {
      values.data = moment(values.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }

    const sql = "UPDATE atendimentos SET ? WHERE id=?";

    connection.query(sql, [values, id], (error) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(values);
      }
    });
  }

  delete(id, res) {
    const sql = "DELETE FROM atendimentos WHERE id=?";

    connection.query(sql, id, (error) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

module.exports = new Atendimentos();
