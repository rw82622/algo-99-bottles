function bottleSong(number) {
  // Write your code here!
  for (let num = number; num >= 0; num--) {
    if (num >= 1) {
      console.log(
        `${num} bottle${num > 1 ? "s" : ""} of beer on the wall, ${num} bottle${
          num > 1 ? "s" : ""
        } of beer.
Take one down and pass it around, ${num - 1 >= 1 ? num - 1 : "no more"} bottle${
          num - 1 == 1 ? "" : "s"
        } of beer on the wall.        `
      );
    }
  }
  console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, ${number} bottle${
    number > 1 ? "s" : ""
  } of beer on the wall.`);
}

bottleSong(3);
