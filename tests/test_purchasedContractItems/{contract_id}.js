'use strict';

var request = require('supertest');
var server = require('../server');

server.configure();


describe('/purchasedContractItems/{contract_id} tests', function() {
    var app = server.app;

    describe('get /purchasedContractItems/{contract_id} tests', function() {

        xit('200 get /purchasedContractItems/{contract_id} test', function(done) {
            request(app)
                .get('/v0.1/purchasedContractItems/{contract_id}')
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('404 get /purchasedContractItems/{contract_id} test', function(done) {
            request(app)
                .get('/v0.1/purchasedContractItems/{contract_id}')
                .expect(404)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('500 get /purchasedContractItems/{contract_id} test', function(done) {
            request(app)
                .get('/v0.1/purchasedContractItems/{contract_id}')
                .expect(500)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

    });

});
