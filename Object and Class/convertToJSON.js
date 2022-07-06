function convertToJSON(name, lastName, hairColor) {
  let myObj = {
    name,
    lastName,
    hairColor,
  };
  let objToJson = JSON.stringify(myObj);
  console.log(objToJson);
}
convertToJSON("George", "Jones", "Brown");
