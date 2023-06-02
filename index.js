const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();


// must be come fom env monodb url
mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017/Lezley' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>console.log('mongodb connect'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type: application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(cors());

// Routes
const contactRtl = require("./routes/contact.route");

// Controllers
const contactCtrl = require("./controllers/contact.controller");


app.use("/con",contactRtl);


const port = process.env.PORT || 5000;
const server = app.listen(port,()=> console.log(`Listening on port ${port}...`));




var Contact = mongoose.model("contact");