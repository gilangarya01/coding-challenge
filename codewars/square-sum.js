function squareSum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur * cur, 0);
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
