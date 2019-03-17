function validateContactUsForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("messageArea").value;

    if(email === ''){
        alert("Email cannot be empty!");
        return;
    }

    if(name === ''){
        alert("Name cannot be empty!");
        return;
    }

    if(message === ''){
        alert("Message cannot be empty");
        return;
    }

    alert("Your message has been successfully sent. Thank you for your comment!");
}