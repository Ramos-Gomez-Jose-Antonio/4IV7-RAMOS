document.addEventListener("DOMContentLoaded", function() {
    var capitalInicial;
    // Solicitar que se ingrese el capital inicial
    while (true) {
        var msj = prompt("Ingrese el capital inicial:");
        // Intentar convertir la entrada a un número decimal
        capitalInicial = parseFloat(msj);
        if (!isNaN(capitalInicial)) {
            break; 
        }
        // Si no es válido, mostrar un mensaje de error y continuar pidiendo la entrada
        alert("Por favor, ingrese un número válido.");
    }

    // Calculando el dinero ganado después de un mes con un interés del 2%
    var interes = capitalInicial * 0.02; 
    var capitalFinal = capitalInicial + interes;
    // Damos el resultado
    var mensaje = "Después de un mes, su capital inicial de $" + capitalInicial.toFixed(2) + " habrá aumentado un $" + interes.toFixed(2) + ".\nSu capital final será de $" + capitalFinal.toFixed(2);
    // Imprimimos el resultado 
    document.getElementById("resultado").innerText = mensaje;
});