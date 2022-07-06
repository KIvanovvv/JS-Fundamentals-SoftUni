function validation(input) {
  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];

  let res = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  if (Number.isInteger(res)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  res = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  if (Number.isInteger(res)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  res = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (Number.isInteger(res)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
validation([2, 1, 1, 1]);
