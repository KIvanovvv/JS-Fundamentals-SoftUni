function cutAndReverse(text) {
  let textArr = text.split("").reverse();
  let firstLine = textArr.slice(textArr.length / 2).join("");
  let secondLine = textArr.slice(0, textArr.length / 2).join("");
  console.log(firstLine);
  console.log(secondLine);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
