var mysql = require('mysql2'); 

//primero vamos a conectarnos

var conexion = mysql.createConnection({
    host : 'localhost', //aqui va la ip
    database : 'alumnos4IV7',
    user : 'root',
    password : 'n0m3l0'
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

//vamos agregar
conexion.query('insert into registro(nombre, appat, apmat, correo, password) values ("Diana", "Ortiz", "Dominguez", "cosita@cosa.com", "12345678")', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro Exitoso ,', respuesta);
    }
});

//vamos a editar

//vamos a borrar