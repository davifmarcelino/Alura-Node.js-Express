const fs = require("fs");
const path = require("path");

module.exports = (filePath, petName, callback) => {
  const extname = path.extname(filePath);
  const validTypes = [".png", ".jpg", ".jpeg"];
  const typeIsValid = validTypes.includes(extname);

  if (typeIsValid) {
    const newPath = `./assets/images/${petName + extname}`;

    fs.createReadStream(filePath)
      .pipe(fs.createWriteStream(newPath))
      .on("finish", () => callback(false, newPath));
  } else {
    const error = "Tipo de arquivo esta invalido";
    callback(error);
  }
};
