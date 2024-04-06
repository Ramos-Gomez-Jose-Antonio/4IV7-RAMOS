document.addEventListener("DOMContentLoaded", function() {
    var totalEstudiantes, hombres, mujeres;

    // Solicitar que ingrese el número total de estudiantes
    while (true) {
        totalEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes en el grupo:"));
        if (!isNaN(totalEstudiantes) && totalEstudiantes >= 0) {
            break; 
        }
        alert("Por favor, ingrese un número válido mayor o igual a cero.");
    }

    // Solicitar que ingrese la cantidad de hombres
    while (true) {
        hombres = parseInt(prompt("Ingrese la cantidad de hombres en el grupo:"));
        if (!isNaN(hombres) && hombres >= 0 && hombres <= totalEstudiantes) {
            break; 
        }
        alert("Por favor, ingrese un número válido mayor o igual a cero y que no supere el total de estudiantes.");
    }

    // Calcular la cantidad de mujeres restando la cantidad de hombres al total de estudiantes
    mujeres = totalEstudiantes - hombres;

    // Calcular el porcentaje de hombres y mujeres
    var porcentajeHombres = (hombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

    // Mostrar el resultado
    var resultado = "Porcentaje de hombres en el grupo: " + porcentajeHombres.toFixed(2) + "%<br>";
    resultado += "Porcentaje de mujeres en el grupo: " + porcentajeMujeres.toFixed(2) + "%<br>";

    document.getElementById("resultado").innerHTML = resultado;
});
