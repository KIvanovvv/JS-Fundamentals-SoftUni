function matchPhoneNumber(numbers) {
  let pattern = /\+359([ |-])2{1}\1\d{3}\1\d{4}\b/g;
  let match = pattern.exec(numbers);
  let res = [];
  while (match !== null) {
    res.push(match[0]);
    match = pattern.exec(numbers);
  }
  console.log(res.join(", "));
}
matchPhoneNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
