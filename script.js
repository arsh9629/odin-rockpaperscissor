// create a function called getComputerChoice
let wincount=0
let losecount=0
function getComputerChoice(){
    let choice=["rock","paper",'scissor']
   return choice[Math.floor(Math.random()*3)]  
}
// create a function to play rock paper scissor
function play(playerChoice,compChoice){
     playerChoice=playerChoice.toLowerCase()
    if(playerChoice==compChoice){
        return(" It's a tie You both choses "+playerChoice)
    }
    else if(playerChoice=="rock"){
        if(compChoice=="paper"){
            losecount++
            return("You lose! "+compChoice+" beats "+playerChoice)
        }else{
            wincount++
            return("You won! "+playerChoice+" beats "+compChoice)
        }
    }else if(playerChoice=="paper"){
        if(compChoice=="scissor"){
            losecount++
            return("You lose! "+compChoice+" beats "+playerChoice)
        }
        else{
            wincount++
            return("You won! "+playerChoice+" beats "+compChoice)
        }
    }else if(playerChoice=="scissor"){
        if(compChoice=="rock"){
            losecount++
            return("You lose! "+compChoice+" beats "+playerChoice)
        }else{
            wincount++
            return("You won! "+playerChoice+" beats "+compChoice)
        }
    }else{
        console.log("Wrong Entry")
    }
}

function game(){
   while((wincount<5)&&(losecount<5)){
    let guess=prompt("Enter your guess")
    console.log(play(guess,getComputerChoice()))
    console.log("Your win count "+wincount)
    console.log("System's win count "+losecount)
   }
}

game()
