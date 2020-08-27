// Importando express
const express = require("express");
// Instanciando modulo router de express
const router = express.Router();
// mysql
const conn = require("../database/db");

// Ruta GET
router.get('/', function(req, res) {
  const sql = "SELECT * FROM productos ORDER BY id desc";

  conn.query(sql, function(error, results) {
    if(error) throw error;

    res.render('home', {
      results: results
    });

  });

});

// Ruta POST
router.post('/save', function(req, res) {
  const products = {
    name: req.body.name,
    price: req.body.price
  };

  const sql = "INSERT INTO productos SET ?";
  
  conn.query(sql, products, function(error, results) {
    if(error) throw error;

    res.redirect('/');
  });

});

// Routa DELETE
router.get('/delete/:id', function(req, res) {
  const id = req.params.id;

  const sql = `DELETE FROM productos WHERE id = ${id}`;
  conn.query(sql, function(error, results) {
    if(error) throw error;

    res.redirect('/');
  });

});

// Ruta GET para editar productos
router.get('/edit/:id', function(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM productos WHERE id = ${id}`;

  conn.query(sql, function(error, results) {
    if(error) throw error;

    res.render('edit', {
      results: results[0]
    });

  });

});

// Ruta UPDATE
router.post('/edit/:id', function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;

  const editLink = {
    name: name,
    price: price
  };

  conn.query("UPDATE productos set ? WHERE id = ?", [editLink, id]);
  res.redirect('/');

});

// Exportando el modulo router
module.exports = router;
