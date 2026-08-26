const signupForm = document.getElementById("signupForm");


// Get input fields

const fullName = document.getElementById("fullName");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const locationInput = document.getElementById("location");

const password = document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");


// Error elements

const fullNameError =
    document.getElementById("fullNameError");

const emailError =
    document.getElementById("emailError");

const phoneError =
    document.getElementById("phoneError");

const locationError =
    document.getElementById("locationError");

const passwordError =
    document.getElementById("passwordError");

const confirmPasswordError =
    document.getElementById("confirmPasswordError");


// Email validation

function isValidEmail(value) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

}


// Phone validation

function isValidPhone(value) {

    return /^\d{10}$/.test(value);

}


// Location validation

function isValidLocation(value) {

    return /^[A-Za-z\s]+$/.test(value);

}


// Password validation

function isValidPassword(value) {

    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);

}


// Signup submit

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();


    let valid = true;


    // Clear errors

    fullNameError.textContent = "";

    emailError.textContent = "";

    phoneError.textContent = "";

    locationError.textContent = "";

    passwordError.textContent = "";

    confirmPasswordError.textContent = "";


    // Full Name

    if (fullName.value.trim() === "") {

        fullNameError.textContent =
            "Full Name is required.";

        valid = false;

    }


    // Email

    if (email.value.trim() === "") {

        emailError.textContent =
            "Email is required.";

        valid = false;

    }

    else if (!isValidEmail(email.value.trim())) {

        emailError.textContent =
            "Enter a valid email address.";

        valid = false;

    }


    // Phone

    if (phone.value.trim() === "") {

        phoneError.textContent =
            "Phone number is required.";

        valid = false;

    }

    else if (!isValidPhone(phone.value.trim())) {

        phoneError.textContent =
            "Phone number must contain 10 digits.";

        valid = false;

    }


    // Location

    if (locationInput.value.trim() === "") {

        locationError.textContent =
            "Location is required.";

        valid = false;

    }

    else if (
        !isValidLocation(locationInput.value.trim())
    ) {

        locationError.textContent =
            "Location must contain only alphabets.";

        valid = false;

    }


    // Password

    if (password.value === "") {

        passwordError.textContent =
            "Password is required.";

        valid = false;

    }

    else if (!isValidPassword(password.value)) {

        passwordError.textContent =
            "Password must be 8+ characters with letters and numbers.";

        valid = false;

    }


    // Confirm Password

    if (confirmPassword.value === "") {

        confirmPasswordError.textContent =
            "Please confirm your password.";

        valid = false;

    }

    else if (
        password.value !== confirmPassword.value
    ) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        valid = false;

    }


    // Success

    if (valid) {

        alert("Signup validation successful!");

    }

});


// =========================
// Show / Hide Password
// =========================

const togglePassword =
    document.getElementById("togglePassword");


togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Hide";

    }

    else {

        password.type = "password";

        togglePassword.textContent = "Show";

    }

});


// Confirm password toggle

const toggleConfirmPassword =
    document.getElementById(
        "toggleConfirmPassword"
    );


toggleConfirmPassword.addEventListener(
    "click",
    function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            toggleConfirmPassword.textContent =
                "Hide";

        }

        else {

            confirmPassword.type = "password";

            toggleConfirmPassword.textContent =
                "Show";

        }

    }
);