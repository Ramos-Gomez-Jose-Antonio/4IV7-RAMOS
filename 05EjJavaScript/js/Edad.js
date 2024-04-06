document.addEventListener("DOMContentLoaded", function() {

    var diaNacimiento;
    while (true) {
        diaNacimiento = parseInt(prompt("Ingrese el día de su fecha de nacimiento (en número):"));
        if (!isNaN(diaNacimiento) && Number.isInteger(diaNacimiento)) {
            break;
        }
        alert("Por favor, ingrese un número entero válido para el día.");
    }

    var mesNacimiento;
    while (true) {
        mesNacimiento = parseInt(prompt("Ingrese el mes de su fecha de nacimiento (en número):"));
        if (!isNaN(mesNacimiento) && Number.isInteger(mesNacimiento)) {
            break;
        }
        alert("Por favor, ingrese un número entero válido para el mes.");
    }

    var añoNacimiento;
    while (true) {
        añoNacimiento = parseInt(prompt("Ingrese el año de su fecha de nacimiento (en número y formato YYYY):"));
        if (!isNaN(añoNacimiento) && Number.isInteger(añoNacimiento)) {
            break;
        }
        alert("Por favor, ingrese un número entero válido para el año.");
    }

    var diaActual;
    while (true) {
        diaActual = parseInt(prompt("Ingrese el día actual (en número):"));
        if (!isNaN(diaActual) && Number.isInteger(diaActual)) {
            break;
        }
        alert("Por favor, ingrese un número entero válido para el día actual.");
    }

    var mesActual;
    while (true) {
        mesActual = parseInt(prompt("Ingrese el mes actual (en número):"));
        if (!isNaN(mesActual) && Number.isInteger(mesActual)) {
            break;
        }
        alert("Por favor, ingrese un número entero válido para el mes actual.");
    }

    var añoActual;
    while (true) {
        añoActual = parseInt(prompt("Ingrese el año actual (en número y formato YYYY):"));
        if (!isNaN(añoActual) && Number.isInteger(añoActual)) {
            break;
        }
        alert("Por favor, ingrese un número entero válido para el año actual.");
    }

    var edad = añoActual - añoNacimiento;

    // Verificar si la fecha de nacimiento aún no ha ocurrido este año
    if (mesNacimiento > mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
        edad--;
    }

    // Mostrar el resultado
    var resultado = "\nSu edad es: " + edad + " años.";

    // Insertar el resultado
    document.getElementById("resultado").innerHTML = resultado;
});
