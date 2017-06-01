var spawn = require('child_process').fork
/*
var hijo = spawn("hijo.js");
hijo.send(JSON.stringify({
    msg: "hola mundo"
}));

hijo.on('message', function(m) {
    console.log("mensaje recibido en el proceso padre...");
    console.log(m);
}); */

// carga pesada de trabajo
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // sumar todos los elementos
//var resultado = arr.reduce((a, x) => a + x);
//console.log(resultado);
var a1 = arr.slice(0, 4);
var a2 = arr.slice(4, arr.length);
var h1 = spawn("worker.js");
var h2 = spawn("worker.js");

var resultado = 0;
h1.send({
    arreglo: a1
});
h2.send({
    arreglo: a2
});

h1.on('message', (data) => {
    resultado += data.resultado;
    console.log(resultado);

});

h2.on('message', (data) => {
    resultado += data.resultado;
    console.log(resultado);
});
