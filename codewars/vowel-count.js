function getCount(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((e) => "aiueo".includes(e)).length;
}

console.log(getCount("abracadabra"), 5);
