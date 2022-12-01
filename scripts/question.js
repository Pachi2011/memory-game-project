class Question {
  constructor(cardArray) {
    this.cardArray = cardArray;
  }

  renderQuestion() {
    const randomIndex = Math.floor(Math.random() * this.cardArray.length);

    const randomizeName = this.cardArray[randomIndex].name;

    const questionString = `Where's the ${randomizeName} card?`;

    console.log(randomizeName);
    // get element:
    const para = document.getElementById("questionContainer");
    para.innerHTML = questionString;

    // Append to body:
    document.body.appendChild(para);
  }
}
