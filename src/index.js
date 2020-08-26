// Importando express
const express = require("express");
// Importando Handlebars motor de plantillas
const exphbs = require("express-handlebars");
// Importando body parser
const bodyParser = require("body-parser");
// Importando modulo path
const path = require("path");

// Importando modulo routes
const routes = require("./routes/route");

const app = express();
const PORT = 3000;


// Vistas
app.set('views', path.join(__dirname, 'views'));
// Agregando motor de plantillas
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Usando body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Usando las rutas
app.use('/', routes);
app.use('/save', routes);

// Sirviendo archivos estaticos
app.use('/assets', express.static(__dirname + '/public'));


// Escuchando servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
