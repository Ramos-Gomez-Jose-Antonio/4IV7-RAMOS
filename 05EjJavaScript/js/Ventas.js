function validar(formulario) {
    
    var sueldoBase = parseFloat(formulario.sueldo.value);
    var venta1 = parseFloat(formulario.venta1.value);
    var venta2 = parseFloat(formulario.venta2.value);
    var venta3 = parseFloat(formulario.venta3.value);

    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3) ||
        sueldoBase <= 0 || venta1 <= 0 || venta2 <= 0 || venta3 <= 0) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return false; 
    }

    var comision = (venta1 + venta2 + venta3) * 0.1;

    var totalMes = sueldoBase + comision;

    var resultadoHTML = "<p>El vendedor recibirá $" + comision.toFixed(2) + " por concepto de comisiones por las tres ventas realizadas en el mes.</p>";
    resultadoHTML += "<p>El total que recibirá en el mes, tomando en cuenta su sueldo base y comisiones, será de $" + totalMes.toFixed(2) + ".</p>";

    document.getElementById("resultado").innerHTML = resultadoHTML;

    return false; 
}
