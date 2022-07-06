function main(first, second, last) {
  let result = 0;
  sum(first, second);
  subtract(sum(first, second), last);

  function sum(first, second) {
    return first + second;
  }
  function subtract(sum, last) {
    return (result = sum - last);
  }
  console.log(result);
}
main(42, 58, 100);
