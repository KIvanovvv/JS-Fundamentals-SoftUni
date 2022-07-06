function storeProvision(currentStock, forDelivery) {
  let myObj = {};
  let currentStockL = currentStock.length;
  let forDeliveryL = forDelivery.length;

  for (let i = 0; i < currentStockL; i += 2) {
    let product = currentStock[i];
    myObj[product] = Number(currentStock[i + 1]);
  }
  for (let i = 0; i < forDeliveryL; i += 2) {
    let product = forDelivery[i];
    if (!myObj.hasOwnProperty(product)) {
      myObj[product] = 0;
    }
    myObj[product] += Number(forDelivery[i + 1]);
  }
  for (let product in myObj) {
    console.log(`${product} -> ${myObj[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
