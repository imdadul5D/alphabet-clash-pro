function handleKeyboardButtonPress() {
    console.log('button pressed');
}
// Capture KeyPress
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('Your Alphabet: ', alphabet);

    const randomAlpha = document.getElementById('randomAlphabet');
    randomAlpha.innerText = alphabet;

    setBgColorById(alphabet);
}

function play(){
    hidden('home');
    show('playGround');
    continueGame();
}