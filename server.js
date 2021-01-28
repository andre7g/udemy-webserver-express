const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000

//express hbs engine-- npm i hbs --save
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    // let salida = {
    //     nombre: 'André Guerra',
    //     edad: 27,
    //     url: req.url
    // }
    //res.send(salida);
    res.render('home', {
        nombre: 'andre guerra'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
// app.get('/data', (req, res) => {


//     res.send('Hola data');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});