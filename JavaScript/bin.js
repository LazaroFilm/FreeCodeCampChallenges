function rot13(str) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const caesar = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
  let answer = ""
  for (let char in str) {
    if (/[a-z]/i.test(str[char])) {
      for (let letter in alphabet) {
        if (str[char] == alphabet[letter]) {
          answer += caesar[letter]
        }
      }
    }
    else {
      answer += str[char]
    }
  }
  return answer
}

console.log(rot13("FHCRE FRPERG!!!"));
