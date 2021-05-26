const passport = require("passport");
const { Strategy: localStrategy } = require("passport-local");
const { Strategy: bearerStrategy } = require("passport-http-bearer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Usuario = require("./usuarios-modelo");
const { InvalidArgumentError } = require("../erros");
const blacklist = require("../../redis/manipula-blacklist");

async function verificaTokenBlacklist(token) {
  const contemToken = await blacklist.contem(token);
  if (contemToken) {
    throw new jwt.JsonWebTokenError("Token invalido por logout");
  }
}

function verificaUsurio(usuario) {
  if (!usuario) {
    throw new InvalidArgumentError("Usuario nao existe");
  }
}

async function verificaSenha(senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash);
  if (!senhaValida) {
    throw new InvalidArgumentError("Email ou senha incorretos");
  }
}

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "senha",
      session: false,
    },
    async (email, senha, done) => {
      try {
        const usuario = await Usuario.buscaPorEmail(email);
        verificaUsurio(usuario);
        await verificaSenha(senha, usuario.senhaHash);

        done(null, usuario);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  new bearerStrategy(async (token, done) => {
    try {
      await verificaTokenBlacklist(token);
      const payload = jwt.verify(token, process.env.CHAVE_JWT);
      const usuario = await Usuario.buscaPorId(payload.id);
      done(null, usuario, { token: token });
    } catch (err) {
      done(err);
    }
  })
);
