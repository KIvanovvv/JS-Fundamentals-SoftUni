function solve(command) {
  let commandArray = [];
  if (command.length != 0) {
    let toString = command[0];
    let commandL = toString.length;
    let currentElement = "";
    let index = 0;
    let roomCounter = 0;
    let stringRoom = "";

    let charHP = 100;
    let totalCoins = 0;
    let charCoins = 0;
    let healing = 0;
    let modifierHP = 0;
    let isDead = false;
    let win = false;

    while (index < commandL) {
      if (toString[index] === "|") {
        commandArray.push(currentElement);

        currentElement = "";
        index++;
      }
      currentElement += toString[index];
      if (index + 1 === commandL) {
        commandArray.push(currentElement);
        break;
      }
      index++;
    }
    for (let i = 0; i < commandArray.length; i++) {
      if (isDead) break;
      roomCounter++;
      let enemyName = "";
      charCoins = 0;
      stringRoom = commandArray[i];
      modifierHP = 0;
      win = false;
      if (commandArray[i].includes("chest")) {
        for (let k = 0; k < stringRoom.length; k++) {
          if (charCoins > 0) {
            charCoins += stringRoom[k];
          }
          if (stringRoom[k] === " ") {
            k++;
            charCoins += Number(stringRoom[k]);
          }
          if (k + 1 === stringRoom.length) {
            console.log(`You found ${charCoins} coins.`);
            totalCoins += Number(charCoins);
          }
        }
      } else if (commandArray[i].includes("potion")) {
        for (let k = 0; k < stringRoom.length; k++) {
          if (healing > 0) {
            healing += stringRoom[k];
          }
          if (stringRoom[k] === " ") {
            k++;
            healing = Number(stringRoom[k]);
          }
          if (k + 1 === stringRoom.length) {
            charHP += Number(healing);
            if (charHP > 100) {
              healing = Number(healing) - (charHP - 100);
              charHP = 100;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${charHP} hp.`);
          }
        }
      } else {
        for (let k = 0; k < stringRoom.length; k++) {
          if (!win) enemyName += stringRoom[k];
          if (modifierHP > 0) modifierHP += stringRoom[k];

          if (stringRoom[k] === " ") {
            win = true;
            k++;
            modifierHP += Number(stringRoom[k]);
          }
          if (k + 1 === stringRoom.length) {
            if (charHP > modifierHP) {
              console.log(`You slayed ${enemyName.trim()}.`);
            } else if (charHP <= modifierHP) {
              console.log(`You died! Killed by ${enemyName.trim()}.`);
              console.log(`Best room: ${roomCounter}`);
              isDead = true;
            }
          }
        }
      }
      charHP -= Number(modifierHP);
    }
    if (!isDead) {
      console.log(`You've made it!`);
      console.log(`Coins: ${totalCoins}`);
      console.log(`Health: ${charHP}`);
    }
  }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
