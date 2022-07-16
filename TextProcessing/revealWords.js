function revealWords(wordsInput, text) {
  textArr = text.split(" ");
  let words = wordsInput.split(", ");
  for (let word of words) {
    for (let el of textArr) {
      if (el.includes("*") && el.length === word.length) {
        text = text.replace(el, word);
      }
    }
  }
  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
