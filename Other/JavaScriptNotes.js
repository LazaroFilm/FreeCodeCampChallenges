////////Java Script////////


////Variable:////

var variable = 'value'
let otherVariable = 69
const constant = false

let string = "words";
let integer = 123;
let arr = [1, 2, 3]

////Fonctions:////

function func(value) {
  let newValue = 2
  return newValue + value
};

func('values')


////Regex:////

https: //regexr.com/


////Array:////

//Arrays are organized and can be called by position #
arr.push() //[0, 0, +]
arr.pop() //[0, 0, –]
arr.shift() //[–, 0, 0]
arr.unshift() //[+, 0, 0]
arr.splice(index, number, "items") //removes selected and add items !!!Mutates the original aray!!!
arr.slice(first, last + 1) //keeps selected. No arguments copies whole array !does not mutate the original array!
arr.indexOf('value') //returns pos # or - 1 if none
arr.includes('value') //returns true/false
arr1.concat(arr2) // merges tht two arrays into one
//...arr //returns the entire array.
obj.map(x => x * 2) //returns a new array with each value processed (x*2)
obj.filter(x => x > 6); //returns a new array with values if true.
obj.reduce(accumulation, item, index, array) =>
arr.sort(function(a, b) {
  return a === b ? 0 : a < b ? -1 : 1;
});
arr.every(function(num){return num < 0}) //checks if all return true according to function
arr.some(function(num){return num < 0}) //checks if some retrun true according to function
var args = Array.prototype.slice.call(arguments); //turns arguments into an array.


////Object:////

//Objects are not organized, each value has to be named with a 'key'
let object = {
  key: 'value',
  key: 'value'
};

object.key = 'value'
object['key'] = 'value'

delete object.key //deletes the key and its values

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

Object.key(obj); //get each key of object in an array form.

ChildObject.prototype = Object.create(ParentObject.prototype); //assigns ParentObject as6= supertype
ChildObject.prototype.constructor = ChildObject; //Redefine the constructor

ChildObject.prototype.methodName = function() {
  functionGoesHere
};

if (i == 0) {
  program
} else if (i ==1) {
  program
} else {
  program
}

for (let i = 0; i <= 10; i++) {
  program
}

while (i !== 10) {
  program
  i++
}

do {
  program
  i++
} while (i <= 10)

////Ternary Operator: ////

//likda like if else
condition ? exprIfTrue : exprIfFalse
a < b ? "a smaller" : "a bigger or equal"


  ////strings: ////

str.split(/\W/) //splits string into array. can use string or regex
str.join(" ")
str.replace(/\W/, " ")
str.toLowerCase() //guess what this does...
str.toUpperCase() //I Mean, You Know...
