function songs(input) {
  let totalSongs = input.shift();
  let finalCommand = input.pop();

  class song {
    constructor(typeList, name, time) {
      (this.typeList = typeList), (this.name = name), (this.time = time);
    }
  }
  let songArr = [];
  for (let el of input) {
    let inputLine = el.split("_");
    let type = inputLine[0];
    let name = inputLine[1];
    let time = inputLine[2];
    let mySong = new song(type, name, time);
    songArr.push(mySong);
  }
  for (let el of songArr) {
    if (el.typeList === finalCommand) {
      console.log(el.name);
    } else if (finalCommand === "all") {
      console.log(el.name);
    }
  }
}
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
