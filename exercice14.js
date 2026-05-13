/*function add(numbersToParse) {
  const splitedNumbers = numbersToParse.split(",");
  return splitedNumbers.reduce(
    (accumulateur, value) => accumulateur + Number(value),
    0,
  );
}

console.log(add("1,56,6,78"));*/

function add(numbersToParse) {
  return numbersToParse
    .split(",")
    .reduce((accumulateur, value) => accumulateur + Number(value), 0);
}

console.log(add("1,56,6,78"));
console.log(add("0"));
console.log(add(""));
//definition de fonction
