console.log("Up and running!");

var cards = ["queen","queen","king","king"]
var cardsInPlay = []

var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		 } else {
		 alert("Sorry, try again.");
		 }
		};

var flipCard = function(cardId) {

	if (cardsInPlay.length === 2) {
		cardsInPlay.push(cards[cardId])
		
	};
	console.log("User flipped" + cards[cardId])	
	checkForMatch();
	};
	flipCard(0);
	flipCard(2);