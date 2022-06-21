const sentenceBox = document.querySelector('.sentence-container');
let sentence = new String('real madrid');
const liveBox = document.querySelector('.live-container');
let letter;
let lives = 3;

handleKeydown();
initGame();

letter = document.querySelectorAll('.letter');
function initGame() {
    //create DOM for lives and every single matched char 
    for (let i = 0; i < sentence.length; i++) {
        const letterDiv = document.createElement('div');
        sentenceBox.appendChild(letterDiv);
        letterDiv.classList.add('letter');
        letterDiv.textContent = sentence[i];
        if ( letterDiv.textContent == ' ' ) {
            letterDiv.classList.add('correct','rule-two-color');
        }else if ( !(letterDiv.textContent).includes(' ')){
            letterDiv.classList.add('rule-one-color');
        } 
        
    }
    //create lives DOM
    for (let i = 0; i < 3; i++) {    
        const live = document.createElement('i');
        live.classList.add('fa-solid','fa-heart');
        liveBox.appendChild(live);    
    }
}
//check for keydown-sentence chars match
function handleKeydown() {
    window.addEventListener('keydown', (e) => {
        // is match
        if ( sentence.includes(e.key)){
            for (let i = 0; i < letter.length; i++) {
                if ( e.key == letter[i].textContent ){
                    markCorrectSign(i);
                }            
            }
        }
        // no match
        else
        {
            updateLives();
        }       
    })
}
//check value of lives and log it
function updateLives() {    
    removeElement(liveBox.lastChild, liveBox); 
    if (lives == 1) {
        console.log(`Lives: ${lives} ==> ${--lives}! Game over!`);
        gameOver();
    }else if ( lives > 0 ) {
        console.log(`Lives: ${lives} ==> ${--lives}`);
    }
    else if ( lives == 0 ) {
        resetGame();
    }
}             
function resetGame() {
    lives = 3;
    //reset letters to default
    for ( let i = 0; i < sentence.length; i++) {        
        letter[i].classList.remove('correct');
    }
    //reset live number 
    for (let i = 0; i < 3; i++) {    
        const live = document.createElement('i');
        live.classList.add('fa-solid','fa-heart');
        liveBox.appendChild(live);    
    }
}

// change style when letter match
function markCorrectSign(i) {
    letter[i].classList.add('correct');
}
function removeElement(what, from) {
    from.removeChild(what);
}
//add 'game over' logo when lose 3 lives
function gameOver() {
    const gameOverModal = document.createElement('p');
    gameOverModal.textContent = 'Game over!'
    liveBox.appendChild(gameOverModal);
}