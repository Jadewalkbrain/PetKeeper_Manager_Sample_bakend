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

router.post('/id', function(req, res, next) {
  var id = req.body.id
  console.log(req.body)
  conn.connect(function(err) {
    if(err){
      console.log('err!')
    }
    conn.query(`SELECT * FROM petkeeper WHERE userid=?`,id, function (err, result, fields) {
       res.send(result)
    })
  })
});

module.exports = router;
