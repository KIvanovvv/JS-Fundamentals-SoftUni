function repeat(string, repetition) {
  let res = "";
  for (let i = 0; i < repetition; i++) {
    res += string;
  }
  console.log(res);
}
repeat("abc", 3);
