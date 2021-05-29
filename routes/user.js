var mysql = require("mysql");
var db = {};
db.query = function(sql,callback){
    var con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"abcd1234",
        database:"shopment"
    });
    
    con.query(sql,(err,results) =>{
       callback(err,results);
    })
    con.end();
}


//导出数据库

module.exports = db;