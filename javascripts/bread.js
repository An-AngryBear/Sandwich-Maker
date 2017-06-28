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
	let bread = Object.create(null);

	bread.returnBreadNames = function() {
  		let breads = [];
  		for (key in breadPrices) {
  			breads.push(key);
  	}
  	return breads;
	}
  // Augment the original object with another method
	bread.addBread = function(valueSelectedByUsser) {
    	return;
    };
	maker.Bread = bread;
  // Return the new, augmented object with the new method on it
	return maker;
})(SandwichMaker || {});