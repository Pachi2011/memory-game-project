class Card{

    constructor(imageSrc, name){

        this.imageSrc = imageSrc
        this.name = name
    }


    renderCard(){

        // const cards = document.querySelectorAll('.memoryCard');

        const cardContainer = document.querySelector('#cardContainer');
        const memoryCardDiv = document.createElement('div');
        memoryCardDiv.innerHTML += `<img src=${this.imageSrc} style = "height: 200px; width: 200px;" />`  ;
      

             cardContainer.appendChild(memoryCardDiv);
    }

    

    
}