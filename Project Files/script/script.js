//**Script for - Game**
//User's choice displaying  choices and result:
function chooseOption(userChoice){
	var computerChoice=gettingComputerChoice();
	document.getElementById("userChoice").innerHTML="You have chosen: "+userChoice;
	document.getElementById("computerChoice").innerHTML="The computer has chosen "+computerChoice;
	
	var result=winner(userChoice, computerChoice);
	document.getElementById("result").innerHTML=result;
}

//Computer choice - a random choice
function gettingComputerChoice(){
	var choices=["Web Development", "Blockchain", "International", "Software Development", "AI/Machine Learning"];
	
	var computerChoice = choices[Math.floor(Math.random()*choices.length)];
	
	return computerChoice;
}

//If using operators for result:
function winner(userChoice, computerChoice){
	if (userChoice==computerChoice){
		return "Congratulations! You guessed it right!";
	} 
	else{
		return "Oops! Try again, the correct choice was "+computerChoice+".";
	}
}

//**Script for - NavBar**
function toggleNavbars(){
	const navbar1=document.querySelector(".navbar-1");
	const navbar2=document.querySelector(".navbar-2");

	if(window.innerWidth<=790){
		navbar1.style.display="none";
		navbar2.style.display="block";
	} 
	else{
		navbar1.style.display="block";
		navbar2.style.display="none";
	}
}


//Validation for form
document.addEventListener("DOMContentLoaded", function (){
	const contactForm=document.getElementById("contactForm");
	
	contactForm.addEventListener("submit", function (event){   
	event.preventDefault();
	
	const isValid=validateForm();
	
	if (isValid){
	alert("Form submitted successfully we will be in contact shortly!");
	}
});

function validateForm(){
	const fname=document.getElementById("fname").value.trim();
	const lname=document.getElementById("lname").value.trim();
	const email=document.getElementById("email").value.trim();
	const phonenumber=document.getElementById("phonenumber").value.trim();
	const gender=document.querySelector('input[name="gender"]:checked');
	const age=document.getElementById("age").value;
	const reason=document.getElementById("reason").value;
	const subject=document.getElementById("subject").value.trim();
	
	if (fname === ""  || lname === "" ||email === "" || age === "" || !gender || phonenumber === "" || (reason === "Reason" && subject === "")){
		alert("Please fill out all required fields and either the reason for contacting dropdown or the subject textbox.");
		
		return false;
}

// Validates email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)){
		alert("Please enter a valid email address.");
		return false;
}

// Validates phone number 
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	if (phonenumber !== "" && !phoneRegex.test(phonenumber)){
		alert("Please enter a valid phone number.");
		return false;
}

//Validates age
if (isNaN(age) || age < 16 || age > 123){
	alert("Please enter a valid age.");
		return;
	}
		return true;}
	}
);


//displays the module details
document.addEventListener("DOMContentLoaded", function(){
	const toggleButtons=document.querySelectorAll(".toggle-button");
		toggleButtons.forEach(button=>{
			button.addEventListener("click", function(){
				const details=this.nextElementSibling; 
				details.style.display=details.style.display==="none" ? "block" : "none";
		});
	});
});
	
	
//When user clicks image, JavaScript shows text relating to image. 
function showText(text){
	alert(text);
}
	

//Initial screen size
toggleNavbars();

//window resize
window.addEventListener("resize", toggleNavbars);

//**Script for - Reflection**
function toggleVisibility(sectionId){
	const content=document.getElementById(`${sectionId}-list`);

	content.classList.toggle('hidden');
}




  
   
