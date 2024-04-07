function validar(formulario) {

    var totalEstudiantes = parseInt(formulario.total.value);
    var hombres = parseInt(formulario.hombres.value);

    var mujeres = totalEstudiantes - hombres;

    var porcentajeHombres = (hombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

    var resultadoHTML = "<p>Porcentaje de hombres en el grupo: " + porcentajeHombres.toFixed(2) + "%</p>";
    resultadoHTML += "<p>Porcentaje de mujeres en el grupo: " + porcentajeMujeres.toFixed(2) + "%</p>";

    document.getElementById("resultado").innerHTML = resultadoHTML;

    return false;
}
