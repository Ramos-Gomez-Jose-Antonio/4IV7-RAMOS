/*public todo lo que va a ver el usuario final
html, css, img, los videos etc etc

routes: cuando se vaya a registrar te vas por aqui, eliminar, editar etc. es un controlador
	por donde y que elementos (el controlador)

view: las plantillas*/


//tenemos que tener las librerias

var createError = require('http-errors');   //manejo de errores
var express = require('express');      //servidor
var path = require('path');               //para archivos
var cookieParser = require('cookie-parser');

//vamos a crear las primeras rutas, debe de haber una ruta inicial
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//vamos a visualizar los elementos
var app = express();

//vamos a visualizar las views
//para decirle al codigo donde se encuentra cada archivo de cada vista
app.set('views', path.join(__dirname, 'views'));

//tengo que definir el tipo de plantilla
app.set('views engine', 'ejs');

//vamos a usar la ruta
app.use('/', indexRouter);
//si hay mas rutas
app.use('/users', usersRouter);

//vamos a definir los directorios publicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//por si hay un error 404
app.use(function(req, res, next){
    next(createError(404));
});

//para el manejo del handler
app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //vamos a un error 500
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app; 