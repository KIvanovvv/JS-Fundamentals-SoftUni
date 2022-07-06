function formatGrade(grade) {
  let res = 0;
  let description = "";
  if (grade < 3) {
    res = 2;
    description = "Fail";
  } else if (grade < 3.5) {
    res = grade.toFixed(2);
    description = `Poor`;
  } else if (grade < 4.5) {
    res = grade.toFixed(2);
    description = `Good`;
  } else if (grade < 5.5) {
    res = grade.toFixed(2);
    description = `Very good`;
  } else if (grade >= 5.5) {
    res = grade.toFixed(2);
    description = `Excellent`;
  }
  console.log(`${description} (${res})`);
}
formatGrade(2.99);
formatGrade(3.0);
formatGrade(4.2);
formatGrade(4.59);
formatGrade(5.5);
