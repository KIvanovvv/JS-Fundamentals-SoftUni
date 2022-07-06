function solve(numbers) {
  let number = 0;
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = Number(numbers[i]);
    if (number % 2 === 0) {
      res += number;
    }
  }
  console.log(res);
}
solve(["1", "2", "3", "4", "5", "6"]);
