const express = require('express');
const router = express.Router();
const Phone = require('../models/phone')

// const mongoose = require('mongoose');
// const Phone = mongoose.model('Phone');


//GET - Return all phones in the DB Collection
router.get('/phones', function (req, res, next) {
    Phone.find({}, function (err, phoneList) {
        if (err) {
            console.log("🤮🤮🤮🤮🤮🤮🤮🤮")
            res.json(err)
        } else {
            res.status(200).json(phoneList)
        }
    })
});





// exports.findAllTVShows = function(req, res) {
//     Phone.find(function(err, phones) {
//     if(err) res.send(500, err.message);

//     console.log('GET /phones')
//         res.status(200).jsonp(phones);
//     });
// };




// exports.findPhones = (req, res) => {
//     Phone.find((err, phones) => {
//         if(err) res.send(500, err.message);
//         console.log('GET /phones')
//         res.status(200).jsonp(phones)
//     }) 
// }

module.exports = router;