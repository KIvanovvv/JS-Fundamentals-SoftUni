function matchName(names) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
  let match = pattern.exec(names);
  let res = [];

  while (match !== null) {
    res.push(match[0]);
    match = pattern.exec(names);
  }
  console.log(res.join(" "));
}
matchName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);
