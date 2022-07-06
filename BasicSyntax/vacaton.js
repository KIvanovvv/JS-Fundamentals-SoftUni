function vacation(num, type, day) {
  let totalPrice = 0;
  if (day === "Friday") {
    switch (type) {
      case "Students":
        totalPrice = num * 8.45;
        if (num >= 30) {
          totalPrice *= 0.85;
        }
        break;
      case "Business":
        if (num >= 100) {
          num -= 10;
        }
        totalPrice = num * 10.9;
        break;
      case "Regular":
        totalPrice = num * 15;
        if (num >= 10 && num <= 20) {
          totalPrice *= 0.95;
        }
        break;
    }
  } else if (day === "Saturday") {
    switch (type) {
      case "Students":
        totalPrice = num * 9.8;
        if (num >= 30) {
          totalPrice *= 0.85;
        }
        break;
      case "Business":
        if (num >= 100) {
          num -= 10;
        }
        totalPrice = num * 15.6;
        break;
      case "Regular":
        totalPrice = num * 20;
        if (num >= 10 && num <= 20) {
          totalPrice *= 0.95;
        }
        break;
    }
  } else if (day === "Sunday") {
    switch (type) {
      case "Students":
        totalPrice = num * 10.46;
        if (num >= 30) {
          totalPrice *= 0.85;
        }
        break;
      case "Business":
        if (num >= 100) {
          num -= 10;
        }
        totalPrice = num * 16;
        break;
      case "Regular":
        totalPrice = num * 22.5;
        if (num >= 10 && num <= 20) {
          totalPrice *= 0.95;
        }
        break;
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
