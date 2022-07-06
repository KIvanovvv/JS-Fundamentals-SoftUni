function solve(input) {
  let res = [];
  for (let el of input) {
    if (Number(el) >= 0) {
      res.push(el);
    } else {
      res.unshift(el);
    }
  }
  console.log(res.join("\n"));
}
solve(["3", "-2", "0", "-1"]);
