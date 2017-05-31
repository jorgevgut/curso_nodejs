//var assert = require("assert"); // librera aserción - lanzar errores
var chai = require("chai");
var assert = chai.assert;

var Calculadora = require("../calculadora.js");

describe("Calculadora", function() {
    chai.should();
    var c = new Calculadora();

    describe("#Sumar", function() {
        // prueba -
        it("La suma de dos números es realizada correctamente", function() {
            assert.equal(
                c.Sumar(2, 3),
                5,
                "La suma es incorrecta");
        });

        it("Cuando un valor es nulo, debe transformarse en 0", function() {
            assert.equal(c.Sumar(2, null), 2, "null no equivale a 0");
        })

        // una especificación
        it("NaN siempre debe interpretarse como 0", function() {
            assert.equal(c.Sumar(2, NaN), 2, "NaN no equivale a 0");
        })
    });

    describe("#Restar", function() {
        it("Cuando se restan 2 numeros, debe hacerse correctamente.", function() {
            assert.equal(c.Restar(10, 3), 7, "La resta no esta funcionando");
        });

        it("El resultado de la resta debe ser una variable numerica", function() {
            c.Restar(10, 4).should.be.a("number");
        });
    });
});
