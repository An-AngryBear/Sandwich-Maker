var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"Mustard": 0.15,
  	"Mayo": 0.15,
  	"Chiptole Sauce": 0.15,
  	"Horseradish": .15,
  	"Basil Pesto": 0.20,
  };

  let condiments = Object.create(null);

  condiments.returnCondimentNames = function() {
  	let condiments = [];
  	for (key in condimentPrices) {
  		condiments.push(key);
  	}
  	return condiments;
  }
  // Augment the original object with another method
  condiments.addCondiment = function(ingredientSelected) {
    return condimentPrices[ingredientSelected];
  };



  maker.Condiments = condiments;
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});