function sort(inputArr) {
  let arrMax = inputArr.slice().sort((a, b) => {
    return b - a;
  });
  let arrMin = inputArr.slice().sort((a, b) => {
    return a - b;
  });
  let arrLength = inputArr.length / 2;
  let finalArr = [];
  for (let i = 0; i < arrLength; i++) {
    finalArr.push(arrMax[i]);
    if (i + 0.5 !== arrLength) {
      finalArr.push(arrMin[i]);
    }
  }
  console.log(finalArr.join(" "));
}
sort([1, 2, 3, 4, 5, 6, 7, 8, 9]);
