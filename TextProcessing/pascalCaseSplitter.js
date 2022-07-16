function pascalCaseSplitter(text) {
  let resArr = [];
  let cut = 0;
  for (let i = 1; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      let word = text.slice(cut, i);
      cut = i;
      resArr.push(word);
    }
  }
  let word = text.slice(cut);
  resArr.push(word);

  console.log(resArr.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
