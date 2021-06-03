var express = require('express');
var router = express.Router();

//引入商家数据库
var connection = require("./user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('merlogin', { title: 'Express' });
});

//登录时取数据库中以存在的数据
router.post("/",function(req,res){
    var name = req.body.name;
    var password = req.body.password;
    var mer_id = req.body.mer_id;
    var sql = 'select name,password,mer_id from merchant where name ="'+name+'" and password = "'+password+'"and mer_id = "'+mer_id+'"';
    connection.query(sql,function(err,rows){
        if(err){
            console.log(err);
   }else{
       res.json({"status":1});
       res.render('merlogin',{datas:rows});
   }   
        
})
})

module.exports = router;
