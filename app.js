let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let h1 = document.querySelector('h1');
let smallText = document.querySelector('.smallText');

let userChoice;


rock.addEventListener('click', () => {
    userChoice = 'rock';
    randomizeGame('rock');
});
paper.addEventListener('click', () => {
    userChoice = 'paper';
    randomizeGame('paper');
});
scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    randomizeGame('scissors');
});





function randomizeGame(a) {
    let randNum = Math.floor(Math.random()*3)+1;
    let compChoice;
    if(randNum === 1) {
        compChoice = "rock";
    }
    if(randNum === 2) {
        compChoice = "paper";
    }
    if(randNum === 3) {
        compChoice = "scissors";
    }
    

    if(compChoice === userChoice) {
        h1.textContent = "Tie Game!";
        h1.style.color = 'black';
    }

    // wining conditions for user
    if(userChoice == 'rock' && compChoice == 'scissors') {
        h1.textContent = "You Win!";
        h1.style.color = 'green';
    }
    if(userChoice == 'paper' && compChoice == 'rock') {
        h1.textContent = "You Win!";
        h1.style.color = 'green';
    }
    if(userChoice == 'scissors' && compChoice == 'paper') {
        h1.textContent = "You Win!";
        h1.style.color = 'green';
    }

    // loosing conditions for user
    if(userChoice == 'rock' && compChoice == 'paper') {
        h1.textContent = "You Lost...";
        h1.style.color = 'red';
    }
    if(userChoice == 'paper' && compChoice == 'scissors') {
        h1.textContent = "You Lost...";
        h1.style.color = 'red';
    }
    if(userChoice == 'scissors' && compChoice == 'rock') {
        h1.textContent = "You Lost...";
        h1.style.color = 'red';
    }

    smallText.textContent = `User choose ${userChoice}  |  computer choose ${compChoice}`;
}
