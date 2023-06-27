document.addEventListener("DOMContentLoaded", function() {
function getFormvalue() 
{
    //Write your code here
	// Get the form element by its ID
	const form = document.getElementById("form1");
	// Get the input values from the form
	const fname = form.elements["firstName"].value;
	const lname = form.elements["lastName"].value;
	// Display the first and last name using alert()
	alert("First Name: " + fname + "\nLast Name: " + lname);
}
});