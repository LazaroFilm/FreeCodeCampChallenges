"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

////////Java Script////////
////Variable:////
var variable = "value";
var otherVariable = 69;
var constant = false;
var string = "words";
var integer = 123;
var arr = [1, 2, 3]; ////Fonctions:////

function func(value) {
  var newValue = 2;
  return newValue + value;
}

func("values"); ////Regex:////
//regexr.com/
////Array:////

https: arr.push(); //[0, 0, +]


arr.pop(); //[0, 0, -]

arr.shift(); //[-, 0, 0]

arr.unshift(); //[+, 0, 0]

arr.splice(index, number, "items"); //removes selected and add items !!!Mutates the original aray!!!

arr.slice(first, last + 1); //keeps selected. No arguments copies whole array !does not mutate the original array!

arr.indexOf("value"); //returns pos # or - 1 if none

arr.includes("value"); //returns true/false

arr1.concat(arr2); // merges tht two arrays into one
//...arr //returns the entire array.

obj.map(function (x) {
  return x * 2;
} //Arrays are organized and can be called by position #
); //returns a new array with each value processed (x*2)

obj.filter(function (x) {
  return x > 6;
}); //returns a new array with values if true.

obj.reduce(accumulation, item, index, array);
arr.sort(function (a, b) {
  return a === b ? 0 : a < b ? -1 : 1;
});
arr.every(function (num) {
  return num < 0;
}); //checks if all return true according to function

arr.some(function (num) {
  return num < 0;
}); //checks if some retrun true according to function

var args = Array.prototype.slice.call(arguments); //turns arguments into an array.
////Object:////
//Objects are not organized, each value has to be named with a 'key'

var object = _defineProperty({
  key: "value"
}, "key", "value");

object.key = "value";
object["key"] = "value";
delete object.key; //deletes the key and its values

users.hasOwnProperty("Alan");
"Alan" in users; // both return true

Object.key(obj); //get each key of object in an array form.

ChildObject.prototype = Object.create(ParentObject.prototype); //assigns ParentObject as6= supertype

ChildObject.prototype.constructor = ChildObject; //Redefine the constructor

ChildObject.prototype.methodName = function () {
  functionGoesHere;
};

if (i == 0) {
  program;
} else if (i == 1) {
  program;
} else {
  program;
}

for (var _i = 0; _i <= 10; _i++) {
  program;
}

while (i !== 10) {
  program;
  i++;
}

do {
  program;
  i++;
} while (i <= 10); ////Ternary Operator: ////
//kinda like if else


condition ? exprIfTrue : exprIfFalse;
a < b ? "a smaller" : "a bigger or equal"; ////strings: ////

str.split(/\W/); //splits string into array. can use string or regex

str.join(" ");
str.replace(/\W/, " ");
str.toLowerCase(); //guess what this does...

str.toUpperCase(); //I Mean, You Know...