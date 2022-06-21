const sentenceBox = document.querySelector('.sentence-container');
const test = document.querySelector('.test');
let sentence = new String('real madrid');
let letter;
let lives = 3;

handleKeydown();
//create and add element for every single character from sentence
for (let i = 0; i < sentence.length; i++) {
    const letterDiv = document.createElement('div');
    sentenceBox.appendChild(letterDiv);
    letterDiv.classList.add('letter');
    letterDiv.textContent = sentence[i];
}

letter = document.querySelectorAll('.letter');
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
    lives > 1 ? 
    console.log(`Lives: ${lives} ==> ${--lives}`):
     console.log(`Lives: ${lives} ==> ${--lives}! Game over!`);
}
// change style when letter match
function markCorrectSign(i) {
    letter[i].classList.add('correct');
}
