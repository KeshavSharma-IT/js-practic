// var isPalindrome = function (x) {
//   var r;
//   var sum = 0;
//   var temp = x;
//   console.log(temp);

//   while (x > 0) {
//     r = x % 10;

//     sum = sum * 10 + r;
//     x = Math.floor(x / 10);
//   }

//   if (temp == sum) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var num = isPalindrome(121);

// function PalindromeNum(x) {
//   //   var rev = x.toString().split("").reverse();
//   //   console.log(rev);
//   var rev = x.toString().split("").reverse().join("");
//   console.log(x);
//   if (x == rev) {
//     console.log("yes it is a Palindrom num");
//   } else {
//     console.log("no it is not a Palindrom num");
//   }
// }
// PalindromeNum(121);
// PalindromeNum(1001);
// PalindromeNum("madam");

// function fibonacci(num) {
//   var x = 0;
//   var y = 1;
//   var z;
//   var i = 2;
//   while (i < num) {
//     z = x + y;
//     x = y;
//     y = z;

//     i = i + 1;
//   }
//   return y;
// }

// var num = 3;
// answer = fibonacci(num);

// console.log(" Fibonacci series: ", answer);

// var fib = function (n) {
//   let n1 = 0;
//   let n2 = 1;
//   let sum = 0;
//   let i = 0;
//   for (i = 2; i <= n; i++) {
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
//   }
//   return n2;
// };

// console.log(fib(7));

//leetcode
// var fib = function (n) {
//   let n1 = 0;
//   let n2 = 1;
//   let sum = 0;
//   let i = 0;
//   if (n == 0) {
//     return n;
//   } else if (n == 1) {
//     return n;
//   } else {
//     for (i = 2; i <= n; i++) {
//       sum = n1 + n2;
//       n1 = n2;
//       n2 = sum;
//     }
//   }
//   return n2;
// };
// console.log(fib(7));

//factorial
// function fact(n) {
//   let factr = 1;
//   if (n == 1 || n == 0) {
//     console.log(n);
//     return 1;
//   } else {
//     for (let i = n; i >= 1; i--) {
//       factr *= i;
//     }
//     console.log(factr);
//   }
// }
// fact(6);
// fact(5);
// fact(10);

//Roman to integer
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var romanToInt = function (s) {
  const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = Roman[s[i]];
    const next = Roman[s[i + 1]];
    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }
  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("XIII"));
console.log(romanToInt("LV"));
