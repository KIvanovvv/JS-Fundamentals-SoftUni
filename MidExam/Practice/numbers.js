function numbers(input) {
  let arrNumber = input.split(" ");
  let currentSum = 0;
  let numCount = 0;
  let avgNum = 0;
  let MaxNumArr = [];
  let fiveBigest = [];
  let index = 0;
  let breakFlag = false;
  for (let el of arrNumber) {
    currentSum += Number(el);
    numCount++;
  }
  avgNum = (currentSum / numCount).toFixed(2);

  for (let i = 0; i < arrNumber.length; i++) {
    if (Number(arrNumber[i]) > avgNum) {
      MaxNumArr.push(Number(arrNumber[i]));
      breakFlag = true;
    }
  }
  if (breakFlag) {
    for (let i = 0; i < MaxNumArr.length; i++) {
      let a = MaxNumArr[i];
      let remove = 0;
      for (let j = i; j < MaxNumArr.length; j++) {
        if (MaxNumArr[j] > a) {
          a = MaxNumArr[j];
          remove = j;
        }
      }
      fiveBigest.push(a);
      MaxNumArr.splice(remove, 1);
      index++;
      if (index == 5) {
        break;
      } else {
        i--;
      }
    }

    console.log(fiveBigest.join(" "));
  } else {
    console.log(`No`);
  }
}
numbers("1");
