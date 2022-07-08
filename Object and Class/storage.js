function storage(input) {
  let storage = new Map();
  input.forEach((el) => {
    let [product, quantity] = el.split(" ");
    if (storage.has(product)) {
      let oldQuantity = storage.get(product);
      storage.set(product, Number(oldQuantity) + Number(quantity));
    } else {
      storage.set(product, quantity);
    }
  });
  for (let [k, v] of storage) {
    console.log(`${k} -> ${v}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
