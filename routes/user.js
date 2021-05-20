var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"abcd1234",
    database:"login_register",
})


connection.connect();
module.exports = connection;