function orders(product, quantity) {
  let price = 0;
  let totalSum = 0;

  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2;
  }
  totalSum = price * quantity;
  return totalSum.toFixed(2);
  //console.log(totalSum.toFixed(2));
}
orders("coffee", 2);
