var express = require('express');
var router = express.Router();

//ruta principal

router.get('/', function(req, res){
    res.render('index', {title: 'Ejemplo Express'});           //las plantillas tienen un formato, el renderizado sirve para leer ese formato
});

module.exports = router;