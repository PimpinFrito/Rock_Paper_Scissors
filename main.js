##CREATED IN ONLINE EDITOR, WILL FINISH AT HOME IN VS
$(document).ready(function ()
{
	   function computerPlay(round = 'round'){
    options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function game(){
    for(currentRound = 0; currentRound <= 5; currentRound++){
        player = prompt("Rock, Paper, or Scissors?").toLowerCase();
        console.log(round(player));
        console.log('');
    }
} 
function round(playerChoice = 'rock', computerChoice = computerPlay()){
    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (playerChoice == computerChoice){
        return ('Draw')
        
    }else if (playerChoice == 'rock'){
        if (computerChoice == 'scissors'){
            return ('You Win! Rock beats scissors');
        }
            return ("You lose! Rock beats scissors");
    }else if (playerChoice == 'paper'){
        if (computerChoice == 'rock'){
            return ("You win! Paper beats rock");
        }
        return "You lose !Scissors beat paper ";
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'paper'){
            return ("You win! Scissors beat paper");
        }
        return ("You Lose! Rock beats scissors");
    }
    
}

game()

});
