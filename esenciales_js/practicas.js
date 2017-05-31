// Programación OO (POO)
// ES6 class

var Objeto = function() {

}

Objeto.prototype.Saludar = function(msg, callback) {
    console.log("Saludo:", msg)
    if (typeof callback == 'function') {
        callback();
    } else {
        console.log("callback no es una función");
    }
}

// instanciar
var o = new Objeto()
o.Saludar("Hola mundo", function() {
    console.log("callback ejecutado");
})
o.Saludar("hey...", 5)
/*Objeto.prototype.Despedirse = function() {
    console.log("Adios");
}
o.Despedirse()
*/
