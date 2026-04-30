const numbers = "1,2,3,4,5";

function add(numbersToParse) {
  const numbersToSplit = numbersToParse.split(",");
  const numbersToReduce = numbersToSplit.reduce((accumulateur, value) => {
    accumulateur.push(Number(value));
    return accumulateur;
  }, []);

  const pushNumbers = numbersToReduce.push(6, 7, 8, 9);

  const object = numbersToReduce.map((n) => ({ value: n }));
  console.log("object", object);

  const arrayObject = object.map((n) => [n]);
  console.log(arrayObject);
}

console.log(add(numbers));
