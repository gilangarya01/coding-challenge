function squareDigits(num) {
  return Number(
    Array.from(String(num), Number)
      .map((e) => e * e)
      .join("")
  );
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
