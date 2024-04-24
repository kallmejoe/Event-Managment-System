const formHTM = document.getElementById('.form')
const sendbtn = document.getElementById('BTN')

let username = document.querySelector(".username").value;

let password = document.querySelector(".password").value;
let email = document.querySelector(".email").value;
let phoneNo = document.querySelector(".phone").value;
let firstname = document.querySelector(`.firstname`);

function isvalidName(firstname) {
    let lettersRegex = /^[a-zA-Z]+$/;
    return lettersRegex.test(firstname);
}


function isPhoneNumberValid(phoneNumber) {
    let numbersRegex = /^[0-9]+$/;
    return numbersRegex.test(phoneNumber);
}
function isEmailValid(email) {
    let lettersRegex = /^[a-zA-Z]+$/;
    return lettersRegex.test(firstname);

}
function isPasswordStrong(password) {
    let lengthRegex = /.{8,}/;
    let uppercaseRegex = /[A-Z]/;
    let lowercaseRegex = /[a-z]/;
    let numberRegex = /[0-9]/;
    let specialCharRegex = /[^A-Za-z0-9]/;
    return (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password)
    );
}
function validateConfirmPassword() {
    let confirmPasswordInput = document.querySelector(".confirm-password");
    let confirmPasswordValue = confirmPasswordInput.value.trim();
    let confirmPasswordFeedback = document.querySelector(".invalid-feedback.confirm-password");
    let passwordInput = document.querySelector(".password");
    let passwordValue = passwordInput.value.trim();

    if (confirmPasswordValue === "") {
        confirmPasswordFeedback.textContent = "Please confirm your password";
        confirmPasswordFeedback.classList.add("active");
        return false;
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordFeedback.textContent = "Passwords do not match";
        confirmPasswordFeedback.classList.add("active");
        return false;
    } else {
        confirmPasswordFeedback.classList.remove("active");
        return true;
    }
}


function saveData() {
    let username = document.querySelector(".username").value;
    
    let password = document.querySelector(".password").value;
    let email = document.querySelector(".email").value;
    let phoneNo = document.querySelector(".phone").value;
    let firstname = document.querySelector(`.firstname`).value;



    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some(record => record.email === email))
        alert("User already exists,please login")
    else if (user_records.some(record => record.username === username)) {
        alert('Username has been taken')
    }

    else {
        user_records.push(
            {
                "firstName": firstname,
                "username": username,
                "email": email,
                "password": password,
                "phone": phoneNo
            }
        )
        localStorage.setItem("users", JSON.stringify(user_records)); // Save updated user_records array
    }
}
