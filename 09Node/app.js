//vamos a crear nuestro propio servidor 

var http = require('http');

//todo servidor debe de atender peticiones y debe de generar respuestas, por lo tanto nuestra funcion debe de tener dos parametros request, response

var servidor = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    response.write('<h2>Hola mundo Mi nombre es José Antonio Ramos Gómez mañana me desquitare</h2>');
    console.log('Se hizo una peticion web');
    response.end();
});

//en que puerto va a estar funcionando el servidor
servidor.listen(3000);

//ejecutamos en consola
console.log('Ejecutando el servidor en puerto 3000');