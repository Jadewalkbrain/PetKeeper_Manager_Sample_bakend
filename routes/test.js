var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs"
});

router.post("/id", function(req, res, next) {
  var id = req.body.id;
  console.log(id)
  conn.connect(function(err) {
    conn.query(`SELECT * FROM member`, function(err, result, fields) {
      res.send(result);
    });
  });
});

module.exports = router;
