function fancyBarcodes(input) {
  let length = input.shift();
  let patternBarcode = /@#+[A-Z][A-Z|a-z|0-9]{4,}[A-Z]@#+/g;
  let patternGroup = /\d+/g;

  for (let i = 0; i < length; i++) {
    let currentLine = input[i];
    let valid = currentLine.match(patternBarcode);
    if (valid === null) {
      console.log(`Invalid barcode`);
      continue;
    }
    let group = valid[0].match(patternGroup);
    if (group === null) {
      group = `00`;
    } else {
      group = group.reduce((a, b) => a + b);
    }

    console.log(`Product group: ${group}`);
  }
}
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
