function convertToRoman(num) {
  const digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let answer = ""

  //checking digit/roman equivalence
  // for (let i = 0; i < digit.length; i++) {
  //   console.log(digit[i] + " = " + roman[i]);
  // }
  for (let i = 0; i < digit.length; i++) {
    while (num >= digit[i]) {
      answer += roman[i]
      num -= digit[i]
    }
  }
  return answer;
}

console.log(convertToRoman(1984));
