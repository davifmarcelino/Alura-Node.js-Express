const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.put("/api/usuarios/:idUsuario", async (requisicao, resposta) => {
  try {
    const dados = { nome: "" }; //requisicao.body;
    const id = requisicao.params.idUsuario;

    const encontrado = false; //await TabelaDeUsuarios.pegarPorId(id);

    if (!encontrado) {
      throw new NaoEncotrado("usuario");
    }

    if (dados.nome.length === 0) {
      throw new CampoInvalido("nome");
    }

    const usuario = new Usuario(Object.assign({}, dados, { id: id }));
    await usuario.atualizar();
    resposta.end();
  } catch (erro) {
    let status = 500;
    if (erro instanceof NaoEncotrado) {
      status = 404;
    }
    if (erro instanceof CampoInvalido) {
      status = 400;
    }

    resposta.status(status);
    resposta.send(JSON.stringify({ mensagem: erro.message }));
  }
});

class NaoEncotrado extends Error {
  constructor(nome) {
    super(`Nao foi encontrado o seguite argumento: ${nome}`);
  }
}

class CampoInvalido extends Error {
  constructor(campo) {
    super(`O campo '${campo}' está inválido ou faltando`);
  }
}

app.listen(3000, () => console.log("Server was started"));
