var express = require('express');
var router = express.Router();

// Todas las peticiones deben ser del tipo application/json
var validacion = function(req, res, next) {
    if (req.get('content-type') == "application/json") {
        console.log("Validado")
    } else {
        res.status(403)
            .send("ERROR");
    }
    next();
}

var contadorVistas = function(req, res, next) {
    if (req.session.vistas == undefined) {
        req.session.vistas = 0;
    }
    req.session.vistas++;
    next();
};

router.use(validacion);
router.use(contadorVistas);

router.get('/', (req, res, next) => {
    console.log(req.session);
    res.send("Recurso de animales ha sido visto " + req.session.vistas + " veces");
});

// Crear un animal
router.post('/', (req, res, next) => {
    if (!req.session.animales) {
        req.session.animales = [];
    }

    var body = req.body;
    // {nombre, especie}


    req.session.animales.push(req.body);
    res.send("Peticion ha sido recibida");
});

module.exports = router;
