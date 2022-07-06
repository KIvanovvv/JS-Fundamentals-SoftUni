function angryCat(smashingGround, entryIndex, TypeOfDmg) {
  let leftPart = smashingGround.slice(0, entryIndex);
  let rightPart = smashingGround.slice(entryIndex + 1);
  let entryPointValue = smashingGround[entryIndex];

  let totalDmgLeft = 0;
  let totalDmgRight = 0;

  for (let i = 0; i < leftPart.length; i++) {
    if (TypeOfDmg === "cheap") {
      if (entryPointValue > leftPart[i]) {
        totalDmgLeft += leftPart[i];
      }
    } else {
      if (entryPointValue <= leftPart[i]) {
        totalDmgLeft += leftPart[i];
      }
    }
  }

  for (let i = 0; i < rightPart.length; i++) {
    if (TypeOfDmg === "cheap") {
      if (entryPointValue > rightPart[i]) {
        totalDmgRight += rightPart[i];
      }
    } else {
      if (entryPointValue <= rightPart[i]) {
        totalDmgRight += rightPart[i];
      }
    }
  }

  if (totalDmgLeft >= totalDmgRight) {
    console.log(`Left - ${totalDmgLeft}`);
  } else {
    console.log(`Right - ${totalDmgRight}`);
  }
}
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
