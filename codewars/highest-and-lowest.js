function highAndLow(numbers) {
  return `${Math.max.apply(Math, numbers.split(" "))} ${Math.min.apply(
    Math,
    numbers.split(" ")
  )}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log(highAndLow("1 2 3"), "3 1");
