function lift(input) {
  let peopleInQueue = Number(input.shift());
  let liftCurrentState = input.shift().split(" ").map(Number);

  for (let i = 0; i < liftCurrentState.length; i++) {
    let peopleToPush = 4 - liftCurrentState[i];
    if (peopleToPush >= peopleInQueue) {
      peopleToPush = peopleInQueue;
    }
    peopleInQueue -= peopleToPush;
    if (peopleToPush <= 0) {
      continue;
    }
    liftCurrentState[i] = peopleToPush + liftCurrentState[i];

    if (peopleInQueue == 0) {
      console.log(`The lift has empty spots!`);
      console.log(liftCurrentState.join(" "));
      break;
    }
  }
  if (peopleInQueue > 0) {
    console.log(
      `There isn't enough space! ${peopleInQueue} people in a queue!`
    );
    console.log(`${liftCurrentState.join(" ")}`);
  }
}
lift(["20", "0 2 0"]);
