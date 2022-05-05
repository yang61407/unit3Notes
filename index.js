const cardList = document.querySelector( '.cardList');

addCard( vaule: 'test');

function addCard(value){
    let card = document.createElements( 'div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    card.appendChild(card);

}