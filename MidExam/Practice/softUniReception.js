function reception(input) {
  let totalPeoplePerHour = 0;
  let totalPeople = Number(input[3]);
  let workingHours = 0;
  let workingHoursWithBreak = 0;
  for (let i = 0; i < input.length - 1; i++) {
    totalPeoplePerHour += Number(input[i]);
  }
  workingHours = totalPeople / totalPeoplePerHour;

  for (let i = 1; i <= Math.ceil(workingHours); i++) {
    workingHoursWithBreak++;
    if (workingHoursWithBreak % 4 === 0) {
      workingHoursWithBreak++;
    }
  }
  console.log(`Time needed: ${workingHoursWithBreak}h.`);
}
reception(["3", "2", "5", "40"]);
