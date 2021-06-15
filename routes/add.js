var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('add', { title: 'Express' });
  });

var connection = require("./user");

//向列表中添加数据  
router.post("/",function(req,res,next){
    var id = req.body.com_id;
    var name = req.body.com_name;
    var type = req.body.c_type;
    var price = req.body.price;
    var descript = req.body.descript;
    var image = req.body.image;
    connection.queryParam("insert into commodity(com_id,com_name,c_type,price,descript,image) values('"+id+"','"+name+"','"+ type+"','"+price+"','"+descript+"','"+image+"') ",function(err,results){
        if(err){
            res.send("新增失败"+err);
        }else {
            res.redirect("background");
        }
    });
});





module.exports = router;