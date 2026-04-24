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

const arrayGroup = originalArray.reduce((acc, element) => {
  if (!acc[element.category]) {
    acc[element.category] = [];
  }
  acc[element.category].push(element.name);
  return acc;
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
