'use strict';
/*console.log(document.querySelector('.message').textContent); // 'Start guessing...'

document.querySelector('.message').textContent = 'Correct Number!'; // changes the text content of the element

console.log(document.querySelector('.message').textContent); // logs the new text content of the element

document.querySelector('.number').textContent = 13; // changes the text content of the element
document.querySelector('.score').textContent = 20; // changes the text content of the element


document.querySelector('.guess').value = 23; // changes the value of the element
console.log( document.querySelector('.guess').value ); // changes the value of the element
*/


let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() *20) + 1; // generates a random secretNumber between 1 and 20 and truncates the decimal part of the secretNumber (Math.trunc)


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value );  // gets the value of the element and converts it to a number
    console.log(guess, typeof guess); // logs the value of the element and its type (number)

    // When there is no input 
    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number!'; // changes the text content of the element if the guess is not a number or empty. 

    // When player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉Correct Number!'; // changes the text content of the element if the guess is equal to the secretNumber
        
        document.querySelector('body').style.backgroundColor = '#60b347'; // changes the background color of the body element to green if the guess is equal to the secretNumber
        
        document.querySelector('.number').style.width = '30rem'; // changes the width of the number element to 30rem if the guess is equal to the secretNumber
        
        document.querySelector('.number').textContent = secretNumber; // changes the text content of the element to the random secretNumber generated above 

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore; // changes the text content of the element to the highScore if the score is greater than the highScore
        }

    // When guess is wrong  
    } else if (guess !== secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈Too High!' : '📉Too Low!'; // changes the text content of the element if the guess is greater than the secretNumber or less than the secretNumber
            score--;
            document.querySelector('.score').textContent = score; // changes the text content of the element to the score
        } else {
            document.querySelector('.message').textContent = '💥You Lost the Game!'; // changes the text content of the element if the score is less than 1
            document.querySelector('.score').textContent = 0; // changes the text content of the element to 0
        }
    }
    // else if (guess > secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = '📈Too High!'; // changes the text content of the element if the guess is greater than the secretNumber
        
    //     score--; // decreases the score by 1 if the guess is greater than the secretNumber
        
    //     document.querySelector('.score').textContent = score; // changes the text content of the element to the new score value 
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!'; // changes the text content of the element if the score is less than 1
            
    //         document.querySelector('.score').textContent = 0; // changes the text content of the element to 0
    //     }

    // // When guess is too low
    // } else if (guess < secretNumber){
    //     if (score > 1){
    //     document.querySelector('.message').textContent = '📉Too Low!'; // changes the text content of the element if the guess is less than the secretNumber
        
    //     score--; // decreases the score by 1 if the guess is less than the secretNumber
        
    //     document.querySelector('.score').textContent = score; // changes the text content of the element to the new score value
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!'; // changes the text content of the element if the score is less than 1
            
    //         document.querySelector('.score').textContent = 0; // changes the text content of the element to 0
    //     }
    // }
} )

///////////////////////////////////////
// coding challenge 1

/*
Implement a game rest functionality, so that the player can make a new guess!
here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function(){
    
    secretNumber = Math.trunc(Math.random() *20) + 1; // generates a new random secretNumber between 1 and 20 and truncates the decimal part of the secretNumber (Math.trunc)
    
    score = 20; // restores the score to 20
    
    document.querySelector('.score').textContent = score; // changes the text content of the element to the new score value 
    
    document.querySelector('.message').textContent = 'Start guessing...'; // changes the text content of the element to the new score value

    document.querySelector('.number').textContent = '?'; // changes the text content of the element to the new score value

    document.querySelector('.guess').value = ''; // changes the value of the element to the new score value

    document.querySelector('body').style.backgroundColor = '#222'; // changes the background color of the body element back to the original backgroundColor if the again button is clicked

    document.querySelector('.number').style.width = '15rem'; // changes the width of the number element back to the original width if the again button is clicked


})
