function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let debris = []
  for (let i = 0; i < arr.length; i++) {
    debris[i] = {
      name: arr[i].name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3) / GM))
    }
  }
  return debris
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(orbitalPeriod([{
  name: "iss",
  avgAlt: 413.6
}, {
  name: "hubble",
  avgAlt: 556.7
}, {
  name: "moon",
  avgAlt: 378632.553
}]));
