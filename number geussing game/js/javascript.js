// ============== variable part start 
let playerNumber = document.querySelector('.playerNumber')
let turnNumber = document.querySelector('.turnNumber')
let turn = document.querySelector('.turn')
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player1Button = document.querySelector('.button')
let player2Button =document.querySelector('.player2Button')
let error = document.querySelector('.error')
let winner = document.querySelector('.winner')
let main = document.querySelector('.main')
let data =document.querySelector('.data')
let change = 5

// ============= player one event
player1Button.addEventListener('click' , ()=>{
    if(player1.value !== ''){
        if(player1.value - 0){
           if(player1.value  <10){
            player1.style='display: none'
            player2.style = 'display: block'
            playerNumber.innerHTML = 'Player 2'
            error.innerHTML = ''    
            player1Button.style = 'display: none'
            player2Button.style = 'display: block'
            turn.style = 'display: block'
           }else{
            error.innerHTML = 'the value must be under 10'
           }
        
        }else{
            error.innerHTML = 'only Number is valid for the game'
        }
    }else{
        error.innerHTML ='Please enter an number'
    }
})
// =============== plear 2 event
player2Button.addEventListener('click' , ()=>{
    if(player2.value == ''){
        error.innerHTML = 'please enter an number'
    }else{
        if(player2.value - 0){
            if(player2.value < 10){
                    change--
                    turnNumber.innerHTML = change
                    if(change > -1){

                        console.log(change)
                        if(player1.value == player2.value){
                            main.style = 'display: none'  
                            data.style = 'display: none'  
                            winner.innerHTML = 'player 02 win'
                        }
                    }else{
                        main.style = 'display: none'  
                        data.style = 'display: none'  
                        winner.innerHTML = 'Player 01 win'
                    }
            }else{
                error.innerHTML ='plase enter an number which is under 10'
            }
        }else{
            error.innerHTML = 'please enter an number'
        }
    }
})