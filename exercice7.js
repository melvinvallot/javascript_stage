const inventory = [
  { ref: "APP1", nom: "iPhone 15", prix: 900, categorie: "Tech", stock: 2 },
  {
    ref: "CASE1",
    nom: "Coque Silicone",
    prix: 30,
    categorie: "Accessoire",
    stock: 10,
  },
  {
    ref: "CABLE1",
    nom: "Câble USB-C",
    prix: 20,
    categorie: "Accessoire",
    stock: 5,
  },
  {
    ref: "PROT1",
    nom: "Protège Écran",
    prix: 15,
    categorie: "Accessoire",
    stock: 0,
  },
  { ref: "MAC1", nom: "MacBook Pro", prix: 2400, categorie: "Tech", stock: 0 },
];

/*function rapportStock(inventory) {
return inventory
  .filter((produit) => produit.stock > 0)
  .map((produit) => ({
    label: `[${produit.ref}] ${produit.nom}`,
    valeurStock: produit.prix * produit.stock,
    dispo: true,
  }));
}
console.log(rapportStock(inventory));*/

// Exo1 - Enoncé

// Crée une fonction rapportStock(inventaire) qui retourne un tableau contenant uniquement les produits disponibles (stock > 0), transformés en objets avec seulement :

// label : "[ref] nom" → ex: "[APP1] iPhone 15"
// valeurStock : prix × stock
// dispo : true

// Sortie :

//   { label: "[APP1] iPhone 15", valeurStock: 1800, dispo: true },
//   { label: "[CASE1] Coque Silicone", valeurStock: 300, dispo: true },
//   { label: "[CABLE1] Câble USB-C", valeurStock: 100, dispo: true },
// ];
//

function summarizeInventoryByCategory(inventory) {
  return inventory.reduce((accumulateur, { categorie, stock, prix }) => {
    // DESTRUCTURATION DE L'OBJET POUR RENDRE LE CODE PLUS LISIBLE
    const currentAccumulatorCategory = accumulateur[categorie] ?? {
      nbProduits: 0,
      stockTotal: 0,
      prixTotal: 0,
    };

    return {
      ...accumulateur,
      [categorie]: {
        nbProduits: currentAccumulatorCategory.nbProduits + stock,
        stockTotal: currentAccumulatorCategory.stockTotal + stock,
        prixTotal: currentAccumulatorCategory.prixTotal + prix,
        prixMoyen:
          (currentAccumulatorCategory.prixTotal + prix) /
          (currentAccumulatorCategory.nbProduits + stock),
      },
    };
  }, {});
}

const resultat = summarizeInventoryByCategory(inventory);
console.log(resultat);

// Exo2 - Enoncé
// Crée une fonction resumeParCategorie(inventaire) qui retourne un objet où chaque clé est une catégorie et la valeur est un objet contenant :

// nbProduits : nombre total de produits dans cette catégorie
// stockTotal : somme des stocks
// prixMoyen : prix moyen (arrondi à 2 décimales)

// Sortie
// {
//   Tech: {
//     nbProduits: 2,
//     stockTotal: 2,
//     prixMoyen: 1650.00
//   },
//   Accessoire: {
//     nbProduits: 3,
//     stockTotal: 15,
//     prixMoyen: 21.67
//   }
// }
