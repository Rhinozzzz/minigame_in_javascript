//resetbtn.js

// Här så skapar vi en knapp för att starta om memory spelet
function resetMemoryGame() {
    // rensa, alla machade kort 
    const matchedCards = document.querySelectorAll('.matched');
    matchedCards.forEach(card => card.classList.remove('matched'));

    // Vänd om alla flippade kort 
    let flippedCards = document.querySelectorAll('.flipped');
    flippedCards.forEach(card => card.classList.remove('flipped'));

    // blanda om alla kort 
    const memoryGameContainer = document.getElementById('memoryGame');
    const cards = Array.from(memoryGameContainer.getElementsByClassName('random-div'));

    cards.forEach(function (card) {
        memoryGameContainer.removeChild(card);
    });

    // blanda cards arrayen 
    cards.sort(function () {
        return 0.5 - Math.random();
    });

    //Lägg tillbaka de sufflade korten tillbaka till containern
    cards.forEach(function (card) {
        memoryGameContainer.appendChild(card);
    });

    // tömmer flippedCards arrayen 
    flippedCards = [];
    
}

// Lägger till en event listener till reset knappen
document.getElementById('reset-btn').addEventListener('click', function () {
    //När knappen är clickad, tillkala resetMemoryGame funktionen
    resetMemoryGame();
});
