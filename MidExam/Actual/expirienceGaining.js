function expGain(input) {
  let neededExp = input.shift();
  let totalBattles = input.shift();

  let currentBattle = 0;
  let currentExp = 0;

  for (let i = 0; i < totalBattles; i++) {
    currentBattle++;
    currentExp += input[i];
    if (currentBattle % 3 === 0) {
      currentExp += input[i] * 0.15;
    }
    if (currentBattle % 5 === 0) {
      currentExp -= input[i] * 0.1;
    }
    if (currentBattle % 15 === 0) {
      currentExp += input[i] * 0.05;
    }
    if (currentExp >= neededExp) {
      console.log(
        `Player successfully collected his needed experience for ${currentBattle} battles.`
      );
      break;
    }
  }

  if (currentExp < neededExp) {
    let moreExp = neededExp - currentExp;
    console.log(
      `Player was not able to collect the needed experience, ${moreExp.toFixed(
        2
      )} more needed. `
    );
  }
}
expGain([500, 5, 50, 100, 200, 100, 20]);
