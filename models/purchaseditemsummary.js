'use strict';
var mongoose = require('mongoose');


var purchasedItemSummary = function() {

    var purchasedItemSummarySchema = mongoose.Schema({
        _id: Number,
        smart_account_id: Number,
        virtual_account_id: Number,
        product_id: String,
        instance_id: Number,
        service_line_id: Number,
        name: String,
        product_type: String,
        purchased_item_url: String,
        item_status: String,
        children: [{}]
    });

    return mongoose.model('purchasedItemSummary', purchasedItemSummarySchema);
};

module.exports = purchasedItemSummary();
