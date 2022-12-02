class Card {
  constructor(imageSrc, name, randomizedQuestion, youWon, checkWinCondition) {
    this.imageSrc = imageSrc;
    this.name = name;
    this.randomizedQuestion = randomizedQuestion;
    this.youWon = youWon;
    this.checkWinCondition = checkWinCondition;
  }

  renderCard() {
    const cardContainer = document.querySelector("#cardContainer");
    const memoryCardDiv = document.createElement("div");
    memoryCardDiv.innerHTML += `<img src=${this.imageSrc} id = ${this.name} style = "height: 200px; width: 200px;" />`;
    memoryCardDiv.classList.add("memoryCard");
    function changeImgSrcBack(imageSrc) {
      let cardImg = memoryCardDiv.firstChild;

      console.log(imageSrc);

      cardImg.src = imageSrc;
    }
  memoryCardDiv.addEventListener("click", () => {
    
    let question = this.randomizedQuestion
    console.log("this is the randomizes question for cads.js", question.name)
    console.log("this.name", this.name)

    if (this.name === question.name) {

     alert("correct! You win press the restart button below to play again")
      
    }else{
      setTimeout(() => {

        let cardImg = memoryCardDiv.firstChild;

        cardImg.src = "./images/ironhackLogo.png";
        
      }, 3000);
      alert("wrong, you lose one life");
      console.log("you lose one life");
    }
    
    changeImgSrcBack(this.imageSrc)})
    cardContainer.appendChild(memoryCardDiv);
  }




}

