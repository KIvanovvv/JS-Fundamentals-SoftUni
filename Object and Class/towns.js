function towns(townInfo) {
  let arrL = townInfo.length;
  let townObj = {};
  for (let i = 0; i < arrL; i++) {
    let townElements = townInfo[i].split(" | ");
    let name = townElements[0];
    let latitude = Number(townElements[1]);
    let longtitude = Number(townElements[2]);
    townObj.town = name;
    townObj.latitude = latitude.toFixed(2);
    townObj.longitude = longtitude.toFixed(2);

    console.log(townObj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
