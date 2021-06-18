
var express = require('express');
var router = express.Router();
//引入数据库
var connection = require("./user");

//进入管理员页面       
router.get('/', function(req, res, next) {
    connection.queryParam("select * from commodity order by create_time desc ",function(err,rows){
        if(err){
            res.render("background",{title:"商家列表",datas:[]});
        }else {
            res.render("background",{title:"商家列表",datas:rows});
        }
    }); 
}); 

//实行查询操作
router.post("/search",function(req,res,next){
    var search = req.body.search;
    //将用户输入值与数据库各列的值进行比较实现查询功能
    var sql = "select * from commodity where com_name like '"+"%"+search+"%" +"' or com_id like '"+"%"+search+"%" +"'or c_type like '"+"%"+search+"%" +"' or price like '"+"%"+search+"%" +"'or descript like'"+"%"+search+"%" +"' ";

    connection.queryParam(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.render("background",{title:"商家列表",datas:rows});
        }
    });
});
//实行清空操作
router.post("/empty",function(req,res,next){
    var sql = "delete from commodity";
    connection.queryParam(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.render("background",{title:"商家列表",datas:rows});
        }
     
});
});


//实行删除操作
router.get("/del/:id",function(req,res){
    var id = req.params.id;
    connection.queryParam("delete from commodity where id = '"+id+"' ",function(err,rows){
        if(err){
            console.log(err);
            
        }else {
            res.redirect("/background");
        }
    });
});


module.exports = router;
