const orders = [
  { id: 1, user: "Alice", total: 120, status: "completed" },

  { id: 2, user: "Bob", total: 80, status: "pending" },

  { id: 3, user: "Alice", total: 50, status: "completed" },

  { id: 4, user: "Charlie", total: 200, status: "completed" },

  { id: 5, user: "Bob", total: 30, status: "completed" },
];

const completedOrders = orders.filter((order) => {
  if (order.status == "completed") {
    return order;
  }
});

/*const saucisse = orders.map((order) => ({
  user: order.user,
  total: order.total,
}));*/

const omar = orders.reduce((accumulateur, value) => {
  const previousTotal = accumulateur[value.user] ?? 0;
  console.log(accumulateur);
  return { ...accumulateur, [value.user]: previousTotal + value.total };
}, {});

const william = {
  Alice: 170,
};

console.log(omar);

function add(numbersToParse) {
  const splitedNumbers = numbersToParse.split(",");
  const reducedNumbers = splitedNumbers.reduce((accumulateur, value) => {
    return accumulateur + Number(value);
  }, 0);
  return reducedNumbers;
}

console.log(add("1,2,3,4"));


//comprendre une fonction: variable : le scope :