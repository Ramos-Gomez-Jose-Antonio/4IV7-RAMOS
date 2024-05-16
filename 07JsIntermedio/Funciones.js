/*
Js maneja variables del siguiente modo:

var -> variable de acceso local que cualquiera puede hacer uso de ella
let -> variable "protegida" solo se puede hacer uso dentro de la funcion una variable local mas no global
const -> es una constante, significa que su valor no puede cambiar 


var x = "hola";
var x = "habia una vez";
if(true){
    
    console.log(x);
    // es independiente
}

---------------------------------------------------------------------------------------------------------------------------------
"" formatos de cadena
'' digigtos
--consultas en bases de datos, si hay diferencias entre estos dos--

`` 1 modificador de HTML (AGREGAR, BORRAR, QUITAR, ACTUALIZAR ELEMENTOS DE HTML EN JS) 2 poder pasar parametro de funciones 


//quiero desarrollar una funcion de suma

function suma(n1,n2){
    return n1+n2;
}
console.log(`Esta es la suma: ${suma(4,5)}`);

//  funciones flecha, las funciones flecha nos ayuda a poder realizar operaciones de una forma mas sencilla y su estructura es la siguiete:
// "cadena" -> id, clase, nombre, atributo

const sumarFlecha = (n1,n2) => n1+n2;
console.log(`Esta es la suma: ${sumarFlecha(10,5)}`);

*/

const razasDePerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Betoven",
    "Dalmata",
    "Pitbull",
    "San Bernardo"
];

//queremos recorrerlo e imprimirlo
//for


/*for(let i =0; i<razasDePerros.length; i++){
    console.log(razasDePerros[i]);
}
*/


//for of
/*for(const raza of razasDePerros){
    console.log(raza);
}
*/


/*//for in cuente los indices dentro del arreglo, el indice devuelve la posicion
for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

for(const indice in razasDePerros){
    console.log(razasDePerros);
}

//La diferencia es que con el of imprime todos y con el in imprimeme con la condicion tal, como cuando tengo arreglos especificos en funcion de un filtro
*/


//forEach for mejorado -> itera sobre los elementos del arreglo y no devuelve nada (objetos y cadenas)
//Todos los forEach son funciones flecha por defecto

// razasDePerros.forEach((raza) => console.log(raza));   //callback llaman asi misma
//la estructura general de el forEach:
// argumento.forEach((raza, indice, arregloOriginal) => loquequiero que haga)


//Funcion MAP
//itera sobre los elementos del arreglo y regresa un arreglo diferente con el cual podemos jugar
//const razasDePerrosEnMayusculas = razasDePerros.map((raza) =>console.log(raza.toUpperCase()));


//FIND
//Nos permite realizar una busqueda de un elemento dentro del arreglo, si lo encuentra, lo retorna si no lanza un "undefinend"
//Por ejemplo yo quiero buscar dentro del arreglo si existe, la raza Chihuahua
/*if(razasDePerros.find((raza) =>raza=== "Chihuahua")){
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razasDePerros);
} else {
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log(razasDePerros);
}
*/


//FINDINDEX
//Es muy similar al anterior realiza una busqueda del elemento, pero en lugar de regresar el elemento, regresa su indice, si no lo encuentra nos devuelve un -1 esta funcion es particularmente util en elementos que necesitamos modificar de un arreglo original, dentro de una copia
// -1 se sale del arreglo ya que estos inician desde 0 

const indiceChihuahua = razasDePerros.findIndex((raza) => raza === "Chihuahua");
if(indiceChihuahua > -1){
    //el resultado si esta dentro del arreglo
    console.log(razasDePerros[indiceChihuahua]);
    //aparte le voy a decir que agregue un texto
    razasDePerros[indiceChihuahua] += " (Es una raza de perros chiquita y escandalosa, como algunos alumnos escandalosos)";
    console.log(razasDePerros[indiceChihuahua]);
    console.log(razasDePerros);
}


//https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model

//como examen de segundo parcial
/*
opcion 1 sudoku de 6 tableros
opcion 2 gato de gatos
opcion 3 scrable
opcion 4 piedra,papel,tijeras,lagarto,spock
opcion 5 smash de peleas con 4 personajes
opcion 6 una combinacion de 3 juegos
*/


