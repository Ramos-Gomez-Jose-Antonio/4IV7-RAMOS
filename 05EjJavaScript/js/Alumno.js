document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    var formulario = document.forms["formulario"];

    // Agregar un evento submit al formulario
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        var parcial1 = parseFloat(document.getElementById("parcial1").value);
        var parcial2 = parseFloat(document.getElementById("parcial2").value);
        var parcial3 = parseFloat(document.getElementById("parcial3").value);
        var examenFinal = parseFloat(document.getElementById("examenFinal").value);
        var trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

        // Verificar si se han ingresado todos los valores
        if (!isNaN(parcial1) && !isNaN(parcial2) && !isNaN(parcial3) && !isNaN(examenFinal) && !isNaN(trabajoFinal)) {

            var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

            var porcentajeParciales = promedioParciales * 5.5; 
            var porcentajeExamenFinal = examenFinal * 3.0; 
            var porcentajeTrabajoFinal = trabajoFinal * 1.5; 

            var calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.30 + trabajoFinal * 0.15;

            var resultado = "Porcentaje obtenido en los tres parciales: " + porcentajeParciales.toFixed(2) + "%<br>";
            resultado += "Porcentaje obtenido en el examen final: " + porcentajeExamenFinal.toFixed(2) + "%<br>";
            resultado += "Porcentaje obtenido en el trabajo final: " + porcentajeTrabajoFinal.toFixed(2) + "%<br>";
            resultado += "La calificación final del alumno en la materia de Algoritmos es: " + calificacionFinal.toFixed(2);

            document.getElementById("resultado").innerHTML = resultado;
        } else {
            alert("Por favor, llene todos los campos del formulario.");
        }
    });
});

