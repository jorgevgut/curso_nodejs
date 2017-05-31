class Calculadora {
    Sumar(a, b) {
        if (isNaN(a)) {
            a = 0;
        }
        if (isNaN(b)) {
            b = 0;
        }
        return a + b;
    }

    Restar(a, b) {
        return a - b;
    }
}

module.exports = Calculadora;
