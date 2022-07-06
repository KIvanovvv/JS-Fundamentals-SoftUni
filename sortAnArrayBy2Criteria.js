function sortBy2Criteria(input) {
  input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(input.join("\n"));
}
sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
