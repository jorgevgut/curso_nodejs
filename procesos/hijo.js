// escuchar mensajes
process.on('message', (mensaje) => {
    var m = JSON.parse(mensaje);
    console.log(m);
    process.send({
        msg: "mensaje recibido"
    });
});
