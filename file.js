function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return false;
    }

    message.textContent = "Signup successful!";
    message.style.color = "green";
    return false; // Prevent actual form submission for demo purposes
}
