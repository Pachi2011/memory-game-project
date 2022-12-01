class Timer {
  constructor(cardArray) {
    this.currentTime = 5;
    this.intervalId = null;
    this.cardArray = cardArray;
  }

  startTimer(printFunction) {
    this.intervalId = setInterval(() => {
      this.currentTime--;
      if (printFunction) {
        printFunction();
      }

      if (this.currentTime === 0) {
        console.log("timer is 0");

        clearInterval(this.intervalId);
        this.showQuestion();
        this.changeImgSrc();
      }
    }, 1000);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  showQuestion() {
    let newQuestion = new Question(this.cardArray);

    newQuestion.renderQuestion();
  }

  changeImgSrc(){

    let getAllCards = document.querySelectorAll(".memoryCard")

    
    let getAllCardsArray = Array.from(getAllCards);

    const faceDownCardArray = getAllCardsArray.map((item) => {

      let cardImg = item.firstChild;

      cardImg.src = "./images/ironhackLogo.png";
      // let card = new Card(item.image, item.name);

      // card.renderCard();
          
    console.log(cardImg);

    
  });

  }

}
