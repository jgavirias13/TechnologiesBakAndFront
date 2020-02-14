const express = require("express");
const app = express();
const config = require("./app/config");
const colors = require("colors");

colors.setTheme({
  info: "green",
  help: "magenta",
  warn: "yellow",
  success: "cyan",
  error: "red"
});

app.listen(config.PORT, () => {
  console.log("=========================================================".info);
  console.log(`**** Servidor inicializado en puerto ${config.PORT}`.success);
  console.log("=========================================================".info);
});
