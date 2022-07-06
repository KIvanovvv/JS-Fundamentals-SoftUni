function solve(array) {
  let sumOriginal = 0;
  let sumNew = 0;

  let lengthL = array.length;

  for (let i = 0; i < lengthL; i++) {
    sumOriginal += array[i];
    if (array[i] % 2 === 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }
    sumNew += array[i];
  }
  console.log(array);
  console.log(sumOriginal);
  console.log(sumNew);
}
solve([-5, 11, 3, 0, 2]);
