function amazing(num) {
  let toString = String(num);
  let res;
  let curentChar = 0;
  let isAmz = false;
  let secondChar;

  for (let i = 0; i < toString.length; i++) {
    res = toString[i];
    curentChar += Number(res);
  }
  toString = String(curentChar);
  for (let i = 0; i < toString.length; i++) {
    secondChar = toString[i];
    if (secondChar === `9`) {
      isAmz = true;
      break;
    }
  }
  console.log(`${num} Amazing? ${isAmz ? `True` : `False`}`);
}
amazing(1233);
amazing(16);
