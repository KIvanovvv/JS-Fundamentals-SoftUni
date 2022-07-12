function minerTask(input) {
  let resources = new Map();
  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);
    if (!resources.has(resource)) {
      resources.set(resource, quantity);
    } else {
      newQuantity = resources.get(resource) + quantity;
      resources.set(resource, newQuantity);
    }
  }

  for (let [k, v] of resources) {
    console.log(`${k} -> ${v}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
