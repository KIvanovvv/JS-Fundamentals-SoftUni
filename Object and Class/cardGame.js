function cardGame(data) {
  let players = new Map();
  let cardValue = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let cardColor = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  for (let el of data) {
    let [name, cardsDrawn] = el.split(": ");
    if (!players.has(name)) {
      players.set(name, new Set());
    }

    let cards = cardsDrawn.split(", ");
    for (let card of cards) {
      players.get(name).add(card);
    }
  }
  for (let [k, v] of players) {
    let sum = 0;
    for (let card of v) {
      let cardInfo = card.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");
      let cardTypeNum = cardColor[cardType];
      let cardPowerNum = cardValue[cardPower];
      sum += cardTypeNum * cardPowerNum;
    }
    console.log(`${k}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
