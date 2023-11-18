function form(){
	event.preventDefault();
	document.getElementById("newForm").style.display = "none";
	var userName=document.getElementById("enteredName").value;
	var userEmail=document.getElementById("enteredEmail").value;
	alert(userName+", thank you for your details. We will be in touch via "+userEmail+" shortly.");
}

