function calculateFinalPrice() {
    // Get input values
    var price = parseFloat(document.getElementById('price').value);
    var discount = parseFloat(document.getElementById('discount').value);

    if (!price || !discount) {
        document.getElementById('result').innerHTML = "Por favor llenar el formulario";
        return;
    }

    if (discount > 100) {
        document.getElementById('result').innerHTML = "Descuento no puede ser mayor a 100";
        return;
    }

    // Calculate final price
    var finalPrice = ((price * (100 - discount)) / 100);

    // Display the result
    document.getElementById('result').innerHTML = "Final Price: $" + finalPrice.toFixed(2);
}