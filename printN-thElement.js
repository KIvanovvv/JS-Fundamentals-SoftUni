function solve(arr) {
  let index = arr.length - 1;
  let resArr = [];

  for (let i = 0; i < index; i += Number(arr[index])) {
    resArr.push(arr[i]);
  }
  console.log(resArr.join(" "));
}
solve(["5", "20", "31", "4", "20", "2"]);
solve(["dsa", "asd", "test", "test", "2"]);
solve(["1", "2", "3", "4", "5", "4"]);
