var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {   
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    }  , 
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
    ];
    var cardsInPlay = [];
    
    var checkForMatch = function () {
        if (cardsInPlay[0] === cardsInPlay[1]) {
           setTimeout(() => {         
               alert("You found a match!");
               cardsInPlay = []       
           }, 400)
        } 
        else {
            alert("Sorry, try again.");
            cardsInPlay = []          
            let gameBoard = document.getElementById('game-board')
            setTimeout(function() {
              while (gameBoard.firstChild) {
                 gameBoard.removeChild(gameBoard.firstChild);
              }
             createBoard()
           }, 400)
          
        }
    };
    
    var flipCard = function () {
        cardId = this.getAttribute('data-id');
        cardsInPlay.push(cards[cardId].rank);
        this.setAttribute('src', cards[cardId].cardImage);
        if (cardsInPlay.length >= 2) {         
          checkForMatch();
        }
    };
    
    var createBoard = function () {
        for (var i = 0; i < cards.length; i++) {
            var cardElement = document.createElement('img');
            cardElement.setAttribute('src', 'images/back.png');
            cardElement.setAttribute('data-id', i);
            cardElement.addEventListener('click', flipCard);
    
            document.getElementById('game-board').appendChild(cardElement);
        }
    };
    
    createBoard ();