/*
 * Conditionals: If/than using boolean
 * 	Uses ===, >, <, >=, <=, !==
 * Functions: Allows to running longer commands that are cleaner.
 * Scopes: Defines variables on levels. Some variables cannot be accessed on other levels (for example, function code must be defined outside a function as well).
 * 	In Javascript these cascade downwards. Types; Global, function, block
 */

// Conditionals

// Equals
let equals = 1 === 1;
// Greater Than
let greaterThan = 5 > 1;
// Less than
let lessThan = 2 < 10;
// Greater than or Equals
let greaterThanEq = 5 >= 5;
// Less than or Equals
let lessThanEq = 4 <= 9;
// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
	let storeALower = storeA < storeB;
	if(storeALower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

//compareStorePrices(1,5);

function squareNum (number) {
	return number * number
}

let squareNumber = squareNum(7);
//console.log(squareNumber);

// Arrays
// Array index starts at 0. Index 0 is #1, 1 is #2, etc.
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
//console.log(ourArray[4][0]);

// Loops
