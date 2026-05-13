const originalArray = [
  { category: "fruit", name: "fraise" },
  { category: "fruit", name: "citron" },
  { category: "legume", name: "patate" },
  { category: "fruit", name: "pomme" },
  { category: "legume", name: "carotte" },
  { category: "fruit", name: "banane" },
  { category: "legume", name: "tomate" },
  { category: "viande", name: "steak" },
  { category: "viande", name: "poulet" },
];

// const arrayGroup = originalArray.reduce((acc, element) => {
//   if (!acc[element.category]) {
//     acc[element.category] = [];
//   }
//   acc[element.category].push(element.name);
//   return acc;
// }, {});

const arrayGroup = originalArray.reduce((accumulateur, element) => {
  return {
    ...accumulateur,
    [element.category]: [
      ...(accumulateur[element.category] || []),
      element.name,
    ],
  };
}, {});

console.log(arrayGroup);

const fruits = originalArray.filter((element) => element.category === "fruit");
const legumes = originalArray.filter(
  (element) => element.category === "legume",
);
const viandes = originalArray.filter(
  (element) => element.category === "viande",
);

console.log(fruits);
console.log(legumes);
console.log(viandes);

// sortie: {fruit: ["fraise", "citron", "pomme", "banane"],
//          legume: ["patate", "carotte", "tomate"],
//          viande: ["steak", "poulet"]    }

/*const originalArray = [
  { category: "fruit", name: "fraise" },
  { category: "fruit", name: "citron" },
  { category: "legume", name: "patate" },
  { category: "fruit", name: "pomme" },
  { category: "legume", name: "carotte" },
  { category: "fruit", name: "banane" },
  { category: "legume", name: "tomate" },
  { category: "viande", name: "steak" },
  { category: "viande", name: "poulet" },
];


const reducedArray = originalArray.reduce((accumulateur, value) => {
  if (!accumulateur[value.category]) {
    accumulateur[value.category] = []
  }
  accumulateur[value.category].push(value.name)
  
return accumulateur
}, {})
// sortie: {fruit: ["fraise", "citron", "pomme", "banane"],
//          legume: ["patate", "carotte", "tomate"],
//          viande: ["steak", "poulet"]    }
 
console.log(reducedArray);


const elem = {}
elem.category = "fruit"
elem.name = "fraise" 

elem.category = "viande"

console.log(elem)*/

/*const elem = []
elem.push("fraise", "citron", "pomme", "banane")


console.log(elem)*/
