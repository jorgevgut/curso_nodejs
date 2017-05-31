// Cliente HTTP/HTTPS
// github.com/users/jorgevgut
const fs = require('fs');

class Cliente {
    constructor(host, puerto, protocolo) {
        this.host = host;
        this.puerto = puerto;
        this.protocolo = protocolo;
        if (protocolo != "http" && protocolo != "https") {
            console.log("ERROR!!!!");
        }
        this.logDir = fs.mkdtempSync("/tmp/cliente-http-");
    }

    //metodo de autenticación HTTP BASIC
    autenticarBasic(user, pass) {
        this.basicAuth = new Buffer(user + ":" + pass).toString("base64");
    }

    //procesar HEADERS para mantener session -> se realiza en la petición(o request)
    procesarHeaders() {
        var headers = {
            "Accept": "*/*",
            "User-Agent": "Cliente Node.js"
        };
        if (this.basicAuth != undefined) {
            headers.Authorization = "Basic " + this.basicAuth;
        }
        return headers
    }

    // Realizar peticiones HTTP de tipo Get (obtener información)
    get(uri, callback) {
        var opciones = {
            hostname: this.host,
            port: this.puerto,
            method: 'GET',
            path: this.protocolo + "://" + this.host + uri, // https://api.github.com/users/jorgevgut
            headers: this.procesarHeaders()
        };
        this.request(opciones, null, callback);
    }

    post(uri, data, callback) {
        var opciones = {
            hostname: this.host,
            port: this.puerto,
            method: 'POST',
            path: this.protocolo + "://" + this.host + uri, // https://api.github.com/users/jorgevgut
            headers: this.procesarHeaders(),
        };
        this.request(opciones, data, callback);
    }

    // request (manejo de peticiones)
    request(opciones, data, callback) {
        // http o https
        var http = require(this.protocolo); //http, o https
        var respuesta = {
            status: null,
            body: "",
            headers: null
        };
        var peticion = http.request(opciones, (canalRespuesta) => {
            canalRespuesta.on('data', (chunk) => {
                respuesta.body += chunk;
            });
            canalRespuesta.on('end', () => {
                respuesta.status = canalRespuesta.statusCode;
                respuesta.headers = canalRespuesta.headers;
                fs.appendFile(this.logDir + "/cliente.log", "lorem ipsum");
                callback(respuesta);
            });
        });

        if (data != undefined && data != null) {
            var body = JSON.stringify(data);
            peticion.setHeader('Content-Length', Buffer.byteLength(body));
            peticion.setHeader('Content-Type', 'application/json');
            peticion.write(body);
        }
        peticion.end();
    }

}

module.exports = Cliente;
