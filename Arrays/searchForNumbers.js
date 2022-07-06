function search(arrNumbers, numbersToFind) {
  let indexs = numbersToFind.shift();
  let numsToDelete = numbersToFind.shift();
  let searchNum = numbersToFind.shift();
  let foundCount = 0;
  let newArr = arrNumbers.slice(0, indexs + 1);
  for (let i = 0; i < numsToDelete; i++) {
    newArr.shift();
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === searchNum) {
      foundCount++;
    }
  }

  console.log(`Number ${searchNum} occurs ${foundCount} times.`);
}
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);
