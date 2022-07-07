function phoneBook(data) {
  let myObj = {};
  data.forEach((el) => {
    let [name, number] = el.split(" ");
    myObj[name] = number;
  });

  for (let key in myObj) {
    console.log(`${key} -> ${myObj[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
