function palindrome(str) {
  let cleaned = str.replace(/[^a-z0-9]/ig, '').toLowerCase()
  console.log(cleaned);
  let flipped = ""
  for (let i = cleaned.length-1; i >= 0; i--) {
    flipped += cleaned[i]
  }
  return cleaned == flipped
}



console.log(palindrome("_eye"));
