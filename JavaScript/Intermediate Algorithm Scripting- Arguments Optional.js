function addTogether() {
  let first = 0
  // console.log(arguments.length);
  console.log(typeof arguments[0]);
  if (arguments.length == 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      // console.log("both integers");
      return arguments[0] + arguments[1]
    } else {
      // console.log("they aren't numbers");
      return undefined
      }
    } else if (arguments.length == 1 && typeof arguments[0] == "number") {
      first = arguments[0]
      // console.log("need a second one");
      return function(second) {
        // console.log(second);
        // console.log(typeof second)
        if (typeof first == "number" && typeof second == "number") {
          // console.log("first and second added");
          return first + second
        } else {
          // console.log("first or second is no good");
          return undefined
        }
      }
    } else {
      // console.log("nothing in there");
      return undefined
    }
  }

  console.log(addTogether(2)([3]))

  //function that does a + b = sum a+b
  //if only one arg c = function(x) = sum c + x
  //check if integer
