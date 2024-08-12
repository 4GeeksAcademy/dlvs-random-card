/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomCardNumber =
    cardNumber[Math.floor(Math.random() * cardNumber.length)];
  const icons = ["♦", "♥", "♠", "♣"];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  document.querySelector("#top-left-icon").textContent = randomIcon;
  document.querySelector("#center-number").textContent = randomCardNumber;
  document.querySelector("#bottom-right-icon").textContent = randomIcon;

  if (randomIcon === "♦" || randomIcon === "♥") {
    document.querySelector("#top-left-icon").style.color = "red";
    document.querySelector("#bottom-right-icon").style.color = "red";
  }
};

setInterval(function() {
  window.location.reload();
}, 5000);
