//list object  Array name and image scr property

const cardArray = [
  { name: "books", label: "Books", image: "./images/image1.jpg" },
  { name: "sign", label: "sign life is now",  image: "./images/image2.jpg" },
  { name: "man", label: "man on the lake", image: "./images/image3.jpg" },
  { name: "watermelon", label: "Watermelon", image: "./images/image4.jpg" },
  { name: "skull", label: "Skull", image: "./images/image5.jpg" },
  { name: "female", label: "female modal", image: "./images/image6.jpg" },
  { name: "green", label: "green man", image: "./images/image7.jpg" },
  { name: "child", label: "child drawing", image: "./images/image8.jpg" },
  { name: "female_IT", label: "female IT", image: "./images/image9.jpg" },
  { name: "emoji_eggs", label: "emoji eggs", image: "./images/image10.jpg" },
];





class Game {
  constructor(){
    //let newQuestion = new Question(this.cardArray);
   
    this.question = new Question(cardArray);
    this.randomizedQuestion =  this.question.randomizedItem();
    this.victory = false;
    this.lives = 3;
  }
  init() {
    this.clearBoard();
    this.renderAllCards();
    this.renderTimer();
   
  }

  renderAllCards() {
    function shuffleCards(array) {
      for (let i = 0; i <= array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let tempAarry = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = tempAarry;
      }
      return array;
    }

    const newCardArray = shuffleCards(cardArray).map((item) => { 
      

      let card = new Card(item.image, item.name, this.randomizedQuestion, this.youWon, this.checkWinCondition);

      card.renderCard();

      

    });
  }

  clearBoard() {
    let getContainer = document.querySelector("#cardContainer");

    getContainer.innerHTML = "";
  }

  

  renderTimer() {
    let newTimer = new Timer(cardArray, this.question, this.randomizedQuestion);

    newTimer.startTimer(printSeconds);

    console.log(newTimer.currentTime);

    function printSeconds() {
      const timerElement = document.getElementById("timer");
      timerElement.innerHTML = newTimer.getSeconds();
      console.log("printSeconds");
    }
  }

    youWon(){

      this.victory = true;
      

    }

    checkWinCondition(){

      if (this.victory) {

        alert("you Won the game!! game is going to restart");

        this.victory = false;
        this.lives = 3;
        this.init();
      }
    }
}


function restartGame(){
  location.reload()
}