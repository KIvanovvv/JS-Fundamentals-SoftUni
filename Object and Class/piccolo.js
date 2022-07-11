function piccolo(input) {
  let parking = new Map();
  for (let el of input) {
    let [command, plateNum] = el.split(", ");
    if (command === `IN`) {
      parking.set(plateNum);
    } else {
      parking.delete(plateNum);
    }
  }
  let sortedParking = Array.from(parking).sort(([keyA, valA], [keyB, valB]) => {
    return keyA.localeCompare(keyB);
  });
  if (parking.size > 0) {
    for (let [k, v] of sortedParking) {
      console.log(k);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
