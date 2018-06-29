

// Create a list that holds all of your cards
// $().ready(() => {
//     debugger
//     console.log('ready');
// });

var cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-anchor', 'fa-leaf', 'fa-bicycle', 'fa-diamond', 'fa-bomb', 'fa-leaf', 'fa-bomb', 'fa-bolt', 'fa-bicycle', 'fa-paper-plane-o', "fa-cube"];


//Display the cards on the page
//  - shuffle the list of cards using the provided "shuffle" method below

function initializeMatchingGame() {
    const newCards = shuffle(cards);
    const allCards = document.querySelectorAll('.deck .card');
    const cls = ['match', 'show', 'open', ...cards];
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.remove(...cls);
        const nw = allCards[i];
        const child = nw.children[0];
        child.classList.remove(...cards);
        child.classList.add(newCards[i]);

        // //SHORTCUT to end
        // if (newCards[i] !== 'fa-diamond') {
        //     allCards[i].classList.add('open', 'match');
        // }
    }
}
//  - loop through each card and create its HTML

//  - add each card's HTML to the page


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//definded array outside respondToClick b/c of scope
var opArr = [];
var mchArr = [];
var clicks = 0;

 // show number of clicks
 function displayClicks() {
    document.getElementById('clckNum').innerHTML += clicks / 2 + ' tries!';
}
//diplay number of moves at top durring game
function displayMoves() {
    // const inMC = document.querySelector('.moves').innerHTML += clicks;
    const inMoves = Number (document.querySelector('.moves').innerHTML);
    inMoves == clicks / 2;
    inMoves.toString();
    

}

// grab stars class
function displayStars(numS) {
    const stars = document.querySelectorAll('.score-panel .fa-star');
    //reads input and displays correct number of stars
    switch (true) {
        case numS === 1:
        stars[2].parentElement.style.display = "none";
        stars[1].parentElement.style.display ="none";
        break;
        case numS === 2:
        stars[2].parentElement.style.display ="none";
        break;
    }
    debugger
}
// grab stars class
function displayStarsEnd(numS) {
    const stars = document.querySelectorAll('.modal-content .fa-star');
    //reads input and displays correct number of stars
    switch (true) {
        case numS === 1:
        stars[2].parentElement.style.display = "none";
        stars[1].parentElement.style.display ="none";
        break;
        case numS === 2:
        stars[2].parentElement.style.display ="none";
        break;
    }
}



function respondToTheClick(e) {
    // know how many times it was clicked
    var add = (function () {
        clicks += 1;
    })();

    //display stars at Top
    switch (true) {
        case clicks <= 25:
            displayStars(3);
            break;
        case clicks >= 40:
            displayStars(1);
            break;
        default:
            displayStarsEnd(2);
    }
    
    //display moves at top
    displayMoves();


    //ignoring other clicks if 2 cards are flipped over
    if (opArr.length == 2) return; 

    const el = e.target;

    
   
    
    //showing card when a card is clicked on not when background is clicked
    if (el.classList.contains('card')) {
        el.classList.add('open', 'show', 'flipInY', 'animated');
        //adding fa-trait to array
        const inCard = el.children[0];
        const itmCl = inCard.classList[1];
        opArr.push(itmCl);

        //timeout
        setTimeout(function () {
            if (opArr.length == 2 && opArr[0] === opArr[1]) {
                const gb = document.querySelectorAll('.open');
                //added foreach to remove from both in array and add to each in array
                gb.forEach(function (el) {
                    el.classList.remove('open', 'show', 'animated', 'flipInY')
                });
                gb.forEach(function (el) {
                    el.classList.add('match', 'animated', 'tada')
                    mchArr.push(itmCl);
                });
                opArr = [];
                //when all cards are flipped over and display Game End
                if (mchArr.length == cards.length) {
                    var modal = document.querySelector('.modal');
                    modal.style.display = 'block';


                    //display number of clicks at end
                    switch (true) {
                        case clicks <= 25:
                            displayStarsEnd(3);
                            displayClicks();
                            break;
                        // they get 1 star
                        case clicks >= 40:
                            displayStarsEnd(1);
                            displayClicks();
                            break;
                        //they get 2 stars
                        default:
                            displayStarsEnd(2);
                            displayClicks();
                    }
                }
            }
            else if (opArr.length == 2) {
                //grab all cards with 'open'
                const gb = document.querySelectorAll('.open');
                gb.forEach(function (el) {
                    el.classList.remove('flipInY')
                });
                gb.forEach(function (el) {
                    el.classList.add('shake')
                });
                setTimeout(function () {
                    gb.forEach(function (el) {
                        el.classList.remove('open', 'show', 'animated', 'flipInY', 'shake')
                    });
                    opArr = [];
            }, 1000);
            }
        }, 500);


    }
    // else if (el.classList = 'deck') {
    //     document.getElementById("deck").addEventListener("click", function(event){
    //         event.preventDefault()
    //     });

}


const dk = document.querySelector('.deck');
dk.addEventListener('click', respondToTheClick);

//set up the event listener for a card. If a card is clicked:
//  - display the card's symbol (put this functionality in another function that you call from this one)
// - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
// - if the list already has another card, check to see if the two cards match
//   + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//   + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//   + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//   + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)




document.addEventListener("DOMContentLoaded", function () {
    initializeMatchingGame();
});