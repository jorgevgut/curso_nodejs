var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        pagina: 'paginas/login',
        datos: {
            nombre: 'Jorge',
            contenido: "Este es un texto"
        },
        //script: "javascripts/main.js"
        script: "javascripts/login.js"
    });
});

/* GET home page. */
router.get('/prueba', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        pagina: 'paginas/prueba',
        datos: {},
        script: "javascripts/otro.js"
    });
});


router.get('/db', function(req, res, next) {
    var db = req.app.get('db');
    console.log(db);
    res.send("Petición recibida");

});

module.exports = router;
