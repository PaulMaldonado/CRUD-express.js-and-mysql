// Importando myslq
const mysql = require("mysql");

// Creando conexión con mysql
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_express_db'
});

// Verificar si esta lista la conexión a la BD
conn.connect((error) => {
  if(error) {
    console.log("No su pudo conectar a la BD ", error);
  }

  console.log("Conexión exitosa");
});

// Exportando base de datos
module.exports = conn;