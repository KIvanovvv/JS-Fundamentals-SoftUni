function oddOccurrences(input) {
  let wordMap = new Map();
  let arrOfWords = input.split(" ");

  for (let word of arrOfWords) {
    word = word.toLowerCase();
    if (!wordMap.has(word)) {
      wordMap.set(word, 1);
    } else {
      let oldCount = wordMap.get(word);
      wordMap.set(word, oldCount + 1);
    }
  }
  let buff = [];
  for (let [key, value] of wordMap) {
    if (value % 2 !== 0) {
      buff.push(key);
    }
  }
  console.log(buff.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
