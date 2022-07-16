function stringSubstring(word, text) {
  let textArr = text.split(" ");

  for (let el of textArr) {
    el = el.toLowerCase();
    if (el === word) {
      console.log(word);
      return;
    }
  }
  console.log(`${word} not found!`);
}
stringSubstring("python", "JavaScript is the best programming language");
