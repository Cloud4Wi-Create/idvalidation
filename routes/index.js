var express = require('express');
var router = express.Router();
var got = require('got');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/validate', function (req, res) {
  
  var ticket = req.body.ticket;
  console.log("ticket");


  body = 'valid';
  res.status('200').send('body')

});

module.exports = router;
