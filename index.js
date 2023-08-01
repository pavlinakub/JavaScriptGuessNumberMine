"use strict";
// document.querySelector(".message").textContent = "";
// document.querySelector(".guessingNumber").textContent = "?";
document.querySelector(".guessingNumber").style.backgroundColor = "silver";
document.querySelector(".guessingNumber").style.color = "green";

document.querySelector(".writeNumber").min = 0;
document.querySelector(".writeNumber").max = 20;
let secret = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (string) {
  document.querySelector(".message").textContent = string;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".writeNumber").value);
  if (!guess) {
    displayMessage("Zadej cislo");
  } else if (score > 0) {
    if (guess === secret) {
      displayMessage("Hura trefil jsi se");
      if (highscore < score) {
        highscore = score;
      } else {
        highscore += score;
      }
      document.querySelector(".guessingNumber").textContent = secret;
      document.querySelector(".guessingNumber").style.backgroundColor = "green";
      document.querySelector(".guessingNumber").style.color = "black";
      document.querySelector(".highscore").textContent = highscore;
    } else if (guess < secret) {
      document.querySelector(".message").textContent = "Hadane cislo je vetsi";
      document.querySelector(".guessingNumber").style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess > secret) {
      document.querySelector(".message").textContent = "Hadane cislo je mensi";
      document.querySelector(".guessingNumber").style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (score === 0) {
    document.querySelector(".message").textContent = "Smula prohral jsi";
    document.querySelector(".guessingNumber").style.backgroundColor = "red";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 0;
  document.querySelector(".guessingNumber").textContent = "?";
  document.querySelector(".writeNumber").value = "";
  document.querySelector(".guessingNumber").style.backgroundColor = "silver";
  document.querySelector(".guessingNumber").style.color = "green";
});
