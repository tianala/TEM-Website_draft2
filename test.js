/* Add this code to your existing script or in a new script tag */
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close pop-up if the user clicks outside the pop-up content
window.onclick = function (event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
};
// Add these validation functions to your existing script or in a new script tag
function validateLoginForm() {
    // Add your login form validation logic here
    return true; // Return true if the form is valid, otherwise return false
}

function validateSignupForm() {
    // Add your signup form validation logic here
    return true; // Return true if the form is valid, otherwise return false
}

