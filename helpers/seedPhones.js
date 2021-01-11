const mongoose = require('mongoose');
const Phone = require('../models/phone.js');

mongoose.connect(process.env.MONGODB_URI, { 
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
        color: "Blue Sky",
        price: 909,        
        imageFileName: "https://thumb.pccomponentes.com/w-530-530/articles/26/261980/samsung-galaxy-s20-plus-8-128gb-cloud-blue-libre.jpg",
        screen: "8,1 inch OLED",
        processor: "Samsung y8",
        ram: 8
    },
    {
        name: "Xiaomi Mi 10 Lite",
        manufacturer: "Xiaomi",
        description: "The last smartphone from Xiaomi, now with 5G!",
        color: "Silver",
        price: 809,        
        imageFileName: "https://codematrix.es/wp-content/uploads/2020/10/pms_1589533575.9153911-1.png",
        screen: "TrueColor A MOLED de 6.57",
        processor: "Qualcomm® Snapdragon",
        ram: 16
    },
    {
        name: "Nokia 3310",
        manufacturer: "Nokia",
        description: "The best phone of 2000, UNDESTROYABLE!",
        color: "Blue & Gry",
        price: 199,        
        imageFileName: "https://www.dhresource.com/0x0/f2/albu/g6/M00/39/09/rBVaR1pMlseAXo5GAAPBrUcdkrY558.jpg/2018-free-dhl-refurbished-original-nokia.jpg",
        screen: "7,2 inch OLED",
        processor: "Ryzen 5",
        ram: 16
    },
    {
        name: "Motorola Razer V3",
        manufacturer: "Motorola",
        description: "The best handphone flip phone.",
        color: "Silver",
        price: 199,        
        imageFileName: "https://cf.shopee.co.id/file/4e75d6c2efe7d49cd85d74e28f02a513",
        screen: "3,1 inch LCD",
        processor: "V3",
        ram: 0.5
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