function sumator(input) {
  let charOne = input.shift();
  let charOneValue = charOne.charCodeAt(0);
  let charTwo = input.shift();
  let charTwoValue = charTwo.charCodeAt(0);
  let text = input[0];
  let sum = 0;
  let buff = 0;
  if (charOneValue > charTwoValue) {
    buff = charOneValue;
    charOneValue = charTwoValue;
    charTwoValue = buff;
  }
  for (let el of text) {
    let elValue = el.charCodeAt(0);
    if (elValue > charOneValue && elValue < charTwoValue) {
      sum += Number(elValue);
    }
  }
  console.log(sum);
}
sumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
