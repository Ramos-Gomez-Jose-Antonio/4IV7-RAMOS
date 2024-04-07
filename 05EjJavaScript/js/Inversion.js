function validar(formulario) {
    var capitalInicial = parseFloat(formulario.capital.value);
    
    if (isNaN(capitalInicial) || capitalInicial <= 0) {
        alert("Por favor, ingrese un capital inicial válido.");
        return false; // Detener el envío del formulario si el capital inicial es inválido
    }
    
    // Calculamos el dinero ganado después de un mes con un interés del 2%
    var interes = capitalInicial * 0.02; 
    var capitalFinal = capitalInicial + interes;
    
    // Mostrar el resultado en el HTML
    var resultadoHTML = "<p>Después de un mes, su capital inicial de $" + capitalInicial.toFixed(2) + " habrá aumentado en $" + interes.toFixed(2) + ".<br>Su capital final será de $" + capitalFinal.toFixed(2) + ".</p>";
    
    // Insertar el resultado en el div con id "resultado"
    document.getElementById("resultado").innerHTML = resultadoHTML;
    
    return false; // Evitar que el formulario se envíe y recargue la página
}