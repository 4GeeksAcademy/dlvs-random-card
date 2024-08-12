/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardNumber = [
    "Ace",
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
  const randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  const icons = ["♦", "♥", "♠", "♣"];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];

  document.querySelector("#top-left-icon").textContent = randomIcon;
  document.querySelector("#center-number").textContent = randomCardNumber;
  document.querySelector("#bottom-right-icon").textContent = randomIcon;
};
