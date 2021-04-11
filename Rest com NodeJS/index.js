const configExpress = require("./config/configExpress");
const connection = require("./infrastructure/connection");
const Tables = require("./infrastructure/tables");

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    Tables.init(connection);

    const app = configExpress();
    app.listen(3000, () => console.log("The server was started"));
  }
});
