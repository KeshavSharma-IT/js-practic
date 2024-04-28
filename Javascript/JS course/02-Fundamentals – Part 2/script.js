/*
"use strict";

let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("i can  drive");

const interface = "audio";

//function declaration
function logger() {
  console.log("keshav");
}
logger();

function FruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = FruitProcessor(5, 0);
console.log(applejuice);
//function expression
const age = function calcAge(birthyear) {
  return 2022 - birthyear;
};
console.log(age);
console.log(age(1997));

//arrow function
const calcAge2 = (birthyear) => 2022 - birthyear;
console.log(calcAge2);
console.log(calcAge2(1997));

const yearUntilRetirement = (birthyear) => {
  const age = 2022 - birthyear;
  const retiremnt = 65 - age;
  return retiremnt;
};
yearUntilRetirement(1997);
console.log(yearUntilRetirement(1997));

const yearUntilRetirement1 = (birthyear, firstname) => {
  const age = 2022 - birthyear;
  const retiremnt = 65 - age;
  return `${firstname} retires in ${retiremnt} year`;
};
console.log(yearUntilRetirement1(1997, "keshav"));

//function calling othrt function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function FruitProcessor(apples, orange) {
  const apples_pieces = cutFruitPieces(apples);
  const oranges_pieces = cutFruitPieces(orange);
  const juice = `Juice with ${apples}  apples in ${apples_pieces} pieces and ${orange} orages in ${oranges_pieces} pieces.`;
  return juice;
}
FruitProcessor(2, 3);
console.log(FruitProcessor(2, 3));

const calcAge = function (birthyear) {
  return 2022 - birthyear;
};

const yearUntilRetirement1 = function (birthyear, firstname) {
  const age = calcAge(birthyear);
  const retiremnt = 65 - age;
  if (retiremnt > 0) {
    return `${firstname} retires in ${retiremnt} year`;
  } else {
    return -1;
  }
  // return `${firstname} retires in ${retiremnt} year`;
};
console.log(yearUntilRetirement1(1997, "keshav"));
console.log(yearUntilRetirement1(1950, "manish"));

//array
// const friend1 = "keshav";
// const friend2 = "dhiru";
// const friend3 = "adi";

const friends = ["keshav", "adi", "dhiru"];
console.log(friends);

const year = new Array(1997, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 2]);

friends[2] = "mohit";
console.log(friends);

const firstname = "keshav";
const myself = [firstname, "sharma", 2022 - 1997, friends];
console.log(myself);

const calcage = function (birthyear) {
  return 2022 - birthyear;
};
console.log(calcage(year[0]));
console.log(calcage(year[1]));
console.log(calcage(year[2]));

const ages = [calcage(year[0]), calcage(year[1]), calcage(year[2])];
console.log(ages);

friends.push("jay");
console.log(friends);
friends.pop();
console.log(friends);
friends.unshift("john");
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("keshav"));
console.log(friends.includes("mohitl"));

//objects

const keshav = {
  firstname: "keshav",
  lastname: "sharma",
  age: 2022 - 1997,
  job: "software developer",
  friends: ["adi", "dhiru", "rohan"],
};
console.log(keshav);
console.log(keshav.lastname);
const intresteIn = prompt(
  "what do u want to lnow abput keshav choose firstname,lastname ,age,job,friend"
  );
  console.log(keshav[intresteIn]);

  keshav.locatyion = "delhi";
  keshav["facebook"] = "@keshavsharma";
  console.log(keshav);
  
  const keshav = {
    firstname: "keshav",
    lastname: "sharma",
    birthyear: 1997,
    age: 2022 - 1997,
    job: "software developer",
    friends: ["adi", "dhiru", "rohan"],
  hasDrivingLicence: true,

  // calAge: function () {
  //   return 2022 - this.birthyear;
  // },
  calAge: function () {
    this.age = 2025 - this.birthyear;
    return this.age;
  },
  getSummary: function () {
    console.log(
      `${this.firstname} is a ${this.age} year old ${this.job} and he has  ${
        this.hasDrivingLicence ? "a" : "no"
      } driving License. `
    );
  },
};
console.log(keshav.age);
console.log(keshav.calAge());
console.log(keshav.age);
console.log(keshav["calAge"](1991));
console.log(keshav.getSummary());

//loops
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition is ${rep}`);
}

//looping through array
const keshav = ["keshav", "sharma", 25, "delhi", ["adi", "dhiru", "mohit"]];
for (let i = 0; i < keshav.length; i++) {
  console.log(keshav[i], typeof keshav[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

//contimue and braek

const keshav = ["keshav", "sharma", 25, "delhi", ["adi", "dhiru", "mohit"]];
for (let i = 0; i < keshav.length; i++) {
  if (typeof keshav[i] !== "string") continue;
  console.log(keshav[i], typeof keshav[i]);
}

for (let i = 0; i < keshav.length; i++) {
  if (typeof keshav[i] !== "string") break;
  console.log(keshav[i], typeof keshav[i]);
}

//loop backward
const keshav = ["keshav", "sharma", 25, "delhi", ["adi", "dhiru", "mohit"]];
for (let i = keshav.length - 1; i >= 0; i--) {
  console.log(keshav[i], typeof keshav[i]);
}

//loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------starting exercise ${exercise} `);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} :Rep ${rep}`);
  }
}

//while loop
let rep = 1;
while (rep <= 10) {
  console.log(`lifting weight rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  
  if (dice === 6) console.log(`loop is about to end`);
}

*/
