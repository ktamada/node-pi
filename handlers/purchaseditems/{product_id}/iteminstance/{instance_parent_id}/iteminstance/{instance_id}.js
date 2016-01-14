'use strict';
var _ = require('lodash');

var PurchasedItemDetails = require('../../../../../../models/purchaseditemdetails');
var Error = require('../../../../../../models/error');

/**
 * Operations on /purchaseditems/{product_id}/iteminstance/{instance_parent_id}/iteminstance/{instance_id}
 */
module.exports = {

    /**
     * This endpoint returns detailed information about a specific product purchased by a specific Cisco customer. It is a leaf minor product item instance. The &#34;context&#34; of the customer MUST be available and encoded appropriately (E.G. OpenID Connect based federation encapsulated as JSON Web Tokens (JWT) ) either as an x-http-token or part of the response itself. The response will include a URL to itself.
     *
     * parameters: product_id, instance_parent_id, instance_id
     */
    get: function getMinorProductInstance(req, res, next) {

        res.sendStatus(501);
        return next();

    }

};
