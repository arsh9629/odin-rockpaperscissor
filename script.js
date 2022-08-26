// create a function called getComputerChoice
function getComputerChoice(){
    let choice=["rock","paper",'scissor']
   return choice[Math.floor(Math.random()*3)]  
}
// create a function to play rock paper scissor
function play(playerChoice,compChoice){
     playerChoice=playerChoice.toLowerCase()
    if(playerChoice==compChoice){
        return("It's a tie You both choses"+playerChoice)
    }
    else if(playerChoice=="rock"){
        if(compChoice=="paper"){
            return("You lose!"+compChoice+" beats "+playerChoice)
        }else{
            return("You won!"+playerChoice+" beats "+compChoice)
        }
    }else if(playerChoice=="paper"){
        if(compChoice=="scissor"){
            return("You lose!"+compChoice+" beats "+playerChoice)
        }
        else{
            return("You won!"+playerChoice+" beats "+compChoice)
        }
    }else if(playerChoice=="scissor"){
        if(compChoice=="rock"){
            return("You lose!"+compChoice+" beats "+playerChoice)
        }else{
            return("You won!"+playerChoice+" beats "+compChoice)
        }
    }
}

function game(guess){
    for(let i=0;i<5;i++){
        console.log(play(guess,getComputerChoice()))
    }
}
let guess=prompt("Enter your guess")
game(guess)