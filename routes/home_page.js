var express = require('express');
var router = express.Router();

var connection = require('./user');
/* GET home page. */
router.get('/', function(req, res, next) {
// 查询语句
var sql = 'select * from commodity'
//connection.query
connection.queryParam(sql,(err,result) =>{
  console.log(err);
  res.render('home_page', { title: 'Express',data:result });
});

router.post('/',function(res,req){
  var com_name = req.body.com_name;
  var price = req.body.price;
  var image = req.body.images;
  connection.queryParam("insert into shoppingCar(c_name,unit-price,images) values('"+com_name+"','"+price+"','"+image+"')",function(err,results){
    if(err){
        res.send("新增失败"+err);
    }else {
        res.render('homae_page');
    }
}); 

})

});


module.exports = router;
