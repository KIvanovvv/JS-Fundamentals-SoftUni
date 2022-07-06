function solve(arr) {
  let resArr = [];
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === `add`) {
      resArr.push(i + 1);
      flag = true;
    } else if (arr[i] === `remove`) {
      resArr.pop();
    }
  }
  if (flag) {
    console.log(resArr.join(" "));
  } else {
    console.log(`Empty`);
  }
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
solve(["add", "remove", "remove"]);
solve([]);
