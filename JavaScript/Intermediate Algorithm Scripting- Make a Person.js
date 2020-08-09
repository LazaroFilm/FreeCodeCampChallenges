var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0]
  }
  this.getLastName = function() {
    return fullName.split(" ")[1]
  }
  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1]
  }
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last
  }
  this.setFullName = function(firstAndFast) {
    fullName = firstAndLast
  }
};

var bob = new Person('Bob Ross');
// console.log(bob.getLastName());
// console.log(bob instanceof Person);
console.log(Object.keys(bob).length);

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
