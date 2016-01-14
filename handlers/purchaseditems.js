'use strict';
var _ = require('lodash');

var PurchasedItemSummary = require('../models/purchaseditemsummary');
var Error = require('../models/error');

/**
 * Operations on /purchaseditems
 */
module.exports = {

    /**
     * This endpoint returns top level information about all products purchased by a specific Cisco customer. This can include hardware, software and service products. The &#34;context&#34; of the customer MUST be available and encoded appropriately (E.G. OpenID Connect based federation encapsulated as JSON Web Tokens (JWT) ) either as an x-http-token or part of the response itself. For hardware and software, all major (standalone or parent) and minor (child) line item instance summary information will be returned. For contract, all unique contract summary information will be returned. The response will also include URLs of individual products with endpoints pointing to a specific hardware/software instance or contract for obtaining further details. If serial number for a hardware or software exists, then the url will take the form, &#34;https://api.cisco.com/purchaseditems/{product_id}/iteminstance/{instance_id}&#34;. If serial number and duplicate serial number do not exist, then url will take the form, &#34;https://api.cisco.com/purchaseditems/NA/iteminstance/{instance_id}&#34;. If the product_type is a &#34;service&#34;, then url will take the form, &#34;https://api.cisco.com/purchasedContractItems/{contract_id}&#34;.
     *
     * parameters: range
     */
    get: function getPurchasedItems(req, res, next) {

        var query = req.query;
        var filters = {};
        var fields = null;
        var options = {};

        _.forEach(query, function(item, key) {

            switch (key) {
                case 'fields':
                    if (item) {
                        fields = item.replace(',', ' ');
                    }
                    break;

                case 'sort':
                    if (item) {
                        options[key] = item.replace(',', ' ');
                    }
                    break;

                case 'offset':
                    if (!_.isUndefined(item) && !_.isNaN(_.parseInt(item))) {
                        options.skip = _.parseInt(item);
                    }
                    break;

                case 'limit':
                    if (!_.isUndefined(item) && !_.isNaN(_.parseInt(item))) {
                        options[key] = _.parseInt(item);
                    }
                    break;
                default:
                    filters[key] = item;
            }
        });

        if (_.isEmpty(options)) {
            options = null;
        }

        PurchasedItemSummary.find(filters, fields, options).exec().then(function(results) {
            res.status(200).json(results);
            return next();
        }).then(null, function(err) {
            return next(err);
        });

    }

};
