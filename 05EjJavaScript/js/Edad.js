function validar(formulario) {

    var diaNacimiento = parseInt(formulario.dianacimiento.value);
    var mesNacimiento = parseInt(formulario.mesnacimiento.value);
    var añoNacimiento = parseInt(formulario.añonacimiento.value);
    var diaActual = parseInt(formulario.dia.value);
    var mesActual = parseInt(formulario.mes.value);
    var añoActual = parseInt(formulario.año.value);

    if (isNaN(diaNacimiento) || isNaN(mesNacimiento) || isNaN(añoNacimiento) ||
        isNaN(diaActual) || isNaN(mesActual) || isNaN(añoActual) ||
        diaNacimiento <= 0 || mesNacimiento <= 0 || añoNacimiento <= 0 ||
        diaActual <= 0 || mesActual <= 0 || añoActual <= 0) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return false; 
    }

    var edad = añoActual - añoNacimiento;
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--; // Ajustar la edad si aún no ha cumplido años este año
    }

    var resultadoHTML = "<p>Su edad es: " + edad + " años.</p>";
    document.getElementById("resultado").innerHTML = resultadoHTML;

    return false; 
}
