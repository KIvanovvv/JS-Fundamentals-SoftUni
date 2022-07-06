function solve(n1, n2, n3) {
  let res = 0;
  if (n1 > n2 && n1 > n3) {
    console.log(n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2);
  } else if (n3 > n1 && n3 > n2) {
    console.log(n3);
  } else {
    console.log(n1);
  }
}
solve(43, 43.2, 43.1);
