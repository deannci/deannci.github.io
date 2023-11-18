//Function for the users choice and displaying both choice and overall result:
function chooseOption(userChoice){
	var computerChoice=gettingComputerChoice();
	
	document.getElementById("userChoice").innerHTML="You have chosen: "+userChoice;
	document.getElementById("computerChoice").innerHTML="The computer has chosen "+computerChoice;
	
	var result=winner(userChoice, computerChoice);
	document.getElementById("result").innerHTML="";
}

//Function for getting the computer choice "a random choice":
function gettingComputerChoice(){
	var choices=["rock", "paper", "scissors"];
	var computerChoice=choices[Math.floor(Math.random()*3)];
	return computerChoice;
}

//If statement using operators for the result:
function winner(userChoice, computerChoice){
	if(userChoice==computerChoice){
		return "It is a tie!";
	}
	else if((userChoice=="rock" && computerChoice=="scissors") || 
			(userChoice=="paper" && computerChoice=="rock") ||
			(userChoice=="scissors" && computerChoice=="paper")){
		return "You win!";
	}
	else{
		return "You lose!";
	}
}


