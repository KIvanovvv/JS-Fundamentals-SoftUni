function solve(commands) {
  let fieldSize = commands[0];
  let ladyBugStartString = commands[1];
  let ladyBugsStartingPosition = [];
  let movement = [];
  let movementToString = "";
  let haveLadyBug = false;

  let addIndex = 0;

  for (let i = 0; i < ladyBugStartString.length; i++) {
    if (ladyBugStartString[i] !== " ")
      ladyBugsStartingPosition.push(ladyBugStartString[i]);
  }

  for (let i = 2; i < commands.length; i++) {
    movement.push(commands[i]);
  }

  movementToString = movement.join(":");

  //Field Size
  for (let i = 0; i < fieldSize; i++) {
    let tempPosition = 0;
    let commandPostion;
    for (let j = addIndex; j < ladyBugsStartingPosition.length; j++) {
      tempPosition = ladyBugsStartingPosition[j];

      if (i == tempPosition) {
        haveLadyBug = true;
      } else {
        haveLadyBug = false;
      }
      console.log(haveLadyBug);
      if (haveLadyBug) {
        addIndex++;
      }
      break;
    }
    for(let k = 0;k<movementToString.length;k++){
      commandPostion=movementToString[k];
      //if(tempPosition==commandPostion)
    
  
  }
}
solve([3, "0 1", "0 right 1", "2 right 1"]);
