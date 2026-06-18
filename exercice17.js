/*function creerUnePersonne() {
  const personne = {
    nom: "melvin",
    age: 27,
    ville: "Mezy-sur-seine",
  };
  return personne;
}

const personne = creerUnePersonne();
console.log(personne);*/

/*const voiture = {
  marque: "Renault",
  couleur: "Rouge",
  annee: 2015,
};

const voiture2 = {
  ...voiture,
  couleur: "Bleu",
  prix: 15000,
};

console.log(voiture2);*/

/*const animal = {
  nom: "Rex",
  espece: "chien",
  age: 3,
  couleur: "marron",
};

const newAnimal = {
  nom: animal.nom,
  espece: animal.espece,
};

console.log(newAnimal);
console.log(animal.nom);
console.log(animal.age);
console.log(animal["age"]);
console.log(animal["couleur"]);*/

/*const calculatrice = {
  a: 10,
  b: 5,
  additionner() {
    return this.a + this.b;
  },
  multiplier() {
    return this.a * this.b;
  },
};
const additionner = calculatrice.a + calculatrice.b;
const multiplier = calculatrice.a * calculatrice.b;
console.log(additionner);
console.log(multiplier);
console.log(calculatrice.additionner());
console.log(calculatrice.multiplier());*/

/*const produit = {
  nom: "Ordinateur",
  marque: "Dell",
  prix: 800,
  stock: 25,
};
for (const prop in produit) {
  console.log(`produit.${prop} = ${produit[prop]}`);
}
*/

const eleves = [
  { nom: "Alice", note: 15 },
  { nom: "Bob", note: 12 },
  { nom: "Charlie", note: 18 },
  { nom: "Diana", note: 9 },
];

function add(eleves) {
  const moyenneGenerale = eleves.reduce((accumulateur, value) => {
    return accumulateur + value.note / eleves.length;
  }, 0);
  return eleves.map((eleve) => ({
    nom: eleve.nom,
    noteMoyenne: moyenneGenerale,
  }));
}
console.log(add(eleves));

const etudiant = {
  nom: "Lucas",
  age: 20,
  adresse: {
    rue: "12 rue des Fleurs",
    ville: "Paris",
    codePostal: "75001",
  },
  notes: [14, 16, 12, 18],
};

function displayStudent(etudiant) {
  const overallAverage = etudiant.notes.reduce((accumulateur, value) => {
    return accumulateur + value / etudiant.notes.length;
  }, 0);
  return {
    moyenne: overallAverage,
    pays: "France",
    ville: etudiant.adresse.ville,
  };
}
console.log(displayStudent(etudiant));

//displayStudentCity(etudiant);

const original = { nom: "Marie", age: 25 };
const NewObject = {
  ...original,
  nom: "Sophie",
};
console.log(NewObject);

function addUser(nom, age, email) {
  return { nom, age, email };
}

const user = addUser("Paul", 28, "paul@mail.com");

console.log(user.nom);
console.log(user.age);
console.log(user.email);

const gamer = {
  pseudo: "eacrone",
  jeuFavoris: "Rocket League",
  niveau: "Grand Champion",
};
function textGamer({ pseudo, jeuFavoris, niveau }) {
  return `Pseudo : ${pseudo}, Jeu : ${jeuFavoris}, niveau : ${niveau}`;
}
function textGamer2(gamer) {
  return `Pseudo: ${gamer.pseudo}, jeuFavoris: ${gamer.jeuFavoris}, niveau: ${gamer.niveau}`;
}

console.log(textGamer(gamer));
console.log(textGamer2(gamer));

const profil = {
  nom: "Alex",
  age: 22,
  motDePasse: "1234abc",
  email: "alex@mail.com",
};

delete profil.motDePasse;

console.log("motDePasse existe ?", "motDePasse" in profil);
console.log("motDePasse :", profil.motDePasse);
console.log(profil);

const telephone = {
  marque: "Samsung",
  modele: "Galaxy S21",
  prix: 700,
};
console.log(telephone.hasOwnProperty("prix"));
console.log(telephone.hasOwnProperty("couleur"));
console.log(telephone.hasOwnProperty("marque"));

const produits = [
  { nom: "T-shirt", prix: 20, quantite: 5 },
  { nom: "Jean", prix: 50, quantite: 3 },
  { nom: "Veste", prix: 80, quantite: 2 },
  { nom: "Chaussure", prix: 60, quantite: 4 },
];
function produitPlusChere(produits) {
  const produitChere = produits.reduce((accumulateur, value) => {
    if (value.prix > accumulateur.prix) {
      return value;
    }
    return accumulateur;
  });
  return produitChere;
}

function multiplier(produits) {
  const totalValueStock = produits.reduce((accumulateur, produit) => {
    return accumulateur + produit.prix * produit.quantite;
  }, 0);
  return totalValueStock;
}

function inferieurA60(produits) {
  const produitsInferieur = produits.filter((produitActuel) => {
    return produitActuel.prix < 60;
  });
  return produitsInferieur;
}

console.log(produitPlusChere(produits));
console.log(inferieurA60(produits));
console.log(multiplier(produits));

const infoBase = {
  nom: "Julie",
  age: 24,
};

const infoSupp = {
  ville: "Lyon",
  metier: "developpeuse",
  salaire: 2500,
};
const newObject = {
  ...infoBase,
  ...infoSupp,
  salaire: 3000,
};
console.log(newObject);

const personnage = {
  nom: "Aragorn",
  race: "Humain",
  arme: "Epée",
  niveau: 50,
  vie: 100,
  mana: 80,
};

console.log(Object.keys(personnage));
console.log(Object.values(personnage));
console.log(Object.entries(personnage));

const notes = {
  maths: 14,
  francais: 12,
  histoire: 16,
  anglais: 18,
  sport: 18,
};
function bestNote(notes) {
  const descendingScores = Object.values(notes).sort(
    (noteA, noteB) => noteB - noteA,
  );
  const maxNote = descendingScores[0];
  return Object.entries(notes).filter((note) => note[1] === maxNote);
}
console.log(bestNote(notes));
console.log(notes[0]);
Math.max(1, 2, 3);
console.log(Math.max(1, 2, 3));
