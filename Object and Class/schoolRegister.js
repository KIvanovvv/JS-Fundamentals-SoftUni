function schoolRegister(studentsArr) {
  let arrOfObj = [];

  studentsArr.forEach((el) => {
    let studentObj = {};
    let infoLine = el.split(" ");
    //console.log(infoLine);
    let name = infoLine[2];
    let nameArr = name.split("");
    nameArr.pop();
    let names = nameArr.join("");
    let grade = infoLine[4];
    let grades = "";
    if (grade.length == 2) {
      grades = grade[0];
    } else {
      grades = grade[0] + grade[1];
    }
    let avgScore = infoLine[10];
    studentObj.name = names;
    studentObj.grade = grades;
    studentObj.avgScore = avgScore;
    arrOfObj.push(studentObj);
    //console.log(studentObj);
  });
  let sortedArr = arrOfObj.sort((a, b) => {
    return a.grade - b.grade;
  });
  console.log(sortedArr[3]);
  let sortedNames;
  for (let el of arrOfObj) {
    console.log(el.grade);
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
