function solve(arr) {
  let inputL = arr.length;
  let newArr = [];

  for (let i = 0; i < inputL; i++) {
    let number1 = arr[i];
    let flag = true;
    for (let j = i + 1; j < inputL; j++) {
      let number2 = arr[j];

      if (number1 <= number2) {
        flag = false;
        break;
      }
    }
    if (flag) {
      newArr.push(number1);
    }
  }
  console.log(newArr.join(" "));
}
solve([1, 4, 3, 2]);
