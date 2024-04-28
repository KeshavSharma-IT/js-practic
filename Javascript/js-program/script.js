var n = 10000;
function isPrime(n) {
  console.log(`The prime numbers between 2 and ${n} are:`);

  // looping from lowerNumber to higherNumber
  for (let i = 2; i < n; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}
let start = Date.now();
isPrime(n);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

/////////////with square root function
function isPrime(n) {
  console.log(`The prime numbers between 2 and ${n} are:`);

  // looping from lowerNumber to higherNumber
  for (let i = 2; i < Math.sqrt(n); i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}
let start_1 = Date.now();
isPrime(n);
let timeTaken_1 = Date.now() - start_1;
console.log("Total time taken : " + timeTaken_1 + " milliseconds");
