window.onload = function () {
  document.getElementById("startBtn").onclick = function () {
    startGame();
  };

  function startGame() {
    const myGame = new Game();
    myGame.init();
  }
};


// game alert and restart button start()function
// compare id to ramdomizedName in question = add insde evverntloisten 
//alert correct or wrong deleten life if wrong win/lose factor