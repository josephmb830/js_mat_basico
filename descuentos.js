function calculateFinalPrice() {
    // Get input values
    var price = parseFloat(document.getElementById('price').value);
    var discount = parseFloat(document.getElementById('discount').value);

    // Calculate final price
    var finalPrice = ((price * (100 - discount)) / 100);

    // Display the result
    document.getElementById('result').innerHTML = "Final Price: $" + finalPrice.toFixed(2);
}