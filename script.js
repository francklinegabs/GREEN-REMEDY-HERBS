// JavaScript for future functionality like booking and form submission
function bookConsultation() {
    alert("Thank you for booking a consultation!");
}

document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    alert("Your symptoms have been submitted. We will get back to you soon!");
}
