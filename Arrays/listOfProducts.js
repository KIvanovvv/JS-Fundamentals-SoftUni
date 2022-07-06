function list(order) {
  let n = order.length;
  let sortedList = order.sort();
  for (let i = 1; i <= n; i++) {
    console.log(`${i}.${sortedList[i - 1]}`);
  }
}
list(["Watermelon", "Banana", "Apples"]);
