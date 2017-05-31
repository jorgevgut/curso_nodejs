var cliente = require('mongodb').MongoClient;

// cadena conexión
var url = 'mongodb://mongodb@127.0.0.1:32770/mibase';

//conexión
cliente.connect(url, (error, db) => {
    // colecciones (NOSQL)
    db.collection('animales')
        .insertOne({
            nombre: "Luna",
            especie: "Perro"
        }, (error, result) => {
            db.collection('animales')
                .findOne((error, result) => {
                    console.log(result);
                    db.close();
                });
        });
});
