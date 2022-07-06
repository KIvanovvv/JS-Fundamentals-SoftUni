function coverToObject(jsonData) {
  let myObj = JSON.parse(jsonData);

  for (let key of Object.keys(myObj)) {
    console.log(`${key}: ${myObj[key]}`);
  }
}
coverToObject('{"name": "George", "age": 40, "town": "Sofia"}');
