function partyTime(data) {
  let guestList = [];
  let isParty = false;
  let toCome = 0;
  let areHere = 0;
  for (let el of data) {
    if (el === `PARTY`) {
      isParty = true;
      continue;
    }
    if (!isParty) {
      guestList.push(el);
      toCome++;
    } else {
      let index = guestList.indexOf(el);
      guestList.splice(index, 1);
      areHere++;
    }
  }

  let sortedGuests = [];
  for (let guest of guestList) {
    if (!isNaN(guest[0])) {
      sortedGuests.push(guest);
    }
  }
  for (let guest of guestList) {
    if (isNaN(guest[0])) {
      sortedGuests.push(guest);
    }
  }
  let didntArrived = toCome - areHere;

  console.log(didntArrived);
  console.log(sortedGuests.join("\n"));
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
