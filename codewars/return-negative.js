function makeNegative(num) {
  return -Math.abs(num);
}

console.log(makeNegative(42), -42);
console.log(makeNegative(1), -1);
console.log(makeNegative(-5), -5);
console.log(makeNegative(0), 0);
console.log(makeNegative(0.12), -0.12);
