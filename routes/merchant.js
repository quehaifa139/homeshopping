var express = require('express');
var router = express.Router();

//引入商家数据库
let connection = require("./user");



/* GET merchant. */
router.get('/', function(req, res, next) {
  res.render('merchant', { title: 'Express' });
});


//将注册信息添加到数据库中
router.post("/",function(req,res){
    var name = req.body.name;
    var password = req.body.password;
    var mer_id = req.body.mer_id;
    var phonenumber = req.body.phone;
    var a_query = 'insert into merchant values(?,?,?,?)'
    connection.queryParam(a_query,[name,password,mer_id,phonenumber],function(err,rows){
        if(err){
            console.log(err);
            return;
        }
        res.json({"status":1});
       return;
    })
    res.end;
})



module.exports = router;