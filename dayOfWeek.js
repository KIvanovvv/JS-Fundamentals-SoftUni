function solve(day) {
  let week = [
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
    `Sunday`,
  ];
  if (day > 0 && day <= 7) {
    console.log(week[day - 1]);
  } else {
    console.log(`Invalid day!`);
  }
}
solve(-1);
