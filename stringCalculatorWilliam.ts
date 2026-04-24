const stringCalculator = (numberToParse: string) => {
  return numberToParse.split(",")
  .map((element) => parseInt(element))
  .reduce((accumulator, currentValue) => accumulator + currentValue,
  0
) || 0
}

console.log(stringCalculator("")) // => 0
console.log(stringCalculator("0")) // => 0
console.log(stringCalculator("1")) // => 1
console.log(stringCalculator("1,2")) // => 3