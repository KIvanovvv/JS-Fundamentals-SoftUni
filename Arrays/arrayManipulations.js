function manipulation(commands) {
  let numbers = commands.shift();
  numbers = numbers.split(" ");
  let resArr = commands.slice();

  for (let el of resArr) {
    let number = 0;
    let index = 0;
    if (el.includes("Add")) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === " ") {
          number = Number(el[i + 1]);
        }
      }
      numbers.push(number);
      console.log(numbers.join(" "));
    } else if (el.includes("Remove ")) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === " ") {
          number = el[i + 1];
        }
      }
      numbers.filter((a) => a !== number);
      console.log(numbers.join(" "));
    } else if (el.includes("RemoveAt")) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === " ") {
          number = Number(el[i + 1]);
        }
      }
      numbers.splice(number, 1);
      console.log(numbers.join(" "));
    } else if (el.includes("Insert")) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === " ") {
          number = Number(el[i + 1]);
          index = Number(el[i + 3]);
          break;
        }
      }
      numbers.splice(index, 0, number);
      console.log(numbers.join(" "));
    }
  }
  // console.log(numbers.join(" "));
}
manipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
