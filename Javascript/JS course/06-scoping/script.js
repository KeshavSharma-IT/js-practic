//1st
// function calAge(birthyear) {
//   const age = 2022 - birthyear;
//   console.log(firstName + " is " + age + " year old;");
//   return age;
// }
// const firstName = "keshav";
// calAge(1991);

//2nd
function calAge(birthyear) {
  const age = 2022 - birthyear;
  function printAge() {
    const output = `you are ${age} , born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var milenial = true;
      const firstName = "rohan";
      const str = `Oh, you are a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // it is accessable because var is global variable
    console.log(milenial);
    //outside block no accessable
    // console.log(str);

    console.log("add function is running and answer is= " + add(2, 3));
  }
  //add function is out of scope so it will through error
  //console.log("add function is running and answer is= " + add(2, 3));
  printAge();
  console.log(firstName + " is " + age + " year old!;");
  return age;
}
const firstName = "keshav";
calAge(1991);
//here milenial is out side its global or functional scope
console.log(milenial);
//not define in scope so it will through error
console.log(age);
printAge();
