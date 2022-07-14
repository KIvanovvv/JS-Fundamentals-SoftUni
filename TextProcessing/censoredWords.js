function censoredWords(sentence, word) {
  let arr = sentence.split(word);
  let res = arr.join("*".repeat(word.length));
  console.log(res);
}
censoredWords("A small sentence with some words", "small");
