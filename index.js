// index.js
document.addEventListener("DOMContentLoaded", function () {
    const diceImages = [
      "dice1.png",
      "dice2.png",
      "dice3.png",
      "dice4.png",
      "dice5.png",
      "dice6.png",
    ];
  
    // Function to get a random number between 1 and 6 (inclusive)
    function getRandomNumber() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    // Function to change the dice image for Player 1 and Player 2
    function changeDiceImage() {
      const randomNumber1 = getRandomNumber();
      const randomNumber2 = getRandomNumber();
  
      const img1 = document.querySelector(".img1");
      const img2 = document.querySelector(".img2");
  
      img1.setAttribute("src", `images/${diceImages[randomNumber1 - 1]}`);
      img2.setAttribute("src", `images/${diceImages[randomNumber2 - 1]}`);
    }
  
    const refreshButton = document.querySelector("h1");
    refreshButton.addEventListener("click", changeDiceImage);
  
    // Initial dice roll on page load
    changeDiceImage();
  });
  

