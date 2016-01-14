'use strict';
var _ = require('lodash');

var PurchasedItemSummary = require('../../models/purchaseditemsummary');
var Error = require('../../models/error');

/**
 * Operations on /purchasedContractItems/{contract_id}
 */
module.exports = {

    /**
     * This endpoint returns top level information about a specific contract purchased by a specific Cisco customer. The &#34;context&#34; of the customer MUST be available and encoded appropriately (E.G. OpenID Connect based federation encapsulated as JSON Web Tokens (JWT) ) either as an x-http-token or part of the response itself. All unique combinations of input contract and service line summary information will be returned. The response will also include URLs of individual service products with endpoints pointing to a specific service line for obtaining further summary information. The url will take the form, &#34;https://api.cisco.com/purchaseditems/{product_id}/serviceline/{service_line_id}&#34;.
     *
     * parameters: contract_id, range
     */
    get: function getPurchasedContractItems(req, res, next) {

        var fields = !req.query.fields ? null : req.query.fields.replace(',', ' ');
        PurchasedItemSummary.findById(req.params.contract_id, fields).exec().then(function(item) {
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
