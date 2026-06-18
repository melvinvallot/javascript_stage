const users = [
  { nom: "David", age: 90 },
  { nom: "William", age: 110 },
  { nom: "Melvin", age: 27 },
  { nom: "Omar", age: 9999 },
];

function getUsersYoungerThan100(users) {
  return users.filter((user) => user.age < 100); //{ nom: "David", age: 90 }
}

function addMean(users) {
  return (
    users.reduce((accumulateur, user) => accumulateur + user.age, 0) /
    users.length
  ); //{ nom: "David", age: 90 }
}

console.log(addMean(users));
