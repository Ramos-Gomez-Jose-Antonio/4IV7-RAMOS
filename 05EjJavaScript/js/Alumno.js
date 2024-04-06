document.addEventListener("DOMContentLoaded", function() {
    var parcial1, parcial2, parcial3, examenFinal, trabajoFinal;

    // Solicitar que se ingrese las tres calificaciones parciales
    while (true) {
        parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
        if (!isNaN(parcial1)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    while (true) {
        parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
        if (!isNaN(parcial2)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    while (true) {
        parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
        if (!isNaN(parcial3)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    // Solicitar que se ingrese la calificación del examen final 
    while (true) {
        examenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
        if (!isNaN(examenFinal)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    // Solicitar que se ingrese la calificación del trabajo final
    while (true) {
        trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));
        if (!isNaN(trabajoFinal)) {
            break; 
        }
        alert("Por favor, ingrese un número válido.");
    }

    // Calcular el promedio de los tres parciales
    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Calcular los porcentajes obtenidos en los tres parciales, en el examen final y en el trabajo final
    var porcentajeParciales = promedioParciales * 5.5; 
    var porcentajeExamenFinal = examenFinal * 3.0; 
    var porcentajeTrabajoFinal = trabajoFinal * 1.5; 

    // Calcular la calificación final según los porcentajes indicados
    var calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.30 + trabajoFinal * 0.15;

    // Mostrar el resultado
    var resultado = "Porcentaje obtenido en los tres parciales: " + porcentajeParciales.toFixed(2) + "%<br>";
    resultado += "Porcentaje obtenido en el examen final: " + porcentajeExamenFinal.toFixed(2) + "%<br>";
    resultado += "Porcentaje obtenido en el trabajo final: " + porcentajeTrabajoFinal.toFixed(2) + "%<br>";
    resultado += "La calificación final del alumno en la materia de Algoritmos es: " + calificacionFinal.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
});

