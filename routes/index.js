const express = require('express');
const router = express.Router();
// const findPhones = require('./phones')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log("Phone RESTful API server started on port: 3000")
  res.send("Hello man!")
  // res.send(findPhones());
});

module.exports = router;
