//list object  Array name and image scr property

const cardArray = [
  { name: "books", image: "./images/image1.jpg" },
  { name: "sign life is now", image: "./images/image2.jpg" },
  { name: "man on the lake", image: "./images/image3.jpg" },
  { name: "watermelon", image: "./images/image4.jpg" },
  { name: "skull", image: "./images/image5.jpg" },
  { name: "female modal", image: "./images/image6.jpg" },
  { name: "green man", image: "./images/image7.jpg" },
  { name: "child drawing", image: "./images/image8.jpg" },
  { name: "female IT", image: "./images/image9.jpg" },
  { name: "emoji eggs", image: "./images/image10.jpg" },
];



class Game {
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
      let card = new Card(item.image, item.name);

      card.renderCard();
    });
  }

  clearBoard() {
    let getContainer = document.querySelector("#cardContainer");

    getContainer.innerHTML = "";
  }

  

  renderTimer() {
    let newTimer = new Timer(cardArray);

    newTimer.startTimer(printSeconds);

    console.log(newTimer.currentTime);

    function printSeconds() {
      const timerElement = document.getElementById("timer");
      timerElement.innerHTML = newTimer.getSeconds();
      console.log("printSeconds");
    }
  }
}
