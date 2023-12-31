#!/usr/bin/env node

function validateEmail() {
    const emailInput = document.getElementById('username');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    // Corrected regex for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must contain an uppercase letter, a number, and only @ as a special character';
    } else {
        passwordError.textContent = '';
    }
}

function submitForm() {
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    if (emailError.textContent || passwordError.textContent) {
        alert('Please fix the errors before submitting the form.');
    } else {
        alert('Form submitted successfully!');
        // Add code to handle form submission (e.g., AJAX request to the server)
    }
}
