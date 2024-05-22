document.addEventListener('DOMContentLoaded', function () {
    const memoryGameContainer = document.getElementById('memoryGame');
    const fruits = ['orange', 'apple', 'pear', 'pineapple', 'kiwi', 'avocado'];
    let flippedCards = [];
    const cards = fruits.concat(fruits).sort(() => 0.5 - Math.random());

    cards.forEach(function (fruit) {
        const card = createCard('Images/card.jpg', getImageUrl(fruit), fruit);
        card.addEventListener('click', function () {
            if (!card.classList.contains('matched') && !card.classList.contains('flipped') && flippedCards.length < 2) {
                card.classList.toggle('flipped');
                flippedCards.push(card);
                if (flippedCards.length === 2) {
                    const [firstCard, secondCard] = flippedCards;
                    if (areCardsMatching(firstCard, secondCard)) {
                        firstCard.classList.add('matched');
                        secondCard.classList.add('matched');
                        flippedCards = [];
                        if (allCardsMatched()) {
                            // Alla kort matchade
                        }
                    } else {
                        setTimeout(() => {
                            flipCardBack(firstCard);
                            flipCardBack(secondCard);
                            flippedCards = [];
                        }, 1000);
                    }
                }
            }
        });
        memoryGameContainer.appendChild(card);
    });
});

function createCard(frontImageUrl, backImageUrl, altText) {
    const card = document.createElement('div');
    card.className = 'random-div';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = createCardSide(frontImageUrl, 'Card Front');
    const cardBack = createCardSide(backImageUrl, altText);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}

function createCardSide(imageUrl, altText) {
    const side = document.createElement('div');
    side.className = 'card-' + (altText === 'Card Front' ? 'front' : 'back');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = altText;
    side.appendChild(img);
    return side;
}

function getImageUrl(fruit) {
    // Funktion för att returnera bild-URL baserat på fruktnamn
    return 'Images/' + fruit + '.jpg';
}

function areCardsMatching(card1, card2) {
    return card1.querySelector('.card-back img').alt === card2.querySelector('.card-back img').alt;
}

function flipCardBack(card) {
    card.classList.remove('flipped');
}

function allCardsMatched() {
    return document.querySelectorAll('.random-div:not(.matched)').length === 0;
}





/*

// main.js
document.addEventListener('DOMContentLoaded', function () {
    const memoryGameContainer = document.getElementById('memoryGame');
    const fruits = ['orange', 'apple', 'pear', 'pineapple', 'kiwi', 'avocado'];
    let flippedCards = [];
    const cards = [...fruits, ...fruits];
    cards.sort(() => 0.5 - Math.random());

    // Blanda korten slumpmässigt
    cards.sort(function () {
        return 0.5 - Math.random();
    });

    // Skapa korten och lägg till dem i behållaren
    cards.forEach(function (fruit) {
        const card = document.createElement('div');
        card.className = 'random-div';

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        //Kortens framsida skapas av bilden card.jpg  
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';

        const imgFront = document.createElement('img');
        imgFront.src = 'Images/card.jpg'; //byt ut med sökvägen till din främre sidobild 
        imgFront.alt = 'Card Front';

        cardFront.appendChild(imgFront);
        cardInner.appendChild(cardFront);

        // Skapar baksidan av kortet med fruit bild
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';

        var imgBack = document.createElement('img');
        imgBack.src = getImageUrl(fruit);
        imgBack.alt = fruit;

        cardBack.appendChild(imgBack);
        cardInner.appendChild(cardBack);

        card.appendChild(cardInner);

        //Putta in event lyssnaren direkt i forEach loopen
        card.addEventListener('click', function () {
           

            //Kontrollerar om kortet inte redan är matchat eller omvänt
            if (!card.classList.contains('matched') && !card.classList.contains('flipped')) {
                card.classList.toggle('flipped');

                //Lägg till flipped card till arrayen
                flippedCards.push(card);

                //Tittar om två kort är omvända  
                if (flippedCards.length === 2) {
                    var firstCard = flippedCards[0];
                    var secondCard = flippedCards[1];

                    //Tittar om korten matchar
                    if (areCardsMatching(firstCard, secondCard)) {
                        //Lämnar korten omvända och låser in dem
                        firstCard.classList.add('matched');
                        secondCard.classList.add('matched');

                        //Rensar flippedCards arrayen för nästa tur
                        flippedCards = [];

                     
                    } else {
                        //Om korten inte matchar vänd de tillbaka efter en kort försening
                        setTimeout(function () {
                            //Vänd korten tillbaka
                            flipCardBack(firstCard);
                            flipCardBack(secondCard);

                            //Rensa flippedCards arrayen till nästa tur Clear the flippedCards array for the next turn
                            flippedCards = [];
                        }, 1000); //Justera förseningen så mycket som behövs
                    }
                }
            }
        });

        memoryGameContainer.appendChild(card);
    });
});



function getImageUrl(fruit) {
    // Funktion för att returnera bild-URL baserat på fruktnamn
    switch (fruit) {
        case 'apple':
            return 'Images/apple.jpg';

        case 'pear':
            return 'Images/pear.jpg';

        case 'kiwi':
            return 'Images/kiwi.jpg';

        case 'pineapple':
            return 'Images/pineapple.jpg';

        case 'orange':
            return 'Images/orange.jpg';

        case 'avocado':
            return 'Images/avocado.jpg';
    }
}

function areCardsMatching(card1, card2) {
    return card1.querySelector('.card-back img').alt === card2.querySelector('.card-back img').alt;
}

function flipCardBack(card) {
    //Tar bort flipped klassen för att vända korten tillbaka
    card.classList.remove('flipped');
}

function allCardsMatched() {
  // Tittar om alla korten har matched klassen
  const allCards = document.querySelectorAll('.random-div');
  for (const card of allCards) {
      if (!card.classList.contains('matched')) {
          return false;
      }
  }
  return true;
}
  

*/

