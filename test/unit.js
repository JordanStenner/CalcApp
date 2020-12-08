let chai = require("chai");
let logic = require("../logic");

suite("Test coin flip", function() {

  test("Test the coin flips properly", function() {
    // Initialise a counter.
    let counter = 0;

    for (let i=0; i<100; i++) {
      // Flip the coin.
      let flip = logic.flipCoin();

      // Test return type.
      chai.assert.isBoolean(flip, "Should be a Boolean");

      if (flip) {
        counter++;
      }
    }

    chai.assert.approximately(50, counter, 10);
  });

});

suite("Test add numbers", function(){
  test("Test adding numbers is working", function(){
    let num1 = 5;
    let num2 = 2;
    let testResult = num1 + num2;
    let add = logic.addNumbers();

    chai.assert.equal(add(num1, num2), testResult, "5 + 2 should be 7");
  });
});