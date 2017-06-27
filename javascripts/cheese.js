var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"Cheddar": 0.50,
  	"Swiss": 0.50,
  	"American": .25,
  	"Bleu": .50,
  	"Mozzarella": .50
  };

  // Augment the original object with another method
  maker.addCheese = function(valueSelectedByUser) {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);