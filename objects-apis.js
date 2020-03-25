/*
 * Objects [state (current data), functionality (changes it can make)],
 * Interfaces,
 * and API's (AKA Application program interface)
 */

/* // Object Example:
let dog = {
	name: "Steve",
	color: "brown",
	breed: "Pug",
	size: "Small",
	bark: function(typeOfBark){
		console.log("Bark!");
	},
};

dog.bark();
 */

function x(y) {
	y.num = y.num + 5;
console.log(y)
}

let y = {
	name: "Tom",
	num: 10,
};
x(y);
console.log(y);