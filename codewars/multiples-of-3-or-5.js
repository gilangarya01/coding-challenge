function solution(number) {
  let test = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      test += i;
    }
  }
  return test;
}

console.log(solution(10), 23);
