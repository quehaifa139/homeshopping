var express = require('express');
var router = express.Router();

var connection = require("./user");
var formidable = require("formidable");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.post("/",function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var query = 'select * from register where username ="'+username+'" and password = "'+password+'"';
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }console.log(rows[0]);
            if(!rows[0]){
                res.json({"status":-1});
            }else{
                res.json({"status":1});
                res.redirect('/');
            }
        })
    })

module.exports = router;