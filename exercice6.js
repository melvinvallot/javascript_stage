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
  { ref: "APP1", quantite: 0 },
  { ref: "CASE1", quantite: 1 },
  { ref: "CABLE1", quantite: 0 },
  { ref: "PROT1", quantite: 0 },
]; // Doit être ignoré (stock 0)

function traiterCommande(inventaire, order) {
  const inventaryMap = new Map(inventaire.map((item) => [item.ref, item]));
  console.log("invetaryMap", inventaryMap);
  const orderProcessed = order.map((orderProduct) => {
    console.log(orderProduct);
    const inventaireCategorie = inventaryMap.get(orderProduct.ref);
    // UTILISER UNE MAP POUR OPTIMISER LA RECHERCHE
    if (!inventaireCategorie) {
      console.log("le produit n'est pas disponible");
    } else if (inventaireCategorie.stock < orderProduct.quantite) {
      console.log("stock insufisant");
    } else {
      return {
        ...inventaireCategorie,
        quantite: orderProduct.quantite,
      };
      console.log("commande traitée");
    }
  });

  const totalHT = orderProcessed.reduce((acc, article) => {
    return acc + article.prix * article.quantite;
  }, 0);
  console.log("totalHT:", totalHT);
  //return { articleValide, totalHT };

  // REMPLACER PAR UN REDUCE
  let reduction = 0;
  orderProcessed.forEach((article) => {
    if (article.categorie === "Tech") {
      reduction += article.prix * article.quantite * 0.1;
    } else if (article.categorie === "Accessoire") {
      reduction += article.prix * article.quantite * 0.15;
    }
  });

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

const resultat = traiterCommande(inventaire, commandeClient);
console.log(resultat);

//la reduction de 10 ou 15% s'applique aussi quand il y a moins de 3 produits
//pas de TTC
