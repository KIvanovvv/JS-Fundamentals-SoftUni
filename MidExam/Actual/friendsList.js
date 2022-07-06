function friendsList(input) {
  let nameList = input.shift().split(", ");

  let blacklistCounter = 0;
  let lostCounter = 0;

  for (let i = 0; i < input.length; i++) {
    let commandRow = input[i].split(" ");
    let command = commandRow[0];
    let name;
    switch (command) {
      case "Blacklist":
        name = commandRow[1];
        if (nameList.includes(name)) {
          let indexOfName = nameList.indexOf(name);
          nameList[indexOfName] = "Blacklisted";
          console.log(`${name} was blacklisted.`);
          blacklistCounter++;
        } else {
          console.log(`${name} was not found.`);
        }
        break;
      case "Error":
        let index = Number(commandRow[1]);
        if (index < 0 || index >= nameList.length) {
          continue;
        }
        if (nameList[index] != "Blacklisted" && nameList[index] != "Lost") {
          name = nameList[index];
          nameList[index] = "Lost";
          console.log(`${name} was lost due to an error.`);
          lostCounter++;
        }
        break;
      case "Change": //Proverka za Blacklist i Lost ?
        let indexOfChange = commandRow[1];
        let nameToChange = commandRow[2];
        let currentName = nameList[indexOfChange];
        if (indexOfChange < 0 || indexOfChange >= nameList.length) {
          continue;
        } else {
          nameList[indexOfChange] = nameToChange;
          console.log(
            `${currentName} changed his username to ${nameToChange}.`
          );
        }
        break;
    }
  }
  console.log(`Blacklisted names: ${blacklistCounter}`);
  console.log(`Lost names: ${lostCounter}`);
  console.log(nameList.join(" "));
}
friendsList(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
