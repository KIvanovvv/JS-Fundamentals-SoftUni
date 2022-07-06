function solve(arr1, arr2) {
  let isEqual = true;
  let sum = 0;
  let difference = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += Number(arr1[i]);
    if (arr1[i] === arr2[i]) {
      continue;
    } else if (arr1[i] !== arr2[i]) {
      difference = i;
      isEqual = false;
      break;
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${difference} index`
    );
  }
}
solve([`10`, "1"], ["1", `10`]);
