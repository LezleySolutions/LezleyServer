//create new model

var mongoose = require('mongoose'); //referring mongoose for creating user friendly class type model.

//defining schema for user model


var userSchema = new mongoose.Schema({
	name: String, 
    email: String,
    subject: String,
	message: String,
    created_at: {type: Date, default: Date.now},
})
module.exports = mongoose.model('contact', userSchema);