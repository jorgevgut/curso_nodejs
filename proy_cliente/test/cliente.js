var chai = require("chai");
var Cliente = require("../cliente.js");

describe("Cliente HTTP", function() {
    var expect = chai.expect;
    var cliente = new Cliente("api.github.com", 443, "https");

    describe("#GET - github.com", function() {
        it("deberia obtener usuario", function(done) {
            cliente.get("/users/jorgevgut", (data) => {
                expect(data).to.not.be.null;
                done()
            });
        })
        it("la respuesta deberia contener el nombre de usuario", function(done) {
            cliente.get("/users/jorgevgut", (data) => {
                var json = JSON.parse(data.body);
                expect(json).to.have.property("login", "jorgevgut");
                done();
            });
        });
    });
});
