

const http = require('http');
const port = 8080;

// Esta es la forma de levantar un servidor pero SIN //! EXPRESS
http.createServer( (req, res) => {
    
    res.writeHead( 200, { 'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Danno',
        edad: 23,
        url: req.url
    }

    res.write( JSON.stringify(salida) );
    res.end();
})
.listen( port );

console.log("Escuchando  el puerto 8080");