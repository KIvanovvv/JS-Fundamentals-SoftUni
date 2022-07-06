function loadingBar(input) {
  let loadingSymbols = input / 10;
  let emptySpace = 10 - loadingSymbols;

  let displaySymbols = "%".repeat(loadingSymbols);
  let displayEmptySpace = ".".repeat(emptySpace);
  if (loadingSymbols !== 10) {
    console.log(`${input}% [${displaySymbols + displayEmptySpace}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`${input}% Complete!`);
    console.log(`[${displaySymbols + displayEmptySpace}]`);
  }
}

loadingBar(100);
