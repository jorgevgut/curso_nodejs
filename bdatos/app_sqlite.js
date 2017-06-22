var driver = require('sqlite');

// abrir una conexión
var promesa = driver.open('./base.sqlite');

// then, catch
promesa
    .then(driver => driver.exec('CREATE TABLE IF NOT EXISTS usuarios (nombre TEXT, edad INT);'))
    .then(driver => driver.exec('INSERT INTO usuarios VALUES("Jorge", 26);'))
    .then(driver => driver.get('SELECT * FROM usuarios'))
    .then(console.log)
    .catch(console.error);
// operaciones
