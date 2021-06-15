var express = require('express');
var router = express.Router();
//引入数据库数据
var connection = require('./user');
/* GET product.html */
router.get('/', function(req, res, next) {
  var sql = 'select * from commodity';
  connection.queryParam(sql,(err,result) =>{
  res.render('product', { title: 'Express' ,data:result});
 })
});

module.exports = router;