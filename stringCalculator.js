function add(numbersToParse) {
  if (numbersToParse == "") {
    return 0;
  }
  const splitNumbers = numbersToParse.split(",") //"4,5,6" => ["4","5","6"]
  const convertNumbers = splitNumbers.map(element => Number(element));   //  ["4","5","6"] => [4,5,6]
  const result = convertNumbers.reduce((acc, value) => acc + value  , 0)                                             
                                                     // 0 + 4 = 4
                                                     // 4 + 5 = 9
                                                     // 9 + 6 = 15           
    return result;
}

// "1,2,3" => 6
console.log(add('4,5,6')); // "4,5,6" => 15
// "0" ou "" => 0
