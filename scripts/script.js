window.onload = function() {
    document.getElementById("startBtn").onclick = function() {
        startGame();
    };

    function startGame() {
        const myGame = new Game();
        myGame.init();
        
    }
};

//onclick show cards faced up for a few seconds (setTimer) showing photos of each card and number of turns (turns left : 3) and or countdown timer and ask first question (eg."where's the watermelon card?")

const flippedCard = function() {
    ("startBtn").onclick = function() {
       
        document.getElementsByClassName("cardContainer").classList.toggle('<img src=./images/ironhackLogo.png style = "height: 100px; width: 100px;" />`');
        // .frontCard,
        // .flippedCard {
        //   width: 100%;
        //   height: 100%;
        //   padding: 20px;
        //   position: absolute;
        //   border-radius: 4px;
        //   background: #adccf0ba;
        //   backface-visibility: hidden;

        // }
        //  .memoryCard.flippedCard {
        //  transform: rotateY(180deg);
        // .memoryCard:active {
        //     transform: scale(0.97);
        //     transition: transform .1s;
        //   }
       
        //   .memoryCard.flippedCard {
        //    transform: rotateY(180deg);
        //  }
}

  };


const cards = document.querySelectorAll('.memoryCard');


