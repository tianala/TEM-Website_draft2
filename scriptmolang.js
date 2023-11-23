document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'block';
});

// Close the popup when clicking outside the form
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-form')) {
        event.target.style.display = 'none';
    }
});

// Close the popup when pressing the ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'none';
    }
});
