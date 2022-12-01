class Card {
  constructor(imageSrc, name) {
    this.imageSrc = imageSrc;
    this.name = name;
  }

  renderCard() {
    const cardContainer = document.querySelector("#cardContainer");
    const memoryCardDiv = document.createElement("div");
    memoryCardDiv.innerHTML += `<img src=${this.imageSrc} style = "height: 200px; width: 200px;" />`;
    memoryCardDiv.classList.add("memoryCard");
    cardContainer.appendChild(memoryCardDiv);
  }

  //to do: compare the name of src to name of question
}
