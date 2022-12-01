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



}
