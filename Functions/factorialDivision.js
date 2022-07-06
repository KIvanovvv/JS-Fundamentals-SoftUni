function main(number1, number2) {
  let sumOfDigitsFirstNumber = 1;
  let sumOfDigitsSecondNumber = 1;

  for (let i = number1 - 1; i > 0; i--) {
    sumOfDigitsFirstNumber *= i;
  }
  for (let i = number2 - 1; i > 0; i--) {
    sumOfDigitsSecondNumber *= i;
  }

  let factorialFirstNumber = number1 * sumOfDigitsFirstNumber;
  let factorialSecondNumber = number2 * sumOfDigitsSecondNumber;
  let result = factorialFirstNumber / factorialSecondNumber;
  console.log(result.toFixed(2));
}
main(7, 3);
