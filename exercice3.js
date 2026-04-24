// Entrée: [{name: "Alice", age: 17}, {name: "Bob", age: 25}, {name: "Charlie", age: 15} ,
// {name: "David", age: 30}]
// Sortie: [{name: "Bob", age: 25}, {name: "David", age: 30}] // users majeurs
// Sortie: ["Alice", "Bob", "Charlie", "David"] // tableau des noms
// Sortie: [17, 25, 15, 30] // tableau des ages

/*const objectUsers = [
  { name: "Bob", age: 25 },
  { name: "David", age: 30 },
  { name: "Alice", age: 17 },
  { name: "Charlie", age: 15 },
];
const usersFilter = objectUsers.filter((element) => element.age >= 18);

console.log(usersFilter);

const nameFilter = objectUsers
  .filter((element) => element.name)
  .map((element) => element.name);
console.log(nameFilter);

const ageFilter = objectUsers
  .filter((element) => element.age)
  .map((element) => element.age);
console.log(ageFilter);

/*const nameAge = users.reduce((accumulateur, value) => {
    if (users >= 18 && !accumulateur["string"]) {
    accumulateur["users"] = []
    }
    accumulateur["users"].push(value);
})
    




}
*/
// Entrée:  { maitre: "David", age: 33, dev: "Omar", pause: 30}
// Sortie: ["David", 33, "Omar" ,30]
// Sortie: ["name", "age", "dev", "pause"]
// Sortie: [33, 30]

const personObject = { maitre: "David", age: 33, dev: "Omar", pause: 30 };

const personResult = Object.values(personObject);

console.log(personResult);

console.log(Object.keys(personObject));

/*const numbersResult = numbers.value(personObject);*/

const numberArray = personResult.filter((el) => typeof el === "number");
console.log(personObject.age);
console.log(personObject.pause);
console.log(numberArray);

/*const nameFilter = personObject
  .filter((element) => element.name)
  .map((element) => element.name);

console.log(nameFilter);

console.log(Object.keys(personObject[0]));

const ageFilter = personObject
  .filter((element) => element.age)
  .map((element) => element.age);

console.log(ageFilter);*/
