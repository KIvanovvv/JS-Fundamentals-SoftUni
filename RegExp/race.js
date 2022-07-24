function race(input) {
  let nameList = input.shift();
  let text = input.join("");
  let namePattern = /[A-Za-z]/g;
  let distancePattern = /\d/g;
  let nameMap = new Map();
  nameList.split(", ").forEach((el) => nameMap.set(el, 0));

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    if (currentLine === "end of race") {
      break;
    }
    let name = currentLine.match(namePattern).join("");
    let distance = currentLine.match(distancePattern).reduce((a, b) => {
      return Number(a) + Number(b);
    });
    if (nameMap.has(name)) {
      let currentDistance = Number(nameMap.get(name));
      currentDistance += Number(distance);
      nameMap.set(name, currentDistance);
    }
  }
  let sortedNames = Array.from(nameMap).sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(`1st place: ${sortedNames[0][0]}`);
  console.log(`2nd place: ${sortedNames[1][0]}`);
  console.log(`3rd place: ${sortedNames[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
