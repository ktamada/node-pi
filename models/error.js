'use strict';
var mongoose = require('mongoose');


var Error = function() {

    var ErrorSchema = mongoose.Schema({
        code: Number,
        message: String,
        fields: String
    });

    return mongoose.model('Error', ErrorSchema);
};

module.exports = Error();
