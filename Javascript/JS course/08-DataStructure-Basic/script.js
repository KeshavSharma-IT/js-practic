// const restaurant = {
//   name: "hotspot pizza",
//   location: "delhi",
//   categories: ["italian", "pizzeria", "vegetarian"],
//   startmenu: ["forcaccia", "bruschetta", "garlicbred", "capresse"],
//   mainMenu: ["pizza", "pasta", "risotto"],
//   order: function (starterIndex, Mainindex) {
//     return [this.startmenu[starterIndex], this.mainMenu[Mainindex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a);
// console.log(b);
// console.log(c);

// Array destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const [first1, third] = restaurant.startmenu;
// console.log(first1, third);

//switching value of two no
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(secondary, main);

//switching value of two no by destructuring

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// console.log(nested[2]);
// console.log(nested[2][1]);

//or we can do with destructuring
// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

//defalut value
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

//object destructuring

const restaurant = {
  name: "hotspot pizza",
  location: "delhi",
  categories: ["italian", "pizzeria", "vegetarian"],
  startmenu: ["forcaccia", "bruschetta", "garlicbred", "capresse"],
  mainMenu: ["pizza", "pasta", "risotto"],

  order: function (starterIndex, Mainindex) {
    return [this.startmenu[starterIndex], this.mainMenu[Mainindex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderDelivery2: function ({ starterIndex, Mainindex, time, address }) {
    console.log(
      `Order recives ${this.startmenu[starterIndex]} and ${this.mainMenu[Mainindex]} will be deliver to ${address} at ${time}`
    );
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//asssigning default fakue in case it is not in object
const { menu = [], startmenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: "22:30",
  address: "delhi",
  Mainindex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery2({
  time: "22:30",
  address: "delhi",
  Mainindex: 2,
  starterIndex: 2,
});

//spread oprator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

