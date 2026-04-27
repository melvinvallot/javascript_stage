const catalogueA = [
  { ref: "APP1", prix: 900 },
  { ref: "CASE1", prix: 30 },
  { ref: "MAC1", prix: 2400 },
];

const catalogueB = [
  { ref: "CASE1", prix: 25 }, // prix mis à jour
  { ref: "CABLE1", prix: 20 }, // nouveau produit
  { ref: "PROT1", prix: 15 }, // nouveau produit
];

// Enoncé
// Crée une fonction fusionnerCatalogues(a, b) qui fusionne les deux catalogues selon ces règles :

// Si un produit existe dans les 2 → garder le prix de B (le plus récent)
// Si un produit n'existe que dans A → le garder tel quel
// Si un produit n'existe que dans B → l'ajouter
// Retourner un tableau trié par ref alphabétiquement

function fusionnerCatalogues(catalogueA, catalogueB) {
  return catalogueA.concat(catalogueB);
}
console.log(fusionnerCatalogues(catalogueA, catalogueB));
