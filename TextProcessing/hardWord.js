function hardWord(input) {
  let text = input.shift();
  let underscores = [];
  let wordsToFind = input.shift();
  let textArr = text.split(" ");
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i].includes("_")) {
      underscores.push(textArr[i]);
    }
  }

  underscores.sort((a, b) => a.length - b.length);
  wordsToFind.sort((a, b) => a.length - b.length);
  for (let i = 0; i < underscores.length; i++) {
    if (underscores[i].includes(".")) {
      wordsToFind[i] += ".";
    }
    if (underscores[i].includes(",")) {
      wordsToFind[i] += ",";
    }
  }

  for (let i = 0; i < wordsToFind.length; i++) {
    for (let el of textArr) {
      if (el === underscores[i]) {
        let index = textArr.indexOf(el);
        textArr.splice(index, 1, wordsToFind[i]);
      }
    }
  }

  console.log(textArr.join(" "));
}
hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
