let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget() {
  return Math.floor(Math.random()*11)
};



const compareGuesses = (human, computer, target) => {
  if (human == computer && human == target) {

    return true
  } else if (human == computer){
    return true
    //if the absolute distance between the two is the same human wins
  } else if (Math.abs(human - target) == Math.abs(computer - target)){
    return true
  } else if (Math.abs(human - target) < Math.abs(computer - target)){
    return true
  } else if (Math.abs(human - target) > Math.abs(computer - target))
    return false
  };

const updateScore = (x) => {
  if (x === "human"){
    console.log("You win!")
    return humanScore ++;
  }else if (x === "computer"){
    console.log("Computer wins")
    return computerScore ++;
  }
}

const advanceRound = () =>{
  return currentRoundNumber++;
}


generateTarget();
compareGuesses();
updateScore();
advanceRound();