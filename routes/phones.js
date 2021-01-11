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

//PUT Edit - Update the phone information
Api.put('/phones/:id', (req, res, next) => {
    const id = req.params.id;
    const phoneToUpdate = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        imageFileName: req.body.imageFileName,
        screen: req.body.screen,
        processor: req.body.processor,
        ram: req.body.ram
    };
    
    Phone.findByIdAndUpdate(id, phoneToUpdate)
    .then(() => {
        res.status(200);
        res.json({
            message: "Phone updated"
        })
    })
    .catch(err => {
        res.status(500);
        res.json(err);
    });
});

//DELETE - Remove phone from db.
Api.delete('/phones/:id', (req, res, next) => {
    const { id } = req.params;

    Phone.findByIdAndDelete(id)
    .then(result => {
        res.status(200);
        res.json(result)
        res.redirect('/');
    })
    .catch((err) => {
        res.status(500);
        res.json(err);
    })
})

module.exports = Api;