// Arreglos: funciones esenciales

var data = [1,2,10,4,5];

// forEach
data.forEach(function(a,b) {
  console.log(a, b);
});

// filter
var dataF = data.filter((a) => a < 5);
console.log(dataF);

// map - transformación de datos
var dataT = data.map(function(a) { return a * a;});
console.log(dataT);

// reduce - unico resultado
var resultado = data.reduce(function(a, b) { return a + b;}, -10);
console.log(resultado);

var resultado2 = data.filter((a) => a < 5)
                    .map((a) => a * a)
                    .reduce((a,b) => a +b);
console.log(resultado2);


console.log(data);
