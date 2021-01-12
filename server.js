
//* La forma en la que se hace express
let express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

/*
//* Middleware: Es una instruccion o callback que se va a ejecutar siempre, sin importar que se consuma 
*/
app.use( express.static(  __dirname + '/public') );
/* 
    Poner atencion dado que al colocar este middleware en la parte de arriba estamos diciendo que se abra la carpeta publica, es 
    decir que mostrara la pagina web.
 */
hbs.registerPartials( __dirname + '/views/parciales');

 app.set('view engine', 'hbs');

//* HELPERS
 /*//! Los colocamos en otro lado que son las funciones que necesitamos como fechas etc */

app.get('/', (req, res) => { 
    // Aqui decimos que renderizar y que variables tiene la pagina
    res.render( 'home', {
        name: 'brian daniel espinosa garcia' 
    } );
});


app.get('/about', (req, res) => { 
    
    res.render( 'about');
});

app.listen(port, () => { console.log(`Escuchando peticiones en el puerto ${ port } `)});

