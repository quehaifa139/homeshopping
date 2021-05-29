var express = require('express');
var router = express.Router();
// 引入数据库
var connection = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  //查询语句
  var sql = 'select * from commodity';
  connection.query(sql,(err,result) =>{
    console.log(err);
    console.log(result);
    res.render('shop', { title: 'Express' ,data:result});
 })
});

module.exports = router;