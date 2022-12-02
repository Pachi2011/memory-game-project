class Question {
  constructor(cardArray) {
    this.cardArray = cardArray;
  }

  renderQuestion(randomizedNameLabel) {
    const questionString = `Where's the ${randomizedNameLabel} card?`;

    console.log(randomizedNameLabel);

    const para = document.getElementById("questionContainer");
    para.innerHTML = questionString;

    document.body.appendChild(para);
  }

  randomizedItem() {
    const randomIndex = Math.floor(Math.random() * this.cardArray.length);

    const randomizedItem = this.cardArray[randomIndex];

    return randomizedItem;
  }
}
