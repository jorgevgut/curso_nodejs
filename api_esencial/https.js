var https = require("https");
var fs = require("fs")
var opt = {
    key: fs.readFileSync('llave.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: "12345"
};

// llaves, key pair
// llave_priv, llave_pub

https.createServer(opt, (req, res) => {
    res.writeHead(200);
    res.end("Hola mundo");
}).listen(8000);
