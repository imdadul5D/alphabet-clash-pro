function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key
    // console.log('player pressed',playerPressed);


    // Get The Expected to Press
    const currentAlphabetElement = document.getElementById('randomAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('You Get a Point');
        // Update Score

        // Get The Current Score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // Increase the score by 1
        const newScore = currentScore + 1;

        // Show The Update Score
        currentScoreElement.innerText = newScore;

        // Start A New Round
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You Missed. You Lost Your Life');
        // get the current life number
        const currentLifeEment = document.getElementById('current-life');
        const currentLifeText = currentLifeEment.innerText;
        const currentLife = parseInt(currentLifeText);

        // reduce the life count
        const newLife = currentLife - 1;

        // display the updated life count
        currentLifeEment.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('Your Alphabet: ', alphabet);
    
    const randomAlpha = document.getElementById('randomAlphabet');
    randomAlpha.innerText = alphabet;

    setBgColorById(alphabet);
}
function play(){
    hidden('home');
    show('playGround');
    continueGame();
}
