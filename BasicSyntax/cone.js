function cone(radius, height) {
  let volume = (height * Math.PI * Math.pow(radius, 2)) / 3;
  let length = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * length;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3.3, 7.8);
