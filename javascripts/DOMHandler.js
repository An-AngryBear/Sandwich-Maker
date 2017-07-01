// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
const meatChooser = document.getElementById("meats-chooser"),
	veggiesChooser = document.getElementById("veggies-chooser"),
	breadsChooser = document.getElementById("breads-chooser"),
	condimentsChooser = document.getElementById("condiments-chooser"),
	cheeseChooser = document.getElementById("cheese-chooser"),
	ingredientsOutput = document.getElementById("ingredients");

function putSectionBoxesInDom() {
	let ingredientObject = {
		"Breads": SandwichMaker.Bread.returnBreadNames(),
		"Meats": SandwichMaker.Meats.returnMeatNames(),
		"Cheese": SandwichMaker.Cheese.returnCheeseNames(),
		"Veggies": SandwichMaker.Veggies.returnVeggieNames(),
		"Condiments": SandwichMaker.Condiments.returnCondimentNames()
	}
	for(var key in ingredientObject) {
		let toStickInDom = document.createElement('div');
		toStickInDom.innerHTML =
			`<label class="head-label">${key}</label>
			<section id="${key.toLowerCase()}-chooser">
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][0]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][1]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][2]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][3]}</label></checkboxcontainer>
				<checkboxcontainer><input type="checkbox" name="${key}" class="checkbox"><label>${ingredientObject[key][4]}</label></checkboxcontainer>
			</select>`;
		ingredientsOutput.appendChild(toStickInDom);

	}
}

function iDontKnowYet(addIngredientFunction) {
	let priceToAdd = addIngredientFunction(event.target.nextSibling.nextSibling.innerHTML);
	let ingredientSubType = event.target.nextSibling.nextSibling.innerHTML
	SandwichMaker.Calc.quantityMultiplier(priceToAdd, event.target.value, ingredientType, ingredientSubType);
}

putSectionBoxesInDom();
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
// */
document.addEventListener("input", function() {
	if(event.target.hasAttribute('placeholder')) {
		let ingredientType = event.target.parentNode.parentNode.parentNode.firstChild.innerHTML;
		let ingredientSubType = event.target.nextSibling.nextSibling.innerHTML;
		switch(event.target.parentNode.parentNode.id) {
			case "meats-chooser":
				SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Meats.addMeat(ingredientSubType),
					event.target.value, ingredientType, ingredientSubType);
				break;
			case "veggies-chooser":
				SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Veggies.addVeggie(ingredientSubType),
					event.target.value, ingredientType, ingredientSubType);
				break;
			case "cheese-chooser":
				SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Cheese.addCheese(ingredientSubType),
					event.target.value, ingredientType, ingredientSubType);
				break;
			case "condiments-chooser":
				SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Condiments.addCondiment(ingredientSubType),
					event.target.value, ingredientType, ingredientSubType);
				break;
			case "breads-chooser":
				SandwichMaker.Calc.quantityMultiplier(SandwichMaker.Bread.addBread(ingredientSubType),
					event.target.value, ingredientType, ingredientSubType);
				break;
			default:
				console.log("error identifying ingredient");
		};
	}

})

ingredientsOutput.addEventListener("change", function() {
	if(event.target.hasAttribute("name")) {
		if(event.target.checked) {
			let howMany = document.createElement('input');
			howMany.defaultValue = 0;
			howMany.setAttribute('type', "number");
			howMany.setAttribute('class', "howManyBox");
			howMany.setAttribute('placeholder', "Portions?")
			event.target.parentNode.insertBefore(howMany, event.target);
		} else if (event.target.previousSibling.hasAttribute('class') && event.target.previousSibling.classList.contains('howManyBox')) {
			event.target.previousSibling.remove();
		}
	}
})


  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });