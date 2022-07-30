function needForSpeed(input) {
  let numCars = Number(input.shift());
  let allCars = [];
  for (let i = 0; i < numCars; i++) {
    let car = {};
    let line = input[i];
    let [make, milaege, fuel] = line.split("|");
    car[`make`] = make;
    car[`mileage`] = Number(milaege);
    car[`fuel`] = Number(fuel);
    allCars.push(car);
  }
  for (let i = numCars; i < input.length; i++) {
    let line = input[i];
    if (line === `Stop`) {
      break;
    }
    let [command, ...tokens] = line.split(" : ");
    switch (command) {
      case `Drive`:
        let car = tokens[0];
        let distance = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        allCars.forEach((el) => {
          if (el[`make`] === car) {
            if (el[`fuel`] < fuel) {
              console.log(`Not enough fuel to make that ride`);
            } else {
              el[`mileage`] = el[`mileage`] + distance;
              el[`fuel`] = el[`fuel`] - fuel;
              console.log(
                `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
              );
              if (el[`mileage`] >= 100000) {
                console.log(`Time to sell the ${car}!`);
              }
            }
          }
        });

        break;
      case `Refuel`:
        let make = tokens[0];
        let toFill = Number(tokens[1]);
        allCars.forEach((el) => {
          if (el[`make`] === make) {
            if (el[`fuel`] + toFill <= 75) {
              el[`fuel`] = el[`fuel`] + toFill;
              console.log(`${make} refueled with ${toFill} liters`);
            } else {
              console.log(`${make} refueled with ${75 - el[`fuel`]} liters`);
              el[`fuel`] = 75;
            }
          }
        });
        break;
      case `Revert`:
        let model = tokens[0];
        let toRevert = Number(tokens[1]);
        allCars.forEach((el) => {
          if (el[`make`] === model) {
            if (el[`mileage`] - toRevert <= 10000) {
              el[`mileage`] = 10000;
            } else {
              el[`mileage`] = el[`mileage`] - toRevert;
              console.log(
                `${model} mileage decreased by ${toRevert} kilometers`
              );
            }
          }
        });
        break;
    }
  }
  allCars.forEach((el) => {
    if (el[`mileage`] < 100000) {
      console.log(
        `${el[`make`]} -> Mileage: ${el[`mileage`]} kms, Fuel in the tank: ${
          el[`fuel`]
        } lt.`
      );
    }
  });
}
needForSpeed([
  "4",

  "Lamborghini Veneno|11111|74",

  "Bugatti Veyron|12345|67",

  "Koenigsegg CCXR|67890|12",

  "Aston Martin Valkryie|99900|50",

  "Drive : Koenigsegg CCXR : 382 : 82",

  "Drive : Aston Martin Valkryie : 99 : 23",

  "Drive : Aston Martin Valkryie : 2 : 1",

  "Refuel : Lamborghini Veneno : 40",

  "Revert : Bugatti Veyron : 2000",

  "Stop",
]);
