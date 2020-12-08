var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log("Phone RESTful API server started on port: 3000")
  res.send("Hello man!")
});

module.exports = router;
