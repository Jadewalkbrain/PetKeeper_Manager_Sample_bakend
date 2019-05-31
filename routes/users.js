var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs"
});

/* GET users listing. */
router.post('/login', function(req, res, next) {
  var id = req.body.id;
  var pwd = req.body.pwd;
  conn.connect(function(err) {
    if(err){
      console.log('server err')
    }else{
    conn.query(`SELECT * FROM member where id =?`, id, function (err, result, fields) {
        if (err) {
            res.send({
                "failed": "error ocurred"
            })
        } else {
            if(result.length > 0) {
                if(result[0].pwd == pwd) {
                  console.log("로그인 성공");
                  res.send({msg:'success'});
                } else {
                  console.log("비번이 일치하지 않습니다. 다시 로그인하세요~");
                  res.send({msg:"fail"});
                }
            } else {
              console.log("아이디가 존재하지 않습니다. 다시 로그인하세요~");
              res.send({msg:"fail"});
            }
        }
    })
  }
  })
});

module.exports = router;
