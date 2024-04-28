// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "change by me";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 23;
// document.querySelector(".guess").value = 10;
// console.log(document.querySelector(".guess").value);

//starting code here

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
console.log(SecretNumber);
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "no number";
    displayMessage("no number");
  } else if (guess === SecretNumber) {
    // document.querySelector(".message").textContent = "Correct number";
    displayMessage("Correct number");
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector(".body").style.backgroundColor = "#0000FF";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > SecretNumber ? "Too High" : "Too low";
      displayMessage(guess > SecretNumber ? "Too High" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You loose the game";
      displayMessage("You loose the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start Guessing ....";
  displayMessage("Start Guessing ....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
