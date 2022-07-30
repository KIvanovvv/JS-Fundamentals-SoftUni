function passwordReset(input) {
  let passString = input.shift();
  let pass = passString;
  let index = 0;

  while (input[index] !== `Done`) {
    let el = input[index];
    let elArr = el.split(" ");
    switch (elArr[0]) {
      case `TakeOdd`:
        let buff = "";
        for (let i = 0; i < pass.length; i++) {
          if (i % 2 !== 0) {
            buff += pass[i];
          }
        }
        pass = buff;
        console.log(pass);

        break;
      case "Cut":
        let index = Number(elArr[1]);
        let length = elArr[2];
        let indexToCut = Number(index) + Number(length);
        let toCut = pass.slice(index, indexToCut);
        pass = pass.replace(toCut, "");
        console.log(pass);
        break;
      case "Substitute":
        let toFind = elArr[1];
        let toReplace = elArr[2];
        if (pass.includes(toFind)) {
          pass = pass.replace(new RegExp(toFind, `g`), toReplace);
          console.log(pass);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }
    index++;
  }
  console.log(`Your password is: ${pass}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",

  "TakeOdd",

  "Cut 15 3",

  "Substitute :: -",

  "Substitute | ^",

  "Done",
]);
