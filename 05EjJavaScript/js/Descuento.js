function validar(formulario) {

    var montoCompra = parseFloat(formulario.monto.value);

    if (isNaN(montoCompra) || montoCompra <= 0) {
        alert("Por favor, ingrese un valor válido en el campo de monto de compra.");
        return false;
    }

    var descuento = montoCompra * 0.15;

    var totalPagar = montoCompra - descuento;

    var resultadoHTML = "<p>El monto de descuento aplicado es de $" + descuento.toFixed(2) + ".</p>";
    resultadoHTML += "<p>El total a pagar después del descuento es de $" + totalPagar.toFixed(2) + ".</p>";

    document.getElementById("resultado").innerHTML = resultadoHTML;

    return false; 
}
