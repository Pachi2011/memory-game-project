window.onload = function () {
  document.getElementById("startBtn").onclick = function () {
    startGame();
  };

  function startGame() {
    const myGame = new Game();
    myGame.init();
  }
};
