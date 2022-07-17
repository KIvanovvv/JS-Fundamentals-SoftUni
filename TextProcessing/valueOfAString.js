function value(input) {
  let string = input.shift();
  let command = input.shift();
  let stringArr = string.split("");
  let sumLowerCase = 0;
  let sumUpperCase = 0;
  switch (command) {
    case "LOWERCASE":
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          sumLowerCase += string.charCodeAt(i);
        }
      }
      console.log(`The total sum is: ${sumLowerCase}`);
      break;
    case "UPPERCASE":
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          sumUpperCase += string.charCodeAt(i);
        }
      }
      console.log(`The total sum is: ${sumUpperCase}`);
      break;
  }
}
value(["AC/DC", "UPPERCASE"]);
