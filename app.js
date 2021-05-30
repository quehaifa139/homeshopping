var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');


/* 引入body-parser */

var home_pageRouter = require('./routes/home_page');
var shopRouter = require('./routes/shop');
var productRouter = require('./routes/product');
var loginRouter = require('./routes/login');
//用户注册路由
var registerRouter = require('./routes/register');
//管理员注册路由
var merchantRouter = require('./routes/merchant');
//管理员登录路由
var merloginRouter = require('./routes/merlogin');
//后台路由
var backgroundRouter = require('./routes/background');
//新增路由
var addRouter = require('./routes/add');
//修改路由
var updateRouter = require('./routes/update');
//office路由
var officeRouter = require('./routes/office');
//light路由
var lightRouter = require('./routes/light');
//购物车路由
var shoppingCarRouter = require('./routes/shoppingCar');
//收藏路由
var collectRouter = require('./routes/collect');

var app = express();

// view engine setup
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',home_pageRouter);
app.use('/shop',shopRouter);
app.use('/product',productRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
//管理员注册
app.use('/merchant',merchantRouter);
//管理员登陆
app.use('/merlogin',merloginRouter);
//后台
app.use('/background',backgroundRouter);
//新增
app.use('/add',addRouter);
//修改
app.use('/update',updateRouter);
//办公用品页面
app.use('/office',officeRouter);
//LED灯
app.use('/light',lightRouter);
//购物车
app.use('/shoppingCar',shoppingCarRouter);
//我的收藏
app.use('/collect',collectRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
 console.log(err);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
