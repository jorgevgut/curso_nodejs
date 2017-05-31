var https = require('https');

// opciones
var opciones = {
    port: 443,
    hostname: "google.com",
    method: "get",
    path: "https://www.google.com.mx/?gws_rd=ssl"
};

var req = https.request(opciones, (respuesta) => {
    //la 'respuesta' es un CANAL de Lecura
    respuesta.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    respuesta.on('end', () => {
        console.log(respuesta.headers);
    });
});
req.end(); //WriteStream: lanza la comunicación del request
console.log("Petición lanzada");
