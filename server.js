let express = require("express");
let routes = require("./routes");

let app = express();

app.get("/flip", routes.coinFlipRoute);
app.get("/add/:num1/:num2", routes.addNumbersRoute);

module.exports.app = app;