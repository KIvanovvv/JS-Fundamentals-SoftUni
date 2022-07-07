function meetings(data) {
  let myObj = {};
  data.forEach((el) => {
    let [day, name] = el.split(" ");
    if (!myObj[day]) {
      myObj[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  });
  for (let key in myObj) {
    console.log(`${key} -> ${myObj[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
