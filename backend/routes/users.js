var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:usuario', function(req, res, next) {
    //req -> petición del cliente (Navegador web)
    //res -> respuesta que vamos a enviar a ese cliente
    // next -> callback
    var usuario = req.params.usuario;
    res.send("Usuario " + usuario);
});
module.exports = router;
