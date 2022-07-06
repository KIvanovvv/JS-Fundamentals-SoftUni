function pyramid(base, increment) {
  let counterForLapis = 0;
  let counterForTotalHeight = 0;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  for (let i = base; i > 0; i = i - 2) {
    counterForLapis++;
    counterForTotalHeight++;

    if (i === 1) {
      gold = 1;
    } else if (i === 2) {
      gold = 4;
    } else {
      stone = stone + (i - 2) * (i - 2);
      if (counterForLapis === 5) {
        counterForLapis = 0;
        lapis = lapis + (i * 4 - 4);
      } else {
        marble = marble + (i * 4 - 4);
      }
    }
  }
  stone = Math.ceil(stone * increment);
  marble = Math.ceil(marble * increment);
  lapis = Math.ceil(lapis * increment);
  gold = Math.ceil(gold * increment);
  let totalHeight = Math.floor(counterForTotalHeight * increment);

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuli required: ${lapis}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${totalHeight}`);
}
