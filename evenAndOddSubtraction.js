function solve(numbers) {
  let evenNum = 0;
  let oddNum = 0;
  let res = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNum += numbers[i];
    } else if (numbers[i] % 2 !== 0) {
      oddNum += numbers[i];
    }
  }
  console.log(evenNum - oddNum);
}
solve([3, 5, 7, 9]);
