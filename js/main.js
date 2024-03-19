// Select the form and popup elements
const form = document.getElementById("rsvpForm");
const popup = document.querySelector(".popup");
const okButton = document.getElementById("okButton");

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data and perform form submission logic here
    // ...
    // Assuming you have processed the form data and obtained the appropriate message
    const message = "Thank You! Your details have been successfully submitted. Thanks!";

 
    // Show the popup after the form is submitted
    popup.style.display = "block";
});

// Event listener for the OK button in the popup
okButton.addEventListener("click", function() {
    // Hide the popup when the OK button is clicked
    popup.style.display = "none";
});