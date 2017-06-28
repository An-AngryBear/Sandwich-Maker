// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
const meatChooser = document.getElementById("meat-chooser"),
	ingredientsOutput = document.getElementById("ingredients");

function putSectionBoxesInDom() {
	let ingredientObject = {
		"Breads": SandwichMaker.Bread.returnBreadNames(),
		"Meats": SandwichMaker.Meats.returnMeatNames(),
		"Cheese": SandwichMaker.Cheese.returnCheeseNames(),
		"Veggies": SandwichMaker.Veggies.returnVeggieNames(),
		"Condiments": SandwichMaker.Condiments.returnCondimentNames()
	}
	console.log(ingredientObject);
	for(var key in ingredientObject) {
		let toStickInDom = document.createElement('div');
		toStickInDom.innerHTML =
			`<label>${key}</label>
			<section id="${key}-chooser">
				<input type="checkbox" class="checkbox">${ingredientObject[key][0]}</option>
				<input type="checkbox" class="checkbox">${ingredientObject[key][1]}</option>
				<input type="checkbox" class="checkbox">${ingredientObject[key][2]}</option>
				<input type="checkbox" class="checkbox">${ingredientObject[key][3]}</option>
				<input type="checkbox" class="checkbox">${ingredientObject[key][4]}</option>
			</select>`
			;
		ingredientsOutput.appendChild(toStickInDom);

	}
}

putSectionBoxesInDom();
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
// */
// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
// })

ingredientsOutput.addEventListener("change", function() {
	if(event.target.checked) {
		let howMany = document.createElement('input');
		howMany.setAttribute('type', "number");
		howMany.setAttribute('class', "howManyBox");
		console.log(event.target);
		event.target.parentNode.insertBefore(howMany, event.target)
	} else if (event.target.previousSibling.classList.contains('howManyBox')) {
		event.target.previousSibling.remove();
	}
})


  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });