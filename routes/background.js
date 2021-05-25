var express = require('express');
var router = express.Router();
//引入数据库
var connection = require("./user");


//进入管理员页面       
router.get('/', function(req, res, next) {
    connection.query("select * from commodity",function(err,rows){
        if(err){
            res.render("background",{title:"商家列表",datas:[]});
        }else {
            res.render("background",{title:"商家列表",datas:rows});
        }
    });
}); 

//实行查询操作
router.post("/",function(req,res,next){
    var id = req.body.com_id;
    var sql = "select * from commodity";
    if(id){
        sql += " where com_id = '"+ id +"'"  
    }
    sql.replace("and","where");
    connection.query(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.render("background",{title:"用户列表",datas:rows});
        }
    });
});

//实行删除操作
router.get("/del/:id",function(req,res){
    var id = req.params.id;
    connection.query("delete from commodity where id = '"+id+"' ",function(err,rows){
        if(err){
            console.log(err);
            res.send("删除失"+err);
        }else {
            res.redirect("/background");
        }
    });
});


module.exports = router;