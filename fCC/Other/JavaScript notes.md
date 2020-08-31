# JavaScript notes

## Variables

```js
var variable = "value";
let otherVariable = 69;
const constant = false;

let string = "words";
let integer = 123;
let arr = [1, 2, 3];
```

## Functions

```js
function func(value) {
  let newValue = 2;
  return newValue + value;
}

func("values");
```

## Regex

Go to [regExr](https://regexr.com/)

## Arrays

Arrays are organized and can be called by position #

| function                                                     | return                                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `arr.push()`                                                 | [0, 0, +] \(mutates array)                                   |
| `arr.pop()`                                                  | [0, 0, -] \(mutates array)                                   |
| `arr.shift()`                                                | [-, 0, 0] \(mutates array)                                   |
| `arr.unshift`                                                | [+, 0, 0] \(mutates array)                                   |
| `arr.splice(index, number, "items")`                         | [removes selected and add items (mutates array)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) |
| `arr.slice(first, last + 1)`                                 | keeps selected. No arguments copies whole array (returns new array) |
| `arr.indexOf('value')`                                       | returns pos # or - 1 if none                                 |
| `arr.includes('value')`                                      | returns true/false                                           |
| `arr1.concat(arr2)`                                          | merges tht two arrays into one (returns new array)           |
| `...arr`                                                     | Spread operator returns the entire array. (returns new array) |
| `obj.map?????????????`                                       | Arrays are organized and can be called by position #         |
| `arr.map(x => x * 2)`                                        | returns a new array with each value processed (x\*2)         |
| `obj.filter(x => x > 6);`                                    | returns a new array with values if true.                     |
| `obj.reduce(accumulation, item, index, array)`               |                                                              |
| `arr.sort(function(a, b) {`<br/>`return a === b ? 0 : a < b ? -1 : 1;`<br/>`});` |                                                              |
| `arr.every(function(num){return num < 0})`                   | checks if all `return true according to function             |
| `arr.some(function(num){return num < 0})`                    | checks if some retrun true according to function             |
| `var args = Array.prototype.slice.call(arguments);`          | turns arguments into an array.                               |

## Object

Objects are not organized, each value has to be named with a 'key'

```JS
let object = {
  key: 'value',
  key: 'value'
};

object.key = 'value'
object['key'] = 'value'
```

```JS
delete object.key
```

deletes the key and its values

```JS
users.hasOwnProperty('Alan');
'Alan' in users;
```

both return true

```js
ChildObject.prototype = Object.create(ParentObject.prototype); // assigns ParentObject as6= supertype
ChildObject.prototype.constructor = ChildObject; //Redefine the constructor

ChildObject.prototype.methodName = function () {
  functionGoesHere;
};
```

```js
if (i == 0) {
  program;
} else if (i == 1) {
  program;
} else {
  program;
}

for (let i = 0; i <= 10; i++) {
  program;
}

while (i !== 10) {
  program;
  i++;
}

do {
  program;
  i++;
} while (i <= 10);
```

### Object assign

```js
Object.assign(target, source1, source2, ...)
Object.assign({}, obj1, obj2)
```

takes the `target` and adds/replaces the values in the object with the sources. 

If you make the target as `{}`, it will return a new array without mutating the original one. 

## ternary operator

Kinda like if else

```js
condition ? exprIfTrue : exprIfFalse;
a < b ? "a smaller" : "a bigger or equal";
```

## Strings

```js
str.split(/\W/); //splits string into array. can use string or regex
str.join(" ");
str.replace(/\W/, " ");
str.toLowerCase(); //guess what this does...
str.toUpperCase(); //I Mean, You Know...
```

## JavaScript and HTML

* JavaScript can be written inside a HTML document inside `<script> </script>` tags.

* JS can change the content of an HTML element:

  ```js
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
  ```

* Or it's CSS style (using camelCase styles):

  ```js
  document.getElementById("demo").style.fontSize = "25px";
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.backgroundColor = "yellow";
  ```

* Or it's attributes:

  ```js
  document.getElementById("image").src = "picture.gif";
  ```

***

One good practice is to create a `const` with the name of `id_tag` for each element that is going to be interacted with so yo don't have to keep writing `document.getElementById("demo")`

```js
const newQuote_button = document.getElementById("new-quote");
```

Now you can simply call `newQuote_buton`  (the element with a `new-quote` id is a `button`).

***

