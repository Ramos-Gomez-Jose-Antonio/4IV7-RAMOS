//primero tenemos que importar las librerias en este caso

var express = require('express');

//tenemos que realizar una instancia del objeto para poder hacer uso de express

var app = express(); //constructores ayudan para poder hacer instancias

//para node tenemos que utilizar rutas de acceso a 
//por medio de los metodos, get, post, pust, delete

app.get('/', function(req, res){                                 //por defecto, cada vez que entramos al navegador y hacemos una peticion por consulta
    //debemos de generar una respuesta del sitio
    res.send('Ruta de Inicio');
});

//levantamos el servidor 
app.listen(3000, function(req,res){
    console.log('Servidor inicializado en el puerto 3000');         //Control C para detener el servidor
});