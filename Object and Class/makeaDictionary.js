function dictanary(jsonData) {
  let arrObj = [];
  let myObj = {};
  for (let el of jsonData) {
    let currentObj = JSON.parse(el);
    let key = Object.keys(currentObj);
    myObj[key] = currentObj[key];
  }
  let sortedKeys = Object.keys(myObj).sort((a, b) => {
    return a.localeCompare(b);
  });
  sortedKeys.forEach((product) => {
    console.log(`Term: ${product} => Definition: ${myObj[product]}`);
  });
}
dictanary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}',
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
]);
