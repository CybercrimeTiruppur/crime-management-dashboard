document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, let's use a static check
    // In a real application, you would verify these credentials on the server
    if (username === "admin" && password === "password") {
        // Store a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('loggedIn', 'true');
        alert("Login successful!");
        // Redirect to dashboard
        window.location.href = 'index.html'; // Change this if necessary
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
