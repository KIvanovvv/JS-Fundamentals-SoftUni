function solve(array) {
  let inputL = array.length;
  let newArr = [];
  for (let i = 0; i < inputL; i++) {
    let currentSequence = [];
    for (let k = i; k < inputL; k++) {
      if (array[i] === array[k]) {
        currentSequence.push(array[i]);
      } else {
        break;
      }
      if (currentSequence.length > newArr.length) {
        newArr = currentSequence;
      }
    }
  }
  console.log(newArr.join(" "));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
