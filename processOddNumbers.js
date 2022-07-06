function processOddNumbers(numbers) {
  let res = numbers
    .filter((el, i) => i % 2 === 1)
    .map((a) => a * 2)
    .reverse()
    .join(" ");

  console.log(res);
}
processOddNumbers([3, 0, 10, 4, 7, 3]);
