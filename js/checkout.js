//keeps track of the card selected to make payement, by default none is selected
//if use sends the form without selecting a card, an error will be issured
var cardIsSelected = false;

function cardSelected() {
    cardIsSelected = true;
}

function validateShippingInfo() {
    var country, zipcode, name, address, cardNumber, cardExpiryDate;
    country = document.getElementById("country").value;
    name = document.getElementById("name").value;
    address = document.getElementById("address").value;
    zipcode = document.getElementById("zipCode").value;
    cardNumber = document.getElementById("cardNumber").value;
    cardExpiryDate = document.getElementById("expiryDate").value;

    //if any of the fields are empty or the card type was not seleted, issue an error
    if(country === '' || name === '' || address === '' || zipcode === '' || cardNumber === '' || cardExpiryDate === '' || cardIsSelected === false){
        if(cardIsSelected){
            alert("None of the field must be empty.");
            return;
        } else {
            alert("None of the field must be empty. Check your card type");
            return;
        }

    }

    alert("You have successfully purchased the items. Your books will be delivered to you soon. Thank you!");

    //ask if user will continue shopping. if yes, go to books collection, else go to home page
    var answer = prompt("Do you want to continue shopping? Yes/No");
    if(answer === 'yes' || answer === 'Yes'){
        window.location.href = "allbooks.html";
    } else if(answer === 'No' || answer === 'no'){
        window.location.href = "../index.html";
    }
}