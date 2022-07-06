function solve(input) {
  let k = input.shift();

  let firstNumbers = input.slice(0, k).join(" ");
  let lastNumbers = input.slice(-k).join(" ");
  console.log(firstNumbers);
  console.log(lastNumbers);
}
solve([3, 6, 7, 8, 9]);
