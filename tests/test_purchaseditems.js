'use strict';

var request = require('supertest');
var server = require('../server');

server.configure();


describe('/purchaseditems tests', function() {
    var app = server.app;

    describe('get /purchaseditems tests', function() {

        xit('200 get /purchaseditems test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems')
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('404 get /purchaseditems test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems')
                .expect(404)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('500 get /purchaseditems test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems')
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
