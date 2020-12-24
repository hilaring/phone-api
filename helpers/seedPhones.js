const mongoose = require('mongoose');
const Phone = require('../models/phone.js');

mongoose.connect('mongodb+srv://phoneuser:phonepassword@projects.rscf5.mongodb.net/PhonesAPI?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    w: "majority",
    family: 4
 });

Phone.collection.drop();

const phones = [
    {
        name: "iPhone 12",
        manufacturer: "Apple",
        description: "iPhone 12 from Apple, California",
        color: "Black",
        price: 809,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "6,1 inch OLED",
        processor: "Apple A14 Bionic",
        ram: 8
    },
    {
        name: "One Note 8 Pro",
        manufacturer: "One Note",
        description: "The new smartphone of One Note!",
        color: "White",
        price: 759,        
        imageFileName: "https://colombiansmart.com/wp-content/uploads/2020/06/redmi-note-8-pro.jpg",
        screen: "7,2 inch OLED",
        processor: "Ryzen 5",
        ram: 16
    },
    {
        name: "Samsung Galaxy S20",
        manufacturer: "Samsung",
        description: "The last smartphone from Samsung is out now",
        color: "Gray",
        price: 909,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "8,1 inch OLED",
        processor: "Samsung y8",
        ram: 8
    },
    {
        name: "iPhone 12",
        manufacturer: "Apple",
        description: "iPhone 12 from Apple, California",
        color: "Black",
        price: 809,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "6,1 inch OLED",
        processor: "Apple A14 Bionic",
        ram: 8
    },
    {
        name: "One Note 8 Pro",
        manufacturer: "One Note",
        description: "The new smartphone of One Note!",
        color: "White",
        price: 759,        
        imageFileName: "https://colombiansmart.com/wp-content/uploads/2020/06/redmi-note-8-pro.jpg",
        screen: "7,2 inch OLED",
        processor: "Ryzen 5",
        ram: 16
    },
    {
        name: "Samsung Galaxy S20",
        manufacturer: "Samsung",
        description: "The last smartphone from Samsung is out now",
        color: "Gray",
        price: 909,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "8,1 inch OLED",
        processor: "Samsung y8",
        ram: 8
    },
    {
        name: "iPhone 12",
        manufacturer: "Apple",
        description: "iPhone 12 from Apple, California",
        color: "Black",
        price: 809,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "6,1 inch OLED",
        processor: "Apple A14 Bionic",
        ram: 8
    },
    {
        name: "One Note 8 Pro",
        manufacturer: "One Note",
        description: "The new smartphone of One Note!",
        color: "White",
        price: 759,        
        imageFileName: "https://colombiansmart.com/wp-content/uploads/2020/06/redmi-note-8-pro.jpg",
        screen: "7,2 inch OLED",
        processor: "Ryzen 5",
        ram: 16
    },
    {
        name: "Samsung Galaxy S20",
        manufacturer: "Samsung",
        description: "The last smartphone from Samsung is out now",
        color: "Gray",
        price: 909,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "8,1 inch OLED",
        processor: "Samsung y8",
        ram: 8
    },
    {
        name: "iPhone 12",
        manufacturer: "Apple",
        description: "iPhone 12 from Apple, California",
        color: "Black",
        price: 809,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "6,1 inch OLED",
        processor: "Apple A14 Bionic",
        ram: 8
    },
    {
        name: "One Note 8 Pro",
        manufacturer: "One Note",
        description: "The new smartphone of One Note!",
        color: "White",
        price: 759,        
        imageFileName: "https://colombiansmart.com/wp-content/uploads/2020/06/redmi-note-8-pro.jpg",
        screen: "7,2 inch OLED",
        processor: "Ryzen 5",
        ram: 16
    },
    {
        name: "Samsung Galaxy S20",
        manufacturer: "Samsung",
        description: "The last smartphone from Samsung is out now",
        color: "Gray",
        price: 909,        
        imageFileName: "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
        screen: "8,1 inch OLED",
        processor: "Samsung y8",
        ram: 8
    },
]

Phone.create(phones, (err) => {
    if (err) { throw (err); }
    console.log(`Created ${phones.length} phones`);
    mongoose.connection.close();
});