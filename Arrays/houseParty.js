function solve(commands) {
  let res = [];
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    if (command.length < 4) {
      if (!res.includes(command[0])) {
        res.push(command[0]);
      } else {
        console.log(`${command[0]} is already in the list!`);
      }
    } else {
      if (res.includes(command[0])) {
        let index = res.indexOf(command[0]);
        res.splice(index, 1);
      } else {
        console.log(`${command[0]} is not in the list!`);
      }
    }
  }
  console.log(res.join("\n"));
}
solve([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
