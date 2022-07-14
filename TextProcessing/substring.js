function substring(input, startI, countCh) {
  let endI = startI + countCh;
  let res = input.substring(startI, endI);
  console.log(res);
}
substring("ASentence", 1, 8);
