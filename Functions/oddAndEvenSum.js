function main(input) {
  let evenDigits = 0;
  let oddDigits = 0;
  let toString = String(input);

  for (let el of toString) {
    if (Number(el) % 2 === 0) {
      evenDigits += Number(el);
    } else {
      oddDigits += Number(el);
    }
  }
  return `Odd sum = ${oddDigits}, Even sum = ${evenDigits}`;
}
console.log(main(3495892137259234));
