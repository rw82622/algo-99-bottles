function bottleSong(number) {
  // Write your code here!
  let num = number;
  function bottle(number) {
    if (number == 0) {
      return console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, ${num} bottle${
        number > 1 ? "s" : ""
      } of beer on the wall.`);
    } else {
      console.log(
        `${number} bottle${
          number > 1 ? "s" : ""
        } of beer on the wall, ${number} bottle${number > 1 ? "s" : ""} of beer.
Take one down and pass it around, ${
          number - 1 >= 1 ? number - 1 : "no more"
        } bottle${number - 1 == 1 ? "" : "s"} of beer on the wall.        `
      );
      return bottle(number - 1);
    }
  }
  bottle(number);
}

bottleSong(3);
