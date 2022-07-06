function solve(input) {
  for (let i = 0; i < input.length; i++) {
    let elI = input[i];
    for (let j = i + 1; j < input.length; j++) {
      let elJ = input[j];
      if (elJ === elI) {
        input.splice(j, 1);
        j--;
      }
    }
  }
  console.log(input.join(" "));
}
solve([3, 4, 1, 2, 2, 2]);
