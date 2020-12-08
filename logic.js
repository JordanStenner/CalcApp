function flipCoin() {
  /**
   * Return true for heads, false for tails.
   */
  return Math.random() > 0.5;
}

function addNumbers(num1, num2){
  return num1 + num2;
}

module.exports.flipCoin = flipCoin;
module.exports.addNumbers = addNumbers;