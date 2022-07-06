function solve(array, magicNum) {
  let inputl = array.length;
  let magciArray = [];

  for (let i = 0; i < inputl; i++) {
    let currentNum;
    for (let j = i + 1; j < inputl; j++) {
      currentNum = `${String(array[i])} ${String(array[j])}`;
      if (array[i] + array[j] === magicNum) {
        magciArray.push(currentNum);
      }
    }
  }
  console.log(magciArray.join("\n"));
}
solve([14, 20, 60, 13, 7, 19, 8], 27);
