var Ave = require("./eventos.js");

var a = new Ave();

var callback = function () {
  console.log(100);
}
a.cantar();
a.cantar(callback);
// mas ejecución de código
// 1
// 2
// 3
