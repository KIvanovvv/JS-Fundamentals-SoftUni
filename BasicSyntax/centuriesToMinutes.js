function convert(centurie) {
  let years = centurie * 100;
  let days = Math.floor(years * 365.2422);
  let hours = days * 24;
  let minutes = hours * 60;

  console.log(
    `${centurie} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}
convert(1);
//1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
