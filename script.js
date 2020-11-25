

document.getElementById("myBtn").addEventListener("click", function() {
  var randomNumber1 = Math.floor ( Math.random() * 6 ) + 1;  // dice from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png

var image1 = document.querySelectorAll("img")[0];  // image class tag at index 0 because we have 2 is accesed

image1.setAttribute("src", randomDiceImage);    // we set the image1 variable the set atribute src to random image.

var randomNumber2 = Math.floor ( Math.random() * 6 ) + 1;

var image2 = document.querySelectorAll("img")[1];   // image class tag at index 1 is accesed and random image will be produced

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

image2.setAttribute("src" , randomDiceImage2);

if ( randomNumber1 > randomNumber2 ) {      // if player 1 wins
  document.querySelector("h1").innerHTML = "Player 1 wins !!";
} else if ( randomNumber2 > randomNumber1 ) {   // if player 2 wins 
  document.querySelector("h1").innerHTML = "Player 2 wins!!"
} else {
  document.querySelector("h1").innerHTML = "Draw"
}
});