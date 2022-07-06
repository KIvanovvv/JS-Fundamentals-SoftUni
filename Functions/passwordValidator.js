function main(input) {
  let numberCounter = 0;

  let lengthCheck = false;
  let minNumbersCheck = false;
  let charAndNumCheck = false;

  if (input.length > 5 && input.length < 11) {
    lengthCheck = true;
  }
  for (let i = 0; i < input.length; i++) {
    if (/[0-9]/.test(input[i])) {
      numberCounter++;
    }
    if (
      /[a-z]/.test(input[i]) ||
      /[A-Z]/.test(input[i]) ||
      /[0-9]/.test(input[i])
    ) {
      charAndNumCheck = true;
    } else {
      charAndNumCheck = false;
      break;
    }
  }
  if (numberCounter >= 2) {
    minNumbersCheck = true;
  }
  if (!lengthCheck) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (!charAndNumCheck) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (numberCounter < 2) {
    console.log(`Password must have at least 2 digits`);
  }
  if (lengthCheck && minNumbersCheck && charAndNumCheck) {
    console.log(`Password is valid`);
  }
}
main("MP23@");
