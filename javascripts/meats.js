// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
	var meatPrices = {
	  	"Bacon" : 1.50,
	  	"Turkey" : .90,
	  	"Ham" : .90,
	  	"Roast Beef" : 1.15,
	  	"Salami" : 1.00
	};

	let meat = Object.create(null);

	meat.returnMeatNames = function() {
  		let meats = [];
  		for (key in meatPrices) {
  			meats.push(key);
  		}
  		return meats;
	}

  // Augment the original objesct with another method
	meat.addMeat = function(IngredientSelected) {
		return meatPrices[IngredientSelected];
	};
	maker.Meats = meat;
  // Return the new, augmented object with the new method on it
	return maker;
})(SandwichMaker || {});