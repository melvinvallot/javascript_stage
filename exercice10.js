const initialState = {
  version: "2.1.0",
  regions: [
    {
      id: "north-america",
      cities: [
        {
          name: "New York",
          warehouses: [
            {
              code: "NY-01",
              bins: [{ sku: "MACBOOK-M3", count: 50 }],
            },
          ],
        },
      ],
    },
    {
      id: "europe",
      cities: [
        {
          name: "Paris",
          warehouses: [
            {
              code: "PAR-05",
              bins: [{ sku: "IPHONE-15", count: 10 }],
            },
          ],
        },
      ],
    },
  ],
};
function moveStock(data, sourcePath, destPath, sku, amount) {
  const newRegions = data.regions.map((region) => {
    if (region.id !== sourcePath.regionId) return region;
    const newCities = region.cities
      .map((r) => ({ ...r, cities: newCities }))
      .filter((w) => w.bins.length > 0);

    const newWarehouse = city.warehouses
      .map((c) => ({ ...c, warehouse: newWarehouse }))
      .filter((c) => c.warehouse.length > 0);

    const newBins = warehouse.bins
      .map((w) => ({ ...w, bins: newBins }))
      .filter((w) => w.bin.lenght > 0);
    return { ...bin, count: bin.count - amount };
  });
  return { ...warehouse, bins: newBins };
}
// return { ...city, warehouses: newWarehouse };
// return { ...region, cities: newCities };
// return { ...data, regions: newRegions };

//const newSku = sku.map((code) => code.id);
//const newAmont = amount.map((count) => count === count.id);

function moveStock2(data, sourcePath, destPath, sku, amount) {
  // Trouver la région source si non trouvé, on retourne data
  const sourceBin = data.regions
    ?.find((region) => region.id === sourcePath.regionId)
    ?.cities.find((city) => city.name === sourcePath.cityName)
    ?.warehouses.find(
      (warehouse) => warehouse.code === sourcePath.warehouseCode,
    )
    ?.bins.find((bin) => bin.sku === sku);

  if (!sourceBin || sourceBin.count < amount) {
    console.log("Stock insuffisant ou bin source introuvable");
    return data;
  }
  const destinationRegion = data.regions.find(
    (region) => region.id === destPath.regionId,
  );

  const destinationCity = destinationRegion?.cities.find(
    (city) => city.name === destPath.cityName,
  );

  const destinationWarehouse = destinationCity?.warehouses.find(
    (warehouse) => warehouse.code === destPath.warehouseCode,
  );
  console.log("destinationWarehouse", destinationWarehouse);
  let destinationBin = destinationWarehouse?.bins.find(
    (bin) => bin.sku === sku,
  );
  console.log("destinationBin", destinationBin);

  const destinationBinCount = destinationBin ? destinationBin.count : 0;
  console.log(destinationBinCount);
  //   return {
  //     ...data,
  //     regions: result,
  //   };
}
// Trouver la région destination si non trouvé, on la crée
// Trouver la ville destination, si non trouvé, on le crée
// Trouver l'entrepot destination, si non trouvé, on le crée
// Trouver le bin destination, si non trouvé, on le crée avec une quantité de 0
// Vérifier que le bin source a suffisamment de stock
// Déduire la quantité du bin source et ajouter la quantité au bin destination
// Si la quantité  bin source est à 0, le supprimer
// Si le bin source est vide, le supprimer
// Si la ville source n'a plus d'entrepôt, la supprimer
// Si la région source n'a plus de ville, la supprimer

/*
 * @param {Object} data - L'état global
 * @param {Object} src - { regionId, cityName, warehouseCode }
 * @param {Object} dest - { regionId, cityName, warehouseCode }
 * @param {string} sku - Identifiant du produit
 * @param {number} amount - Quantité à déplacer
 * @returns {Object} Un nouvel objet état, épuré et mis à jour
 */

// TEST CASE:
// Move 10 IPHONE-15 from Paris to New York.
// Result: Europe region should be pruned entirely (deleted),
// and New York should now have two bins.

const sourcePath = {
  regionId: "europe",
  cityName: "Paris",
  warehouseCode: "PAR-05",
};

const destPath = {
  regionId: "north-america",
  cityName: "New York",
  warehouseCode: "NY-01",
};

const updatedState = moveStock2(
  initialState,
  sourcePath,
  destPath,
  "IPHONE-15",
  10,
);

console.log("Updated state:", JSON.stringify(updatedState, null, 2));
