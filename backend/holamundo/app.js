var express = require("express");
var app = express()

// ruta (route)
app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/usuarios', function(req, res) {
    res.send({
        usuarios: ["Jorge", "Carlos", "Juan"]
    });
});

app.listen(3000)
