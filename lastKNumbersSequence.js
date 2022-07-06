function solve(n, k) {
  let res = [1];
  for (let i = 1; i < n; i++) {
    let sequenceK = res.slice(-k);
    let sum = 0;
    for (let el of sequenceK) {
      sum += el;
    }
    res.push(sum);
  }
  console.log(res.join(" "));
}
solve(6, 3);
