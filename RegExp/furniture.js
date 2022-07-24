function furniture(input) {
  let pattern =
    />>(?<furniture>[A-Z]+[A-z]+)<<(?<price>(\d+\.?\d+))!(?<amount>\d+)/g;
  let text = input.join(" ");
  let valid;
  let totalSum = 0;
  console.log(`Bought furniture:`);

  while ((valid = pattern.exec(text)) !== null) {
    let furniture = valid.groups.furniture;
    console.log(furniture);
    let price = Number(valid.groups.price);
    let amount = Number(valid.groups.amount);
    totalSum += price * amount;
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
