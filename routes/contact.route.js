var express = require("express");
var contactCtrl = require("../controllers/contact.controller");
var router = express.Router();


// Contact us email to support
router.post("/contacting", function (req, res) {
    try {
      console.log("contact",req.body);
      contactCtrl.contactUs(req.body.from, req.body.email, req.body.subject , req.body.message).then(
        function (result) {
            res.send(result);
        },
        function (err) {
            console.log("route error", err);
            res.status(err.status).send(err.message);
        }
      );
    } catch (e) {
      res.status(500).send("Internal server error");
    }
  });

//   get all users contact us
  router.get('/allContacts', function(req, res) {

    // try to get all users events from the database
    // if successful, send them back to user
    try {
        contactCtrl.getAllContact().then(function (events) {
            res.send(events);
        }, function (err) {
           res.status(err.status).send(err.message);
        });

      // else it failed so send error back to user
    } catch (e) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;