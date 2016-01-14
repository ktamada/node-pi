'use strict';
var mongoose = require('mongoose');


var purchasedItemDetails = function() {

    var purchasedItemDetailsSchema = mongoose.Schema({
        _id: Number,
        smart_account_id: Number,
        virtual_account_id: Number,
        purchased_item_instance_url: String,
        serial_number: String,
        instance_id: Number,
        service_line_id: Number,
        service_line_name: String,
        instance_party_d: Number,
        item_name: String,
        item_type_flag: String,
        inventory_item_id: Number,
        dup_serial_number: String,
        quantity: Number,
        po_number: String,
        so_number: String,
        so_line_id: String,
        contract_number: String,
        contract_id: Number,
        install_location_id: Number,
        install_at_party_id: Number,
        warranty_type: String,
        warranty_start_date: String,
        warranty_end_date: String,
        bill_to_site_use_id: Number,
        bill_to_party_id: Number,
        product_type: String,
        contract_status: String,
        service_line_status: String,
        coverage_template_desc: String,
        product_family: String,
        support_party: String,
        creation_date: String,
        last_update_date: String,
        parent_instance_id: Number,
        instance_status_desc: String,
        item_type: String,
        children: [Number]
    });

    return mongoose.model('purchasedItemDetails', purchasedItemDetailsSchema);
};

module.exports = purchasedItemDetails();
