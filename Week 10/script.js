function generateRandomArray(){
	const randomArray=[];
	for (let i=0; i<5; i++){
		const randomNumber=Math.floor(Math.random()*10)+1;
		randomArray.push(randomNumber);
		}
		return randomArray;
}

let randomArray=generateRandomArray();

function checkGuess(){
	const userGuess=document.getElementById("userGuess").value;

	if(userGuess===""){
		alert("Please enter a number.");
	return;
}

let count=0;
let numbersInArray=[];

for(let i=0; i<randomArray.length; i++){
	if(parseInt(userGuess)===randomArray[i]){
	count++;
}
	numbersInArray.push(randomArray[i]);
}

const resultElement=document.getElementById("result");
	resultElement.innerHTML=`The number ${userGuess} appears ${count} time(s) in the array. Numbers in the array: ${numbersInArray.join(', ')}`;
}

function resetGame(){
	randomArray=generateRandomArray();
	document.getElementById("result").innerHTML = "";
	document.getElementById("userGuess").value = "";
}


