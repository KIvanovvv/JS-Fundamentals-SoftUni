function destinationMaper(input) {
  let pattern = /([\=|\/])(?<destination>[A-Z][A-Z|a-z]{2,})\1/g;
  let found;
  let points = 0;
  let toGo = [];
  while ((found = pattern.exec(input)) !== null) {
    let destination = found.groups.destination;
    toGo.push(destination);
    points += destination.length;
  }

  console.log(`Destinations: ${toGo.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
destinationMaper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
