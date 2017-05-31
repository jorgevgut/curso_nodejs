var express = require('express');
var validator = require('validator');

var router = express.Router();
const coleccion = 'carritos';

function validarUsuarioLogeado(req, res, next) {
    if (req.session.autenticado == true) {
        next()
    } else {
        res.status(401).send("No estas autorizado");
    }
}

router.use(validarUsuarioLogeado);

//req.session.autenticado
router.post('/', function(req, res, next) {
    var articulos = req.body.carrito;
    if (validarCarrito(articulos) == true) {
        // secuencia
        var db = req.app.get('db');
        articuloes.usuario = {
            nombre: req.session.nombre,
            email: req.session.email
        };
        db.collection(coleccion).insertOne(articulos, (err, resp) => {
            if (!err) {
                res.status(201);
                res.send(resp);
            } else {
                res.status(500);
                res.send("ERROR");
            }
        });
    } else {
        res.status(403).send("ERROR");
    }
});

function validarCarrito(articulos) {
    // Implementar una lógica de validación
    /* {
        productos:[
            {id,nombre, precio},..
        ]
    } */
    if (validator.isJSON(JSON.parse(articulos)) == false) {
        return false;
    }

    if (articulos['productos'] == undefined) {
        return false;
    }

    if (Array.isArray(articulos.productos) == false) {
        return false;
    }

    articulos.productos.forEach((elemento) => {
        if (!elemento.id instanceof String) {
            return false;
        }

        if (!elemento.nombre instanceof String) {
            return false;
        }

        if (!elemento.precio instanceof String) {
            return false;
        }
    });

    return true;
}
/*
{
    carrito: [
        {}//producto
        {nombre:"", precio:123, departamento:"carniceria,bebidas, frutas..."}
    ]
}
*/

module.exports = router;
