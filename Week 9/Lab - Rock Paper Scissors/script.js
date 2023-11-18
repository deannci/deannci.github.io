//Setting the total rounds to play as 3 and the number of times a user won to 0.
var roundsToPlay=3;
var userWins=0;

//Setting the inital computer choice to nothing.
var previousComputerChoice=null;

//Function for the users choice and displaying both choice and overall result.
function chooseOption(userChoice){
  
//If statement running as long as the round is greater than 0.
  if (roundsToPlay>0){
    var computerChoice=gettingComputerChoice();

    document.getElementById("userChoice").innerHTML="You have chosen: "+userChoice;
    document.getElementById("computerChoice").innerHTML="The computer has chosen "+computerChoice;

    var result=winner(userChoice, computerChoice);
    document.getElementById("result").innerHTML=result;
	
//If statement - When the user has won the you won message appears and rounds is set to 0 ending the game.
//Else statement - If the user has not won the round decreases by 1. If the rounds reach 0, the try again message appears.
    if (result.includes("win")) {
      userWins++;
      if (userWins==1){
        document.getElementById("result").innerHTML += "<br>You've won the game!";
      }
      roundsToPlay=0;
    } 
	else{
      roundsToPlay--;
      if (roundsToPlay==0){
        document.getElementById("result").innerHTML+="<br>Game over. You didn't win. Please try again!";
      }
    }
  }
}

// Function for getting the computer choice "a random choice". By using a do while loop we ask for a new random choice when the curent choice equals the previous choice:
function gettingComputerChoice(){
  var choices=["rock", "paper", "scissors"];
  var computerChoice;
  do {
    computerChoice=choices[Math.floor(Math.random()*3)];
  } while (computerChoice==previousComputerChoice);
  previousComputerChoice=computerChoice;
  return computerChoice;
}

//If statement using operators for the result:
function winner(userChoice, computerChoice){
	if(userChoice==computerChoice){
		return "It is a tie!";
	}
	else if((userChoice=="rock"&&computerChoice=="scissors") || 
			(userChoice=="paper"&&computerChoice=="rock") ||
			(userChoice=="scissors"&&computerChoice=="paper")){
		return "You win!";
	}
	else{
		return "You lose!";
	}
}

//Function to reset the game once a user click the button.
function resetGame(){
  document.getElementById("userChoice").innerHTML="";
  document.getElementById("computerChoice").innerHTML="";
  document.getElementById("result").innerHTML="";

  roundsToPlay=3;
  userWins=0;
  previousComputerChoice=null;
}