// create a function called getComputerChoice to get random choice 
let wincount=0
let losecount=0
function getComputerChoice(){
    const choice=["rock","paper",'scissor']//let changed to const 
   return choice[Math.floor(Math.random()*3)]  
}
// create a function to play rock paper scissor
function play(playerChoice,compChoice){
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

const guess=function (guess,callback){
   if((wincount<5)&&(losecount<5)){
    const status=document.querySelector('.status')
    status.textContent=callback(guess,getComputerChoice())
    const win=document.querySelector('.win')
    win.textContent=wincount
    const lose=document.querySelector('.lose')
    lose.textContent=losecount
    
   }else{
       alert("Your Limit is over! Reset to play again")
   }
}
const imgs=document.querySelectorAll('img')
imgs.forEach((img)=>{

    img.addEventListener('click',get)

})
function get(){
    if(this.classList.value=='scissor')return guess('scissor',play)
    if(this.classList.value=='rock')return guess('rock',play)
    if(this.classList.value=='paper')return guess('paper',play)
}
const rest=document.querySelector('.reset')
rest.addEventListener('click',reset)

function reset(){
    window.location.reload()
}

