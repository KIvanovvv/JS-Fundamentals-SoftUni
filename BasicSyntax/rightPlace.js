function right(str1, char, str2) {
  let word = str1;
  let res = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === `_`) {
      res += char;
    } else {
      res += word[i];
    }
  }
  console.log(res === str2 ? `Matched` : `Not Matched`);
}
right("Str_ng", "I", "StrIng");
