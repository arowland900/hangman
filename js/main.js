/*----- constants -----*/ 
const MAX_WRONG_GUESSES = 6;
const WORDS = [
    'DATATYPES', 'OBJECTS', 'ARRAYS', 
    'FUNCTIONS', 'MVC', 'MOO', 'VARIABLES'
]


/*----- app's state (variables) -----*/ 
let usedLetters, wrongGuesses, secret, guess;


/*----- cached element references -----*/ 
const letterBtns = document.querySelectorAll('#letters button');
const hangmanImage = document.querySelector('section');
const guessEl = document.getElementById('guess');


/*----- event listeners -----*/ 
document.getElementById('letters').addEventListener('click', handleLetterClick);


/*----- functions -----*/
function init() {
    // usedLetters, wrongGuesses, secret, guess;
    usedLetters = []
    wrongGuesses = []
}



function handleLetterClick(evt){
    console.log(evt.target.textContent);
}

