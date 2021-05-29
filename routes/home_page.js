var express = require('express');
var router = express.Router();

var connection = require('./user');
/* GET home page. */
router.get('/', function(req, res, next) {
// 查询语句
var sql = 'select * from commodity'
//connection.query
connection.query(sql,(err,result) =>{
  console.log(err);
  res.render('home_page', { title: 'Express',data:result });
})

});


module.exports = router;
