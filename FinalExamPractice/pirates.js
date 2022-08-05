function pirates(input) {
  let allTowns = {};

  let index = 0;
  for (let i = 0; i < input.length; i++) {
    index++;
    let line = input[i];
    if (line === `Sail`) {
      break;
    }
    let [townName, population, gold] = line.split("||");

    let obj = {};
    if (allTowns.hasOwnProperty(townName)) {
      for (let [k, v] of Object.entries(allTowns[townName])) {
        let newPopulation = Number(k) + Number(population);
        let newGold = Number(v) + Number(gold);
        allTowns[townName] = {};
        allTowns[townName][newPopulation] = newGold;
      }
    } else {
      allTowns[townName] = obj;
      allTowns[townName][population] = gold;
    }
  }

  for (let i = index; i < input.length; i++) {
    let line = input[i];
    if (line === `End`) {
      break;
    }
    let [command, ...tokens] = line.split("=>");
    let town;
    switch (command) {
      case `Prosper`:
        town = tokens[0];

        if (allTowns.hasOwnProperty(town)) {
          let newGold = Number(tokens[1]);
          if (newGold < 0) {
            console.log(`Gold added cannot be a negative number!`);
            continue;
          } else {
            for (let [key, value] of Object.entries(allTowns[town])) {
              allTowns[town][key] = Number(value) + newGold;
              console.log(
                `${newGold} gold added to the city treasury. ${town} now has ${allTowns[town][key]} gold.`
              );
            }
          }
        }

        break;
      case `Plunder`:
        town = tokens[0];
        let victims = Number(tokens[1]);
        let plunderedGold = Number(tokens[2]);
        if (allTowns.hasOwnProperty(town)) {
          for (let [population, gold] of Object.entries(allTowns[town])) {
            allTowns[town] = {};
            let newPopulation = Number(population) - victims;
            let newGold = Number(gold) - plunderedGold;
            allTowns[town][newPopulation] = newGold;
            console.log(
              `${town} plundered! ${plunderedGold} gold stolen, ${victims} citizens killed.`
            );
            for (let [k, v] of Object.entries(allTowns[town])) {
              if (k <= 0 || v <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete allTowns[town];
              }
            }
          }
        }

        break;
    }
  }
  let townsLeft = Object.keys(allTowns);
  if (townsLeft[0] == `End`) {
    console.log(`Ahoy, Captain! There are 0 wealthy settlements to go to:`);
  } else {
    console.log(
      `Ahoy, Captain! There are ${townsLeft.length} wealthy settlements to go to:`
    );
    for (let town of Object.keys(allTowns)) {
      for (let [population, gold] of Object.entries(allTowns[town])) {
        console.log(
          `${town} -> Population: ${population} citizens, Gold: ${gold} kg`
        );
      }
    }
  }
}
pirates(["Sail", "End"]);
