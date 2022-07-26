function activationKey(input) {
  let rawPass = input.shift();

  for (let el of input) {
    let currentLine = el;
    if (currentLine === `Generate`) {
      break;
    }
    let tokens = currentLine.split(">>>");
    let command = tokens.shift();
    switch (command) {
      case `Slice`:
        let startIndex = tokens[0];
        let endIndex = tokens[1];
        let toCut = rawPass.slice(startIndex, endIndex);
        rawPass = rawPass.replace(toCut, "");
        console.log(rawPass);
        break;
      case `Flip`:
        let status = tokens[0];
        let firtIndex = tokens[1];
        let lastIndex = tokens[2];
        let toReplace = rawPass.slice(firtIndex, lastIndex);
        if (status === `Upper`) {
          rawPass = rawPass.replace(toReplace, toReplace.toUpperCase());
          console.log(rawPass);
        } else if (status === `Lower`) {
          rawPass = rawPass.replace(toReplace, toReplace.toLowerCase());
          console.log(rawPass);
        }
        break;
      case `Contains`:
        let searchWord = tokens[0];
        if (rawPass.includes(searchWord)) {
          console.log(`${rawPass} contains ${searchWord}`);
        } else {
          console.log(`Substring not found!`);
        }
        break;
    }
  }
  console.log(`Your activation key is: ${rawPass}`);
}
activationKey([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
