document.addEventListener("DOMContentLoaded", function() {
    var sueldoBase, venta1, venta2, venta3;
    
    while (true) {
        sueldoBase = parseFloat(prompt("Ingrese su sueldo base:"));
        if (!isNaN(sueldoBase)) {
            break;
        }
        alert("Por favor, ingrese un número válido.");
    }

    while (true) {
        venta1 = parseFloat(prompt("Ingrese el monto de la primera venta:"));
        if (!isNaN(venta1)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    while (true) {
        venta2 = parseFloat(prompt("Ingrese el monto de la segunda venta:"));
        if (!isNaN(venta2)) {
            break;
        }
        alert("Por favor, ingrese un número válido.");
    }

    while (true) {
        venta3 = parseFloat(prompt("Ingrese el monto de la tercera venta:"));
        if (!isNaN(venta3)) {
            break;
        }
        alert("Por favor, ingrese un número válido.");
    }

    // Calcular la comisión por las ventas mas los 10% extra
    var comision = (venta1 + venta2 + venta3) * 0.1;

    // Calcular el total que recibirá el vendedor en el mes
    var totalMes = sueldoBase + comision;

    // Mostrar el resultado
    var resultado = "<p>El vendedor recibirá $" + comision.toFixed(2) + " de comisiones por las tres ventas realizadas en el mes.</p>";
    resultado += "<p>El total que recibirá en el mes, tomando en cuenta su sueldo base y comisiones, será de $" + totalMes.toFixed(2) + ".</p>";

    // Insertar el resultado
    document.getElementById("resultado").innerHTML = resultado;
});
