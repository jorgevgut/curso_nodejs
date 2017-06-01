// sockets - TCP
var net = require("net");
var Users = [];

var User = function(){
    this.username = null;
    this.conectado = true;
    this.socket = null;
};

var servidor = net.createServer((socket) => {
    socket.write("Escribe tu nombre de usuario:\n");
    var u = new User();
    u.socket = socket;

    socket.on('data', (d) => {
        if (u.username == null) {
            u.username = d;
            Users.push(u);
        } else {
            Users.forEach((user) => {user.socket.write(u.username +" : " + d)});
        }
    });
    socket.on('close', ()  => {
        console.log(u.username + " desconectado...")
        Users = Users.filter((user) => user.username != u.username);
        Users.forEach((user) => user.socket.write(u.username + " se ha desconectado..."));
    });
});
servidor.listen(1234, () => {console.log("Servidor escuchando clientes...")});
