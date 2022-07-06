function expenses(lostCount, helmPrice, swordPrice, shieldPrice, armorPrice) {
  let totalSum = 0;
  let helmBrokenCount = 0;
  let swordBrokenCount = 0;
  let shieldBrokenCount = 0;
  let armorBrokenCount = 0;
  for (let i = 0; i <= lostCount; i++) {
    if (i % 2 === 0 && i != 0) {
      helmBrokenCount++;
    }
    if (i % 3 === 0 && i != 0) {
      swordBrokenCount++;
    }
    if (i % 6 === 0 && i != 0) {
      shieldBrokenCount++;
    }
    if (i % 12 === 0 && i != 0) {
      armorBrokenCount++;
    }
  }
  totalSum =
    helmBrokenCount * helmPrice +
    swordBrokenCount * swordPrice +
    shieldBrokenCount * shieldPrice +
    armorBrokenCount * armorPrice;
  console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}
expenses(7, 2, 3, 4, 5);
