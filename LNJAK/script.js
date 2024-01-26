// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Footer code to check if subscribed with valid email
document.getElementById('subscribeButton').addEventListener('click', function () {
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value;

    // Basic email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.value = '';
        return;
    }

    // Update modal content and trigger the modal (only if the email is valid)
    document.getElementById('confirmationMessage').innerHTML = 'Thank you for subscribing, ' + email + '!';
    $('#subscribeModal').modal('show');

    // Clear the email input field
    emailInput.value = '';
});

function isValidEmail(email) {
    return validator.isEmail(email);
}