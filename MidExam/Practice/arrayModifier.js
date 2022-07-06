function modifier(commands) {
  let numbers = commands[0].split(" ");

  for (let el of commands) {
    let position1 = 0;
    let position2 = 0;
    if (el.includes("swap")) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === " ") {
          position1 = Number(el[i + 1]);
          position2 = Number(el[i + 3]);
          let temp = numbers[position1];
          numbers[position1] = numbers[position2];
          numbers[position2] = temp;
          break;
        }
      }
    } else if (el.includes("multiply")) {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === " ") {
          position1 = Number(el[i + 1]);
          position2 = Number(el[i + 3]);
          numbers[position1] = numbers[position1] * numbers[position2];
          break;
        }
      }
    } else if (el.includes("decrease")) {
      for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]) - 1;
      }
    } else if (el.includes("end")) {
      break;
    }
  }
  console.log(numbers.join(", "));
}
modifier(["1 2 3 4", "decrease", "decrease", "end"]);
