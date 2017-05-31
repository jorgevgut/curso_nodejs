var express = require('express');
var router = express.Router();
const colleccion = 'productos';

function validarUsuarioLogeado(req, res, next) {
    if (req.session.autenticado == true) {
        next()
    } else {
        res.status(401).send("No estas autorizado");
    }
}

router.use(validarUsuarioLogeado);


router.get('/', function(req, re, next) {
    //recuperar la base de datos
    var db = req.app.get('db');
    db.collection(coleccion).find().toArray((error, documentos) => {
        if (!error) {
            res.send({
                productos: documentos
            });
        } else {
            res.status(500).send("ERROR");
        }
    });;
});



module.exports = router;
