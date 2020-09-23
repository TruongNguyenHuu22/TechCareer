
var password = document.getElementById("password"),
    confirm_password = document.getElementById("repassword");

function validatePassword() {
    if (password.value != repassword.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        repassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
repassword.onkeyup = validatePassword;