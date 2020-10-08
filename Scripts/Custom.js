document.getElementById("fizzBuzz").addEventListener("click", () => {
	//clears the text
	document.getElementById("result").innerHTML = '';
	//declare our vars
	let userInpFizz = parseInt(document.getElementById("userInpFizz").value);
	let userInpBuzz = parseInt(document.getElementById("userInpBuzz").value);
	let userLowRange = parseInt(document.getElementById("userInpLowRange").value);
	let userHighRange = parseInt(document.getElementById("userInpHighRange").value);
	let result = "";
	//checks that the inputs are numbers before proceeding
	if (isNaN(userInpFizz) || isNaN(userInpBuzz)) {
		document.getElementById("result").innerHTML = "You gotta put something there, bud!";
		return;
		//this else statement contains the remainder of the code. 
	} else {
		// the meat of the program, here we loop through and determine what needs a fizz and what needs a buzz (or both)
		for (let i = userLowRange; i <= userHighRange; i++) {
			// determining whether or not we should place a fizz, buzz, or nothing after the number
			if (i % userInpFizz === 0 && i % userInpBuzz === 0) {
				result = `fizzbuzz `;
			} else if (i % userInpFizz === 0) {
				result = `fizz `;
			} else if (i % userInpBuzz === 0) {
				result = `buzz `;
			} else {
				result = `${i} `;
			}
			document.getElementById("result").innerHTML += result;
		}
	}
})


document.querySelectorAll(".numbersOnly").forEach(a => {
	a.addEventListener("keydown", (evt) => {
		let keyChar = (evt.which) ? evt.which : evt.keyCode

		if (keyChar >= 48 && keyChar <= 57 ||
			keyChar >= 96 && keyChar <= 105 ||
			keyChar == 08 ||
			keyChar == 37 ||
			keyChar == 39) {
			return true;
		} else {
			evt.preventDefault();
			return false;

		}
	})

})