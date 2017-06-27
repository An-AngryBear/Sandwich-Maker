// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"Ciabatta" : 0.40,
  	"Whole Grain" : 0.25,
  	"Honey Wheat" : 0.25,
  	"White" : 0.25,
  	"Rye" : .35
  }

  // Augment the original object with another method
  maker.addBread = function(valueSelectedByUsser) {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);