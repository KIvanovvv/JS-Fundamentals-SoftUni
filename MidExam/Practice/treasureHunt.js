function tresureHunt(commands) {
  if (commands.length < 2) {
    return;
    // console.log(`Failed treasure hunt.`);
  } else {
    let stash = commands.shift().split("|");
    let command;
    let stolenItems = [];
    let tresureScore = 0;
    let itemCout = 0;
    for (let el of commands) {
      if (el === `Yohoho!`) {
        break;
      }
      commandLine = el.split(" ");
      command = commandLine.shift();
      switch (command) {
        case `Loot`:
          for (let el of commandLine) {
            if (!stash.includes(el)) {
              stash.unshift(el);
            }
          }
          break;
        case `Drop`:
          let i = Number(commandLine[0]);
          if (i < 0 || i >= stash.length) {
            continue;
          }
          let currentEl;
          let currentelSting;
          currentEl = stash.splice(commandLine[0], 1);
          currentelSting = currentEl.join(" ");
          stash.push(currentelSting);
          break;
        case `Steal`:
          stolenItems = stash.splice(-commandLine[0]);
          break;
      }
    }
    if (stolenItems.length > 0) {
      console.log(stolenItems.join(", ")); // ?
    }
    for (let i = 0; i < stash.length; i++) {
      itemCout++;
      tresureScore += Number(stash[i].length);
    }
    tresureScore = tresureScore / itemCout;
    if (!stash.length == 0 || !stash === "") {
      console.log(
        `Average treasure gain: ${tresureScore.toFixed(2)} pirate credits.`
      );
    } else {
      console.log(`Failed treasure hunt.`);
    }
  }
}
tresureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",

  "Loot Wood Gold Coins",

  "Loot Silver Pistol",

  "Drop 3",

  "Steal 1",

  "Yohoho!",
]);
