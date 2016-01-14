'use strict';
var _ = require('lodash');

var PurchasedItemSummary = require('../../../../models/purchaseditemsummary');
var Error = require('../../../../models/error');

/**
 * Operations on /purchaseditems/{contract_id}/serviceline/{service_line_id}
 */
module.exports = {

    /**
     * This endpoint returns top level information about a specific contract service line purchased by a specific Cisco customer. The &#34;context&#34; of the customer MUST be available and encoded appropriately (E.G. OpenID Connect based federation encapsulated as JSON Web Tokens (JWT) ) either as an x-http-token or part of the response itself. All unique combinations of input service line and product instance summary information will be returned. The response will also include URLs of individual products with endpoints pointing to a specific hardware/software product instance. If serial number for a hardware or software exists, then the url will take the form, &#34;https://api.cisco.com/purchaseditems/{product_id}/iteminstance/{instance_id}&#34;. If serial number and duplicate serial number do not exist, then url will take the form, &#34;https://api.cisco.com/purchaseditems/NA/iteminstance/{instance_id}&#34;.
     *
     * parameters: contract_id, service_line_id, range
     */
    get: function getPurchasedContractServiceItems(req, res, next) {

        PurchasedItemSummary.findById(req.params.contract_id).exec().then(function(item) {
            if (!item) {
                res.sendStatus(404);
                return next();
            }

            var subDoc = item.serviceline.id(req.params.service_line_id);
            if (!subDoc) {
                res.sendStatus(404);
                return next();
            }
            res.status(200).json(subDoc);
            return next();
        }).then(null, function(err) {
            return next(err);
        });

    }

};
