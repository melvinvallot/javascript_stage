const object = {
  a: "!",
  b: ")",
  c: '"',
  d: "(",
  e: "£",
  f: "*",
  g: "%",
  h: "&",
  i: ">",
  j: "<",
  k: "@",
  l: "a",
  m: "b",
  n: "c",
  o: "d",
  p: "e",
  q: "f",
  r: "g",
  s: "h",
  t: "i",
  u: "j",
  v: "k",
  w: "l",
  x: "m",
  y: "n",
  z: "o",
};
const object2 = {
  "!": "a",
  ")": "b",
  '"': "c",
  "(": "d",
  "£": "e",
  "*": "f",
  "%": "g",
  "&": "h",
  ">": "i",
  "<": "j",
  "@": "k",
  a: "l",
  b: "m",
  c: "n",
  d: "o",
  e: "p",
  f: "q",
  g: "r",
  h: "s",
  i: "t",
  j: "u",
  k: "v",
  l: "w",
  m: "x",
  n: "y",
  o: "z",
};
function cryptObject(message) {
  const arrayLetter = message.split("");
  const messageTransforme = arrayLetter.map((lettre) => {
    return object[lettre];
  });
  return messageTransforme.join("");
}
function decryptObject(messageCrypt) {
  const arraySymbole = messageCrypt.split("");
  const messageTransforme = arraySymbole.map((symbole) => {
    return object2[symbole];
  });
  return messageTransforme.join("");
}

console.log(cryptObject("bonjour"));
console.log(decryptObject(")dc<djg"));
