var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push(cards[cardId]);

var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
       alert("You found a match!");
    } 
    else {
       alert("Sorry, try again.");
    }
};

var flipCard = function (cardId) {
    flipcard(0)
    flipcard(2)
    console.log("User flipped" + cards[cardId])
    checkForMatch();
    
};


