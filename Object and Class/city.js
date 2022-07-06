function city(myCity) {
  for (let key of Object.keys(myCity)) {
    console.log(`${key} -> ${myCity[key]}`);
  }
}
city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
