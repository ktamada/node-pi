'use strict';

var request = require('supertest');
var server = require('../server');

server.configure();


describe('/purchaseditems/{contract_id}/serviceline/{service_line_id} tests', function() {
    var app = server.app;

    describe('get /purchaseditems/{contract_id}/serviceline/{service_line_id} tests', function() {

        xit('200 get /purchaseditems/{contract_id}/serviceline/{service_line_id} test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems/{contract_id}/serviceline/{service_line_id}')
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('404 get /purchaseditems/{contract_id}/serviceline/{service_line_id} test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems/{contract_id}/serviceline/{service_line_id}')
                .expect(404)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('500 get /purchaseditems/{contract_id}/serviceline/{service_line_id} test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems/{contract_id}/serviceline/{service_line_id}')
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
