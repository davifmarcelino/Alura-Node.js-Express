const jsonToXml = require("jsontoxml");

module.exports = function jsParaXml(dados, tagSingular, tagPlural) {
  let tag = tagSingular;

  if (Array.isArray(dados)) {
    tag = tagPlural;
    dados = dados.map((dado) => {
      return { [tagSingular]: dado };
    });
  }
  return jsonToXml({ [tag]: dados });
};
