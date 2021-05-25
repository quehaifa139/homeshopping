var express = require('express');
var router = express.Router();

//引入商家数据库
var connection = require("./user");
var formidable = require("formidable");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('merlogin', { title: 'Express' });
});

//登录时取数据库中以存在的数据
router.post("/",function(req,res){
    var name = req.body.name;
    var password = req.body.password;
    var query = 'select name,password,mer_id from merchant where name ="'+name+'" and password = "'+password+'"';
    connection.query(query,function(err,rows){
        if(err){
            console.log(err);
            return;
        }console.log(rows[0]);
        if(!rows[0]){
           return res.json({"status":-1});
        }else{
            res.json({"status":1});
        }
    })
    res.end;
})


module.exports = router;
