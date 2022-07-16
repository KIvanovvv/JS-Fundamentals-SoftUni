function modernHashTag(text) {
  let textArr = text.split(" ");
  for (let word of textArr) {
    if (word.includes("#") && word.length > 1) {
      let flag = true;
      let resWord = word.slice(1);
      for (let chr of resWord) {
        chr = chr.toLowerCase();
        if (chr.charCodeAt(0) < 97 || chr.charCodeAt(0) > 122) {
          flag = false;
        }
      }
      if (flag) {
        console.log(resWord);
      }
    }
  }
}
modernHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
