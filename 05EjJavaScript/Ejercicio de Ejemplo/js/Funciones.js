/*submit va a traer toda la informacion del formulario
Operador ternario poner a pruba todo lo que venga, todo lo que viene es un evento
el id solo puede llamarse de una sola forma, mientras que los nombres se pueden repetir, eso sirve cuando tengo un grupo*/
// vamos a crear una funcion que se encargue de poder validar que existan unicamente numeros dentro del campo de inversion

function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which; //cualquier cosa todo lo que sea click o arrastrar 
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/; 
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);   //todo para escribir numeros y un punto

}

function interes(){
    var valor = document.getElementById("cantidadi").value;
    var parseo = parseFloat(valor);
    var interes = parseo*(0.037/12);
    var total= interes + parseo;
    document.getElementById("saldoi").value = "$" + total;
}

function borrar(){
    document.getElementById("cantidadi").value = "";
    document.getElementById("saldoi").value = "";
}