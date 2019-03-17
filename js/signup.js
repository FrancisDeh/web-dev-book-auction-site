function validateSignupForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(email === ''){
        alert("Email cannot be empty");
        return;
    }
    if(password === ''){
        alert("Password cannot be empty");
        return;
    }
    if(confirmPassword === ''){
        alert("Confirm Password cannot be empty");
        return;
    }

    if(password !== confirmPassword){
        alert("Confirm Password does not match with password");
        return;
    }

    alert("You have been successfully registered.");
    sendToNextPage();
}

function validateSigninForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === ''){
        alert("Email cannot be empty");
        return;
    }
    if(password === ''){
        alert("Password cannot be empty");
        return;
    }
    alert("You have been successfully signed in");
   sendToNextPage();
}
function otherSignIn(message) {
    alert("You have been successfully signed in using " + message);
    sendToNextPage();
}

function sendToNextPage() {
    var answer = prompt("Do you want to go the books page? Yes or No");
    if(answer === 'Yes' || answer === 'yes'){
        window.location.href = "allbooks.html";
    }
}