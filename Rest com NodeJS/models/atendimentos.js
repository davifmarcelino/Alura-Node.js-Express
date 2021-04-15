const axios = require("axios");
const moment = require("moment");
const Repository = require("../repositories/atendimento");
const connection = require("../infrastructure/connection");
const { query } = require("../infrastructure/connection");

class Atendimentos {
  constructor() {
    this.nomeValido = (tamanhoNome) => tamanhoNome >= 5;
    this.dataValida = ({ data, dataCriacao }) =>
      moment(data).isAfter(dataCriacao);

    this.validacoes = [
      {
        nome: "cliente",
        valido: this.nomeValido,
        messagem: "Nome com menos de 5 caracters",
      },
      {
        nome: "data",
        valido: this.dataValida,
        messagem: "Data anteiror a data de criacao",
      },
    ];

    this.validador = (parametros) => {
      return this.validacoes.filter((validacao) => {
        const { nome } = validacao;
        const parametro = parametros[nome];

        return !validacao.valido(parametro);
      });
    };
  }

  store(atendimento) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    const parametros = {
      data: { data, dataCriacao },
      cliente: atendimento.cliente.length,
    };

    const erros = this.validador(parametros);

    if (erros.length) {
      return new Promise((resolve, reject) => reject(erros));
    } else {
      const formatAtendimento = { ...atendimento, dataCriacao, data };

      return Repository.store(formatAtendimento).then((result) => {
        const id = result.insertId;
        return { ...formatAtendimento, id };
      });
    }
  }

  index() {
    return Repository.index();
  }

  show(id, res) {
    const sql = "SELECT * FROM atendimentos WHERE id = ?";

    connection.query(sql, id, async (error, [result]) => {
      if (error) {
        res.status(400).json(error);
      } else {
        const { data } = await axios.get(
          `http://localhost:8082/${result.cliente}`
        );
        result.cliente = data;
        res.status(200).json(result);
      }
    });
  }

  update(id, values, res) {
    if (values.data) {
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
