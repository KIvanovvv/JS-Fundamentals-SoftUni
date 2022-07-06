function classLaptop() {
  class Laptop {
    constructor(info, quality, price) {
      (this.info = info),
        (this.isOn = false),
        (this.quality = quality),
        (this.price = 800 - this.info.age * 2 + this.quality * 0.5);
    }

    turnOn() {
      this.isOn = true;
      this.quality -= 1;
      return (this.price = 800 - this.info.age * 2 + this.quality * 0.5);
    }
    turnOff() {
      this.isOn = false;
      this.quality -= 1;
      return (this.price = 800 - this.info.age * 2 + this.quality * 0.5);
    }
    showInfo() {
      let information = JSON.stringify(this.info);
      return information;
    }
  }

  let info = {
    producer: "Lenovo",

    age: 1,
    brand: "Legion",
  };

  let laptop = new Laptop(info, 10);

  laptop.turnOn();

  console.log(laptop.showInfo());

  laptop.turnOff();

  laptop.turnOn();

  laptop.turnOff();
  console.log(laptop.isOn);
}
classLaptop();
