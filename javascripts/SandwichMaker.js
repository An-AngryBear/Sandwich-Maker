var SandwichMaker = (function(maker) {

  // Private variable to store the price
	var totalPrice = 0;

	let calculator = Object.create(null);
  // Return the public interface that other code can interact with
	calculator.addTopping = function(toppingPrice) {
    	totalPrice += toppingPrice;
	}

	maker.Calc = calculator;

	return maker
})(SandwichMaker || {});