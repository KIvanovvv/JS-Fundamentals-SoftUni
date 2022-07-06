function employees(namesArr) {
  let myObj = {};
  for (let name of namesArr) {
    let personalNumber = name.length;
    let myObj = { name, personalNumber };
    console.log(
      `Name: ${myObj.name} -- Personal Number: ${myObj.personalNumber}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
