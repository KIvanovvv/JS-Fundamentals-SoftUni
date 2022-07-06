function movies(commands) {
  let moviesArr = [];
  for (let el of commands) {
    if (el.includes(`addMovie`)) {
      let name = el.replace("addMovie ", "");
      moviesArr.push({ name });
    } else if (el.includes("directedBy")) {
      let [name, director] = el.split(" directedBy ");
      moviesArr.forEach((movie) => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    } else if (el.includes(`onDate`)) {
      let [name, date] = el.split(" onDate ");
      moviesArr.forEach((movie) => {
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  }
  moviesArr.forEach((movie) => {
    if (movie.name && movie.date && movie.director) {
      let output = JSON.stringify(movie);
      console.log(output);
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
