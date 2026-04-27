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
function moveStock(data, src, dest, sku, amount) {}

// TEST CASE:
// Move 10 IPHONE-15 from Paris to New York.
// Result: Europe region should be pruned entirely (deleted),
// and New York should now have two bins.
