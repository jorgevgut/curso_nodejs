var spawn = require('child_process').spawn;
var cat = spawn('cat', ['-n', 'procesos.js']);

cat.stdout.on('data', (data) => {
    console.log(data); // bytes
});
