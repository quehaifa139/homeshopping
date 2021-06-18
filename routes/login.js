var express = require('express');
var router = express.Router();

//引入数据库操作
var connection = require("./user");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.post("/",function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var query = 'select username,password from tab_user where username =? and password = ?'
        connection.queryParam(query,[username,password],function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            console.log(rows[0]);
            if(!rows[0]){
               return res.json({"status":-1});
            }else{
                res.json({"status":1});
            }
        })
        res.end;
    })

module.exports = router;