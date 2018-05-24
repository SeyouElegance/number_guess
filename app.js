
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      msg = document.querySelector('.message');

// Game Values
let min = 1, 
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    guessesLeft = 3;

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again event listenner
game.addEventListener('mousedown', function(e){ //
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})





// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  //Validate
if(isNaN(guess) || guess < min || guess > max){
  setMessage(`You must enter a number between ${min} and ${max} !`, 'red');
  displayMsg();
  return false;
}

if(guess === winningNum){
  gameOver(true,`You win`);
}else{
  guessesLeft -= 1;
  // setMessage(`Your number ${guess} is incorrect, you have ${guessesLeft} chance, TRY AGAIN `, 'red');
  // guessInput.value = '';
  if(guessesLeft === 0){
    gameOver(false,`You lost, the correct answer was ${winningNum}.`);
  }else{
    setMessage(`Your number ${guess} is incorrect, you have ${guessesLeft} chance, TRY AGAIN `, 'red');
    guessInput.value = '';
    guessInput.style.borderColor = 'red';  
  }
}
});






//Game over 
function gameOver(won, message){
  let color;
  won === true ? color = 'green' : color = 'red';
  setMessage(message); 
  msg.style.color = color;
  guessInput.disabled = true;
  guessInput.style.borderColor = color;  


  //Play again
  guessBtn.value = 'Play Again !';
  guessBtn.className = 'play-again';

}



// Set Game to Zero
function setGame(){
  location.reload();
}


// Set message
function setMessage(message, color){
  msg.style.color = color;
  msg.textContent = message;
}




// Display message
function displayMsg(){  
  setTimeout(function(){ 
      msg.textContent = '',
      guessInput.value = '';}
    ,1600);  
}


