function mining(input) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;
  let moneyFromGold = 0;
  let goldGrams = 0;
  let moneyLeft = 0;
  let bitcoinCounter = 0;
  let dayCounter = 0;
  let goldPerShift;
  let dayFirstBitcoin = 0;

  for (let i = 0; i < input.length; i++) {
    dayCounter++;
    goldPerShift = input[i];
    if (dayCounter % 3 === 0) {
      goldPerShift *= 0.7;
    }
    goldGrams += goldPerShift;
    if (dayFirstBitcoin != 0) {
      continue;
    } else {
      if (goldGrams * goldPrice >= bitcoinPrice) {
        dayFirstBitcoin = 1 + i;
      }
    }
  }
  moneyFromGold = goldGrams * goldPrice;
  moneyLeft = moneyFromGold % bitcoinPrice;
  bitcoinCounter = Math.floor(moneyFromGold / bitcoinPrice);

  console.log(`Bought bitcoins: ${bitcoinCounter}`);
  if (dayFirstBitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
  }
  console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
mining([100, 200, 300]);
