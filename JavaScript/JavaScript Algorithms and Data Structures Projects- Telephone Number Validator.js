function telephoneCheck(str) {
  return /^(1[\s]?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}\W?\d{4}$/.test(str);
}


telephoneCheck("555-555-5555");
