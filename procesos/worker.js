// escuchar mensajes
process.on('message', (d) => {
    // {arreglo: [1...x]}
    var resultado = d.arreglo.reduce((a, x) => a + x);
    process.send({
        resultado: resultado
    });
    process.exit(0);
});
