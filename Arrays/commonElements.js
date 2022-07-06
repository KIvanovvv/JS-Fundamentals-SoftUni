function solve(array1, array2) {
  let inputL = array1.length;

  for (let i = 0; i < inputL; i++) {
    if (array2.includes(array1[i])) {
      let currentMatch = array1[i];
      console.log(currentMatch);
    }
  }
}
solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
