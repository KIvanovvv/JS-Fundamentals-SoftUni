function cats(catData) {
  class Cat {
    constructor(catName, catAge) {
      this.catName = catName;
      this.catAge = catAge;
    }
    meow() {
      console.log(`${this.catName}, age ${this.catAge} says Meow`);
    }
  }
  let allCats = [];
  for (let el of catData) {
    let cat = el.split(" ");
    let name = cat[0];
    let age = cat[1];
    let myCat = new Cat(name, age);
    allCats.push(myCat);
  }

  for (let cat of allCats) {
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
