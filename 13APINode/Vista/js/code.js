/*
Este proyecto tiene como fin poder consumir una base de datos
significa que el proyecto esta dividido en dos partes

La aplicación visual para el usuario
API con mysql
*/

//url de donde se encuentra la bd
const url = "http://localhost:3000/api/articulos";
const contenedor = document.querySelector('tbody');
let resultados = '';

//elementos del modal
const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formArticulo = document.getElementById('form');

const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');

//necesitamos una variable para elegir una opcion
let opcion = '';

//vamos a dar la accion para que muestre el modal
btnCrear.addEventListener('click', ()=>{
    //primero vamos a vaciar los campos del modal
    descripcion.value = '';
    precio.value = '';
    stock.value = '';
    
    //vamos a usar el metodo de bootstrap para ejecutar el modal
    modalArticulo.show();

    //vamos a darle opciones a nuestro boton
    opcion = 'crear';
});

//voy a crear una funcion para obtener todos los articulos 
const mostrar = (articulos)=>{
    //tenemos que obtener cada una de las filas de la consulta 
    articulos.forEach(articulo => {
        resultados += `
        <tr>
            <td> ${articulo.id} </td>
            <td> ${articulo.descripcion} </td>
            <td> ${articulo.precio} </td>
            <td> ${articulo.stock} </td>
            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a> <a class="btnBorrar btn btn-danger">Borrar</a></td>
        </tr>
        `
    });
    //mostrar los resultados de la query
    contenedor.innerHTML = resultados;
}

// vamos a conectar para que se muestren los elementos
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error));