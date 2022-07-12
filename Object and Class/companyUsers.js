function companyUsers(input) {
  let companies = new Map();
  for (let line of input) {
    let [company, id] = line.split(" -> ");
    if (!companies.has(company)) {
      companies.set(company, new Set());
    }
    companies.get(company).add(id);
  }
  let sortedCompanies = Array.from(companies).sort(([k1, v1], [k2, v2]) => {
    return k1.localeCompare(k2);
  });
  for (let [k, v] of sortedCompanies) {
    console.log(k);
    for (let id of v) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
