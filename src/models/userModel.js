var mongoose = require('mongoose');
var schema = mongoose.Schema({
    name : {type:String },
    email: {type:String }
})
module.exports = mongoose.model('users', schema);