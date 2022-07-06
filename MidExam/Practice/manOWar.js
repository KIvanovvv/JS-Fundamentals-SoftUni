function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());
  let gameOver = false;

  let index = 0;
  let commandRow;
  while (input[index] !== "Retire") {
    commandRow = input[index].split(" ");
    switch (commandRow[0]) {
      case "Fire":
        let i = Number(commandRow[1]);
        if (i >= warShip.length || i < 0) {
          index++;
          continue;
        }
        let dmg = Number(commandRow[2]);
        warShip.splice(i, 1, warShip[i] - dmg);
        if (warShip[i] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          gameOver = true;
          break;
        }

        break;
      case "Defend":
        let startI = Number(commandRow[1]);
        let endI = Number(commandRow[2]);
        let dmgWar = Number(commandRow[3]);
        if (endI < startI) {
          let buffer = startI;
          startI = endI;
          endI = buffer;
        }
        for (let x = startI; x <= endI; x++) {
          if (startI >= pirateShip.length || startI < 0) {
            break;
          }
          if (endI >= pirateShip.length || endI < 0) {
            break;
          }
          if (dmgWar < 0) {
            break;
          }
          pirateShip[x] = pirateShip[x] - dmgWar;
          if (pirateShip[x] <= 0) {
            //index++;
            console.log("You lost! The pirate ship has sunken.");
            gameOver = true;
            break;
          }
        }
        break;
      case "Repair":
        let repIndex = Number(commandRow[1]);
        let repHealth = Number(commandRow[2]); // ?
        if (repIndex >= 0 && repIndex < pirateShip.length) {
          pirateShip[repIndex] = pirateShip[repIndex] + repHealth;
          if (pirateShip[repIndex] > maxHealth) {
            pirateShip[repIndex] = maxHealth;
          }
        }
        break;
      case "Status":
        let needRepairCount = 0;
        for (let el of pirateShip) {
          if (el < maxHealth * 0.2) {
            needRepairCount++;
          }
        }
        console.log(`${needRepairCount} sections need repair.`);
        break;
    }
    index++;
  }
  let pirateStatus = 0;
  let warStatus = 0;
  for (let el of pirateShip) {
    pirateStatus += el;
  }
  for (let el of warShip) {
    warStatus += el;
  }
  if (!gameOver) {
    console.log(`Pirate ship status: ${pirateStatus}`);
    console.log(`Warship status: ${warStatus}`);
  }
  console.log(pirateShip);
  console.log(warShip);
}
manOWar([
  "10>11>12>13>14",
  "16>17>18>19>20>21",
  "40",
  "Fire 0 2",
  "Fire -1 2",
  "Fire 5 2",
  "Fire 6 2",
  "Retire",
]);
console.log(`...................`);
manOWar([
  "10>11>12>13>14",
  "16>17>18>19>20>21",
  "40",
  "Repair 0 2",
  "Repair -1 2",
  "Repair 4 2",
  "Repair 6 2",
  "Retire",
]);
console.log(`..................`);
manOWar([
  "10>11>12>13>14",
  "16>17>18>19>20>21",
  "40",
  "Defend 0 1 2",
  "Defend -1 0 2",
  "Defend 0 -1 2",
  "Defend 0 4 2",
  "Defend 0 5 2",
  "Defend 5 0 2",
  "Defend 4 0 2",
  "Retire",
]);
console.log(`.....................`);
manOWar(["1>20>20>20>20", "16>17>18>19>20>21", "20", "Repair 0 10", "Retire"]);
