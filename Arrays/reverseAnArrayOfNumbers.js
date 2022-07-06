function solve(n, arr) {
  let res = [];
  let line = [];
  for (let i = 0; i < n; i++) {
    res.push(arr[i]);
  }
  // for (let i = res.length - 1; i >= 0; i--) {
  //   line.push(res[i]);
  // }
  // console.log(line.join(" "));
  console.log(res.reverse());
}
solve(3, [10, 20, 30, 40, 50]);
