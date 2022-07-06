function calculator(n1, n2, opr) {
  let res;
  if (opr === "multiply") res = (n1, n2) => n1 * n2;
  else if (opr === "add") res = (n1, n2) => n1 + n2;
  else if (opr === "subtract") res = (n1, n2) => n1 - n2;
  else if (opr === "divide") res = (n1, n2) => n1 / n2;

  return res(n1, n2);
}
console.log(calculator(12, 19, "add"));
