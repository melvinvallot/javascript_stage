//.reduce
const nombre = [1, 2, 3, 4, 5];
const total = nombre.reduce((acc, val) => acc, val, 0);

console.log(total); //=15

/*METHODE DE TABLEAUX EN JAVASCRIPT
METHODE DE RECHERCHE*/

//find() trouve le premier element qui correspond
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const user = users.find((u) => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }
//retourne l'element du tableau ou undefined si rien trouvé

//findIndex() trouve l'index du premier element qui correspond
const nombres = [10, 20, 30, 40];

const index = nombres.findIndex((n) => n > 25);
console.log(index); //2 (c'est l'index de 30)
//retourne -1 si rien trouvé

//indexOf() trouve l'index d'une valeur exacte
const fruits = ["pomme", "banane", "cerise"];

console.log(fruits.indexOf("banane")); //1
console.log(fruits.indexOf("kiwi")); //-1

//include() vérifie si une valeur existe
const fruits = ["pomme", "banane", "cerise"];

console.log(fruits.includes("banane")); //true
console.log(fruits.includes("kiwi")); //false

/*METHODE DE TRANSFORMATION*/

//map() transforme chaque element -> retourne un nouveau tableau
const nombres = [1, 2, 3, 4];

const doubles = nombres.map((n) => n * 2);
console.log(doubles); //[2, 4, 6, 8]

const users = [{ name: "Alice" }, { name: "Bob" }];
const noms = users.map((u) => u.name);
console.log(noms); //["Alice", "Bob"]
//ne modifie pas le tableau original

//filter() filtre les elements -> retourne un nouveau tableau
const nombres = [1, 2, 3, 4, 5, 6];

const pairs = nombres.filter((n) => n % 2 === 0);
console.log(pairs); //[2, 4, 6]

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 15 },
];

const majeurs = users.filter((u) => u.age >= 18);
console.log(majeurs); // [{ name: "Bob", age: 25 }]
//ne modifie pas le tableau original

//flat() aplatit un tableau imbriqué
const tableau = [1, [2, 3], [4, [5, 6]]];

console.log(tableau.flat()); //[1, 2, 3, 4, [5, 6]] -> 1 niveau
console.log(tableau.flat(2)); //[1, 2, 3, 4, 5, 6]  -> 2 niveau
console.log(tableau.flat(Infinity)); //tout les niveaux

//flatMap() = map() + flat() en une fois
const phrases = ["hello world", "foo bar"];
phrases.flatMap((p) => p.split(""));
// ["hello", "world", "foo", "bar"]

//Object.keys / values / entries (tres important)
const obj = { a: 1, b: 2 };
Object.keys(obj); //["a", "b"]
Object.values(obj); //[1, 2]
Object.entries(obj); //[["a", 1], ["b", 2]]

/*METHODE D'ITERATION*/

//forEach() parcourt chaque element (sans retourner le tableau)
const fruits = ["pomme", "banane", "cerise"];

fruits.forEach((fruit, index) => {
  console.log(`${index} : ${fruit}`);
});
// 0 : pomme
// 1 : banane
// 2 : cerise

//ne retourne RIEN (undefined)
//on ne peut pas utiliser break ou return pour stopper la boucle

/*METHODE DE TEST/VERIFICATION*/

//some() est-ce qu'au moins un element du tableau correspond ?
const nombres = [1, 3, 5, 8, 9];

console.log(nombres.some((n) => n % 2 === 0)); //true (8 est pair)
console.log(nombres.some((n) => n > 100)); //false

const users = [
  { name: "Alice", admin: false },
  { name: "Bob", admin: true },
];
const hasAdmin = users.some((u) => u.admin === true);
console.log(hasAdmin); //true

//every() est-ce que tout les elements du tableau correspondent ?
const nombres = [2, 4, 6, 8];

console.log(nombres.every((n) => n % 2 === 0)); //true (tous pair)
console.log(nombres.every((n) => n > 5)); //false (2 et 4 ne le sont pas)

const users = [{ age: 20 }, { age: 25 }, { age: 17 }];
const tousMajeurs = users.every((u) => u.age >= 18);
console.log(tousMajeurs); //false

/*METHODE DE TRI ET ORGANISATION*/

//sort() trie le tableau (modifie l'original)
const fruits = ["banane", "pomme", "cerise"];
fruits.sort();
console.log(fruits); //["banane", "cerise", "pomme"]

//pour les nombres, il faut une fonction de comparaison
const nombres = [10, 1, 5, 100, 2];

nombres.sort((a, b) => a - b); //croissant
console.log(nombres); //[1, 2, 5, 10, 100]

nombres.sort((a, b) => b - a); //decroissant
console.log(nombres); //[100, 10, 5, 2, 1]

//reverse() inverse le tableau (modifie l'original)
const nombres = [1, 2, 3, 4, 5];
nombres.reverse();
console.log(nombres); // [5, 4, 3, 2, 1]

/*METHODE D'AJOUT/SUPPRESSION*/
const arr = [1, 2, 3];

//ajout
arr.push(4); //ajoute a la FIN -> [1, 2, 3, 4]
arr.unshift(0); //ajoute au DEBUT -> [0, 1, 2, 3, 4]

//suppression
arr.pop(); //supprime la fin -> retourne l'element supprimé
arr.shift(); //supprime le debut -> retourne l'element supprimé

//splice : ajoute/supprime n'importe ou
arr.splice(1, 2); //supprime 2 elements a partir de l'index 1
arr.splice(1, 0, "a", "b"); //insere "a" et "b" a l'index 1 sans supprimer

/*METHODE DE COMBINAISON/EXTRACTION*/

//slice() extrait une portion (sans modifier l'original)
const nombres = [1, 2, 3, 4, 5];
console.log(nombres.slice(1, 3)); //[2, 3] (index 1 inclus, 3 exclus)
console.log(nombres.slice(2)); //[3, 4, 5]
console.log(nombre.slice(-2)); //[4, 5] (2 derniers)

//concat() fusionne les tableaux
const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);
console.log(c); //[1, 2, 3, 4, 5 ,6]
//alternative moderne avec le spread operator
const d = [...a, ...b]; // [1, 2, 3, 4, 5, 6]
//---------------------------

//reduce() combine les elements pour obtenir une valeur unique
const nombres = [1, 2, 3, 4, 5];
const total = nombres.reduce((acc, val) => acc + val, 0);
console.log(total); //15 (somme de tous les nombres)

tableau.reduce((accumulateur, elementActuel) => {
  //logique
  return nouvelAccumulateur;
}, valeurDeDepart);

//array.from() crée un tableau depuis autre chose
Array.from("hello"); // ["h","e","l","l","o"]
Array.from({ lenght: 3 }, (_, i) => i); // [0, 1, 2]

//fill() remplit un tableau
const arr = [1, 0, 0, 4];
arr.fill(0, 1, 3); // [1, 0, 0, 4]

// join() transforme un tableau en string
["a", "b", "c"].join("-"); // "a-b-c"

// at() accès par index (supporte les negatifs)
const arr = [1, 2, 3];
arr.at(0); // 1
arr.at(-1); // 3 (dernier element)

//replace()
strings.replace(recherche, remplacement)
//remplace la premiere occurence
const phrase = "bonjour, monde, monde !";
const resultat = phrase.replace("monde", "javascript");
console.log(resultat); // bonjour, javascript, monde
//remplace toutes les occurences pour replaceAll()
const resultat2 = phrase.replaceAll("monde", "javascript");
console.log(resultat2)







//Fonctions qui mutent les données (modifie l'original)
const arr = [1, 2, 3];

// TABLEAUX
arr.push(4)        // Ajoute à la fin
arr.pop()          // Supprime le dernier
arr.shift()        // Supprime le premier
arr.unshift(0)     // Ajoute au début
arr.splice(1, 1)   // Supprime/remplace à un index
arr.sort()         // Trie le tableau
arr.reverse()      // Inverse le tableau
arr.fill(0)        // Remplace les valeurs
const obj = { a: 1 };

// OBJETS
obj.a = 2                    // Modifie une propriété
delete obj.a                 // Supprime une propriété
Object.assign(obj, { b: 2 }) // Fusionne dans l'original

//Fonctions qui ne mutent pas les données (retourne un nouveau tableau ou objet)
const arr = [1, 2, 3];

// TABLEAUX
arr.map()        // Transforme chaque élément
arr.filter()     // Filtre les éléments
arr.reduce()     // Réduit à une valeur
arr.slice()      // Copie une partie du tableau
arr.concat()     // Fusionne des tableaux
arr.find()       // Trouve un élément
arr.findIndex()  // Trouve un index
arr.includes()   // Vérifie si un élément existe
arr.some()       // Vérifie si un élément correspond
arr.every()      // Vérifie si tous correspondent
[...arr]         // Copie le tableau (spread)


//STRING  →  replace() replaceAll() split() trim()
           //toUpperCase() toLowerCase() includes()

//TABLEAU →  map() filter() reduce() find()
           //push() pop() sort() slice()