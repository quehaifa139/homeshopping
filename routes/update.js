var express = require('express');
var router = express.Router();

//引入数据库
var connection = require("./user");

//进入修改页面
router.get("/toUpdate/:com_id",function(req,res,next){
    var id = req.params.com_id;
    var sql = "select * from commodity where  com_id = '"+ id +"'";
    connection.query(sql,function(err,rows){
        if(err){
            res.send("修改页面跳转失败");
        }else {
            // console.log(rows)
            res.render("update",{datas:rows});
        }
    });
});

router.post("/",function(req,res,next){
    var id = req.body.com_id;
    var name = req.body.com_name;
    var type = req.body.c_type;
    var price = req.body.price;
    var descript = req.body.descript;
    var sql = "update commodity set com_id = '"+ id +"',com_name = '"+ name +"',c_type = '"+ type +"',price = '"+ price +"',descript = '"+ descript +"'where com_id = '"+ id +"'";
    connection.query(sql,function(err,rows){
        if(err){
            res.send("修改失败 " + err);
        }else {
            res.redirect("/background");
        }
    });
});



module.exports = router;