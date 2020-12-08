let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumbersRoute(request, response){
  let num1 = Number(request.params.num1);
  let num2 = Number(request.params.num2);

  response.send(logic.addNumbers(num1, num2).toString());
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.addNumbersRoute = addNumbersRoute;