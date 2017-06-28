var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
	var cheesePrices = {
	  	"Cheddar": 0.50,
	  	"Swiss": 0.50,
	  	"American": .25,
	  	"Bleu": .50,
	  	"Mozzarella": .50
	};

	let cheese = Object.create(null);

	cheese.returnCheeseNames = function() {
  	let cheeses = [];
  	for (key in cheesePrices) {
  		cheeses.push(key);
  	}
  	return cheeses;
	}
  // Augment the original object with another method
	cheese.addCheese = function(valueSelectedByUser) {
    	return;
	};

	maker.Cheese = cheese;
  // Return the new, augmented object with the new method on it
	return maker;
})(SandwichMaker || {});