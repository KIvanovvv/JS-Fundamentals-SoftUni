function digits(num) {
  let stringNum = String(num);

  let res = 0;
  for (let i = 0; i < stringNum.length; i++) {
    res += Number(stringNum[i]);
  }
  console.log(res);
}
digits(245678);
