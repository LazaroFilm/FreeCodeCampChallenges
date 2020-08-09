function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre) | !collection[i][pre]) {
      return false
    }
  }
  return true
}

console.log(truthCheck([{
      "user": "Tinky-Winky",
      "sex": "male"
    }, {
      "user": "Dipsy",
      "sex": "male"
    }, {
      "user": "Laa-Laa",
      "sex": "female"
    }, {
      "user": "Po",
      "sex": "female"
    }], "sex"))
