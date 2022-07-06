function special(num) {
  let isSpecial = `False`;
  let toString = String(num);
  let sum = 0;
  let current = 0;
  let tempNumber = 0;

  for (let i = 1; i <= num; i++) {
    tempNumber = String(i);
    for (let j = 0; j < tempNumber.length; j++) {
      current = Number(tempNumber[j]);
      sum += current;
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      isSpecial = `True`;
    }
    console.log(`${i} -> ${isSpecial}`);
    isSpecial = `False`;
    sum = 0;
  }
}
special(106);
