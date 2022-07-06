function inventory(heroData) {
  let myHeroArr = [];

  heroData.forEach((infoLine) => {
    let [name, level, items] = infoLine.split(" / ");
    let currentHero = { name, level, items };
    myHeroArr.push(currentHero);
  });
  let sortedHeros = myHeroArr.sort((a, b) => {
    return a.level - b.level;
  });

  sortedHeros.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
inventory([
  "Isacc / 25 ",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
