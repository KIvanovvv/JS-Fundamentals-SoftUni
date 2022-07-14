function occurences(sentc, word) {
  let arr = sentc.split(" ");
  let counter = 0;
  for (let el of arr) {
    if (el === word) {
      counter++;
    }
  }
  console.log(counter);
}
occurences("This is a word and it also is a sentence", "is");
