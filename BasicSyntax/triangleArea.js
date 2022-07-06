function solve(side1, side2, side3) {
  let s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  console.log(area);
}
solve(2, 3.5, 4);
