function integer(a, b, c) {
  let totalNum = a + b + c;
  let toString = String(totalNum);
  let isInt = true;
  for (let i = 0; i < toString.length; i++) {
    if (toString[i] === `.`) {
      isInt = false;
    }
  }
  console.log(`${totalNum} - ${isInt ? `Integer` : `Float`}`);
}
integer(9, 100, 1.1);
integer(9, 100, 1);
