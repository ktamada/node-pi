'use strict';

var request = require('supertest');
var server = require('../server');

server.configure();


describe('/purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id} tests', function() {
    var app = server.app;

    describe('get /purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id} tests', function() {

        xit('200 get /purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id} test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id}')
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('404 get /purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id} test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id}')
                .expect(404)
                .end(function(err, res) {
                    if (err) {
                        done.fail(err);
                    }
                    done();
                });
        });

        xit('500 get /purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id} test', function(done) {
            request(app)
                .get('/v0.1/purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id}')
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
