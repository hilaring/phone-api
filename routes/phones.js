const express = require('express');
const Api = express.Router();
const Phone = require('../models/phone')

//GET - Return all phones in the DB Collection
Api.get('/phones', function (req, res, next) {
    Phone.find({}, function (err, phoneList) {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json(phoneList)
        }
    })
});

//GET - Return the detail phone
Api.get('/phones/:id'), function (req, res, next){
    
    var id = req.params;

    Phone.findById(id, function(err, phone){
        if(err){
            console.log(phone)
            res.json(err)
        } else {
            console.log(phone)
            // res.status(200).json(phone)
            res.render('index', { title: 'Express' });
        }
    })
}

module.exports = Api;