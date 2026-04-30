function direBonjour() {
  console.log("direBonjour");
}

function additionner(a, b) {
  return a + b;
}

function estPair(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function enMajuscule() {
  return toUpperCase("bonjour");
}

function lePlusGrand(a, b, c) {}

function compterVoyelles(string) {
  const regex = /[aeiouy]/gi;
  correspondance = string.match(regex);
  return correspondance ? correspondance.length : 0;
}

function inverserMot(string) {
  const splittedMot = string.split("");
  const reversedMot = splittedMot.reverse();
  const joinedMot = reversedMot.join("");
  return joinedMot;
}
return "bonjour";

function calculatrice(a, b, operateur) {
  const addition = a + b;
  const soustraction = a - b;
  const multiplication = a * b;
  const division = a / b;

  if (operateur === "+") return addition;
  if (operateur === "-") return soustraction;
  if (operateur === "*") return multiplication;
  if (operateur === "/") return division;
}
console.log(calculatrice(6, 4, "+"));
console.log(calculatrice(6, 4, "-"));
console.log(calculatrice(6, 4, "*"));
console.log(calculatrice(6, 4, "/"));

function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}

const mesNombres = [14, 36, 67];
const resultat = sommeTableau(mesNombres);
console.log(resultat);

function supprimerNegatif(tableau) {
  tableau.filter((n) => n >= 0);
}

const supprimerNegatif = (tableau) => {
  // logic
  // logic
  // logic
  // logic
  return tableau?.filter((n) => n >= 0);
};
const notes = [1, -4, 56, -67, 12];
console.log(supprimerNegatif(notes));

function aDesDoublons(tableau) {
  const sansDoublons = new Set(tableau);
  return sansDoublons.size !== tableau.length;
}
const numbers = [1, 2, 3, 3];
console.log(aDesDoublons(numbers));

const numbers2 = [10, 25, 3, 3];
function soustraire(array) {
  return soustraire.reduce((acc, val) => acc - val, 0);
}
