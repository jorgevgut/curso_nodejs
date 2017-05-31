var Cliente = require("./cliente.js");

var cliente = new Cliente("localhost", "8080", "http");

/*
cliente.post("/animales/", {
    nombre: "Luna",
    especie: "perro"
}, (respuesta) => console.log(respuesta));*/

// autenticar nuestro cliente con usuario y password validos
/*clienteGitHub.autenticarBasic("jorgevgut", "");

clienteGitHub.get("/users/jorgevgut", (respuesta) => {
    console.log(respuesta);
});*/


/*clienteGitHub.post("/repos/jorgevgut/uuid/issues/2/comments", {
        "body": "esta es otra prueba"
    },
    (respuesta) => console.log(respuesta));
*/
