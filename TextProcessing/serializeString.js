function serializeString(input) {
  let text = input[0];
  let obj = {};

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (!obj.hasOwnProperty(char)) {
      obj[char] = i;
    } else {
      obj[char] += `/` + i;
    }
  }
  for (let key in obj) {
    console.log(`${key}:${obj[key]}`);
  }
}
serializeString(["avjavamsdmcalsdm"]);
