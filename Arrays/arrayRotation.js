function solve(arr, rotations) {
  let currentNum = 0;

  for (let i = 0; i < rotations; i++) {
    currentNum = arr.shift();
    arr.push(currentNum);
  }
  console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);
