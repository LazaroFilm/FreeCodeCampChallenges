function binaryAgent(str) {
  function binToAscii(bin) {
    let ascii = 0
    for (let i = 0; i < bin.length; i++) {
      // console.log("IO: " + bin[i]);
      if (bin[i] == 1) {
        // let power = bin.length - 1 - i
        // console.log(power + " add this " + Math.pow(2, power));
        ascii += Math.pow(2, bin.length - 1 - i)
      }
    }
    return ascii
  }
  const binArr = str.split(' ')
  // console.log(binArr.length);
  let answer = []
  for (let i = 0; i < binArr.length; i++) {
    // console.log(i + " - " + binArr[i] + " - " + binToAscii(binArr[i]) + " - " + String.fromCharCode(binToAscii(binArr[i])))
    let letter = String.fromCharCode(binToAscii(binArr[i]))
    // console.log(letter);
    answer.push(letter);
    // console.log(answer);
  }
  return answer.join("")
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
