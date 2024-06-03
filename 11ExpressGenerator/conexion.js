var mysql = require('mysql2'); 

//primero vamos a conectarnos

var conexion = mysql.createConnection({
    host : 'localhost', //aqui va la ip
    database : 'alumnos4IV7',
    user : 'root',
    password : '12345678'
});

//ejecutamos la conexion
conexion.connect(function(error){
    //si no se conecta
    if(error){
        throw error;
        console.log('Solo juguito contigo');
    }else{
        console.log('Si conected');
    }
})

//vamos a consultar
conexion.query('select * from registro', function(error,respuesta){
    if(error){
        throw error;
        console.log('No tablita');
    }else{
        //como no se cuantos datos tengo debo de recorrerlos
        respuesta.forEach(respuesta => {
            console.log(respuesta);
        });
    }
});

/*//vamos agregar
conexion.query('insert into registro(nombre, appat, apmat, correo, password) values ("jose antonio", "ramos", "gomez", "ramos@gmail.com", "18273645")', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro Exitoso ,', respuesta);
    }
});*/

//vamos a editar
/*conexion.query('UPDATE registro SET boleta = "3", nombre = "Jose Antonio", appat = "Ramos", apmat = "Gomez", correo = "jramosg2202@alumno.ipn.mx", password = "87654321" WHERE boleta = 5', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se pudo editar');
    }else{
        console.log('Edición Exitosa ,', respuesta);
    }
});*/

//vamos a borrar
/*conexion.query('DELETE FROM registro WHERE boleta = 2', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se pudo eliminar');
    }else{
        console.log('Eliminación Exitosa ,', respuesta);
    }
});*/