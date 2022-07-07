function adressBook(data) {
  let myObj = {};
  data.forEach((el) => {
    let [name, adress] = el.split(":");
    myObj[name] = adress;
  });
  let sortedKeys = Object.keys(myObj).sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortedKeys.length; i++) {
    console.log(`${sortedKeys[i]} -> ${myObj[sortedKeys[i]]}`);
  }
}
adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
