function triangle(n) {
  for (let row = 1; row <= n; row++) {
    let print = "";
    for (let col = 1; col <= row; col++) {
      print += ` ${row}`;
    }
    console.log(print);
  }
}
triangle(5);
