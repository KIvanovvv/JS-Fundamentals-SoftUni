function heroesOfCode(commands) {
  let partySize = commands.shift();
  let heroesParty = [];

  for (let i = 0; i < partySize; i++) {
    let heroInfo = commands[i];
    let heroObj = {};
    let [name, hp, mp] = heroInfo.split(" ");
    heroObj[name] = name;
    heroObj.hp = Number(hp);
    heroObj.mp = Number(mp);
    heroesParty.push(heroObj);
  }
  for (let i = partySize; i < commands.length; i++) {
    let commandLine = commands[i];
    if (commandLine === `End`) {
      break;
    }
    let commandList = commandLine.split(" - ");
    let command = commandList[0];
    let heroName = commandList[1];
    switch (command) {
      case `Heal`:
        for (let el of heroesParty) {
          if (el.hasOwnProperty(heroName)) {
            let hpToRestore = commandList[2];
            el.hp += Number(hpToRestore);
            if (el.hp > 100) {
              hpToRestore = Number(hpToRestore) - (el.hp - 100);
              el.hp = 100;
            }
            console.log(`${heroName} healed for ${hpToRestore} HP!`);
          }
        }
        break;
      case `Recharge`:
        for (let el of heroesParty) {
          if (el.hasOwnProperty(heroName)) {
            let mpToRestore = commandList[2];
            el.mp += Number(mpToRestore);
            if (el.mp > 200) {
              mpToRestore = Number(mpToRestore) - (el.mp - 200);
              el.mp = 200;
            }
            console.log(`${heroName} recharged for ${mpToRestore} MP!`);
          }
        }
        break;
      case `CastSpell`:
        for (let el of heroesParty) {
          if (el.hasOwnProperty(heroName)) {
            let neededMp = commandList[2];
            let spell = commandList[3];
            if (el.mp < neededMp) {
              console.log(
                `${heroName} does not have enough MP to cast ${spell}!`
              );
            } else {
              el.mp = Number(el.mp) - Number(neededMp);
              console.log(
                `${heroName} has successfully cast ${spell} and now has ${el.mp} MP!`
              );
            }
          }
        }
        break;
      case `TakeDamage`:
        for (let el of heroesParty) {
          if (el.hasOwnProperty(heroName)) {
            let dmgTaken = commandList[2];
            let dmgSource = commandList[3];
            if (el.hp > dmgTaken) {
              el.hp = Number(el.hp) - Number(dmgTaken);
              console.log(
                `${heroName} was hit for ${dmgTaken} HP by ${dmgSource} and now has ${el.hp} HP left!`
              );
            } else {
              el.hp = 0;
              console.log(`${heroName} has been killed by ${dmgSource}!`);
            }
          }
        }
        break;
    }
  }
  let aliveParty = [];
  for (let el of heroesParty) {
    if (el.hp > 0) {
      aliveParty.push(el);
    }
  }
  let counter = 0;
  for (let obj of aliveParty) {
    for (let key in obj) {
      if (key === `hp`) {
        console.log(`HP: ${obj[key]}`);
      } else if (key === `mp`) {
        console.log(`MP: ${obj[key]}`);
      } else {
        console.log(obj[key]);
      }
    }
  }
}
heroesOfCode([
  4,
  `Adela 90 150`,
  `SirMullich 70 40`,
  `Ivor 1 111`,
  `Tyris 94 61`,
  `Heal - SirMullich - 50`,
  `Recharge - Adela - 100`,
  `CastSpell - Tyris - 1000 - Fireball`,
  `TakeDamage - Tyris - 99 - Fireball`,
  `TakeDamage - Ivor - 3 - Mosquito`,
  `End`,
]);
