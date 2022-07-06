function main(input) {
  for (let el of input) {
    let number = String(el);
    let reversed = String(el).split("").reverse().join("");

    if (number === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
main([32, 2, 232, 1010]);
