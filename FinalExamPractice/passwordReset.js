function passwordReset(input) {
  let passString = input.shift();
  let passStringL = passString.length;
  let pass = passString;
  let index = 0;

  while (input[index] !== `Done`) {
    let el = input[index];
    let elArr = el.split(" ");
    switch (elArr[0]) {
      case `TakeOdd`:
        pass = "";
        for (let i = 0; i < passStringL; i++) {
          if (i % 2 !== 0) {
            pass += passString[i];
          }
        }
        console.log(pass);

        break;
      case "Cut":
        let index = elArr[1];
        let length = elArr[2];
        let indexToCut = Number(index) + Number(length);
        let toCut = pass.slice(index, indexToCut);
        pass = pass.replace(toCut, "");
        console.log(pass);
        break;
      case "Substitute":
        let toFind = elArr[1];
        let toReplace = elArr[2];
        let flag = false;
        while (pass.includes(toFind)) {
          pass = pass.replace(toFind, toReplace);
          flag = true;
        }
        if (flag) {
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
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
