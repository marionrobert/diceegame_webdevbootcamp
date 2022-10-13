const button = document.querySelector('button');
var imagePlayer1 = document.querySelector(".img1");
var imagePlayer2 = document.querySelector(".img2");

const all_images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var scorePlayer1 = Math.floor(Math.random()*6)
var scorePlayer2 = Math.floor(Math.random()*6)

button.addEventListener('click', event => {
  var scorePlayer1 = Math.floor(Math.random()*6)
  var scorePlayer2 = Math.floor(Math.random()*6)
  
  imagePlayer1.setAttribute("src", all_images[scorePlayer1]);
  imagePlayer2.setAttribute("src", all_images[scorePlayer2]);

  if (scorePlayer1 === scorePlayer2) {
    document.querySelector("h1").innerHTML = "It's a draw!"
  } else if (scorePlayer1 > scorePlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
  } else {
    document.querySelector("h1").innerHTML = "Player 2  wins!"
  }
});
