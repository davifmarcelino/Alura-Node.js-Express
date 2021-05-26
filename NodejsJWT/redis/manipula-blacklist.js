const jwt = require("jsonwebtoken");
const { createHash } = require("crypto");
const { promisify } = require("util");

const blacklist = require("./blacklist");

const setAsync = promisify(blacklist.set).bind(blacklist);
const existsAsync = promisify(blacklist.exists).bind(blacklist);

function geraTokenHash(token) {
  return createHash("sha256").update(token).digest("hex");
}

module.exports = {
  adiciona: async (token) => {
    const tokenHash = geraTokenHash(token);
    await setAsync(tokenHash, "");

    const dataExpiracao = jwt.decode(token).exp;
    blacklist.expire(tokenHash, dataExpiracao);
  },

  contem: async (token) => {
    const tokenHash = geraTokenHash(token);
    const resultado = await existsAsync(tokenHash);
    return resultado === 1;
  },
};
