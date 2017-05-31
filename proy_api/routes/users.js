var express = require('express');
var router = express.Router();
var crypto = require('crypto');
// colección
// usuarios
const coleccion = 'usuarios';
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    var autenticado = req.session.autenticado;
    var db = req.app.get('db');
    if (!autenticado) {
        //logica de autenticación/login
        //autenticar utilizando email & password
        var email = req.body.email;
        var password = req.body.password;
        if (!email || !password) {
            res.status(403).send("ERROR");
        }
        // verificar que el email y el password encuentren un usuario.
        var cursor = db.collection(coleccion).find({
            email: email,
            password: crypto.createHash('sha384').update(password, 'utf8').digest() // transforma hash a buffer de bytes
        });
        var resultado = null;
        cursor.on('data', (u) => {
            resultado = u; // ha encontrado el usuario
            console.log(u);
        });
        cursor.on('end', () => {
            if (resultado != null) {
                req.session.autenticado = true;
                req.session.nombre = resultado.nombre;
                req.session.email = resultado.email;
                res.status(200).send("Login correcto!");
            } else {
                req.session.autenticado = false;
                res.status(401).send("No autorizado");
            }
        });
    } else {
        req.session.autenticado = false;
        res.send("El usuario esta autenticado, favor deslogearse");
    }
});

/*router.get('/:nombre',
    if (resultado != null){

}
 function(req, res, next) {
    var db = req.app.get('db');
    var cursor = db.collection(coleccion).find({
        nombre: req.params.nombre
    });
    var resultado;
    cursor.on('data', (d) => {
        resultado = d;
    })
    cursor.on('end', () => res.send(resultado));
});*/

// Usuario:
// nombre, password, email {nombre:"", password:"", email:""}
router.post('/', function(req, res, next) {
    var db = req.app.get('db'); //obtención de la BD
    var usuario = req.body; // envie la data en cuerpo te de la petición HTTP
    // lógica de validación
    if (validarRegistro(usuario) == true) {
        usuario.password = crypto.createHash('sha384').update(usuario.password, 'utf8').digest();
        db.collection(coleccion).insertOne(usuario, (err, resp) => {
            res.send(resp);
        });
    } else {
        res.status(403).send("ERROR");
    }
});

function validarRegistro(usuario) {
    if ((usuario == undefined) || (usuario == null)) {
        return false;
    }
    if (!usuario.nombre) {
        return false;
    }
    if (!usuario.password) {
        return false;
    }
    if (!usuario.email) { // mejorar la validación utilizando expresiones regulares
        return false;
    }
    return true;
}

module.exports = router;
