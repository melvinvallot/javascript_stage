// sortie: {fruit: ["fraise", "citron", "pomme", "banane"],
//          legume: ["patate", "carotte", "tomate"],
//          viande: ["steak", "poulet"]    }

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

//ma version
function productByCategory() {
  const reduceArray = originalArray.reduce((acc, element) => {
    if (!acc[element.category]) {
      acc[element.category] = [];
    }
    acc[element.category].push(element.name);
    return acc;
  }, {});

  console.log(reduceArray);
}
productByCategory();

//V2
const arrayReduce = originalArray.reduce((acc, element) => {
  acc[element.category] = acc[element.category] || [];
  acc[element.category].push(element.name);
  return acc;
}, {});
console.log(arrayReduce);

//V3
function newArrayGroup() {
  const arrayGroup = originalArray.reduce((acc, element) => {
    (acc[element.category] ??= []).push(element.name); //??= Nullish coalescing assignment, assigne une valeur si null ou undefined
    return acc;
  }, {});
  console.log(arrayGroup);
}
newArrayGroup();

//V4
function groupArray() {
  const groupArray = Object.groupBy(
    originalArray,
    (element) => element.category,
  );
  console.log(groupArray);
}
groupArray();
