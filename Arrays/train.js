function train(input) {
  let wagonsAndPeople = input.shift().split(" ");
  let maxCapacity = +input.shift();
  let commands = input.slice();
  for (let i = 0; i < input.length; i++) {
    let command = commands[i].split(" ");
    let commandValue;
    switch (command[0]) {
      case "Add":
        commandValue = +command[1];
        wagonsAndPeople.push(commandValue);
        break;
      default:
        commandValue = +command[0];
        for (let j = 0; j < wagonsAndPeople.length; j++) {
          if (Number(wagonsAndPeople[j]) + commandValue <= maxCapacity) {
            let newSum = Number(wagonsAndPeople[j]) + commandValue;
            wagonsAndPeople.splice(j, 1, newSum);
            break;
          }
        }
        break;
    }
  }
  console.log(wagonsAndPeople.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
