const express = require('express');
const Api = express.Router();
const Phone = require('../models/phone')

//GET All - Return all phones in the DB Collection
Api.get('/phones', (req, res, next) => {
    Phone.find({})
        .then((phoneList) => {
            res.send(phoneList)
        })
        .catch((error) => {
            next(error)
        })
});


//GET Detail - Return the phone detail
Api.get('/phones/:id', (req, res, next) => {
    const { id } = req.params;
    Phone.findById(id)
        .then((phone) => {
            res.send(phone)
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = Api;