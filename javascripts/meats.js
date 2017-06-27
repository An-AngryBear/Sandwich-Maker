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

  // Augment the original objesct with another method
  maker.addMeat = function(valueSelectedByUser) {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);