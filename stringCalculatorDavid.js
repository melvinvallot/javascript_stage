function add(numbersToParse) {
    if (!numbersToParse) return 0;
    const formattedNumber = numbersToParse
    .split(',') // ["1","2","3"]
    .map((nbr) => Number(nbr)); // [1,2,3]

    return result = formattedNumber.reduce((acc, currentNumber) => {
       return acc + currentNumber;
    }, 0)

}


console.log(add("")) // => 0
console.log(add("0")) // => 0
console.log(add("1")) // => 1
console.log(add("1,2")) // => 3