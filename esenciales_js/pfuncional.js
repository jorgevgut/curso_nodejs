// Programación Funcional en JS

// inmutabilidad
// ausencia de estado
// funciones de orden superior
// regresar un resultado

// función NO funcional
function hello() {
  console.log("hola mundo");
}

var mult = function(a, b) {
  var r = a * b;
  return r;
}

var suma = function(a) {
  return function(b) {
    return a + b; 
  }
}

console.log(mult(3,3));
var r1 = suma(3);
console.log(r1(3));
console.log(r1(2));
console.log(r1(10));
console.log(r1(7));







