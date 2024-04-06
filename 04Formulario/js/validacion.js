/*JavaScript es un lenguaje de programacion multiparadigma Acepta programacion funcional, estructurada, POO, eventos. Dentro de JS no existe int, double, float, string, etc
Para el manejo de variables con tipo de dato existe el estandar ES6 el cual nos dice que para el manejo de variables tenemos:

VAR LET CONST*/ 

// vamos hacer una funcion para comprobar que el campo nombre sea mayor a 3 caracteres

function validar(formulario){
    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe mas de tres caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "abcdefghijklmnñopqrstuvwxyz" + "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    var checkStr = formulario.nombre.value;
    alert(checkStr);

    var allvalido = true;
    //vamos hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separe en caracteres, una vez que tenga cada caracter debo de comparalo con la cadena que en este momento estoy considerando como la verdad absoluta, y si despues de recorrer toda la cadena encuentro que el caracter no se encuentra, envie un error
    for(var i=0; i<checkStr.length; i++){
        var caracteres = checkStr.charAt(i); //separarla por caracteres
        for(var j=0; j<abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido=false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "0123456789";

    var checkStr = formulario.edad.value;
    alert(checkStr);

    var allvalido = true;
    //vamos hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separe en caracteres, una vez que tenga cada caracter debo de comparalo con la cadena que en este momento estoy considerando como la verdad absoluta, y si despues de recorrer toda la cadena encuentro que el caracter no se encuentra, envie un error
    for(var i=0; i<checkStr.length; i++){
        var caracteres = checkStr.charAt(i); //separarla por caracteres
        for(var j=0; j<abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido=false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente numeros en el campo de edad");
        formulario.edad.focus();
        return false;
    }

    //funcion para validar el correo es necesario contar con una expresion regular porque tenemos un formato el cual es: texto.texto@texto.texto
    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
    var txt= formulario.correo.value;
    alert("Email" + (b.text(txt)?"":"no ")+ "valido");
    return b.test;
    
}