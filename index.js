const cardList = document.querySelector('.cardList');

buildBoard();
function addCard(value) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    console.log(card)
    cardList.appendChild(card);
    console.log(cardList);
}
function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}


