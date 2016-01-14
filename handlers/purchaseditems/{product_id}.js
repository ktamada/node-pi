'use strict';
var _ = require('lodash');

var PurchasedItemDetails = require('../../models/purchaseditemdetails');
var Error = require('../../models/error');

/**
 * Operations on /purchaseditems/{product_id}
 */
module.exports = {

    /**
     * This endpoint returns detailed information about a specific product purchased by a specific Cisco customer. The &#34;context&#34; of the customer MUST be available and encoded appropriately (E.G. OpenID Connect based federation encapsulated as JSON Web Tokens (JWT) ) either as an x-http-token or part of the response itself. For a hardware or software product, a single standalone major line instance details will be returned or a single parent major line instance details along with one or more child minor line instance URLs will be returned. The URLs will take the form, &#34;https://api.cisco.com/purchaseditems/{product_id}/iteminstance/{instance_id}/iteminstance/{instance_id}&#34; if serial number and duplicate serial number for the minor line instance exists. The URLs will take the form, &#34;https://api.cisco.com/purchaseditems/NA/iteminstance/{instance_id}/iteminstance/{instance_id}&#34; if serial number and duplicate serial number for the minor line instance does not exist.
     *
     * parameters: product_id
     */
    get: function getPurchasedItemByProductId(req, res, next) {

        var fields = !req.query.fields ? null : req.query.fields.replace(',', ' ');
        PurchasedItemDetails.findById(req.params.product_id, fields).exec().then(function(item) {
            if (!item) {
                res.sendStatus(404);
                return next();
            }
            res.status(200).json(item);
            return next();
        }).then(null, function(err) {
            return next(err);
        });

    }

};
