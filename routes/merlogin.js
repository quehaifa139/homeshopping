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
    var sql = 'select name,password,mer_id from merchant where name =? and password = ? and mer_id = ?';
    connection.queryParam(sql,[name,password,mer_id],function(err,rows){
      if(err){
          console.log(err);
      }
      
        if(!rows[0]){
            return res.json({"status":-1});
         }else{
             res.json({"status":1});
         }
        
})
res.end;
})

module.exports = router;
