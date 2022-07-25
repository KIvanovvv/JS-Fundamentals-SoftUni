function barIncome(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^\||\%|\$|\.]*<(?<product>\w+)>[^\||\%|\$|\.]*\|(?<amount>\d+)\|[^\||\%|\$|\.|0-9]*(?<price>\d+.?\d+)\$/g;

  let totalSum = 0;
  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    if (currentLine === `end of shift`) {
      break;
    }
    let valid = pattern.exec(input);
    if (valid === null) {
      break;
    }
    let name = valid.groups.name;
    let product = valid.groups.product;
    let amount = valid.groups.amount;
    let price = valid.groups.price;
    let totalPrice = Number(amount) * Number(price);
    totalSum += totalPrice;
    console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
  }
  console.log(`Total income: ${totalSum.toFixed(2)}`);
}
barIncome([
  "%InvalidName%<Croissant>|2|10.3$",

  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4$",

  "%Maria%<Cola>|1|2.4",

  "%Valid%<Valid>valid|10|valid20$",

  "end of shift",
]);
