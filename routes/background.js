var express = require('express');
var router = express.Router();
//引入数据库
var connection = require("./user");


//进入管理员页面       
router.get('/', function(req, res, next) {
    connection.query("select * from commodity",function(err,rows){
        if(err){
            res.render("background",{title:"用户列表",datas:[]});
        }else {
            res.render("background",{title:"用户列表",datas:rows});
        }
    });
}); 

//实行查询操作
router.post("/search",function(req,res,next){
    var name = req.body.s_name;
    
    var sql = "select * from commodity";
    if(name){
        sql += " where com_name = '"+ name +"'";
    }
    sql.replace("and","where");
    connection.query(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.render("background",{title:"用户列表",datas:rows,s_name:name});
        }
    });
});

//实行删除操作
router.get("/:com_id",function(req,res){
    var id = req.params.com_id;
    connection.query("delete from commodity where com_id = " + id,function(err,rows){
        if(err){
            res.send("删除失败"+err);
        }else {
            res.redirect("backgroud");
        }
    });
});

module.exports = router;