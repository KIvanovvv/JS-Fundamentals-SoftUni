function checker(number) {
  let outcome = false;

  if ((number % 2 !== 0 && number % 3 !== 0) || number === 2) {
    outcome = true;
  }
  console.log(outcome);
}
checker(10);
