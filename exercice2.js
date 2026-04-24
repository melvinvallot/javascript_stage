//Exo David
// Entrée: ["fraise", 45, "citron", true, {prof: "david", eleve: "Melvin"}, {name: "test", age: 33}, 92, 52]
// Sortie: ["fraise", "citron"]
// Sortie: [45,92,52]
// Sortie: [{prof: "david", eleve: "Melvin"}, {name: "test", age: 33}]

function add(originArray) {
  const strings = originArray.filter((element) => typeof element === "string");
  const numbers = originArray.filter((element) => typeof element === "number");
  const objects = originArray.filter((element) => typeof element === "object");

  return { strings, numbers, objects };
}

const originArray = [
  "fraise",
  45,
  "citron",
  true,
  { prof: "david", eleve: "Melvin" },
  { name: "test", age: 33 },
  92,
  52,
  "patate",
];
const result = add(originArray);

console.log(result.strings);
console.log(result.numbers);
console.log(result.objects);

//------------------------------------

// {strings: [], numbers: [], objects: []}
const strings = originArray.reduce((accumulateur, value) => {
  accumulateur["string"] = accumulateur["string"] || [];
  accumulateur["number"] = accumulateur["number"] || [];
  accumulateur["object"] = accumulateur["object"] || [];

  accumulateur[typeof value]?.push(value);
  // if (typeof value === "string") {
  //   if (!accumulateur["strings"]) {
  //     accumulateur["strings"] = [];
  //   }
  //   accumulateur["strings"].push(value);
  // }

  // if (typeof value === "number") {
  //   if (!accumulateur["numbers"]) {
  //     accumulateur["numbers"] = [];
  //   }
  //   accumulateur["numbers"].push(value);
  // }
  // if (typeof value === "object") {
  //   if (!accumulateur["objects"]) {
  //     accumulateur["objects"] = [];
  //   }
  //   accumulateur["objects"].push(value);
  // }

  return accumulateur;
}, {});

const numbers = originArray.reduce((accumulateur, value) => {
  if (typeof value === "number") {
    accumulateur.push(value);
  }
  return accumulateur;
}, []);
const objects = originArray.reduce((accumulateur, value) => {
  if (typeof value === "object") {
    accumulateur.push(value);
  }
  return accumulateur;
}, []);

return { strings, numbers, objects };

console.log(strings);
console.log(numbers);
console.log(objects);

//---------------------------

// const originArray = originArray.reduce((accumulateur, value) => {
//     if (typeof value === "object") {
//         accumulateur.push(value);
//     }
//     if (type)
// })

/*const users = [
    { prof: "David" },
    { eleve: "Melvin" },
    { name: "test", age: 33 }
];
const fruits = ["fraise", "citron"];

const numbers = [45, 92, 52];
const boolean = "true";

console.log(users);
console.log(fruits);
console.log(numbers);
console.log("boolean");
}*/
