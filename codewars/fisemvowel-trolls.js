function disemvowel(str) {
  return str
    .split("")
    .filter((e) => !"aiueo".includes(e.toLowerCase()))
    .join("");
}

console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
);
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
