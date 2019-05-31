var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// var conn = mysql.createConnection({
//   host: "http://petkeeper-mysql.mysql.database.azure.com",
//   user: "jade",
//   password: "34400walk!",
//   database: "petkeeper_dev"
// });


var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs"
});

router.post('/data', function(req, res, next) {
  var device = req.body.device
  // var startDate = req.body.startDate
  // var endDate = req.body.endDate
  // console.log(req.body.device, req.body.startDate, req.body.endDate)
  conn.connect(function(err) {
    if(err){
      console.log('err!')
    }
    conn.query(`SELECT * FROM petkeeper WHERE device=?`,device,function (err, result, fields) {
       res.send(result)
    })
  })
});

module.exports = router;
