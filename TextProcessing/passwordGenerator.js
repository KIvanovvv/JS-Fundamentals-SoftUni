function passwordGenerator(input) {
  let concatPass = input[0] + input[1];
  let replaceWord = input[2];
  let breakPoint = 0;

  for (let j = 0; j < replaceWord.length; j++) {
    for (let i = 0; i < concatPass.length; i++) {
      let char = concatPass[i];
      let replace = replaceWord[j];
      replace = replace.toUpperCase();
      let isVowel = false;
      if (
        char.charCodeAt(0) === 97 ||
        char.charCodeAt(0) === 101 ||
        char.charCodeAt(0) === 105 ||
        char.charCodeAt(0) === 111 ||
        char.charCodeAt(0) === 117
      ) {
        isVowel = true;
      }
      if (isVowel) {
        concatPass = concatPass.replace(char, replace);
        i++;
        break;
      }
    }
    if (breakPoint < 4) {
      if (j + 1 === replaceWord.length) {
        j = -1;
        breakPoint++;
      }
    }
  }
  let res = concatPass.split("").reverse().join("");
  console.log(`Your generated password is ${res}`);
}
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
