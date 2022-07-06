function board(n) {
  let black = `  <span class="black"></span>`;
  let white = `  <span class="white"></span>`;
  let combo = [black, white, black, white, black, white, black, white, black];

  console.log(`<div class="chessboard">`);
  for (let i = 1; i <= n; i++) {
    console.log(` <div>`);
    for (let j = 0; j < n; j++) {
      if (i % 2 !== 0) {
        console.log(combo[j]);
      } else if (i % 2 === 0) {
        console.log(combo[j + 1]);
      }
    }
    console.log(` </div>`);
  }

  console.log(`</div>`);
}
board(5);
