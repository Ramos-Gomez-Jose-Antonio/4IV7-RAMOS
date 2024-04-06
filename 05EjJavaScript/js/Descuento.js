document.addEventListener("DOMContentLoaded", function() {
    var montoCompra;

    // Solicitar que se ingrese el monto de la compra hasta que proporcione un número válido
    while (true) {
        montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));
        if (!isNaN(montoCompra)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    // Calcular el descuento (15% del monto de la compra)
    var descuento = montoCompra * 0.15;

    // Calcular el monto final que el cliente deberá pagar
    var montoFinal = montoCompra - descuento;

    // Mostrar el resultado
    var resultado = "\nEl descuento aplicado sobre el total de la compra es de $" + descuento.toFixed(2) + "<br>";
    resultado += "El monto final que deberá pagar el cliente es de $" + montoFinal.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
});