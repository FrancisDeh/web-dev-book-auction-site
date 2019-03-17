function addToCart() {
    var answer = prompt("Add book to cart? Yes/No");

    if(answer === 'Yes' || answer === 'yes'){
        alert("Item has been added to cart");

        //get the number of items added to cart -- this is shown on the navigation bar--near checkout link
        var items = document.getElementsByClassName("items")[0].innerText;
       //convert text to number
        items = parseInt(items);
        //increment the number
        items++;
        //set the new number to be reflected on the page
        document.getElementsByClassName("items")[0].innerText = items;
    }
}