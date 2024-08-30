function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-42), "Even");
console.log(evenOrOdd(-7), "Odd");
console.log(evenOrOdd(0), "Even");
