// Objeto "Ave" para demostración del uso de callbacks y eventos

var Ave = function() {
};

Ave.prototype.cantar = function (callback) {
  // El ave comienza a cantar
  console.log("func: cantar...");
  // el ave ha "cantado"
 if (callback != undefined) {
    callback();
 }
}
module.exports = Ave;
