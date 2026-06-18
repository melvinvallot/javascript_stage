// 📝 CONSIGNE :
// Écris une fonction qui prend un âge en paramètre
// et retourne "Majeur" si l'âge est >= 18, sinon "Mineur"

function verifierAge(age: number): string {
  
    if (age >= 18) {
        return "Majeur";
    } else {
        return "Mineur";
    }
}

// Tests
console.log(verifierAge(20));  
console.log(verifierAge(15));  
console.log(verifierAge(18));  






// 📝 CONSIGNE :
// Écris une fonction qui prend une note (0-100) et retourne une lettre :
// - 90-100 : "A"
// - 70-89  : "B"
// - 50-69  : "C"
// - 30-49  : "D"
// - 0-29   : "F"
// Si la note est < 0 ou > 100, retourner "Note invalide"

function noteEnLettre(note: number): string {
  if (note > 100) {
    return "Note invalide";
  }
  if (note < 0) {
    return "Note invalide";
  }
  if (note >= 90) {
    return "A"
  } 
  if (note >= 70) {
    return "B"
  }
  if (note >= 50) {
    return "C"
  }
  if (note >= 30) {
    return "D"
  }
  if (note >= 0) {
    return "F"
  }

  return "Note invalide";

}

// Tests
console.log(noteEnLettre(95));   
console.log(noteEnLettre(75));   
console.log(noteEnLettre(55));   
console.log(noteEnLettre(35));  
console.log(noteEnLettre(20));   
console.log(noteEnLettre(-5));   
console.log(noteEnLettre(105));  


// 📝 CONSIGNE :
// Écris une fonction qui prend un numéro (1-7) et retourne le jour correspondant
// 1 = "Lundi", 2 = "Mardi", ..., 7 = "Dimanche"
// Utilise un SWITCH
// Si le numéro n'est pas entre 1 et 7, retourner "Jour invalide"

function jourDeLaSemaine(numero: number): string {
  switch (numero) {
 case 1: return "Lundi";
 case 2: return "Mardi";
 case 3: return "Mercredi";
 case 4: return "Jeudi";
 case 5: return "Vendredi";
 case 6: return "Samedi";
 case 7: return "Dimanche";
 default: return "Jour invalide"
}
}
// Tests
console.log(jourDeLaSemaine(1));  
console.log(jourDeLaSemaine(5));  
console.log(jourDeLaSemaine(7));  
console.log(jourDeLaSemaine(9)); 


// 📝 CONSIGNE :
// Écris une fonction calculatrice qui prend deux nombres et un opérateur (+, -, *, /)
// Retourne le résultat de l'opération
// ⚠️ Si l'opérateur est "/" et que le deuxième nombre est 0, retourner "Division par zéro impossible"
// ⚠️ Si l'opérateur est inconnu, retourner "Opérateur invalide"

function calculatrice(a: number, b: number, operateur: string): number | string {
switch (operateur) {
    case "+" :
        return "a + b";
    case "-" :
        return "a - b";
    case "*" :
        return "a * b";
    case "/" :
        if (b === 0) {
            return "Division par zero impossible";
            return "a / b"
        };
    default :
    return "Operateur invalide"
}

}

// Tests
console.log(calculatrice(10, 5, "+"));   // 15
console.log(calculatrice(10, 5, "-"));   // 5
console.log(calculatrice(10, 5, "*"));   // 50
console.log(calculatrice(10, 5, "/"));   // 2
console.log(calculatrice(10, 0, "/"));   // "Division par zéro impossible"
console.log(calculatrice(10, 5, "%"));   // "Opérateur invalide"



// 📝 CONSIGNE :
// Classique ! Écris une fonction fizzBuzz qui prend un nombre et :
// - Retourne "FizzBuzz" si le nombre est divisible par 3 ET par 5
// - Retourne "Fizz" si divisible par 3 seulement
// - Retourne "Buzz" si divisible par 5 seulement
// - Retourne le nombre en string sinon
// 💡 Indice : utilise l'opérateur modulo %

function fizzBuzz(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz"
  }
  if (n % 3 === 0) {
    return "Fizz"
  }
  if (n % 5 === 0) {
    return "Buzz"
  } else {
    return n.toString()
  }
}

// Tests
console.log(fizzBuzz(15));  // "FizzBuzz"
console.log(fizzBuzz(9));   // "Fizz"
console.log(fizzBuzz(10));  // "Buzz"
console.log(fizzBuzz(7));   // "7"



// 📝 CONSIGNE :
// Écris une fonction qui vérifie la connexion d'un utilisateur
// Elle prend un objet utilisateur (peut être null) avec :
//   - nom: string
//   - motDePasse: string
//   - tentatives: number
// Règles :
// - Si l'utilisateur est null → "Utilisateur introuvable"
// - Si tentatives >= 3 → "Compte bloqué"
// - Si motDePasse === "1234" → "Connexion réussie, bienvenue [nom] !"
// - Sinon → "Mot de passe incorrect"

type Utilisateur = {
  nom: string;
  motDePasse: string;
  tentatives: number;
} | null;

function verifierConnexion(utilisateur: Utilisateur): string {
  // ✍️ TON CODE ICI

}

// Tests
console.log(verifierConnexion(null));
// "Utilisateur introuvable"

console.log(verifierConnexion({ nom: "Alice", motDePasse: "1234", tentatives: 0 }));
// "Connexion réussie, bienvenue Alice !"

console.log(verifierConnexion({ nom: "Bob", motDePasse: "azerty", tentatives: 3 }));
// "Compte bloqué"

console.log(verifierConnexion({ nom: "Charlie", motDePasse: "azerty", tentatives: 1 }));
// "Mot de passe incorrect"