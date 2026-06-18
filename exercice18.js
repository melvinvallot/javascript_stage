/* function stringCalculator(stringToParse) {
  const customDelimiter = stringToParse.split(";");
  console.log("customDelimiter", customDelimiter);
  return stringToParse.split(/,|\n/).reduce((acc, val) => acc + Number(val), 0);
} */
//console.log(stringCalculator("5,8,3"));
//console.log(stringCalculator("1\n2,3"));
//console.log(stringCalculator("//;\n1;2"));

function getCustomDelimiter(stringToParse) {
  const customDelimiter = /^\/\/(.)\n/;
  const match = stringToParse.match(customDelimiter);

  if (match) {
    return match[1];
  }
  return null;
}

console.log(getCustomDelimiter("//;\n1;2"));
console.log(getCustomDelimiter("//|\n1|2|3"));
console.log(getCustomDelimiter("//sep\n2sep3"));
