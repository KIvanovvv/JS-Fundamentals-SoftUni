function main(char1, char2) {
  let arr = [];
  let result;
  let firstChar = char1;
  let secondChar = char2;
  let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
  let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

  for (let i = startChar + 1; i < endChar; i++) {
    arr.push(String.fromCharCode(i));
  }
  result = arr.join(" ");

  return result;
}
console.log(main("C", "#"));
