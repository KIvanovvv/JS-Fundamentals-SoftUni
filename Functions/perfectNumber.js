function perfect(num) {
  let digits = 1;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      digits += i;
    }
  }
  if (num === digits) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfect(1236498);
