// console.log(me);
// console.log(job);
// console.log(year);

// var me = "keshav";
// let job = "software";
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// if (!numProducts) deletShoppingCart();

// const numProducts = 10;

// function deletShoppingCart() {
//   console.log("all products deleted!");
// }

///this keyword

// console.log(this);

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };
// calcAge(1997);

// const calcAgeArrow = (birthyear) => {
//   console.log(2022 - birthyear);
//   console.log(this);
// };
// calcAgeArrow(1997);

// const keshav = {
//   year: 1998,
//   calcAge: function () {
//     console.log(2022 - this.year);
//   },
// };
// keshav.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = keshav.calcAge;
// matilda.calcAge();

// const keshav = {
//   firstName: "keshav",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
//   //it is undifine because thisin arrow reprecent window object but keshav is block code not globel
// };

// keshav.greet();

// const keshav_ = {
//   firstName: "keshav",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
//   //it work here because function expression has this keyword
// };

// keshav_.greet();

//premetive and refrence tipe

//premetive type
let lastname = "varma";
let oldLastname = lastname;
lastname = "sharma";

console.log(lastname);
console.log(oldLastname);
//each valye is saved in seprate memory in stack

//refrance type
const keshav = {
  firstName: "keshav",
  lastname: "sharma",
  age: 27,
};
const keshav_ = keshav;
keshav_.lastname = "ambani";

// referance type point toward same memory in heap
console.log(keshav);
console.log(keshav_);

///copying object

const ajay = {
  firstName: "ajay",
  lastname: "sharma",
  age: 27,
  family: ["Keshav", "aman"],
};

// Object.assign is only work in first level  but object inside object will not be change as first
const ajay2 = Object.assign({}, ajay);
ajay2.lastname = "varma";
ajay2.family.push("rohan");
ajay2.family.push("mohan");

// JSON.parse(JSON.stringify()) it can copy to any level
const ajay3 = JSON.parse(JSON.stringify(ajay));
ajay3.lastname = "pal";
ajay3.family.push("john");
ajay3.family.push("kon");
console.log(ajay);
console.log(ajay2);
console.log(ajay3);
