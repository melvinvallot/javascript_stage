function add(numbersToParse) {
  const splitedNumbers = numbersToParse.split(",");
  return splitedNumbers.reduce(
    (accumulateur, value) => accumulateur + Number(value),
    0,
  );
}

console.log(add("1, 6, 8"));
