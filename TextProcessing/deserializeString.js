function deserializeString(input) {
  let myArr = [];
  let resArr = [];
  for (let i = 0; i < input.length; i++) {
    let el = input[i];
    if (el === `end`) {
      break;
    }
    let [char, num] = el.split(":");
    let nums = num.split("/");
    for (let el of nums) {
      myArr.push(char + Number(el));
    }
  }

  for (let i = 0; i < myArr.length; i++) {
    let el = myArr[i];
    el = el.split("");
    let char = el.shift();
    let index = el.join("");
    resArr[index] = char;
  }
  console.log(resArr.join(""));
}
deserializeString([
  "a:0/3/5/11",

  "v:1/4",

  "j:2",

  "m:6/9/15",

  "s:7/13",

  "d:8/14",

  "c:10",

  "l:12",

  "end",
]);
