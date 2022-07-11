function wordsTracker(data) {
  let mapOfWords = new Map();
  let wordsToFind = data.shift().split(" ");
  for (let el of wordsToFind) {
    mapOfWords.set(el, 0);
  }
  for (let word of data) {
    if (mapOfWords.has(word)) {
      let currentValue = mapOfWords.get(word);
      mapOfWords.set(word, currentValue + 1);
    }
  }
  let sorted = Array.from(mapOfWords).sort(([keyA, valA], [keyB, valB]) => {
    return valB - valA;
  });
  for (let [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);
