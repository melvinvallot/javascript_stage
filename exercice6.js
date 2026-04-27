const inventaire = [
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
]; // Hors stock !
const commandeClient = [
  { ref: "APP1", quantite: 3 },
  { ref: "CASE1", quantite: 0 },
  { ref: "CABLE1", quantite: 0 },
  { ref: "PROT1", quantite: 0 },
]; // Doit être ignoré (stock 0)

function processCommand(inventaire, order) {
  const inventaryMap = new Map(inventaire.map((item) => [item.ref, item]));
  console.log("invetaryMap", inventaryMap);
  const orderProcessed = order
    .map((orderProduct) => {
      console.log(orderProduct);
      const inventoryCategory = inventaryMap.get(orderProduct.ref);
      if (!inventoryCategory) {
        console.log("le produit n'est pas disponible");
      } else if (inventoryCategory.stock < orderProduct.quantite) {
        console.log("stock insufisant");
      } else {
        return {
          ...inventoryCategory,
          quantite: orderProduct.quantite,
        };
        console.log("commande traitée");
      }
    })
    .filter((article) => article !== undefined);

  const totalHT = orderProcessed.reduce((acc, article) => {
    return acc + article.prix * article.quantite;
  }, 0);
  console.log("totalHT:", totalHT);
  //return { articleValide, totalHT };

  // REMPLACER FOREACH PAR UN REDUCE
  const reduction = orderProcessed.reduce((accumulateur, article) => {
    if (article.categorie === "Tech") {
      accumulateur += article.prix * article.quantite * 0.1;
    } else if (article.categorie === "Accessoire") {
      accumulateur += article.prix * article.quantite * 0.15;
    }
  }, 0);

  const totalReduction = totalHT - reduction;
  //return { articleValide, totalHT, totalReduction };

  let fraisExpedition = 0;
  if (totalReduction < 50) {
    fraisExpedition = 10;
  } else if (totalReduction >= 50 && totalReduction <= 150) {
    fraisExpedition = 5;
  } else {
    fraisExpedition = 0;
  }
  return { orderProcessed, totalHT, totalReduction, fraisExpedition };
}

const resultat = processCommand(inventaire, commandeClient);
console.log(resultat);

//la reduction de 10 ou 15% s'applique aussi quand il y a moins de 3 produits
//pas de TTC
