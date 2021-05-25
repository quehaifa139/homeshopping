var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"abcd1234",
    database:"shopment"
});

function que(sql,callback){
    connection.getConnection(function(err,conn){
        conn.query(sql, function (err,rows) {
            callback(err,rows);
            conn.release();
        });
    });
}

exports.que = que;

//导出数据库
connection.connect();
module.exports = connection;