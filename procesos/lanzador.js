var spawn = require('child_process').fork

var hijo = spawn("hijo.js");
hijo.send(JSON.stringify({
    msg: "hola mundo"
}));

hijo.on('message', function(m) {
    console.log("mensaje recibido en el proceso padre...");
    console.log(m);
});
