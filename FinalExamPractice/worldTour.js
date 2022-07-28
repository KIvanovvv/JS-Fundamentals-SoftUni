function worldTour(input) {
  let destinations = input.shift();
  let currentLine = input.shift();
  while (currentLine !== `Travel`) {
    let [command, firstParam, secondParam] = currentLine.split(":");

    switch (command) {
      case `Add Stop`:
        let index = Number(firstParam);
        if (index < 0 || index >= destinations.length) {
          console.log(destinations);
          break;
        }
        let newStop = secondParam;
        let firstHalf = destinations.slice(0, index);
        let secondHalf = destinations.slice(index);
        destinations = firstHalf + newStop + secondHalf;
        console.log(destinations);

        break;
      case `Remove Stop`:
        let firstIndex = Number(firstParam);
        let lastIndex = Number(secondParam);
        if (!destinations[firstIndex] || !destinations[lastIndex]) {
          console.log(destinations);
          break;
        }
        let toRemove = destinations.slice(firstIndex, lastIndex + 1);
        destinations = destinations.replace(toRemove, "");
        console.log(destinations);

        break;
      case `Switch`:
        let oldDestination = firstParam;
        let newDestination = secondParam;
        let pattern = new RegExp(oldDestination, `g`);
        destinations = destinations.replace(pattern, newDestination);

        console.log(destinations);
        break;
    }

    currentLine = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
worldTour([
  "Hawai::Cyprys-Greece::Bulgaria",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Haw:Bulgaria",
  "Travel",
]);
