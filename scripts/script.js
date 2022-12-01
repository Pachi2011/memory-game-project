window.onload = function () {
  document.getElementById("startBtn").onclick = function () {
    startGame();
  };

  function startGame() {
    const myGame = new Game();
    myGame.init();
  }
};

//onclick show cards faced up for a few seconds (setTimer) showing photos of each card and number of turns (turns left : 3) and or countdown timer and ask first question (eg."where's the watermelon card?")
