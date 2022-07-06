function numberModification(input) {
  let toString = input.toString();
  let value = 0;
  let index = 0;
  for (let el of toString) {
    index++;
    value += Number(el);
  }
  while (value / index < 5) {
    toString += "9";
    value += 9;
    index++;
  }
  console.log(toString);
}
numberModification(5835);
