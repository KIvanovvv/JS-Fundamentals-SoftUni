function login(input) {
  let pass = "";
  let username = input[0];
  let counter = 0;
  for (let i = username.length - 1; i >= 0; i--) {
    pass += username[i];
  }
  for (let i = 1; i < input.length; i++) {
    if (input[i] === pass) {
      console.log(`User ${username} logged in.`);
    } else {
      counter++;
      if (counter === 4) {
        console.log(`User ${username} blocked! `);
        return;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}
login(["Acer", "login", "go", "let me in", `asd`, "recA"]);
