function imitationGame(input) {
  let word = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    if (line === `Decode`) {
      break;
    }
    let [command, ...tokens] = line.split("|");
    switch (command) {
      case `ChangeAll`:
        let toChange = tokens[0];
        let changeWith = tokens[1];
        while (word.includes(toChange)) {
          word = word.replace(toChange, changeWith);
        }
        break;
      case `Insert`:
        let index = Number(tokens[0]);
        let char = tokens[1];
        word = word.split("");
        word.splice(index, 0, char);
        word = word.join("");
        break;
      case `Move`:
        let i = tokens[0];
        let charMovement = word.split("").splice(0, i).join("");
        let firstPart = word.slice(i);
        word = firstPart + charMovement;
        break;
    }
  }

  console.log(`The decrypted message is: ${word}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
