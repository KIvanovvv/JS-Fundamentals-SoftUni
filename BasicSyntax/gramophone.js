function gramophone(band, album, song) {
  let res = (album.length * band.length * song.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(res / 2.5)} times.`);
}
gramophone("Rammstein", "Sehnsucht", "Engel");
