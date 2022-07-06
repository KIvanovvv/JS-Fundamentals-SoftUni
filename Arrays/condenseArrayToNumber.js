function solve(arr) {
  let resArr = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      resArr.push(arr[i] + arr[i + 1]);
    }
    arr = [];
    arr.push.apply(arr, resArr);
    resArr = [];
  }

  console.log(arr.toString());
}
solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
solve([5, 10, 23, 4]);
