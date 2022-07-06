function flightSchedule(arr) {
  let flights = {};
  let changes = {};
  let flightsArr = arr[0].slice(0);
  let changesArr = arr[1].slice(0);
  let globalStatus = arr[2].slice(0).join(" ");
  flightsArr.forEach((el) => {
    let [name, destination, destination2] = el.split(" ");
    let Destination = destination;
    flights[name] = { Destination, Status: `Ready to fly` };
    if (destination2) {
      let Destination = `${destination} ${destination2}`;
      flights[name] = { Destination, Status: `Ready to fly` };
    }
  });
  changesArr.forEach((el) => {
    let [name, Status] = el.split(" ");
    changes[name] = Status;
  });
  let keysForChange = Object.keys(changes);
  for (let key in flights) {
    for (let i = 0; i < keysForChange.length; i++) {
      if (key === keysForChange[i]) {
        flights[key].Status = `Cancelled`;
      }
    }
  }
  if (globalStatus === `Cancelled`) {
    for (let key in flights) {
      if (flights[key].Status === `Cancelled`) {
        console.log(flights[key]);
      }
    }
  } else if (globalStatus === `Ready to fly`) {
    for (let key in flights) {
      if (flights[key].Status === `Ready to fly`) {
        console.log(flights[key]);
      }
    }
  }
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
