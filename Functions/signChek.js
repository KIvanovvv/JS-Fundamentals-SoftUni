function check(n1, n2, n3) {
  let res;
  let isNegative = 0;

  if (n1 < 0) isNegative++;
  if (n2 < 0) isNegative++;
  if (n3 < 0) isNegative++;

  if (isNegative === 0 || isNegative === 2) console.log(`Positive`);
  else if (isNegative === 1 || isNegative === 3) console.log(`Negative`);
}
check(
  -6,

  -12,

  14
);
// res = (n1, n2, n3) => n1 * n2 * n3;
// if (res(n1, n2, n3) > 0) {
//   console.log(`Positive`);
// } else {
//   console.log("Negative");
// }
