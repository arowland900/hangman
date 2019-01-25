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
const msgEl = document.querySelector('h2');


/*----- event listeners -----*/ 
document.getElementById('letters').addEventListener('click', handleLetterClick);


/*----- functions -----*/
init()

function init() {
    // usedLetters, wrongGuesses, secret, guess;
    usedLetters = [];
    wrongGuesses = [];
    let rndIdx = Math.floor(Math.random() * WORDS.length)
    secret = WORDS[rndIdx];
    console.log(secret)
    guess = '_'.repeat(secret.length);
    render();
}

function render(){
    guessEl.textContent = guess
    hangmanImage.style.backgroundPosition = `${-75 * wrongGuesses.length}px 0`
    if (guess === secret){
        msgEl.textContent = "congrats! you win :)"
    }
    else if (wrongGuesses.length === MAX_WRONG_GUESSES){
        msgEl.textContent = "you lose"
    }
}


function handleLetterClick(evt){
    let letter = evt.target.textContent;
    let guessChars = guess.split('')
    if(secret.includes(letter)){
        for (var i = 0; i < secret.length; i++){
            let char = secret.charAt(i);
            if(char === letter){
                guessChars[i] = letter
            }
        }
        guess = guessChars.join('')
    }
    else {
        wrongGuesses.push(letter)
    }  
    usedLetters.push(letter) 
    render()
}

