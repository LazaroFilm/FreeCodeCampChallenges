function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source); //turns source object's names (keys) into an an array.

  // filter the collection
  return collection.filter(function(obj) { //takes the collection (an array of bojects) and returns only the ones that are true, does it one by one.
    console.log('On this iteration of the loop, the object being worked on is: ' + JSON.stringify(obj));

    for (var i = 0; i < srcKeys.length; i++) { //for loop going through each value of source keys (via srcKeys)
      console.log('We are now checking if \'' + srcKeys[i] + '\' is NOT a property of ' + JSON.stringify(obj) + ' OR if the String, \'' + obj[srcKeys[i]] + '\' is NOT equal to ' + '\'' + source[srcKeys[i]] + '\'');
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) { //if srcKeys' s i value is NOT! a property of collection's obj worked OR|| if the value of the matching key is NOT the same
        console.log('Since the above test passed, we are going to return false for this object, meaning it will not be included in what the filter() function returns.');
        return false; //filter it out of collection
      }
    }
    console.log('In this case the above test failed and we will add this object to the arr filter return.');
    return true; //otherwise, keep it in the collection
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
