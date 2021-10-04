var randomNumber1 = Math.floor(Math.random() * 6) + 1; //gerenating random numbers up to 1 to six
var randomImageSource = "images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0]; //we just set the first query as IMG;
img1.setAttribute("src", randomImageSource);

//Now, we set things up for the dice 2 -- 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

//Victory - draw - defeat cases
//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  