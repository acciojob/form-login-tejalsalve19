document.addEventListener("DOMContentLoaded", getFormValue() {
function getFormvalue() 
{
    //Write your code here
	// Get the form element by its ID
	const form = document.getElementById("form1");
	// Get the input values from the form
	const firstName = form.elements["fname"].value;
	const lastName = form.elements["lame"].value;
	// Display the first and last name using alert()
	alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
});