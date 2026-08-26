// ==========================================
// SIGNUP ELEMENTS
// ==========================================

const signupForm = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const locationInput = document.getElementById("location");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


// ==========================================
// SIGNUP ERROR ELEMENTS
// ==========================================

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


// ==========================================
// VALIDATION FUNCTIONS
// ==========================================

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
// Minimum 8 characters
// Must contain at least one letter and one number

function isValidPassword(value) {

    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);

}


// ==========================================
// SIGNUP FORM
// ==========================================

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let valid = true;


        // Clear previous errors

        fullNameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        locationError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";


        // ==================================
        // FULL NAME
        // ==================================

        if (fullName.value.trim() === "") {

            fullNameError.textContent =
                "Full Name is required.";

            valid = false;

        }


        // ==================================
        // EMAIL
        // ==================================

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


        // ==================================
        // PHONE
        // ==================================

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


        // ==================================
        // LOCATION
        // ==================================

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


        // ==================================
        // PASSWORD
        // ==================================

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


        // ==================================
        // CONFIRM PASSWORD
        // ==================================

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


        // ==================================
        // SAVE USER
        // ==================================

        if (valid) {

            const user = {

                fullName:
                    fullName.value.trim(),

                email:
                    email.value.trim().toLowerCase(),

                phone:
                    phone.value.trim(),

                location:
                    locationInput.value.trim(),

                password:
                    password.value

            };


            // Save registered user

            localStorage.setItem(
                "registeredUser",
                JSON.stringify(user)
            );


            // Make sure user is logged out
            // until they sign in

            localStorage.removeItem("isLoggedIn");


            alert(
                "Signup successful! Please sign in."
            );


            // Redirect to Sign In

            window.location.href =
                "SignIn.html";

        }

    });

}


// ==========================================
// SHOW / HIDE SIGNUP PASSWORD
// ==========================================

const togglePassword =
    document.getElementById("togglePassword");


if (togglePassword && password) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.textContent =
                    "Hide";

            }

            else {

                password.type = "password";

                togglePassword.textContent =
                    "Show";

            }

        }
    );

}


// ==========================================
// SHOW / HIDE CONFIRM PASSWORD
// ==========================================

const toggleConfirmPassword =
    document.getElementById(
        "toggleConfirmPassword"
    );


if (toggleConfirmPassword && confirmPassword) {

    toggleConfirmPassword.addEventListener(
        "click",
        function () {

            if (
                confirmPassword.type ===
                "password"
            ) {

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

}


// ==========================================
// SIGN IN
// ==========================================

const signinForm =
    document.getElementById("signinForm");


if (signinForm) {

    const signinEmail =
        document.getElementById("signinEmail");

    const signinPassword =
        document.getElementById("signinPassword");

    const signinEmailError =
        document.getElementById("signinEmailError");

    const signinPasswordError =
        document.getElementById(
            "signinPasswordError"
        );


    signinForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Clear errors

            signinEmailError.textContent = "";

            signinPasswordError.textContent = "";


            const enteredEmail =
                signinEmail.value
                    .trim()
                    .toLowerCase();

            const enteredPassword =
                signinPassword.value;


            let valid = true;


            // ==================================
            // EMAIL
            // ==================================

            if (enteredEmail === "") {

                signinEmailError.textContent =
                    "Email is required.";

                valid = false;

            }

            else if (!isValidEmail(enteredEmail)) {

                signinEmailError.textContent =
                    "Enter a valid email address.";

                valid = false;

            }


            // ==================================
            // PASSWORD
            // ==================================

            if (enteredPassword === "") {

                signinPasswordError.textContent =
                    "Password is required.";

                valid = false;

            }


            if (!valid) {

                return;

            }


            // ==================================
            // GET REGISTERED USER
            // ==================================

            const storedUser =
                localStorage.getItem(
                    "registeredUser"
                );


            if (!storedUser) {

                signinEmailError.textContent =
                    "No registered account found. Please sign up first.";

                return;

            }


            let user;


            try {

                user = JSON.parse(storedUser);

            }

            catch (error) {

                signinEmailError.textContent =
                    "Invalid registered user data.";

                localStorage.removeItem(
                    "registeredUser"
                );

                return;

            }


            // ==================================
            // CHECK LOGIN DETAILS
            // ==================================

            if (
                enteredEmail === user.email &&
                enteredPassword === user.password
            ) {

                // Login successful

                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                );


                alert("Login successful!");


                // Go to Tourist Landing Page

                window.location.href =
                    "travelapp.html";

            }

            else {

                signinPasswordError.textContent =
                    "Incorrect email or password.";

            }

        }
    );


    // ==================================
    // SHOW / HIDE SIGNIN PASSWORD
    // ==================================

    const toggleSigninPassword =
        document.getElementById(
            "toggleSigninPassword"
        );


    if (
        toggleSigninPassword &&
        signinPassword
    ) {

        toggleSigninPassword.addEventListener(
            "click",
            function () {

                if (
                    signinPassword.type ===
                    "password"
                ) {

                    signinPassword.type = "text";

                    toggleSigninPassword.textContent =
                        "Hide";

                }

                else {

                    signinPassword.type =
                        "password";

                    toggleSigninPassword.textContent =
                        "Show";

                }

            }
        );

    }

}


// ==========================================
// TRAVEL APP AUTHENTICATION
// ==========================================

const welcomeUser =
    document.getElementById("welcomeUser");

const logoutBtn =
    document.getElementById("logoutBtn");


// ==========================================
// SHOW USER NAME
// ==========================================

if (welcomeUser) {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");

    const storedUser =
        localStorage.getItem("registeredUser");


    if (
        isLoggedIn === "true" &&
        storedUser
    ) {

        try {

            const user =
                JSON.parse(storedUser);


            welcomeUser.textContent =
                `Welcome, ${user.fullName}`;

        }

        catch (error) {

            console.error(
                "User data error:",
                error
            );

        }

    }

}


// ==========================================
// LOGOUT
// ==========================================

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            // Remove login status

            localStorage.removeItem(
                "isLoggedIn"
            );


            // Redirect to Sign In

            window.location.href =
                "SignIn.html";

        }
    );

}