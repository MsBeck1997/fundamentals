/*
 * Variables: Use good, short names to describe what code is doing. "Declaration" on left side of = (= is also called assignment operator)
 * Data Types: 6 Major types, 5 Primitive types [Boolean (0/1), Null, undefined, number,  int (whole number), float (decimal),
 * 	double (float with extra decimals), string] and 1 Composite type
 * Typing: Static (tell code what type each variable is) or dynamic (allow language to determine) evaluation,
 * 	Strong (does not auto convert to correct type) or weak (tries, and may fail)
 */
let obj = {
	key1: "Value 1",
	key2: 4,
	boolean: true,
	obj2: {
		obj2Key1: "Internal Object Value",
	},
};

console.log(obj.key1);
console.log(obj.obj2.obj2Key1);

/*
 * Operators: +, -, *, /, %(shows remainder)
 */