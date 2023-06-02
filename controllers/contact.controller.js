var mongoose = require('mongoose');  
var ContactMdl = require('../models/contact.model');



module.exports = {

      // get all events from all users
      getAllContact: function () {

        return new Promise ((resolve, reject) => {

            ContactMdl.find(function (err, contact) {

                // if there's an error finding them
                // return the error and message
                if(err) {

                    return reject({
                        status: 500,
                        message: 'Internal Sever error'
                    });
                }

                // if no contact were found inform the user
                if(!contact) {
                    return reject({
                        status: 404,
                        message: 'contact not found'
                    })
                }

                // contact were found
                // send them back to user
                return resolve(contact);
            });
        });
    },


 contactUs : function( name , email ,  subject , message ){
    console.log(name , email ,  subject , message);
    return new Promise((resolve, reject) => {
        if (!name || !email ||  !subject || !message) {
            return reject({status: 401, message: 'Data Not Found'});
        }else{
            var NewData = new ContactMdl({
                name:name , email:email ,  subject:subject , message:message
            });
            NewData.save(function(err){
                if(err){
                    return reject({status: 500, message: 'Internal server error'});
                }
                return resolve(NewData);
            })
        }
    });
}
};


// const Contact = mongoose.model('contact', userSchema);
// module.exports= Contact;