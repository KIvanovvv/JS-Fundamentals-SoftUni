function flow(startingYeild) {
  let dayCounter = 0;
  let totalSpices = 0;
  let currentYeild = startingYeild;
  if (startingYeild >= 100) {
    for (let i = currentYeild; i >= 100; i -= 10) {
      dayCounter++;
      currentYeild = i;
      totalSpices += currentYeild - 26;
    }
  }
  if (dayCounter !== 0) {
    totalSpices -= 26;
  }

  console.log(dayCounter);
  console.log(totalSpices);
}
flow(0);
