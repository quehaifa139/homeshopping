var express = require('express');
var router = express.Router();

var connection = require("./user");
var formidable = require("formidable");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


router.post("/",function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var query = 'insert into register values("'+username+'","'+password+'")'
        connection.query(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            res.json({"status":1});
        })
    })

module.exports = router;