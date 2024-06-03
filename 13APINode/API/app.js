const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

//toda la api la vamos a manejar con JSON
//los archivos con JSON tienen en formato clave valor, como si fuera un diccionario donde tenemos clave : valor

const {json} = require('express');
const app = express();

//vamos a decirle a nuestra aplicacion que usara todo el formato json

app.use(express.json());

//vamos a decirle que estamos ocupando un middleware, que se encarga de las conexiones entre la apliacion en bootstrap con nuestra API
app.use(cors());

//establecemos los parametros de la conexion
const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'n0m3l0',
    database : 'articulosbd'
});

//vamos a realizar la conexion
conexion.connect(function(error){
    if(error){
        throw error;
    }else {
        console.log('Conexion Exitosa si conected');
    }
});

//vamos a empezar por definir las rutas para saber como se va a consumir el servicio
app.get('/', function(req, res){
    res.send('Ruta Inicio')
});

//quiero mostrar los articulos
app.get('/api/articulos', (req, res)=>{
    conexion.query('Select * from articulos', (error, filas)=>{
        if(error){
            throw error;
        }else {
            res.send(filas);
        }
    })
});