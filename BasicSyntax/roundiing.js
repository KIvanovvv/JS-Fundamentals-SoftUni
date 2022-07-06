function rounding(num1, num2) {
  if (num2 > 15) {
    num2 = 15;
  }
  let res = num1.toFixed(num2);
  let finalRes = parseFloat(res);
  console.log(finalRes);
}
rounding(10.5, 3);
