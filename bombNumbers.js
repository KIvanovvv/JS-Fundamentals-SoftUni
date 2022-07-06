function bombNumbers(numbers, bomb) {
  let bombNum = bomb[0];
  let bombPowerForward = bomb[1];

  let sumAfterBlast = 0;
  let arrAfterblast = numbers.slice();
  while (arrAfterblast.includes(bombNum)) {
    let bombIndex = arrAfterblast.indexOf(bombNum);

    arrAfterblast.splice(bombIndex, bombPowerForward + 1);
    if (bombIndex + bombPowerForward > arrAfterblast.length) {
      arrAfterblast.splice(-bombPowerForward);
    } else {
      let bombPowerBackward = numbers.length - 1 - (bombPowerForward + 1);
      arrAfterblast.splice(-bombPowerBackward, bombPowerForward);
    }
  }
  for (let i = 0; i < arrAfterblast.length; i++) {
    sumAfterBlast += arrAfterblast[i];
  }
  console.log(arrAfterblast);
  console.log(sumAfterBlast);
}
bombNumbers([1, 4, 4, 9, 2, 8, 2, 1], [1, 2]);
// 4 na 3 index,7 indexa obshto ,-1 = 9
