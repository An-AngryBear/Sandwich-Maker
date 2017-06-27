var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrices = {
  	"Banana Peppers" : 0.25,
  	"Lettuce" : 0.25,
  	"Tomatoes" : 0.25,
  	"Onions" : 0.10,
  	"Pickles" : .10
  }


  // Augment the original object with another method
  maker.addVeggie = function(valueSelectedByUser) {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);