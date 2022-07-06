function print(startN, endN) {
  let res = "";
  let sum = 0;
  for (let i = startN; i <= endN; i++) {
    res += " " + i;
    sum += i;
  }
  console.log(res);
  console.log(`Sum: ${sum}`);
}
print(5, 10);
