function thePianist(input) {
  let n = input.shift();
  let allPieces = {};
  for (let i = 0; i < n; i++) {
    let currentLine = input[i];
    let obj = {};
    let [piece, composser, key] = currentLine.split("|");
    allPieces[piece] = obj;
    allPieces[piece][composser];
    allPieces[piece][composser] = key;
  }
  for (let i = n; n < input.length; i++) {
    let line = input[i];
    if (line === `Stop`) {
      break;
    }
    let tokens = line.split("|");
    let command = tokens.shift();

    switch (command) {
      case `Add`:
        let newPiece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];
        if (allPieces.hasOwnProperty(newPiece)) {
          console.log(`${newPiece} is already in the collection!`);
        } else {
          let obj = {};
          allPieces[newPiece] = obj;
          allPieces[newPiece][composer] = key;
          console.log(
            `${newPiece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;
      case `Remove`:
        let piece = tokens[0];
        if (allPieces.hasOwnProperty(piece)) {
          delete allPieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }

        break;
      case `ChangeKey`:
        let findPiece = tokens[0];
        let newStatus = tokens[1];
        let found = false;
        for (let key of Object.keys(allPieces)) {
          if (key === findPiece) {
            found = true;
            for (let [k, v] of Object.entries(allPieces[key])) {
              allPieces[key][k] = newStatus;
              console.log(`Changed the key of ${findPiece} to ${newStatus}!`);
            }
          }
        }
        if (!found) {
          console.log(
            `Invalid operation! ${findPiece} does not exist in the collection.`
          );
        }

        break;
    }
  }
  for (let piece of Object.keys(allPieces)) {
    for (let [k, v] of Object.entries(allPieces[piece])) {
      console.log(`${piece} -> Composer: ${k}, Key: ${v}`);
    }
  }
}
thePianist([
  "3",

  "Fur Elise|Beethoven|A Minor",

  "Moonlight Sonata|Beethoven|C# Minor",

  "Clair de Lune|Debussy|C# Minor",

  "Add|Sonata No.2|Chopin|B Minor",

  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",

  "Add|Fur Elise|Beethoven|C# Minor",

  "Remove|Clair de Lune",

  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
