var express = require('express');
var router = express.Router();

//引入数据库
var connection = require('./user');

router.get('/', function(req, res, next) {
 var sql = 'select * from shoppingCar';
   connection.query(sql,(err,result) =>{
       console.log(err);
    res.render('shoppingCar', { title: 'Express',data:result });
   })
});

module.exports = router;