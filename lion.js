document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript file is connected!");
  
    // Login functionality
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Basic client-side authentication (for demonstration only)
        if (username === "admin" && password === "123") {
          document.getElementById('loginPage').hidden = true;
          document.getElementById('mainContent').hidden = false;
        } else {
          alert("Incorrect username or password. Please try again.");
        }
      });
    }
  
    // Example: Change the background color of the Hero Section when the button is clicked
    const btn = document.querySelector('.btn');
    if (btn) {
      btn.addEventListener('click', function() {
        document.querySelector('.hero').style.backgroundColor = '#d0f0c0';
      });
    }
  });
  