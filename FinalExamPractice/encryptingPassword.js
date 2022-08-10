function encyptingPassword(input) {
  let n = input.shift();
  let pattern =
    /([^\s]{1,})>(?<digits>\d{3})\|(?<lowercase>[a-z]{3})\|(?<uppercase>[A-Z]{3})\|(?<symbols>[^\<\>]{3})<\1/g;
  for (let i = 0; i < n; i++) {
    let line = input[i];
    let match = line.match(pattern);
    if (match === null) {
      console.log(`Try another password!`);
    } else {
      let valid = pattern.exec(line);
      let firstGroup = valid.groups.digits;
      let secondGroup = valid.groups.lowercase;
      let thirdGroup = valid.groups.uppercase;
      let fourthGroup = valid.groups.symbols;
      let pass = firstGroup + secondGroup + thirdGroup + fourthGroup;
      console.log(`Password: ${pass}`);
    }
  }
}
encyptingPassword([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);
