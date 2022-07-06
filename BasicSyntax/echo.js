function echo(input) {
  let res = typeof input;
  console.log(res);
  console.log(
    res == `string` || res == `number`
      ? input
      : `Parameter is not suitable for printing`
  );
}
echo("Hello, JavaScript!");
echo(18);
echo(null);
