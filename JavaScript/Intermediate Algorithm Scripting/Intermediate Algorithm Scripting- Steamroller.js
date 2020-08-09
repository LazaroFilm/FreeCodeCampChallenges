function steamrollArray(arr) {
  let flat = []
  function goDeeper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // console.log("deeper!");
        goDeeper(arr[i])
      } else {
      // console.log("boom!");
      flat.push(arr[i])
      // console.log(flat)
      }
    }
  }
  goDeeper(arr)
  return flat
}
console.log(steamrollArray([[[1]], [2], [3, [[4]]]]))
