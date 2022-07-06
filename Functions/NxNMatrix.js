function matrix(input) {
  let matrix = [];
  for (let i = 0; i < input; i++) {
    let row = [];
    for (let j = 0; j < input; j++) {
      row.push(input);
    }
    matrix.push(row.join(" "));
  }
  console.log(matrix.join("\n"));
}
matrix(5);
