function adAstra(input) {
  let pattern =
    /(#|\|)(?<product>[A-Za-z\s]+)\1(?<expire>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let valid;
  let totalCalories = 0;
  while ((valid = pattern.exec(input)) !== null) {
    totalCalories += Number(valid.groups.calories);
  }
  let daysToSurvive = totalCalories / 2000;

  console.log(
    `You have food to last you for: ${Math.floor(daysToSurvive)} days!`
  );
  while ((valid = pattern.exec(input)) !== null) {
    let product = valid.groups.product;
    let date = valid.groups.expire;
    let calories = valid.groups.calories;
    console.log(
      `Item: ${product}, Best before: ${date}, Nutrition: ${calories}`
    );
  }
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
