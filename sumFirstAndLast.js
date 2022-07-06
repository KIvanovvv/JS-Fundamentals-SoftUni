function sumFirstanaAndLast(input) {
  let firstN = Number(input.slice(0, 1));
  let lastN = Number(input.slice(-1));

  console.log(lastN + firstN);
}
sumFirstanaAndLast(["5", "10"]);
