var express = require('express');
var router = express.Router();

const request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/validate', function (req, res) {
  var ticket = req.body.ticket;
  console.log("ticket");


/*
  //API call to external verificaiton of code, ticket, etc..
  //Expect a json response {"status":"valid"} or {"status":"invalid"}

  httpurl = 'http://www.mocky.io/v2/5ecca0603200002a00236205';
  request.post({
    url: httpurl,
    json: {
      ticket: ticket,
    },
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST'
  }, (error, response, body) => {
        if(error) {
          console.log("errore: "+error);
          console.log(`statusCode: ${response.statusCode}`)
            res.status(404).send(JSON.parse(error))
        }
        console.log("Tciket: " +JSON.stringify(body));
        var statuscode = response.statusCode;
        console.log("Status code: " +statuscode);
        console.log("Body: " +JSON.stringify(body.status));
        res.status(statuscode).send(body)
    });
    */


    // mock response for demo only
    if (ticket=="0603200002") {
      body = {"status":"valid"};
      res.status('200').send(body)
    }
    else {
      body = {"status":"invalid"};
      res.status('200').send(body)
    }


});

module.exports = router;
